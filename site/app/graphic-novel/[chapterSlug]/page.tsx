import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import ChapterSoundtrackCta from "../../components/ChapterSoundtrackCta";
import { SITE_URL } from "../../lib/seo";
import {
  getNovelChapter,
  getNovelChaptersForCurrentEnvironment,
  getVisibleNovelPages,
} from "../../lib/novel/chapter-one";

type PageParams = {
  chapterSlug: string;
};

type PageProps = {
  params: Promise<PageParams>;
};

function siteUrl(path: string) {
  return new URL(path, SITE_URL).toString();
}

export const dynamicParams = false;

export function generateStaticParams(): PageParams[] {
  return getNovelChaptersForCurrentEnvironment().map((chapter) => ({
    chapterSlug: chapter.slug,
  }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { chapterSlug } = await params;
  const chapter = getNovelChapter(chapterSlug);

  if (!chapter) {
    return {};
  }

  const title = `${chapter.title} | What the Town Keeps`;

  return {
    title,
    description: chapter.description,
    alternates: {
      canonical: siteUrl(chapter.path),
    },
    openGraph: {
      title,
      description: chapter.description,
      url: siteUrl(chapter.path),
      type: "article",
    },
  };
}

export default async function ChapterRoute({ params }: PageProps) {
  const { chapterSlug } = await params;
  const chapter = getNovelChapter(chapterSlug);
  const pages = getVisibleNovelPages(chapterSlug);

  if (!chapter || pages.length === 0) {
    notFound();
  }

  const latestPage = pages.at(-1);

  return (
    <main className="min-h-screen bg-[#110c10] text-[#f5eadf]">
      <section className="mx-auto max-w-6xl px-6 py-12 md:px-10 md:py-16">
        <Link
          href="/graphic-novel"
          className="text-sm uppercase tracking-[0.35em] text-[#caa978] transition hover:text-[#f2d7a0]"
        >
          Back to graphic novel
        </Link>

        <div className="mt-10 grid gap-8 md:grid-cols-[minmax(0,1fr)_360px] md:items-end">
          <div>
            <p className="text-sm uppercase tracking-[0.4em] text-[#caa978]">
              What the Town Keeps
            </p>
            <h1 className="mt-4 font-serif text-5xl leading-tight text-[#fff7eb] md:text-7xl">
              {chapter.title}
            </h1>
            <p className="mt-6 max-w-3xl text-xl leading-9 text-[#d8c7b8]">
              {chapter.description}
            </p>
          </div>

          {latestPage?.image.src ? (
            <div className="overflow-hidden rounded-[2rem] border border-[#5f4639] bg-[#1c1417] shadow-2xl shadow-black/40">
              <Image
                src={latestPage.image.src}
                alt={latestPage.image.alt}
                width={latestPage.image.width ?? 1000}
                height={latestPage.image.height ?? 1414}
                unoptimized={latestPage.image.unoptimized}
                className="h-auto w-full object-cover"
              />
            </div>
          ) : null}
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-2">
          {pages.map((page) => (
            <Link
              key={page.slug}
              href={page.path}
              className="group rounded-[2rem] border border-[#4b352f] bg-[#1a1215]/90 p-6 shadow-xl shadow-black/20 transition hover:border-[#caa978] hover:bg-[#241917]"
            >
              <div className="flex items-center justify-between gap-4 text-xs uppercase tracking-[0.3em] text-[#caa978]">
                <span>Page {page.number}</span>
                {page.status !== "live" ? (
                  <span className="rounded-full border border-[#caa978]/40 px-3 py-1 tracking-[0.16em]">
                    Review
                  </span>
                ) : null}
              </div>
              <h2 className="mt-4 font-serif text-3xl text-[#fff7eb]">
                {page.title}
              </h2>
              <p className="mt-4 text-base leading-7 text-[#d8c7b8]">
                {page.description}
              </p>
              <p className="mt-5 text-sm uppercase tracking-[0.24em] text-[#e4cba8] transition group-hover:text-[#fff7eb]">
                Read page
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
