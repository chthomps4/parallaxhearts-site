import { readFile, writeFile } from "node:fs/promises";
import {
  parsePoemReview,
  parseQuoteReview,
  mergeReviewBatch,
} from "../content/crown-import.mjs";
import { validatePoems } from "../content/poetry.mjs";
import { validateQuotes } from "../content/quotes.mjs";

const root = new URL("../content/", import.meta.url);
const poems = JSON.parse(await readFile(new URL("poems.json", root), "utf8"));
const quotes = JSON.parse(await readFile(new URL("quotes.json", root), "utf8"));
const poemSource = await readFile(
  new URL("sources/new-poems-review.md", root),
  "utf8",
);
const quoteSource = await readFile(
  new URL("sources/new-quotes-review.md", root),
  "utf8",
);
const nextPoems = validatePoems(
  mergeReviewBatch(poems, parsePoemReview(poemSource), "poemLines"),
);
const nextQuotes = validateQuotes(
  mergeReviewBatch(quotes, parseQuoteReview(quoteSource), "text"),
);
// Validate both merges before writing either destination. No existing entry is replaced.
for (const [name, before, after] of [
  ["poems", poems, nextPoems],
  ["quotes", quotes, nextQuotes],
]) {
  if (JSON.stringify(before) !== JSON.stringify(after))
    await writeFile(
      new URL(`${name}.json`, root),
      JSON.stringify(after, null, 2) + "\n",
    );
  console.log(
    `${name}: ${after.length - before.length} added; ${before.length} existing entries preserved.`,
  );
}
