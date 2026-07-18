import { spawn } from "node:child_process";
import { resolve } from "node:path";
import { auditRoutes } from "./audit-config.mjs";
import { startNextServer } from "./next-server.mjs";

const server = await startNextServer();
const failures = [];

try {
  for (const [name, pathname] of auditRoutes) {
    const response = await fetch(`${server.url}${pathname}`);
    const html = await response.text();
    const h1Count = (html.match(/<h1(?:\s|>)/gi) ?? []).length;

    if (response.status !== 200) {
      failures.push(`${name}: expected 200, received ${response.status}.`);
    }
    if (!response.headers.get("content-type")?.includes("text/html")) {
      failures.push(`${name}: response is not HTML.`);
    }
    if (h1Count !== 1) {
      failures.push(`${name}: expected one h1, found ${h1Count}.`);
    }
  }

  const linkinatorCli = resolve("node_modules/linkinator/build/src/cli.js");
  const exitCode = await new Promise((resolveExit, reject) => {
    const child = spawn(
      process.execPath,
      [
        linkinatorCli,
        server.url,
        "--recurse",
        "--skip",
        "^(?:mailto:|https?://(?!127\\.0\\.0\\.1(?::\\d+)?/))",
      ],
      { stdio: "inherit" },
    );

    child.once("error", reject);
    child.once("exit", (code) => resolveExit(code ?? 1));
  });

  if (exitCode !== 0) failures.push(`Linkinator exited ${exitCode}.`);
} finally {
  await server.close();
}

if (failures.length) {
  console.error("Route and link audit failures:");
  failures.forEach((failure) => console.error(`- ${failure}`));
  process.exitCode = 1;
} else {
  console.log(`${auditRoutes.length} routes and all reachable internal links passed.`);
}
