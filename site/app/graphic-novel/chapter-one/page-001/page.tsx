import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page 001 — The Crossing | Chapter One — Ballast",
  description:
    "Read page 001, The Crossing, from Chapter One — Ballast in the What the Town Keeps graphic novel / visual novel archive.",
  keywords: [
    "What the Town Keeps page 001",
    "Chapter One Ballast",
    "The Crossing",
    "Elias Vale",
    "Vallen",
    "Parallax Hearts graphic novel",
    "visual novel archive",
  ],
};

const navItems = [
  ["Home", "/"],
  ["Music", "/music"],
  ["Story", "/project"],
  ["Graphic Novel", "/graphic-novel"],
  ["Chapter One", "/graphic-novel/chapter-one"],
  ["Support", "/support"],
];

const pageNotes = [
  "Elias Vale enters Vallen as a home inspector, not as a hero.",
  "The rail crossing should feel like a threshold, not a supernatural gate.",
  "The town feels watched by memory, weather, and architecture rather than by anything paranormal.",
  "The page should work as both a story page and a standalone social post.",
];

export default function ChapterOnePage001() {
  return (
    <main className="site-shell">
      <section style={{ padding: "34px 0 18px" }}>
        <div className="site-container">
          <header
            style={{
              minHeight: "72px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              gap: "20px",
              flexWrap: "wrap",
              padding: "16px 0",
              borderBottom: "1px solid var(--line)",
            }}
          >
            <Link
              href="/"
              style={{
                color: "var(--paper)",
                textDecoration: "none",
                fontSize: "clamp(22px, 4vw, 32px)",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                lineHeight: 1,
              }}
            >
              Parallax Hearts
            </Link>

            <nav
              style={{
                display: "flex",
                gap: "16px",
                flexWrap: "wrap",
                alignItems: "center",
              }}
            >
              {navItems.map(([label, href]) => (
                <Link
                  key={label}
                  href={href}
                  style={{
                    color:
                      label === "Graphic Novel"
                        ? "var(--gold)"
                        : "var(--paper-soft)",
                    textDecoration: "none",
                    fontSize: "15px",
                  }}
                >
                  {label}
                </Link>
              ))}
            </nav>
          </header>
        </div>
      </section>

      <section style={{ padding: "54px 0 34px" }}>
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
                  Chapter One — Ballast / Page 001
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
                  The Crossing
                </h1>
              </div>

              <div
                style={{
                  display: "flex",
                  gap: "10px",
                  flexWrap: "wrap",
                }}
              >
                <Link href="/graphic-novel/chapter-one" className="secondary-button">
                  Chapter One
                </Link>

                <Link href="/graphic-novel/chapter-one/page-002" className="primary-button">
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
                  src="/images/world.jpg"
                  alt="Elias Vale crossing into Vallen in the rain"
                  width={1400}
                  height={1900}
                  priority
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    minHeight: "620px",
                    filter: "saturate(0.82) contrast(1.04)",
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
                    The first thing Vallen gave Elias Vale was the crossing.
                  </p>

                  <p className="body-copy" style={{ margin: "18px 0 0" }}>
                    Not a welcome. Not a warning. Just wet rails under a low sky,
                    the old station roof beyond them, and the sense that the
                    road had narrowed for a reason.
                  </p>

                  <p className="body-copy" style={{ margin: "18px 0 0" }}>
                    He had come to inspect a house. That was the work. Count the
                    cracks. Test the doors. Name the damage clearly enough that
                    someone else could decide what to do with it.
                  </p>

                  <p className="body-copy" style={{ margin: "18px 0 0" }}>
                    But before Mercer Street, before the boarding house, before
                    the first floorboard answered his weight, the town made him
                    cross the rails.
                  </p>
                </div>

                <div>
                  <p className="kicker">Social excerpt</p>
                  <p className="soft-copy" style={{ margin: "14px 0 0" }}>
                    The first thing Vallen gave Elias Vale was the crossing.
                  </p>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: "34px 0" }}>
        <div className="site-container">
          <div
            className="glass-panel"
            style={{
              padding: "clamp(24px, 4vw, 36px)",
              display: "grid",
              gridTemplateColumns: "minmax(0, 1fr) minmax(260px, 0.78fr)",
              gap: "24px",
              alignItems: "start",
            }}
          >
            <div>
              <p className="kicker">Page function</p>
              <h2 className="section-title">The first threshold.</h2>

              <p className="body-copy" style={{ margin: "18px 0 0" }}>
                Page 001 establishes the emotional grammar of the chapter:
                practical work on the surface, weather underneath, and the town
                as a pressure system before anyone says anything directly.
              </p>

              <div
                style={{
                  marginTop: "26px",
                  display: "flex",
                  gap: "12px",
                  flexWrap: "wrap",
                }}
              >
                <Link href="/graphic-novel/chapter-one" className="secondary-button">
                  Back to Chapter
                </Link>

                <Link href="/project" className="secondary-button">
                  Story World
                </Link>

                <Link href="/music" className="secondary-button">
                  Listen to the Album
                </Link>
              </div>
            </div>

            <aside
              style={{
                border: "1px solid var(--line)",
                borderRadius: "24px",
                padding: "24px",
                background: "rgba(255,255,255,0.025)",
              }}
            >
              <p className="kicker" style={{ marginBottom: "18px" }}>
                Continuity notes
              </p>

              {pageNotes.map((note) => (
                <div
                  key={note}
                  style={{
                    padding: "14px 0",
                    borderTop: "1px solid var(--line)",
                    color: "var(--paper-soft)",
                    fontSize: "15px",
                    lineHeight: 1.55,
                  }}
                >
                  {note}
                </div>
              ))}
            </aside>
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
            <Link href="/graphic-novel/chapter-one" className="secondary-button">
              ← Chapter One
            </Link>

            <Link href="/graphic-novel/chapter-one/page-002" className="primary-button">
              Page 002 →
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
