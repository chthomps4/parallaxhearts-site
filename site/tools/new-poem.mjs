import { readFile, writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { validatePoems } from "../content/poetry.mjs";

const [slug, ...words] = process.argv.slice(2);
if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug || "") || !words.length) {
  console.error('Usage: npm run new-poem -- safe-slug "Exact poem title"');
  process.exit(1);
}
const path = fileURLToPath(new URL("../content/poems.json", import.meta.url));
const poems = JSON.parse(await readFile(path, "utf8"));
if (poems.some((poem) => poem.slug === slug))
  throw new Error("That slug already exists. No file was changed.");
poems.push({
  slug,
  title: words.join(" "),
  poemLines: [],
  summary: "Replace with an approved, factual summary.",
  collection: "Crown of Phases",
  themes: ["Human Moments"],
  form: "Free verse",
  status: "draft",
  publishedAt: null,
  heroImage: null,
  imageAlt: "",
  shareImage: null,
  featured: false,
  textVerified: false,
  sourceNotes:
    "Record canonical text source and owner approval here before publishing.",
});
validatePoems(poems);
await writeFile(path, `${JSON.stringify(poems, null, 2)}\n`);
console.log(
  `Created ${slug} as a draft. Add exact text to poemLines. No publication state or date was assigned.`,
);
