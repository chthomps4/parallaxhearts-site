import type { Metadata } from "next";
import Link from "next/link";
import { absoluteUrl, breadcrumbSchema, defaultKeywords } from "../lib/seo";

const pageTitle = "Website Planning Checklist for Artists, Creators, and Small Businesses | Parallax Hearts";
const pageDescription =
  "A practical website planning checklist for artists, creators, small businesses, service providers, and local projects before starting a new site, landing page, or site cleanup.";
const pageUrl = absoluteUrl("/website-planning");
const previewImage = absoluteUrl("/images/hero.jpg");

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    ...defaultKeywords,
    "website planning checklist",
    "what to send before building a website",
    "website checklist for artists",
    "small business website checklist",
    "creator website planning",
    "landing page planning",
    "website redesign checklist",
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
        alt: "Website planning checklist by Parallax Hearts",
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
    { name: "Website Planning Checklist", path: "/website-planning" },
  ]),
  {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${pageUrl}#article`,
    headline: "Website Planning Checklist for Artists, Creators, and Small Businesses",
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

const planningSections = [
  {
    title: "1. What should the site do?",
    text: "Before colors, photos, or page names, decide the main job of the site. A good site usually asks the visitor to do one clear thing: contact you, book you, listen, buy, read, subscribe, donate, or understand the work.",
    items: [
      "What is the main action visitors should take?",
      "Who is the site for?",
      "What should someone understand within the first few seconds?",
      "Is this a full site, a landing page, or a cleanup of something that already exists?",
    ],
  },
  {
    title: "2. What pages do you actually need?",
    text: "Most small sites do not need a complicated sitemap. Start with the pages that help people understand the work and take the next step.",
    items: [
      "Home",
      "About",
      "Services or Work",
      "Music, Portfolio, Products, or Examples",
      "Contact",
      "Support, Shop, Booking, or Subscription page if needed",
    ],
  },
  {
    title: "3. What materials should you gather?",
    text: "You do not need everything perfect before starting, but having the rough pieces in one place saves time and keeps the project from getting scattered.",
    items: [
      "Business, artist, or project name",
      "Short description of what you do",
      "Photos, logos, artwork, screenshots, or product images",
      "Existing links: social media, music, shop, Ko-fi, Skool, YouTube, SoundCloud, or booking pages",
      "Examples of websites you like and why you like them",
      "Any text you already have, even if it is messy",
    ],
  },
  {
    title: "4. What makes the site feel trustworthy?",
    text: "Trust does not come from flashy effects. It comes from clarity, consistency, proof, working links, readable pages, and a site that does not feel abandoned.",
    items: [
      "Clear headline",
      "Plain explanation of what you offer",
      "Real examples or work samples when available",
      "Easy contact path",
      "Mobile-friendly layout",
      "No broken links or outdated claims",
    ],
  },
  {
    title: "5. What happens after launch?",
    text: "A website usually needs small adjustments after people start using it. Plan for follow-up so every small change does not become an emergency.",
    items: [
      "Who will request updates?",
      "How often do changes need to happen?",
      "What counts as a small edit?",
      "What counts as a new section or bigger revision?",
      "Where will future photos, links, and copy be stored?",
    ],
  },
];

const quickChecklist = [
  "Project name",
  "Main goal",
  "Target visitor",
  "Pages needed",
  "Photos / logo / artwork",
  "Existing links",
  "Examples you like",
  "Deadline",
  "Budget range",
  "Who approves changes",
];

export default function WebsitePlanningPage() {
  return (
    <main className="websites-page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchemas) }}
      />

      <section className="section-shell hero-section websites-hero">
        <div className="site-container two-column">
          <div>
            <p className="kicker">Website Planning Resource</p>
            <h1 className="page-title">What to gather before starting a website.</h1>
            <p className="lead-copy">
              A practical checklist for artists, creators, small businesses, service providers, and local projects that need a new site, landing page, or cleanup pass.
            </p>
            <p className="soft-copy">
              You do not need to have everything perfect. The goal is to collect enough of the rough material so the site can be shaped clearly.
            </p>
            <div className="button-row websites-cta-row">
              <Link className="primary-button" href="/websites">
                Website services
              </Link>
              <Link className="ghost-button" href="/contact">
                Start a request
              </Link>
            </div>
          </div>

          <aside className="feature-card websites-hero-card">
            <p className="kicker">Quick checklist</p>
            <ul className="clean-list">
              {quickChecklist.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </aside>
        </div>
      </section>

      {planningSections.map((section, index) => (
        <section className={index % 2 === 0 ? "section-shell" : "section-shell muted-section"} key={section.title}>
          <div className="site-container two-column">
            <div>
              <p className="kicker">Planning step</p>
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
            <h2 className="section-title">Send the rough version.</h2>
            <p className="soft-copy" style={{ marginTop: "18px" }}>
              A good website project does not start with perfect copy. It starts with a clear purpose, a few honest materials, and a simple next action.
            </p>
          </div>

          <div className="feature-card">
            <p>
              Send the project name, what kind of site you need, the main thing visitors should do, and whatever links or images you already have.
            </p>
            <Link className="primary-button" href="/contact">
              Send website details
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
