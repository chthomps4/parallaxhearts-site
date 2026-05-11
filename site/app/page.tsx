import Link from "next/link";
import type { Metadata } from "next";
import ArchiveNote from "./components/ArchiveNote";
import SiteHeader from "./components/SiteHeader";

export const metadata: Metadata = {
  title: "Parallax Hearts | What the Town Keeps",
  description:
    "Parallax Hearts is the music project behind What the Town Keeps — a cinematic album, visual novel archive, and rainy small-town story world set in Vallen.",
  keywords: [
    "Parallax Hearts",
    "What the Town Keeps",
    "Vallen",
    "cinematic music project",
    "independent music",
    "visual novel archive",
    "graphic novel music project",
    "literary alternative music",
    "Field Notes",
    "Forbidden Knowledge",
  ],
  alternates: {
    canonical: "https://www.parallaxhearts.org/",
  },
  openGraph: {
    title: "Parallax Hearts | What the Town Keeps",
    description:
      "Songs, story, Field Notes, and the visual novel archive of What the Town Keeps — set in the rainy town of Vallen.",
    url: "https://www.parallaxhearts.org/",
    siteName: "Parallax Hearts",
    images: [
      {
        url: "/images/hero.jpg",
        width: 1200,
        height: 630,
        alt: "Parallax Hearts — What the Town Keeps",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Parallax Hearts | What the Town Keeps",
    description:
      "A cinematic music and story-world archive set in the rainy town of Vallen.",
    images: ["/images/hero.jpg"],
  },
};

const colors = {
  text: "#f3eee7",
  textSoft: "rgba(243, 238, 231, 0.78)",
  gold: "#d2b58b",
  border: "rgba(243, 238, 231, 0.14)",
};

function ProjectPanel({
  eyebrow,
  title,
  subtitle,
  body,
  image,
  primaryHref,
  primaryLabel,
  secondaryHref,
  secondaryLabel,
}: {
  eyebrow: string;
  title: string;
  subtitle: string;
  body: React.ReactNode;
  image: string;
  primaryHref: string;
  primaryLabel: string;
  secondaryHref: string;
  secondaryLabel: string;
}) {
  return (
    <section
      className="home-project-panel"
      style={{
        position: "relative",
        minHeight: "74vh",
        overflow: "hidden",
        display: "flex",
        alignItems: "flex-end",
        border: `1px solid ${colors.border}`,
        borderRadius: "34px",
        background: "#050607",
        boxShadow: "0 30px 90px rgba(0,0,0,0.38)",
      }}
    >
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `
            linear-gradient(180deg, rgba(3,5,7,0.02), rgba(3,5,7,0.30) 42%, rgba(3,5,7,0.96) 100%),
            linear-gradient(90deg, rgba(3,5,7,0.78), rgba(3,5,7,0.28), rgba(3,5,7,0.72)),
            url('${image}')
          `,
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "saturate(0.78) contrast(1.06)",
        }}
      />

      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(circle at 28% 20%, rgba(210,181,139,0.18), transparent 30%), radial-gradient(circle at 82% 80%, rgba(83,94,116,0.16), transparent 32%)",
        }}
      />

      <div
        style={{
          position: "relative",
          zIndex: 2,
          padding: "clamp(26px, 5vw, 46px)",
        }}
      >
        <p className="kicker">{eyebrow}</p>

        <h2
          style={{
            margin: 0,
            color: colors.text,
            fontSize: "clamp(42px, 7vw, 78px)",
            lineHeight: 0.92,
            letterSpacing: "-0.06em",
            fontWeight: 400,
            textShadow: "0 14px 44px rgba(0,0,0,0.58)",
          }}
        >
          {title}
        </h2>

        <p
          style={{
            margin: "20px 0 0",
            color: colors.text,
            fontSize: "23px",
            lineHeight: 1.35,
          }}
        >
          {subtitle}
        </p>

        <p
          style={{
            margin: "18px 0 0",
            maxWidth: "650px",
            color: colors.textSoft,
            fontSize: "17px",
            lineHeight: 1.85,
          }}
        >
          {body}
        </p>

        <div
          style={{
            marginTop: "28px",
            display: "flex",
            gap: "12px",
            flexWrap: "wrap",
          }}
        >
          <Link href={primaryHref} className="primary-button">
            {primaryLabel}
          </Link>

          <Link href={secondaryHref} className="secondary-button">
            {secondaryLabel}
          </Link>
        </div>
      </div>
    </section>
  );
}

export default function HomePage() {
  return (
    <main className="site-shell">
      <SiteHeader active="Home" />

      <section style={{ padding: "54px 0 28px" }}>
        <div className="site-container">
          <div
            style={{
              textAlign: "center",
              maxWidth: "940px",
              margin: "0 auto 34px",
            }}
          >
            <p className="kicker">Parallax Hearts / What the Town Keeps</p>

            <h1
              style={{
                margin: 0,
                fontSize: "clamp(46px, 8vw, 92px)",
                lineHeight: 0.92,
                letterSpacing: "-0.06em",
                fontWeight: 400,
              }}
            >
              Songs, story, and the town that holds them.
            </h1>

            <p
              style={{
                margin: "22px auto 0",
                maxWidth: "780px",
                color: colors.textSoft,
                fontSize: "20px",
                lineHeight: 1.75,
              }}
            >
              Parallax Hearts is the music project behind <em>What the Town Keeps</em> —
              a cinematic album, story world, and visual novel archive set in
              Vallen, a rainy town of rail lines, old rooms, quiet distance, and
              things people learn not to say.
            </p>
          </div>

          <div
            className="home-split-hero"
            style={{
              display: "grid",
              gridTemplateColumns: "1.08fr 0.92fr",
              gap: "22px",
            }}
          >
            <ProjectPanel
              eyebrow="Main world"
              title="What the Town Keeps"
              subtitle="Rain. Rails. Memory. Silence."
              body={
                <>
                  The album and story world built around Vallen
                  <ArchiveNote
                    title="Archive Note: Vallen"
                    evidence="Creative name / interpretive resonance"
                  >
                    Vallen is the fictional town at the center of What the Town
                    Keeps. The name suggests valley, falling, low ground, and a
                    place where weather and memory collect. This is a
                    project-specific name, not a historical place claim.
                  </ArchiveNote>
                  , a small town where the music, prose, and visual novel all
                  move through the same weather.
                </>
              }
              image="/images/hero.jpg"
              primaryHref="/graphic-novel/chapter-one/page-001"
              primaryLabel="Start the Visual Novel"
              secondaryHref="/music"
              secondaryLabel="Listen on SoundCloud"
            />

            <ProjectPanel
              eyebrow="Research lane"
              title="Field Notes"
              subtitle="Wonder deserves structure."
              body="A separate source-trail lane for the Forbidden Knowledge work: ancient knowledge, lost etymology, evidence labels, and the long-form Handbook method."
              image="/images/world.jpg"
              primaryHref="/field-notes"
              primaryLabel="Open Field Notes"
              secondaryHref="/forbidden-knowledge"
              secondaryLabel="Free Intro Course"
            />
          </div>
        </div>
      </section>

      <section style={{ padding: "38px 0 86px" }}>
        <div className="site-container">
          <p className="kicker">Choose a door</p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: "16px",
            }}
          >
            {[
              {
                title: "Read",
                text: "Begin Chapter One — Ballast, the built-in visual novel archive.",
                href: "/graphic-novel/chapter-one/page-001",
              },
              {
                title: "Listen",
                text: "Hear the album and follow the music side of Parallax Hearts.",
                href: "/music",
              },
              {
                title: "Story",
                text: "Enter the larger story world of Vallen and What the Town Keeps.",
                href: "/project",
              },
              {
                title: "Study",
                text: "Open Field Notes, the separate source-trail research lane.",
                href: "/field-notes",
              },
              {
                title: "Services",
                text: "Custom websites for artists, creators, small businesses, and landing pages.",
                href: "/websites",
              },
              {
                title: "Support",
                text: "Support the music, story, visual archive, and ongoing creative work.",
                href: "/support",
              },
            ].map((card) => (
              <Link
                key={card.title}
                href={card.href}
                className="link-card"
                style={{
                  textDecoration: "none",
                  color: colors.text,
                  border: `1px solid ${colors.border}`,
                  borderRadius: "24px",
                  padding: "24px",
                  background:
                    "linear-gradient(180deg, rgba(255,255,255,0.045), rgba(255,255,255,0.018))",
                  boxShadow: "0 20px 60px rgba(0,0,0,0.24)",
                }}
              >
                <h3
                  style={{
                    margin: 0,
                    fontSize: "30px",
                    lineHeight: 1,
                    fontWeight: 400,
                    letterSpacing: "-0.035em",
                  }}
                >
                  {card.title}
                </h3>

                <p
                  style={{
                    margin: "12px 0 0",
                    color: colors.textSoft,
                    fontSize: "15px",
                    lineHeight: 1.75,
                  }}
                >
                  {card.text}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 980px) {
          .home-split-hero {
            grid-template-columns: 1fr !important;
          }

          .home-project-panel {
            min-height: 68vh !important;
          }
        }
      `}</style>
    </main>
  );
}
