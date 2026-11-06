import {
  isLocalReview,
  getVisiblePoems,
  getPublishedPoems,
} from "../lib/poetry";
import { getVisibleQuotes, getPublishedQuotes } from "../lib/quotes";

export default async function ReviewNote() {
  if (!(await isLocalReview())) return null;
  if (
    (await getVisiblePoems()).length === getPublishedPoems().length &&
    (await getVisibleQuotes()).length === getPublishedQuotes().length
  )
    return null;
  return (
    <aside className="review-note" aria-label="Local editorial review">
      Local editorial review · Unpublished poems and fragments await final text
      verification and editorial approval. They are hidden from the public site.
    </aside>
  );
}
