import test from "node:test";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import {
  parsePoemReview,
  parseQuoteReview,
  mergeReviewBatch,
} from "../content/crown-import.mjs";
import { validateQuotes, publicQuote } from "../content/quotes.mjs";
import { isPublished } from "../content/poetry.mjs";
const read = (name) =>
  readFile(new URL(`../content/${name}`, import.meta.url), "utf8");
const poems = JSON.parse(await read("poems.json"));
const quotes = JSON.parse(await read("quotes.json"));
const poemSource = await read("sources/new-poems-review.md");
const quoteSource = await read("sources/new-quotes-review.md");

test("review import defaults every new work to a held, undated draft", () => {
  const incoming = [
    ...parsePoemReview(poemSource),
    ...parseQuoteReview(quoteSource),
  ];
  assert.equal(incoming.length, 38);
  for (const item of incoming) {
    assert.equal(item.status, "draft");
    assert.equal(item.textVerified, false);
    assert.equal(item.publishedAt, null);
    assert(!isPublished(item));
  }
});
test("all eighteen staged poem texts and twenty fragments match their original review sources", () => {
  const poemBlocks = [
    ...poemSource.matchAll(/^## ([^\n]+)[\s\S]*?```text\n([\s\S]*?)\n```/gm),
  ];
  assert.equal(poemBlocks.length, 18);
  for (const [, title, text] of poemBlocks)
    assert.equal(
      poems.find((p) => p.title === title)?.poemLines.join("\n"),
      text,
      title,
    );
  const quoteBlocks = [
    ...quoteSource.matchAll(/^## (Q\d{2}) · ([^\n]+)[\s\S]*?^> ([^\n]+)/gm),
  ];
  assert.equal(quoteBlocks.length, 20);
  for (const [, id, title, text] of quoteBlocks) {
    const quote = quotes.find((item) => item.id === id);
    assert.equal(quote?.title, title);
    assert.equal(quote?.text, text);
  }
});
test("repeat imports preserve subsequent approvals and reject changed author text", () => {
  const incoming = parsePoemReview(poemSource);
  const approved = {
    ...incoming[0],
    status: "published",
    textVerified: true,
    publishedAt: "2026-11-06",
  };
  const first = mergeReviewBatch([approved], incoming, "poemLines");
  assert.deepEqual(first[0], approved);
  assert.deepEqual(mergeReviewBatch(first, incoming, "poemLines"), first);
  assert.throws(() =>
    mergeReviewBatch(
      [{ ...approved, poemLines: ["An unapproved correction"] }],
      incoming,
      "poemLines",
    ),
  );
  assert.throws(() => parsePoemReview("Incomplete source"));
});
test("fragment publication requires verification, a real date, and the release date", () => {
  validateQuotes(quotes);
  const quote = {
    ...quotes[0],
    status: "published",
    textVerified: true,
    publishedAt: "2026-11-07",
  };
  validateQuotes([quote]);
  assert(!isPublished(quote, new Date("2026-11-06T12:00:00Z")));
  assert(isPublished(quote, new Date("2026-11-07T12:00:00Z")));
  assert.throws(() => validateQuotes([{ ...quote, textVerified: false }]));
  assert.throws(() =>
    validateQuotes([{ ...quote, publishedAt: "2026-02-31" }]),
  );
  assert.throws(() => validateQuotes([quote, quote]));
});
test("fragment projections exclude social captions, suggested formats, and private source notes", () => {
  const safe = publicQuote({
    ...quotes[0],
    sourceNotes: "PRIVATE_SOURCE",
    socialCaption: "PRIVATE_CAPTION",
  });
  assert.equal(safe.text, quotes[0].text);
  for (const field of [
    "sourceNotes",
    "socialCaption",
    "socialFormat",
    "status",
    "textVerified",
  ])
    assert(!(field in safe));
  assert(!JSON.stringify(safe).includes("PRIVATE_"));
});
