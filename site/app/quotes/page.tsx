import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getVisibleQuotes } from "../lib/quotes";
import { isLocalReview } from "../lib/poetry";
import { buildMetadata, absoluteUrl } from "../lib/seo";
import QuotesIndex from "../components/QuotesIndex";
import LiteraryNavigation from "../components/LiteraryNavigation";
import ReviewNote from "../components/ReviewNote";
import JsonLd from "../components/JsonLd";

export const dynamic = "force-dynamic";
export async function generateMetadata(): Promise<Metadata> {
  const quotes = await getVisibleQuotes();
  if (!quotes.length)
    return {
      title: "Page not found | Parallax Hearts",
      robots: { index: false, follow: false },
    };
  return {
    ...buildMetadata({
      title: "Quotes & Fragments | Crown of Phases",
      description:
        "Original fragments from Crown of Phases: brief thoughts on ordinary life, wonder, and the patterns we notice.",
      path: "/quotes",
    }),
    ...((await isLocalReview()) && { robots: { index: false, follow: false } }),
  };
}
export default async function QuotesPage() {
  const quotes = await getVisibleQuotes();
  if (!quotes.length) notFound();
  const review = await isLocalReview();
  return (
    <main className="publication-page">
      <ReviewNote />
      {!review && (
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            name: "Quotes & Fragments",
            url: absoluteUrl("/quotes"),
            hasPart: quotes.map((quote) => ({
              "@type": "CreativeWork",
              name: quote.title,
              text: quote.text,
              url: absoluteUrl(`/quotes#${quote.slug}`),
              creator: { "@type": "Person", name: "Chad Thompson" },
            })),
          }}
        />
      )}
      <header className="editorial-container archive-intro">
        <p className="editorial-label">Crown of Phases</p>
        <h1>
          Quotes <em>&amp; fragments.</em>
        </h1>
        <p className="hero-deck">
          A thought, a moment, a little room to look again.
        </p>
        <LiteraryNavigation active="quotes" />
      </header>
      <section className="parchment-band">
        <div className="editorial-container">
          <QuotesIndex quotes={quotes} localReview={review} />
        </div>
      </section>
    </main>
  );
}
