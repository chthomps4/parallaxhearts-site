// Markdown is the supplied source for this batch; the referenced companion JSON was not attached.
export function parsePoemReview(source) {
  const blocks = [
    ...source.matchAll(
      /^## ([^\n]+)\n\*\*Theme:\*\* ([^\n]+?) · \*\*Slug:\*\* `([^`]+)`\n\n```text\n([\s\S]*?)\n```\n\n\*\*Editorial intent:\*\* ([^\n]+)\n\*\*Visual direction:\*\* ([^\n]+)/gm,
    ),
  ];
  if (blocks.length !== 18)
    throw new Error(
      `Expected 18 complete poem blocks; found ${blocks.length}.`,
    );
  return blocks.map(([, title, theme, slug, text, intent, visual], index) => ({
    slug,
    title,
    poemLines: text.split("\n"),
    summary: intent,
    collection: "Crown of Phases",
    themes: [theme],
    form: "Free verse",
    status: "draft",
    textVerified: false,
    publishedAt: null,
    heroImage: null,
    imageAlt: "",
    shareImage: null,
    featured: index < 2,
    sourceNotes: `November 6 batch, transcribed verbatim from ALL_18_NEW_POEMS_REVIEW.md. Owner review and publication approval pending. Editorial intent: ${intent} Visual direction, internal only: ${visual}`,
  }));
}

export function parseQuoteReview(source) {
  const blocks = [
    ...source.matchAll(
      /^## (Q\d{2}) · ([^\n]+)\n\*\*Theme:\*\* ([^\n]+?)  \|  \*\*Format:\*\* ([^\n]+)\n\n> ([^\n]+)\n\n\*\*Optional social caption:\*\* ([^\n]+)/gm,
    ),
  ];
  if (blocks.length !== 20)
    throw new Error(
      `Expected 20 complete quote blocks; found ${blocks.length}.`,
    );
  return blocks.map(
    ([, id, title, theme, socialFormat, text, socialCaption]) => ({
      id,
      slug: title
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-|-$/g, ""),
      title,
      text,
      collection: "Crown of Phases",
      themes: [theme],
      status: "draft",
      textVerified: false,
      publishedAt: null,
      featured: id === "Q13",
      socialFormat,
      socialCaption,
      sourceNotes:
        "November 6 batch; exact text from ALL_20_QUOTES_REVIEW.md. Owner wording review and publication approval pending. Social captions and format suggestions remain internal.",
    }),
  );
}

export function mergeReviewBatch(existing, incoming, textKey) {
  const merged = [...existing];
  for (const item of incoming) {
    const previous = merged.find((record) => record.slug === item.slug);
    if (!previous) {
      merged.push(item);
      continue;
    }
    if (
      previous.title !== item.title ||
      JSON.stringify(previous[textKey]) !== JSON.stringify(item[textKey])
    )
      throw new Error(
        `Conflicting existing text for ${item.slug}; review it instead of overwriting.`,
      );
    // Preserve subsequent approvals, dates, artwork, and editorial changes on repeat imports.
  }
  return merged;
}
