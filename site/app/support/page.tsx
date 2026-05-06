import Link from "next/link";
import type { Metadata } from "next";
import ArchiveNote from "../components/ArchiveNote";

export const metadata: Metadata = {
  title: "Support | Parallax Hearts",
  description:
    "Support Parallax Hearts and the world of What the Town Keeps through Ko-fi memberships, digital music, lyric sheets, concept art, story fragments, and visual archive material.",
};

const tiers = [
  {
    name: "Porch Light",
    price: "$3 / month",
    purpose: "A quiet way to support the project.",
    includes: [
      "Members-only monthly updates",
      "Early poem, lyric, and story fragments",
      "Behind-the-song notes",
      "Small previews from the visual world",
    ],
  },
  {
    name: "Station Room",
    price: "$7 / month",
    purpose: "The main archive tier for music, story, and visuals.",
    includes: [
      "Everything in Porch Light",
      "Early video and reel previews",
      "Lyric sheets and song notes",
      "Story fragments from Vallen",
      "Concept art and album art previews",
      "Monthly Town Archive post",
    ],
  },
  {
    name: "Town Archive",
    price: "$15 / month",
    purpose: "The deeper creative archive.",
    includes: [
      "Everything in Station Room",
      "High-resolution concept art packs",
      "Album artwork variants",
      "Downloadable lyric and story PDFs",
      "Early graphic novel page previews",
      "Selected unreleased or alternate material when available",
    ],
  },
];

const shopItems = [
  "What the Town Keeps — Digital Album",
  "Lyric Book PDF",
  "The Vallen Archive — Concept Art Pack",
  "Graphic Novel Preview PDF",
  "Complete Support Bundle",
];

export default function SupportPage() {
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
              <p className="kicker">Support the world behind the album</p>

              <h1
                style={{
                  margin: 0,
                  fontSize: "clamp(46px, 8vw, 92px)",
                  lineHeight: 0.9,
                  letterSpacing: "-0.07em",
                  fontWeight: 400,
                  maxWidth: "900px",
                }}
              >
                Help keep the archive growing.
              </h1>

              <p
                className="body-copy"
                style={{
                  margin: "24px 0 0",
                  maxWidth: "760px",
                  fontSize: "19px",
                }}
              >
                What the Town Keeps is an album, a story world, a visual archive
                <ArchiveNote
                  title="Archive Note: Archive"
                  evidence="Well-supported word history / creative use"
                >
                  An archive is a place where records are preserved. Here, it
                  means more than storage: it is the collected music, lyrics,
                  visuals, story fragments, album art, and graphic novel
                  material surrounding What the Town Keeps.
                </ArchiveNote>
                , and a graphic novel in progress. Ko-fi is where the deeper
                material can live: music, lyrics, story fragments, videos,
                concept art, album art, and early looks at Vallen.
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
                  Support on Ko-fi
                </a>

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
          <p className="kicker">Membership tiers</p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: "18px",
            }}
          >
            {tiers.map((tier) => (
              <article
                key={tier.name}
                className="glass-panel"
                style={{
                  padding: "28px",
                  borderRadius: "26px",
                }}
              >
                <p
                  style={{
                    margin: "0 0 10px",
                    color: "var(--gold)",
                    fontSize: "13px",
                    letterSpacing: "0.16em",
                    textTransform: "uppercase",
                  }}
                >
                  {tier.price}
                </p>

                <h2
                  style={{
                    margin: 0,
                    fontSize: "34px",
                    lineHeight: 1,
                    letterSpacing: "-0.045em",
                    fontWeight: 400,
                  }}
                >
                  {tier.name}
                </h2>

                <p className="soft-copy" style={{ margin: "14px 0 20px" }}>
                  {tier.purpose}
                </p>

                <div style={{ display: "grid", gap: "12px" }}>
                  {tier.includes.map((item) => (
                    <div
                      key={item}
                      style={{
                        paddingTop: "12px",
                        borderTop: "1px solid var(--line)",
                        color: "var(--paper-soft)",
                        fontSize: "15px",
                        lineHeight: 1.55,
                      }}
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </article>
            ))}
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
              gridTemplateColumns: "minmax(0, 1fr) minmax(260px, 0.8fr)",
              gap: "28px",
              alignItems: "start",
            }}
          >
            <div>
              <p className="kicker">One-time support</p>

              <h2 className="section-title">Digital shop ideas.</h2>

              <p className="body-copy" style={{ margin: "20px 0 0" }}>
                Not everyone wants a monthly membership. The Ko-fi shop can
                also hold one-time digital items: the album, lyric PDFs, visual
                packs, story previews, and bundles from the world of Vallen.
              </p>

              <div style={{ marginTop: "26px" }}>
                <a
                  href="https://ko-fi.com/parallaxhearts"
                  target="_blank"
                  rel="noreferrer"
                  className="secondary-button"
                >
                  Visit Ko-fi Shop
                </a>
              </div>
            </div>

            <div
              style={{
                border: "1px solid var(--line)",
                borderRadius: "24px",
                padding: "22px",
                background: "rgba(255,255,255,0.025)",
              }}
            >
              {shopItems.map((item) => (
                <div
                  key={item}
                  style={{
                    padding: "14px 0",
                    borderTop: "1px solid var(--line)",
                    color: "var(--paper-soft)",
                    fontSize: "15px",
                    lineHeight: 1.55,
                  }}
                >
                  {item}
                </div>
              ))}
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

            <h2 className="section-title">
              Thank you for helping build the town.
            </h2>

            <p
              className="body-copy"
              style={{
                margin: "20px auto 0",
                maxWidth: "720px",
              }}
            >
              Every purchase, membership, share, and listen helps keep Parallax
              Hearts moving forward — music first, story close behind, and the
              world of What the Town Keeps growing one piece at a time.
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
                Support on Ko-fi
              </a>

              <Link href="/" className="secondary-button">
                Back Home
              </Link>
            </div>
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