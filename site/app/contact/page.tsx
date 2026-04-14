import Image from "next/image";
import Link from "next/link";

export default function ContactPage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background:
          "radial-gradient(circle at top, rgba(110,78,146,0.22), transparent 35%), linear-gradient(180deg, #08080d 0%, #0b0b12 45%, #11111b 100%)",
        color: "#f3eee7",
        fontFamily: "Georgia, serif",
      }}
    >
      <div style={{ width: "min(1160px, calc(100% - 32px))", margin: "0 auto" }}>
        <header
          style={{
            padding: "24px 0",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "20px",
            flexWrap: "wrap",
            borderBottom: "1px solid rgba(255,255,255,0.08)",
          }}
        >
          <Link
            href="/"
            style={{
              fontSize: "22px",
              fontWeight: 600,
              letterSpacing: "0.06em",
              color: "#f3eee7",
              textDecoration: "none",
              textTransform: "uppercase",
            }}
          >
            Parallax Hearts
          </Link>

          <nav style={{ display: "flex", gap: "20px", flexWrap: "wrap", fontSize: "15px" }}>
            <Link href="/about" style={{ textDecoration: "none" }}>About</Link>
            <Link href="/project" style={{ textDecoration: "none" }}>Project</Link>
            <Link href="/music" style={{ textDecoration: "none" }}>Music</Link>
            <Link href="/contact" style={{ textDecoration: "none" }}>Contact</Link>
          </nav>
        </header>

        <section
          style={{
            padding: "60px 0 80px",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "28px",
            alignItems: "start",
          }}
        >
          <div>
            <div
              style={{
                color: "#e6cfb0",
                textTransform: "uppercase",
                letterSpacing: "0.16em",
                fontSize: "12px",
                marginBottom: "18px",
              }}
            >
              Contact
            </div>

            <h1 style={{ fontSize: "clamp(36px, 7vw, 68px)", lineHeight: 0.98, marginTop: 0 }}>
              Reach out
            </h1>

            <p style={{ fontSize: "18px", lineHeight: 1.85, color: "#c9c1b8" }}>
              For collaboration, press, questions, creative conversation, or anything related
              to the music and the wider project, reach out through the contact points below.
            </p>

            <p style={{ fontSize: "18px", lineHeight: 1.85, color: "#c9c1b8" }}>
              Parallax Hearts is still growing, and direct connection matters.
              Whether you are reaching out about the release, the visual world of the project,
              or simply because the work resonated with you, it is welcomed.
            </p>

            <p style={{ fontSize: "18px", lineHeight: 1.85, color: "#c9c1b8" }}>
              The project is still unfolding, and every thoughtful connection helps strengthen what comes next.
              Messages from listeners, collaborators, and kindred spirits are part of that unfolding.
            </p>

            <div style={{ display: "grid", gap: "18px", marginTop: "24px" }}>
              <div
                style={{
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  borderRadius: "20px",
                  padding: "22px",
                }}
              >
                <strong style={{ display: "block", marginBottom: "8px", color: "#e6cfb0" }}>
                  Email
                </strong>
                <a href="mailto:chad@parallaxhearts.org" style={{ color: "#f3eee7", textDecoration: "none" }}>
                  chad@parallaxhearts.org
                </a>
              </div>

              <div
                style={{
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  borderRadius: "20px",
                  padding: "22px",
                }}
              >
                <strong style={{ display: "block", marginBottom: "8px", color: "#e6cfb0" }}>
                  Bandcamp
                </strong>
                <a
                  href="https://parallaxhearts.bandcamp.com/album/what-the-town-keeps"
                  target="_blank"
                  rel="noreferrer"
                  style={{ color: "#f3eee7", textDecoration: "none" }}
                >
                  parallaxhearts.bandcamp.com
                </a>
              </div>

              <div
                style={{
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  borderRadius: "20px",
                  padding: "22px",
                }}
              >
                <strong style={{ display: "block", marginBottom: "8px", color: "#e6cfb0" }}>
                  Facebook
                </strong>
                <a
                  href="https://www.facebook.com/parallaxhearts"
                  target="_blank"
                  rel="noreferrer"
                  style={{ color: "#f3eee7", textDecoration: "none" }}
                >
                  @parallaxhearts
                </a>
              </div>
            </div>
          </div>

          <div
            style={{
              background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: "24px",
              overflow: "hidden",
              boxShadow: "0 18px 60px rgba(0,0,0,0.35)",
            }}
          >
            <Image
              src="/images/world.jpg"
              alt="Parallax Hearts contact page image"
              width={1200}
              height={1400}
              style={{ width: "100%", height: "100%", objectFit: "cover", minHeight: "420px" }}
            />
          </div>
        </section>
      </div>
    </main>
  );
}