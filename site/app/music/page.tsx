import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import JsonLd from "../components/JsonLd";
import Arrow from "../components/Arrow";
import { buildMetadata, breadcrumbSchema, musicAlbumSchema } from "../lib/seo";
import { getStoryAsset } from "../lib/story-assets";
import { getPublicSoundtrackTracks } from "../lib/music/what-the-town-keeps";

const spotifyPlaylistUrl =
  "https://open.spotify.com/playlist/6jB3kXIOJFWXxEoun1UAVi?si=cd4ce5ae26bf4b00";
const hero = getStoryAsset("music-listen");
export const metadata: Metadata = buildMetadata({
  title: "Music | Parallax Hearts",
  description:
    "Listen to What the Town Keeps by Parallax Hearts, a cinematic acoustic alternative album connected to the world of Vallen.",
  path: "/music",
});

export default function MusicPage() {
  const tracks = getPublicSoundtrackTracks();
  return (
    <main className="publication-page archive-page">
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Music", path: "/music" },
          ]),
          musicAlbumSchema(tracks),
        ]}
      />
      <section className="editorial-container archive-hero">
        <div>
          <p className="editorial-label">Other work · Music</p>
          <h1>Music.</h1>
          <h2>What the Town Keeps</h2>
          <p className="hero-deck">
            A cinematic acoustic alternative album from the world of Vallen.
          </p>
          <div className="editorial-actions">
            <a
              className="copper-button"
              href={spotifyPlaylistUrl}
              target="_blank"
              rel="noreferrer"
            >
              Listen on Spotify <Arrow />
            </a>
            <a className="text-link" href="#track-guide">
              Track guide <Arrow />
            </a>
          </div>
        </div>
        <Image
          src={hero.src}
          alt={hero.alt}
          width={hero.width}
          height={hero.height}
          sizes="(max-width: 800px) 90vw, 38vw"
          priority
        />
      </section>
      <section
        className="editorial-container quiet-archive-section"
        id="track-guide"
        aria-labelledby="track-guide-title"
      >
        <div className="section-heading-row">
          <div>
            <h2 id="track-guide-title">The track guide.</h2>
            <p>Open a title for its place in the story.</p>
          </div>
        </div>
        <ol className="track-list">
          {tracks.map((track, index) => (
            <li key={track.slug}>
              <details id={track.slug}>
                <summary>
                  <span className="track-number">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="track-title">{track.title}</span>
                  <span className="expand-label">Read note</span>
                </summary>
                <div className="track-note">
                  <p className="editorial-label">{track.chapter}</p>
                  <p>{track.connection}</p>
                  <Link className="text-link" href={track.href}>
                    Story thread <Arrow />
                  </Link>
                </div>
              </details>
            </li>
          ))}
        </ol>
        <details className="archive-details">
          <summary>About the album’s language</summary>
          <div className="archive-prose">
            <p>
              <strong>Ballast.</strong> Ballast is weight used to stabilize a
              ship, structure, or rail bed. In What the Town Keeps, it becomes
              emotional pressure: the unseen force that keeps a life, house, or
              town from tipping over. The symbolic meaning belongs to the album
              world.
            </p>
            <p>
              <strong>Signal.</strong> A signal is a sign, indication, or
              transmitted message. In the album world, signals often fail,
              repeat, or arrive too late, like emotional information moving
              through weather, distance, and silence.
            </p>
          </div>
        </details>
        <div className="archive-crosslinks">
          <Link className="text-link" href="/project">
            The Vallen story archive <Arrow />
          </Link>
          <Link className="text-link" href="/support">
            Support the work <Arrow />
          </Link>
        </div>
      </section>
    </main>
  );
}
