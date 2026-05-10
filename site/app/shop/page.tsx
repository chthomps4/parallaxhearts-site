import Image from "next/image";
import Link from "next/link";

const koFiUrl = "https://ko-fi.com/parallaxhearts";

const navItems = [
  ["Home", "/"],
  ["Music", "/music"],
  ["Story", "/project"],
  ["Graphic Novel", "/graphic-novel"],
  ["Field Notes", "/field-notes"],
  ["Shop", "/shop"],
  ["Support", "/support"],
  ["Contact", "/contact"],
];

const shopItems = [
  {
    title: "What the Town Keeps — Digital Album",
    text: "The Parallax Hearts album as the central listening piece.",
    lane: "Music",
  },
  {
    title: "Lyric Book PDF",
    text: "Collected lyrics and song notes for the album world.",
    lane: "Lyrics",
  },
  {
    title: "Vallen Concept Art Pack",
    text: "Selected visuals, album art, and atmospheric pieces from the story world.",
    lane: "Visuals",
  },
  {
    title: "Graphic Novel Preview PDF",
    text: "Early page previews and chapter material from the visual novel archive.",
    lane: "Story",
  },
  {
    title: "Story Fragment PDF",
    text: "Short prose, page excerpts, and Vallen archive pieces collected for readers.",
    lane: "Story",
  },
  {
    title: "Complete Support Bundle",
    text: "A combined package for listeners who want music, lyrics, visuals, and story material together.",
    lane: "Bundle",
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
              {navItems.map(([label, href]) => (
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
              <p className="kicker">Shop / one-time digital items</p>

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
                Music, lyrics, art, and story pieces.
              </h1>

              <p
                className="body-copy"
                style={{
                  margin: "24px 0 0",
                  maxWidth: "760px",
                  fontSize: "19px",
                }}
              >
                The shop is for one-time digital items connected to Parallax
                Hearts and <em>What the Town Keeps</em>. Ko-fi is the checkout
                path.
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

                <Link href="/support" className="secondary-button">
                  Monthly Support
                </Link>

                <Link href="/music" className="secondary-button">
                  Listen First
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
              <p className="kicker">Catalog</p>

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

                <Link href="/graphic-novel/chapter-one/page-001" className="secondary-button">
                  Start Reading
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
                alt="What the Town Keeps digital catalog"
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
            <p className="kicker">Shop or support</p>

            <h2 className="section-title">One-time purchase or monthly support.</h2>

            <p
              className="body-copy"
              style={{
                margin: "20px auto 0",
                maxWidth: "700px",
              }}
            >
              Use the shop for individual digital items. Use the support page
              for memberships, early looks, and ongoing archive access.
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

              <Link href="/support" className="secondary-button">
                Support Page
              </Link>

              <Link href="/contact" className="secondary-button">
                Social Links
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
