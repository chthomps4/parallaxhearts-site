import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ChapterSoundtrackCta from "../components/ChapterSoundtrackCta";
import { SITE_URL } from "../lib/seo";
import {
  getLatestLiveNovelPage,
  getLiveNovelPages,
  getNovelChapter,
} from "../lib/novel/chapter-one";

function siteUrl(path: string) {
  return new URL(path, SITE_URL).toString();
}

export const metadata: Metadata = {
  title: "What the Town Keeps | Visual Novel",
  description:
    "Read the cinematic visual novel and illustrated story archive for What the Town Keeps, a restrained story about Elias Vale, Vallen, and the houses that remember.",
  alternates: {
    canonical: siteUrl("/graphic-novel"),
  },
  openGraph: {
    title: "What the Town Keeps | Visual Novel",
    description:
      "A grounded, cinematic visual novel about inspection work, old houses, and the quiet wrongness of Vallen.",
    url: siteUrl("/graphic-novel"),
    type: "website",
  },
};

export default function GraphicNovelLandingPage() {
  const chapter = getNovelChapter("chapter-one");
  const livePages = getLiveNovelPages("chapter-one");
  const firstPage = livePages[0];
  const latestPage = getLatestLiveNovelPage("chapter-one") ?? firstPage;

  if (!chapter || !firstPage || !latestPage) {
    return (
      <main className="novel-shell">
        <section className="novel-container novel-empty">
          <p className="novel-kicker">
            What the Town Keeps
          </p>
          <h1 className="novel-title">
            The archive is being prepared.
          </h1>
          <p className="novel-lede">
            Chapter pages will appear here soon.
          </p>
        </section>
      </main>
    );
  }

  const accessCards = [
    {
      title: "Start Chapter One",
      description:
        "Begin at the crossing, where Elias Vale enters Vallen for a routine inspection.",
      href: firstPage.path,
      eyebrow: "Read",
    },
    {
      title: "Latest page",
      description:
        "Continue with the newest owner-approved page in the public archive.",
      href: latestPage.path,
      eyebrow: `Page ${latestPage.number}`,
    },
    {
      title: "Chapter archive",
      description:
        "Browse the Chapter One pages in order and follow Elias deeper into Vallen.",
      href: chapter.path,
      eyebrow: "Index",
    },
  ];

  return (
    <main className="novel-shell">
      <section className="novel-container novel-hero">
        <div className="novel-hero-copy">
          <p className="novel-kicker">
            What the Town Keeps
          </p>
          <h1 className="novel-title novel-title-xl">
            A town keeps better records than people do.
          </h1>
          <p className="novel-lede">
            Elias Vale comes to Vallen to inspect a house. The work is ordinary:
            moisture, structure, doors, stairs, records. The archive unfolds as
            cinematic stills, story pages, and songs, until the evidence starts
            looking back.
          </p>

          <div className="novel-actions">
            <Link
              href={firstPage.path}
              className="novel-button novel-button-primary"
            >
              Read page 001
            </Link>
            <Link
              href={chapter.path}
              className="novel-button novel-button-secondary"
            >
              Open archive
            </Link>
            <Link
              href="/music"
              className="novel-button novel-button-secondary"
            >
              Listen to Ballast
            </Link>
          </div>
        </div>

        {latestPage.image.src ? (
          <div className="novel-image-card">
            <Image
              src={latestPage.image.src}
              alt={latestPage.image.alt}
              width={latestPage.image.width ?? 1000}
              height={latestPage.image.height ?? 1414}
              unoptimized={latestPage.image.unoptimized}
              className="novel-cover-image"
              priority
            />
          </div>
        ) : null}
      </section>

      <section className="novel-container novel-section">
        <div className="novel-card-grid">
          {accessCards.map((card) => (
            <Link
              key={card.title}
              href={card.href}
              className="novel-card"
            >
              <p className="novel-card-eyebrow">
                {card.eyebrow}
              </p>
              <h2 className="novel-card-title">
                {card.title}
              </h2>
              <p className="novel-card-copy">
                {card.description}
              </p>
              <p className="novel-card-link">
                Open path
              </p>
            </Link>
          ))}
        </div>

        <div className="novel-soundtrack-block">
          <ChapterSoundtrackCta />
        </div>
      </section>
    </main>
  );
}

