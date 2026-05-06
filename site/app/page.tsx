import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Parallax Hearts | What the Town Keeps + PHYLAX",
  description:
    "Parallax Hearts is the creative home for What the Town Keeps and PHYLAX: The First Breach — cinematic music, story worlds, lore, visuals, and album archives.",
};

const siteFont = `Georgia, "Times New Roman", Times, serif`;

const colors = {
  text: "#f3eee7",
  textSoft: "rgba(243, 238, 231, 0.78)",
  textDim: "rgba(243, 238, 231, 0.58)",
  gold: "#d2b58b",
  border: "rgba(243, 238, 231, 0.14)",
  phylaxBlue: "#8da0b2",
  ember: "#b65d31",
};

function Container({ children }: { children: React.ReactNode }) {
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
    ["What the Town Keeps", "/project"],
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
        background: "rgba(5,5,7,0.76)",
        borderBottom: `1px solid ${colors.border}`,
      }}
    >
      <Container>
        <header
          style={{
            minHeight: "72px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "20px",
            flexWrap: "wrap",
            padding: "16px 0",
          }}
        >
          <Link
            href="/"
            style={{
              color: colors.text,
              textDecoration: "none",
              fontSize: "clamp(24px, 4vw, 34px)",
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
                  color: label === "PHYLAX" ? colors.gold : colors.textSoft,
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
  accent = "warm",
}: {
  eyebrow: string;
  title: string;
  subtitle: string;
  body: string;
  image: string;
  primaryHref: string;
  primaryLabel: string;
  secondaryHref: string;
  secondaryLabel: string;
  accent?: "warm" | "cold";
}) {
  const isCold = accent === "cold";

  return (
    <section
      className="home-project-panel"
      style={{
        position: "relative",
        minHeight: "78vh",
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
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `
            linear-gradient(180deg, rgba(3,5,7,0.02), rgba(3,5,7,0.28) 42%, rgba(3,5,7,0.94) 100%),
            linear-gradient(90deg, rgba(3,5,7,0.76), rgba(3,5,7,0.22), rgba(3,5,7,0.70)),
            url('${image}')
          `,
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: isCold
            ? "saturate(0.88) contrast(1.08)"
            : "saturate(0.82) contrast(1.04)",
        }}
      />

      <div
        style={{
          position: "absolute",
          inset: 0,
          background: isCold
            ? "radial-gradient(circle at 78% 18%, rgba(141,160,178,0.18), transparent 28%), radial-gradient(circle at 42% 82%, rgba(182,93,49,0.12), transparent 32%)"
            : "radial-gradient(circle at 28% 20%, rgba(210,181,139,0.16), transparent 30%), radial-gradient(circle at 78% 80%, rgba(83,94,116,0.16), transparent 32%)",
        }}
      />

      <div
        style={{
          position: "relative",
          zIndex: 2,
          padding: "clamp(26px, 5vw, 46px)",
        }}
      >
        <p
          style={{
            margin: "0 0 14px",
            color: isCold ? colors.phylaxBlue : colors.gold,
            textTransform: "uppercase",
            letterSpacing: "0.22em",
            fontSize: "12px",
          }}
        >
          {eyebrow}
        </p>

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
            color: isCold ? colors.gold : colors.text,
            fontSize: "23px",
            lineHeight: 1.35,
          }}
        >
          {subtitle}
        </p>

        <p
          style={{
            margin: "18px 0 0",
            maxWidth: "620px",
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
          <Link
            href={primaryHref}
            style={{
              color: "#08090b",
              background: isCold ? colors.gold : colors.text,
              border: `1px solid ${isCold ? colors.gold : colors.text}`,
              borderRadius: "999px",
              padding: "13px 18px",
              textDecoration: "none",
              fontSize: "15px",
              letterSpacing: "0.04em",
            }}
          >
            {primaryLabel}
          </Link>

          <Link
            href={secondaryHref}
            style={{
              color: colors.text,
              background: "rgba(5,7,10,0.58)",
              border: `1px solid ${colors.border}`,
              borderRadius: "999px",
              padding: "13px 18px",
              textDecoration: "none",
              fontSize: "15px",
              letterSpacing: "0.04em",
            }}
          >
            {secondaryLabel}
          </Link>
        </div>
      </div>
    </section>
  );
}

export default function HomePage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background:
          "radial-gradient(circle at 18% 0%, rgba(110,78,146,0.15), transparent 32%), radial-gradient(circle at 82% 10%, rgba(70,95,120,0.18), transparent 30%), linear-gradient(180deg, #050507 0%, #09090f 42%, #0b090a 100%)",
        color: colors.text,
        fontFamily: siteFont,
      }}
    >
      <TopNav />

      <section style={{ padding: "54px 0 28px" }}>
        <Container>
          <div
            style={{
              textAlign: "center",
              maxWidth: "900px",
              margin: "0 auto 34px",
            }}
          >
            <p
              style={{
                margin: "0 0 14px",
                color: colors.gold,
                textTransform: "uppercase",
                letterSpacing: "0.22em",
                fontSize: "12px",
              }}
            >
              Cinematic music / story worlds / visual archives
            </p>

            <h1
              style={{
                margin: 0,
                fontSize: "clamp(46px, 8vw, 92px)",
                lineHeight: 0.92,
                letterSpacing: "-0.06em",
                fontWeight: 400,
              }}
            >
              Two worlds under one signal.
            </h1>

            <p
              style={{
                margin: "22px auto 0",
                maxWidth: "760px",
                color: colors.textSoft,
                fontSize: "20px",
                lineHeight: 1.75,
              }}
            >
              Parallax Hearts is the creative home for intimate small-town
              mystery, heavy cosmic lore, cinematic visuals, and album worlds
              that unfold like recovered archives.
            </p>
          </div>

          <div
            className="home-split-hero"
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "22px",
            }}
          >
            <ProjectPanel
              eyebrow="Album world one"
              title="What the Town Keeps"
              subtitle="Rain. Rails. Memory. Silence."
              body="A grounded, literary, emotionally restrained album and visual story world built around a small town, hidden weight, human distance, and the things people leave unsaid."
              image="/images/hero.jpg"
              primaryHref="/project"
              primaryLabel="Enter the town"
              secondaryHref="/music"
              secondaryLabel="Listen / music"
              accent="warm"
            />

            <ProjectPanel
              eyebrow="Album world two"
              title="PHYLAX: The First Breach"
              subtitle="Watchers. Oath. Descent. Consequence."
              body="A darker heavy shoegaze/darkgaze album world built from black stone, storm light, forbidden knowledge, symbolic lore, hidden marks, and the first collapse of sacred distance."
              image="/images/phylax/atmosphere/upper-watch-hero.png"
              primaryHref="/phylax"
              primaryLabel="Enter PHYLAX"
              secondaryHref="/phylax/lore"
              secondaryLabel="Open the lore"
              accent="cold"
            />
          </div>
        </Container>
      </section>

      <section style={{ padding: "38px 0 86px" }}>
        <Container>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: "16px",
            }}
          >
            {[
              {
                title: "Music",
                text: "Songs, album links, project notes, and listening paths.",
                href: "/music",
              },
              {
                title: "PHYLAX Lore",
                text: "The archive of breach, oath, descent, gifts, binding, and return.",
                href: "/phylax/lore",
              },
              {
                title: "Characters",
                text: "The Breach Court and the figures carrying the album-world mythology.",
                href: "/phylax/characters",
              },
              {
                title: "Support",
                text: "Support the project directly through Ko-fi.",
                href: "https://ko-fi.com/parallaxhearts",
              },
            ].map((card) => (
              <Link
                key={card.title}
                href={card.href}
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
        </Container>
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
