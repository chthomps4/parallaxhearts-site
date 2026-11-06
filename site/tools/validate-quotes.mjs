import { readFile } from "node:fs/promises";
import { validateQuotes } from "../content/quotes.mjs";
import { isPublished } from "../content/poetry.mjs";
const quotes = validateQuotes(
  JSON.parse(
    await readFile(new URL("../content/quotes.json", import.meta.url), "utf8"),
  ),
);
console.log(
  `Validated ${quotes.length} quotes; ${quotes.filter((quote) => isPublished(quote)).length} public. Editorial captions remain internal.`,
);
