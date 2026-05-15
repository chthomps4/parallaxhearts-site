import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { absoluteUrl } from "../../lib/seo";
import ChapterSoundtrackCta from "../../components/ChapterSoundtrackCta";

const pageUrl = absoluteUrl("/graphic-novel/chapter-one");

export const metadata: Metadata = {
  title: "Chapter One — Ballast | What the Town Keeps",
  description:
    "Read Chapter One — Ballast from the graphic novel / visual novel adaptation of What the Town Keeps by Parallax Hearts.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Chapter One — Ballast | What the Town Keeps",
    description:
      "Read Chapter One — Ballast from the graphic novel / visual novel adaptation of What the Town Keeps by Parallax Hearts.",
    url: pageUrl,
    siteName: "Parallax Hearts",
    images: [{ url: absoluteUrl("/images/project.jpg"), width: 1200, height: 630, alt: "Chapter One — Ballast" }],
    locale: "en_US",
    type: "website",
  },
  keywords: [
    "Chapter One Ballast",
    "What the Town Keeps Chapter One",
    "What the Town Keeps graphic novel",
    "Elias Vale",
    "Vallen",
    "Parallax Hearts",
    "visual novel",
    "small town literary drama",
  ],
};

const chapterPages = [
  {
    number: "001",
    title: "The Crossing",
    status: "Live",
    text: "Elias reaches the edge of Vallen, where the rails turn arrival into a threshold.",
    href: "/graphic-novel/chapter-one/page-001",
  },
  {
    number: "002",
    title: "Mercer Street",
    status: "Live",
    text: "The road into town narrows through old houses, wet pavement, dim windows, and careful silence.",
    href: "/graphic-novel/chapter-one/page-002",
  },
  {
    number: "003",
    title: "The Boarding House",
    status: "Live",
    text: "The first inspection site waits under rainwater, old paint, loose gutters, and second-floor windows.",
    href: "/graphic-novel/chapter-one/page-003",
  },
  {
    number: "004",
    title: "The First Door",
    status: "Live",
    text: "Elias finds the key, checks the frame, and steps into the boarding house with habit leading and story following.",
    href: "/graphic-novel/chapter-one/page-004",
  },
  {
    number: "005",
    title: "The Hallway",
    status: "Live",
    text: "Inside the boarding house, Elias lets the hallway settle before he gives the room a name.",
    href: "/graphic-novel/chapter-one/page-005",
  },
  {
    number: "006",
    title: "The Waterline",
    status: "Live",
    text: "Elias notices a pale seam across the plaster: a memory of water where water should not have stayed.",
    href: "/graphic-novel/chapter-one/page-006",
  },
];

const chapterRules = [
  "Elias Vale is a home inspector.",
  "Vallen is grounded small-town America, not horror or fantasy.",
  "Chapter One is titled Ballast.",
  "The town functions as witness, pressure system, and archive.",
  "The visual style stays warm, earthy, cinematic, literary, and restrained.",
];

export default function ChapterOnePage() {
  return (
    <main className="site-shell">
      <section style={{ padding: "42px 0 24px" }}>
        <div className="site-container">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "minmax(0, 1fr) minmax(300px, 0.72fr)",
              gap: "22px",
              alignItems: "stretch",
            }}
          >
            <div
              className="glass-panel"
              style={{
                padding: "clamp(26px, 5vw, 48px)",
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
                    "radial-gradient(circle at 18% 10%, rgba(210,181,139,0.16), transparent 30%), radial-gradient(circle at 82% 20%, rgba(127,141,155,0.14), transparent 34%)",
                  pointerEvents: "none",
                }}
              />

              <div style={{ position: "relative", zIndex: 2 }}>
                <p className="kicker">Chapter One</p>

                <h1
                  style={{
                    margin: 0,
                    fontSize: "clamp(46px, 8vw, 92px)",
                    lineHeight: 0.9,
                    letterSpacing: "-0.07em",
                    fontWeight: 400,
                    maxWidth: "920px",
                  }}
                >
                  Ballast
                </h1>

                <p
                  className="body-copy"
                  style={{
                    margin: "22px 0 0",
                    maxWidth: "760px",
                    fontSize: "19px",
                  }}
                >
                  Elias Vale enters Vallen for a house inspection. Six pages
                  are live now: the crossing, Mercer Street, the boarding house,
                  the first door, the hallway, and the waterline.
                </p>

                <div
                  style={{
                    marginTop: "26px",
                    display: "flex",
                    gap: "12px",
                    flexWrap: "wrap",
                  }}
                >
                  <Link href="/graphic-novel/chapter-one/page-001" className="primary-button">
                    Start Reading
                  </Link>

                  <Link href="/graphic-novel/chapter-one/page-006" className="secondary-button">
                    Latest Page
                  </Link>

                  <Link href="/music" className="secondary-button">
                    Chapter Soundtrack
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
                minHeight: "360px",
                position: "relative",
              }}
            >
              <Image
                src="/images/graphic-novel/chapter-one/page-006-waterline.svg"
                alt="Chapter One Ballast waterline atmosphere"
                fill
                unoptimized
                sizes="(max-width: 900px) 100vw, 420px"
                style={{
                  objectFit: "cover",
                  objectPosition: "center",
                }}
              />
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: "24px 0 34px" }}>
        <div className="site-container">
          <p className="kicker">Chapter pages</p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: "16px",
              marginTop: "18px",
            }}
          >
            {chapterPages.map((page) => (
              <Link
                key={page.number}
                href={page.href}
                className="glass-panel link-card"
                style={{
                  padding: "26px",
                  borderRadius: "26px",
                  color: "var(--paper)",
                  textDecoration: "none",
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
                  Page {page.number} / {page.status}
                </p>

                <h2
                  style={{
                    margin: 0,
                    fontSize: "31px",
                    lineHeight: 1.02,
                    letterSpacing: "-0.045em",
                    fontWeight: 400,
                  }}
                >
                  {page.title}
                </h2>

                <p className="soft-copy" style={{ margin: "14px 0 0" }}>
                  {page.text}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <ChapterSoundtrackCta />

      <section style={{ padding: "34px 0 88px" }}>
        <div className="site-container">
          <div
            className="glass-panel"
            style={{
              padding: "clamp(24px, 5vw, 40px)",
              display: "grid",
              gridTemplateColumns: "minmax(0, 1fr) minmax(260px, 0.8fr)",
              gap: "28px",
              alignItems: "start",
            }}
          >
            <div>
              <p className="kicker">Chapter note</p>
              <h2 className="section-title">The inspection is the doorway.</h2>

              <p className="body-copy" style={{ margin: "18px 0 0" }}>
                Chapter One should stay practical on the surface. The mystery is
                in the pressure around the work: rain, rooms, old damage, and
                what the town does not say out loud.
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
                Canon rules
              </p>

              {chapterRules.map((item) => (
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
