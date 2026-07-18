import { spawn } from "node:child_process";
import { once } from "node:events";
import { createServer } from "node:net";
import { resolve } from "node:path";

const host = "127.0.0.1";

function findOpenPort() {
  return new Promise((resolvePort, reject) => {
    const probe = createServer();

    probe.once("error", reject);
    probe.listen(0, host, () => {
      const address = probe.address();

      if (!address || typeof address === "string") {
        probe.close();
        reject(new Error("Unable to reserve a local audit port."));
        return;
      }

      probe.close((error) => {
        if (error) reject(error);
        else resolvePort(address.port);
      });
    });
  });
}

function delay(milliseconds) {
  return new Promise((resolveDelay) => setTimeout(resolveDelay, milliseconds));
}

export async function startNextServer() {
  const port = await findOpenPort();
  const url = `http://${host}:${port}`;
  const nextCli = resolve("node_modules/next/dist/bin/next");
  const child = spawn(
    process.execPath,
    [nextCli, "start", "--hostname", host, "--port", String(port)],
    {
      cwd: process.cwd(),
      env: { ...process.env, NODE_ENV: "production" },
      stdio: ["ignore", "pipe", "pipe"],
    },
  );

  let output = "";
  const capture = (chunk) => {
    output = `${output}${chunk}`.slice(-20_000);
  };

  child.stdout.on("data", capture);
  child.stderr.on("data", capture);

  const deadline = Date.now() + 30_000;
  while (Date.now() < deadline) {
    if (child.exitCode !== null) {
      throw new Error(`Next.js exited before it became ready.\n${output}`);
    }

    try {
      const response = await fetch(url, { redirect: "manual" });
      if (response.status < 500) break;
    } catch {
      // The server is still starting.
    }

    await delay(250);
  }

  if (Date.now() >= deadline) {
    child.kill();
    throw new Error(`Timed out waiting for Next.js.\n${output}`);
  }

  let closed = false;
  return {
    url,
    async close() {
      if (closed || child.exitCode !== null) return;
      closed = true;
      child.kill();

      await Promise.race([once(child, "exit"), delay(5_000)]);
      if (child.exitCode === null) child.kill("SIGKILL");
    },
  };
}
