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
    <main className="min-h-screen bg-[#0b080a] text-[#f5eadf]">
      <section className="mx-auto w-full max-w-5xl px-4 py-8 sm:px-6 md:py-12">
        <nav
          aria-label="Visual novel breadcrumb"
          className="mb-5 flex flex-wrap items-center justify-between gap-3 text-xs uppercase tracking-[0.24em] text-[#caa978]"
        >
          <Link href={chapter.path} className="transition hover:text-[#f2d7a0]">
            Back to {chapter.subtitle}
          </Link>
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-[#e4cba8]">
              Page {pagePosition} of {pageTotal}
            </span>
            {previousPage ? (
              <Link href={previousPage.path} className="transition hover:text-[#f2d7a0]">
                Previous
              </Link>
            ) : null}
            {nextPage ? (
              <Link href={nextPage.path} className="transition hover:text-[#f2d7a0]">
                Next
              </Link>
            ) : null}
          </div>
        </nav>

        <article className="overflow-hidden rounded-[2rem] border border-[#4b352f] bg-[#160f12] shadow-2xl shadow-black/40">
          <div className="relative border-b border-[#4b352f] bg-[#0e0a0c]">
            {page.image.src ? (
              <Image
                src={page.image.src}
                alt={page.image.alt}
                width={page.image.width ?? 1536}
                height={page.image.height ?? 1024}
                priority={page.number === "001"}
                unoptimized={page.image.unoptimized}
                className="aspect-[3/2] w-full object-cover"
              />
            ) : (
              <div className="flex aspect-[3/2] min-h-[260px] flex-col justify-end gap-4 bg-[radial-gradient(circle_at_top,#45322d,#140f12_62%)] p-6 sm:p-8">
                <p className="text-xs uppercase tracking-[0.35em] text-[#caa978]">
                  Artwork in review
                </p>
                <p className="max-w-xl text-lg leading-7 text-[#f5eadf]">
                  The next cinematic still is being prepared for this page.
                </p>
              </div>
            )}
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#0b080a]/95 via-[#0b080a]/52 to-transparent p-5 sm:p-8">
              <p className="text-xs uppercase tracking-[0.28em] text-[#e4cba8]">
                {chapter.title} / Page {pagePosition} of {pageTotal}
              </p>
              <h1 className="mt-3 max-w-3xl font-serif text-4xl leading-tight text-[#fff7eb] sm:text-5xl md:text-6xl">
                {page.title}
              </h1>
              <div className="mt-5 flex flex-wrap gap-3">
                {nextPage ? (
                  <Link
                    href={nextPage.path}
                    className="rounded-full bg-[#e4cba8] px-5 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#170f0f] transition hover:bg-[#fff0c8]"
                  >
                    Continue reading
                  </Link>
                ) : (
                  <Link
                    href="/support"
                    className="rounded-full bg-[#e4cba8] px-5 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#170f0f] transition hover:bg-[#fff0c8]"
                  >
                    Support the next page
                  </Link>
                )}
                <Link
                  href={chapter.path}
                  className="rounded-full border border-[#e4cba8]/50 bg-[#0b080a]/40 px-5 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#fff7eb] transition hover:border-[#e4cba8] hover:bg-[#241917]"
                >
                  Chapter archive
                </Link>
                <Link
                  href="/music"
                  className="rounded-full border border-[#e4cba8]/50 bg-[#0b080a]/40 px-5 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#fff7eb] transition hover:border-[#e4cba8] hover:bg-[#241917]"
                >
                  {listenLabel}
                </Link>
              </div>
            </div>
          </div>

          <div className="grid gap-8 p-5 sm:p-8 md:p-10">
            <header className="max-w-3xl">
              <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.25em] text-[#caa978]">
                <span>Cinematic visual novel</span>
                <span className="text-[#76584c]">/</span>
                <span>{chapter.subtitle}</span>
                {isReviewOnly && showReviewDetails ? (
                  <span className="rounded-full border border-[#caa978]/40 bg-[#3a281e] px-3 py-1 tracking-[0.16em] text-[#f2d7a0]">
                    {getNovelStatusLabel(page.status)}
                  </span>
                ) : null}
              </div>
              <p className="mt-5 text-lg leading-8 text-[#d8c7b8]">
                {page.description}
              </p>
              <div
                aria-label={`Reading progress: page ${pagePosition} of ${pageTotal}`}
                className="mt-6 rounded-2xl border border-[#3e2d29] bg-[#120d0f] p-4"
              >
                <div className="flex flex-wrap items-center justify-between gap-3 text-xs uppercase tracking-[0.24em] text-[#caa978]">
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
                  className="mt-3 h-2 overflow-hidden rounded-full bg-[#352621]"
                >
                  <div
                    className="h-full rounded-full bg-[#e4cba8]"
                    style={{ width: `${progressPercent}%` }}
                  />
                </div>
              </div>
            </header>

            <section
              aria-label="Page narration"
              className="rounded-[1.5rem] border border-[#3e2d29] bg-[#211718] p-5 shadow-xl shadow-black/20 sm:p-8"
            >
              <div className="space-y-6 text-lg leading-9 text-[#f5eadf] sm:text-xl">
                {page.narration.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>

              <blockquote className="mt-8 border-l-2 border-[#caa978] pl-5 text-lg italic leading-8 text-[#e4cba8]">
                {page.excerpt}
              </blockquote>
            </section>

            <nav
              aria-label="Visual novel page navigation"
              className="grid gap-3 sm:grid-cols-3"
            >
              {previousPage ? (
                <Link
                  href={previousPage.path}
                  className="rounded-2xl border border-[#5f4639] bg-[#241917] p-5 transition hover:border-[#caa978] hover:bg-[#2d211f]"
                >
                  <span className="block text-xs uppercase tracking-[0.28em] text-[#caa978]">
                    Previous page
                  </span>
                  <span className="mt-2 block text-lg text-[#fff7eb]">
                    {previousPage.title}
                  </span>
                </Link>
              ) : (
                <div className="hidden sm:block" />
              )}

              <Link
                href={chapter.path}
                className="rounded-2xl border border-[#5f4639] bg-[#241917] p-5 text-center transition hover:border-[#caa978] hover:bg-[#2d211f]"
              >
                <span className="block text-xs uppercase tracking-[0.28em] text-[#caa978]">
                  Chapter archive
                </span>
                <span className="mt-2 block text-lg text-[#fff7eb]">
                  Page {pagePosition} of {pageTotal}
                </span>
              </Link>

              {nextPage ? (
                <Link
                  href={nextPage.path}
                  className="rounded-2xl border border-[#5f4639] bg-[#241917] p-5 text-right transition hover:border-[#caa978] hover:bg-[#2d211f]"
                >
                  <span className="block text-xs uppercase tracking-[0.28em] text-[#caa978]">
                    Next page
                  </span>
                  <span className="mt-2 block text-lg text-[#fff7eb]">
                    {nextPage.title}
                  </span>
                </Link>
              ) : (
                <div className="hidden sm:block" />
              )}
            </nav>

            <section
              aria-label="After this page"
              className="grid gap-5 rounded-[1.5rem] border border-[#4b352f] bg-[#160f12] p-5 shadow-xl shadow-black/20 sm:p-7 md:grid-cols-[minmax(0,1fr)_minmax(240px,0.6fr)] md:items-center"
            >
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-[#caa978]">
                  After this page
                </p>
                <h2 className="mt-3 font-serif text-3xl leading-tight text-[#fff7eb]">
                  Keep the story and soundtrack moving.
                </h2>
                <p className="mt-4 text-base leading-7 text-[#d8c7b8]">
                  {featuredTrack?.supportCta ??
                    "Support helps fund the next page, song, and visual piece from Vallen."}
                </p>
              </div>
              <div className="grid gap-3">
                <Link
                  href="/support"
                  className="rounded-full bg-[#e4cba8] px-5 py-3 text-center text-xs font-semibold uppercase tracking-[0.2em] text-[#170f0f] transition hover:bg-[#fff0c8]"
                >
                  Support the next page
                </Link>
                <Link
                  href="/music"
                  className="rounded-full border border-[#5f4639] px-5 py-3 text-center text-xs font-semibold uppercase tracking-[0.2em] text-[#f5eadf] transition hover:border-[#caa978]"
                >
                  {listenLabel}
                </Link>
                <a
                  href={shareHref}
                  className="rounded-full border border-[#5f4639] px-5 py-3 text-center text-xs font-semibold uppercase tracking-[0.2em] text-[#f5eadf] transition hover:border-[#caa978]"
                >
                  Share this page
                </a>
              </div>
            </section>

            {showReviewDetails ? (
              <section className="rounded-2xl border border-[#caa978]/30 bg-[#2b2119] p-5 text-sm leading-6 text-[#f2d7a0]">
                <p className="text-xs uppercase tracking-[0.24em]">
                  Owner review details
                </p>
                {isReviewOnly ? (
                  <p className="mt-3">
                    This page is {getNovelStatusLabel(page.status)} and should remain out of
                    production navigation until approved.
                  </p>
                ) : null}
                <p className="mt-3 text-[#d8c7b8]">{page.image.prompt}</p>
              </section>
            ) : null}
          </div>
        </article>
      </section>
    </main>
  );
}
