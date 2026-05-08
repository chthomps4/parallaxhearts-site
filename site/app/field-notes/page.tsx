import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Field Notes | Forbidden Knowledge + Parallax Hearts",
  description:
    "Field Notes is the source-conscious research archive connected to Parallax Hearts, exploring ancient knowledge, lost etymology, symbolism, source trails, evidence labels, the Forbidden Knowledge Circle, and The Forbidden Knowledge Bible.",
  keywords: [
    "Field Notes",
    "Forbidden Knowledge Circle",
    "Forbidden Knowledge Bible",
    "ancient knowledge",
    "lost etymology",
    "symbolism",
    "source trails",
    "evidence-aware research",
    "5-Level Rabbit Hole Method",
    "AI research prompts",
    "creative knowledge systems",
    "Parallax Hearts",
  ],
};

const evidenceLevels = [
  {
    title: "Well-Supported",
    text: "Grounded in primary sources, established scholarship, archaeological evidence, or clear historical record.",
  },
  {
    title: "Plausible but Uncertain",
    text: "Reasonable enough to examine, but incomplete, debated, or dependent on interpretation.",
  },
  {
    title: "Symbolic / Interpretive",
    text: "Useful for reading myth, ritual, image, metaphor, and cultural memory without treating symbolism as proof.",
  },
  {
    title: "Speculative",
    text: "A possible direction for imagination or theory, clearly separated from evidence-based claims.",
  },
  {
    title: "Unsupported / Modern Invention",
    text: "A claim worth identifying, testing, or correcting rather than repeating as fact.",
  },
];

const rabbitHoleLevels = [
  {
    level: "Level 1",
    title: "What can be verified?",
    text: "Names, dates, sources, artifacts, inscriptions, translations, and scholarly consensus.",
  },
  {
    level: "Level 2",
    title: "What can be reasonably inferred?",
    text: "Historical context, cultural use, patterns, and careful interpretation.",
  },
  {
    level: "Level 3",
    title: "What does it symbolize?",
    text: "Myth, ritual, number, image, architecture, cosmology, and poetic meaning.",
  },
  {
    level: "Level 4",
    title: "Where does the mystery begin?",
    text: "Open questions, unresolved theories, and competing explanations.",
  },
  {
    level: "Level 5",
    title: "Where does speculation begin?",
    text: "Creative, philosophical, or fringe claims that must be labeled honestly.",
  },
];

const researchLanes = [
  "Ancient knowledge and symbolic systems",
  "Lost etymology and word history",
  "Source trails and claim verification",
  "Ritual, architecture, astronomy, and memory",
  "Pre-Egypt and pre-Christian deep antiquity",
  "Sacred mathematics and knowledge preservation",
  "Modern cosmic discovery and computation bridges",
  "AI-assisted research prompts and templates",
  "The Forbidden Knowledge Bible / Handbook",
];

export default function FieldNotesPage() {
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
              {[
                ["Home", "/"],
                ["Music", "/music"],
                ["Story", "/project"],
                ["Field Notes", "/field-notes"],
                ["Support", "/support"],
                ["Contact", "/contact"],
              ].map(([label, href]) => (
                <Link
                  key={label}
                  href={href}
                  style={{
                    color:
                      label === "Field Notes"
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

      <section style={{ padding: "58px 0 34px" }}>
        <div className="site-container">
          <div
            className="glass-panel"
            style={{
              position: "relative",
              overflow: "hidden",
              borderRadius: "38px",
              padding: "clamp(30px, 6vw, 64px)",
              minHeight: "64vh",
              display: "flex",
              alignItems: "flex-end",
            }}
          >
            <div
              style={{
                position: "absolute",
                inset: 0,
                backgroundImage: `
                  linear-gradient(180deg, rgba(4,5,6,0.08), rgba(4,5,6,0.52) 48%, rgba(4,5,6,0.98) 100%),
                  radial-gradient(circle at 24% 24%, rgba(210,181,139,0.22), transparent 30%),
                  radial-gradient(circle at 82% 20%, rgba(127,141,155,0.18), transparent 32%),
                  url('/images/world.jpg')
                `,
                backgroundSize: "cover",
                backgroundPosition: "center",
                filter: "saturate(0.72) contrast(1.08)",
              }}
            />

            <div style={{ position: "relative", zIndex: 2, maxWidth: "900px" }}>
              <p className="kicker">Forbidden Knowledge / Field Notes</p>

              <h1
                style={{
                  margin: 0,
                  fontSize: "clamp(54px, 9vw, 110px)",
                  lineHeight: 0.88,
                  letterSpacing: "-0.075em",
                  fontWeight: 400,
                  textShadow: "0 18px 54px rgba(0,0,0,0.68)",
                }}
              >
                Some words open like drawers.
              </h1>

              <p
                style={{
                  margin: "24px 0 0",
                  maxWidth: "780px",
                  color: "var(--paper)",
                  fontSize: "clamp(20px, 3vw, 29px)",
                  lineHeight: 1.35,
                }}
              >
                Ancient knowledge, lost etymology, symbolism, source trails,
                and the discipline of knowing where evidence ends.
              </p>

              <p className="body-copy" style={{ margin: "20px 0 0", maxWidth: "780px" }}>
                Field Notes is the public bridge for the Forbidden Knowledge
                work: the Skool community, the Inner Archive, and the long-form
                codex being built as <em>The Forbidden Knowledge Bible</em>.
                It follows mystery without pretending every mystery is proof.
              </p>

              <div
                style={{
                  marginTop: "30px",
                  display: "flex",
                  gap: "12px",
                  flexWrap: "wrap",
                }}
              >
                <Link href="#circle" className="primary-button">
                  Join the Circle
                </Link>

                <Link href="#method" className="secondary-button">
                  Read the Method
                </Link>

                <Link href="#book" className="secondary-button">
                  The Book
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="method" style={{ padding: "34px 0" }}>
        <div className="site-container">
          <div
            className="glass-panel"
            style={{
              padding: "clamp(26px, 5vw, 46px)",
              display: "grid",
              gridTemplateColumns: "minmax(0, 1fr) minmax(280px, 0.8fr)",
              gap: "32px",
              alignItems: "start",
            }}
          >
            <div>
              <p className="kicker">The method</p>
              <h2 className="section-title">Wonder deserves structure.</h2>

              <p className="body-copy" style={{ margin: "20px 0 0" }}>
                The Field Notes use a simple rule: go deep without losing the
                map. Each subject is treated as a trail. Some trails lead to
                documents. Some lead to archaeology. Some lead to symbolism.
                Some end in speculation and should be labeled honestly.
              </p>

              <p className="body-copy" style={{ margin: "18px 0 0" }}>
                This is not conspiracy framing, and it is not shallow debunking.
                It is a way to preserve mystery while protecting truth — to
                separate source, interpretation, symbol, and invention.
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
                Research lanes
              </p>

              {researchLanes.map((item) => (
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

      <section style={{ padding: "34px 0" }}>
        <div className="site-container">
          <p className="kicker">5-Level Rabbit Hole Method</p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: "14px",
              marginTop: "18px",
            }}
          >
            {rabbitHoleLevels.map((level) => (
              <div
                key={level.level}
                className="glass-panel"
                style={{ padding: "24px", borderRadius: "24px" }}
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
                  {level.level}
                </p>

                <h3
                  style={{
                    margin: 0,
                    color: "var(--paper)",
                    fontSize: "23px",
                    lineHeight: 1.12,
                    fontWeight: 400,
                  }}
                >
                  {level.title}
                </h3>

                <p className="soft-copy" style={{ margin: "14px 0 0" }}>
                  {level.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "34px 0" }}>
        <div className="site-container">
          <p className="kicker">Evidence labels</p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))",
              gap: "14px",
              marginTop: "18px",
            }}
          >
            {evidenceLevels.map((level) => (
              <div
                key={level.title}
                className="glass-panel"
                style={{ padding: "24px", borderRadius: "24px" }}
              >
                <h3
                  style={{
                    margin: 0,
                    color: "var(--paper)",
                    fontSize: "24px",
                    lineHeight: 1.1,
                    fontWeight: 400,
                  }}
                >
                  {level.title}
                </h3>

                <p className="soft-copy" style={{ margin: "14px 0 0" }}>
                  {level.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="circle" style={{ padding: "34px 0" }}>
        <div className="site-container">
          <div
            className="glass-panel"
            style={{
              padding: "clamp(26px, 5vw, 46px)",
              display: "grid",
              gridTemplateColumns: "minmax(0, 1fr) minmax(260px, 0.72fr)",
              gap: "28px",
              alignItems: "start",
            }}
          >
            <div>
              <p className="kicker">Community</p>
              <h2 className="section-title">Forbidden Knowledge Circle</h2>

              <p className="body-copy" style={{ margin: "18px 0 0" }}>
                The Circle is the public community lane for ancient wisdom,
                symbolism, etymology, AI-assisted research, creative knowledge
                systems, and evidence-aware rabbit-hole exploration.
              </p>

              <p className="body-copy" style={{ margin: "18px 0 0" }}>
                The Inner Archive is the deeper paid lane for guided research,
                monthly deep-dives, source-trail templates, AI prompts,
                claim-check frameworks, and a build-your-own-codex system.
              </p>
            </div>

            <aside
              style={{
                border: "1px solid var(--line)",
                borderRadius: "24px",
                padding: "24px",
                background: "rgba(255,255,255,0.025)",
              }}
            >
              <p className="kicker" style={{ marginBottom: "16px" }}>
                Access plan
              </p>

              <p className="soft-copy" style={{ margin: 0 }}>
                The Skool link will be added here once the public group is
                ready. Until then, use the contact page for early access or
                questions about the Circle.
              </p>

              <div style={{ marginTop: "22px" }}>
                <Link href="/contact" className="primary-button">
                  Ask About Early Access
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section id="book" style={{ padding: "34px 0 88px" }}>
        <div className="site-container">
          <div
            className="glass-panel"
            style={{
              padding: "clamp(26px, 5vw, 46px)",
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "24px",
            }}
          >
            <div>
              <p className="kicker">The book</p>
              <h2 className="section-title">The Forbidden Knowledge Bible</h2>
              <p className="body-copy" style={{ margin: "18px 0 0" }}>
                A long-form codex of ancient knowledge, lost etymology, cosmic
                systems, forgotten technologies, hidden source trails, sacred
                mathematics, and modern science bridges.
              </p>
              <p className="body-copy" style={{ margin: "18px 0 0" }}>
                The book is being built as a continuity archive: a way to
                preserve source trails, evidence methods, symbolic
                interpretation, and durable knowledge if context gets lost.
              </p>
            </div>

            <div>
              <p className="kicker">Core rule</p>
              <h2 className="section-title">Preserve mystery. Protect truth.</h2>
              <p className="body-copy" style={{ margin: "18px 0 0" }}>
                This is not a claim that every mystery has a hidden answer. It
                is a method for following the trail without losing the
                difference between evidence, interpretation, and invention.
              </p>
              <p className="soft-copy" style={{ margin: "16px 0 0" }}>
                A map of knowledge, not a claim of final truth.
              </p>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 900px) {
          section .glass-panel[style*="grid-template-columns"] {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </main>
  );
}
