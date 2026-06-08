import Image from "next/image";
import Link from "next/link";
import {
  getNovelStatusLabel,
  shouldShowReviewNovelPages,
  type NovelChapter,
  type NovelPage,
} from "../lib/novel/chapter-one";

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
          <div className="flex flex-wrap gap-3">
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
                {chapter.title} / Page {page.number}
              </p>
              <h1 className="mt-3 max-w-3xl font-serif text-4xl leading-tight text-[#fff7eb] sm:text-5xl md:text-6xl">
                {page.title}
              </h1>
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
                    Previous
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
                  Archive
                </span>
                <span className="mt-2 block text-lg text-[#fff7eb]">
                  Chapter index
                </span>
              </Link>

              {nextPage ? (
                <Link
                  href={nextPage.path}
                  className="rounded-2xl border border-[#5f4639] bg-[#241917] p-5 text-right transition hover:border-[#caa978] hover:bg-[#2d211f]"
                >
                  <span className="block text-xs uppercase tracking-[0.28em] text-[#caa978]">
                    Next
                  </span>
                  <span className="mt-2 block text-lg text-[#fff7eb]">
                    {nextPage.title}
                  </span>
                </Link>
              ) : (
                <div className="hidden sm:block" />
              )}
            </nav>

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
