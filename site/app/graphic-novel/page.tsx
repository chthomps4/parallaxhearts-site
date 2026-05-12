import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import SiteHeader from "../components/SiteHeader";

export const metadata: Metadata = {
  title: "Graphic Novel | What the Town Keeps",
  description:
    "Read the built-in graphic novel / visual novel adaptation of What the Town Keeps by Parallax Hearts, beginning with Chapter One — Ballast.",
  keywords: [
    "What the Town Keeps graphic novel",
    "What the Town Keeps visual novel",
    "Parallax Hearts graphic novel",
    "Vallen",
    "Elias Vale",
    "Ballast",
    "cinematic literary drama",
    "small town graphic novel",
  ],
};

const accessCards = [
  {
    title: "Start Reading",
    label: "Page 001",
    text: "Begin Chapter One with Elias Vale at the crossing into Vallen.",
    href: "/graphic-novel/chapter-one/page-001",
  },
  {
    title: "Chapter One — Ballast",
    label: "Chapter archive",
    text: "Open the chapter table of contents and follow the live pages in order.",
    href: "/graphic-novel/chapter-one",
  },
  {
    title: "Story World",
    label: "Context",
    text: "Step back into the larger world of Vallen, the album, and What the Town Keeps.",
    href: "/project",
  },
];

const visualRules = [
  "Warm earthy cinematic realism",
  "Rainy Vallen streets, rail lines, old houses, and dim windows",
  "Restrained mature character rendering",
  "Readable integrated text and strong panel composition",
  "Emotional realism without horror, fantasy, or cheap thriller staging",
];

export default function GraphicNovelPage() {
  return (
    <main className="site-shell">
      <SiteHeader active="Read" />

      <section style={{ padding: "54px 0 34px" }}>
        <div className="site-container">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "minmax(0, 1fr) minmax(300px, 0.78fr)",
              gap: "28px",
              alignItems: "stretch",
            }}
          >
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
                <p className="kicker">What the Town Keeps / Visual Novel</p>

                <h1
                  style={{
                    margin: 0,
                    fontSize: "clamp(46px, 8vw, 92px)",
                    lineHeight: 0.9,
                    letterSpacing: "-0.07em",
                    fontWeight: 400,
                    maxWidth: "920px",
                  }}
                >
                  Read the story as it is being built.
                </h1>

                <p
                  className="body-copy"
                  style={{
                    margin: "24px 0 0",
                    maxWidth: "820px",
                    fontSize: "19px",
                  }}
                >
                  The visual novel begins with Chapter One, <em>Ballast</em>:
                  Elias Vale entering Vallen for a house inspection that slowly
                  becomes something heavier than work.
                </p>

                <div
                  style={{
                    marginTop: "30px",
                    display: "flex",
                    gap: "12px",
                    flexWrap: "wrap",
                  }}
                >
                  <Link href="/graphic-novel/chapter-one/page-001" className="primary-button">
                    Start Page 001
                  </Link>

                  <Link href="/graphic-novel/chapter-one" className="secondary-button">
                    Chapter One Archive
                  </Link>

                  <Link href="/music" className="secondary-button">
                    Listen to the Album
                  </Link>
                </div>
              </div>
            </div>

            <div
              className="glass-panel"
              style={{
                borderRadius: "28px",
                overflow: "hidden",
                minHeight: "460px",
              }}
            >
              <Image
                src="/images/project.jpg"
                alt="What the Town Keeps visual novel preview"
                width={1200}
                height={1400}
                priority
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  minHeight: "460px",
                }}
              />
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: "34px 0" }}>
        <div className="site-container">
          <p className="kicker">Reader paths</p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: "16px",
              marginTop: "18px",
            }}
          >
            {accessCards.map((card) => (
              <Link
                key={card.title}
                href={card.href}
                className="glass-panel link-card"
                style={{
                  padding: "26px",
                  borderRadius: "26px",
                  color: "var(--paper)",
                  textDecoration: "none",
                }}
              >
                <p
                  style={{
                    margin: "0 0 10px",
                    color: "var(--gold)",
                    fontSize: "12px",
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                  }}
                >
                  {card.label}
                </p>

                <h2
                  style={{
                    margin: 0,
                    fontSize: "31px",
                    lineHeight: 1.02,
                    letterSpacing: "-0.045em",
                    fontWeight: 400,
                  }}
                >
                  {card.title}
                </h2>

                <p className="soft-copy" style={{ margin: "14px 0 0" }}>
                  {card.text}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "34px 0 88px" }}>
        <div className="site-container">
          <div
            className="glass-panel"
            style={{
              padding: "clamp(26px, 5vw, 46px)",
              display: "grid",
              gridTemplateColumns: "minmax(0, 1fr) minmax(260px, 0.8fr)",
              gap: "28px",
              alignItems: "start",
            }}
          >
            <div>
              <p className="kicker">Visual language</p>
              <h2 className="section-title">A page should feel lived in.</h2>

              <p className="body-copy" style={{ margin: "18px 0 0" }}>
                The adaptation uses quiet panels, grounded faces, old houses,
                rain on glass, rail lines, and rooms that feel like they
                remember who has passed through them.
              </p>

              <p className="body-copy" style={{ margin: "18px 0 0" }}>
                The goal is emotional realism. The town is a witness and a
                pressure system, not a horror setting.
              </p>
            </div>

            <aside
              style={{
                border: "1px solid var(--line)",
                borderRadius: "24px",
                padding: "24px",
                background:
                  "linear-gradient(180deg, rgba(210,181,139,0.10), rgba(255,255,255,0.025))",
              }}
            >
              <p className="kicker" style={{ marginBottom: "18px" }}>
                Style rules
              </p>

              {visualRules.map((item) => (
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
            </aside>
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
