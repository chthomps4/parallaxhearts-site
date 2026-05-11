import type { Metadata } from "next";
import Link from "next/link";
import { absoluteUrl, breadcrumbSchema, defaultKeywords } from "../lib/seo";

const pageTitle = "How to Know If Your Website Needs a Cleanup | Parallax Hearts";
const pageDescription =
  "A practical website cleanup checklist for artists, creators, small businesses, service providers, and local projects with sites that feel scattered, outdated, unclear, or hard to use on mobile.";
const pageUrl = absoluteUrl("/website-cleanup");
const previewImage = absoluteUrl("/images/hero.jpg");

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    ...defaultKeywords,
    "website cleanup checklist",
    "website redesign checklist",
    "website update help",
    "small business website cleanup",
    "creator website cleanup",
    "artist website cleanup",
    "mobile website checklist",
    "website improvement checklist",
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
        url: previewImage,
        width: 1200,
        height: 630,
        alt: "Website cleanup checklist by Parallax Hearts",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: [previewImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

const pageSchemas = [
  breadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Website Cleanup Checklist", path: "/website-cleanup" },
  ]),
  {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${pageUrl}#article`,
    headline: "How to Know If Your Website Needs a Cleanup",
    description: pageDescription,
    url: pageUrl,
    image: previewImage,
    author: {
      "@type": "Organization",
      name: "Parallax Hearts",
      url: absoluteUrl("/"),
    },
    publisher: {
      "@type": "Organization",
      name: "Parallax Hearts",
      url: absoluteUrl("/"),
    },
    mainEntityOfPage: pageUrl,
  },
];

const cleanupSignals = [
  {
    title: "The first screen does not explain anything clearly",
    text: "A visitor should understand what the site is, who it is for, and what to do next without digging through several pages.",
    items: [
      "The headline is vague or missing",
      "The main offer is buried",
      "Visitors have to guess what the project or business does",
      "The first button does not lead to the most important action",
    ],
  },
  {
    title: "The site works on desktop but feels awkward on a phone",
    text: "Most people will see the site through a phone or in-app browser. If the page is hard to read or tap, the design is not finished.",
    items: [
      "Buttons are too small or close together",
      "Text feels cramped",
      "Images push important information too far down",
      "Menus are hard to use",
    ],
  },
  {
    title: "The site has too many scattered links",
    text: "A website should reduce confusion. If every section sends people somewhere else without a clear order, the page may need restructuring.",
    items: [
      "Social links appear before the main explanation",
      "Old pages compete with current offers",
      "Important contact links are hard to find",
      "Visitors are sent to several platforms before they understand the work",
    ],
  },
  {
    title: "The copy sounds outdated or does not match the current work",
    text: "A site can look fine and still feel wrong if the words no longer describe what the person, project, or business actually does.",
    items: [
      "Old services are still listed",
      "New work is missing",
      "The tone feels generic",
      "The site does not sound like the person behind it",
    ],
  },
  {
    title: "There is no clear follow-up path",
    text: "A visitor should know what to do next. Contact, booking, listening, reading, buying, or supporting should be obvious.",
    items: [
      "No strong contact path",
      "No clear next button",
      "Too many equal choices",
      "No simple way to start a conversation",
    ],
  },
];

const quickAudit = [
  "Can a stranger understand the site in five seconds?",
  "Does the page work cleanly on a phone?",
  "Is the main action obvious?",
  "Are outdated links or claims removed?",
  "Does the copy still match the current project?",
  "Are examples, photos, and proof easy to find?",
  "Does the site feel trustworthy instead of abandoned?",
];

export default function WebsiteCleanupPage() {
  return (
    <main className="websites-page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchemas) }}
      />

      <section className="section-shell hero-section websites-hero">
        <div className="site-container two-column">
          <div>
            <p className="kicker">Website Cleanup Resource</p>
            <h1 className="page-title">How to know if your website needs a cleanup.</h1>
            <p className="lead-copy">
              A practical checklist for artists, creators, small businesses, service providers, and local projects with sites that feel scattered, outdated, unclear, or hard to use on mobile.
            </p>
            <p className="soft-copy">
              A cleanup does not always mean rebuilding everything. Sometimes the most useful work is clarifying the structure, copy, links, mobile flow, and next step.
            </p>
            <div className="button-row websites-cta-row">
              <Link className="primary-button" href="/websites">
                Website services
              </Link>
              <Link className="ghost-button" href="/website-planning">
                Planning checklist
              </Link>
            </div>
          </div>

          <aside className="feature-card websites-hero-card">
            <p className="kicker">Quick audit</p>
            <ul className="clean-list">
              {quickAudit.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </aside>
        </div>
      </section>

      {cleanupSignals.map((section, index) => (
        <section className={index % 2 === 0 ? "section-shell" : "section-shell muted-section"} key={section.title}>
          <div className="site-container two-column">
            <div>
              <p className="kicker">Cleanup signal</p>
              <h2 className="section-title">{section.title}</h2>
              <p className="soft-copy" style={{ marginTop: "18px" }}>
                {section.text}
              </p>
            </div>

            <div className="feature-card">
              <ul className="clean-list">
                {section.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      ))}

      <section className="section-shell muted-section">
        <div className="site-container two-column">
          <div>
            <p className="kicker">Clean next step</p>
            <h2 className="section-title">Start with the page that feels most unclear.</h2>
            <p className="soft-copy" style={{ marginTop: "18px" }}>
              The easiest cleanup pass is not trying to fix the whole internet presence at once. Pick the homepage, services page, contact path, or mobile view and make that part clearer first.
            </p>
          </div>

          <div className="feature-card">
            <p>
              Send the existing site link, what feels wrong, and what visitors should do next. That is enough to begin a cleanup conversation.
            </p>
            <Link className="primary-button" href="/contact">
              Ask about a cleanup pass
            </Link>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 760px) {
          .websites-page .site-container {
            width: min(100% - 22px, 1180px);
          }

          .websites-page .section-shell {
            padding-top: 42px;
            padding-bottom: 42px;
          }

          .websites-page .websites-hero {
            padding-top: 34px;
          }

          .websites-page .page-title {
            font-size: clamp(40px, 13vw, 58px);
            line-height: 0.96;
            letter-spacing: -0.058em;
          }

          .websites-page .lead-copy {
            font-size: 18px;
            line-height: 1.58;
          }

          .websites-page .section-title {
            font-size: clamp(32px, 10vw, 46px);
            line-height: 1.02;
          }

          .websites-page .feature-card {
            border-radius: 22px;
            padding: 22px;
          }

          .websites-page .websites-hero-card {
            margin-top: 4px;
          }

          .websites-page .websites-cta-row {
            display: grid;
            grid-template-columns: 1fr;
            gap: 10px;
          }

          .websites-page .websites-cta-row a,
          .websites-page .feature-card .primary-button {
            width: 100%;
            min-height: 52px;
            text-align: center;
          }

          .websites-page .clean-list {
            padding-left: 18px;
          }

          .websites-page .clean-list li {
            margin-bottom: 8px;
          }
        }
      `}</style>
    </main>
  );
}
