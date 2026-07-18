import { spawn } from "node:child_process";
import { mkdir, readFile, rm } from "node:fs/promises";
import { resolve, sep } from "node:path";
import { lighthouseRoutes } from "./audit-config.mjs";
import { startNextServer } from "./next-server.mjs";

const categoryBudgets = {
  performance: 0.85,
  accessibility: 1,
  "best-practices": 0.95,
  seo: 0.95,
};

const auditBudgets = {
  "largest-contentful-paint": 4_000,
  "cumulative-layout-shift": 0.1,
  "total-byte-weight": 1_500_000,
};

const projectRoot = resolve(process.cwd());
const outputDir = resolve(projectRoot, ".lighthouseci");
if (!outputDir.startsWith(`${projectRoot}${sep}`)) {
  throw new Error("Lighthouse output must stay inside the project root.");
}

await rm(outputDir, { recursive: true, force: true });
await mkdir(outputDir, { recursive: true });

const lighthouseCli = resolve("node_modules/lighthouse/cli/index.js");
const server = await startNextServer();
const failures = [];

try {
  for (const [name, pathname] of lighthouseRoutes) {
    const reportPath = resolve(outputDir, `${name}.report.json`);
    const { exitCode, cliOutput } = await new Promise((resolveExit, reject) => {
      const child = spawn(
        process.execPath,
        [
          lighthouseCli,
          `${server.url}${pathname}`,
          "--quiet",
          "--output=json",
          `--output-path=${reportPath}`,
          "--only-categories=performance,accessibility,best-practices,seo",
          "--chrome-flags=--headless --no-sandbox",
        ],
        { stdio: ["ignore", "pipe", "pipe"] },
      );

      let output = "";
      child.stdout.on("data", (chunk) => {
        output += chunk;
      });
      child.stderr.on("data", (chunk) => {
        output += chunk;
      });

      child.once("error", reject);
      child.once("exit", (code) => resolveExit({ exitCode: code ?? 1, cliOutput: output }));
    });

    let report;
    try {
      report = JSON.parse(await readFile(reportPath, "utf8"));
    } catch {
      console.error(cliOutput);
      failures.push(`${name}: Lighthouse did not produce a readable report (exit ${exitCode}).`);
      continue;
    }

    const scores = Object.fromEntries(
      Object.keys(categoryBudgets).map((category) => [category, report.categories[category].score]),
    );
    const lcp = report.audits["largest-contentful-paint"].numericValue;
    const cls = report.audits["cumulative-layout-shift"].numericValue;
    const bytes = report.audits["total-byte-weight"].numericValue;

    console.log(
      `${name}: perf ${Math.round(scores.performance * 100)}, a11y ${Math.round(scores.accessibility * 100)}, best ${Math.round(scores["best-practices"] * 100)}, SEO ${Math.round(scores.seo * 100)}, LCP ${Math.round(lcp)}ms, CLS ${cls.toFixed(3)}, ${Math.round(bytes / 1024)} KiB`,
    );

    for (const [category, minimum] of Object.entries(categoryBudgets)) {
      if (scores[category] < minimum) {
        failures.push(`${name}: ${category} score ${scores[category]} is below ${minimum}.`);
      }
    }

    for (const [audit, maximum] of Object.entries(auditBudgets)) {
      const value = report.audits[audit].numericValue;
      if (value > maximum) failures.push(`${name}: ${audit} ${value} exceeds ${maximum}.`);
    }

    for (const audit of ["color-contrast", "heading-order", "errors-in-console"]) {
      if (report.audits[audit].score !== 1) failures.push(`${name}: ${audit} failed.`);
    }

    if (exitCode !== 0) {
      const windowsCleanupError =
        process.platform === "win32" && cliOutput.includes("destroyTmp") && cliOutput.includes("EPERM");
      if (windowsCleanupError) {
        console.warn(`${name}: report passed; Windows could not immediately remove Chrome's temporary profile.`);
      } else {
        console.error(cliOutput);
        failures.push(`${name}: Lighthouse exited ${exitCode}.`);
      }
    }
  }
} finally {
  await server.close();
}

if (failures.length) {
  console.error("\nLighthouse budget failures:");
  failures.forEach((failure) => console.error(`- ${failure}`));
  process.exitCode = 1;
} else {
  console.log("All Lighthouse budgets passed.");
}
