import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import type { ReactNode } from "react";
import { absoluteUrl } from "../../../lib/seo";
import {
  characters,
  getAdjacentCharacters,
  getCharacter,
} from "../character-data";

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
  return characters.map((character) => ({
    slug: character.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const character = getCharacter(slug);

  if (!character) {
    return {
      title: "PHYLAX Characters",
    };
  }

  const pageUrl = absoluteUrl(`/phylax/characters/${slug}`);
  return {
    title: `${character.name} | PHYLAX Characters`,
    description: character.summary,
    alternates: {
      canonical: pageUrl,
    },
    openGraph: {
      title: `${character.name} | PHYLAX Characters`,
      description: character.summary,
      url: pageUrl,
      siteName: "Parallax Hearts",
      images: [{ url: absoluteUrl("/images/phylax/atmosphere/black-mountain.png"), width: 1200, height: 630, alt: character.name }],
      locale: "en_US",
      type: "website",
    },
  };
}

function Container({ children }: { children: ReactNode }) {
  return (
    <div style={{ width: "min(1180px, calc(100% - 32px))", margin: "0 auto" }}>
      {children}
    </div>
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
                  color: label === "Characters" ? colors.gold : colors.textSoft,
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

function Eyebrow({ children }: { children: ReactNode }) {
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
  children: ReactNode;
}) {
  return (
    <article
      style={{
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

export default async function CharacterPage({ params }: PageProps) {
  const { slug } = await params;
  const character = getCharacter(slug);

  if (!character) {
    notFound();
  }

  const { previous, next } = getAdjacentCharacters(character.slug);

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
          minHeight: "84vh",
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
              linear-gradient(90deg, rgba(2,4,6,0.98) 0%, rgba(2,4,6,0.91) 34%, rgba(2,4,6,0.72) 62%, rgba(2,4,6,0.90) 100%),
              linear-gradient(180deg, rgba(2,4,6,0.10) 0%, rgba(2,4,6,0.52) 66%, rgba(2,4,6,0.98) 100%),
              url('${character.image}')
            `,
            backgroundSize: "cover",
            backgroundPosition: "top center",
            filter: "saturate(0.82) contrast(1.06)",
          }}
        />

        <Container>
          <div
            className="character-hero-grid"
            style={{
              position: "relative",
              zIndex: 2,
              display: "grid",
              gridTemplateColumns: "1fr 380px",
              gap: "34px",
              alignItems: "center",
              padding: "88px 0 98px",
            }}
          >
            <div>
              <Eyebrow>{character.faction}</Eyebrow>

              <h1
                style={{
                  margin: 0,
                  fontSize: "clamp(58px, 8vw, 112px)",
                  lineHeight: 0.9,
                  letterSpacing: "-0.065em",
                  fontWeight: 400,
                  textShadow: "0 14px 44px rgba(0,0,0,0.62)",
                }}
              >
                {character.name}
              </h1>

              <p
                style={{
                  margin: "18px 0 0",
                  color: colors.gold,
                  fontSize: "30px",
                  lineHeight: 1.25,
                }}
              >
                {character.title}
              </p>

              <p
                style={{
                  margin: "26px 0 0",
                  maxWidth: "800px",
                  color: colors.textSoft,
                  fontSize: "22px",
                  lineHeight: 1.75,
                }}
              >
                {character.summary}
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
                “{character.keyLine}”
              </blockquote>
            </div>

            <div
              style={{
                border: `1px solid ${colors.border}`,
                borderRadius: "28px",
                padding: "18px",
                background: "rgba(3,5,7,0.74)",
                boxShadow: "0 28px 80px rgba(0,0,0,0.36)",
              }}
            >
              <img
                src={character.image}
                alt={`${character.name} — ${character.title}`}
                style={{
                  width: "100%",
                  height: "560px",
                  objectFit: "contain",
                  display: "block",
                  borderRadius: "20px",
                  background: "#050607",
                }}
              />
            </div>
          </div>
        </Container>
      </section>

      <section style={{ padding: "72px 0 32px" }}>
        <Container>
          <div
            className="character-detail-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
              gap: "18px",
            }}
          >
            <InfoPanel title="Role">
              <p>{character.role}</p>
            </InfoPanel>

            <InfoPanel title="Symbolic Function">
              <p>{character.symbolicFunction}</p>
            </InfoPanel>

            <InfoPanel title="Emotional Tone">
              <p>{character.emotionalTone}</p>
            </InfoPanel>
          </div>
        </Container>
      </section>

      <section style={{ padding: "34px 0" }}>
        <Container>
          <div
            className="character-detail-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
              gap: "18px",
            }}
          >
            <InfoPanel title="Original Office">
              <p>{character.origin}</p>
            </InfoPanel>

            <InfoPanel title="Pre-Breach Psychology">
              <p>{character.preBreachPsychology}</p>
            </InfoPanel>

            <InfoPanel title="The Wound">
              <p>{character.wound}</p>
            </InfoPanel>

            <InfoPanel title="Temptation">
              <p>{character.temptation}</p>
            </InfoPanel>

            <InfoPanel title="Corrupted Gift">
              <p>{character.corruptedGift}</p>
            </InfoPanel>

            <InfoPanel title="Relationship to Humanity">
              <p>{character.relationshipToHumanity}</p>
            </InfoPanel>

            <InfoPanel title="Relationship to the Breach">
              <p>{character.relationshipToTheBreach}</p>
            </InfoPanel>

            <InfoPanel title="Tragedy">
              <p>{character.tragedy}</p>
            </InfoPanel>
          </div>
        </Container>
      </section>

      <section style={{ padding: "34px 0" }}>
        <Container>
          <div
            style={{
              border: `1px solid ${colors.border}`,
              borderRadius: "30px",
              padding: "34px",
              background:
                "linear-gradient(180deg, rgba(14,18,22,0.86), rgba(7,8,10,0.96))",
              boxShadow: "0 28px 80px rgba(0,0,0,0.26)",
            }}
          >
            <Eyebrow>Character arc</Eyebrow>

            <h2
              style={{
                margin: 0,
                fontSize: "clamp(34px, 5vw, 58px)",
                lineHeight: 0.98,
                letterSpacing: "-0.045em",
                fontWeight: 400,
              }}
            >
              {character.arc}
            </h2>

            <p
              style={{
                margin: "22px 0 0",
                color: colors.textSoft,
                fontSize: "18px",
                lineHeight: 1.9,
                maxWidth: "900px",
              }}
            >
              {character.finalConsequence}
            </p>
          </div>
        </Container>
      </section>

      <section style={{ padding: "34px 0" }}>
        <Container>
          <div style={{ display: "grid", gap: "18px" }}>
            {character.pageSections.map((section) => (
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
          <div
            className="character-detail-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
              gap: "18px",
            }}
          >
            <ListPanel title="Visual Identity" items={character.visualIdentity} />
            <ListPanel title="Symbol Use" items={character.symbolUse} />
            <ListPanel title="Connected Lore" items={character.connectedLore} />

            <InfoPanel title="Voice / Lyrical Use">
              <p>{character.voice}</p>
              <p style={{ marginTop: "14px" }}>{character.lyricalUse}</p>
            </InfoPanel>
          </div>
        </Container>
      </section>

      <section style={{ padding: "34px 0" }}>
        <Container>
          <Eyebrow>Character relationships</Eyebrow>

          <div
            className="character-detail-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
              gap: "18px",
            }}
          >
            {character.relationships.map((relationship) => (
              <InfoPanel key={relationship.name} title={relationship.name}>
                <p>{relationship.dynamic}</p>
              </InfoPanel>
            ))}
          </div>
        </Container>
      </section>

      <section style={{ padding: "34px 0 104px" }}>
        <Container>
          <InfoPanel title="Hidden Source Note">
            <p>{character.sourceNote}</p>
          </InfoPanel>

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
                href={`/phylax/characters/${previous.slug}`}
                style={{
                  color: colors.text,
                  textDecoration: "none",
                  border: `1px solid ${colors.border}`,
                  borderRadius: "999px",
                  padding: "14px 18px",
                  background: "rgba(9,12,15,0.62)",
                }}
              >
                ← {previous.name}
              </Link>
            ) : (
              <span />
            )}

            <Link
              href="/phylax/characters"
              style={{
                color: colors.textDim,
                textDecoration: "none",
                border: `1px solid ${colors.border}`,
                borderRadius: "999px",
                padding: "14px 18px",
                background: "rgba(9,12,15,0.42)",
              }}
            >
              Character archive
            </Link>

            {next ? (
              <Link
                href={`/phylax/characters/${next.slug}`}
                style={{
                  color: colors.text,
                  textDecoration: "none",
                  border: `1px solid ${colors.border}`,
                  borderRadius: "999px",
                  padding: "14px 18px",
                  background: "rgba(9,12,15,0.62)",
                }}
              >
                {next.name} →
              </Link>
            ) : (
              <span />
            )}
          </nav>
        </Container>
      </section>

      <style>{`
        @media (max-width: 980px) {
          .character-hero-grid,
          .character-detail-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </main>
  );
}
