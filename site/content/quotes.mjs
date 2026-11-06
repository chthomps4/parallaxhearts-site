import { editorialStates } from "./poetry.mjs";

export function validateQuotes(quotes) {
  if (!Array.isArray(quotes)) throw new Error("Quotes must be an array.");
  const slugs = new Set(),
    ids = new Set();
  for (const quote of quotes) {
    const fail = (message) => {
      throw new Error(`${quote.slug || "unnamed quote"}: ${message}`);
    };
    if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(quote.slug) || slugs.has(quote.slug))
      fail("invalid or duplicate slug");
    if (!/^Q\d{2,}$/.test(quote.id) || ids.has(quote.id))
      fail("invalid or duplicate id");
    slugs.add(quote.slug);
    ids.add(quote.id);
    for (const field of ["title", "text", "collection", "sourceNotes"])
      if (typeof quote[field] !== "string" || !quote[field].trim())
        fail(`${field} is required`);
    if (
      !Array.isArray(quote.themes) ||
      !quote.themes.length ||
      quote.themes.some((theme) => typeof theme !== "string" || !theme.trim())
    )
      fail("themes are required");
    if (!editorialStates.includes(quote.status))
      fail("invalid editorial status");
    if (
      typeof quote.textVerified !== "boolean" ||
      typeof quote.featured !== "boolean"
    )
      fail("verification and featured flags are required");
    if (
      quote.publishedAt !== null &&
      (!/^\d{4}-\d{2}-\d{2}$/.test(quote.publishedAt) ||
        Number.isNaN(Date.parse(quote.publishedAt)) ||
        new Date(quote.publishedAt).toISOString().slice(0, 10) !==
          quote.publishedAt)
    )
      fail("invalid publication date");
    if (
      quote.status === "published" &&
      (!quote.textVerified || !quote.publishedAt)
    )
      fail("publication requires verified text and an approved date");
  }
  return quotes;
}

export function publicQuote(quote) {
  const { id, slug, title, text, themes, collection, publishedAt, featured } =
    quote;
  return { id, slug, title, text, themes, collection, publishedAt, featured };
}
