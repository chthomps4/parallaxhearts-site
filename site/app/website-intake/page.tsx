import type { Metadata } from "next";
import Link from "next/link";
import { absoluteUrl, breadcrumbSchema, defaultKeywords } from "../lib/seo";
import WebsiteIntakeForm from "./WebsiteIntakeForm";

const pageTitle = "Website Intake Form | Parallax Hearts Website Services";
const pageDescription =
  "Send website project details for a new site, landing page, site cleanup, artist website, creator site, small business website, or update support.";
const pageUrl = absoluteUrl("/website-intake");
const previewImage = absoluteUrl("/images/hero.jpg");

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    ...defaultKeywords,
    "website intake form",
    "website project request",
    "custom website request",
    "small business website intake",
    "artist website request",
    "landing page request",
    "website cleanup request",
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
        alt: "Website intake form by Parallax Hearts",
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
  },
};

const pageSchemas = [
  breadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Website Services", path: "/websites" },
    { name: "Website Intake Form", path: "/website-intake" },
  ]),
];

const reminders = [
  "Use this form for a new website, landing page, cleanup pass, or update support.",
  "The form prepares an email addressed to chad@parallaxhearts.org.",
  "After your email app opens, attach logos, screenshots, photos, or documents before sending.",
  "Rough notes are fine. The first job is turning the scattered pieces into a clear site plan.",
];

export default function WebsiteIntakePage() {
  return (
    <main className="websites-page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchemas) }}
      />

      <section className="section-shell hero-section websites-hero">
        <div className="site-container two-column">
          <div>
            <p className="kicker">Website Intake Form</p>
            <h1 className="page-title">Send the rough version of the site you need.</h1>
            <p className="lead-copy">
              Use this form to gather the main details for a new website, landing page, site cleanup, or ongoing update support.
            </p>
            <p className="soft-copy">
              You do not need perfect copy, final photos, or a complete plan. Send what you have, and the structure can be shaped from there.
            </p>
            <div className="button-row websites-cta-row">
              <Link className="ghost-button" href="/websites">
                Back to services
              </Link>
              <Link className="ghost-button" href="/website-planning">
                Planning checklist
              </Link>
            </div>
          </div>

          <aside className="feature-card websites-hero-card">
            <p className="kicker">Before you send</p>
            <ul className="clean-list">
              {reminders.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </aside>
        </div>
      </section>

      <section className="section-shell">
        <div className="site-container">
          <WebsiteIntakeForm />
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

          .websites-page .feature-card {
            border-radius: 22px;
            padding: 22px;
          }

          .websites-page .websites-cta-row {
            display: grid;
            grid-template-columns: 1fr;
            gap: 10px;
          }

          .websites-page .websites-cta-row a,
          .websites-page .feature-card .primary-button,
          .websites-page .feature-card .ghost-button {
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
