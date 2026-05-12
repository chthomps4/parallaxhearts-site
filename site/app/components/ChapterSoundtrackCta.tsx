import Link from "next/link";

const soundCloudUrl = "https://soundcloud.com/parallax-hearts";

export default function ChapterSoundtrackCta({
  chapter = "Chapter One — Ballast",
  song = "Ballast",
  note = "Read the chapter, then follow the album thread on the Music page or SoundCloud.",
}: {
  chapter?: string;
  song?: string;
  note?: string;
}) {
  return (
    <section style={{ padding: "34px 0" }}>
      <div className="site-container">
        <div
          className="glass-panel"
          style={{
            padding: "clamp(24px, 5vw, 40px)",
            display: "grid",
            gridTemplateColumns: "minmax(0, 1fr) minmax(240px, 0.55fr)",
            gap: "24px",
            alignItems: "center",
          }}
        >
          <div>
            <p className="kicker">Chapter soundtrack</p>
            <h2 className="section-title">{song}</h2>
            <p className="soft-copy" style={{ margin: "14px 0 0", maxWidth: "720px" }}>
              {chapter} connects directly to the album side of <em>What the Town Keeps</em>. {note}
            </p>
          </div>

          <div style={{ display: "grid", gap: "12px" }}>
            <Link href="/music" className="primary-button">
              Open Music Page
            </Link>
            <a href={soundCloudUrl} target="_blank" rel="noreferrer" className="secondary-button">
              Listen on SoundCloud
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
