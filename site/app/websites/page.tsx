import type { Metadata } from "next";
import Link from "next/link";
import { absoluteUrl, defaultKeywords, socialLinks } from "../lib/seo";

const pageTitle = "Custom Website Design for Artists and Small Businesses | Parallax Hearts";
const pageDescription =
  "Custom websites for artists, creators, small businesses, and local projects, built with clear structure, strong visual direction, mobile-first design, and practical follow-up support.";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    ...defaultKeywords,
    "custom website design",
    "website design for artists",
    "small business websites",
    "creator websites",
    "band websites",
    "portfolio websites",
    "landing pages",
    "website updates",
    "website follow up support",
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
        alt: "Custom website design services by Parallax Hearts",
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
  serviceType: "Custom website design, landing pages, creator websites, small business websites, and website update support",
  sameAs: [socialLinks.facebook, socialLinks.instagram, socialLinks.koFi],
  offers: {
    "@type": "Offer",
    availability: "https://schema.org/InStock",
    priceCurrency: "USD",
    description:
      "Custom website builds, visual direction, mobile-first page structure, launch help, and follow-up update support. Pricing depends on project scope.",
  },
};

const services = [
  {
    title: "Artist and creator sites",
    text: "Music projects, portfolios, story worlds, personal brands, and creator pages that need to look intentional instead of thrown together.",
  },
  {
    title: "Small business sites",
    text: "Clear service pages, local business sites, simple landing pages, and contact-focused websites built around what people actually need to do.",
  },
  {
    title: "Follow-up support",
    text: "After launch, I help with reasonable edits, cleanup, and small changes so the site keeps working after the first version goes live.",
  },
];

const process = [
  "We define the real goal of the site: contact, booking, listening, selling, support, or credibility.",
  "I shape the page structure, visual direction, copy flow, and calls to action.",
  "You review focused rounds instead of chasing scattered changes across messages.",
  "We launch the site, then handle follow-up updates on a clear schedule.",
];

const intakeItems = [
  "What kind of site you need",
  "Your business, artist, or project name",
  "The main action visitors should take",
  "Any existing links, photos, logos, music, products, or examples",
  "Pages you know you need, such as Home, About, Services, Music, Shop, or Contact",
  "A rough deadline, even if it is flexible",
];

const fitItems = [
  "Artists and musicians",
  "Small local businesses",
  "Creators and personal brands",
  "Service providers",
  "Portfolio projects",
  "Side businesses that need a serious first site",
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
            <h1 className="page-title">A better website without the agency fog.</h1>
            <p className="lead-copy">
              I build custom websites for artists, creators, small businesses, and local projects that need a clean, professional online home with strong visual direction and practical follow-up support.
            </p>
            <p className="soft-copy">
              Now taking website conversations for new builds, landing pages, creator sites, and practical site updates.
            </p>
            <div className="button-row">
              <Link className="primary-button" href="/contact">
                Request a website
              </Link>
              <Link className="ghost-button" href="#intake">
                See what I need from you
              </Link>
            </div>
          </div>

          <aside className="feature-card">
            <p className="kicker">The offer</p>
            <h2>Clean build. Clear structure. Real follow-up.</h2>
            <p>
              A website should explain who you are, what you offer, and what someone should do next. It should also be easy to update after it launches.
            </p>
            <p>
              This is built for people who do not want a bloated process, confusing pricing language, or a site that looks nice but does not lead anywhere.
            </p>
          </aside>
        </div>
      </section>

      <section className="section-shell">
        <div className="site-container">
          <p className="kicker">What I build</p>
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
            <p className="kicker">Who this is for</p>
            <h2 className="section-title">A focused site for people who need to be taken seriously online.</h2>
            <p className="soft-copy">
              This is for projects that need a real web presence: not just a social profile, not just a link page, and not a template that feels disconnected from the work.
            </p>
          </div>

          <div className="feature-card">
            <ul className="clean-list">
              {fitItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section-shell">
        <div className="site-container two-column">
          <div>
            <p className="kicker">Examples</p>
            <h2 className="section-title">Built from real project work.</h2>
            <p className="soft-copy">
              Parallaxhearts.org is the main example: music, story, support links, visual direction, SEO structure, and project pages organized into one clear home.
            </p>
            <p className="soft-copy">
              Acoustaland.org can also be used as a second example when discussing style direction, depending on the client and project need.
            </p>
          </div>

          <div className="feature-card">
            <p className="kicker">What matters most</p>
            <p>
              The site needs to work on a phone, load clearly, tell people what you do, and make the next step obvious.
            </p>
            <p>
              Visual polish matters, but structure is what keeps people from leaving confused.
            </p>
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

      <section className="section-shell" id="intake">
        <div className="site-container two-column">
          <div>
            <p className="kicker">Lead intake</p>
            <h2 className="section-title">What to send when you reach out.</h2>
            <p className="soft-copy">
              You do not need everything perfectly organized. Send what you have. The first job is turning the scattered pieces into a clear site plan.
            </p>
            <Link className="primary-button" href="/contact">
              Send website details
            </Link>
          </div>

          <div className="feature-card">
            <ul className="clean-list">
              {intakeItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section-shell">
        <div className="site-container two-column">
          <div>
            <p className="kicker">Pricing / Subscribers</p>
            <h2 className="section-title">Pricing depends on scope, not vague packages.</h2>
            <p className="soft-copy">
              A one-page site, a multi-page service site, and ongoing update support are different jobs. I keep the breakdown clear before work begins so there are no vague promises or surprise expectations.
            </p>
            <p className="soft-copy">
              Subscriber discounts, update-service perks, and deeper pricing breakdowns can be offered through the main subscribed page when that offer is active.
            </p>
          </div>

          <div className="feature-card">
            <p className="kicker">Next step</p>
            <h2>Tell me what you need the site to do.</h2>
            <p>
              The fastest way to start is simple: send the project name, what kind of site you need, and the main action visitors should take.
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
