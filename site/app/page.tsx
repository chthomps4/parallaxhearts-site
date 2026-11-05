import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { buildMetadata } from "./lib/seo";
import { getVisiblePoems, isLocalReview } from "./lib/poetry";
import LunarArt from "./components/LunarArt";
import PoetryShelf from "./components/PoetryShelf";
import ReviewNote from "./components/ReviewNote";
import Explorations from "./components/Explorations";
import Arrow from "./components/Arrow";
import FeaturedPoem from "./components/FeaturedPoem";

export const dynamic = "force-dynamic";
export async function generateMetadata(): Promise<Metadata> {
  return {
    ...buildMetadata({
      title: "Parallax Hearts | Crown of Phases",
      description:
        "Original poetry, music, stories and visual work by Chad Thompson. Explore Crown of Phases, the featured Parallax Hearts collection.",
      path: "/",
      image: "/opengraph-image",
    }),
    ...((await isLocalReview()) && { robots: { index: false, follow: false } }),
  };
}
export default async function HomePage() {
  const poems = await getVisiblePoems();
  const anchor = poems.find((poem) => poem.slug === "the-golden-section");
  return (
    <main className="publication-page">
      <ReviewNote />
      <section className="home-hero editorial-container">
        <div className="hero-copy">
          <p className="editorial-label">
            Parallax Hearts · Featured collection
          </p>
          <h1>
            Crown
            <br />
            <em>of Phases</em>
          </h1>
          <p className="hero-deck">
            Original poetry and artwork drawn toward the moon, sacred geometry,
            inner sovereignty, and the strangely beautiful work of being human.
          </p>
          <div className="editorial-actions">
            <Link
              className="copper-button"
              href={anchor ? `/poetry/${anchor.slug}` : "/crown-of-phases"}
            >
              {anchor ? "Read The Golden Section" : "Explore Crown of Phases"}{" "}
              <Arrow />
            </Link>
            <Link className="text-link" href="/poetry">
              Read the poems
            </Link>
          </div>
        </div>
        <LunarArt priority />
        <div className="hero-folio">
          <span>Poetry · Music · Stories · Art</span>
          <em>A different way of seeing.</em>
        </div>
      </section>
      {anchor && <FeaturedPoem poem={anchor} />}
      <PoetryShelf poems={poems.filter((poem) => poem.slug !== anchor?.slug)} />
      {!poems.length && (
        <section className="parchment-band">
          <div className="editorial-container collection-statement">
            <h2>Small moments. Wider worlds.</h2>
            <p>
              Poems for the sovereign, the curious, and the beautifully
              unfinished.
            </p>
            <span>
              Lunar imagery, ordinary moments, and the patterns we notice in
              ourselves.
            </span>
            <Link className="text-link" href="/crown-of-phases">
              About the collection <Arrow />
            </Link>
          </div>
        </section>
      )}
      <Explorations />
      <section className="vallen-feature">
        <div className="editorial-container vallen-feature-layout">
          <Image
            src="/images/story-world.jpg"
            alt="Rain-dark streets and warm windows in the fictional town of Vallen."
            width={1536}
            height={1024}
            sizes="(max-width: 800px) 90vw, 45vw"
          />
          <div>
            <p className="editorial-label">Music &amp; story</p>
            <h2>What the Town Keeps</h2>
            <p>An album. A story world. A town that keeps its secrets.</p>
            <div className="editorial-actions">
              <Link className="outline-button" href="/music">
                Hear the music <Arrow />
              </Link>
              <Link className="outline-button" href="/project">
                Enter Vallen <Arrow />
              </Link>
            </div>
            <Link
              className="text-link quiet-link"
              href="/graphic-novel/chapter-one/page-001"
            >
              Start the visual novel <Arrow />
            </Link>
          </div>
        </div>
      </section>
      <section className="editorial-container identity-section">
        <p className="editorial-label">The wider Parallax Hearts</p>
        <h2>
          The work has never belonged
          <br />
          <em>to one medium.</em>
        </h2>
        <p>
          Poems, music, stories and images follow the places where logic meets
          feeling—and where ordinary life gets unexpectedly strange.
        </p>
        <div className="editorial-actions">
          <Link className="text-link" href="/about">
            About Parallax Hearts <Arrow />
          </Link>
          <Link className="text-link" href="/visuals">
            Visual works <Arrow />
          </Link>
          <Link className="text-link" href="/book">
            The book archive <Arrow />
          </Link>
        </div>
      </section>
    </main>
  );
}
