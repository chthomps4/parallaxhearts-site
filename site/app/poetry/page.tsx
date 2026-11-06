import Link from "next/link";
import type { Metadata } from "next";
import { buildMetadata } from "../lib/seo";
import { getVisiblePoems, isLocalReview } from "../lib/poetry";
import PoetryIndex from "../components/PoetryIndex";
import ReviewNote from "../components/ReviewNote";
import Arrow from "../components/Arrow";
import LiteraryNavigation from "../components/LiteraryNavigation";

export const dynamic = "force-dynamic";
export async function generateMetadata(): Promise<Metadata> {
  return {
    ...buildMetadata({
      title: "Poetry | Parallax Hearts",
      description:
        "Poetry from Parallax Hearts: ordinary moments, lunar imagery, and the patterns we notice in ourselves.",
      path: "/poetry",
      image: "/opengraph-image",
    }),
    ...((await isLocalReview()) && { robots: { index: false, follow: false } }),
  };
}
export default async function PoetryPage() {
  const poems = await getVisiblePoems();
  return (
    <main className="publication-page">
      <ReviewNote />
      <header className="editorial-container archive-intro">
        <p className="editorial-label">The poetry archive</p>
        <h1>
          A few words.
          <br />
          <em>A wider world.</em>
        </h1>
        <p className="hero-deck">
          Original poems from Parallax Hearts. Take your time.
        </p>
        <LiteraryNavigation active="poetry" />
      </header>
      <section className="parchment-band">
        <div className="editorial-container">
          {poems.length ? (
            <PoetryIndex poems={poems} />
          ) : (
            <div className="publication-note">
              <h2>Before the first page turns.</h2>
              <p>
                The first Crown of Phases poems are being prepared for
                publication. In the meantime, explore the collection’s ideas,
                imagery, and approach.
              </p>
              <Link className="text-link" href="/crown-of-phases">
                Enter Crown of Phases <Arrow />
              </Link>
              <Link className="text-link" href="/sacred-geometry">
                Read about sacred geometry <Arrow />
              </Link>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
