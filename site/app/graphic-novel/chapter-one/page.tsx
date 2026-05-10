import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Chapter One — Ballast | What the Town Keeps",
  description:
    "Read Chapter One — Ballast from the graphic novel / visual novel adaptation of What the Town Keeps by Parallax Hearts.",
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

const navItems = [
  ["Home", "/"],
  ["Music", "/music"],
  ["Story", "/project"],
  ["Graphic Novel", "/graphic-novel"],
  ["Field Notes", "/field-notes"],
  ["Support", "/support"],
  ["Contact", "/contact"],
];

const chapterPages = [
  {
    number: "001",
    title: "The Crossing",
    status: "Live",
    text: "Elias arrives at the edge of Vallen, where the rail crossing and station roof make the town feel less like a destination than a threshold.",
    href: "/graphic-novel/chapter-one/page-001",
  },
  {
    number: "002",
    title: "Mercer Street",
    status: "Live",
    text: "The road into town narrows into old houses, wet pavement, dim windows, and the first sense that the place is keeping its own account.",
    href: "/graphic-novel/chapter-one/page-002",
  },
  {
    number: "003",
    title: "The Boarding House",
    status: "Live",
    text: "The inspection begins as ordinary work: stairs, rooms, doors, old wood, rainwater, and the silence of a house that has been waiting for someone to notice it.",
    href: "/graphic-novel/chapter-one/page-003",
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
                      label === "Graphic Novel"
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
            style={{
              display: "grid",
              gridTemplateColumns: "minmax(0, 1fr) minmax(300px, 0.78fr)",
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
                    margin: "24px 0 0",
                    maxWidth: "820px",
                    fontSize: "19px",
                  }}
                >
                  Elias Vale comes to Vallen as a home inspector. The job should
                  be practical: look at the house, name what is wrong, write the
                  report, and leave. But the town has its own way of holding
                  pressure.
                </p>

                <p className="body-copy" style={{ margin: "18px 0 0", maxWidth: "820px" }}>
                  <em>Ballast</em> begins the visual novel archive with the
                  crossing into town, Mercer Street, the boarding house, and the
                  first sense that Vallen remembers more than anyone is willing
                  to explain.
                </p>

                <div
                  style={{
                    marginTop: "30px",
                    display: "flex",
                    gap: "12px",
                    flexWrap: "wrap",
                  }}
                >
                  <Link href="/graphic-novel/chapter-one/page-001" className="primary-button">
                    Start Page 001
                  </Link>

                  <Link href="/graphic-novel" className="secondary-button">
                    Graphic Novel Hub
                  </Link>

                  <Link href="/project" className="secondary-button">
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
                src="/images/world.jpg"
                alt="Chapter One Ballast visual atmosphere"
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
          <p className="kicker">Chapter page archive</p>

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
                className="glass-panel"
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

      <section style={{ padding: "34px 0 88px" }}>
        <div className="site-container">
          <div
            className="glass-panel"
            style={{
              padding: "clamp(26px, 5vw, 46px)",
              display: "grid",
              gridTemplateColumns: "minmax(0, 1fr) minmax(260px, 0.8fr)",
              gap: "28px",
              alignItems: "start",
            }}
          >
            <div>
              <p className="kicker">Chapter function</p>
              <h2 className="section-title">The inspection is the doorway.</h2>

              <p className="body-copy" style={{ margin: "18px 0 0" }}>
                The chapter reads like a slow entry into Vallen: ordinary work
                first, atmosphere second, memory underneath. The mystery comes
                from what the town withholds, not from spectacle.
              </p>

              <p className="body-copy" style={{ margin: "18px 0 0" }}>
                Each page is designed to stand alone as a visual post while also
                moving the chapter forward as part of the larger website archive.
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
