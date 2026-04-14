import type { CSSProperties } from "react";

const containerStyle: CSSProperties = {
  maxWidth: "1160px",
  margin: "0 auto",
};

const labelStyle: CSSProperties = {
  color: "#b04e67",
  textTransform: "uppercase",
  letterSpacing: "0.18em",
  fontSize: "12px",
  marginBottom: "14px",
};

const bodyStyle: CSSProperties = {
  fontSize: "19px",
  lineHeight: 1.8,
  color: "#bfb6ad",
  margin: 0,
};

const cardStyle: CSSProperties = {
  background: "rgba(255,255,255,0.03)",
  border: "1px solid rgba(255,255,255,0.08)",
  borderRadius: "24px",
  padding: "28px",
};

export default function ProjectPage() {
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
      <div style={containerStyle}>
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

        <section style={{ padding: "30px 0 40px" }}>
          <p style={labelStyle}>Current Project</p>
          <h1
            style={{
              fontSize: "clamp(42px, 7vw, 76px)",
              lineHeight: 1,
              margin: "0 0 24px",
              fontFamily: 'Georgia, "Times New Roman", serif',
              fontWeight: 600,
            }}
          >
            What the Town Keeps
          </h1>
          <p style={{ ...bodyStyle, maxWidth: "880px" }}>
            A love story shaped by aftermath, weather, crossings, and the emotional
            architecture left inside a life after a profound but unsustainable connection.
            The town is not a mystery to solve. It is the map of what remains.
          </p>
        </section>

        <section style={{ paddingBottom: "56px" }}>
          <div
            style={{
              minHeight: "420px",
              borderRadius: "28px",
              overflow: "hidden",
              border: "1px solid rgba(255,255,255,0.08)",
              backgroundImage:
                "linear-gradient(to bottom, rgba(8,9,13,0.2), rgba(8,9,13,0.5)), url('/images/project.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundColor: "#15151c",
              boxShadow: "0 20px 70px rgba(0,0,0,0.28)",
            }}
          />
        </section>

        <section
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "24px",
            paddingBottom: "76px",
          }}
        >
          <article style={cardStyle}>
            <h2 style={{ fontSize: "26px", marginTop: 0, marginBottom: "14px", fontFamily: 'Georgia, "Times New Roman", serif', fontWeight: 500 }}>
              Core Truth
            </h2>
            <p style={bodyStyle}>
              Temporary love can permanently alter the soul without becoming lesser
              for failing to last.
            </p>
          </article>

          <article style={cardStyle}>
            <h2 style={{ fontSize: "26px", marginTop: 0, marginBottom: "14px", fontFamily: 'Georgia, "Times New Roman", serif', fontWeight: 500 }}>
              Story World
            </h2>
            <p style={bodyStyle}>
              A modest railroad town, ordinary on the surface, becomes the emotional
              terrain of retained signal, altered silence, halted motion, and memory.
            </p>
          </article>

          <article style={cardStyle}>
            <h2 style={{ fontSize: "26px", marginTop: 0, marginBottom: "14px", fontFamily: 'Georgia, "Times New Roman", serif', fontWeight: 500 }}>
              Emotional Range
            </h2>
            <p style={bodyStyle}>
              Intimate, restrained, honest, devastating, and spiritually resonant.
              No villain. No reunion fantasy. No mystery-thriller turn.
            </p>
          </article>
        </section>

        <section
          style={{
            paddingBottom: "80px",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "24px",
          }}
        >
          <article style={cardStyle}>
            <p style={labelStyle}>Motif</p>
            <h3 style={{ fontSize: "28px", margin: "0 0 12px", fontFamily: 'Georgia, "Times New Roman", serif', fontWeight: 500 }}>
              Weather
            </h3>
            <p style={bodyStyle}>
              Pressure systems, rain, charged air, clear aftermath, drift, and season
              changes as emotional language.
            </p>
          </article>

          <article style={cardStyle}>
            <p style={labelStyle}>Motif</p>
            <h3 style={{ fontSize: "28px", margin: "0 0 12px", fontFamily: 'Georgia, "Times New Roman", serif', fontWeight: 500 }}>
              Rail & Crossing
            </h3>
            <p style={bodyStyle}>
              Ballast, warning bells, halted motion, timing, and the hidden structure
              beneath movement.
            </p>
          </article>

          <article style={cardStyle}>
            <p style={labelStyle}>Motif</p>
            <h3 style={{ fontSize: "28px", margin: "0 0 12px", fontFamily: 'Georgia, "Times New Roman", serif', fontWeight: 500 }}>
              Thresholds
            </h3>
            <p style={bodyStyle}>
              Porches, windows, rooms, platform edges, and the changed acoustics of
              ordinary spaces after love.
            </p>
          </article>
        </section>

        <section
          style={{
            border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: "28px",
            padding: "40px 32px",
            background:
              "linear-gradient(135deg, rgba(255,255,255,0.03), rgba(176,78,103,0.08))",
          }}
        >
          <p style={labelStyle}>Current Direction</p>
          <h2
            style={{
              fontSize: "clamp(32px, 5vw, 48px)",
              lineHeight: 1.1,
              margin: "0 0 18px",
              fontFamily: 'Georgia, "Times New Roman", serif',
              fontWeight: 500,
            }}
          >
            Album, story, and visual atmosphere in one connected world.
          </h2>
          <p style={{ ...bodyStyle, maxWidth: "860px" }}>
            What the Town Keeps is the emotional center of the current Parallax Hearts
            phase. Songs, visual language, story fragments, and future releases all
            move through this same atmosphere of residue, motion, signal, and quiet
            inner change.
          </p>
        </section>
      </div>
    </main>
  );
}