import Image from "next/image";
import Link from "next/link";

const shopItems = [
  {
    title: "What the Town Keeps — Digital Album",
    text: "The current Parallax Hearts album, built around Vallen, memory, distance, rain, old rooms, and quiet emotional pressure.",
  },
  {
    title: "Lyric Book PDF",
    text: "A clean collected lyric document for the album world, ideal for listeners who want to sit with the words outside the songs.",
  },
  {
    title: "The Vallen Archive — Concept Art Pack",
    text: "Selected visual pieces, album art, story-world images, and atmospheric references from What the Town Keeps.",
  },
  {
    title: "Graphic Novel Preview PDF",
    text: "Early page previews and visual-story material connected to the developing graphic novel adaptation.",
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
                ["Shop", "/shop"],
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
              <p className="kicker">Shop / Digital archive</p>

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
                Music, lyrics, art, and pieces from Vallen.
              </h1>

              <p
                className="body-copy"
                style={{
                  margin: "24px 0 0",
                  maxWidth: "780px",
                  fontSize: "19px",
                }}
              >
                The shop is the one-time purchase side of Parallax Hearts:
                album downloads, lyric documents, concept art, story previews,
                and visual archive material connected to{" "}
                <em>What the Town Keeps</em>.
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
                  href="https://ko-fi.com/parallaxhearts"
                  target="_blank"
                  rel="noreferrer"
                  className="primary-button"
                >
                  Visit Ko-fi Shop
                </a>

                <Link href="/support" className="secondary-button">
                  View Membership Tiers
                </Link>

                <Link href="/music" className="secondary-button">
                  Listen to the Album
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

              <div style={{ marginTop: "28px" }}>
                <a
                  href="https://ko-fi.com/parallaxhearts"
                  target="_blank"
                  rel="noreferrer"
                  className="primary-button"
                >
                  Open Ko-fi Shop
                </a>
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
                alt="What the Town Keeps visual archive"
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
                maxWidth: "760px",
              }}
            >
              Use the shop for one-time digital items. Use the support page for
              monthly archive access, early looks, behind-the-song notes,
              concept art, and story-world material.
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
                href="https://ko-fi.com/parallaxhearts"
                target="_blank"
                rel="noreferrer"
                className="primary-button"
              >
                Visit Ko-fi
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