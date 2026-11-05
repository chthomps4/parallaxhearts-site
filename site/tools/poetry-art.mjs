import { mkdir, readFile, copyFile, access } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import sharp from "sharp";
import { isPublished } from "../content/poetry.mjs";

const [input, slug, ...flags] = process.argv.slice(2);
if (!input || !/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug || ""))
  throw new Error(
    "Usage: npm run poetry:art -- /path/to/original.png poem-slug [--publish]",
  );
const poems = JSON.parse(
  await readFile(new URL("../content/poems.json", import.meta.url), "utf8"),
);
const poem = poems.find((item) => item.slug === slug);
if (!poem) throw new Error("Unknown poem slug. No artwork was written.");
const privateDirectory = new URL("../content/artwork/", import.meta.url);
await mkdir(privateDirectory, { recursive: true });
const held = new URL(`${slug}.webp`, privateDirectory);
let exists = false;
try {
  await access(held);
  exists = true;
} catch (error) {
  if (error.code !== "ENOENT") throw error;
}
if (exists && !flags.includes("--publish"))
  throw new Error(
    "Held artwork already exists. Preserve it or rename it before importing a replacement.",
  );
if (!exists) {
  await sharp(input)
    .rotate()
    .resize({ width: 1400, withoutEnlargement: true })
    .webp({ quality: 88 })
    .toFile(fileURLToPath(held));
  console.log(
    `Optimized ${slug}.webp in private content/artwork/. No public asset created.`,
  );
}
if (flags.includes("--publish")) {
  if (!isPublished(poem))
    throw new Error(
      "Public artwork requires an explicitly approved, text-verified published poem. Optimized file remains private.",
    );
  const directory = new URL("../public/images/poetry/", import.meta.url);
  await mkdir(directory, { recursive: true });
  const destination = new URL(`${slug}.webp`, directory);
  await copyFile(held, destination, 1);
  console.log(
    `Public asset created. Set heroImage to /images/poetry/${slug}.webp and write imageAlt after inspecting it.`,
  );
}
