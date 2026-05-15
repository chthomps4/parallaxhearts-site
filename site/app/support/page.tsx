import Link from "next/link";
import type { Metadata } from "next";
import SiteHeader from "../components/SiteHeader";
import { absoluteUrl } from "../lib/seo";

const koFiUrl = "https://ko-fi.com/parallaxhearts";
const pageTitle = "Support | Parallax Hearts";
const pageDescription =
  "Support Parallax Hearts, What the Town Keeps, the Vallen story world, visual novel pages, music, and related creative work through Ko-fi.";
const pageUrl = absoluteUrl("/support");
const previewImage = absoluteUrl("/images/project.jpg");

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
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
        alt: "Support Parallax Hearts and What the Town Keeps",
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

const tiers = [
  {
    name: "Porch Light",
    price: "$3 / month",
    purpose: "A quiet way to support Parallax Hearts and What the Town Keeps.",
    includes: [
      "Credits and supporter thanks when appropriate",
      "Regular project updates from Vallen",
      "Behind-the-song notes",
      "Small visual previews",
    ],
  },
  {
    name: "Station Room",
    price: "$7 / month",
    purpose: "The main support tier for music, story, and visual material.",
    includes: [
      "Everything in Porch Light",
      "Early access to selected pages, posts, or previews",
      "Lyrics and song notes",
      "Downloadable extras when available",
      "Concept art and album-art previews",
    ],
  },
  {
    name: "Town Archive",
    price: "$15 / month",
    purpose: "The deeper creative archive for the project.",
    includes: [
      "Everything in Station Room",
      "High-resolution art packs",
      "Downloadable lyric and story PDFs",
      "Graphic novel previews",
      "Album artwork variants",
      "Selected unreleased or alternate material when available",
    ],
  },
];

const supportPaths = [
  {
    title: "Support on Ko-fi",
    text: "Memberships, one-time support, and digital project items live here.",
    href: koFiUrl,
    label: "Open Ko-fi",
    external: true,
  },
  {
    title: "Listen first",
    text: "Hear the album before choosing how you want to support it.",
    href: "/music",
    label: "Open Music",
  },
  {
    title: "Read the story",
    text: "Begin the visual novel archive with Chapter One — Ballast.",
    href: "/graphic-novel/chapter-one/page-001",
    label: "Start Reading",
  },
];

const shopItems = [
  "Digital album",
  "Lyric book PDF",
  "Concept art pack",
  "Graphic novel preview PDF",
  "Story fragments / archive PDFs",
  "Complete support bundle",
];

export default function SupportPage() {
  return (
    <main className="site-shell">
      <SiteHeader active="Support" />

      <section style={{ padding: "54px 0 34px" }}>
        <div className="site-container">
          <div
            className="glass-panel"
            style={{
              padding: "clamp(28px, 6vw, 58px)",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <div
              aria-hidden="true"
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "radial-gradient(circle at 18% 10%, rgba(210,181,139,0.16), transparent 30%), radial-gradient(circle at 82% 20%, rgba(127,141,155,0.14), transparent 34%)",
                pointerEvents: "none",
              }}
            />

            <div style={{ position: "relative", zIndex: 2 }}>
              <p className="kicker">Support Parallax Hearts</p>

              <h1
                style={{
                  margin: 0,
                  fontSize: "clamp(46px, 8vw, 92px)",
                  lineHeight: 0.9,
                  letterSpacing: "-0.07em",
                  fontWeight: 400,
                  maxWidth: "940px",
                }}
              >
                Help keep the songs and story moving.
              </h1>

              <p
                className="body-copy"
                style={{
                  margin: "24px 0 0",
                  maxWidth: "760px",
                  fontSize: "19px",
                }}
              >
                Direct support helps keep <em>What the Town Keeps</em> alive as
                music, story, visual work, and a growing chapter-by-chapter
                archive. Ko-fi is the main support path.
              </p>

              <div
                style={{
                  marginTop: "30px",
                  display: "flex",
                  gap: "12px",
                  flexWrap: "wrap",
                }}
              >
                <a
                  href={koFiUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="primary-button"
                >
                  Support on Ko-fi
                </a>

                <Link href="/shop" className="secondary-button">
                  View Shop
                </Link>

                <Link href="/music" className="secondary-button">
                  Listen First
                </Link>

                <Link href="/graphic-novel/chapter-one/page-001" className="secondary-button">
                  Start Reading
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: "34px 0" }}>
        <div className="site-container">
          <p className="kicker">Support paths</p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
              gap: "16px",
              marginTop: "18px",
            }}
          >
            {supportPaths.map((lane) => (
              <article
                key={lane.title}
                className="glass-panel link-card"
                style={{ padding: "26px", borderRadius: "26px" }}
              >
                <h2
                  style={{
                    margin: 0,
                    fontSize: "32px",
                    lineHeight: 1,
                    letterSpacing: "-0.045em",
                    fontWeight: 400,
                  }}
                >
                  {lane.title}
                </h2>

                <p className="soft-copy" style={{ margin: "14px 0 22px" }}>
                  {lane.text}
                </p>

                {lane.external ? (
                  <a
                    href={lane.href}
                    target="_blank"
                    rel="noreferrer"
                    className="secondary-button"
                  >
                    {lane.label}
                  </a>
                ) : (
                  <Link href={lane.href} className="secondary-button">
                    {lane.label}
                  </Link>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "34px 0" }}>
        <div className="site-container">
          <p className="kicker">Membership tiers</p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: "18px",
            }}
          >
            {tiers.map((tier) => (
              <article
                key={tier.name}
                className="glass-panel"
                style={{
                  padding: "28px",
                  borderRadius: "26px",
                }}
              >
                <p
                  style={{
                    margin: "0 0 10px",
                    color: "var(--gold)",
                    fontSize: "13px",
                    letterSpacing: "0.16em",
                    textTransform: "uppercase",
                  }}
                >
                  {tier.price}
                </p>

                <h2
                  style={{
                    margin: 0,
                    fontSize: "34px",
                    lineHeight: 1,
                    letterSpacing: "-0.045em",
                    fontWeight: 400,
                  }}
                >
                  {tier.name}
                </h2>

                <p className="soft-copy" style={{ margin: "14px 0 20px" }}>
                  {tier.purpose}
                </p>

                <div style={{ display: "grid", gap: "12px" }}>
                  {tier.includes.map((item) => (
                    <div
                      key={item}
                      style={{
                        paddingTop: "12px",
                        borderTop: "1px solid var(--line)",
                        color: "var(--paper-soft)",
                        fontSize: "15px",
                        lineHeight: 1.55,
                      }}
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>

          <div
            style={{
              marginTop: "24px",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <a
              href={koFiUrl}
              target="_blank"
              rel="noreferrer"
              className="primary-button"
            >
              Join on Ko-fi
            </a>
          </div>
        </div>
      </section>

      <section style={{ padding: "34px 0" }}>
        <div className="site-container">
          <div
            className="glass-panel"
            style={{
              padding: "clamp(26px, 5vw, 44px)",
              display: "grid",
              gridTemplateColumns: "minmax(0, 1fr) minmax(260px, 0.8fr)",
              gap: "28px",
              alignItems: "start",
            }}
          >
            <div>
              <p className="kicker">One-time support / shop</p>

              <h2 className="section-title">Digital items and bundles.</h2>

              <p className="body-copy" style={{ margin: "20px 0 0" }}>
                The Ko-fi shop can also hold one-time items for people who want
                to support without a monthly membership. The site shop keeps the
                purchase path visible from inside parallaxhearts.org.
              </p>

              <div
                style={{
                  marginTop: "26px",
                  display: "flex",
                  gap: "12px",
                  flexWrap: "wrap",
                }}
              >
                <a
                  href={koFiUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="primary-button"
                >
                  Visit Ko-fi Shop
                </a>

                <Link href="/shop" className="secondary-button">
                  View Shop Page
                </Link>
              </div>
            </div>

            <div
              style={{
                border: "1px solid var(--line)",
                borderRadius: "24px",
                padding: "22px",
                background: "rgba(255,255,255,0.025)",
              }}
            >
              {shopItems.map((item) => (
                <div
                  key={item}
                  style={{
                    padding: "14px 0",
                    borderTop: "1px solid var(--line)",
                    color: "var(--paper-soft)",
                    fontSize: "15px",
                    lineHeight: 1.55,
                  }}
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: "34px 0 88px" }}>
        <div className="site-container">
          <div
            className="glass-panel"
            style={{
              padding: "clamp(26px, 5vw, 44px)",
              textAlign: "center",
            }}
          >
            <p className="kicker">Thank you</p>

            <h2 className="section-title">Every listen and share helps.</h2>

            <p
              className="body-copy"
              style={{
                margin: "20px auto 0",
                maxWidth: "700px",
              }}
            >
              Support can be a membership, a one-time purchase, a share, a
              listen, or simply following the work as it grows.
            </p>

            <div
              style={{
                marginTop: "28px",
                display: "flex",
                justifyContent: "center",
                gap: "12px",
                flexWrap: "wrap",
              }}
            >
              <a
                href={koFiUrl}
                target="_blank"
                rel="noreferrer"
                className="primary-button"
              >
                Support on Ko-fi
              </a>

              <Link href="/shop" className="secondary-button">
                Shop
              </Link>

              <Link href="/contact" className="secondary-button">
                Social Links
              </Link>

              <Link href="/" className="secondary-button">
                Back Home
              </Link>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 900px) {
          section .glass-panel[style*="grid-template-columns"] {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </main>
  );
}
