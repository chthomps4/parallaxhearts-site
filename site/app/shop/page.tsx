import Image from "next/image";
import Link from "next/link";

const koFiUrl = "https://ko-fi.com/parallaxhearts";
const freeIntroCourseUrl =
  "https://www.skool.com/forbidden-knowledge-3060/classroom/64b17ccf?md=20063ee25dcf452f98717008a96ff36f";

const shopItems = [
  {
    title: "What the Town Keeps — Digital Album",
    text: "The current Parallax Hearts album, built around Vallen, memory, distance, rain, old rooms, and quiet emotional pressure.",
    lane: "Music",
  },
  {
    title: "Lyric Book PDF",
    text: "A clean collected lyric document for the album world, ideal for listeners who want to sit with the words outside the songs.",
    lane: "Music",
  },
  {
    title: "The Vallen Archive — Concept Art Pack",
    text: "Selected visual pieces, album art, story-world images, and atmospheric references from What the Town Keeps.",
    lane: "Visual archive",
  },
  {
    title: "Graphic Novel Preview PDF",
    text: "Early page previews and visual-story material connected to the developing graphic novel adaptation.",
    lane: "Story",
  },
  {
    title: "Field Notes — Source-Trail Packet",
    text: "A focused research packet built around one topic, with evidence labels, source trails, key terms, and clear separation between fact, interpretation, and speculation.",
    lane: "Field Notes",
  },
  {
    title: "Forbidden Knowledge Intro Bundle",
    text: "A starter set for the Forbidden Knowledge system: the free course path, method overview, evidence labels, and printable research prompts when available.",
    lane: "Field Notes",
  },
];

export default function ShopPage() {
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
                      label === "Shop" ? "var(--gold)" : "var(--paper-soft)",
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
                  "radial-gradient(circle at 18% 10%, rgba(210,181,139,0.16), transparent 30%), radial-gradient(circle at 82% 20%, rgba(127,141,155,0.14), transparent 34%)",
                pointerEvents: "none",
              }}
            />

            <div style={{ position: "relative", zIndex: 2 }}>
              <p className="kicker">Shop / digital archive</p>

              <h1
                style={{
                  margin: 0,
                  fontSize: "clamp(46px, 8vw, 92px)",
                  lineHeight: 0.9,
                  letterSpacing: "-0.07em",
                  fontWeight: 400,
                  maxWidth: "960px",
                }}
              >
                Music, lyrics, art, and source-trail packets.
              </h1>

              <p
                className="body-copy"
                style={{
                  margin: "24px 0 0",
                  maxWidth: "800px",
                  fontSize: "19px",
                }}
              >
                The shop is the one-time purchase side of the archive: Parallax
                Hearts music, lyric documents, concept art, story previews, and
                future Field Notes packets connected to the Forbidden Knowledge
                research system.
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
                  href={koFiUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="primary-button"
                >
                  Visit Ko-fi Shop
                </a>

                <a
                  href={freeIntroCourseUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="secondary-button"
                >
                  Start Free Course
                </a>

                <Link href="/support" className="secondary-button">
                  View Membership Tiers
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: "34px 0" }}>
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
                padding: "clamp(26px, 5vw, 44px)",
              }}
            >
              <p className="kicker">Available / planned items</p>

              <div style={{ display: "grid", gap: "16px" }}>
                {shopItems.map((item) => (
                  <article
                    key={item.title}
                    style={{
                      border: "1px solid var(--line)",
                      borderRadius: "22px",
                      padding: "22px",
                      background: "rgba(255,255,255,0.035)",
                    }}
                  >
                    <p
                      style={{
                        margin: "0 0 10px",
                        color: "var(--gold)",
                        fontSize: "12px",
                        letterSpacing: "0.14em",
                        textTransform: "uppercase",
                      }}
                    >
                      {item.lane}
                    </p>

                    <h2
                      style={{
                        margin: 0,
                        fontSize: "28px",
                        lineHeight: 1.05,
                        letterSpacing: "-0.04em",
                        fontWeight: 400,
                      }}
                    >
                      {item.title}
                    </h2>

                    <p
                      className="soft-copy"
                      style={{
                        margin: "12px 0 0",
                        color: "var(--paper-soft)",
                      }}
                    >
                      {item.text}
                    </p>
                  </article>
                ))}
              </div>

              <div
                style={{
                  marginTop: "28px",
                  display: "flex",
                  gap: "12px",
                  flexWrap: "wrap",
                }}
              >
                <a
                  href={koFiUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="primary-button"
                >
                  Open Ko-fi Shop
                </a>

                <Link href="/field-notes" className="secondary-button">
                  Open Field Notes
                </Link>
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
                src="/images/project.jpg"
                alt="What the Town Keeps and Field Notes digital archive"
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

      <section style={{ padding: "34px 0" }}>
        <div className="site-container">
          <div
            className="glass-panel"
            style={{
              padding: "clamp(26px, 5vw, 44px)",
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: "22px",
            }}
          >
            <div>
              <p className="kicker">Music archive</p>
              <h2 className="section-title">What the Town Keeps</h2>
              <p className="body-copy" style={{ margin: "18px 0 0" }}>
                Album downloads, lyrics, visual packs, and story-world pieces
                remain the foundation of the shop. This is the direct support
                path for Parallax Hearts listeners.
              </p>
            </div>

            <div>
              <p className="kicker">Research archive</p>
              <h2 className="section-title">Field Notes</h2>
              <p className="body-copy" style={{ margin: "18px 0 0" }}>
                Field Notes products will be built around source trails,
                evidence labels, printable research prompts, and topic packets
                connected to the Forbidden Knowledge system.
              </p>
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

            <h2 className="section-title">One-time purchase or monthly support.</h2>

            <p
              className="body-copy"
              style={{
                margin: "20px auto 0",
                maxWidth: "780px",
              }}
            >
              Use the shop for one-time digital items. Use the support page for
              monthly archive access, early looks, behind-the-song notes,
              concept art, story-world material, and Field Notes progress.
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
                href={koFiUrl}
                target="_blank"
                rel="noreferrer"
                className="primary-button"
              >
                Visit Ko-fi
              </a>

              <a
                href={freeIntroCourseUrl}
                target="_blank"
                rel="noreferrer"
                className="secondary-button"
              >
                Start Free Course
              </a>

              <Link href="/support" className="secondary-button">
                Support Page
              </Link>
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
