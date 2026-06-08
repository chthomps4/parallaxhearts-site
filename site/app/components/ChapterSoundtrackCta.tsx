import Link from "next/link";
import { getFeaturedSoundtrackTrack } from "../lib/music/what-the-town-keeps";

const soundCloudUrl = "https://soundcloud.com/parallax-hearts";

export default function ChapterSoundtrackCta({
  note = "Press play when you want the soundtrack beside the archive. The player never starts on its own.",
}: {
  note?: string;
}) {
  const track = getFeaturedSoundtrackTrack();

  return (
    <section style={{ padding: "22px 0" }}>
      <div className="site-container">
        <div
          className="glass-panel"
          style={{
            padding: "clamp(20px, 4vw, 30px)",
            display: "grid",
            gridTemplateColumns: "minmax(0, 1fr) minmax(250px, 0.52fr)",
            gap: "18px",
            alignItems: "center",
            borderRadius: "24px",
          }}
        >
          <div>
            <p className="kicker">Listen while you read</p>
            <h2
              style={{
                margin: 0,
                fontSize: "clamp(30px, 5vw, 48px)",
                lineHeight: 0.95,
                letterSpacing: "-0.055em",
                fontWeight: 400,
              }}
            >
              {track?.title ?? "Ballast"}
            </h2>
            <p
              className="soft-copy"
              style={{ margin: "12px 0 0", maxWidth: "680px" }}
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
              Open Music
            </Link>
            <a
              href={soundCloudUrl}
              target="_blank"
              rel="noreferrer"
              className="secondary-button"
            >
              SoundCloud
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
