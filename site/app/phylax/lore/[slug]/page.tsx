import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { absoluteUrl } from "../../../lib/seo";
import {
  getAdjacentLoreChapters,
  getLoreChapter,
  glyphImages,
  loreChapters,
} from "../lore-data";

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
  return loreChapters.map((chapter) => ({
    slug: chapter.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const chapter = getLoreChapter(slug);

  if (!chapter) {
    return {
      title: "PHYLAX Lore Archive",
    };
  }

  const pageUrl = absoluteUrl(`/phylax/lore/${slug}`);
  return {
    title: `${chapter.title} | PHYLAX Lore Archive`,
    description: chapter.summary,
    alternates: {
      canonical: pageUrl,
    },
    openGraph: {
      title: `${chapter.title} | PHYLAX Lore Archive`,
      description: chapter.summary,
      url: pageUrl,
      siteName: "Parallax Hearts",
      images: [{ url: absoluteUrl("/images/phylax/atmosphere/black-mountain.png"), width: 1200, height: 630, alt: chapter.title }],
      locale: "en_US",
      type: "website",
    },
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
    ["Lore", "/phylax/lore"],
    ["Characters", "/phylax/characters"],
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
                  color: label === "Lore" ? colors.gold : colors.textSoft,
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

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p
      style={{
        margin: "0 0 14px",
        color: colors.gold,
        textTransform: "uppercase",
        letterSpacing: "0.2em",
        fontSize: "12px",
      }}
    >
      {children}
    </p>
  );
}

function InfoPanel({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <article
      style={{
        position: "relative",
        overflow: "hidden",
        border: `1px solid ${colors.border}`,
        borderRadius: "26px",
        padding: "28px",
        background:
          "linear-gradient(180deg, rgba(14,18,22,0.78), rgba(7,8,10,0.94))",
        boxShadow: "0 22px 70px rgba(0,0,0,0.22)",
      }}
    >
      <h2
        style={{
          margin: 0,
          color: colors.gold,
          fontSize: "28px",
          lineHeight: 1.05,
          fontWeight: 400,
        }}
      >
        {title}
      </h2>

      <div
        style={{
          marginTop: "16px",
          color: colors.textSoft,
          fontSize: "17px",
          lineHeight: 1.9,
        }}
      >
        {children}
      </div>
    </article>
  );
}

function ListPanel({
  title,
  items,
}: {
  title: string;
  items: string[];
}) {
  return (
    <InfoPanel title={title}>
      <ul style={{ margin: 0, paddingLeft: "20px" }}>
        {items.map((item) => (
          <li key={item} style={{ marginBottom: "10px" }}>
            {item}
          </li>
        ))}
      </ul>
    </InfoPanel>
  );
}

function LinkPanel({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  return (
    <InfoPanel title={title}>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
        {links.map((link) => (
          <Link
            key={`${link.label}-${link.href}`}
            href={link.href}
            style={{
              color: colors.text,
              textDecoration: "none",
              border: `1px solid ${colors.border}`,
              borderRadius: "999px",
              padding: "10px 14px",
              background: "rgba(9,12,15,0.62)",
              fontSize: "14px",
            }}
          >
            {link.label}
          </Link>
        ))}
      </div>
    </InfoPanel>
  );
}

export default async function LoreChapterPage({ params }: PageProps) {
  const { slug } = await params;
  const chapter = getLoreChapter(slug);

  if (!chapter) {
    notFound();
  }

  const { previous, next } = getAdjacentLoreChapters(chapter.slug);

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
          minHeight: "80vh",
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
              linear-gradient(90deg, rgba(2,4,6,0.98) 0%, rgba(2,4,6,0.88) 34%, rgba(2,4,6,0.60) 66%, rgba(2,4,6,0.90) 100%),
              linear-gradient(180deg, rgba(2,4,6,0.10) 0%, rgba(2,4,6,0.48) 66%, rgba(2,4,6,0.98) 100%),
              url('${chapter.image}')
            `,
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "saturate(0.88) contrast(1.08)",
          }}
        />

        <div style={{ position: "absolute", right: "8%", top: "14%" }}>
          <Glyph src={glyphImages[chapter.glyph]} size={360} opacity={0.14} />
        </div>

        <Container>
          <div
            style={{
              position: "relative",
              zIndex: 2,
              padding: "88px 0 98px",
              maxWidth: "940px",
            }}
          >
            <Eyebrow>PHYLAX lore archive / {chapter.number}</Eyebrow>

            <h1
              style={{
                margin: 0,
                fontSize: "clamp(54px, 8vw, 108px)",
                lineHeight: 0.91,
                letterSpacing: "-0.065em",
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
                fontSize: "28px",
                lineHeight: 1.3,
              }}
            >
              {chapter.subtitle}
            </p>

            <p
              style={{
                margin: "26px 0 0",
                maxWidth: "820px",
                color: colors.textSoft,
                fontSize: "22px",
                lineHeight: 1.75,
              }}
            >
              {chapter.summary}
            </p>

            <blockquote
              style={{
                margin: "30px 0 0",
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
        </Container>
      </section>

      <section style={{ padding: "72px 0 32px" }}>
        <Container>
          <div
            className="lore-grid"
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
                <Eyebrow>Chapter thesis</Eyebrow>

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

                <p
                  style={{
                    margin: "24px 0 0",
                    color: colors.textSoft,
                    fontSize: "18px",
                    lineHeight: 1.9,
                  }}
                >
                  {chapter.coreMeaning}
                </p>
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
              <Eyebrow>Primary mark</Eyebrow>

              <div style={{ display: "flex", justifyContent: "center", marginBottom: "18px" }}>
                <Glyph src={glyphImages[chapter.glyph]} size={180} opacity={0.3} />
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
          <div
            className="lore-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
              gap: "18px",
            }}
          >
            <InfoPanel title="Narrative Function">
              <p>{chapter.narrativeFunction}</p>
            </InfoPanel>

            <InfoPanel title="Emotional Pressure">
              <p>{chapter.emotionalPressure}</p>
            </InfoPanel>

            <InfoPanel title="World Change">
              <p>{chapter.worldChange}</p>
            </InfoPanel>

            <InfoPanel title="Hidden Archive Fragment">
              <p style={{ fontStyle: "italic" }}>{chapter.hiddenArchiveFragment}</p>
            </InfoPanel>
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
          <Eyebrow>Character Impact</Eyebrow>

          <div
            className="lore-grid-three"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
              gap: "18px",
            }}
          >
            {chapter.characterImpact.map((item) => (
              <InfoPanel key={item.name} title={item.name}>
                <p>{item.impact}</p>
                {item.href && (
                  <Link
                    href={item.href}
                    style={{
                      display: "inline-flex",
                      marginTop: "14px",
                      color: colors.gold,
                      textDecoration: "none",
                      borderBottom: "1px solid rgba(210,181,139,0.38)",
                    }}
                  >
                    Open character file
                  </Link>
                )}
              </InfoPanel>
            ))}
          </div>
        </Container>
      </section>

      <section style={{ padding: "34px 0" }}>
        <Container>
          <div
            className="lore-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
              gap: "18px",
            }}
          >
            <InfoPanel title="Symbol Meaning">
              <div style={{ display: "grid", gap: "14px" }}>
                {chapter.symbolMeaning.map((item) => (
                  <div key={item.symbol}>
                    <strong style={{ color: colors.gold, fontWeight: 400 }}>
                      {item.symbol}
                    </strong>
                    <p style={{ margin: "6px 0 0" }}>{item.meaning}</p>
                  </div>
                ))}
              </div>
            </InfoPanel>

            <InfoPanel title="Website Easter Egg">
              <p>{chapter.easterEggIdea}</p>
            </InfoPanel>
          </div>
        </Container>
      </section>

      <section style={{ padding: "34px 0" }}>
        <Container>
          <div
            className="lore-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
              gap: "18px",
            }}
          >
            <ListPanel title="Visual Language" items={chapter.visualLanguage} />
            <ListPanel title="Video Direction" items={chapter.videoDirection} />
            <ListPanel title="Sonic Direction" items={chapter.musicNotes} />
            <ListPanel title="Public Symbol Notes" items={chapter.symbols} />
          </div>
        </Container>
      </section>

      <section style={{ padding: "34px 0 104px" }}>
        <Container>
          <div
            className="lore-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
              gap: "18px",
            }}
          >
            <LinkPanel title="Connected Characters" links={chapter.connectedCharacters} />
            <LinkPanel title="Connected Songs / Lore Threads" links={chapter.connectedSongs} />
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
                href={`/phylax/lore/${previous.slug}`}
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
              href="/phylax/lore"
              style={{
                color: colors.textDim,
                textDecoration: "none",
                border: `1px solid ${colors.border}`,
                borderRadius: "999px",
                padding: "14px 18px",
                background: "rgba(9,12,15,0.42)",
              }}
            >
              Lore archive
            </Link>

            {next ? (
              <Link
                href={`/phylax/lore/${next.slug}`}
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
        @media (max-width: 980px) {
          .lore-grid,
          .lore-grid-three {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </main>
  );
}
