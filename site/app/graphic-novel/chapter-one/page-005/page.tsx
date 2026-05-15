import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { absoluteUrl } from "../../../lib/seo";

const pageUrl = absoluteUrl("/graphic-novel/chapter-one/page-005");

export const metadata: Metadata = {
  title: "Page 005 — The Hallway | Chapter One — Ballast",
  description:
    "Read page 005, The Hallway, from Chapter One — Ballast in the What the Town Keeps visual novel archive.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Page 005 — The Hallway | Chapter One — Ballast",
    description:
      "Read page 005, The Hallway, from Chapter One — Ballast in the What the Town Keeps visual novel archive.",
    url: pageUrl,
    siteName: "Parallax Hearts",
    images: [{ url: absoluteUrl("/images/graphic-novel-hub.jpg"), width: 1200, height: 630, alt: "Page 005 — The Hallway | Chapter One — Ballast" }],
    locale: "en_US",
    type: "website",
  },
  keywords: [
    "What the Town Keeps page 005",
    "Chapter One Ballast",
    "The Hallway",
    "Elias Vale",
    "Vallen",
    "Parallax Hearts graphic novel",
    "visual novel archive",
  ],
};

export default function ChapterOnePage005() {
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
                  Chapter One — Ballast / Page 005
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
                  The Hallway
                </h1>
              </div>

              <div
                style={{
                  display: "flex",
                  gap: "10px",
                  flexWrap: "wrap",
                }}
              >
                <Link href="/graphic-novel/chapter-one/page-004" className="secondary-button">
                  Previous Page
                </Link>

                <Link href="/graphic-novel/chapter-one/page-006" className="primary-button">
                  Next Page
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
                  src="/images/graphic-novel/chapter-one/page-005-hallway.svg"
                  alt="Elias Vale inside the boarding house hallway"
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
                    The hallway held the weather differently.
                  </p>

                  <p className="body-copy" style={{ margin: "18px 0 0" }}>
                    Outside, rain moved with purpose. In here, it became smell:
                    damp wool, old paper, radiator heat, and the faint mineral
                    edge of water that had entered where it was not invited.
                  </p>

                  <p className="body-copy" style={{ margin: "18px 0 0" }}>
                    Elias stood just inside the door and let his eyes adjust.
                    A coat hung from a wall hook. A stack of papers leaned on a
                    narrow table. The floorboards ran inward like a held breath.
                  </p>

                  <p className="body-copy" style={{ margin: "18px 0 0" }}>
                    He did not write anything yet. Some rooms needed a moment
                    before they could be named.
                  </p>
                </div>

                <div>
                  <p className="kicker">Excerpt</p>
                  <p className="soft-copy" style={{ margin: "14px 0 0" }}>
                    Some rooms needed a moment before they could be named.
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
            <Link href="/graphic-novel/chapter-one/page-004" className="secondary-button">
              ← Page 004
            </Link>

            <Link href="/graphic-novel/chapter-one/page-006" className="primary-button">
              Page 006 →
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
