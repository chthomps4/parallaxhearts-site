import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { absoluteUrl } from "../../lib/seo";
import { characters } from "./character-data";

const pageUrl = absoluteUrl("/phylax/characters");

export const metadata: Metadata = {
  title: "Characters | PHYLAX: The First Breach",
  description:
    "Meet the figures of oath, fracture, and transmission in PHYLAX: The First Breach — a dark cinematic side-world by Parallax Hearts.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Characters | PHYLAX: The First Breach",
    description:
      "Meet the figures of oath, fracture, and transmission in PHYLAX: The First Breach — a dark cinematic side-world by Parallax Hearts.",
    url: pageUrl,
    siteName: "Parallax Hearts",
    images: [
      {
        url: absoluteUrl("/images/phylax/atmosphere/black-mountain.png"),
        width: 1200,
        height: 630,
        alt: "PHYLAX Characters",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

const siteFont = `Georgia, "Times New Roman", Times, serif`;

const colors = {
  bg: "#030507",
  panel: "rgba(11, 14, 18, 0.84)",
  border: "rgba(196, 175, 145, 0.14)",
  text: "#f1ede6",
  textSoft: "rgba(241, 237, 230, 0.78)",
  textDim: "rgba(241, 237, 230, 0.56)",
  gold: "#d2b58b",
};

export default function PhylaxCharactersIndex() {
  return (
    <main
      style={{
        background: colors.bg,
        color: colors.text,
        fontFamily: siteFont,
        minHeight: "100vh",
      }}
    >
      <section
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          padding: "80px 20px 60px",
        }}
      >
        <p
          style={{
            fontSize: "0.72rem",
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            color: colors.gold,
            marginBottom: 12,
          }}
        >
          PHYLAX / Characters
        </p>
        <h1
          style={{
            fontSize: "clamp(1.6rem, 3.8vw, 2.6rem)",
            lineHeight: 1.2,
            fontWeight: 400,
            marginBottom: 16,
          }}
        >
          Figures of oath, fracture, and transmission.
        </h1>
        <p
          style={{
            fontSize: "1.05rem",
            lineHeight: 1.75,
            color: colors.textSoft,
            maxWidth: 640,
            marginBottom: 48,
          }}
        >
          Each figure in PHYLAX carries a title, a wound, a corrupted gift, and
          a consequence that echoes through the breach world.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
            gap: 28,
          }}
        >
          {characters.map((character) => (
            <Link
              key={character.slug}
              href={`/phylax/characters/${character.slug}`}
              style={{
                display: "block",
                background: colors.panel,
                border: `1px solid ${colors.border}`,
                borderRadius: 6,
                padding: 24,
                textDecoration: "none",
                color: colors.text,
                transition: "border-color 0.2s",
              }}
            >
              <div
                style={{
                  width: 80,
                  height: 80,
                  borderRadius: "50%",
                  overflow: "hidden",
                  marginBottom: 16,
                  border: `1px solid ${colors.border}`,
                  position: "relative",
                }}
              >
                <Image
                  src={character.image}
                  alt={`${character.name} — ${character.title}`}
                  fill
                  style={{ objectFit: "cover" }}
                  sizes="80px"
                />
              </div>
              <h2
                style={{
                  fontSize: "1.15rem",
                  fontWeight: 400,
                  marginBottom: 4,
                }}
              >
                {character.name}
              </h2>
              <p
                style={{
                  fontSize: "0.82rem",
                  color: colors.gold,
                  letterSpacing: "0.06em",
                  marginBottom: 10,
                }}
              >
                {character.title}
              </p>
              <p
                style={{
                  fontSize: "0.92rem",
                  lineHeight: 1.6,
                  color: colors.textDim,
                }}
              >
                {character.summary.length > 120
                  ? character.summary.slice(0, 120) + "…"
                  : character.summary}
              </p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
