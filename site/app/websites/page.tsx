import type { Metadata } from "next";
import Link from "next/link";
import { absoluteUrl, defaultKeywords, socialLinks } from "../lib/seo";

const pageTitle = "Custom Websites for Artists, Creators, and Small Businesses | Parallax Hearts";
const pageDescription =
  "Custom websites for artists, creators, small businesses, and local projects, built with clear structure, strong visual direction, mobile-first pages, and practical follow-up after launch.";

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
  serviceType:
    "Custom website design, artist websites, creator websites, small business websites, landing pages, and website update support",
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
    title: "Starter websites",
    text: "A clean one-page or small multi-page site that explains who you are, what you offer, and how people should contact you.",
  },
  {
    title: "Artist and creator sites",
    text: "Websites for musicians, writers, visual projects, personal brands, story worlds, portfolios, and creative work that needs a real home.",
  },
  {
    title: "Landing pages and updates",
    text: "Focused pages for ads, launches, services, subscriptions, or cleanup work on a site that already exists but no longer feels clear.",
  },
];

const reasons = [
  {
    title: "Built around purpose",
    text: "Before design comes the real question: what should this site help people do — contact you, book you, listen, buy, read, support, or understand the work?",
  },
  {
    title: "Visual direction matters",
    text: "The site should not feel like a blank template. Color, copy, layout, images, and page flow should feel connected to the person or project behind it.",
  },
  {
    title: "Follow-up is part of the job",
    text: "A site is never fully understood until people start using it. I keep room for practical edits, cleanup, and small improvements after launch.",
  },
];

const process = [
  "Tell me what the site needs to do.",
  "Send the rough pieces you already have.",
  "I shape the structure, copy flow, and visual direction.",
  "You review focused changes instead of scattered guesswork.",
  "We launch the site and handle follow-up updates clearly.",
];

const intakeItems = [
  "Your business, artist, or project name",
  "What you offer or what the project is",
  "The main action visitors should take",
  "Any links, photos, logos, products, music, examples, or rough notes",
  "Pages you think you need, such as Home, About, Services, Music, Shop, or Contact",
  "A rough deadline and budget range, even if both are flexible",
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
            <h1 className="page-title">Custom websites for artists, creators, and small businesses.</h1>
            <p className="lead-copy">
              I build clean, practical websites with strong visual direction, clear page structure, mobile-first design, and real follow-up after launch.
            </p>
            <p className="soft-copy">
              This is for people who need more than a social profile, a generic template, or a link page that does not explain anything.
            </p>
            <div className="button-row">
              <Link className="primary-button" href="/contact">
                Start a website request
              </Link>
              <Link className="ghost-button" href="#intake">
                What to send me
              </Link>
            </div>
          </div>

          <aside className="feature-card">
            <p className="kicker">The offer</p>
            <h2>A site that explains the work and gives people a clear next step.</h2>
            <p>
              Good websites do not need to be bloated. They need to be clear, believable, easy to use on a phone, and built around what the visitor should do next.
            </p>
            <p>
              I help shape the copy, structure, and visual direction so the finished site feels like it belongs to you instead of looking like a rented template.
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
              This is a good fit when your project is real, but your online presence does not yet explain it well enough. The goal is simple: make the site feel clear, trustworthy, and easy to act on.
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
        <div className="site-container">
          <p className="kicker">Why work with me</p>
          <div className="card-grid three-card-grid">
            {reasons.map((reason) => (
              <article className="feature-card" key={reason.title}>
                <h2>{reason.title}</h2>
                <p>{reason.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell">
        <div className="site-container two-column">
          <div>
            <p className="kicker">Examples</p>
            <h2 className="section-title">The proof is this site.</h2>
            <p className="soft-copy">
              Parallaxhearts.org is not just a band page. It connects music, story, visual pages, support links, SEO structure, contact paths, and project archives into one working site.
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
            <h2 className="section-title">Clear scope, focused review rounds, and practical follow-up.</h2>
            <p className="soft-copy">
              The goal is not to bury you in web jargon. The goal is to turn rough materials into a site that represents you well and gives people a simple path to contact, listen, buy, book, read, or support.
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
              You do not need everything perfectly organized. Send what you have. The first job is turning scattered pieces into a clear site plan.
            </p>
            <Link className="primary-button" href="/contact">
              Send me your website idea
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
              A one-page site, a multi-page service site, a landing page, and ongoing update support are different jobs. I keep the breakdown clear before work begins so there are no vague promises or surprise expectations.
            </p>
            <p className="soft-copy">
              Subscriber discounts, update-service perks, and deeper pricing breakdowns can be offered through the main subscribed page when that offer is active.
            </p>
          </div>

          <div className="feature-card">
            <p className="kicker">Next step</p>
            <h2>Tell me what the site needs to do.</h2>
            <p>
              Send the project name, what kind of site you need, and the main action visitors should take. Rough notes are enough to start.
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
