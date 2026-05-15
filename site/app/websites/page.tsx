import Image from "next/image";
import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "../components/SiteHeader";
import { absoluteUrl, breadcrumbSchema, defaultKeywords, socialLinks } from "../lib/seo";

const pageTitle = "Custom Websites for Creators & Artists | Parallax Hearts";
const pageDescription =
  "Custom websites for artists, creators, small businesses, and local projects with clear structure, strong visuals, and follow-up support.";
const pageUrl = absoluteUrl("/websites");
const previewImage = absoluteUrl("/images/story-world.jpg");

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
  serviceType: [
    "Custom website design",
    "Artist websites",
    "Creator websites",
    "Small business websites",
    "Landing pages",
    "Website updates",
  ],
  sameAs: [socialLinks.facebook, socialLinks.instagram, socialLinks.koFi],
  makesOffer: [
    {
      "@type": "Offer",
      name: "Focused landing page",
      priceCurrency: "USD",
      priceSpecification: {
        "@type": "PriceSpecification",
        priceCurrency: "USD",
        minPrice: 250,
        maxPrice: 500,
      },
      description: "A focused page for an ad campaign, launch, service, course, or clear call to action.",
    },
    {
      "@type": "Offer",
      name: "Starter website",
      priceCurrency: "USD",
      priceSpecification: {
        "@type": "PriceSpecification",
        priceCurrency: "USD",
        minPrice: 500,
        maxPrice: 900,
      },
      description: "A clean one-page or small site with clear copy, mobile flow, and launch setup.",
    },
    {
      "@type": "Offer",
      name: "Artist or creator website",
      priceCurrency: "USD",
      priceSpecification: {
        "@type": "PriceSpecification",
        priceCurrency: "USD",
        minPrice: 900,
        maxPrice: 1800,
      },
      description: "A fuller site for music, story, portfolio, services, support links, visuals, and project structure.",
    },
  ],
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

const pricingRanges = [
  {
    title: "Focused landing page",
    range: "$250–$500+",
    text: "Best for an ad campaign, launch, service offer, music release, Skool class, Ko-fi page, or one clear call to action.",
  },
  {
    title: "Starter site",
    range: "$500–$900+",
    text: "A clean one-page or small multi-section site with clear copy, mobile flow, contact path, and basic launch setup.",
  },
  {
    title: "Artist / creator site",
    range: "$900–$1,800+",
    text: "A fuller site for music, story, portfolio, services, support links, pages, visuals, and a stronger project structure.",
  },
  {
    title: "Cleanup / update pass",
    range: "Quoted by scope",
    text: "For existing sites that need clearer navigation, copy cleanup, new sections, mobile polish, or practical follow-up updates.",
  },
];

const offerTypes = [
  "New site build",
  "Ad landing page",
  "Site cleanup",
  "Update support",
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
        <div className="site-container two-column websites-hero-grid">
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

          <aside className="feature-card websites-visual-card">
            <div className="websites-visual-frame">
              <Image
                src="/images/story-world.jpg"
                alt="Moody website planning workspace with cinematic Parallax Hearts visual direction"
                fill
                priority
                sizes="(max-width: 900px) 100vw, 460px"
                style={{ objectFit: "cover", filter: "saturate(0.7) contrast(1.08)" }}
              />
              <div className="websites-visual-overlay" aria-hidden="true" />
              <div className="websites-visual-copy">
                <p className="kicker">Local Signal Websites</p>
                <h2>Clear page flow. Strong first impression.</h2>
                <p>Built for visitors who need to understand what you do fast.</p>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section className="section-shell muted-section">
        <div className="site-container two-column">
          <div>
            <p className="kicker">Good fit if</p>
            <h2 className="section-title">You need the site to make the project easier to understand.</h2>
          </div>

          <div className="feature-card">
            <ul className="clean-list">
              {adFitPoints.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
            <Link className="primary-button" href="/website-intake">
              Send me the rough idea
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
            You do not have to know the right technical name for the work. Pick the closest starting point and send the rough version.
          </p>
          <div className="card-grid two-card-grid" style={{ marginTop: "24px" }}>
            {offerTypes.map((offer) => (
              <article className="feature-card" key={offer}>
                <h2>{offer}</h2>
                <p>
                  A focused service path for getting a clearer site, cleaner launch page, or practical update pass without turning the project into web jargon.
                </p>
              </article>
            ))}
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
              The goal is not to bury you in web jargon. The goal is to turn rough materials into a site that gives people a simple path to contact, listen, buy, book, read, or support.
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
            <p>The first useful question is simple: what should a visitor understand or do after landing on the site?</p>
            <Link className="primary-button" href="/website-intake">
              Open the intake form
            </Link>
          </div>
        </div>
      </section>

      <style>{`
        .websites-hero-grid {
          align-items: stretch;
        }

        .websites-visual-card {
          padding: 0;
          overflow: hidden;
          min-height: 520px;
        }

        .websites-visual-frame {
          position: relative;
          min-height: 520px;
          height: 100%;
        }

        .websites-visual-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, rgba(5,5,7,0.05), rgba(5,5,7,0.68) 58%, rgba(5,5,7,0.96)), radial-gradient(circle at 18% 20%, rgba(210,181,139,0.18), transparent 34%);
        }

        .websites-visual-copy {
          position: absolute;
          left: 24px;
          right: 24px;
          bottom: 24px;
        }

        .websites-visual-copy h2 {
          margin: 0;
          font-size: clamp(30px, 4vw, 46px);
          line-height: 0.98;
          letter-spacing: -0.05em;
          font-weight: 400;
        }

        .websites-visual-copy p:last-child {
          color: var(--paper-soft);
          line-height: 1.65;
        }

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

          .websites-page .websites-visual-card {
            min-height: 420px;
            padding: 0;
          }

          .websites-page .websites-visual-frame {
            min-height: 420px;
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
