export const editorialStates = ["draft", "approved", "published", "archived"];

export function validatePoems(poems) {
  if (!Array.isArray(poems)) throw new Error("Poems must be an array.");
  const slugs = new Set();
  for (const poem of poems) {
    const fail = (message) => {
      throw new Error(`${poem.slug || "unnamed poem"}: ${message}`);
    };
    if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(poem.slug))
      fail("use a safe kebab-case slug");
    if (slugs.has(poem.slug)) fail("duplicate slug");
    slugs.add(poem.slug);
    for (const key of [
      "title",
      "summary",
      "collection",
      "form",
      "sourceNotes",
    ]) {
      if (typeof poem[key] !== "string" || !poem[key].trim())
        fail(`${key} is required`);
    }
    if (!editorialStates.includes(poem.status))
      fail("invalid editorial status");
    if (
      !Array.isArray(poem.poemLines) ||
      poem.poemLines.some((line) => typeof line !== "string")
    )
      fail("poemLines must contain strings; empty strings separate stanzas");
    if (
      !Array.isArray(poem.themes) ||
      !poem.themes.length ||
      poem.themes.some((theme) => typeof theme !== "string" || !theme.trim())
    )
      fail("themes are required");
    if (
      typeof poem.featured !== "boolean" ||
      typeof poem.textVerified !== "boolean"
    )
      fail("featured and textVerified must be booleans");
    if (typeof poem.imageAlt !== "string") fail("imageAlt must be a string");
    for (const key of ["heroImage", "shareImage"]) {
      if (
        poem[key] !== null &&
        (typeof poem[key] !== "string" ||
          !/^\/images\/poetry\/[a-z0-9-]+\.(webp|png|jpg)$/.test(poem[key]))
      )
        fail(`${key} must be null or a local /images/poetry/ image`);
    }
    if (poem.heroImage && !poem.imageAlt.trim())
      fail("artwork requires meaningful imageAlt");
    if (
      poem.heroImage &&
      (!Number.isInteger(poem.imageWidth) ||
        !Number.isInteger(poem.imageHeight) ||
        poem.imageWidth <= 0 ||
        poem.imageHeight <= 0)
    )
      fail("artwork requires its actual positive imageWidth and imageHeight");
    if (
      poem.publishedAt !== null &&
      (!/^\d{4}-\d{2}-\d{2}$/.test(poem.publishedAt) ||
        Number.isNaN(Date.parse(poem.publishedAt)) ||
        new Date(poem.publishedAt).toISOString().slice(0, 10) !==
          poem.publishedAt)
    )
      fail("publishedAt must be null or a real YYYY-MM-DD date");
    if (poem.status === "published") {
      if (!poem.textVerified)
        fail("canonical text must be verified before publishing");
      if (!poem.poemLines.some((line) => line.trim()))
        fail("published poem cannot be empty");
      if (!poem.publishedAt)
        fail("published poem needs an approved publication date");
    }
  }
  return poems;
}

const publicationCalendar = new Intl.DateTimeFormat("en-US", { timeZone: "America/New_York", year: "numeric", month: "2-digit", day: "2-digit" });
export function isPublished(poem, now = new Date()) {
  const parts = Object.fromEntries(publicationCalendar.formatToParts(now).map(({ type, value }) => [type, value]));
  const today = `${parts.year}-${parts.month}-${parts.day}`;
  return (
    poem.status === "published" &&
    poem.textVerified === true &&
    Boolean(poem.publishedAt) &&
    poem.publishedAt <= today
  );
}

export function isLocalReviewEnabled(environment, host) {
  if (
    environment.PARALLAX_LOCAL_REVIEW !== "true" ||
    environment.VERCEL ||
    environment.VERCEL_ENV
  )
    return false;
  return /^(localhost|127\.0\.0\.1|\[::1\])(?::\d+)?$/.test(host || "");
}

// Only this projection may cross the Server/Client boundary. Never serialize sourceNotes.
export function publicPoem(poem) {
  const {
    slug,
    title,
    poemLines,
    summary,
    collection,
    themes,
    form,
    publishedAt,
    heroImage,
    imageAlt,
    imageWidth,
    imageHeight,
    shareImage,
    featured,
  } = poem;
  return {
    slug,
    title,
    poemLines,
    summary,
    collection,
    themes,
    form,
    publishedAt,
    heroImage,
    imageAlt,
    imageWidth,
    imageHeight,
    shareImage,
    featured,
  };
}
