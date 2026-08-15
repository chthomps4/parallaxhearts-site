import type { Metadata } from "next";
import Link from "next/link";
import EditorialFeature from "../components/EditorialFeature";
import JsonLd from "../components/JsonLd";
import { companionBook } from "../lib/book";
import { absoluteUrl, breadcrumbSchema, defaultKeywords } from "../lib/seo";
import { getStoryAsset } from "../lib/story-assets";

const bookAsset = getStoryAsset("field-notes");
const pageTitle = "Book | Parallax Hearts";
const pageDescription =
  "Follow the forthcoming companion book from the world of What the Town Keeps, alongside the Parallax Hearts album and visual-novel archive.";
const pageUrl = absoluteUrl(companionBook.route);

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    ...defaultKeywords,
    "Parallax Hearts book",
    "What the Town Keeps companion book",
    "Vallen story",
    "album companion book",
  ],
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: pageUrl,
    siteName: "Parallax Hearts",
    images: [
      {
        url: bookAsset.src,
        width: bookAsset.width,
        height: bookAsset.height,
        alt: "Field notes from the forthcoming Parallax Hearts companion book",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: [bookAsset.src],
  },
};

const storyPaths = [
  {
    index: "01",
    title: "The album",
    description:
      "The songs carry the emotional weather, voices, and pressure of Vallen.",
    href: "/music",
    label: "Listen",
  },
  {
    index: "02",
    title: "The companion book",
    description:
      "The longer written path is still being completed. This archive will hold only approved publication details as they become ready.",
    href: "#book-details",
    label: "View status",
  },
  {
    index: "03",
    title: "The visual novel",
    description:
      "The public archive opens the story page by page, beginning with Chapter One - Ballast.",
    href: "/graphic-novel/chapter-one/page-001",
    label: "Read page one",
  },
] as const;

export default function BookPage() {
  const structuredData = breadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Book", path: companionBook.route },
  ]);

  return (
    <main className="site-shell book-page">
      <JsonLd data={structuredData} />

      <header className="book-masthead">
        <div className="site-container book-masthead-inner">
          <div>
            <p className="kicker">Parallax Hearts / Volume in progress</p>
            <h1 className="book-display-title">A longer road through Vallen.</h1>
          </div>
          <div className="book-masthead-note">
            <span>{companionBook.statusLabel}</span>
            <p>
              Publication details will appear here only after they are approved.
            </p>
          </div>
        </div>
      </header>

      <section className="editorial-section book-feature-section">
        <div className="site-container">
          <EditorialFeature
            eyebrow={companionBook.eyebrow}
            title={companionBook.headline}
            description={companionBook.description}
            detail={companionBook.relationship}
            image={bookAsset.src}
            imageAlt={bookAsset.alt}
            primaryHref="#book-details"
            primaryLabel="See what is confirmed"
            secondaryHref="/graphic-novel"
            secondaryLabel="Open the visual archive"
            folio="Field notes / Vallen"
            reverse
          />
        </div>
      </section>

      <section className="book-sequence-section" aria-labelledby="book-sequence-title">
        <div className="site-container">
          <p className="kicker">One world / three ways in</p>
          <h2 id="book-sequence-title" className="book-section-title">
            The music, the book, and the archive belong to the same weather.
          </h2>

          <div className="book-sequence-grid">
            {storyPaths.map((path) => (
              <article className="book-path-card" key={path.title}>
                <p className="book-path-index">{path.index}</p>
                <h3>{path.title}</h3>
                <p>{path.description}</p>
                <Link href={path.href}>{path.label}</Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="book-details" className="book-details-section" aria-labelledby="book-details-title">
        <div className="site-container book-details-grid">
          <div>
            <p className="kicker">Edition record</p>
            <h2 id="book-details-title" className="book-section-title">
              Confirmed now. Everything else stays unannounced.
            </h2>
            <p className="book-section-copy">
              This page is designed to grow with the book without publishing
              draft details early or inventing information that has not been
              decided.
            </p>
          </div>

          <dl className="book-record" aria-label="Current companion book status">
            {companionBook.confirmedDetails.map((detail) => (
              <div className="book-record-row" key={detail.label}>
                <dt>{detail.label}</dt>
                <dd>{detail.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="site-container book-pending-panel">
          <div>
            <p className="kicker">Awaiting owner approval</p>
            <h2>Details that remain intentionally private.</h2>
          </div>
          <ul>
            {companionBook.pendingDetails.map((detail) => (
              <li key={detail}>{detail}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="book-closing-section">
        <div className="site-container book-closing-panel">
          <p className="kicker">Follow the work</p>
          <h2>Hear the record now. Join the book when it is ready.</h2>
          <p>
            Dispatches from Vallen is the current, intentionally simple path for
            book notes, visual-novel pages, songs, and project updates.
          </p>
          <div className="book-closing-actions">
            <a className="primary-button" href="#dispatches">
              Follow book updates
            </a>
            <Link className="secondary-button" href="/music">
              Hear the album
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
