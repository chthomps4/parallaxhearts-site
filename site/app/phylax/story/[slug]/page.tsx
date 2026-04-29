import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import {
  getAdjacentChapters,
  getStoryChapter,
  glyphImages,
  storyChapters,
} from "../story-data";

const siteFont = `Georgia, "Times New Roman", Times, serif`;

const colors = {
  border: "rgba(196, 175, 145, 0.14)",
  text: "#f1ede6",
  textSoft: "rgba(241, 237, 230, 0.78)",
  textDim: "rgba(241, 237, 230, 0.58)",
  gold: "#d2b58b",
};

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return storyChapters.map((chapter) => ({
    slug: chapter.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const chapter = getStoryChapter(slug);

  if (!chapter) {
    return {
      title: "PHYLAX Story Archive",
    };
  }

  return {
    title: `${chapter.title} | PHYLAX Story Archive`,
    description: chapter.summary,
  };
}

function Container({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ width: "min(1180px, calc(100% - 32px))", margin: "0 auto" }}>
      {children}
    </div>
  );
}

function Glyph({
  src,
  size = 130,
  opacity = 0.14,
}: {
  src: string;
  size?: number;
  opacity?: number;
}) {
  return (
    <img
      src={src}
      alt=""
      aria-hidden="true"
      style={{
        width: size,
        height: size,
        objectFit: "contain",
        opacity,
        mixBlendMode: "screen",
        filter: "drop-shadow(0 0 24px rgba(210,181,139,0.12))",
        pointerEvents: "none",
      }}
    />
  );
}

function TopNav() {
  const navItems = [
    ["Home", "/"],
    ["Music", "/music"],
    ["PHYLAX", "/phylax"],
    ["Story", "/phylax/story"],
    ["Characters", "/phylax#characters"],
    ["World", "/phylax#world"],
    ["Contact", "/contact"],
  ];

  return (
    <div
      style={{
        position: "sticky",
        top: 0,
        zIndex: 40,
        backdropFilter: "blur(12px)",
        background: "rgba(3,5,7,0.76)",
        borderBottom: `1px solid ${colors.border}`,
      }}
    >
      <Container>
        <header
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "20px",
            padding: "18px 0",
            flexWrap: "wrap",
          }}
        >
          <Link
            href="/"
            style={{
              color: colors.text,
              textDecoration: "none",
              fontSize: "32px",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              lineHeight: 1,
            }}
          >
            Parallax Hearts
          </Link>

          <nav style={{ display: "flex", gap: "18px", flexWrap: "wrap" }}>
            {navItems.map(([label, href]) => (
              <Link
                key={label}
                href={href}
                style={{
                  color: label === "Story" ? colors.gold : colors.textSoft,
                  textDecoration: "none",
                  fontSize: "15px",
                }}
              >
                {label}
              </Link>
            ))}
          </nav>
        </header>
      </Container>
    </div>
  );
}

export default async function StoryChapterPage({ params }: PageProps) {
  const { slug } = await params;
  const chapter = getStoryChapter(slug);

  if (!chapter) {
    notFound();
  }

  const { previous, next } = getAdjacentChapters(chapter.slug);

  return (
    <main
      style={{
        minHeight: "100vh",
        background:
          "radial-gradient(circle at 20% 0%, rgba(70,95,120,0.18), transparent 34%), radial-gradient(circle at 92% 14%, rgba(182,93,49,0.10), transparent 26%), linear-gradient(180deg, #030507 0%, #050607 42%, #09080a 100%)",
        color: colors.text,
        fontFamily: siteFont,
      }}
    >
      <TopNav />

      <section
        style={{
          position: "relative",
          minHeight: "78vh",
          display: "flex",
          alignItems: "center",
          overflow: "hidden",
          borderBottom: `1px solid ${colors.border}`,
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: `
              linear-gradient(90deg, rgba(2,4,6,0.97) 0%, rgba(2,4,6,0.86) 36%, rgba(2,4,6,0.58) 68%, rgba(2,4,6,0.88) 100%),
              linear-gradient(180deg, rgba(2,4,6,0.10) 0%, rgba(2,4,6,0.48) 66%, rgba(2,4,6,0.98) 100%),
              url('${chapter.image}')
            `,
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "saturate(0.9) contrast(1.07)",
          }}
        />

        <div style={{ position: "absolute", right: "8%", top: "14%" }}>
          <Glyph src={glyphImages[chapter.glyph]} size={360} opacity={0.14} />
        </div>

        <Container>
          <div style={{ position: "relative", zIndex: 2, padding: "86px 0 96px", maxWidth: "940px" }}>
            <p
              style={{
                margin: "0 0 16px",
                color: colors.gold,
                textTransform: "uppercase",
                letterSpacing: "0.22em",
                fontSize: "12px",
              }}
            >
              PHYLAX story archive / {chapter.number}
            </p>

            <h1
              style={{
                margin: 0,
                fontSize: "clamp(52px, 8vw, 104px)",
                lineHeight: 0.92,
                letterSpacing: "-0.06em",
                fontWeight: 400,
                textShadow: "0 14px 44px rgba(0,0,0,0.62)",
              }}
            >
              {chapter.title}
            </h1>

            <p
              style={{
                margin: "18px 0 0",
                color: colors.gold,
                fontSize: "26px",
                lineHeight: 1.35,
              }}
            >
              {chapter.subtitle}
            </p>

            <p
              style={{
                margin: "26px 0 0",
                maxWidth: "780px",
                color: colors.textSoft,
                fontSize: "22px",
                lineHeight: 1.75,
              }}
            >
              {chapter.summary}
            </p>
          </div>
        </Container>
      </section>

      <section style={{ padding: "72px 0 32px" }}>
        <Container>
          <div
            className="chapter-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 0.72fr",
              gap: "22px",
              alignItems: "start",
            }}
          >
            <article
              style={{
                position: "relative",
                overflow: "hidden",
                border: `1px solid ${colors.border}`,
                borderRadius: "30px",
                padding: "36px",
                background:
                  "linear-gradient(180deg, rgba(14,18,22,0.88), rgba(7,8,10,0.96))",
                boxShadow: "0 28px 80px rgba(0,0,0,0.30)",
              }}
            >
              <div style={{ position: "absolute", right: "-50px", top: "-54px" }}>
                <Glyph src={glyphImages[chapter.glyph]} size={260} opacity={0.08} />
              </div>

              <div style={{ position: "relative", zIndex: 2 }}>
                <p
                  style={{
                    margin: "0 0 14px",
                    color: colors.gold,
                    textTransform: "uppercase",
                    letterSpacing: "0.20em",
                    fontSize: "12px",
                  }}
                >
                  Chapter thesis
                </p>

                <h2
                  style={{
                    margin: 0,
                    fontSize: "clamp(34px, 5vw, 58px)",
                    lineHeight: 0.98,
                    letterSpacing: "-0.045em",
                    fontWeight: 400,
                  }}
                >
                  {chapter.thesis}
                </h2>

                <blockquote
                  style={{
                    margin: "28px 0 0",
                    paddingLeft: "22px",
                    borderLeft: "1px solid rgba(210,181,139,0.5)",
                    color: colors.text,
                    fontSize: "24px",
                    lineHeight: 1.55,
                    fontStyle: "italic",
                  }}
                >
                  “{chapter.keyLine}”
                </blockquote>
              </div>
            </article>

            <aside
              style={{
                border: `1px solid ${colors.border}`,
                borderRadius: "30px",
                padding: "28px",
                background: "rgba(14,17,21,0.72)",
              }}
            >
              <p
                style={{
                  margin: "0 0 14px",
                  color: colors.gold,
                  textTransform: "uppercase",
                  letterSpacing: "0.18em",
                  fontSize: "12px",
                }}
              >
                Symbol system
              </p>

              <div style={{ display: "flex", justifyContent: "center", marginBottom: "18px" }}>
                <Glyph src={glyphImages[chapter.glyph]} size={170} opacity={0.28} />
              </div>

              {chapter.symbols.map((symbol) => (
                <p
                  key={symbol}
                  style={{
                    margin: "12px 0 0",
                    color: colors.textSoft,
                    fontSize: "15px",
                    lineHeight: 1.75,
                  }}
                >
                  {symbol}
                </p>
              ))}
            </aside>
          </div>
        </Container>
      </section>

      <section style={{ padding: "34px 0" }}>
        <Container>
          <div style={{ display: "grid", gap: "18px" }}>
            {chapter.detailSections.map((section) => (
              <article
                key={section.heading}
                style={{
                  border: `1px solid ${colors.border}`,
                  borderRadius: "28px",
                  padding: "32px",
                  background:
                    "linear-gradient(180deg, rgba(14,18,22,0.78), rgba(7,8,10,0.94))",
                }}
              >
                <h2
                  style={{
                    margin: 0,
                    color: colors.gold,
                    fontSize: "32px",
                    lineHeight: 1.05,
                    fontWeight: 400,
                  }}
                >
                  {section.heading}
                </h2>

                {section.body.map((paragraph) => (
                  <p
                    key={paragraph}
                    style={{
                      margin: "18px 0 0",
                      color: colors.textSoft,
                      fontSize: "18px",
                      lineHeight: 1.95,
                    }}
                  >
                    {paragraph}
                  </p>
                ))}
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section style={{ padding: "34px 0" }}>
        <Container>
          <p
            style={{
              margin: "0 0 16px",
              color: colors.gold,
              textTransform: "uppercase",
              letterSpacing: "0.22em",
              fontSize: "12px",
            }}
          >
            Source resonance
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: "16px",
            }}
          >
            {chapter.sourceResonance.map((source) => (
              <article
                key={source.title}
                style={{
                  border: `1px solid ${colors.border}`,
                  borderRadius: "24px",
                  padding: "24px",
                  background: "rgba(14,17,21,0.72)",
                }}
              >
                <h3
                  style={{
                    margin: 0,
                    color: colors.gold,
                    fontSize: "24px",
                    lineHeight: 1.1,
                    fontWeight: 400,
                  }}
                >
                  {source.title}
                </h3>

                <p
                  style={{
                    margin: "12px 0 0",
                    color: colors.textSoft,
                    fontSize: "15px",
                    lineHeight: 1.8,
                  }}
                >
                  {source.text}
                </p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section style={{ padding: "34px 0 100px" }}>
        <Container>
          <div
            className="chapter-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "18px",
            }}
          >
            <article
              style={{
                border: `1px solid ${colors.border}`,
                borderRadius: "26px",
                padding: "28px",
                background: "rgba(14,17,21,0.72)",
              }}
            >
              <h2 style={{ margin: 0, color: colors.gold, fontSize: "28px", fontWeight: 400 }}>
                Visual language
              </h2>

              <ul style={{ margin: "18px 0 0", paddingLeft: "20px", color: colors.textSoft, lineHeight: 1.9 }}>
                {chapter.visualLanguage.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>

            <article
              style={{
                border: `1px solid ${colors.border}`,
                borderRadius: "26px",
                padding: "28px",
                background: "rgba(14,17,21,0.72)",
              }}
            >
              <h2 style={{ margin: 0, color: colors.gold, fontSize: "28px", fontWeight: 400 }}>
                Sonic direction
              </h2>

              <ul style={{ margin: "18px 0 0", paddingLeft: "20px", color: colors.textSoft, lineHeight: 1.9 }}>
                {chapter.musicNotes.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          </div>

          <nav
            style={{
              marginTop: "36px",
              display: "flex",
              justifyContent: "space-between",
              gap: "16px",
              flexWrap: "wrap",
            }}
          >
            {previous ? (
              <Link
                href={`/phylax/story/${previous.slug}`}
                style={{
                  color: colors.text,
                  textDecoration: "none",
                  border: `1px solid ${colors.border}`,
                  borderRadius: "999px",
                  padding: "14px 18px",
                  background: "rgba(9,12,15,0.62)",
                }}
              >
                ← {previous.title}
              </Link>
            ) : (
              <span />
            )}

            <Link
              href="/phylax/story"
              style={{
                color: colors.textDim,
                textDecoration: "none",
                border: `1px solid ${colors.border}`,
                borderRadius: "999px",
                padding: "14px 18px",
                background: "rgba(9,12,15,0.42)",
              }}
            >
              Story archive
            </Link>

            {next ? (
              <Link
                href={`/phylax/story/${next.slug}`}
                style={{
                  color: colors.text,
                  textDecoration: "none",
                  border: `1px solid ${colors.border}`,
                  borderRadius: "999px",
                  padding: "14px 18px",
                  background: "rgba(9,12,15,0.62)",
                }}
              >
                {next.title} →
              </Link>
            ) : (
              <span />
            )}
          </nav>
        </Container>
      </section>

      <style>{`
        @media (max-width: 900px) {
          .chapter-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </main>
  );
}
