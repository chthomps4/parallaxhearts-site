import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import ArchiveNote from "../components/ArchiveNote";
import SiteHeader from "../components/SiteHeader";

export const metadata: Metadata = {
  title: "What the Town Keeps | Parallax Hearts",
  description:
    "Enter What the Town Keeps by Parallax Hearts — the album, story world, visual novel archive, and rainy small-town world of Vallen.",
};

const worldDetails = [
  "Rainy small-town America",
  "Old houses and dim windows",
  "Rail lines, station rooms, roads, and records",
  "Muted blue-gray, charcoal, sepia, and warm interior light",
  "Emotional realism without horror, fantasy, or spectacle",
];

const storyDoors = [
  {
    title: "Read",
    text: "Begin the built-in visual novel with Chapter One — Ballast.",
    href: "/graphic-novel/chapter-one/page-001",
  },
  {
    title: "Listen",
    text: "Hear the album and follow the music side of the project.",
    href: "/music",
  },
  {
    title: "Study",
    text: "Open Field Notes for the separate research and source-trail lane.",
    href: "/field-notes",
  },
];

export default function ProjectPage() {
  return (
    <main
      className="site-shell"
      style={{
        minHeight: "100vh",
        background:
          "radial-gradient(circle at top, rgba(91,111,132,0.18), transparent 35%), radial-gradient(circle at 88% 8%, rgba(157,121,82,0.12), transparent 30%), linear-gradient(180deg, #08080d 0%, #0b0b12 45%, #11111b 100%)",
        color: "#f3eee7",
      }}
    >
      <SiteHeader active="Story" />

      <div className="site-container">
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
              aria-hidden="true"
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
                  maxWidth: "940px",
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
                This page holds the world. The visual novel is where you read
                it. The music page is where you hear it. Field Notes is the
                separate research lane.
              </p>

              <div
                style={{
                  marginTop: "28px",
                  display: "flex",
                  gap: "12px",
                  flexWrap: "wrap",
                }}
              >
                <Link href="/graphic-novel/chapter-one/page-001" className="primary-button">
                  Start the Visual Novel
                </Link>

                <Link href="/music" className="secondary-button">
                  Listen to the Album
                </Link>

                <Link href="/field-notes" className="secondary-button">
                  Open Field Notes
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
                In Vallen, an archive
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
                street after rain, a rail line, or a room still arranged around
                someone who is gone.
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

              {worldDetails.map((item) => (
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
          <p className="kicker">Choose a path</p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: "16px",
              marginTop: "18px",
            }}
          >
            {storyDoors.map((door) => (
              <Link
                key={door.title}
                href={door.href}
                className="glass-panel link-card"
                style={{
                  padding: "26px",
                  borderRadius: "26px",
                  color: "var(--paper)",
                  textDecoration: "none",
                }}
              >
                <h2
                  style={{
                    margin: 0,
                    fontSize: "31px",
                    lineHeight: 1.02,
                    letterSpacing: "-0.045em",
                    fontWeight: 400,
                  }}
                >
                  {door.title}
                </h2>

                <p className="soft-copy" style={{ margin: "14px 0 0" }}>
                  {door.text}
                </p>
              </Link>
            ))}
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
                maxWidth: "760px",
              }}
            >
              Some pages contain small Archive Notes — fragments of etymology,
              history, symbolism, and source-conscious research. They are not
              explanations of the whole story. Field Notes is where that
              research lane opens fully.
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
              <Link href="/graphic-novel/chapter-one/page-001" className="primary-button">
                Start the Visual Novel
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
