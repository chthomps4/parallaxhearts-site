import type { Metadata } from "next";
import Link from "next/link";
import { absoluteUrl } from "../lib/seo";

const pageUrl = absoluteUrl("/portfolio");

export const metadata: Metadata = {
  title: "Website Portfolio | Parallax Hearts Website Services",
  description:
    "Selected website examples and work-in-progress builds from Parallax Hearts Website Services.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Website Portfolio | Parallax Hearts Website Services",
    description:
      "Selected website examples and work-in-progress builds from Parallax Hearts Website Services.",
    url: pageUrl,
    siteName: "Parallax Hearts",
    images: [{ url: absoluteUrl("/images/project.jpg"), width: 1200, height: 630, alt: "Parallax Hearts Website Portfolio" }],
    locale: "en_US",
    type: "website",
  },
};

const portfolioItems = [
  {
    title: "parallaxhearts.org",
    status: "Live project site",
    text: "A working example of a layered creative website: music, story world, visual novel paths, support links, contact paths, and website-services structure.",
    details: [
      "Music and story-world structure",
      "Visual novel and graphic novel paths",
      "Support and contact flows",
      "Mobile navigation and SEO passes",
    ],
  },
  {
    title: "ecustaland.org",
    status: "Work in progress",
    text: "A developing website build that can be used as a portfolio example while it is still being shaped, refined, and tested.",
    details: [
      "Work-in-progress build",
      "Active site development example",
      "Iterative design and follow-up improvement",
      "Final presentation can be tightened as the site matures",
    ],
  },
];

export default function PortfolioPage() {
  return (
    <main className="websites-page site-shell">
      <section className="section-shell hero-section websites-hero">
        <div className="site-container two-column">
          <div>
            <p className="kicker">Website Portfolio</p>
            <h1 className="page-title">Real examples, active builds, and work still being shaped.</h1>
            <p className="lead-copy">
              A small portfolio of website work connected to artist, creator,
              music, story, and project-based sites. Some examples are live;
              some are honestly labeled as work in progress.
            </p>
            <p className="soft-copy">
              The point is not to pretend every project is finished. The point
              is to show how structure, visual direction, mobile flow, and
              follow-up support develop over time.
            </p>
            <div className="button-row websites-cta-row">
              <Link className="primary-button" href="/website-intake">
                Start a website request
              </Link>
              <Link className="ghost-button" href="/websites">
                View services
              </Link>
            </div>
          </div>

          <aside className="feature-card websites-hero-card">
            <p className="kicker">How to read this page</p>
            <h2>Finished work and active builds are labeled separately.</h2>
            <p>
              A live project site shows what is already public. A work-in-progress
              site shows the development process, the revision path, and how a
              site can improve over time.
            </p>
          </aside>
        </div>
      </section>

      <section className="section-shell">
        <div className="site-container">
          <p className="kicker">Examples</p>
          <div className="card-grid two-card-grid">
            {portfolioItems.map((item) => (
              <article className="feature-card" key={item.title}>
                <p className="kicker">{item.status}</p>
                <h2>{item.title}</h2>
                <p>{item.text}</p>
                <ul className="clean-list">
                  {item.details.map((detail) => (
                    <li key={detail}>{detail}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell muted-section">
        <div className="site-container two-column">
          <div>
            <p className="kicker">Next example</p>
            <h2 className="section-title">Your site can start rough and become clear.</h2>
            <p className="soft-copy">
              Most useful websites do not begin perfectly. They begin with a real
              project, a few scattered pieces, and one clear question: what should
              a visitor understand or do after landing here?
            </p>
          </div>

          <div className="feature-card">
            <p>
              Send the rough version: project name, what you do, the action you
              want visitors to take, and any links, photos, logos, notes, or
              examples you already have.
            </p>
            <Link className="primary-button" href="/website-intake">
              Open the intake form
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
