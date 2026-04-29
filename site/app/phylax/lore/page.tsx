import Link from "next/link";
import type { CSSProperties, ReactNode } from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "PHYLAX Lore Archive | The First Breach",
  description:
    "The lore archive for PHYLAX: The First Breach — a dark cinematic album world about watching, longing, oath, descent, forbidden knowledge, consequence, and memory.",
};

const siteFont = `Georgia, "Times New Roman", Times, serif`;

const colors = {
  bg: "#030507",
  panel: "rgba(11, 14, 18, 0.84)",
  panelSoft: "rgba(16, 20, 25, 0.72)",
  border: "rgba(196, 175, 145, 0.14)",
  text: "#f1ede6",
  textSoft: "rgba(241, 237, 230, 0.78)",
  textDim: "rgba(241, 237, 230, 0.56)",
  gold: "#d2b58b",
  ember: "#b65d31",
  blue: "#8da0b2",
};

type GlyphName = "record" | "hidden" | "chain" | "unsealed";

const glyphImages: Record<GlyphName, string> = {
  record: "/images/phylax/symbols/record.png",
  hidden: "/images/phylax/symbols/hidden.png",
  chain: "/images/phylax/symbols/chain.png",
  unsealed: "/images/phylax/symbols/unsealed.png",
};

const storyMovements = [
  {
    number: "I",
    title: "The Upper Watch",
    glyph: "hidden" as GlyphName,
    text:
      "Before the breach, there is order. The watchers stand above the human world as offices of attention: measuring, recording, guarding distance, and preserving the architecture of the sky.",
  },
  {
    number: "II",
    title: "The Warm Below",
    glyph: "hidden" as GlyphName,
    text:
      "Human life becomes unbearable to merely observe. Firelight, marriage, grief, birth, work, breath, and mortality gather into a warmth the watchers cannot enter.",
  },
  {
    number: "III",
    title: "The Glass Below",
    glyph: "record" as GlyphName,
    text:
      "The instrument of sacred distance becomes private hunger. What was made for witness becomes fixation. The watcher begins to return to the image even when no command requires it.",
  },
  {
    number: "IV",
    title: "The First Whisper",
    glyph: "hidden" as GlyphName,
    text:
      "Nadir senses the threshold first. He does not force the descent. He gives the longing a sentence, and the sentence makes the impossible feel reasonable.",
  },
  {
    number: "V",
    title: "The Oath Circle",
    glyph: "chain" as GlyphName,
    text:
      "Veyr turns private ache into shared consequence. The oath is not only a vow; it is a mechanism. After it is spoken, no watcher descends alone.",
  },
  {
    number: "VI",
    title: "The Descent",
    glyph: "unsealed" as GlyphName,
    text:
      "The first movement downward is not triumph. It is rupture. The watchers cross from appointed distance into embodiment, carrying gifts the human world is not ready to hold.",
  },
  {
    number: "VII",
    title: "The Gifts",
    glyph: "record" as GlyphName,
    text:
      "Knowledge enters too early: craft, adornment, weapon, sign, system, and hidden method. The danger is not knowledge itself, but knowledge severed from wisdom.",
  },
  {
    number: "VIII",
    title: "The Mass",
    glyph: "unsealed" as GlyphName,
    text:
      "Consequence becomes visible. The children of breach are not simple monsters. They are scale error made flesh: awe, hunger, inheritance, grief, and power without proportion.",
  },
  {
    number: "IX",
    title: "The Trial of Offices",
    glyph: "record" as GlyphName,
    text:
      "The Seven Measures arrive not to debate but to name accurately. Each corrupted office is judged by what it became after longing crossed its boundary.",
  },
  {
    number: "X",
    title: "The Binding",
    glyph: "chain" as GlyphName,
    text:
      "The broken offices are sealed inside poetic consequence. The fall does not vanish. It becomes buried signal, hidden archive, and echo beneath history.",
  },
];

const sourceReservoirs = [
  {
    title: "Enoch / Watchers",
    use:
      "Descent, oath, forbidden instruction, heavenly order, corrupted knowledge, judgment, and the emotional architecture of watching too long.",
  },
  {
    title: "Jubilees",
    use:
      "Ordered time, heavenly tablets, angelic transmission, sacred cycles, calendars, records, and the idea that history can be structured as a hidden archive.",
  },
  {
    title: "Daniel",
    use:
      "Sealed vision, interpretive figures, hidden conflict behind visible events, courts, kingdoms, and wisdom kept until an appointed time.",
  },
  {
    title: "Revelation",
    use:
      "Unveiling, symbolic sequence, seals, judgment imagery, cosmic consequence, and the sense that hidden reality eventually becomes visible.",
  },
  {
    title: "Nag Hammadi Atmosphere",
    use:
      "Hidden books, secret teaching, inner knowing, buried revelation, silence, symbolic language, and dangerous interpretation.",
  },
  {
    title: "The Gospel of Mary",
    use:
      "Vision, inward ascent, contested revelation, knowledge received through image, and the idea that not every truth arrives as plain exposition.",
  },
];

const albumSpine = [
  ["Descent", "Watching becomes wanting."],
  ["Oath", "Breach becomes binding."],
  ["Graft", "The first signal enters the blood."],
  ["Forge", "Knowledge becomes tool, beauty, blade."],
  ["Course", "Celestial order slips out of phase."],
  ["Mass", "Consequence grows too large."],
  ["Fever", "Hunger spreads."],
  ["Ruin", "Civilization glows while collapsing."],
  ["Flood", "Erasure, pressure, memory underwater."],
  ["Bound", "Sealed inside consequence."],
  ["Waking", "Buried signal stirs."],
  ["Husk", "False return in ruined form."],
  ["Echo", "What remains keeps transmitting."],
  ["Return", "Reckoning, re-entry, transfiguration."],
];

function Shell({ children }: { children: ReactNode }) {
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
      {children}
    </main>
  );
}

function Container({ children }: { children: ReactNode }) {
  return (
    <div
      style={{
        width: "min(1180px, calc(100% - 32px))",
        margin: "0 auto",
      }}
    >
      {children}
    </div>
  );
}

function Glyph({
  name,
  size = 120,
  opacity = 0.22,
  style,
}: {
  name: GlyphName;
  size?: number;
  opacity?: number;
  style?: CSSProperties;
}) {
  return (
    <img
      src={glyphImages[name]}
      alt=""
      aria-hidden="true"
      style={{
        width: size,
        height: size,
        objectFit: "contain",
        opacity,
        pointerEvents: "none",
        mixBlendMode: "screen",
        filter:
          "drop-shadow(0 0 18px rgba(210,181,139,0.10)) drop-shadow(0 0 34px rgba(141,160,178,0.08))",
        ...style,
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

          <nav
            style={{
              display: "flex",
              gap: "18px",
              flexWrap: "wrap",
              alignItems: "center",
            }}
          >
            {navItems.map(([label, href]) => (
              <Link
                key={label}
                href={href}
                style={{
                  color: label === "Lore" ? colors.gold : colors.textSoft,
                  textDecoration: "none",
                  fontSize: "15px",
                  letterSpacing: "0.04em",
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
        margin: "0 0 16px",
        color: colors.gold,
        textTransform: "uppercase",
        letterSpacing: "0.22em",
        fontSize: "12px",
      }}
    >
      {children}
    </p>
  );
}

function Hero() {
  return (
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
            linear-gradient(90deg, rgba(2,4,6,0.97) 0%, rgba(2,4,6,0.86) 36%, rgba(2,4,6,0.58) 68%, rgba(2,4,6,0.86) 100%),
            linear-gradient(180deg, rgba(2,4,6,0.10) 0%, rgba(2,4,6,0.46) 66%, rgba(2,4,6,0.98) 100%),
            url('/images/phylax/atmosphere/descent-path.png')
          `,
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "saturate(0.92) contrast(1.07)",
        }}
      />

      <div
        style={{
          position: "absolute",
          right: "8%",
          top: "14%",
        }}
      >
        <Glyph name="unsealed" size={340} opacity={0.12} />
      </div>

      <div
        style={{
          position: "absolute",
          left: "6%",
          bottom: "12%",
        }}
      >
        <Glyph name="chain" size={220} opacity={0.1} />
      </div>

      <Container>
        <div
          style={{
            position: "relative",
            zIndex: 2,
            padding: "86px 0 96px",
            maxWidth: "920px",
          }}
        >
          <Eyebrow>PHYLAX archive / story</Eyebrow>

          <h1
            style={{
              margin: 0,
              color: colors.text,
              fontSize: "clamp(50px, 8vw, 98px)",
              lineHeight: 0.93,
              letterSpacing: "-0.06em",
              fontWeight: 400,
              textShadow: "0 14px 44px rgba(0,0,0,0.62)",
            }}
          >
            The breach begins
            <br />
            before the fall.
          </h1>

          <p
            style={{
              margin: "28px 0 0",
              maxWidth: "780px",
              color: colors.textSoft,
              fontSize: "23px",
              lineHeight: 1.75,
              textShadow: "0 10px 26px rgba(0,0,0,0.52)",
            }}
          >
            This is the story spine of PHYLAX: The First Breach — a descent
            from sacred distance into longing, oath, forbidden knowledge,
            consequence, binding, and memory.
          </p>

          <div
            style={{
              marginTop: "34px",
              display: "flex",
              gap: "14px",
              flexWrap: "wrap",
            }}
          >
            <Link
              href="#timeline"
              style={{
                textDecoration: "none",
                color: "#091015",
                background: colors.gold,
                padding: "14px 22px",
                borderRadius: "999px",
                fontSize: "15px",
                letterSpacing: "0.05em",
              }}
            >
              Follow the timeline
            </Link>

            <Link
              href="#sources"
              style={{
                textDecoration: "none",
                color: colors.text,
                border: `1px solid ${colors.border}`,
                background: "rgba(9,12,15,0.60)",
                padding: "14px 22px",
                borderRadius: "999px",
                fontSize: "15px",
                letterSpacing: "0.05em",
              }}
            >
              View archive
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}

function Thesis() {
  return (
    <section style={{ padding: "74px 0 30px" }}>
      <Container>
        <div
          className="phylax-story-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "22px",
            alignItems: "stretch",
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
            <div style={{ position: "absolute", right: "-50px", top: "-50px" }}>
              <Glyph name="hidden" size={250} opacity={0.09} />
            </div>

            <div style={{ position: "relative", zIndex: 2 }}>
              <Eyebrow>Core canon</Eyebrow>
              <h2
                style={{
                  margin: 0,
                  fontSize: "clamp(36px, 5vw, 60px)",
                  lineHeight: 0.98,
                  letterSpacing: "-0.045em",
                  fontWeight: 400,
                }}
              >
                Sacred distance collapses under longing.
              </h2>

              <p
                style={{
                  margin: "24px 0 0",
                  color: colors.textSoft,
                  fontSize: "18px",
                  lineHeight: 1.95,
                }}
              >
                PHYLAX does not begin with monsters. It begins with watchers
                who were made to observe without possession. They measure,
                preserve, and record from above — until the human world becomes
                more than an assignment.
              </p>

              <p
                style={{
                  margin: "16px 0 0",
                  color: colors.textSoft,
                  fontSize: "18px",
                  lineHeight: 1.95,
                }}
              >
                They do not fall because they hate humanity. They fall because
                they want what humanity has: nearness, touch, family, mortality,
                and the strange honor of being chosen under time.
              </p>
            </div>
          </article>

          <article
            style={{
              position: "relative",
              overflow: "hidden",
              border: `1px solid ${colors.border}`,
              borderRadius: "30px",
              padding: "36px",
              background:
                "linear-gradient(180deg, rgba(14,18,22,0.78), rgba(7,8,10,0.92))",
              boxShadow: "0 28px 80px rgba(0,0,0,0.24)",
            }}
          >
            <div style={{ position: "absolute", right: "-40px", bottom: "-50px" }}>
              <Glyph name="chain" size={240} opacity={0.09} />
            </div>

            <div style={{ position: "relative", zIndex: 2 }}>
              <Eyebrow>First law</Eyebrow>

              <blockquote
                style={{
                  margin: 0,
                  paddingLeft: "22px",
                  borderLeft: "1px solid rgba(210,181,139,0.5)",
                  color: colors.text,
                  fontSize: "clamp(28px, 4vw, 44px)",
                  lineHeight: 1.2,
                  fontStyle: "italic",
                }}
              >
                “You may behold what is below. You may not become its answer.”
              </blockquote>

              <p
                style={{
                  margin: "24px 0 0",
                  color: colors.textSoft,
                  fontSize: "18px",
                  lineHeight: 1.95,
                }}
              >
                This page keeps the public-facing world original. The ancient
                source material becomes hidden architecture: a pressure system
                beneath the art, not a lecture placed on top of it.
              </p>
            </div>
          </article>
        </div>
      </Container>
    </section>
  );
}

function Timeline() {
  return (
    <section id="timeline" style={{ padding: "68px 0 34px" }}>
      <Container>
        <Eyebrow>Story movement</Eyebrow>

        <h2
          style={{
            margin: 0,
            maxWidth: "850px",
            fontSize: "clamp(40px, 6vw, 72px)",
            lineHeight: 0.96,
            letterSpacing: "-0.05em",
            fontWeight: 400,
          }}
        >
          The viewer should feel the breach before understanding it.
        </h2>

        <div
          style={{
            marginTop: "34px",
            display: "grid",
            gap: "18px",
          }}
        >
          {storyMovements.map((item) => (
            <article
              key={item.number}
              className="phylax-story-row"
              style={{
                position: "relative",
                overflow: "hidden",
                display: "grid",
                gridTemplateColumns: "120px 1fr 140px",
                gap: "22px",
                alignItems: "center",
                border: `1px solid ${colors.border}`,
                borderRadius: "26px",
                padding: "24px",
                background:
                  "linear-gradient(180deg, rgba(14,18,22,0.84), rgba(7,8,10,0.94))",
              }}
            >
              <div
                style={{
                  color: colors.gold,
                  fontSize: "42px",
                  lineHeight: 1,
                  letterSpacing: "-0.04em",
                }}
              >
                {item.number}
              </div>

              <div>
                <h3
                  style={{
                    margin: 0,
                    color: colors.text,
                    fontSize: "30px",
                    lineHeight: 1.05,
                    fontWeight: 400,
                  }}
                >
                  {item.title}
                </h3>

                <p
                  style={{
                    margin: "10px 0 0",
                    color: colors.textSoft,
                    fontSize: "16px",
                    lineHeight: 1.85,
                  }}
                >
                  {item.text}
                </p>
              </div>

              <div style={{ justifySelf: "end" }}>
                <Glyph name={item.glyph} size={104} opacity={0.18} />
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

function SourceReservoir() {
  return (
    <section id="sources" style={{ padding: "72px 0 34px" }}>
      <Container>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "0.85fr 1.15fr",
            gap: "28px",
          }}
          className="phylax-story-grid"
        >
          <div>
            <Eyebrow>Source reservoir</Eyebrow>
            <h2
              style={{
                margin: 0,
                fontSize: "clamp(38px, 5vw, 64px)",
                lineHeight: 0.98,
                letterSpacing: "-0.045em",
                fontWeight: 400,
              }}
            >
              Ancient pressure, original world.
            </h2>

            <p
              style={{
                margin: "20px 0 0",
                color: colors.textSoft,
                fontSize: "18px",
                lineHeight: 1.9,
              }}
            >
              These sources are not presented as doctrine or literal exposition.
              They supply symbolic architecture: watchers, hidden books, sealed
              visions, ordered courses, forbidden instruction, and revelation.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: "16px",
            }}
          >
            {sourceReservoirs.map((source, index) => (
              <article
                key={source.title}
                style={{
                  position: "relative",
                  overflow: "hidden",
                  border: `1px solid ${colors.border}`,
                  borderRadius: "22px",
                  padding: "22px",
                  background: colors.panelSoft,
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    right: "-30px",
                    bottom: "-38px",
                  }}
                >
                  <Glyph
                    name={
                      index % 4 === 0
                        ? "hidden"
                        : index % 4 === 1
                          ? "record"
                          : index % 4 === 2
                            ? "chain"
                            : "unsealed"
                    }
                    size={140}
                    opacity={0.08}
                  />
                </div>

                <div style={{ position: "relative", zIndex: 2 }}>
                  <h3
                    style={{
                      margin: 0,
                      color: colors.gold,
                      fontSize: "22px",
                      lineHeight: 1.12,
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
                    {source.use}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

function AlbumSpine() {
  return (
    <section style={{ padding: "72px 0 100px" }}>
      <Container>
        <Eyebrow>Album spine</Eyebrow>

        <h2
          style={{
            margin: 0,
            maxWidth: "860px",
            fontSize: "clamp(40px, 6vw, 72px)",
            lineHeight: 0.96,
            letterSpacing: "-0.05em",
            fontWeight: 400,
          }}
        >
          Fourteen signals beneath the same wound.
        </h2>

        <div
          style={{
            marginTop: "34px",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "16px",
          }}
        >
          {albumSpine.map(([song, meaning], index) => (
            <article
              key={song}
              style={{
                position: "relative",
                overflow: "hidden",
                border: `1px solid ${colors.border}`,
                borderRadius: "22px",
                padding: "24px",
                background:
                  "linear-gradient(180deg, rgba(14,18,22,0.82), rgba(7,8,10,0.94))",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  right: "-34px",
                  top: "-36px",
                }}
              >
                <Glyph
                  name={
                    index % 4 === 0
                      ? "unsealed"
                      : index % 4 === 1
                        ? "chain"
                        : index % 4 === 2
                          ? "record"
                          : "hidden"
                  }
                  size={140}
                  opacity={0.08}
                />
              </div>

              <div style={{ position: "relative", zIndex: 2 }}>
                <h3
                  style={{
                    margin: 0,
                    color: colors.text,
                    fontSize: "30px",
                    lineHeight: 1,
                    fontWeight: 400,
                  }}
                >
                  {song}
                </h3>

                <p
                  style={{
                    margin: "12px 0 0",
                    color: colors.textSoft,
                    fontSize: "15px",
                    lineHeight: 1.75,
                  }}
                >
                  {meaning}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div
          style={{
            marginTop: "34px",
            textAlign: "center",
          }}
        >
          <Link
            href="/phylax"
            style={{
              display: "inline-flex",
              textDecoration: "none",
              color: colors.text,
              border: `1px solid ${colors.border}`,
              background: "rgba(9,12,15,0.62)",
              padding: "14px 22px",
              borderRadius: "999px",
              fontSize: "15px",
              letterSpacing: "0.05em",
            }}
          >
            Return to PHYLAX
          </Link>
        </div>
      </Container>
    </section>
  );
}

export default function PhylaxStoryPage() {
  return (
    <Shell>
      <TopNav />
      <Hero />
      <Thesis />
      <Timeline />
      <SourceReservoir />
      <AlbumSpine />

      <style>{`
        @media (max-width: 900px) {
          .phylax-story-grid,
          .phylax-story-row {
            grid-template-columns: 1fr !important;
          }

          .phylax-story-row {
            gap: 14px !important;
          }
        }
      `}</style>
    </Shell>
  );
}
