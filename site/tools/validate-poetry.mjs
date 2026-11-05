import { readFile, access } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { validatePoems, isPublished } from "../content/poetry.mjs";
import sharp from "sharp";
const poems = validatePoems(
  JSON.parse(
    await readFile(new URL("../content/poems.json", import.meta.url), "utf8"),
  ),
);
for (const poem of poems) {
  for (const field of ["heroImage", "shareImage"])
    if (poem[field])
      await access(
        fileURLToPath(new URL(`../public${poem[field]}`, import.meta.url)),
      );
  if (poem.heroImage) {
    const image = await sharp(
      fileURLToPath(new URL(`../public${poem.heroImage}`, import.meta.url)),
    ).metadata();
    if (image.width !== poem.imageWidth || image.height !== poem.imageHeight)
      throw new Error(
        `${poem.slug}: recorded image dimensions do not match the file`,
      );
  }
  if (poem.shareImage) {
    const image = await sharp(
      fileURLToPath(new URL(`../public${poem.shareImage}`, import.meta.url)),
    ).metadata();
    if (image.width !== 1200 || image.height !== 630)
      throw new Error(`${poem.slug}: shareImage must be 1200×630`);
  }
}
console.log(
  `Validated ${poems.length} poems; ${poems.filter((poem) => isPublished(poem)).length} public, ${poems.filter((poem) => !isPublished(poem)).length} held. Source notes remain internal.`,
);
