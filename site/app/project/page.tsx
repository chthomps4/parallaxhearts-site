import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import ArchiveNote from "../components/ArchiveNote";
import Arrow from "../components/Arrow";
import { buildMetadata } from "../lib/seo";
import { getLiveNovelPages } from "../lib/novel/chapter-one";

export const metadata: Metadata = buildMetadata({
  title: "What the Town Keeps | Parallax Hearts",
  description:
    "The Vallen story archive: read What the Town Keeps, explore the visual novel, or listen to its companion album.",
  path: "/project",
});
const worldDetails = [
  "Rainy small-town America",
  "Old houses and dim windows",
  "Rail lines, station rooms, roads, and records",
  "Muted blue-gray, charcoal, sepia, and warm interior light",
  "Emotional realism without horror, fantasy, or spectacle",
];

export default function ProjectPage() {
  const pages = getLiveNovelPages();
  return (
    <main className="publication-page archive-page">
      <section className="editorial-container archive-hero">
        <div>
          <p className="editorial-label">Other work · Stories</p>
          <h1>
            What the
            <br />
            <em>Town Keeps.</em>
          </h1>
          <p className="hero-deck">
            The story world of Vallen: a rainy small town of rail lines, old
            houses, quiet rooms, and records that do not always stay on paper.
          </p>
          <Link
            className="copper-button"
            href="/graphic-novel/chapter-one/page-001"
          >
            Start the visual novel <Arrow />
          </Link>
        </div>
        <Image
          src="/images/story-world.jpg"
          alt="Small town rooftops at dusk, church steeple, rail lines, fog, and warm window lights."
          width={1536}
          height={1024}
          sizes="(max-width: 800px) 90vw, 38vw"
          priority
        />
      </section>
      <section
        className="editorial-container quiet-archive-section"
        aria-labelledby="archive-paths-title"
      >
        <h2 id="archive-paths-title">Find your place.</h2>
        <nav className="archive-directory" aria-label="Vallen archive">
          <Link href="/graphic-novel/chapter-one">
            <span>Chapter One · Ballast</span>
            <span>
              Browse the {pages.length} published pages <Arrow />
            </span>
          </Link>
          <Link href="/music">
            <span>The album</span>
            <span>
              Listen and explore the track guide <Arrow />
            </span>
          </Link>
          <Link href="/book">
            <span>The book archive</span>
            <span>
              Read about the companion book <Arrow />
            </span>
          </Link>
        </nav>
        <details className="archive-details">
          <summary>About Vallen and the archive</summary>
          <div className="archive-prose">
            <h2>The town as archive.</h2>
            <p>
              <em>What the Town Keeps</em> is the story world surrounding the
              Parallax Hearts album. It is set in Vallen
              <ArchiveNote
                title="Archive Note: Vallen"
                evidence="Creative name / interpretive resonance"
              >
                Vallen is the fictional town at the center of What the Town
                Keeps. The name suggests valley, falling, low ground, and a
                place where weather and memory collect. This is a
                project-specific name, not a historical place claim.
              </ArchiveNote>
              .
            </p>
            <p>
              In Vallen, an archive
              <ArchiveNote
                title="Archive Note: Archive"
                evidence="Well-supported word history / creative use"
              >
                An archive is a place where records are preserved. In What the
                Town Keeps, the town itself behaves like an archive: houses,
                roads, rail lines, rooms, and habits preserve traces of what
                people leave behind.
              </ArchiveNote>{" "}
              is not only a box of documents. It can be a house, a window, a
              street after rain, a rail line, or a room still arranged around
              someone who is gone.
            </p>
            <p>
              The story follows the pressure between what people remember, what
              they deny, what they inherit, and what the town quietly keeps in
              place.
            </p>
            <h3>Visual language</h3>
            <ul>
              {worldDetails.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p>
              Some pages contain small Archive Notes—fragments of word history,
              symbolism, and story context. They are not explanations of the
              whole story. They are little drawers inside the Vallen archive.
            </p>
          </div>
        </details>
      </section>
    </main>
  );
}
