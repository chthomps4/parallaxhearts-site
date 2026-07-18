import { startNextServer } from "./next-server.mjs";

const server = await startNextServer();
const failures = [];

try {
  const response = await fetch(server.url);
  const expectedHeaders = {
    "x-content-type-options": "nosniff",
    "referrer-policy": "strict-origin-when-cross-origin",
    "x-frame-options": "SAMEORIGIN",
  };

  for (const [name, expected] of Object.entries(expectedHeaders)) {
    const actual = response.headers.get(name);
    if (actual !== expected) failures.push(`${name}: expected ${expected}, received ${actual}.`);
  }

  for (const name of ["content-security-policy", "permissions-policy", "strict-transport-security"]) {
    if (!response.headers.has(name)) failures.push(`${name}: missing.`);
  }

  const csp = response.headers.get("content-security-policy") ?? "";
  for (const directive of ["default-src 'self'", "object-src 'none'", "frame-ancestors 'self'"]) {
    if (!csp.includes(directive)) failures.push(`CSP is missing ${directive}.`);
  }
  if (/googlesyndication|pagead2|gstatic/.test(csp)) {
    failures.push("CSP still permits the removed advertising script origins.");
  }

  const redirect = await fetch(`${server.url}/story`, { redirect: "manual" });
  if (![301, 308].includes(redirect.status) || redirect.headers.get("location") !== "/project") {
    failures.push(`/story redirect is ${redirect.status} -> ${redirect.headers.get("location")}.`);
  }

  const missing = await fetch(`${server.url}/release-audit-missing-page`);
  if (missing.status !== 404) failures.push(`Unknown route returned ${missing.status}, expected 404.`);
  const missingHtml = await missing.text();
  if (!missingHtml.includes("This page slipped out of the archive")) {
    failures.push("Unknown route did not render the branded recovery page.");
  }
} finally {
  await server.close();
}

if (failures.length) {
  console.error("Header and error-state audit failures:");
  failures.forEach((failure) => console.error(`- ${failure}`));
  process.exitCode = 1;
} else {
  console.log("Security headers, canonical redirect, and branded 404 passed.");
}
