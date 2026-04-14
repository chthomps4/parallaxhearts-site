import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
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
              About
            </div>

            <h1 style={{ fontSize: "clamp(36px, 7vw, 68px)", lineHeight: 0.98, marginTop: 0 }}>
              The atmosphere behind the work
            </h1>

            <p style={{ fontSize: "18px", lineHeight: 1.85, color: "#c9c1b8" }}>
              Parallax Hearts is a music project rooted in emotional depth, spiritual tension,
              beauty, memory, and a sense of the unseen. It is drawn to the edges between
              the intimate and the cosmic — to the quiet places where longing, devotion,
              and mystery begin to sound like one thing.
            </p>

            <p style={{ fontSize: "18px", lineHeight: 1.85, color: "#c9c1b8" }}>
              Rather than separating music from image, concept, or feeling, the project treats
              them as part of one field. Songs emerge with visual atmosphere, inner mythology,
              and the emotional afterlife of place. The goal is not only to create tracks,
              but to create a world listeners can enter.
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
                  Core feeling
                </strong>
                <p style={{ margin: 0, color: "#c9c1b8", lineHeight: 1.8 }}>
                  Reflective, intimate, haunted, devotional, cinematic, mythic, and searching.
                </p>
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
                  Creative direction
                </strong>
                <p style={{ margin: 0, color: "#c9c1b8", lineHeight: 1.8 }}>
                  Music, language, visual atmosphere, and inner symbolism arranged as one
                  unified experience rather than separate pieces.
                </p>
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
                  Intention
                </strong>
                <p style={{ margin: 0, color: "#c9c1b8", lineHeight: 1.8 }}>
                  To make work that lingers — work that opens inward, holds emotional truth,
                  and leaves room for mystery instead of explaining everything away.
                </p>
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
              src="/images/portrait.jpg"
              alt="Parallax Hearts portrait"
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