import Link from "next/link";
import type { Metadata } from "next";
import ArchiveNote from "../components/ArchiveNote";

const koFiUrl = "https://ko-fi.com/parallaxhearts";

export const metadata: Metadata = {
  title: "Support | Parallax Hearts",
  description:
    "Support Parallax Hearts, What the Town Keeps, the Vallen story world, graphic novel pages, music, visual archive material, Field Notes, and related research work.",
};

const navItems = [
  ["Home", "/"],
  ["Music", "/music"],
  ["Story", "/project"],
  ["Forbidden Knowledge", "/forbidden-knowledge"],
  ["Field Notes", "/field-notes"],
  ["Shop", "/shop"],
  ["Support", "/support"],
  ["About", "/about"],
  ["Contact", "/contact"],
];

const tiers = [
  {
    name: "Porch Light",
    price: "$3 / month",
    purpose: "A quiet way to support Parallax Hearts and the world of What the Town Keeps.",
    includes: [
      "Early fragments",
      "Behind-the-song notes",
      "Small visual previews",
      "Short updates from the Vallen story world",
      "Occasional Field Notes progress updates",
    ],
  },
  {
    name: "Station Room",
    price: "$7 / month",
    purpose: "The main archive tier for music, story, and visual material.",
    includes: [
      "Everything in Porch Light",
      "Lyrics and song notes",
      "Early video previews",
      "Story fragments from Vallen",
      "Concept art and album-art previews",
      "Monthly Town Archive / Field Notes post",
    ],
  },
  {
    name: "Town Archive",
    price: "$15 / month",
    purpose: "The deeper creative archive for What the Town Keeps.",
    includes: [
      "Everything in Station Room",
      "High-resolution art packs",
      "Downloadable lyric, story, and archive PDFs",
      "Graphic novel previews",
      "Album artwork variants",
      "Selected unreleased or alternate material when available",
      "Deeper Field Notes / Forbidden Knowledge research previews when available",
    ],
  },
];

const supportLanes = [
  {
    title: "Ko-fi Support",
    text: "The direct support and shop path for Parallax Hearts, What the Town Keeps, music, visual archive material, PDFs, bundles, and monthly creative updates.",
    href: koFiUrl,
    label: "Support on Ko-fi",
    external: true,
  },
  {
    title: "Listen + Enter Vallen",
    text: "Start with the album, then move into the story world and graphic novel direction behind What the Town Keeps.",
    href: "/music",
    label: "Open Music",
  },
  {
    title: "Field Notes",
    text: "The separate research layer for source trails, ancient knowledge, lost etymology, evidence labels, and the Handbook method.",
    href: "/field-notes",
    label: "Open Field Notes",
  },
];

const shopItems = [
  "What the Town Keeps — Digital Album",
  "Lyric Book PDF",
  "The Vallen Archive — Concept Art Pack",
  "Graphic Novel Preview PDF",
  "Field Notes / Source-Trail PDFs when available",
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
              {navItems.map(([label, href]) => (
                <Link
                  key={label}
                  href={href}
                  style={{
                    color:
                      label === "Support"
                        ? "var(--gold)"
                        : "var(--paper-soft)",
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
              <p className="kicker">Support Parallax Hearts</p>

              <h1
                style={{
                  margin: 0,
                  fontSize: "clamp(46px, 8vw, 92px)",
                  lineHeight: 0.9,
                  letterSpacing: "-0.07em",
                  fontWeight: 400,
                  maxWidth: "940px",
                }}
              >
                Help keep the songs, pages, and archive moving.
              </h1>

              <p
                className="body-copy"
                style={{
                  margin: "24px 0 0",
                  maxWidth: "800px",
                  fontSize: "19px",
                }}
              >
                Direct support helps keep <em>What the Town Keeps</em> alive as
                music, story, visual archive, and graphic novel direction. Ko-fi
                is the main support path. Field Notes and Forbidden Knowledge
                remain connected research lanes, but the heart of this page is
                the creative work: Parallax Hearts, Vallen, and the archive
                <ArchiveNote
                  title="Archive Note: Archive"
                  evidence="Well-supported word history / creative use"
                >
                  An archive is a place where records are preserved. Here, it
                  means the collected music, lyrics, visuals, story fragments,
                  source trails, evidence labels, course notes, and research
                  material surrounding the larger creative system.
                </ArchiveNote>
                being built piece by piece.
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
                  Support on Ko-fi
                </a>

                <Link href="/music" className="secondary-button">
                  Listen First
                </Link>

                <Link href="/project" className="secondary-button">
                  Enter Vallen
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: "34px 0" }}>
        <div className="site-container">
          <p className="kicker">Choose the right path</p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
              gap: "16px",
              marginTop: "18px",
            }}
          >
            {supportLanes.map((lane) => (
              <article
                key={lane.title}
                className="glass-panel"
                style={{ padding: "26px", borderRadius: "26px" }}
              >
                <h2
                  style={{
                    margin: 0,
                    fontSize: "32px",
                    lineHeight: 1,
                    letterSpacing: "-0.045em",
                    fontWeight: 400,
                  }}
                >
                  {lane.title}
                </h2>

                <p className="soft-copy" style={{ margin: "14px 0 22px" }}>
                  {lane.text}
                </p>

                {lane.external ? (
                  <a
                    href={lane.href}
                    target="_blank"
                    rel="noreferrer"
                    className="secondary-button"
                  >
                    {lane.label}
                  </a>
                ) : (
                  <Link href={lane.href} className="secondary-button">
                    {lane.label}
                  </Link>
                )}
              </article>
            ))}
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

          <div
            style={{
              marginTop: "24px",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <a
              href={koFiUrl}
              target="_blank"
              rel="noreferrer"
              className="primary-button"
            >
              Join on Ko-fi
            </a>
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
                packs, story previews, source-trail PDFs, and bundles from the
                creative archive.
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
                  href={koFiUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="primary-button"
                >
                  Visit Ko-fi Shop
                </a>

                <Link href="/shop" className="secondary-button">
                  View Shop Page
                </Link>
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
              Thank you for helping keep the archive alive.
            </h2>

            <p
              className="body-copy"
              style={{
                margin: "20px auto 0",
                maxWidth: "760px",
              }}
            >
              Every purchase, membership, share, listen, and course visit helps
              keep the work moving forward — the songs, the story world, the
              visual archive, the Field Notes, and the larger Forbidden
              Knowledge system being built piece by piece.
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
                Support on Ko-fi
              </a>

              <Link href="/project" className="secondary-button">
                Enter Vallen
              </Link>

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
