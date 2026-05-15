import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { absoluteUrl } from "../../../lib/seo";

const pageTitle = "Page 006 — The Waterline | Chapter One — Ballast";
const pageDescription =
  "Read page 006, The Waterline, from Chapter One — Ballast in the What the Town Keeps visual novel archive.";
const pageUrl = absoluteUrl("/graphic-novel/chapter-one/page-006");
const previewImage = absoluteUrl("/images/graphic-novel/chapter-one/vn-page-006.jpg");

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "What the Town Keeps page 006",
    "Chapter One Ballast",
    "The Waterline",
    "Elias Vale",
    "Vallen",
    "Parallax Hearts graphic novel",
    "visual novel archive",
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
        width: 1000,
        height: 1414,
        alt: "Chapter One Page 006 — The Waterline",
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
};

export default function ChapterOnePage006() {
  return (
    <main className="site-shell">
      <section style={{ padding: "42px 0 34px" }}>
        <div className="site-container">
          <div
            className="glass-panel"
            style={{
              padding: "clamp(22px, 4vw, 34px)",
              borderRadius: "32px",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                gap: "16px",
                flexWrap: "wrap",
                alignItems: "center",
                marginBottom: "22px",
              }}
            >
              <div>
                <p className="kicker" style={{ marginBottom: "10px" }}>
                  Chapter One — Ballast / Page 006
                </p>

                <h1
                  style={{
                    margin: 0,
                    fontSize: "clamp(38px, 7vw, 76px)",
                    lineHeight: 0.92,
                    letterSpacing: "-0.06em",
                    fontWeight: 400,
                  }}
                >
                  The Waterline
                </h1>
              </div>

              <div
                style={{
                  display: "flex",
                  gap: "10px",
                  flexWrap: "wrap",
                }}
              >
                <Link href="/graphic-novel/chapter-one/page-005" className="secondary-button">
                  Previous Page
                </Link>

                <Link href="/graphic-novel/chapter-one" className="primary-button">
                  Chapter Archive
                </Link>
              </div>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "minmax(0, 1fr) minmax(300px, 0.55fr)",
                gap: "24px",
                alignItems: "stretch",
              }}
            >
              <div
                style={{
                  border: "1px solid var(--line)",
                  borderRadius: "26px",
                  overflow: "hidden",
                  background: "rgba(0,0,0,0.28)",
                  minHeight: "620px",
                }}
              >
                <Image
                  src="/images/graphic-novel/chapter-one/vn-page-006.jpg"
                  alt="A faint waterline on the boarding house hallway wall"
                  width={1000}
                  height={1414}
                  priority
                  unoptimized
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    minHeight: "620px",
                  }}
                />
              </div>

              <aside
                style={{
                  border: "1px solid var(--line)",
                  borderRadius: "26px",
                  padding: "clamp(22px, 4vw, 32px)",
                  background:
                    "linear-gradient(180deg, rgba(210,181,139,0.10), rgba(255,255,255,0.025))",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  gap: "24px",
                }}
              >
                <div>
                  <p className="kicker">Narration</p>

                  <p
                    className="body-copy"
                    style={{
                      margin: "18px 0 0",
                      fontSize: "20px",
                      lineHeight: 1.75,
                    }}
                  >
                    The waterline was too clean to be old neglect.
                  </p>

                  <p className="body-copy" style={{ margin: "18px 0 0" }}>
                    Elias found it halfway down the hallway, a pale seam running
                    across the plaster at waist height. It passed behind the coat
                    hook, beneath the framed print, and stopped at the door trim
                    as if someone had drawn the flood with a ruler.
                  </p>

                  <p className="body-copy" style={{ margin: "18px 0 0" }}>
                    He crouched, touched two fingers to the wall, and brought
                    them back dry. No bloom. No softness. No fresh lift in the
                    paint. Just the mark of water where water had no business
                    remembering itself.
                  </p>

                  <p className="body-copy" style={{ margin: "18px 0 0" }}>
                    He wrote moisture history in the margin, then crossed it out.
                    The phrase felt too certain for a house that had not yet
                    decided what it wanted to admit.
                  </p>
                </div>

                <div>
                  <p className="kicker">Excerpt</p>
                  <p className="soft-copy" style={{ margin: "14px 0 0" }}>
                    Just the mark of water where water had no business remembering itself.
                  </p>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: "34px 0 88px" }}>
        <div className="site-container">
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              gap: "14px",
              flexWrap: "wrap",
            }}
          >
            <Link href="/graphic-novel/chapter-one/page-005" className="secondary-button">
              ← Page 005
            </Link>

            <Link href="/graphic-novel/chapter-one" className="primary-button">
              Chapter Archive →
            </Link>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 900px) {
          section div[style*="grid-template-columns"] {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </main>
  );
}
