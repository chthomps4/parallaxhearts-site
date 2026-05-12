import Link from "next/link";
import type { Metadata } from "next";
import ArchiveNote from "../components/ArchiveNote";
import SiteHeader from "../components/SiteHeader";
import { absoluteUrl, defaultKeywords } from "../lib/seo";

const soundCloudUrl = "https://soundcloud.com/parallax-hearts";
const soundCloudEmbedUrl =
  "https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/parallax-hearts&color=%23d2b58b&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false&visual=true";
const koFiUrl = "https://ko-fi.com/parallaxhearts";
const pageTitle = "Music | Parallax Hearts";
const pageDescription =
  "Listen to What the Town Keeps by Parallax Hearts — a cinematic acoustic alternative album tied to Vallen and the wider story world.";
const pageUrl = absoluteUrl("/music");
const previewImage = absoluteUrl("/images/hero.jpg");

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    ...defaultKeywords,
    "What the Town Keeps album",
    "Parallax Hearts music",
    "cinematic acoustic alternative",
    "Vallen soundtrack",
    "SoundCloud Parallax Hearts",
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
        alt: "Parallax Hearts — What the Town Keeps music page",
      },
    ],
    locale: "en_US",
    type: "music.album",
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: [previewImage],
  },
};

const tracks = [
  {
    title: "Ballast",
    chapter: "Chapter One — Ballast",
    connection: "Elias Vale enters Vallen and the first weight of the town settles in.",
    href: "/graphic-novel/chapter-one/page-001",
  },
  {
    title: "Boundary Weather",
    chapter: "Chapter Two — Boundary Weather",
    connection: "Weather, restraint, and the first pressure line between people.",
    href: "/project",
  },
  {
    title: "Measured Motion",
    chapter: "Vallen thread",
    connection: "A song about controlled movement, distance, and the cost of staying composed.",
    href: "/project",
  },
  {
    title: "Red Signal",
    chapter: "Vallen thread",
    connection: "Warning, attraction, and the moment a boundary becomes difficult to obey.",
    href: "/project",
  },
  {
    title: "Convergent Error",
    chapter: "Vallen thread",
    connection: "Two paths appearing to meet while carrying incompatible histories.",
    href: "/project",
  },
  {
    title: "Emerge the Silence",
    chapter: "Vallen thread",
    connection: "Silence as atmosphere, message, and pressure system.",
    href: "/project",
  },
  {
    title: "What Remains",
    chapter: "Closing thread",
    connection: "After departure, something in the town still keeps its shape.",
    href: "/project",
  },
  {
    title: "Patterns",
    chapter: "Vallen thread",
    connection: "The repeated habits, rooms, and signals people mistake for safety.",
    href: "/project",
  },
  {
    title: "Second Frame",
    chapter: "Vallen thread",
    connection: "The second look that changes what the first one seemed to mean.",
    href: "/project",
  },
  {
    title: "Cosmic Intervals",
    chapter: "Field edge",
    connection: "Distance measured emotionally more than physically.",
    href: "/field-notes",
  },
  {
    title: "The Kindest Thing",
    chapter: "Vallen thread",
    connection: "Tenderness without sentimentality, and mercy without simple answers.",
    href: "/project",
  },
  {
    title: "Resonance",
    chapter: "Vallen thread",
    connection: "What keeps vibrating after the room goes quiet.",
    href: "/project",
  },
  {
    title: "Rush",
    chapter: "Vallen thread",
    connection: "The force of feeling arriving faster than language can hold it.",
    href: "/project",
  },
  {
    title: "Held in the Room",
    chapter: "Vallen thread",
    connection: "Presence, memory, and the kind of room that does not let go quickly.",
    href: "/project",
  },
];

const musicPaths = [
  {
    title: "Listen",
    text: "Stream the album on SoundCloud.",
    href: soundCloudUrl,
    external: true,
  },
  {
    title: "Support",
    text: "Buy or support directly through Ko-fi.",
    href: koFiUrl,
    external: true,
  },
  {
    title: "Read",
    text: "Begin the visual novel with Chapter One — Ballast.",
    href: "/graphic-novel/chapter-one/page-001",
    external: false,
  },
];

export default function MusicPage() {
  return (
    <main className="site-shell">
      <SiteHeader active="Listen" />

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
              aria-hidden="true"
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
              aria-hidden="true"
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
                Intimate vocals, textured guitars, restrained dynamics, and the
                emotional pressure of Vallen — rain, rail lines, old rooms,
                distance, and memory.
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

                <a
                  href={koFiUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="secondary-button"
                >
                  Buy / Support on Ko-fi
                </a>

                <Link href="/graphic-novel/chapter-one/page-001" className="secondary-button">
                  Read the Visual Novel
                </Link>
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
              padding: "clamp(24px, 4vw, 34px)",
              borderRadius: "26px",
            }}
          >
            <p className="kicker">Listen without leaving</p>
            <h2 className="section-title">SoundCloud player</h2>
            <p className="soft-copy" style={{ marginTop: "12px", maxWidth: "760px" }}>
              Play the SoundCloud archive here, then use the track list below to
              follow how the songs connect to Vallen and the visual novel.
            </p>

            <iframe
              title="Parallax Hearts on SoundCloud"
              width="100%"
              height="360"
              scrolling="no"
              frameBorder="no"
              allow="autoplay"
              src={soundCloudEmbedUrl}
              style={{
                marginTop: "24px",
                border: "1px solid var(--line)",
                borderRadius: "22px",
                background: "rgba(0,0,0,0.35)",
              }}
            />
          </div>
        </div>
      </section>

      <section style={{ padding: "34px 0" }}>
        <div className="site-container">
          <p className="kicker">Album paths</p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: "16px",
              marginTop: "18px",
            }}
          >
            {musicPaths.map((item) => {
              const content = (
                <>
                  <h2
                    style={{
                      margin: 0,
                      fontSize: "31px",
                      lineHeight: 1.02,
                      letterSpacing: "-0.045em",
                      fontWeight: 400,
                    }}
                  >
                    {item.title}
                  </h2>

                  <p className="soft-copy" style={{ margin: "14px 0 0" }}>
                    {item.text}
                  </p>
                </>
              );

              if (item.external) {
                return (
                  <a
                    key={item.title}
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className="glass-panel link-card"
                    style={{
                      padding: "26px",
                      borderRadius: "26px",
                      color: "var(--paper)",
                      textDecoration: "none",
                    }}
                  >
                    {content}
                  </a>
                );
              }

              return (
                <Link
                  key={item.title}
                  href={item.href}
                  className="glass-panel link-card"
                  style={{
                    padding: "26px",
                    borderRadius: "26px",
                    color: "var(--paper)",
                    textDecoration: "none",
                  }}
                >
                  {content}
                </Link>
              );
            })}
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
                gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
                gap: "12px",
              }}
            >
              {tracks.map((track, index) => (
                <article
                  key={track.title}
                  className="link-card"
                  style={{
                    padding: "18px",
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
                    {String(index + 1).padStart(2, "0")} / {track.chapter}
                  </p>

                  <h3
                    style={{
                      margin: 0,
                      fontSize: "20px",
                      lineHeight: 1.15,
                      fontWeight: 400,
                    }}
                  >
                    {track.title}
                    {track.title === "Red Signal" ? (
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
                    {track.title === "Ballast" ? (
                      <ArchiveNote
                        title="Archive Note: Ballast"
                        evidence="Well-supported word history / creative use"
                      >
                        Ballast is weight used to stabilize a ship, structure,
                        or rail bed. In What the Town Keeps, it becomes
                        emotional pressure — the unseen force that keeps a life,
                        house, or town from tipping over. The symbolic meaning
                        belongs to the album world.
                      </ArchiveNote>
                    ) : null}
                  </h3>

                  <p className="soft-copy" style={{ margin: "12px 0 18px" }}>
                    {track.connection}
                  </p>

                  <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
                    <a
                      href={soundCloudUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="secondary-button"
                      style={{ minHeight: "42px" }}
                    >
                      Listen
                    </a>
                    <Link
                      href={track.href}
                      className="secondary-button"
                      style={{ minHeight: "42px" }}
                    >
                      Story thread
                    </Link>
                  </div>
                </article>
              ))}
            </div>

            <p className="soft-copy" style={{ margin: "22px 0 0" }}>
              Individual SoundCloud track links can replace the general listen
              buttons as soon as the final per-song URLs are confirmed.
            </p>
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
                maxWidth: "700px",
              }}
            >
              SoundCloud is the main listening path. Ko-fi is the direct support
              path for the album, visual story work, and future project material.
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

              <Link href="/contact" className="secondary-button">
                Social Links
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
