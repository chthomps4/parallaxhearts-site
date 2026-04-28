import Link from "next/link";
import type { ReactNode } from "react";
import type { Character } from "./phylax-data";

const siteFont = "Georgia, 'Times New Roman', Times, serif";

const shellBackground =
  "radial-gradient(circle at 20% 0%, rgba(71,103,124,0.18), transparent 34%), radial-gradient(circle at 90% 12%, rgba(197,76,28,0.11), transparent 26%), linear-gradient(180deg, #020407 0%, #05070b 38%, #0b090a 100%)";

const panelBackground =
  "linear-gradient(180deg, rgba(164,183,196,0.055), rgba(255,255,255,0.018))";

const borderSoft = "1px solid rgba(190,210,224,0.13)";
const textMain = "#e8edf0";
const textMuted = "rgba(232,237,240,0.70)";
const textDim = "rgba(232,237,240,0.54)";
const ember = "#c66a32";
const paleGold = "#d8c3a0";

export function PhylaxShell({ children }: { children: ReactNode }) {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: shellBackground,
        color: textMain,
        fontFamily: siteFont,
      }}
    >
      <div className="mx-auto w-[min(1160px,calc(100%-32px))]">
        <header
          className="flex flex-wrap items-center justify-between gap-5 py-6"
          style={{
            borderBottom: "1px solid rgba(190,210,224,0.10)",
          }}
        >
          <Link
            href="/"
            style={{
              color: textMain,
              textDecoration: "none",
              textTransform: "uppercase",
              letterSpacing: "0.08em",
              fontSize: "21px",
              fontWeight: 400,
            }}
          >
            Parallax Hearts
          </Link>

          <nav className="flex flex-wrap gap-x-5 gap-y-2 text-[15px]">
            {[
              ["Home", "/"],
              ["Project", "/project"],
              ["Music", "/music"],
              ["PHYLAX", "/phylax"],
              ["Story", "/phylax/story"],
              ["Characters", "/phylax/characters"],
              ["Descent", "/phylax/descent"],
              ["Lore", "/phylax/lore"],
              ["Contact", "/contact"],
            ].map(([label, href]) => (
              <Link
                key={href}
                href={href}
                style={{
                  color: label === "PHYLAX" ? paleGold : textMain,
                  textDecoration: "none",
                  opacity: label === "PHYLAX" ? 1 : 0.78,
                }}
              >
                {label}
              </Link>
            ))}
          </nav>
        </header>
      </div>

      {children}
    </main>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <p
      style={{
        margin: "0 0 18px",
        color: paleGold,
        textTransform: "uppercase",
        letterSpacing: "0.18em",
        fontSize: "12px",
      }}
    >
      {children}
    </p>
  );
}

export function PageHero({
  eyebrow,
  title,
  subtitle,
  children,
  image = "/images/phylax/atmosphere/upper-watch-hero.png",
}: {
  eyebrow: string;
  title: string;
  subtitle: string;
  children?: ReactNode;
  image?: string;
}) {
  return (
    <section
      className="relative overflow-hidden"
      style={{
        minHeight: "78vh",
        borderBottom: "1px solid rgba(190,210,224,0.11)",
      }}
    >
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `linear-gradient(90deg, rgba(2,4,7,0.96) 0%, rgba(2,4,7,0.80) 36%, rgba(2,4,7,0.45) 68%, rgba(2,4,7,0.82) 100%), linear-gradient(180deg, rgba(2,4,7,0.18) 0%, rgba(2,4,7,0.42) 58%, rgba(2,4,7,0.95) 100%), url(${image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "saturate(0.92) contrast(1.08)",
        }}
      />

      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 18% 10%, rgba(216,195,160,0.12), transparent 26%), radial-gradient(circle at 80% 60%, rgba(198,106,50,0.10), transparent 28%)",
        }}
      />

      <div className="relative mx-auto flex min-h-[78vh] w-[min(1160px,calc(100%-32px))] items-center py-20 lg:py-28">
        <div>
          <Eyebrow>{eyebrow}</Eyebrow>

          <h1
            style={{
              maxWidth: "980px",
              margin: 0,
              color: textMain,
              fontSize: "clamp(46px, 8vw, 92px)",
              lineHeight: 0.92,
              fontWeight: 400,
              letterSpacing: "-0.055em",
              textShadow: "0 8px 42px rgba(0,0,0,0.72)",
            }}
          >
            {title}
          </h1>

          <p
            style={{
              maxWidth: "760px",
              margin: "28px 0 0",
              color: "rgba(232,237,240,0.78)",
              fontSize: "21px",
              lineHeight: 1.75,
              textShadow: "0 6px 28px rgba(0,0,0,0.7)",
            }}
          >
            {subtitle}
          </p>

          {children}
        </div>
      </div>
    </section>
  );
}

export function LinkCard({
  href,
  title,
  text,
}: {
  href: string;
  title: string;
  text: string;
}) {
  return (
    <Link
      href={href}
      style={{
        display: "block",
        height: "100%",
        color: textMain,
        textDecoration: "none",
        border: borderSoft,
        borderRadius: "24px",
        padding: "26px",
        background: panelBackground,
        boxShadow: "0 22px 70px rgba(0,0,0,0.34)",
      }}
    >
      <h3
        style={{
          margin: 0,
          color: textMain,
          fontSize: "29px",
          lineHeight: 1.08,
          fontWeight: 400,
          letterSpacing: "-0.03em",
        }}
      >
        {title}
      </h3>

      <p
        style={{
          margin: "14px 0 0",
          color: textMuted,
          fontSize: "16px",
          lineHeight: 1.75,
        }}
      >
        {text}
      </p>
    </Link>
  );
}

export function NaturalPortrait({ character }: { character: Character }) {
  if (!character.image) {
    return (
      <div
        className="mx-auto grid h-[520px] w-full max-w-[360px] place-items-center"
        style={{
          borderRadius: "24px",
          border: borderSoft,
          background:
            "radial-gradient(circle at top, rgba(216,195,160,0.10), transparent 34%), linear-gradient(180deg, #0b1014, #030406)",
          color: textDim,
          fontSize: "15px",
        }}
      >
        Image pending
      </div>
    );
  }

  return (
    <figure className="mx-auto w-full max-w-[360px]" style={{ margin: "0 auto" }}>
      <div
        className="relative h-[520px] w-full overflow-hidden"
        style={{
          borderRadius: "24px",
          border: "1px solid rgba(190,210,224,0.14)",
          background: "#030406",
          boxShadow: "0 26px 80px rgba(0,0,0,0.48)",
        }}
      >
        <img
          src={character.image}
          alt={`${character.name} — ${character.title}`}
          className="block h-full w-full object-cover object-top"
        />

        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(0,0,0,0.02), rgba(0,0,0,0.08) 45%, rgba(0,0,0,0.94) 100%)",
          }}
        />

        <figcaption className="absolute bottom-0 left-0 right-0 p-5">
          <div
            style={{
              color: paleGold,
              textTransform: "uppercase",
              letterSpacing: "0.17em",
              fontSize: "11px",
              marginBottom: "9px",
            }}
          >
            {character.title}
          </div>

          <div
            style={{
              color: textMain,
              fontSize: "34px",
              lineHeight: 1,
              fontWeight: 400,
              letterSpacing: "-0.035em",
            }}
          >
            {character.name}
          </div>
        </figcaption>
      </div>
    </figure>
  );
}

export function CharacterFeature({
  character,
  reverse = false,
}: {
  character: Character;
  reverse?: boolean;
}) {
  return (
    <article
      style={{
        borderBottom: "1px solid rgba(190,210,224,0.09)",
        padding: "58px 0",
      }}
    >
      <div
        className={`mx-auto grid max-w-6xl gap-9 lg:grid-cols-[380px_1fr] lg:items-start ${
          reverse ? "lg:[&>*:first-child]:order-2" : ""
        }`}
      >
        <NaturalPortrait character={character} />

        <div className="max-w-3xl">
          <div
            style={{
              color: paleGold,
              textTransform: "uppercase",
              letterSpacing: "0.17em",
              fontSize: "12px",
              marginBottom: "15px",
            }}
          >
            {character.faction}
          </div>

          <h2
            style={{
              margin: 0,
              color: textMain,
              fontSize: "clamp(36px, 5vw, 58px)",
              lineHeight: 0.98,
              fontWeight: 400,
              letterSpacing: "-0.045em",
            }}
          >
            {character.name}
          </h2>

          <p
            style={{
              margin: "11px 0 0",
              color: paleGold,
              fontSize: "24px",
              lineHeight: 1.2,
            }}
          >
            {character.title}
          </p>

          <p
            style={{
              margin: "26px 0 0",
              color: "rgba(232,237,240,0.73)",
              fontSize: "18px",
              lineHeight: 1.85,
            }}
          >
            {character.role}
          </p>

          <p
            style={{
              margin: "18px 0 0",
              color: textMuted,
              fontSize: "18px",
              lineHeight: 1.9,
            }}
          >
            {character.summary}
          </p>

          <div className="mt-7 grid gap-4 md:grid-cols-2">
            <div
              style={{
                background: "rgba(164,183,196,0.055)",
                border: borderSoft,
                borderRadius: "20px",
                padding: "22px",
              }}
            >
              <strong
                style={{
                  display: "block",
                  marginBottom: "8px",
                  color: paleGold,
                  fontWeight: 400,
                }}
              >
                Symbol
              </strong>

              <p style={{ margin: 0, color: textMuted, lineHeight: 1.8 }}>
                {character.symbol}
              </p>
            </div>

            <div
              style={{
                background: "rgba(164,183,196,0.055)",
                border: borderSoft,
                borderRadius: "20px",
                padding: "22px",
              }}
            >
              <strong
                style={{
                  display: "block",
                  marginBottom: "8px",
                  color: paleGold,
                  fontWeight: 400,
                }}
              >
                Arc
              </strong>

              <p style={{ margin: 0, color: textMuted, lineHeight: 1.8 }}>
                {character.arc ?? "Arc notes pending."}
              </p>
            </div>
          </div>

          {character.keyLine && (
            <blockquote
              style={{
                margin: "30px 0 0",
                paddingLeft: "22px",
                borderLeft: "1px solid rgba(216,195,160,0.50)",
                color: textMain,
                fontSize: "21px",
                lineHeight: 1.7,
                fontStyle: "italic",
              }}
            >
              “{character.keyLine}”
            </blockquote>
          )}
        </div>
      </div>
    </article>
  );
}

export function LoreList({ items }: { items: string[][] }) {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {items.map(([title, text]) => (
        <article
          key={title}
          style={{
            background: "rgba(164,183,196,0.055)",
            border: borderSoft,
            borderRadius: "24px",
            padding: "24px",
            boxShadow: "0 20px 60px rgba(0,0,0,0.22)",
          }}
        >
          <h3
            style={{
              margin: 0,
              color: textMain,
              fontSize: "25px",
              lineHeight: 1.15,
              fontWeight: 400,
              letterSpacing: "-0.025em",
            }}
          >
            {title}
          </h3>

          <p
            style={{
              margin: "14px 0 0",
              color: textMuted,
              fontSize: "16px",
              lineHeight: 1.85,
            }}
          >
            {text}
          </p>
        </article>
      ))}
    </div>
  );
}