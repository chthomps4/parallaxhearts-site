import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import ArchiveNote from "../components/ArchiveNote";
import {
  RegisteredNativeAudio,
  SoundCloudExclusiveEmbed,
} from "../components/AudioCoordinator";
import SiteHeader from "../components/SiteHeader";
import { absoluteUrl, defaultKeywords } from "../lib/seo";
import { getStoryAsset } from "../lib/story-assets";
import { getPublicSoundtrackTracks } from "../lib/music/what-the-town-keeps";

const soundCloudUrl = "https://soundcloud.com/parallax-hearts";
const soundCloudEmbedUrl =
  "https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/parallax-hearts&color=%23d2b58b&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false&visual=true";
const koFiUrl = "https://ko-fi.com/parallaxhearts";
const pageTitle = "Music | Parallax Hearts";
const pageDescription =
  "Listen to What the Town Keeps by Parallax Hearts, a cinematic acoustic alternative album tied to Vallen and the online graphic novel.";
const pageUrl = absoluteUrl("/music");
const musicHeroAsset = getStoryAsset("music-listen");
const previewImage = absoluteUrl(musicHeroAsset.src);

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    ...defaultKeywords,
    "What the Town Keeps album",
    "Parallax Hearts music",
    "cinematic acoustic alternative",
    "Vallen soundtrack",
    "online graphic novel soundtrack",
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
        width: musicHeroAsset.width,
        height: musicHeroAsset.height,
        alt: "Parallax Hearts - What the Town Keeps music page",
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

const musicPaths = [
  {
    title: "Listen here",
    text: "Play the album tracks directly on this page.",
    href: "#album-tracks",
    external: false,
  },
  {
    title: "Read with the album",
    text: "Begin the visual novel with Chapter One - Ballast.",
    href: "/graphic-novel/chapter-one/page-001",
    external: false,
  },
  {
    title: "Support",
    text: "Help fund new pages, songs, and visual story work through Ko-fi.",
    href: koFiUrl,
    external: true,
  },
];

export default function MusicPage() {
  const tracks = getPublicSoundtrackTracks();

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
            <Image
              src={musicHeroAsset.src}
              alt={musicHeroAsset.alt}
              fill
              priority
              sizes="(max-width: 980px) 100vw, 1180px"
              style={{
                objectFit: "cover",
                objectPosition: "center",
                filter: "saturate(0.82) contrast(1.05)",
              }}
            />

            <div
              aria-hidden="true"
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "linear-gradient(180deg, rgba(4,5,6,0.04), rgba(4,5,6,0.38) 44%, rgba(4,5,6,0.96) 100%), linear-gradient(90deg, rgba(4,5,6,0.84), rgba(4,5,6,0.32), rgba(4,5,6,0.70))",
              }}
            />

            <div
              style={{
                position: "relative",
                zIndex: 2,
                padding: "clamp(28px, 6vw, 58px)",
                maxWidth: "900px",
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
                A cinematic acoustic alternative album tied directly to Vallen,
                Elias Vale, and the online graphic novel.
              </p>

              <p
                className="body-copy"
                style={{
                  margin: "20px 0 0",
                  maxWidth: "720px",
                }}
              >
                The album tracks now live on-site, so readers can
                move between the chapter pages and the songs without leaving
                the world of the story.
              </p>

              <div
                style={{
                  marginTop: "30px",
                  display: "flex",
                  gap: "12px",
                  flexWrap: "wrap",
                }}
              >
                <a href="#album-tracks" className="primary-button">
                  Play Album Tracks
                </a>

                <Link
                  href="/graphic-novel/chapter-one/page-001"
                  className="secondary-button"
                >
                  Read With Ballast
                </Link>

                <a
                  href={koFiUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="secondary-button"
                >
                  Support on Ko-fi
                </a>
              </div>
            </div>
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

      <section id="album-tracks" style={{ padding: "34px 0" }}>
        <div className="site-container">
          <p className="kicker">Album tracks</p>

          <div
            className="glass-panel"
            style={{
              padding: "clamp(24px, 4vw, 34px)",
              borderRadius: "26px",
            }}
          >
            <h2 className="section-title">Read Vallen with the album running.</h2>
            <p
              className="soft-copy"
              style={{ marginTop: "12px", maxWidth: "820px" }}
            >
              These tracks are here for reading and listening in one place.
              Start a song, open a chapter page, and move through Vallen with
              the album beside the story.
            </p>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
                gap: "14px",
                marginTop: "24px",
              }}
            >
              {tracks.map((track, index) => (
                <article
                  key={track.slug}
                  className="link-card"
                  style={{
                    padding: "18px",
                    border: "1px solid var(--line)",
                    borderRadius: "20px",
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
                      fontSize: "22px",
                      lineHeight: 1.15,
                      fontWeight: 400,
                    }}
                  >
                    {track.title}
                    {track.slug === "red-signals" ? (
                      <ArchiveNote
                        title="Archive Note: Signal"
                        evidence="Well-supported general concept / creative use"
                      >
                        A signal is a sign, indication, or transmitted message.
                        In the album world, signals often fail, repeat, or
                        arrive too late, like emotional information moving
                        through weather, distance, and silence.
                      </ArchiveNote>
                    ) : null}
                    {track.slug === "ballast" ? (
                      <ArchiveNote
                        title="Archive Note: Ballast"
                        evidence="Well-supported word history / creative use"
                      >
                        Ballast is weight used to stabilize a ship, structure,
                        or rail bed. In What the Town Keeps, it becomes
                        emotional pressure: the unseen force that keeps a life,
                        house, or town from tipping over. The symbolic meaning
                        belongs to the album world.
                      </ArchiveNote>
                    ) : null}
                  </h3>

                  <p className="soft-copy" style={{ margin: "12px 0 16px" }}>
                    {track.connection}
                  </p>

                  {track.audioSrc ? (
                    <RegisteredNativeAudio
                      id={`music-track-${track.slug}`}
                      sourceLabel={`Play ${track.title}`}
                      src={track.audioSrc}
                      style={{
                        width: "100%",
                        accentColor: "#d2b58b",
                      }}
                    />
                  ) : null}

                  <div
                    style={{
                      display: "flex",
                      gap: "10px",
                      flexWrap: "wrap",
                      marginTop: "16px",
                    }}
                  >
                    <Link
                      href={track.href}
                      className="secondary-button"
                      style={{ minHeight: "42px" }}
                    >
                      Story thread
                    </Link>
                    <a
                      href={koFiUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="secondary-button"
                      style={{ minHeight: "42px" }}
                    >
                      Support
                    </a>
                  </div>
                </article>
              ))}
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
            <p className="kicker">SoundCloud archive</p>
            <h2 className="section-title">External listening path</h2>
            <p
              className="soft-copy"
              style={{ marginTop: "12px", maxWidth: "760px" }}
            >
              SoundCloud remains the broader public listening path. The on-site
              album players above are the story-tied listening layer for
              ParallaxHearts.org.
            </p>

            <SoundCloudExclusiveEmbed
              id="soundcloud-archive"
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
              The album and visual novel should feed each other: listen, read,
              support the next page, then come back as the town opens further.
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
              <Link
                href="/graphic-novel/chapter-one/page-001"
                className="primary-button"
              >
                Start the Visual Novel
              </Link>

              <a
                href={koFiUrl}
                target="_blank"
                rel="noreferrer"
                className="secondary-button"
              >
                Support on Ko-fi
              </a>

              <a
                href={soundCloudUrl}
                target="_blank"
                rel="noreferrer"
                className="secondary-button"
              >
                Open SoundCloud
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
