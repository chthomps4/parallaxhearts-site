import {
  isLocalReview,
  getVisiblePoems,
  getPublishedPoems,
} from "../lib/poetry";

export default async function ReviewNote() {
  if (!(await isLocalReview())) return null;
  if ((await getVisiblePoems()).length === getPublishedPoems().length)
    return null;
  return (
    <aside className="review-note" aria-label="Local editorial review">
      Local editorial review · Unpublished poems await final text verification
      and editorial approval. They are hidden from the public site.
    </aside>
  );
}
