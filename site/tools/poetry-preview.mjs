import { spawn } from "node:child_process";
import { fileURLToPath } from "node:url";

if (process.env.VERCEL || process.env.VERCEL_ENV)
  throw new Error(
    "Editorial review is restricted to a local machine, never a hosted deployment.",
  );
const production = process.argv.includes("--production");
const child = spawn(
  process.execPath,
  [
    fileURLToPath(
      new URL("../node_modules/next/dist/bin/next", import.meta.url),
    ),
    production ? "start" : "dev",
    "--hostname",
    "127.0.0.1",
    "--port",
    production ? "3002" : "3000",
  ],
  {
    cwd: fileURLToPath(new URL("..", import.meta.url)),
    env: { ...process.env, PARALLAX_LOCAL_REVIEW: "true" },
    stdio: "inherit",
  },
);
child.once("exit", (code) => {
  process.exitCode = code ?? 1;
});
for (const signal of ["SIGINT", "SIGTERM"])
  process.on(signal, () => child.kill(signal));
