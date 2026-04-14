import type { CSSProperties } from "react";

const cardStyle: CSSProperties = {
  background: "rgba(255,255,255,0.03)",
  border: "1px solid rgba(255,255,255,0.08)",
  borderRadius: "24px",
  padding: "28px",
  boxShadow: "0 10px 40px rgba(0,0,0,0.18)",
};

const labelStyle: CSSProperties = {
  color: "#b04e67",
  textTransform: "uppercase",
  letterSpacing: "0.18em",
  fontSize: "12px",
  marginBottom: "14px",
};

const sectionTitleStyle: CSSProperties = {
  fontSize: "40px",
  lineHeight: 1.1,
  margin: "0 0 20px",
  color: "#f3eee7",
};

const bodyTextStyle: CSSProperties = {
  fontSize: "19px",
  lineHeight: 1.8,
  color: "#bfb6ad",
  margin: 0,
};

export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background:
          "radial-gradient(circle at top left, rgba(176,78,103,0.18), transparent 28%), radial-gradient(circle at 85% 12%, rgba(112,118,170,0.08), transparent 24%), linear-gradient(180deg, #08090d 0%, #0b0b10 45%, #0a0a0f 100%)",
        color: "#f3eee7",
        padding: "40px 24px 80px",
        fontFamily: 'Inter, Arial, Helvetica, sans-serif',
      }}
    >
      <div style={{ maxWidth: "1160px", margin: "0 auto" }}>
        <header
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "14px 0 28px",
            borderBottom: "1px solid rgba(255,255,255,0.08)",
            marginBottom: "72px",
            flexWrap: "wrap",
            gap: "16px",
          }}
        >
          <a
            href="/"
            style={{
              fontSize: "22px",
              fontWeight: 600,
              letterSpacing: "0.03em",
              color: "#f3eee7",
              textDecoration: "none",
            }}
          >
            Parallax Hearts
          </a>

          <nav
            style={{
              display: "flex",
              gap: "24px",
              fontSize: "15px",
              flexWrap: "wrap",
            }}
          >
            <a href="/about" style={{ color: "#f3eee7", textDecoration: "none" }}>
              About
            </a>
            <a href="/project" style={{ color: "#f3eee7", textDecoration: "none" }}>
              Project
            </a>
            <a href="/contact" style={{ color: "#f3eee7", textDecoration: "none" }}>
              Contact
            </a>
          </nav>
        </header>

        <section
          style={{
            padding: "40px 0 120px",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "40px",
            alignItems: "center",
          }}
        >
          <div>
            <p
              style={{
                color: "#b04e67",
                textTransform: "uppercase",
                letterSpacing: "0.18em",
                fontSize: "12px",
                marginBottom: "18px",
              }}
            >
              Music • Story • Atmosphere
            </p>

            <h1
              style={{
                fontSize: "clamp(52px, 10vw, 92px)",
                lineHeight: 0.95,
                margin: "0 0 24px",
                maxWidth: "760px",
                fontFamily: 'Georgia, "Times New Roman", serif',
                fontWeight: 600,
              }}
            >
              Parallax Hearts
            </h1>

            <p
              style={{
                fontSize: "22px",
                lineHeight: 1.7,
                maxWidth: "760px",
                color: "#cfc7be",
                marginBottom: "32px",
              }}
            >
              Cinematic music, spiritual atmosphere, and love stories that leave
              weather behind.
            </p>

            <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
              <a
                href="/project"
                style={{
                  background: "#f3eee7",
                  color: "#0b0b10",
                  padding: "14px 22px",
                  borderRadius: "999px",
                  textDecoration: "none",
                  fontWeight: 600,
                }}
              >
                Enter the World
              </a>

              <a
                href="/contact"
                style={{
                  border: "1px solid rgba(255,255,255,0.18)",
                  color: "#f3eee7",
                  padding: "14px 22px",
                  borderRadius: "999px",
                  textDecoration: "none",
                }}
              >
                Stay in the Signal
              </a>
            </div>
          </div>

          <div
            style={{
              minHeight: "520px",
              borderRadius: "28px",
              border: "1px solid rgba(255,255,255,0.08)",
              boxShadow: "0 20px 70px rgba(0,0,0,0.28)",
              position: "relative",
              overflow: "hidden",
              backgroundImage:
                "linear-gradient(to bottom, rgba(8,9,13,0.18), rgba(8,9,13,0.52)), url('/images/hero.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "radial-gradient(circle at top left, rgba(176,78,103,0.18), transparent 30%)",
              }}
            />
            <div
              style={{
                position: "absolute",
                left: "10%",
                right: "10%",
                bottom: "16%",
                borderTop: "1px solid rgba(255,255,255,0.18)",
              }}
            />
            <div
              style={{
                position: "absolute",
                left: "10%",
                right: "10%",
                bottom: "12%",
                display: "flex",
                justifyContent: "space-between",
                fontSize: "14px",
                color: "#f3eee7",
              }}
            >
              <span>weather</span>
              <span>signal</span>
              <span>crossing</span>
            </div>
          </div>
        </section>

        <section
          id="world"
          style={{
            padding: "56px 0 96px",
            borderTop: "1px solid rgba(255,255,255,0.08)",
          }}
        >
          <h2
            style={{
              fontSize: "clamp(34px, 5vw, 48px)",
              lineHeight: 1.1,
              maxWidth: "840px",
              margin: "0 0 22px",
              fontFamily: 'Georgia, "Times New Roman", serif',
              fontWeight: 500,
            }}
          >
            A world of signal, memory, motion, and aftermath.
          </h2>

          <p
            style={{
              maxWidth: "860px",
              fontSize: "20px",
              lineHeight: 1.8,
              color: "#bfb6ad",
              margin: "0 0 32px",
            }}
          >
            Parallax Hearts moves through the charged space between intimacy and
            distance, where music, story, and image become weather for the soul.
            The atmosphere is cosmic and spiritual, but grounded in streets,
            thresholds, crossings, silence, and the emotional architecture that
            remains after love changes a life.
          </p>

          <div
            style={{
              minHeight: "380px",
              borderRadius: "28px",
              overflow: "hidden",
              border: "1px solid rgba(255,255,255,0.08)",
              boxShadow: "0 20px 70px rgba(0,0,0,0.24)",
              backgroundImage:
                "linear-gradient(to bottom, rgba(8,9,13,0.2), rgba(8,9,13,0.5)), url('/images/world.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
        </section>

        <section id="project" style={{ padding: "16px 0 96px" }}>
          <p style={labelStyle}>Current Project</p>
          <h2
            style={{
              fontSize: "clamp(34px, 5vw, 48px)",
              margin: "0 0 20px",
              fontFamily: 'Georgia, "Times New Roman", serif',
              fontWeight: 500,
            }}
          >
            What the Town Keeps
          </h2>

          <p
            style={{
              ...bodyTextStyle,
              maxWidth: "820px",
              marginBottom: "28px",
            }}
          >
            A love story shaped by the aftermath of a mutual, transformative,
            unsustainable relationship. The town is not a mystery to solve. It is
            the emotional map of what remains.
          </p>

          <div
            style={{
              minHeight: "420px",
              borderRadius: "28px",
              overflow: "hidden",
              border: "1px solid rgba(255,255,255,0.08)",
              boxShadow: "0 20px 70px rgba(0,0,0,0.28)",
              backgroundImage:
                "linear-gradient(to bottom, rgba(8,9,13,0.2), rgba(8,9,13,0.55)), url('/images/project.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              marginBottom: "32px",
            }}
          />

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: "24px",
            }}
          >
            <article style={cardStyle}>
              <h3
                style={{
                  fontSize: "24px",
                  marginTop: 0,
                  marginBottom: "14px",
                  color: "#f3eee7",
                }}
              >
                The Heart of It
              </h3>
              <p style={bodyTextStyle}>
                A love story shaped by the aftermath of a mutual, transformative,
                unsustainable relationship. The town is not a mystery to solve. It
                is the emotional map of what remains.
              </p>
            </article>

            <article style={cardStyle}>
              <h3
                style={{
                  fontSize: "24px",
                  marginTop: 0,
                  marginBottom: "14px",
                  color: "#f3eee7",
                }}
              >
                The Atmosphere
              </h3>
              <p style={bodyTextStyle}>
                Rail lines, crossings, rain pressure, altered rooms, and signal
                drift form the language of the project. The feeling is haunted,
                intimate, and spiritually resonant without becoming supernatural.
              </p>
            </article>

            <article style={cardStyle}>
              <h3
                style={{
                  fontSize: "24px",
                  marginTop: 0,
                  marginBottom: "14px",
                  color: "#f3eee7",
                }}
              >
                The Theme
              </h3>
              <p style={bodyTextStyle}>
                Temporary love can permanently alter the soul. The work lives in
                that tension between staying and motion, closeness and release,
                memory and truth.
              </p>
            </article>
          </div>
        </section>

        <section
          style={{
            padding: "12px 0 96px",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "32px",
            alignItems: "center",
          }}
        >
          <div
            style={{
              minHeight: "440px",
              borderRadius: "26px",
              backgroundImage:
                "linear-gradient(to bottom, rgba(8,9,13,0.18), rgba(8,9,13,0.48)), url('/images/world.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              border: "1px solid rgba(255,255,255,0.08)",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "linear-gradient(135deg, rgba(176,78,103,0.18), rgba(255,255,255,0.02) 40%, rgba(0,0,0,0.12) 100%)",
              }}
            />
          </div>

          <div>
            <p style={labelStyle}>Story World</p>
            <h2 style={sectionTitleStyle}>
              Built at the intersection of vulnerability and design.
            </h2>
            <p style={{ ...bodyTextStyle, marginBottom: "18px" }}>
              Parallax Hearts is drawn toward weather as language, crossings as
              warning, rooms as altered interior space, and signal as the trace of
              contact after distance enters the story.
            </p>
            <p style={bodyTextStyle}>
              The result is a band world that feels literary, cosmic, intimate,
              and emotionally exact. Not horror. Not fantasy. Not a generic indie
              page. A lived-in atmosphere with spiritual depth and human gravity.
            </p>
          </div>
        </section>

        <section id="signals" style={{ padding: "8px 0 96px" }}>
          <p style={labelStyle}>Signals</p>
          <h2
            style={{
              fontSize: "clamp(34px, 5vw, 48px)",
              margin: "0 0 28px",
              fontFamily: 'Georgia, "Times New Roman", serif',
              fontWeight: 500,
            }}
          >
            Tracks, imagery, and recurring language
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: "24px",
            }}
          >
            <article style={cardStyle}>
              <h3 style={{ fontSize: "22px", marginTop: 0, color: "#f3eee7" }}>
                Weather
              </h3>
              <p style={bodyTextStyle}>
                Pressure systems, clear aftermath, charged air, drift, and
                seasonal movement.
              </p>
            </article>

            <article style={cardStyle}>
              <h3 style={{ fontSize: "22px", marginTop: 0, color: "#f3eee7" }}>
                Rail & Crossing
              </h3>
              <p style={bodyTextStyle}>
                Ballast, warning lights, halted motion, timing, and the hidden
                structure beneath movement.
              </p>
            </article>

            <article style={cardStyle}>
              <h3 style={{ fontSize: "22px", marginTop: 0, color: "#f3eee7" }}>
                Thresholds
              </h3>
              <p style={bodyTextStyle}>
                Porches, windows, rooms, platform edges, and the changed meaning
                of ordinary places.
              </p>
            </article>

            <article style={cardStyle}>
              <h3 style={{ fontSize: "22px", marginTop: 0, color: "#f3eee7" }}>
                Signal Drift
              </h3>
              <p style={bodyTextStyle}>
                Static, bells, horns, warnings, and memory shifting from event
                into atmosphere.
              </p>
            </article>
          </div>
        </section>

        <section
          style={{
            padding: "8px 0 110px",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))",
            gap: "24px",
          }}
        >
          <article>
            <h3
              style={{
                fontSize: "24px",
                marginBottom: "12px",
                fontFamily: 'Georgia, "Times New Roman", serif',
                fontWeight: 500,
              }}
            >
              Emotion First
            </h3>
            <p style={bodyTextStyle}>
              Every release begins with feeling before explanation.
            </p>
          </article>

          <article>
            <h3
              style={{
                fontSize: "24px",
                marginBottom: "12px",
                fontFamily: 'Georgia, "Times New Roman", serif',
                fontWeight: 500,
              }}
            >
              Cinematic Worldbuilding
            </h3>
            <p style={bodyTextStyle}>
              Songs, story, and image belong to a larger atmosphere.
            </p>
          </article>

          <article>
            <h3
              style={{
                fontSize: "24px",
                marginBottom: "12px",
                fontFamily: 'Georgia, "Times New Roman", serif',
                fontWeight: 500,
              }}
            >
              Spiritual Gravity
            </h3>
            <p style={bodyTextStyle}>
              Cosmic resonance held inside ordinary places and human truth.
            </p>
          </article>

          <article>
            <h3
              style={{
                fontSize: "24px",
                marginBottom: "12px",
                fontFamily: 'Georgia, "Times New Roman", serif',
                fontWeight: 500,
              }}
            >
              Honest Restraint
            </h3>
            <p style={bodyTextStyle}>
              Intimate, haunted, and exact without melodrama or spectacle.
            </p>
          </article>
        </section>

        <section
          id="contact"
          style={{
            padding: "48px 32px",
            borderRadius: "28px",
            border: "1px solid rgba(255,255,255,0.08)",
            background:
              "linear-gradient(135deg, rgba(255,255,255,0.03), rgba(176,78,103,0.08))",
            marginBottom: "64px",
          }}
        >
          <p style={labelStyle}>Contact</p>
          <h2
            style={{
              fontSize: "clamp(34px, 5vw, 48px)",
              lineHeight: 1.1,
              margin: "0 0 18px",
              fontFamily: 'Georgia, "Times New Roman", serif',
              fontWeight: 500,
            }}
          >
            Enter the atmosphere.
          </h2>
          <p
            style={{
              ...bodyTextStyle,
              maxWidth: "760px",
              marginBottom: "28px",
            }}
          >
            For music, visuals, story collaborations, features, or thoughtful
            connection, reach out and stay in the signal.
          </p>

          <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
            <a
              href="mailto:chad@parallaxhearts.org"
              style={{
                background: "#f3eee7",
                color: "#0b0b10",
                padding: "14px 22px",
                borderRadius: "999px",
                textDecoration: "none",
                fontWeight: 600,
              }}
            >
              chad@parallaxhearts.org
            </a>

            <a
              href="https://parallaxhearts.org"
              style={{
                border: "1px solid rgba(255,255,255,0.18)",
                color: "#f3eee7",
                padding: "14px 22px",
                borderRadius: "999px",
                textDecoration: "none",
              }}
            >
              parallaxhearts.org
            </a>
          </div>
        </section>

        <footer
          style={{
            paddingTop: "12px",
            borderTop: "1px solid rgba(255,255,255,0.08)",
            display: "flex",
            justifyContent: "space-between",
            gap: "18px",
            flexWrap: "wrap",
            color: "#a79d93",
            fontSize: "14px",
          }}
        >
          <div>© Parallax Hearts</div>
          <div>parallaxhearts.org</div>
        </footer>
      </div>
    </main>
  );
}