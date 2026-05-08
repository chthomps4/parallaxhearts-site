import Image from "next/image";
import Link from "next/link";
import ArchiveNote from "../components/ArchiveNote";

export default function ProjectPage() {
  return (
    <main
      className="site-shell"
      style={{
        minHeight: "100vh",
        background:
          "radial-gradient(circle at top, rgba(110,78,146,0.18), transparent 35%), linear-gradient(180deg, #08080d 0%, #0b0b12 45%, #11111b 100%)",
        color: "#f3eee7",
        fontFamily: "Georgia, serif",
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
                    label === "Story" ? "var(--gold)" : "var(--paper-soft)",
                  textDecoration: "none",
                  fontSize: "15px",
                }}
              >
                {label}
              </Link>
            ))}
          </nav>
        </header>

        <section style={{ padding: "60px 0 34px" }}>
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
                  "radial-gradient(circle at 18% 12%, rgba(210,181,139,0.14), transparent 30%), radial-gradient(circle at 82% 16%, rgba(127,141,155,0.12), transparent 34%)",
                pointerEvents: "none",
              }}
            />

            <div style={{ position: "relative", zIndex: 2 }}>
              <p className="kicker">What the Town Keeps</p>

              <h1
                style={{
                  margin: 0,
                  fontSize: "clamp(44px, 8vw, 86px)",
                  lineHeight: 0.92,
                  letterSpacing: "-0.07em",
                  fontWeight: 400,
                  maxWidth: "920px",
                }}
              >
                A town built from memory, weather, and what no one says out loud.
              </h1>

              <p
                className="body-copy"
                style={{
                  margin: "24px 0 0",
                  maxWidth: "860px",
                  fontSize: "19px",
                }}
              >
                <em>What the Town Keeps</em> is the story world surrounding the
                Parallax Hearts album. It is set in Vallen
                <ArchiveNote
                  title="Archive Note: Vallen"
                  evidence="Creative name / interpretive resonance"
                >
                  Vallen is the fictional town at the center of What the Town
                  Keeps. The name suggests valley, falling, low ground, and a
                  place where weather and memory collect. This is a
                  project-specific name, not a historical place claim.
                </ArchiveNote>
                , a rainy small town of rail lines, old houses, quiet rooms,
                dim windows, and records that do not always stay on paper.
              </p>

              <p
                className="body-copy"
                style={{
                  margin: "18px 0 0",
                  maxWidth: "860px",
                  fontSize: "18px",
                }}
              >
                The town is not horror, fantasy, or supernatural spectacle. It
                is emotional realism: people trying to keep moving while the
                places around them continue to hold the shape of what happened.
              </p>

              <div
                style={{
                  marginTop: "28px",
                  display: "flex",
                  gap: "12px",
                  flexWrap: "wrap",
                }}
              >
                <Link href="/music" className="primary-button">
                  Listen to the Album
                </Link>

                <Link href="/field-notes" className="secondary-button">
                  Open Field Notes
                </Link>

                <Link href="/support" className="secondary-button">
                  Support the Archive
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section style={{ padding: "34px 0" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "22px",
            }}
          >
            <div
              className="glass-panel"
              style={{
                overflow: "hidden",
                borderRadius: "28px",
              }}
            >
              <Image
                src="/images/project.jpg"
                alt="What the Town Keeps project image"
                width={1200}
                height={900}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  minHeight: "320px",
                }}
              />
            </div>

            <div
              className="glass-panel"
              style={{
                overflow: "hidden",
                borderRadius: "28px",
              }}
            >
              <Image
                src="/images/world.jpg"
                alt="What the Town Keeps visual world image"
                width={1200}
                height={900}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  minHeight: "320px",
                }}
              />
            </div>
          </div>
        </section>

        <section style={{ padding: "34px 0" }}>
          <div
            className="glass-panel"
            style={{
              padding: "clamp(26px, 5vw, 44px)",
              display: "grid",
              gridTemplateColumns: "minmax(0, 1fr) minmax(260px, 0.8fr)",
              gap: "30px",
              alignItems: "start",
            }}
          >
            <div>
              <p className="kicker">Story world</p>

              <h2 className="section-title">The town as archive.</h2>

              <p className="body-copy" style={{ margin: "20px 0 0" }}>
                In this world, an archive
                <ArchiveNote
                  title="Archive Note: Archive"
                  evidence="Well-supported word history / creative use"
                >
                  An archive is a place where records are preserved. In What the
                  Town Keeps, the town itself behaves like an archive: houses,
                  roads, rail lines, rooms, and habits preserve traces of what
                  people leave behind.
                </ArchiveNote>{" "}
                is not only a box of documents. It can be a house, a window, a
                street after rain, a rail line, a room that still feels arranged
                around someone who is gone.
              </p>

              <p className="body-copy" style={{ margin: "18px 0 0" }}>
                The story follows the pressure between what people remember,
                what they deny, what they inherit, and what the town quietly
                keeps in place.
              </p>
            </div>

            <aside
              style={{
                border: "1px solid var(--line)",
                borderRadius: "24px",
                padding: "24px",
                background:
                  "linear-gradient(180deg, rgba(210,181,139,0.10), rgba(255,255,255,0.025))",
              }}
            >
              <p className="kicker" style={{ marginBottom: "18px" }}>
                Visual language
              </p>

              {[
                "Rainy small-town America",
                "Old houses and dim windows",
                "Rail lines, stations, roads, and records",
                "Muted blue-gray, charcoal, sepia, and warm interior light",
                "Emotional realism without horror or fantasy",
              ].map((item) => (
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
            </aside>
          </div>
        </section>

        <section style={{ padding: "34px 0" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "22px",
            }}
          >
            <div
              className="glass-panel"
              style={{
                borderRadius: "24px",
                padding: "28px",
              }}
            >
              <h3
                style={{
                  marginTop: 0,
                  fontSize: "28px",
                  lineHeight: 1.05,
                  fontWeight: 400,
                }}
              >
                Thresholds
                <ArchiveNote
                  title="Archive Note: Threshold"
                  evidence="Well-supported word history / symbolic interpretation"
                >
                  A threshold is the piece of a doorway one crosses to enter a
                  space. Symbolically, it marks the line between outside and
                  inside, before and after, known and unknown. The symbolic
                  reading is interpretive, not proof of a hidden tradition.
                </ArchiveNote>
              </h3>

              <p className="body-copy">
                The story keeps returning to doorways, porches, crossings,
                windows, rails, and rooms — places where someone is either
                entering, leaving, or standing between two versions of a life.
              </p>
            </div>

            <div
              className="glass-panel"
              style={{
                borderRadius: "24px",
                padding: "28px",
              }}
            >
              <h3
                style={{
                  marginTop: 0,
                  fontSize: "28px",
                  lineHeight: 1.05,
                  fontWeight: 400,
                }}
              >
                Witness
                <ArchiveNote
                  title="Archive Note: Witness"
                  evidence="Well-supported concept / creative use"
                >
                  A witness is one who sees, remembers, or gives testimony. In
                  Vallen, buildings, records, windows, and rooms often act like
                  witnesses without speaking. This is literary personification.
                </ArchiveNote>
              </h3>

              <p className="body-copy">
                Vallen is full of silent witnesses: houses, records, rail
                crossings, weathered rooms, and people who learned not to say
                what they still know.
              </p>
            </div>
          </div>
        </section>

        <section style={{ padding: "34px 0 88px" }}>
          <div
            className="glass-panel"
            style={{
              padding: "clamp(26px, 5vw, 44px)",
              textAlign: "center",
            }}
          >
            <p className="kicker">Hidden layer</p>

            <h2 className="section-title">Some words open like drawers.</h2>

            <p
              className="body-copy"
              style={{
                margin: "20px auto 0",
                maxWidth: "780px",
              }}
            >
              Some pages contain small Archive Notes — fragments of etymology,
              history, symbolism, and source-conscious research. They are not
              explanations of the whole story. They are traces, placed where a
              word carries more than one kind of weight. Field Notes is where
              that research lane opens fully.
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
              <Link href="/music" className="primary-button">
                Listen to the Album
              </Link>

              <Link href="/field-notes" className="secondary-button">
                Open Field Notes
              </Link>

              <Link href="/support" className="secondary-button">
                Support the Project
              </Link>
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
      </div>
    </main>
  );
}
