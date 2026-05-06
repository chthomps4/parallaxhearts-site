import Image from "next/image";
import Link from "next/link";

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
                ["Support", "/support"],
                ["Contact", "/contact"],
              ].map(([label, href]) => (
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
      </section>

      <section style={{ padding: "54px 0 88px" }}>
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
                    maxWidth: "800px",
                  }}
                >
                  The music, the town, and what stays behind.
                </h1>

                <p
                  className="body-copy"
                  style={{
                    margin: "24px 0 0",
                    maxWidth: "800px",
                    fontSize: "19px",
                  }}
                >
                  Parallax Hearts is an independent music project built around
                  cinematic songwriting, emotional restraint, and a visual world
                  that feels lived-in rather than explained.
                </p>

                <p
                  className="body-copy"
                  style={{
                    margin: "18px 0 0",
                    maxWidth: "800px",
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
                    maxWidth: "800px",
                  }}
                >
                  The project moves through songs, lyrics, visual pieces, story
                  fragments, videos, and a graphic novel adaptation. It is not
                  built around spectacle. It is built around mood, honesty,
                  absence, and the pressure of things left unsaid.
                </p>

                <div
                  style={{
                    display: "grid",
                    gap: "16px",
                    marginTop: "30px",
                    maxWidth: "760px",
                  }}
                >
                  {[
                    {
                      title: "Music",
                      text: "Acoustic-led, cinematic, intimate, and emotionally direct without becoming overly polished or theatrical.",
                    },
                    {
                      title: "Story World",
                      text: "Vallen is the fictional town behind the album — a place of rain, records, thresholds, houses, and memory.",
                    },
                    {
                      title: "Visual Direction",
                      text: "Muted blue-gray, charcoal, sepia, warm interior light, wet pavement, rail lines, old rooms, and quiet human tension.",
                    },
                  ].map((item) => (
                    <div
                      key={item.title}
                      style={{
                        border: "1px solid var(--line)",
                        borderRadius: "20px",
                        padding: "22px",
                        background: "rgba(255,255,255,0.035)",
                      }}
                    >
                      <strong
                        style={{
                          display: "block",
                          marginBottom: "8px",
                          color: "var(--gold)",
                          textTransform: "uppercase",
                          letterSpacing: "0.14em",
                          fontSize: "12px",
                        }}
                      >
                        {item.title}
                      </strong>

                      <p
                        className="soft-copy"
                        style={{
                          margin: 0,
                          color: "var(--paper-soft)",
                        }}
                      >
                        {item.text}
                      </p>
                    </div>
                  ))}
                </div>

                <div
                  style={{
                    marginTop: "30px",
                    display: "flex",
                    gap: "12px",
                    flexWrap: "wrap",
                  }}
                >
                  <Link href="/music" className="primary-button">
                    Listen to the Album
                  </Link>

                  <Link href="/project" className="secondary-button">
                    Enter the Story
                  </Link>

                  <Link href="/support" className="secondary-button">
                    Support the Project
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