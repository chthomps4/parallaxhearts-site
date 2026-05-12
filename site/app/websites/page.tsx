import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "../components/SiteHeader";
import { absoluteUrl, breadcrumbSchema, defaultKeywords, socialLinks } from "../lib/seo";

const pageTitle = "Custom Websites for Artists, Creators, and Small Businesses | Parallax Hearts";
const pageDescription =
  "Custom websites for artists, creators, small businesses, and local projects, built with clear structure, strong visual direction, mobile-first pages, and practical follow-up after launch.";
const pageUrl = absoluteUrl("/websites");
const previewImage = absoluteUrl("/images/hero.jpg");

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

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `${pageUrl}#website-services`,
  name: "Parallax Hearts Website Services",
  url: pageUrl,
  image: previewImage,
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

const pageBreadcrumbSchema = breadcrumbSchema([
  { name: "Home", path: "/" },
  { name: "Website Services", path: "/websites" },
]);

const pageSchemas = [serviceSchema, pageBreadcrumbSchema];

const heroBadges = ["Mobile-first", "Clear structure", "Visual direction", "Follow-up support"];

const services = [
  {
    title: "Starter website",
    label: "Good first site",
    text: "A clean one-page or small multi-page site that explains who you are, what you offer, and how people should contact you.",
  },
  {
    title: "Artist / creator site",
    label: "For work with identity",
    text: "Websites for musicians, writers, visual projects, personal brands, story worlds, portfolios, and creative work that needs a real home.",
  },
  {
    title: "Landing page / update pass",
    label: "Focused conversion page",
    text: "Focused pages for ads, launches, services, subscriptions, or cleanup work on a site that already exists but no longer feels clear.",
  },
];

const offerTypes = [
  {
    title: "New site build",
    text: "For a project, artist, business, or service that needs a clean online home from the ground up.",
  },
  {
    title: "Ad landing page",
    text: "For Facebook, Instagram, Zeely, Skool, Ko-fi, music, services, or a focused offer that needs one clear page.",
  },
  {
    title: "Site cleanup",
    text: "For an existing website that looks decent but feels scattered, unclear, outdated, hard to navigate, or weak on mobile.",
  },
  {
    title: "Update support",
    text: "For small changes after launch: copy edits, new sections, link updates, image swaps, page cleanup, or practical improvements.",
  },
];

const pricingRanges = [
  {
    title: "Focused landing page",
    range: "Starting around $250–$500",
    text: "Best for an ad campaign, launch, service offer, music release, Skool class, Ko-fi page, or one clear call to action.",
  },
  {
    title: "Starter site",
    range: "Starting around $500–$900",
    text: "A clean one-page or small multi-section site with clear copy, mobile flow, contact path, and basic launch setup.",
  },
  {
    title: "Artist / creator site",
    range: "Starting around $900–$1,800+",
    text: "A fuller site for music, story, portfolio, services, support links, pages, visuals, and a stronger project structure.",
  },
  {
    title: "Cleanup / update pass",
    range: "Quoted by scope",
    text: "For existing sites that need clearer navigation, copy cleanup, new sections, mobile polish, or practical follow-up updates.",
  },
];

const adFitPoints = [
  "You have a real project, but the current online home feels scattered or unfinished.",
  "You need people to understand what you do without sending five separate links.",
  "You want a site that looks intentional, works on a phone, and gives visitors one clear next step.",
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

const proofPoints = [
  "music and story pages",
  "support and contact paths",
  "SEO structure",
  "visual archive pages",
  "project navigation",
  "mobile-friendly flow",
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

const subscriberPerks = [
  "early access to pricing breakdowns and process notes when available",
  "occasional website-service discounts or update credits when an offer is active",
  "behind-the-scenes explanations of how site scope, timing, and revisions are handled",
  "clearer ways to compare a small update, landing page, and full site build",
];

export default function WebsitesPage() {
  return (
    <main className="websites-page site-shell">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchemas) }}
      />

      <SiteHeader active="Services" />

      <section className="section-shell hero-section websites-hero">
        <div className="site-container two-column">
          <div>
            <p className="kicker">Website Design / Landing Pages / Site Updates</p>
            <h1 className="page-title">A clear website for the work you are already trying to explain.</h1>
            <p className="lead-copy">
              Custom websites for artists, creators, small businesses, and local projects — built with clean structure, strong visual direction, mobile-first pages, and practical follow-up after launch.
            </p>
            <p className="soft-copy">
              This is for people who need more than a social profile, a generic template, or a link page that sends visitors away confused.
            </p>

            <div className="button-row websites-cta-row">
              <Link className="primary-button" href="/website-intake">
                Start a website request
              </Link>
              <Link className="ghost-button" href="/portfolio">
                View portfolio
              </Link>
            </div>

            <div className="button-row websites-badge-row" style={{ marginTop: "18px" }}>
              {heroBadges.map((badge) => (
                <span className="ghost-button websites-badge" key={badge} style={{ cursor: "default" }}>
                  {badge}
                </span>
              ))}
            </div>
          </div>

          <aside className="feature-card websites-hero-card">
            <p className="kicker">Good fit if</p>
            <h2>You need the site to make the project easier to understand.</h2>
            <ul className="clean-list">
              {adFitPoints.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
            <Link className="primary-button" href="/website-intake">
              Send me the rough idea
            </Link>
          </aside>
        </div>
      </section>

      <section className="section-shell muted-section">
        <div className="site-container two-column">
          <div>
            <p className="kicker">Free planning resource</p>
            <h2 className="section-title">Not ready to ask for a site yet?</h2>
            <p className="soft-copy" style={{ marginTop: "18px" }}>
              Start with the website planning checklist. It shows what to gather before starting a new site, landing page, or cleanup pass.
            </p>
          </div>

          <div className="feature-card">
            <p>
              This checklist is useful for artists, creators, small businesses, service providers, and local projects that need a clearer online home.
            </p>
            <Link className="primary-button" href="/website-planning">
              Open the checklist
            </Link>
          </div>
        </div>
      </section>

      <section className="section-shell">
        <div className="site-container">
          <p className="kicker">What I build</p>
          <div className="card-grid three-card-grid">
            {services.map((service) => (
              <article className="feature-card" key={service.title}>
                <p className="kicker">{service.label}</p>
                <h2>{service.title}</h2>
                <p>{service.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell muted-section">
        <div className="site-container">
          <p className="kicker">What you can ask for</p>
          <h2 className="section-title">Start with the job you actually need done.</h2>
          <p className="soft-copy" style={{ maxWidth: "760px" }}>
            You do not have to know the right technical name for the work. Pick the closest starting point and send the rough version. The scope can be shaped from there.
          </p>
          <div className="card-grid two-card-grid" style={{ marginTop: "24px" }}>
            {offerTypes.map((offer) => (
              <article className="feature-card" key={offer.title}>
                <h2>{offer.title}</h2>
                <p>{offer.text}</p>
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
            <p className="kicker">Examples / portfolio</p>
            <h2 className="section-title">The proof starts with this site.</h2>
            <p className="soft-copy">
              Parallaxhearts.org is not just a band page. It connects music, story, visual pages, support links, SEO structure, contact paths, and project archives into one working site.
            </p>
            <p className="soft-copy">
              The portfolio page also includes ecustaland.org as a work-in-progress example, clearly labeled so visitors can see active site development without mistaking it for a finished case study.
            </p>
            <div className="button-row websites-cta-row">
              <Link className="primary-button" href="/portfolio">
                View portfolio
              </Link>
              <Link className="ghost-button" href="/website-intake">
                Start a request
              </Link>
            </div>
          </div>

          <div className="feature-card">
            <p className="kicker">This site already includes</p>
            <ul className="clean-list">
              {proofPoints.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section-shell muted-section">
        <div className="site-container two-column">
          <div>
            <p className="kicker">What to expect</p>
            <h2 className="section-title">Simple starting ranges. Final quote after scope.</h2>
            <p className="soft-copy">
              These are starting points, not locked packages. The final price depends on page count, content readiness, visual needs, forms, integrations, revision depth, and launch support.
            </p>
          </div>
          <div className="card-grid two-card-grid">
            {pricingRanges.map((item) => (
              <article className="feature-card" key={item.title}>
                <p className="kicker">{item.range}</p>
                <h2>{item.title}</h2>
                <p>{item.text}</p>
              </article>
            ))}
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
            <Link className="primary-button" href="/website-intake">
              Open the intake form
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
            <h2 className="section-title">Subscribers may receive website perks when offers are active.</h2>
            <p className="soft-copy">
              Subscriber perks may be used for website-service discounts, update credits, or deeper process breakdowns when a specific offer is active. They are not a blank promise of unlimited free work.
            </p>
          </div>

          <div className="feature-card">
            <p className="kicker">Subscriber perks may include</p>
            <ul className="clean-list">
              {subscriberPerks.map((perk) => (
                <li key={perk}>{perk}</li>
              ))}
            </ul>
            <Link className="primary-button" href="/support">
              View support options
            </Link>
          </div>
        </div>
      </section>

      <section className="section-shell">
        <div className="site-container two-column">
          <div>
            <p className="kicker">Next step</p>
            <h2 className="section-title">Send the rough version. I will help shape it.</h2>
            <p className="soft-copy">
              Send the project name, what kind of site you need, the main action visitors should take, and any links or images you already have. Rough notes are enough to start.
            </p>
          </div>

          <div className="feature-card">
            <p className="kicker">Start here</p>
            <h2>Tell me what the site needs to do.</h2>
            <p>
              The first useful question is simple: what should a visitor understand or do after landing on the site?
            </p>
            <Link className="primary-button" href="/website-intake">
              Open the intake form
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

          .websites-page .websites-badge-row {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 8px;
          }

          .websites-page .websites-badge {
            min-height: 40px;
            padding: 0 10px;
            font-size: 10px;
            letter-spacing: 0.1em;
            white-space: normal;
            text-align: center;
          }

          .websites-page .clean-list {
            padding-left: 18px;
          }

          .websites-page .clean-list li {
            margin-bottom: 8px;
          }
        }

        @media (max-width: 420px) {
          .websites-page .websites-badge-row {
            grid-template-columns: 1fr;
          }

          .websites-page .kicker {
            letter-spacing: 0.16em;
            font-size: 11px;
          }
        }
      `}</style>
    </main>
  );
}
