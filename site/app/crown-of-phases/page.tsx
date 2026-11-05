import Link from "next/link";
import type { Metadata } from "next";
import { buildMetadata } from "../lib/seo";
import { getVisiblePoems, isLocalReview } from "../lib/poetry";
import LunarArt from "../components/LunarArt";
import PoetryShelf from "../components/PoetryShelf";
import ReviewNote from "../components/ReviewNote";
import Arrow from "../components/Arrow";
import FeaturedPoem from "../components/FeaturedPoem";

export const dynamic = "force-dynamic";
export async function generateMetadata(): Promise<Metadata> {
  return {
    ...buildMetadata({
      title: "Crown of Phases | Parallax Hearts",
      description:
        "Original poetry and visual writing exploring lunar imagery, inner sovereignty, sacred geometry, and ordinary human moments.",
      path: "/crown-of-phases",
      image: "/opengraph-image",
    }),
    ...((await isLocalReview()) && { robots: { index: false, follow: false } }),
  };
}

export default async function CrownOfPhases() {
  const poems = await getVisiblePoems();
  const anchor = poems.find((poem) => poem.slug === "the-golden-section");
  return (
    <main className="publication-page">
      <ReviewNote />
      <section className="editorial-container collection-hero">
        <div>
          <p className="editorial-label">A Parallax Hearts collection</p>
          <h1>
            Crown
            <br />
            <em>of Phases</em>
          </h1>
          <p className="hero-deck">
            Poems for the sovereign, the curious, and the beautifully
            unfinished.
          </p>
          <p className="editorial-copy">
            An ordinary evening. A change of mind. A small act of
            self-recognition. This collection brings lunar imagery and geometric
            patterns into conversation with the things we live through.
          </p>
          <Link
            className="copper-button"
            href={poems.length ? "#collection-poems" : "#collection-note"}
          >
            {poems.length ? "Explore the poems" : "About the collection"}{" "}
            <Arrow />
          </Link>
        </div>
        <LunarArt priority />
      </section>
      <div id="collection-poems">
        {anchor && <FeaturedPoem poem={anchor} collectionPage />}
        <PoetryShelf
          poems={poems.filter((poem) => poem.slug !== anchor?.slug)}
        />
      </div>
      <section
        id="collection-note"
        className="editorial-container reading-intro"
      >
        <p className="editorial-label">Behind the collection</p>
        <h2>
          Symbols, with room
          <br />
          <em>for your own meaning.</em>
        </h2>
        <div className="prose-columns">
          <p>
            The moon is an image of change here, not a prediction. A queen can
            mean autonomy, rest, or simply choosing the good dress on a Tuesday.
            A spiral can be a way of noticing that returning to a familiar place
            is not always standing still.
          </p>
          <p>
            You don’t need to believe in astrology to find something in a poem.
            The work starts with a human moment; the symbols offer another way
            to look at it.
          </p>
        </div>
        <div className="editorial-actions">
          <Link className="text-link" href="/sacred-geometry">
            Explore sacred geometry <Arrow />
          </Link>
          <Link className="text-link" href="/poetry">
            Poetry archive <Arrow />
          </Link>
        </div>
      </section>
    </main>
  );
}
