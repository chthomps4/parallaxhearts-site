import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page 003 — The Boarding House | Chapter One — Ballast",
  description:
    "Read page 003, The Boarding House, from Chapter One — Ballast in the What the Town Keeps graphic novel / visual novel archive.",
  keywords: [
    "What the Town Keeps page 003",
    "Chapter One Ballast",
    "The Boarding House",
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

export default function ChapterOnePage003() {
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
                  Chapter One — Ballast / Page 003
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
                  The Boarding House
                </h1>
              </div>

              <div
                style={{
                  display: "flex",
                  gap: "10px",
                  flexWrap: "wrap",
                }}
              >
                <Link href="/graphic-novel/chapter-one/page-002" className="secondary-button">
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
                  src="/images/hero.jpg"
                  alt="The boarding house in Vallen after rain"
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
                    The boarding house stood three lots down from the corner,
                    set back behind a narrow strip of winter grass.
                  </p>

                  <p className="body-copy" style={{ margin: "18px 0 0" }}>
                    Its porch had settled unevenly toward the street. The paint
                    had given up in sheets under the lower windows. A gutter hung
                    loose above the steps, ticking rainwater into the same dark
                    mark it had been making for years.
                  </p>

                  <p className="body-copy" style={{ margin: "18px 0 0" }}>
                    Elias parked at the curb and waited before reaching for the
                    clipboard. Not because he believed in signs. He did not. But
                    some houses made a man pause before he gave them a number.
                  </p>

                  <p className="body-copy" style={{ margin: "18px 0 0" }}>
                    He wrote the address at the top of the report. Then he looked
                    up at the second-floor windows and felt, briefly, that the
                    house had already read his name.
                  </p>
                </div>

                <div>
                  <p className="kicker">Excerpt</p>
                  <p className="soft-copy" style={{ margin: "14px 0 0" }}>
                    Some houses made a man pause before he gave them a number.
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
            <Link href="/graphic-novel/chapter-one/page-002" className="secondary-button">
              ← Page 002
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
