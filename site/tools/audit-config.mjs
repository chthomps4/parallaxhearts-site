import { readFileSync } from "node:fs";
import { isPublished, validatePoems } from "../content/poetry.mjs";
import { validateQuotes } from "../content/quotes.mjs";
const poems = validatePoems(
  JSON.parse(
    readFileSync(new URL("../content/poems.json", import.meta.url), "utf8"),
  ),
);

export const auditRoutes = [
  ["home", "/"],
  ["crown", "/crown-of-phases"],
  ["poetry", "/poetry"],
  ["geometry", "/sacred-geometry"],
  ["energy", "/energy-healing"],
  ["book", "/book"],
  ["about", "/about"],
  ["contact", "/contact"],
  ["graphic-novel", "/graphic-novel"],
  ["chapter-one", "/graphic-novel/chapter-one"],
  ["page-001", "/graphic-novel/chapter-one/page-001"],
  ["page-002", "/graphic-novel/chapter-one/page-002"],
  ["page-003", "/graphic-novel/chapter-one/page-003"],
  ["page-004", "/graphic-novel/chapter-one/page-004"],
  ["page-005", "/graphic-novel/chapter-one/page-005"],
  ["page-006", "/graphic-novel/chapter-one/page-006"],
  ["music", "/music"],
  ["project", "/project"],
  ["shop", "/shop"],
  ["support", "/support"],
  ["visuals", "/visuals"],
  ...poems
    .filter((poem) => isPublished(poem))
    .map((poem) => [poem.slug, `/poetry/${poem.slug}`]),
  ...(validateQuotes(
    JSON.parse(
      readFileSync(new URL("../content/quotes.json", import.meta.url), "utf8"),
    ),
  ).some((quote) => isPublished(quote))
    ? [["quotes", "/quotes"]]
    : []),
];

export const lighthouseRoutes = [
  ["home", "/"],
  ["crown", "/crown-of-phases"],
  ["poetry", "/poetry"],
  ["anchor-poem", "/poetry/the-golden-section"],
  ["geometry", "/sacred-geometry"],
  ["energy", "/energy-healing"],
  ["graphic-novel", "/graphic-novel"],
  ["reader", "/graphic-novel/chapter-one/page-001"],
  ["music", "/music"],
  ["project", "/project"],
  ["support", "/support"],
  ["contact", "/contact"],
];
