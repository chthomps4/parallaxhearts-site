import Image from "next/image";
import Link from "next/link";

const identityCards = [
  {
    title: "Parallax Hearts",
    text: "The music project: cinematic songwriting, intimate vocals, textured guitars, and emotionally grounded atmosphere.",
    href: "/music",
    label: "Listen",
  },
  {
    title: "What the Town Keeps",
    text: "The album and story world set in Vallen: rain, rail lines, old houses, memory, distance, and what people leave unsaid.",
    href: "/story",
    label: "Story",
  },
  {
    title: "Visual Novel",
    text: "The readable story archive, beginning with Chapter One - Ballast and Elias Vale entering Vallen.",
    href: "/graphic-novel/chapter-one/page-001",
    label: "Read",
  },
];

const epkCards = [
  {
    title: "Short bio",
    text: "Parallax Hearts is an independent cinematic music project building What the Town Keeps as songs, story pages, and a rain-dark archive from the fictional town of Vallen.",
  },
  {
    title: "Project description",
    text: "The work blends intimate alternative music, grounded small-town mystery, and a visual novel reading path centered on inspection work, memory, weather, and old houses.",
  },
  {
    title: "Press-safe notes",
    text: "Public copy should describe the project as music, story world, and visual novel archive. Avoid unapproved claims, private process notes, or unreleased lore.",
  },
];

export default function AboutPage() {
  return (
    <main className="site-shell">
      <section style={{ padding: "54px 0 44px" }}>
        <div className="site-container">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "minmax(0, 1fr) minmax(300px, 0.76fr)",
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
                    maxWidth: "860px",
                  }}
                >
                  Parallax Hearts is the music. Vallen is the weather around it.
                </h1>

                <p
                  className="body-copy"
                  style={{
                    margin: "24px 0 0",
                    maxWidth: "800px",
                    fontSize: "19px",
                  }}
                >
                  Parallax Hearts is the independent music project behind
                  <em> What the Town Keeps</em>: a cinematic album, story world,
                  and visual novel archive built around the rainy town of Vallen.
                </p>

                <p
                  className="body-copy"
                  style={{
                    margin: "18px 0 0",
                    maxWidth: "800px",
                  }}
                >
                  The work stays grounded and human: old houses, rail lines,
                  quiet rooms, weathered streets, intimate songs, and the
                  pressure of what people carry after leaving.
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
                    Listen
                  </Link>

                  <Link href="/graphic-novel/chapter-one/page-001" className="secondary-button">
                    Read
                  </Link>

                  <Link href="/story" className="secondary-button">
                    Story World
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

      <section style={{ padding: "0 0 88px" }}>
        <div className="site-container">
          <div
            className="glass-panel"
            style={{
              padding: "clamp(26px, 5vw, 44px)",
            }}
          >
            <p className="kicker">Plain-language map</p>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))",
                gap: "14px",
                marginTop: "18px",
              }}
            >
              {identityCards.map((item) => (
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
                      fontSize: "27px",
                      lineHeight: 1.05,
                      letterSpacing: "-0.04em",
                      fontWeight: 400,
                    }}
                  >
                    {item.title}
                  </h2>

                  <p className="soft-copy" style={{ margin: "12px 0 18px" }}>
                    {item.text}
                  </p>

                  <Link href={item.href} className="secondary-button">
                    {item.label}
                  </Link>
                </article>
              ))}
            </div>
          </div>

          <div
            className="glass-panel"
            style={{
              marginTop: "22px",
              padding: "clamp(26px, 5vw, 44px)",
            }}
          >
            <p className="kicker">EPK / press-safe quick kit</p>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))",
                gap: "14px",
                marginTop: "18px",
              }}
            >
              {epkCards.map((item) => (
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
                      fontSize: "27px",
                      lineHeight: 1.05,
                      letterSpacing: "-0.04em",
                      fontWeight: 400,
                    }}
                  >
                    {item.title}
                  </h2>

                  <p className="soft-copy" style={{ margin: "12px 0 0" }}>
                    {item.text}
                  </p>
                </article>
              ))}
            </div>

            <div
              style={{
                marginTop: "24px",
                display: "flex",
                gap: "12px",
                flexWrap: "wrap",
              }}
            >
              <Link href="/music" className="primary-button">
                Listen
              </Link>
              <Link href="/graphic-novel" className="secondary-button">
                Read the archive
              </Link>
              <Link href="/contact" className="secondary-button">
                Contact
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

