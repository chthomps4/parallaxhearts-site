import test from "node:test";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import {
  validatePoems,
  isPublished,
  publicPoem,
  isLocalReviewEnabled,
} from "../content/poetry.mjs";

const poems = JSON.parse(
  await readFile(new URL("../content/poems.json", import.meta.url), "utf8"),
);

test("content validates and nonpublished entries remain hidden", () => {
  validatePoems(poems);
  assert(poems.length >= 14);
  for (const status of ["draft", "approved", "archived"])
    assert(!isPublished({ ...poems[0], status }));
});
test("publication requires verified text, a valid date, and the published state", () => {
  const poem = {
    ...poems[0],
    status: "published",
    textVerified: true,
    publishedAt: "2026-11-05",
  };
  validatePoems([poem]);
  assert(isPublished(poem, new Date("2026-11-06")));
  assert(!isPublished(poem, new Date("2026-11-04")));
  assert(!isPublished(poem, new Date("2026-11-05T04:59:59Z")));
  assert(isPublished(poem, new Date("2026-11-05T05:00:00Z")));
  assert(!isPublished({ ...poem, status: "archived" }));
  assert.throws(() => validatePoems([{ ...poem, textVerified: false }]));
  assert.throws(() => validatePoems([{ ...poem, publishedAt: "2026-02-31" }]));
  assert.throws(() => validatePoems([{ ...poem, poemLines: [] }]));
});
test("private editorial notes never cross the public projection", () => {
  const projected = publicPoem({
    ...poems[0],
    sourceNotes: "PRIVATE_SENTINEL",
  });
  assert(!("sourceNotes" in projected));
  assert(!JSON.stringify(projected).includes("PRIVATE_SENTINEL"));
  assert.deepEqual(projected.poemLines, poems[0].poemLines);
});
test("review requires explicit opt-in, loopback host, and no hosted deployment", () => {
  const env = { PARALLAX_LOCAL_REVIEW: "true" };
  assert(isLocalReviewEnabled(env, "127.0.0.1:3002"));
  assert(isLocalReviewEnabled(env, "localhost:3002"));
  for (const host of [
    "www.parallaxhearts.org",
    "localhost.attacker.example",
    "127.0.0.1.attacker.example",
    "",
    null,
  ])
    assert(!isLocalReviewEnabled(env, host));
  assert(!isLocalReviewEnabled({}, "localhost"));
  assert(!isLocalReviewEnabled({ ...env, VERCEL_ENV: "preview" }, "localhost"));
  assert(!isLocalReviewEnabled({ ...env, VERCEL: "1" }, "localhost"));
});
test("unsafe artwork paths and duplicate slugs fail validation", () => {
  assert.throws(() =>
    validatePoems([{ ...poems[0], heroImage: "/images/../private.webp" }]),
  );
  assert.throws(() => validatePoems([poems[0], poems[0]]));
});
test("all twelve Collection II texts match the supplied Markdown character for character", async () => {
  const source = await readFile(
    new URL("../content/sources/collection-ii.md", import.meta.url),
    "utf8",
  );
  const blocks = [
    ...source.matchAll(/^### ([^\n]+)\n\n```text\n([\s\S]*?)\n```/gm),
  ];
  assert.equal(blocks.length, 12);
  for (const [, title, text] of blocks) {
    const poem = poems.find((item) => item.title === title);
    assert(poem, title);
    assert.equal(poem.poemLines.join("\n"), text, title);
  }
});
