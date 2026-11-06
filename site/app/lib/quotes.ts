import "server-only";
import { cache } from "react";
import rawQuotes from "../../content/quotes.json";
import { validateQuotes, publicQuote } from "../../content/quotes.mjs";
import { isPublished } from "../../content/poetry.mjs";
import { isLocalReview } from "./poetry";

export type PublicQuote = {
  id: string;
  slug: string;
  title: string;
  text: string;
  themes: string[];
  collection: string;
  publishedAt: string | null;
  featured: boolean;
};
const quotes = validateQuotes(rawQuotes);
export function getPublishedQuotes(): PublicQuote[] {
  return quotes.filter((quote) => isPublished(quote)).map(publicQuote);
}
export const getVisibleQuotes = cache(async (): Promise<PublicQuote[]> => {
  const review = await isLocalReview();
  return quotes
    .filter(
      (quote) => isPublished(quote) || (review && quote.status !== "archived"),
    )
    .map(publicQuote);
});
