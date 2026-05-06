cat > site/app/page.tsx <<'EOF'
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Parallax Hearts | What the Town Keeps",
  description:
    "Parallax Hearts is the music project behind What the Town Keeps — a cinematic album, story world, and graphic novel universe set in the rainy small town of Vallen.",
};

const navItems = [
  ["Home", "/"],
  ["Music", "/music"],
  ["Story", "/project"],
  ["Support", "/support"],
  ["Contact", "/contact"],
];

function TopNav() {
  return (
    <div
      style={{
        position: "sticky",
        top: 0,
        zIndex: 40,
        backdropFilter: "blur(14px)",
        background: "rgba(5,5,7,0.78)",
        borderBottom: "1px solid rgba(243,238,231,0.12)",
      }}
    >
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
                  color: "var(--paper-soft)",
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
    </div>
  );
}

function FeatureCard({
  title,
  text,
  href,
}: {
  title: string;
  text: string;
  href: string;
}) {
  return (
    <Link
      href={href}
      className="glass-panel"
      style={{
        textDecoration: "none",
        color: "var(--paper)",
        padding: "26px",
        borderRadius: "24px",
      }}
    >
      <h3
        style={{
          margin: 0,
          fontSize: "30px",
          lineHeight: 1,
          fontWeight: 400,
          letterSpacing: "-0.04em",
        }}
      >
        {title}
      </h3>

      <p className="soft-copy" style={{ margin: "14px 0 0" }}>
        {text}
      </p>
    </Link>
  );
}

export default function HomePage() {
  return (
    <main className="site-shell">
      <TopNav />

      <section style={{ padding: "64px 0 36px" }}>
        <div className="site-container">
          <div
            className="glass-panel"
            style={{
              position: "relative",
              overflow: "hidden",
              minHeight: "76vh",
              display: "flex",
              alignItems: "flex-end",
              borderRadius: "38px",
              background: "#050607",
            }}
          >
            <div
              style={{
                position: "absolute",
                inset: 0,
                backgroundImage: `
                  linear-gradient(180deg, rgba(4,5,6,0.04), rgba(4,5,6,0.38) 42%, rgba(4,5,6,0.96) 100%),
                  linear-gradient(90deg, rgba(4,5,6,0.82), rgba(4,5,6,0.28), rgba(4,5,6,0.72)),
                  url('/images/hero.jpg')
                `,
                backgroundSize: "cover",
                backgroundPosition: "center",
                filter: "saturate(0.84) contrast(1.06)",
              }}
            />

            <div
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "radial-gradient(circle at 24% 18%, rgba(210,181,139,0.18), transparent 30%), radial-gradient(circle at 76% 78%, rgba(127,141,155,0.18), transparent 36%)",
              }}
            />

            <div
              style={{
                position: "relative",
                zIndex: 2,
                padding: "clamp(28px, 6vw, 58px)",
                maxWidth: "920px",
              }}
            >
              <p className="kicker">Cinematic album / story world / graphic novel</p>

              <h1
                style={{
                  margin: 0,
                  color: "var(--paper)",
                  fontSize: "clamp(50px, 9vw, 106px)",
                  lineHeight: 0.88,
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
                  fontSize: "clamp(20px, 3vw, 30px)",
                  lineHeight: 1.34,
                }}
              >
                A cinematic album and story world about memory, absence,
                distance, and the things a town learns to carry.
              </p>

              <p
                className="body-copy"
                style={{
                  margin: "20px 0 0",
                  maxWidth: "700px",
                }}
              >
                Parallax Hearts is the music. Vallen is the town. The songs,
                visuals, story fragments, and graphic novel pages all move
                through the same rainy streets, old houses, rail lines, and
                rooms that remember more than they say.
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
                  Listen / Music
                </Link>
                <Link href="/project" className="secondary-button">
                  Enter the Story
                </Link>
                <Link href="/support" className="secondary-button">
                  Support / Ko-fi
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: "34px 0 18px" }}>
        <div className="site-container">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
              gap: "16px",
            }}
          >
            <FeatureCard
              title="The Album"
              text="Songs from Parallax Hearts shaped by acoustic weight, quiet tension, restrained vocals, memory, and emotional aftermath."
              href="/music"
            />

            <FeatureCard
              title="The Town"
              text="Vallen is a fictional small town of rail lines, wet pavement, old houses, dim windows, and things people do not name out loud."
              href="/project"
            />

            <FeatureCard
              title="The Archive"
              text="Lyrics, stories, concept art, album visuals, videos, and graphic novel material collected as the world grows."
              href="/support"
            />
          </div>
        </div>
      </section>

      <section style={{ padding: "34px 0" }}>
        <div className="site-container">
          <div
            className="glass-panel"
            style={{
              display: "grid",
              gridTemplateColumns: "minmax(0, 1.1fr) minmax(280px, 0.9fr)",
              gap: "30px",
              padding: "clamp(26px, 5vw, 44px)",
              alignItems: "center",
            }}
          >
            <div>
              <p className="kicker">Support the world behind the album</p>

              <h2 className="section-title">Music, story, and visual archive.</h2>

              <p className="body-copy" style={{ margin: "20px 0 0", maxWidth: "720px" }}>
                What the Town Keeps is more than a record. It is a world built
                through songs, lyrics, videos, album art, story fragments,
                concept art, and a graphic novel adaptation. Ko-fi is where the
                deeper archive can live without overcrowding the main site.
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
                  href="https://ko-fi.com/parallaxhearts"
                  target="_blank"
                  rel="noreferrer"
                  className="primary-button"
                >
                  Support on Ko-fi
                </a>

                <Link href="/support" className="secondary-button">
                  View Support Options
                </Link>
              </div>
            </div>

            <div
              style={{
                border: "1px solid var(--line)",
                borderRadius: "26px",
                padding: "24px",
                background:
                  "linear-gradient(180deg, rgba(210,181,139,0.10), rgba(255,255,255,0.025))",
              }}
            >
              <p className="kicker" style={{ marginBottom: "18px" }}>
                Suggested archive lanes
              </p>

              <div style={{ display: "grid", gap: "14px" }}>
                {[
                  "Digital album and direct support",
                  "Lyric sheets and song notes",
                  "Concept art and album art packs",
                  "Story fragments from Vallen",
                  "Graphic novel previews",
                ].map((item) => (
                  <div
                    key={item}
                    style={{
                      padding: "14px 0",
                      borderTop: "1px solid var(--line)",
                      color: "var(--paper-soft)",
                      fontSize: "15px",
                    }}
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: "34px 0 88px" }}>
        <div className="site-container">
          <div
            className="glass-panel"
            style={{
              padding: "clamp(24px, 4vw, 34px)",
              borderRadius: "26px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              gap: "20px",
              flexWrap: "wrap",
            }}
          >
            <div>
              <p className="kicker" style={{ marginBottom: "10px" }}>
                Other album worlds
              </p>

              <p className="soft-copy" style={{ margin: 0, maxWidth: "760px" }}>
                PHYLAX remains part of the wider Parallax Hearts creative
                universe, but What the Town Keeps is the central public-facing
                world for this site pass.
              </p>
            </div>

            <Link href="/phylax" className="secondary-button">
              Enter PHYLAX
            </Link>
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
EOF