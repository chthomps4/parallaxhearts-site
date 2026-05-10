import type { Metadata } from "next";
import Link from "next/link";
import { absoluteUrl, defaultKeywords, socialLinks } from "../lib/seo";

const pageTitle = "Website Design Services | Parallax Hearts";
const pageDescription =
  "Custom websites for artists, small businesses, creators, and local projects, built with strong visual direction, clear structure, and practical follow-up support.";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    ...defaultKeywords,
    "website design",
    "small business websites",
    "artist websites",
    "creator websites",
    "custom website service",
    "website updates",
  ],
  alternates: {
    canonical: absoluteUrl("/websites"),
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: absoluteUrl("/websites"),
    siteName: "Parallax Hearts",
    images: [
      {
        url: "/images/hero.jpg",
        width: 1200,
        height: 630,
        alt: "Website design services by Parallax Hearts",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: ["/images/hero.jpg"],
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Parallax Hearts Website Services",
  url: absoluteUrl("/websites"),
  description: pageDescription,
  areaServed: "United States",
  serviceType: "Custom website design and website update support",
  sameAs: [socialLinks.facebook, socialLinks.instagram, socialLinks.koFi],
  offers: {
    "@type": "Offer",
    availability: "https://schema.org/InStock",
    priceCurrency: "USD",
    description:
      "Custom website builds, visual direction, page structure, launch help, and follow-up update support. Pricing depends on scope.",
  },
};

const services = [
  {
    title: "Starter website",
    text: "A clean, focused site for an artist, small business, service, portfolio, landing page, or local project.",
  },
  {
    title: "Visual direction",
    text: "A site that feels intentional instead of generic — color, layout, copy, imagery, and structure working together.",
  },
  {
    title: "Follow-up support",
    text: "Reasonable update help after launch so you are not left with a finished site you cannot change.",
  },
];

const process = [
  "We define what the site needs to do.",
  "I build the page structure, copy direction, and visual layout.",
  "You review the site in clear rounds instead of scattered messages.",
  "We launch it, then handle follow-up updates on a practical schedule.",
];

export default function WebsitesPage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      <section className="section-shell hero-section">
        <div className="site-container two-column">
          <div>
            <p className="kicker">Website Design / Build Support</p>
            <h1 className="page-title">Websites that look finished, feel personal, and stay manageable.</h1>
            <p className="lead-copy">
              I build custom websites for artists, small businesses, creators, and local projects that need a stronger online home without becoming trapped in a complicated system.
            </p>
            <div className="button-row">
              <Link className="primary-button" href="/contact">
                Ask about a website
              </Link>
              <Link className="ghost-button" href="/">
                View this site
              </Link>
            </div>
          </div>

          <aside className="feature-card">
            <p className="kicker">Example direction</p>
            <h2>Built from real project work.</h2>
            <p>
              This site, parallaxhearts.org, is the main example: music, story, support links, visual direction, and project pages all organized into one clear home.
            </p>
            <p>
              Acoustaland.org can also be used as a second example when discussing possible styles, depending on the client and project need.
            </p>
          </aside>
        </div>
      </section>

      <section className="section-shell">
        <div className="site-container">
          <p className="kicker">What I can build</p>
          <div className="card-grid three-card-grid">
            {services.map((service) => (
              <article className="feature-card" key={service.title}>
                <h2>{service.title}</h2>
                <p>{service.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell muted-section">
        <div className="site-container two-column">
          <div>
            <p className="kicker">How the work is handled</p>
            <h2 className="section-title">Clear scope, clean rounds, practical follow-up.</h2>
            <p className="soft-copy">
              The goal is not to sell you a confusing tech package. The goal is to build a site that represents you well, explains what you offer, and gives people a simple path to contact, listen, buy, book, or support.
            </p>
          </div>
          <ol className="process-list">
            {process.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section-shell">
        <div className="site-container two-column">
          <div>
            <p className="kicker">Pricing / Subscribers</p>
            <h2 className="section-title">Pricing depends on scope.</h2>
            <p className="soft-copy">
              A simple one-page site, a larger multi-page site, and ongoing update support are different jobs. I keep the breakdown clear before work begins so there are no vague promises or surprise expectations.
            </p>
            <p className="soft-copy">
              Subscriber discounts, update-service perks, and deeper pricing breakdowns can be offered through the main subscribed page when that offer is active.
            </p>
          </div>
          <div className="feature-card">
            <p className="kicker">Best fit</p>
            <p>
              Artists, musicians, local services, creators, side businesses, personal brands, small organizations, and projects that need a strong first web presence.
            </p>
            <Link className="primary-button" href="/contact">
              Start the conversation
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
