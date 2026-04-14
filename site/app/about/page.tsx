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

const titleStyle: CSSProperties = {
  fontSize: "clamp(40px, 7vw, 72px)",
  lineHeight: 1,
  margin: "0 0 24px",
  fontFamily: 'Georgia, "Times New Roman", serif',
  fontWeight: 600,
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

export default function AboutPage() {
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

        <section style={{ padding: "30px 0 80px" }}>
          <p style={labelStyle}>About</p>
          <h1 style={titleStyle}>
            A cinematic world built through feeling, memory, and signal.
          </h1>
          <p style={{ ...bodyStyle, maxWidth: "840px" }}>
            Parallax Hearts is a music and story world shaped by atmosphere, emotional
            architecture, and the spiritual charge that lingers after real connection.
            The work is intimate, restrained, literary, and human. It moves through
            weather, crossings, thresholds, silence, and the altered inner spaces love
            leaves behind.
          </p>
        </section>

        <section
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "24px",
            paddingBottom: "80px",
          }}
        >
          <article style={cardStyle}>
            <h2 style={{ fontSize: "28px", marginTop: 0, marginBottom: "14px", fontFamily: 'Georgia, "Times New Roman", serif', fontWeight: 500 }}>
              The Tone
            </h2>
            <p style={bodyStyle}>
              Emotionally exact, spiritually resonant, and haunted without becoming
              supernatural. The project values intimacy over spectacle and meaning over noise.
            </p>
          </article>

          <article style={cardStyle}>
            <h2 style={{ fontSize: "28px", marginTop: 0, marginBottom: "14px", fontFamily: 'Georgia, "Times New Roman", serif', fontWeight: 500 }}>
              The Language
            </h2>
            <p style={bodyStyle}>
              Rail lines, weather pressure, signal drift, rooms, windows, warnings,
              memory, motion, and staying. These are not decorations. They are the emotional
              grammar of the site and the music.
            </p>
          </article>

          <article style={cardStyle}>
            <h2 style={{ fontSize: "28px", marginTop: 0, marginBottom: "14px", fontFamily: 'Georgia, "Times New Roman", serif', fontWeight: 500 }}>
              The Aim
            </h2>
            <p style={bodyStyle}>
              To create work that feels lived in and lasting. Songs, visuals, and narrative
              fragments that hold spiritual gravity while staying grounded in ordinary human truth.
            </p>
          </article>
        </section>

        <section
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "32px",
            alignItems: "center",
            paddingBottom: "90px",
          }}
        >
          <div
            style={{
              minHeight: "420px",
              borderRadius: "26px",
              backgroundImage:
                "linear-gradient(to bottom, rgba(8,9,13,0.15), rgba(8,9,13,0.45)), url('/images/portrait.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundColor: "#15151c",
              border: "1px solid rgba(255,255,255,0.08)",
            }}
          />

          <div>
            <p style={labelStyle}>Parallax Hearts</p>
            <h2
              style={{
                fontSize: "clamp(32px, 5vw, 48px)",
                lineHeight: 1.1,
                margin: "0 0 18px",
                fontFamily: 'Georgia, "Times New Roman", serif',
                fontWeight: 500,
              }}
            >
              Not a generic band page. A world with atmosphere and consequence.
            </h2>
            <p style={{ ...bodyStyle, marginBottom: "18px" }}>
              Parallax Hearts exists at the meeting point of music, emotional aftermath,
              and visual worldbuilding. It is interested in what remains after intensity,
              what changes a person without staying, and what the soul keeps even after
              a story ends.
            </p>
            <p style={bodyStyle}>
              The result is a body of work that feels cosmic and spiritual without losing
              touch with streets, rooms, coffee, rain, light, and the human scale of love.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}