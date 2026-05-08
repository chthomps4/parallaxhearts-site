import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Parallax Hearts + Field Notes",
  description:
    "About Parallax Hearts, What the Town Keeps, Field Notes, the Forbidden Knowledge archive, and The Forbidden Knowledge Bible / Handbook.",
};

const identityCards = [
  {
    title: "Parallax Hearts",
    text: "The creative and music home: cinematic songwriting, story worlds, visual archives, and emotionally grounded work.",
    href: "/music",
    label: "Music",
  },
  {
    title: "What the Town Keeps",
    text: "The album and story world set around Vallen: rain, old houses, rail lines, memory, absence, and the things people leave unsaid.",
    href: "/project",
    label: "Story world",
  },
  {
    title: "Field Notes",
    text: "The public research lane for Forbidden Knowledge: ancient knowledge, lost etymology, symbolism, source trails, and evidence labels.",
    href: "/field-notes",
    label: "Field Notes",
  },
  {
    title: "The Handbook",
    text: "The long-form Forbidden Knowledge Bible / codex: a continuity archive for source trails, claim-checking, and durable knowledge.",
    href: "/field-notes#book",
    label: "The book",
  },
  {
    title: "PHYLAX Archive",
    text: "A secondary heavier lore world kept available in the archive while Field Notes moves forward first.",
    href: "/phylax",
    label: "Archive",
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
              {[
                ["Home", "/"],
                ["Music", "/music"],
                ["Story", "/project"],
                ["Field Notes", "/field-notes"],
                ["Shop", "/shop"],
                ["Support", "/support"],
                ["About", "/about"],
                ["Contact", "/contact"],
              ].map(([label, href]) => (
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
              gridTemplateColumns: "minmax(0, 1fr) minmax(300px, 0.8fr)",
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
                  The music, the town, and the source trails underneath.
                </h1>

                <p
                  className="body-copy"
                  style={{
                    margin: "24px 0 0",
                    maxWidth: "820px",
                    fontSize: "19px",
                  }}
                >
                  Parallax Hearts is an independent creative home for cinematic
                  songs, story worlds, visual archives, and source-conscious
                  research. The work moves between music, memory, fiction,
                  symbolism, and the older questions people keep returning to.
                </p>

                <p
                  className="body-copy"
                  style={{
                    margin: "18px 0 0",
                    maxWidth: "820px",
                  }}
                >
                  <em>What the Town Keeps</em> is the central album and story
                  world: a rainy small-town atmosphere of old houses, rail
                  lines, dim windows, wet pavement, quiet rooms, and the memory
                  people carry after leaving.
                </p>

                <p
                  className="body-copy"
                  style={{
                    margin: "18px 0 0",
                    maxWidth: "820px",
                  }}
                >
                  Field Notes is the research lane: Forbidden Knowledge, ancient
                  knowledge, lost etymology, symbolism, source trails, evidence
                  labels, and the method behind <em>The Forbidden Knowledge Bible</em>.
                  It follows mystery without pretending every mystery is proof.
                </p>

                <div
                  style={{
                    marginTop: "30px",
                    display: "flex",
                    gap: "12px",
                    flexWrap: "wrap",
                  }}
                >
                  <Link href="/field-notes" className="primary-button">
                    Open Field Notes
                  </Link>

                  <Link href="/music" className="secondary-button">
                    Listen to the Album
                  </Link>

                  <Link href="/support" className="secondary-button">
                    Support the Archive
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

      <section style={{ padding: "0 0 44px" }}>
        <div className="site-container">
          <div
            className="glass-panel"
            style={{
              padding: "clamp(26px, 5vw, 44px)",
            }}
          >
            <p className="kicker">Site map in plain language</p>

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

      <section style={{ padding: "0 0 88px" }}>
        <div className="site-container">
          <div
            className="glass-panel"
            style={{
              padding: "clamp(26px, 5vw, 44px)",
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "24px",
            }}
          >
            <div>
              <p className="kicker">Creative rule</p>
              <h2 className="section-title">Keep it human.</h2>
              <p className="body-copy" style={{ margin: "18px 0 0" }}>
                The music and story work stay grounded, cinematic, restrained,
                and emotionally honest. Vallen is not built as horror or
                fantasy. It is built as atmosphere, memory, distance, and the
                pressure of ordinary lives.
              </p>
            </div>

            <div>
              <p className="kicker">Research rule</p>
              <h2 className="section-title">Preserve mystery. Protect truth.</h2>
              <p className="body-copy" style={{ margin: "18px 0 0" }}>
                Field Notes does not flatten mystery, and it does not sell
                certainty where there is none. It separates evidence,
                interpretation, symbolism, speculation, and modern invention so
                the trail stays readable.
              </p>
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
