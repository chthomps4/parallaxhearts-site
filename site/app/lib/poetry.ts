import "server-only";
import { cache } from "react";
import { headers } from "next/headers";
import rawPoems from "../../content/poems.json";
import {
  isLocalReviewEnabled,
  isPublished,
  publicPoem,
  validatePoems,
} from "../../content/poetry.mjs";

export type PublicPoem = {
  slug: string;
  title: string;
  poemLines: string[];
  summary: string;
  collection: string;
  themes: string[];
  form: string;
  publishedAt: string | null;
  heroImage: string | null;
  imageAlt: string;
  imageWidth?: number | null;
  imageHeight?: number | null;
  shareImage: string | null;
  featured: boolean;
};

const poems: (PublicPoem & {
  status: string;
  textVerified: boolean;
  sourceNotes: string;
})[] = validatePoems(rawPoems);

export const isLocalReview = cache(async () => {
  if (
    process.env.PARALLAX_LOCAL_REVIEW !== "true" ||
    process.env.VERCEL ||
    process.env.VERCEL_ENV
  )
    return false;
  return isLocalReviewEnabled(process.env, (await headers()).get("host"));
});

export function getPublishedPoems(): PublicPoem[] {
  return poems.filter((poem) => isPublished(poem)).map(publicPoem);
}

export const getVisiblePoems = cache(async (): Promise<PublicPoem[]> => {
  const review = await isLocalReview();
  return poems
    .filter(
      (poem) =>
        isPublished(poem) ||
        (review &&
        poem.status !== "archived" &&
          poem.poemLines.some((line) => line.trim())),
    )
    .map(publicPoem);
});

export async function getVisiblePoem(slug: string) {
  return (await getVisiblePoems()).find((poem) => poem.slug === slug);
}
