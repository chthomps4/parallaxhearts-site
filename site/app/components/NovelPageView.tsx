import Image from "next/image";
import Link from "next/link";
import {
  getNovelStatusLabel,
  shouldShowReviewNovelPages,
  type NovelChapter,
  type NovelPage,
} from "../lib/novel/chapter-one";
import { getFeaturedSoundtrackTrack } from "../lib/music/what-the-town-keeps";
import { absoluteUrl } from "../lib/seo";

type NovelPageViewProps = {
  chapter: NovelChapter;
  page: NovelPage;
  previousPage?: NovelPage;
  nextPage?: NovelPage;
};

export default function NovelPageView({
  chapter,
  page,
  previousPage,
  nextPage,
}: NovelPageViewProps) {
  const isReviewOnly = page.status !== "live";
  const showReviewDetails = shouldShowReviewNovelPages();
  const visiblePages = chapter.pages.filter(
    (item) => item.status === "live" || showReviewDetails
  );
  const pageIndex = visiblePages.findIndex((item) => item.slug === page.slug);
  const pagePosition = pageIndex >= 0 ? pageIndex + 1 : 1;
  const pageTotal = Math.max(visiblePages.length, pagePosition);
  const progressPercent = Math.round((pagePosition / pageTotal) * 100);
  const featuredTrack = getFeaturedSoundtrackTrack();
  const listenLabel = `Listen to ${featuredTrack?.title ?? "Ballast"}`;
  const shareHref = `mailto:?subject=${encodeURIComponent(
    `Read ${page.title} from What the Town Keeps`
  )}&body=${encodeURIComponent(
    `I thought you might like this Parallax Hearts visual novel page: ${absoluteUrl(
      page.path
    )}`
  )}`;

  return (
    <main className="reader-shell">
      <section className="reader-container">
        <nav
          aria-label="Visual novel breadcrumb"
          className="reader-breadcrumb"
        >
          <Link href={chapter.path} className="reader-inline-link">
            Back to {chapter.subtitle}
          </Link>
          <div className="reader-breadcrumb-group">
            <span className="reader-page-count">
              Page {pagePosition} of {pageTotal}
            </span>
            {previousPage ? (
              <Link href={previousPage.path} className="reader-inline-link">
                Previous
              </Link>
            ) : null}
            {nextPage ? (
              <Link href={nextPage.path} className="reader-inline-link">
                Next
              </Link>
            ) : null}
          </div>
        </nav>

        <article className="reader-card">
          <div className="reader-media">
            {page.image.src ? (
              <Image
                src={page.image.src}
                alt={page.image.alt}
                width={page.image.width ?? 1536}
                height={page.image.height ?? 1024}
                priority={page.number === "001"}
                unoptimized={page.image.unoptimized}
                className="reader-image"
              />
            ) : (
              <div className="reader-image-placeholder">
                <p className="reader-kicker">
                  Artwork in review
                </p>
                <p>
                  The next cinematic still is being prepared for this page.
                </p>
              </div>
            )}
          </div>

          <div className="reader-content">
            <header className="reader-header">
              <p className="reader-kicker">
                {chapter.title} / Page {pagePosition} of {pageTotal}
              </p>
              <h1 className="reader-title">
                {page.title}
              </h1>
              <p className="reader-description">
                {page.description}
              </p>
              <div className="reader-actions">
                {nextPage ? (
                  <Link
                    href={nextPage.path}
                    className="reader-button reader-button-primary"
                  >
                    Continue reading
                  </Link>
                ) : (
                  <Link
                    href="/support"
                    className="reader-button reader-button-primary"
                  >
                    Support the next page
                  </Link>
                )}
                <Link
                  href={chapter.path}
                  className="reader-button reader-button-secondary"
                >
                  Chapter archive
                </Link>
                <Link
                  href="/music"
                  className="reader-button reader-button-secondary"
                >
                  {listenLabel}
                </Link>
              </div>
            </header>

            <div className="reader-meta">
              <div className="reader-meta-row">
                <span>Cinematic visual novel</span>
                <span aria-hidden="true">/</span>
                <span>{chapter.subtitle}</span>
                {isReviewOnly && showReviewDetails ? (
                  <span className="reader-status-pill">
                    {getNovelStatusLabel(page.status)}
                  </span>
                ) : null}
              </div>
              <div
                aria-label={`Reading progress: page ${pagePosition} of ${pageTotal}`}
                className="reader-progress"
              >
                <div className="reader-progress-labels">
                  <span>
                    Page {pagePosition} of {pageTotal}
                  </span>
                  <span>{progressPercent}% through {chapter.subtitle}</span>
                </div>
                <div
                  role="progressbar"
                  aria-valuenow={progressPercent}
                  aria-valuemin={0}
                  aria-valuemax={100}
                  className="reader-progress-track"
                >
                  <div
                    className="reader-progress-fill"
                    style={{ width: `${progressPercent}%` }}
                  />
                </div>
              </div>
            </div>

            <section
              aria-label="Page narration"
              className="reader-narration"
            >
              <div className="reader-narration-copy">
                {page.narration.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>

              <blockquote className="reader-excerpt">
                {page.excerpt}
              </blockquote>
            </section>

            <nav
              aria-label="Visual novel page navigation"
              className="reader-nav-grid"
            >
              {previousPage ? (
                <Link
                  href={previousPage.path}
                  className="reader-nav-card"
                >
                  <span className="reader-nav-label">
                    Previous page
                  </span>
                  <span className="reader-nav-title">
                    {previousPage.title}
                  </span>
                </Link>
              ) : (
                <div className="reader-nav-spacer" />
              )}

              <Link
                href={chapter.path}
                className="reader-nav-card reader-nav-card-center"
              >
                <span className="reader-nav-label">
                  Chapter archive
                </span>
                <span className="reader-nav-title">
                  Page {pagePosition} of {pageTotal}
                </span>
              </Link>

              {nextPage ? (
                <Link
                  href={nextPage.path}
                  className="reader-nav-card reader-nav-card-next"
                >
                  <span className="reader-nav-label">
                    Next page
                  </span>
                  <span className="reader-nav-title">
                    {nextPage.title}
                  </span>
                </Link>
              ) : (
                <div className="reader-nav-spacer" />
              )}
            </nav>

            <section
              aria-label="After this page"
              className="reader-after"
            >
              <div>
                <p className="reader-kicker">
                  After this page
                </p>
                <h2 className="reader-after-title">
                  Keep the story and soundtrack moving.
                </h2>
                <p className="reader-after-copy">
                  {featuredTrack?.supportCta ??
                    "Support helps fund the next page, song, and visual piece from Vallen."}
                </p>
              </div>
              <div className="reader-after-actions">
                <Link
                  href="/support"
                  className="reader-button reader-button-primary"
                >
                  Support the next page
                </Link>
                <Link
                  href="/music"
                  className="reader-button reader-button-secondary"
                >
                  {listenLabel}
                </Link>
                <a
                  href={shareHref}
                  className="reader-button reader-button-secondary"
                >
                  Share this page
                </a>
              </div>
            </section>

            {showReviewDetails ? (
              <section className="reader-review">
                <p className="reader-kicker">
                  Owner review details
                </p>
                {isReviewOnly ? (
                  <p>
                    This page is {getNovelStatusLabel(page.status)} and should remain out of
                    production navigation until approved.
                  </p>
                ) : null}
                <p>{page.image.prompt}</p>
              </section>
            ) : null}
          </div>
        </article>
      </section>
    </main>
  );
}
