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
  title: "What the Town Keeps | Graphic Novel",
  description:
    "Read the online graphic novel and visual novel archive for What the Town Keeps, a restrained cinematic story about Elias Vale, Vallen, and the houses that remember.",
  alternates: {
    canonical: siteUrl("/graphic-novel"),
  },
  openGraph: {
    title: "What the Town Keeps | Graphic Novel",
    description:
      "A grounded, cinematic online graphic novel about inspection work, old houses, and the quiet wrongness of Vallen.",
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
      <main className="min-h-screen bg-[#110c10] px-6 py-20 text-[#f5eadf]">
        <section className="mx-auto max-w-3xl rounded-[2rem] border border-[#4b352f] bg-[#1a1215] p-8">
          <p className="text-sm uppercase tracking-[0.35em] text-[#caa978]">
            What the Town Keeps
          </p>
          <h1 className="mt-4 font-serif text-5xl text-[#fff7eb]">
            The archive is being prepared.
          </h1>
          <p className="mt-5 text-lg leading-8 text-[#d8c7b8]">
            Chapter pages will appear here after owner review.
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
      title: "Latest live page",
      description:
        "Continue with the newest owner-approved page in the public archive.",
      href: latestPage.path,
      eyebrow: `Page ${latestPage.number}`,
    },
    {
      title: "Chapter archive",
      description:
        "Browse every live page in Chapter One without exposing draft or review pages.",
      href: chapter.path,
      eyebrow: "Index",
    },
  ];

  return (
    <main className="min-h-screen bg-[#110c10] text-[#f5eadf]">
      <section className="mx-auto grid max-w-7xl gap-12 px-6 py-12 md:grid-cols-[minmax(0,1fr)_420px] md:items-center md:px-10 md:py-20">
        <div>
          <p className="text-sm uppercase tracking-[0.42em] text-[#caa978]">
            What the Town Keeps
          </p>
          <h1 className="mt-5 max-w-4xl font-serif text-6xl leading-[0.95] text-[#fff7eb] md:text-8xl">
            A town keeps better records than people do.
          </h1>
          <p className="mt-7 max-w-3xl text-xl leading-9 text-[#d8c7b8]">
            Elias Vale comes to Vallen to inspect a house. The work is ordinary:
            moisture, structure, doors, stairs, records. The town is ordinary
            too, until the evidence starts looking back.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <Link
              href={firstPage.path}
              className="rounded-full bg-[#e4cba8] px-6 py-3 text-sm font-semibold uppercase tracking-[0.22em] text-[#170f0f] transition hover:bg-[#fff0c8]"
            >
              Read page 001
            </Link>
            <Link
              href={chapter.path}
              className="rounded-full border border-[#5f4639] px-6 py-3 text-sm font-semibold uppercase tracking-[0.22em] text-[#f5eadf] transition hover:border-[#caa978] hover:text-[#fff7eb]"
            >
              Open archive
            </Link>
          </div>
        </div>

        {latestPage.image.src ? (
          <div className="overflow-hidden rounded-[2rem] border border-[#5f4639] bg-[#1c1417] shadow-2xl shadow-black/40">
            <Image
              src={latestPage.image.src}
              alt={latestPage.image.alt}
              width={latestPage.image.width ?? 1000}
              height={latestPage.image.height ?? 1414}
              unoptimized={latestPage.image.unoptimized}
              className="h-auto w-full object-cover"
              priority
            />
          </div>
        ) : null}
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-16 md:px-10">
        <div className="grid gap-4 md:grid-cols-3">
          {accessCards.map((card) => (
            <Link
              key={card.title}
              href={card.href}
              className="group rounded-[2rem] border border-[#4b352f] bg-[#1a1215]/90 p-6 shadow-xl shadow-black/20 transition hover:border-[#caa978] hover:bg-[#241917]"
            >
              <p className="text-xs uppercase tracking-[0.32em] text-[#caa978]">
                {card.eyebrow}
              </p>
              <h2 className="mt-4 font-serif text-3xl text-[#fff7eb]">
                {card.title}
              </h2>
              <p className="mt-4 text-base leading-7 text-[#d8c7b8]">
                {card.description}
              </p>
              <p className="mt-6 text-sm uppercase tracking-[0.24em] text-[#e4cba8] transition group-hover:text-[#fff7eb]">
                Enter
              </p>
            </Link>
          ))}
        </div>

        <div className="mt-12">
          <ChapterSoundtrackCta />
        </div>
      </section>
    </main>
  );
}
