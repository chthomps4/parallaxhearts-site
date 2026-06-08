import Link from "next/link";
import { getFeaturedSoundtrackTrack } from "../lib/music/what-the-town-keeps";

const soundCloudUrl = "https://soundcloud.com/parallax-hearts";

export default function ChapterSoundtrackCta({
  note = "Read the chapter, then listen to the local final-edit preview or open the full Music page.",
}: {
  note?: string;
}) {
  const track = getFeaturedSoundtrackTrack();

  return (
    <section style={{ padding: "34px 0" }}>
      <div className="site-container">
        <div
          className="glass-panel"
          style={{
            padding: "clamp(24px, 5vw, 40px)",
            display: "grid",
            gridTemplateColumns: "minmax(0, 1fr) minmax(260px, 0.62fr)",
            gap: "24px",
            alignItems: "center",
          }}
        >
          <div>
            <p className="kicker">Chapter soundtrack</p>
            <h2 className="section-title">{track?.title ?? "Ballast"}</h2>
            <p
              className="soft-copy"
              style={{ margin: "14px 0 0", maxWidth: "720px" }}
            >
              {track?.chapter ?? "Chapter One - Ballast"} connects directly to
              the album side of <em>What the Town Keeps</em>. {note}
            </p>
          </div>

          <div style={{ display: "grid", gap: "12px" }}>
            {track?.audioSrc ? (
              <audio
                controls
                preload="none"
                style={{
                  width: "100%",
                  accentColor: "#d2b58b",
                }}
              >
                <source src={track.audioSrc} type="audio/mpeg" />
                Your browser does not support the audio element.
              </audio>
            ) : null}

            <Link href="/music" className="primary-button">
              Open Music Page
            </Link>
            <a
              href={soundCloudUrl}
              target="_blank"
              rel="noreferrer"
              className="secondary-button"
            >
              Listen on SoundCloud
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
