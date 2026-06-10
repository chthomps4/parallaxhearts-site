import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import ChapterSoundtrackCta from "../../components/ChapterSoundtrackCta";
import JsonLd from "../../components/JsonLd";
import { breadcrumbSchema, creativeWorkSchema, SITE_URL } from "../../lib/seo";
import {
  getNovelChapter,
  getNovelChaptersForCurrentEnvironment,
  getVisibleNovelPages,
  shouldShowReviewNovelPages,
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
  const showReviewDetails = shouldShowReviewNovelPages();

  if (!chapter || pages.length === 0) {
    notFound();
  }

  const latestPage = pages.at(-1);
  const firstPage = pages[0];
  const chapterJsonLd = [
    breadcrumbSchema([
      { name: "Home", path: "/" },
      { name: "Graphic Novel", path: "/graphic-novel" },
      { name: chapter.title, path: chapter.path },
    ]),
    creativeWorkSchema({
      name: chapter.title,
      description: chapter.description,
      path: chapter.path,
      image: latestPage?.image.src,
    }),
  ];

  return (
    <main className="novel-shell">
      <JsonLd data={chapterJsonLd} />
      <section className="novel-container novel-chapter">
        <Link
          href="/graphic-novel"
          className="novel-inline-link"
        >
          Back to graphic novel
        </Link>

        <div className="novel-chapter-hero">
          <div className="novel-hero-copy">
            <p className="novel-kicker">
              What the Town Keeps
            </p>
            <h1 className="novel-title">
              {chapter.title}
            </h1>
            <p className="novel-lede">
              {chapter.description}
            </p>
            <div className="novel-actions">
              {firstPage ? (
                <Link
                  href={firstPage.path}
                  className="novel-button novel-button-primary"
                >
                  Start chapter
                </Link>
              ) : null}
              {latestPage ? (
                <Link
                  href={latestPage.path}
                  className="novel-button novel-button-secondary"
                >
                  Latest page
                </Link>
              ) : null}
              <Link
                href="/music"
                className="novel-button novel-button-secondary"
              >
                Listen to Ballast
              </Link>
            </div>
            <p className="novel-page-total">
              {pages.length} pages in this chapter
            </p>
          </div>

          {latestPage?.image.src ? (
            <div className="novel-image-card novel-image-card-compact">
              <Image
                src={latestPage.image.src}
                alt={latestPage.image.alt}
                width={latestPage.image.width ?? 1000}
                height={latestPage.image.height ?? 1414}
                unoptimized={latestPage.image.unoptimized}
                className="novel-cover-image"
              />
            </div>
          ) : null}
        </div>

        <div className="novel-page-grid">
          {pages.map((page) => (
            <Link
              key={page.slug}
              href={page.path}
              className="novel-card novel-page-card"
            >
              <div className="novel-page-card-meta">
                <span>Page {page.number}</span>
                {page.status !== "live" && showReviewDetails ? (
                  <span className="novel-review-pill">
                    Review
                  </span>
                ) : null}
              </div>
              <h2 className="novel-card-title">
                {page.title}
              </h2>
              <p className="novel-card-copy">
                {page.description}
              </p>
              <p className="novel-card-link">
                Read page
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
