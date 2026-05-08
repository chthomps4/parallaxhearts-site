import Link from "next/link";
import type { Metadata } from "next";
import ArchiveNote from "../components/ArchiveNote";

const soundCloudUrl = "https://soundcloud.com/parallax-hearts";
const koFiUrl = "https://ko-fi.com/parallaxhearts";

export const metadata: Metadata = {
  title: "Music | Parallax Hearts",
  description:
    "Listen to What the Town Keeps by Parallax Hearts — a cinematic acoustic alternative album tied to Vallen, the graphic novel direction, and the wider story world.",
};

const tracks = [
  "Boundary Weather",
  "Measured Motion",
  "Convergent Error",
  "Red Signal",
  "Ballast",
  "Switch Point",
  "Seasons",
  "Emerge the Silence",
  "Patterns",
  "What Remains",
  "Clarity Through Incompatibility",
];

const listeningPath = [
  {
    title: "Listen first",
    text: "Start with the album as music: intimate vocals, acoustic-led arrangements, restrained dynamics, and cinematic pressure.",
  },
  {
    title: "Enter Vallen",
    text: "Then open the story world: rain, rail lines, old houses, rooms after someone has gone, and the silence people inherit.",
  },
  {
    title: "Follow the pages",
    text: "The graphic novel direction gives the songs a visual life without turning the project into horror, fantasy, or spectacle.",
  },
];

export default function MusicPage() {
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
                ["Contact", "/contact"],
              ].map(([label, href]) => (
                <Link
                  key={label}
                  href={href}
                  style={{
                    color:
                      label === "Music" ? "var(--gold)" : "var(--paper-soft)",
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
              position: "relative",
              overflow: "hidden",
              minHeight: "64vh",
              display: "flex",
              alignItems: "flex-end",
              borderRadius: "38px",
            }}
          >
            <div
              style={{
                position: "absolute",
                inset: 0,
                backgroundImage: `
                  linear-gradient(180deg, rgba(4,5,6,0.04), rgba(4,5,6,0.38) 44%, rgba(4,5,6,0.96) 100%),
                  linear-gradient(90deg, rgba(4,5,6,0.84), rgba(4,5,6,0.32), rgba(4,5,6,0.70)),
                  url('/images/hero.jpg')
                `,
                backgroundSize: "cover",
                backgroundPosition: "center",
                filter: "saturate(0.82) contrast(1.05)",
              }}
            />

            <div
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "radial-gradient(circle at 18% 18%, rgba(210,181,139,0.18), transparent 30%), radial-gradient(circle at 82% 78%, rgba(127,141,155,0.16), transparent 34%)",
              }}
            />

            <div
              style={{
                position: "relative",
                zIndex: 2,
                padding: "clamp(28px, 6vw, 58px)",
                maxWidth: "860px",
              }}
            >
              <p className="kicker">Featured album</p>

              <h1
                style={{
                  margin: 0,
                  fontSize: "clamp(48px, 8vw, 94px)",
                  lineHeight: 0.9,
                  letterSpacing: "-0.075em",
                  fontWeight: 400,
                  textShadow: "0 18px 54px rgba(0,0,0,0.68)",
                }}
              >
                What the Town Keeps
              </h1>

              <p
                style={{
                  margin: "24px 0 0",
                  maxWidth: "760px",
                  color: "var(--paper)",
                  fontSize: "clamp(20px, 3vw, 29px)",
                  lineHeight: 1.35,
                }}
              >
                A cinematic acoustic alternative album from Parallax Hearts.
              </p>

              <p
                className="body-copy"
                style={{
                  margin: "20px 0 0",
                  maxWidth: "720px",
                }}
              >
                Built around intimate vocals, textured guitars, restrained
                dynamics, and the emotional pressure of Vallen — a town of rain,
                rail lines, old rooms, distance, and memory.
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
                  href={soundCloudUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="primary-button"
                >
                  Listen on SoundCloud
                </a>

                <Link href="/project" className="secondary-button">
                  Enter the Story
                </Link>

                <a
                  href={koFiUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="secondary-button"
                >
                  Buy / Support on Ko-fi
                </a>
              </div>
            </div>
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
              gap: "30px",
              alignItems: "start",
            }}
          >
            <div>
              <p className="kicker">About the album</p>

              <h2 className="section-title">
                Songs from a town that remembers.
              </h2>

              <p className="body-copy" style={{ margin: "20px 0 0" }}>
                <em>What the Town Keeps</em> moves through the quiet aftermath
                of connection, distance, and emotional change. The record is not
                built as a literal diary. It is a place — a fictional town
                carrying fragments of memory in its houses, roads, stations,
                windows, and weather.
              </p>

              <p className="body-copy" style={{ margin: "18px 0 0" }}>
                The songs are connected to the larger story world of Vallen and
                the graphic novel adaptation, but the album stands on its own:
                intimate, human, restrained, and cinematic.
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
                  href={soundCloudUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="primary-button"
                >
                  Stream on SoundCloud
                </a>

                <Link href="/project#graphic-novel" className="secondary-button">
                  Graphic Novel Direction
                </Link>

                <a
                  href={koFiUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="secondary-button"
                >
                  Support Directly
                </a>
              </div>
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
                Album world
              </p>

              {[
                "Rainy small-town atmosphere",
                "Acoustic-led cinematic arrangements",
                "Memory, distance, absence, and aftermath",
                "Connected to Vallen and the graphic novel",
                "Streaming now on SoundCloud",
                "Direct support through Ko-fi",
              ].map((item) => (
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

      <section style={{ padding: "34px 0" }}>
        <div className="site-container">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: "16px",
            }}
          >
            {listeningPath.map((item) => (
              <div
                key={item.title}
                className="glass-panel"
                style={{
                  borderRadius: "24px",
                  padding: "24px",
                }}
              >
                <h3
                  style={{
                    margin: 0,
                    fontSize: "30px",
                    lineHeight: 1,
                    fontWeight: 400,
                    letterSpacing: "-0.035em",
                  }}
                >
                  {item.title}
                </h3>

                <p className="soft-copy" style={{ margin: "14px 0 0" }}>
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "34px 0" }}>
        <div className="site-container">
          <p className="kicker">Track archive</p>

          <div
            className="glass-panel"
            style={{
              padding: "clamp(24px, 4vw, 34px)",
              borderRadius: "26px",
            }}
          >
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
                gap: "12px",
              }}
            >
              {tracks.map((track, index) => (
                <div
                  key={track}
                  style={{
                    padding: "16px",
                    border: "1px solid var(--line)",
                    borderRadius: "18px",
                    background: "rgba(255,255,255,0.025)",
                  }}
                >
                  <p
                    style={{
                      margin: "0 0 8px",
                      color: "var(--gold)",
                      fontSize: "12px",
                      letterSpacing: "0.14em",
                      textTransform: "uppercase",
                    }}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </p>

                  <h3
                    style={{
                      margin: 0,
                      fontSize: "20px",
                      lineHeight: 1.15,
                      fontWeight: 400,
                    }}
                  >
                    {track}
                    {track === "Red Signal" ? (
                      <ArchiveNote
                        title="Archive Note: Signal"
                        evidence="Well-supported general concept / creative use"
                      >
                        A signal is a sign, indication, or transmitted message.
                        In the album world, signals often fail, repeat, or
                        arrive too late — like emotional information moving
                        through weather, distance, and silence.
                      </ArchiveNote>
                    ) : null}
                    {track === "Ballast" ? (
                      <ArchiveNote
                        title="Archive Note: Ballast"
                        evidence="Well-supported word history / creative use"
                      >
                        Ballast is weight used to stabilize a ship, structure,
                        or rail bed. In What the Town Keeps, it becomes
                        emotional weight — the unseen pressure that keeps a
                        life, house, or town from tipping over. The symbolic
                        meaning belongs to the album world.
                      </ArchiveNote>
                    ) : null}
                  </h3>
                </div>
              ))}
            </div>

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
                href={soundCloudUrl}
                target="_blank"
                rel="noreferrer"
                className="primary-button"
              >
                Hear the Songs on SoundCloud
              </a>

              <Link href="/project" className="secondary-button">
                Explore the Story World
              </Link>
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
            <p className="kicker">Direct support</p>

            <h2 className="section-title">Listen freely. Support directly.</h2>

            <p
              className="body-copy"
              style={{
                margin: "20px auto 0",
                maxWidth: "760px",
              }}
            >
              SoundCloud is the main streaming path for Parallax Hearts. Ko-fi
              is the direct support path for music, lyric material, visual
              packs, story fragments, album art, Field Notes progress, and
              source-trail material as the archive grows.
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
                href={soundCloudUrl}
                target="_blank"
                rel="noreferrer"
                className="primary-button"
              >
                Listen on SoundCloud
              </a>

              <a
                href={koFiUrl}
                target="_blank"
                rel="noreferrer"
                className="secondary-button"
              >
                Support on Ko-fi
              </a>

              <Link href="/project" className="secondary-button">
                Enter Vallen
              </Link>

              <Link href="/support" className="secondary-button">
                See Membership Tiers
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
