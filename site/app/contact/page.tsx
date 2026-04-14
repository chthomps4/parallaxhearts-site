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

export default function ContactPage() {
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
          <p style={labelStyle}>Contact</p>
          <h1
            style={{
              fontSize: "clamp(42px, 7vw, 72px)",
              lineHeight: 1,
              margin: "0 0 24px",
              fontFamily: 'Georgia, "Times New Roman", serif',
              fontWeight: 600,
            }}
          >
            Stay in the signal.
          </h1>
          <p style={{ ...bodyStyle, maxWidth: "820px" }}>
            For music, visuals, story collaboration, features, or direct connection,
            reach out here.
          </p>
        </section>

        <section
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "24px",
            paddingBottom: "80px",
          }}
        >
          <article style={cardStyle}>
            <p style={labelStyle}>Email</p>
            <h2
              style={{
                fontSize: "30px",
                margin: "0 0 14px",
                fontFamily: 'Georgia, "Times New Roman", serif',
                fontWeight: 500,
              }}
            >
              Direct Contact
            </h2>
            <a
              href="mailto:chad@parallaxhearts.org"
              style={{
                color: "#f3eee7",
                textDecoration: "none",
                fontSize: "20px",
                lineHeight: 1.7,
              }}
            >
              chad@parallaxhearts.org
            </a>
          </article>

          <article style={cardStyle}>
            <p style={labelStyle}>Website</p>
            <h2
              style={{
                fontSize: "30px",
                margin: "0 0 14px",
                fontFamily: 'Georgia, "Times New Roman", serif',
                fontWeight: 500,
              }}
            >
              Home Base
            </h2>
            <a
              href="https://parallaxhearts.org"
              style={{
                color: "#f3eee7",
                textDecoration: "none",
                fontSize: "20px",
                lineHeight: 1.7,
              }}
            >
              parallaxhearts.org
            </a>
          </article>

          <article style={cardStyle}>
            <p style={labelStyle}>Social</p>
            <h2
              style={{
                fontSize: "30px",
                margin: "0 0 14px",
                fontFamily: 'Georgia, "Times New Roman", serif',
                fontWeight: 500,
              }}
            >
              Next Signal
            </h2>
            <p style={bodyStyle}>
              Add your preferred social link here when ready.
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
          <p style={labelStyle}>Open To</p>
          <h2
            style={{
              fontSize: "clamp(32px, 5vw, 48px)",
              lineHeight: 1.1,
              margin: "0 0 18px",
              fontFamily: 'Georgia, "Times New Roman", serif',
              fontWeight: 500,
            }}
          >
            Music, visuals, story-led collaboration, and thoughtful conversation.
          </h2>
          <p style={{ ...bodyStyle, maxWidth: "840px" }}>
            Parallax Hearts welcomes inquiries that align with the world, tone, and
            emotional depth of the project. Reach out by email to begin.
          </p>
        </section>
      </div>
    </main>
  );
}