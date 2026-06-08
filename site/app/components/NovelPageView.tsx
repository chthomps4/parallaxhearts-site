import Image from "next/image";
import Link from "next/link";
import {
  getNovelStatusLabel,
  shouldShowReviewNovelPages,
  type NovelChapter,
  type NovelPage,
} from "../lib/novel/chapter-one";
import { getFeaturedSoundtrackTrack } from "../lib/music/what-the-town-keeps";

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
  const soundtrackTrack = getFeaturedSoundtrackTrack();

  return (
    <main className="min-h-screen bg-[#110c10] text-[#f5eadf]">
      <section className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-6 py-12 md:grid md:grid-cols-[minmax(0,0.9fr)_minmax(360px,1.1fr)] md:items-start md:px-10 md:py-16">
        <aside className="sticky top-8 flex flex-col gap-6">
          <Link
            href={chapter.path}
            className="text-sm uppercase tracking-[0.35em] text-[#caa978] transition hover:text-[#f2d7a0]"
          >
            Back to {chapter.subtitle}
          </Link>

          <div className="overflow-hidden rounded-[2rem] border border-[#5f4639] bg-[#1c1417] shadow-2xl shadow-black/40">
            {page.image.src ? (
              <Image
                src={page.image.src}
                alt={page.image.alt}
                width={page.image.width ?? 1000}
                height={page.image.height ?? 1414}
                priority={page.number === "001"}
                unoptimized={page.image.unoptimized}
                className="h-auto w-full object-cover"
              />
            ) : (
              <div className="flex min-h-[620px] flex-col justify-end gap-4 bg-[radial-gradient(circle_at_top,#45322d,#140f12_60%)] p-8">
                <p className="text-xs uppercase tracking-[0.35em] text-[#caa978]">
                  Artwork in review
                </p>
                <p className="text-lg leading-7 text-[#f5eadf]">
                  The next visual is being prepared for this page.
                </p>
                {showReviewDetails ? (
                  <p className="text-sm leading-6 text-[#d8c7b8]">
                    {page.image.prompt}
                  </p>
                ) : null}
              </div>
            )}
          </div>

          {showReviewDetails ? (
            <div className="rounded-3xl border border-[#4d3932] bg-[#1a1215]/80 p-5 text-sm leading-6 text-[#d8c7b8]">
              <p className="mb-2 text-xs uppercase tracking-[0.3em] text-[#caa978]">
                Image prompt
              </p>
              <p>{page.image.prompt}</p>
            </div>
          ) : null}
        </aside>

        <article className="rounded-[2rem] border border-[#4b352f] bg-[#1a1215]/90 p-6 shadow-2xl shadow-black/30 md:p-10">
          <div className="mb-8 flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.32em] text-[#caa978]">
            <span>{chapter.title}</span>
            <span className="text-[#76584c]">/</span>
            <span>Page {page.number}</span>
            {isReviewOnly && showReviewDetails ? (
              <span className="rounded-full border border-[#caa978]/40 bg-[#3a281e] px-3 py-1 tracking-[0.18em] text-[#f2d7a0]">
                {getNovelStatusLabel(page.status)}
              </span>
            ) : null}
          </div>

          <h1 className="font-serif text-4xl leading-tight text-[#fff7eb] md:text-6xl">
            {page.title}
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-[#d8c7b8]">
            {page.description}
          </p>

          <div className="my-10 h-px bg-gradient-to-r from-transparent via-[#6c4e3d] to-transparent" />

          <div className="space-y-6 text-xl leading-9 text-[#f5eadf]">
            {page.narration.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <blockquote className="mt-10 rounded-3xl border border-[#5f4639] bg-[#261a19] p-6 text-lg italic leading-8 text-[#e4cba8]">
            {page.excerpt}
          </blockquote>

          {soundtrackTrack?.audioSrc ? (
            <section className="mt-10 rounded-3xl border border-[#5f4639] bg-[#201716] p-6">
              <p className="text-xs uppercase tracking-[0.3em] text-[#caa978]">
                Chapter soundtrack
              </p>
              <h2 className="mt-3 font-serif text-3xl text-[#fff7eb]">
                {soundtrackTrack.title}
              </h2>
              <p className="mt-3 text-base leading-7 text-[#d8c7b8]">
                {soundtrackTrack.connection}
              </p>
              <audio
                controls
                preload="none"
                className="mt-5 w-full"
                style={{ accentColor: "#caa978" }}
              >
                <source src={soundtrackTrack.audioSrc} type="audio/mpeg" />
                Your browser does not support the audio element.
              </audio>
              <Link
                href="/music"
                className="mt-5 inline-flex rounded-full border border-[#5f4639] px-5 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#f5eadf] transition hover:border-[#caa978] hover:text-[#fff7eb]"
              >
                Open full soundtrack
              </Link>
            </section>
          ) : null}

          <nav
            aria-label="Graphic novel page navigation"
            className="mt-12 grid gap-4 md:grid-cols-3"
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
              <div />
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
              <div />
            )}
          </nav>

          {isReviewOnly && showReviewDetails ? (
            <div className="mt-8 rounded-3xl border border-[#caa978]/40 bg-[#2b2119] p-5 text-sm leading-6 text-[#f2d7a0]">
              Review-only page. This can render in local or preview builds for
              owner review, but it is hidden from the production sitemap and
              public chapter index until its status changes to live.
            </div>
          ) : null}
        </article>
      </section>
    </main>
  );
}
