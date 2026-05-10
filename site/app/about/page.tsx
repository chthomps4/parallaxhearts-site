import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Parallax Hearts",
  description:
    "About Parallax Hearts, What the Town Keeps, the Vallen story world, visual novel archive, and Field Notes research lane.",
};

const navItems = [
  ["Home", "/"],
  ["Music", "/music"],
  ["Story", "/project"],
  ["Graphic Novel", "/graphic-novel"],
  ["Field Notes", "/field-notes"],
  ["Shop", "/shop"],
  ["Support", "/support"],
  ["About", "/about"],
  ["Contact", "/contact"],
];

const identityCards = [
  {
    title: "Parallax Hearts",
    text: "The music project: cinematic songwriting, intimate vocals, textured guitars, and emotionally grounded atmosphere.",
    href: "/music",
    label: "Listen",
  },
  {
    title: "What the Town Keeps",
    text: "The album and story world set in Vallen: rain, rail lines, old houses, memory, distance, and what people leave unsaid.",
    href: "/project",
    label: "Story",
  },
  {
    title: "Visual Novel",
    text: "The readable story archive, beginning with Chapter One — Ballast and Elias Vale entering Vallen.",
    href: "/graphic-novel/chapter-one/page-001",
    label: "Read",
  },
  {
    title: "Field Notes",
    text: "The separate research lane for source trails, evidence labels, lost etymology, symbolism, and the Handbook method.",
    href: "/field-notes",
    label: "Study",
  },
];

export default function AboutPage() {
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
                      label === "About" ? "var(--gold)" : "var(--paper-soft)",
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

      <section style={{ padding: "54px 0 44px" }}>
        <div className="site-container">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "minmax(0, 1fr) minmax(300px, 0.76fr)",
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
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "radial-gradient(circle at 18% 10%, rgba(210,181,139,0.15), transparent 30%), radial-gradient(circle at 82% 20%, rgba(127,141,155,0.12), transparent 34%)",
                  pointerEvents: "none",
                }}
              />

              <div style={{ position: "relative", zIndex: 2 }}>
                <p className="kicker">About</p>

                <h1
                  style={{
                    margin: 0,
                    fontSize: "clamp(46px, 8vw, 86px)",
                    lineHeight: 0.9,
                    letterSpacing: "-0.07em",
                    fontWeight: 400,
                    maxWidth: "860px",
                  }}
                >
                  Parallax Hearts is the music. Vallen is the weather around it.
                </h1>

                <p
                  className="body-copy"
                  style={{
                    margin: "24px 0 0",
                    maxWidth: "800px",
                    fontSize: "19px",
                  }}
                >
                  Parallax Hearts is the independent music project behind
                  <em> What the Town Keeps</em>: a cinematic album, story world,
                  and visual novel archive built around the rainy town of Vallen.
                </p>

                <p
                  className="body-copy"
                  style={{
                    margin: "18px 0 0",
                    maxWidth: "800px",
                  }}
                >
                  The work stays grounded and human: old houses, rail lines,
                  quiet rooms, weathered streets, intimate songs, and the
                  pressure of what people carry after leaving.
                </p>

                <p
                  className="body-copy"
                  style={{
                    margin: "18px 0 0",
                    maxWidth: "800px",
                  }}
                >
                  Field Notes is the separate research lane. It belongs on the
                  same site, but it has a different job: source trails, evidence
                  labels, etymology, symbolism, and the long-form Handbook work.
                </p>

                <div
                  style={{
                    marginTop: "30px",
                    display: "flex",
                    gap: "12px",
                    flexWrap: "wrap",
                  }}
                >
                  <Link href="/music" className="primary-button">
                    Listen
                  </Link>

                  <Link href="/graphic-novel/chapter-one/page-001" className="secondary-button">
                    Read
                  </Link>

                  <Link href="/project" className="secondary-button">
                    Story World
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
                src="/images/portrait.jpg"
                alt="Parallax Hearts portrait"
                width={1200}
                height={1400}
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

      <section style={{ padding: "0 0 88px" }}>
        <div className="site-container">
          <div
            className="glass-panel"
            style={{
              padding: "clamp(26px, 5vw, 44px)",
            }}
          >
            <p className="kicker">Plain-language map</p>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))",
                gap: "14px",
                marginTop: "18px",
              }}
            >
              {identityCards.map((item) => (
                <article
                  key={item.title}
                  style={{
                    border: "1px solid var(--line)",
                    borderRadius: "22px",
                    padding: "22px",
                    background: "rgba(255,255,255,0.035)",
                  }}
                >
                  <h2
                    style={{
                      margin: 0,
                      fontSize: "27px",
                      lineHeight: 1.05,
                      letterSpacing: "-0.04em",
                      fontWeight: 400,
                    }}
                  >
                    {item.title}
                  </h2>

                  <p className="soft-copy" style={{ margin: "12px 0 18px" }}>
                    {item.text}
                  </p>

                  <Link href={item.href} className="secondary-button">
                    {item.label}
                  </Link>
                </article>
              ))}
            </div>
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
