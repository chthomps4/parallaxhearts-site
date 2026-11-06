import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  getVisiblePoem,
  getVisiblePoems,
  isLocalReview,
} from "../../lib/poetry";
import { absoluteUrl, buildMetadata, SITE_NAME } from "../../lib/seo";
import JsonLd from "../../components/JsonLd";
import SharePoem from "../../components/SharePoem";
import ReviewNote from "../../components/ReviewNote";
import Arrow from "../../components/Arrow";
import { getVisibleQuotes } from "../../lib/quotes";

export const dynamic = "force-dynamic";
type Props = { params: Promise<{ slug: string }> };
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const poem = await getVisiblePoem((await params).slug);
  if (!poem)
    return {
      title: "Poem not found | Parallax Hearts",
      robots: { index: false, follow: false },
    };
  const review = await isLocalReview();
  return {
    ...buildMetadata({
      title: `${poem.title} | Crown of Phases`,
      description: poem.summary,
      path: `/poetry/${poem.slug}`,
      image: poem.shareImage || `/poetry/${poem.slug}/opengraph-image`,
      type: "article",
    }),
    ...(review && { robots: { index: false, follow: false } }),
  };
}
export default async function PoemPage({ params }: Props) {
  const poem = await getVisiblePoem((await params).slug);
  if (!poem) notFound();
  const review = await isLocalReview();
  const relatedQuotes = (await getVisibleQuotes())
    .filter((quote) =>
      quote.themes.some((theme) => poem.themes.includes(theme)),
    )
    .slice(0, 1);
  const others = (await getVisiblePoems())
    .filter((item) => item.slug !== poem.slug)
    .slice(0, 2);
  const stanzas: string[][] = [[]];
  for (const line of poem.poemLines) {
    if (line === "") stanzas.push([]);
    else stanzas[stanzas.length - 1].push(line);
  }
  return (
    <main className="publication-page poem-detail">
      <ReviewNote />
      {!review && (
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@type": "CreativeWork",
            "@id": absoluteUrl(`/poetry/${poem.slug}`),
            name: poem.title,
            description: poem.summary,
            url: absoluteUrl(`/poetry/${poem.slug}`),
            genre: "Poetry",
            text: poem.poemLines.join("\n"),
            datePublished: poem.publishedAt,
            creator: { "@type": "Person", name: "Chad Thompson" },
            publisher: { "@type": "Organization", name: SITE_NAME },
            isPartOf: {
              "@type": "CreativeWorkSeries",
              name: poem.collection,
              url: absoluteUrl("/crown-of-phases"),
            },
          }}
        />
      )}
      <div className="editorial-container poem-breadcrumb">
        <Link href="/poetry">Poetry</Link>
        <span aria-hidden="true">/</span>
        <Link href="/crown-of-phases">{poem.collection}</Link>
      </div>
      <article className="poem-paper">
        <header>
          <p className="editorial-label">{poem.collection}</p>
          <h1>{poem.title}</h1>
          <p className="poem-byline">A poem by Chad Thompson</p>
        </header>
        <div className="poem-text">
          {stanzas
            .filter((stanza) => stanza.length)
            .map((stanza, index) => (
              <p className="poem-stanza" key={index}>
                {stanza.join("\n")}
              </p>
            ))}
        </div>
        <footer className="poem-colophon">
          <p>{poem.themes.join(" · ")}</p>
          {poem.publishedAt && (
            <time dateTime={poem.publishedAt}>
              {new Date(`${poem.publishedAt}T12:00:00Z`).toLocaleDateString(
                "en-US",
                {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                  timeZone: "UTC",
                },
              )}
            </time>
          )}
        </footer>
      </article>
      <div className="editorial-container poem-afterword">
        <SharePoem
          title={poem.title}
          url={absoluteUrl(`/poetry/${poem.slug}`)}
          localReview={review}
        />
        {poem.heroImage && (
          <figure className="poem-original">
            <Image
              src={poem.heroImage}
              width={poem.imageWidth || 1125}
              height={poem.imageHeight || 1406}
              alt={poem.imageAlt}
              sizes="(max-width: 700px) 90vw, 600px"
            />
            <figcaption>The visual edition of {poem.title}.</figcaption>
          </figure>
        )}
        {others.length > 0 && (
          <nav className="related-poems" aria-label="More poetry">
            <h2>Stay a little longer.</h2>
            {others.map((item) => (
              <Link
                className="text-link"
                key={item.slug}
                href={`/poetry/${item.slug}`}
              >
                {item.title} <Arrow />
              </Link>
            ))}
          </nav>
        )}
        {relatedQuotes.map((quote) => (
          <aside className="related-fragment" key={quote.id}>
            <h2>A related fragment.</h2>
            <blockquote>
              <p>{quote.text}</p>
            </blockquote>
            <Link className="text-link" href={`/quotes#${quote.slug}`}>
              {quote.title} <Arrow />
            </Link>
          </aside>
        ))}
      </div>
    </main>
  );
}
