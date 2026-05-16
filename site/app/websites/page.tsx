import type { Metadata } from "next";
import Link from "next/link";
import { absoluteUrl, defaultKeywords } from "../lib/seo";

const pageTitle = "Web Design Services | Local Signal Websites";
const pageDescription =
  "Custom websites for artists, creators, and small businesses — built by the same team behind Parallax Hearts. Fast, beautiful, and fully yours.";
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
    "Local Signal Websites",
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
        alt: "Web design services by Local Signal Websites",
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
};

const highlights = [
  {
    label: "Custom-coded",
    detail: "No templates. Every site is designed and built from scratch with modern tools.",
  },
  {
    label: "Blazing fast",
    detail: "Sub-second load times. Built on the same stack as Netflix and Nike.",
  },
  {
    label: "SEO from day one",
    detail: "Structured data, proper metadata, fast core web vitals — the stuff that ranks.",
  },
  {
    label: "You own everything",
    detail: "Your code, your domain, your data. No lock-in. No monthly ransom.",
  },
];

const tiers = [
  { name: "Starter Site", price: "from $800", note: "One-page responsive design" },
  { name: "Business Site", price: "from $2,000", note: "Multi-page with brand system & SEO", featured: true },
  { name: "Custom Build", price: "let's talk", note: "E-commerce, web apps, full-scope projects" },
];

export default function WebsitesPage() {
  return (
    <div className="page-container">
      <style>{`
        .ws-hero { text-align: center; padding: 6rem 1.5rem 3rem; max-width: 48rem; margin: 0 auto; }
        .ws-hero .kicker { font-size: 0.75rem; letter-spacing: 0.15em; text-transform: uppercase; color: var(--color-muted); margin-bottom: 1rem; }
        .ws-hero h1 { font-size: clamp(2rem, 5vw, 3.2rem); line-height: 1.15; font-weight: 800; margin-bottom: 1.25rem; }
        .ws-hero h1 em { font-style: normal; color: var(--color-accent, #d1a436); }
        .ws-hero .lead { font-size: 1.1rem; line-height: 1.7; color: var(--color-muted); max-width: 36rem; margin: 0 auto 2.5rem; }

        .ws-highlights { display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 1.25rem; max-width: 56rem; margin: 0 auto 3.5rem; padding: 0 1.5rem; }
        .ws-highlight { padding: 1.5rem; border-radius: 12px; border: 1px solid rgba(255,255,255,0.06); background: rgba(255,255,255,0.02); }
        .ws-highlight strong { display: block; font-size: 0.95rem; margin-bottom: 0.35rem; }
        .ws-highlight span { font-size: 0.85rem; color: var(--color-muted); line-height: 1.5; }

        .ws-tiers { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1rem; max-width: 48rem; margin: 0 auto 3.5rem; padding: 0 1.5rem; }
        .ws-tier { padding: 1.5rem; border-radius: 12px; border: 1px solid rgba(255,255,255,0.06); background: rgba(255,255,255,0.02); text-align: center; }
        .ws-tier.featured { border-color: var(--color-accent, #d1a436); background: rgba(209,164,54,0.06); }
        .ws-tier h3 { font-size: 1rem; font-weight: 700; margin-bottom: 0.25rem; }
        .ws-tier .price { font-size: 1.25rem; font-weight: 800; color: var(--color-accent, #d1a436); margin-bottom: 0.35rem; }
        .ws-tier .note { font-size: 0.8rem; color: var(--color-muted); }

        .ws-cta { text-align: center; padding: 0 1.5rem 5rem; }
        .ws-cta a.primary-btn { display: inline-block; padding: 0.9rem 2.5rem; border-radius: 10px; background: var(--color-accent, #d1a436); color: #1a1a1a; font-weight: 700; font-size: 1rem; text-decoration: none; transition: opacity 0.2s; }
        .ws-cta a.primary-btn:hover { opacity: 0.88; }
        .ws-cta .secondary-link { display: block; margin-top: 1rem; font-size: 0.85rem; color: var(--color-muted); }
        .ws-cta .secondary-link a { color: var(--color-accent, #d1a436); text-decoration: underline; text-underline-offset: 3px; }
      `}</style>

      <section className="ws-hero">
        <p className="kicker">Local Signal Websites</p>
        <h1>Websites that work as <em>hard as you do.</em></h1>
        <p className="lead">
          Custom-built websites for artists, creators, and small businesses —
          designed and developed by the same team behind this site.
          Clean code, fast performance, and design that actually converts.
        </p>
      </section>

      <section className="ws-highlights">
        {highlights.map((h) => (
          <div key={h.label} className="ws-highlight">
            <strong>{h.label}</strong>
            <span>{h.detail}</span>
          </div>
        ))}
      </section>

      <section className="ws-tiers">
        {tiers.map((t) => (
          <div key={t.name} className={`ws-tier${t.featured ? " featured" : ""}`}>
            <h3>{t.name}</h3>
            <div className="price">{t.price}</div>
            <div className="note">{t.note}</div>
          </div>
        ))}
      </section>

      <section className="ws-cta">
        <a
          href="https://www.localsignalwebsites.studio"
          target="_blank"
          rel="noopener noreferrer"
          className="primary-btn"
        >
          Visit Local Signal Websites →
        </a>
        <p className="secondary-link">
          Or go straight to the{" "}
          <a href="https://www.localsignalwebsites.studio/portfolio" target="_blank" rel="noopener noreferrer">
            portfolio
          </a>{" "}
          or{" "}
          <a href="https://www.localsignalwebsites.studio/contact" target="_blank" rel="noopener noreferrer">
            contact form
          </a>
        </p>
      </section>
    </div>
  );
}
