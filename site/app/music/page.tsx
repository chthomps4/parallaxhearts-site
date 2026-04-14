import Image from "next/image";
import Link from "next/link";

export default function MusicPage() {
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
              Music
            </div>

            <h1 style={{ fontSize: "clamp(36px, 7vw, 68px)", lineHeight: 0.98, marginTop: 0 }}>
              What the Town Keeps
            </h1>

            <p style={{ fontSize: "18px", lineHeight: 1.85, color: "#c9c1b8" }}>
              The current Parallax Hearts release gathers atmosphere, place, memory,
              and hidden emotional weight into a body of work that feels both intimate
              and haunted. It leans into the mystery of what remains — what a town holds,
              what silence protects, and what continues to echo after the visible moment passes.
            </p>

            <p style={{ fontSize: "18px", lineHeight: 1.85, color: "#c9c1b8" }}>
              This release is part of a wider creative world, but it also stands on its own:
              a listening experience shaped by mood, inwardness, and the tension between
              closeness and distance. It asks to be sat with, returned to, and allowed to unfold.
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
                <strong style={{ display: "block", marginBottom: "10px", color: "#e6cfb0" }}>
                  Listen on Bandcamp
                </strong>

                <p style={{ margin: "0 0 16px", color: "#c9c1b8", lineHeight: 1.8 }}>
                  Explore the release, follow the project, and support the music directly through Bandcamp.
                </p>

                <div
                  style={{
                    borderRadius: "16px",
                    overflow: "hidden",
                    border: "1px solid rgba(255,255,255,0.08)",
                    background: "#f5f5f5",
                    padding: "12px",
                  }}
                >
                  <iframe
                    title="What the Town Keeps by Parallax Hearts"
                    style={{ border: 0, width: "100%", maxWidth: "350px", height: "470px" }}
                    src="https://bandcamp.com/EmbeddedPlayer/album=1683231520/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/"
                    seamless
                  >
                    <a href="https://parallaxhearts.bandcamp.com/album/what-the-town-keeps">
                      What the Town Keeps by Parallax Hearts
                    </a>
                  </iframe>
                </div>

                <div style={{ marginTop: "14px" }}>
                  <a
                    href="https://parallaxhearts.bandcamp.com/album/what-the-town-keeps"
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      display: "inline-block",
                      padding: "12px 20px",
                      borderRadius: "999px",
                      background: "linear-gradient(135deg, #d6a86b, #b98953)",
                      color: "#17120f",
                      textDecoration: "none",
                      fontWeight: 700,
                    }}
                  >
                    Open Bandcamp
                  </a>
                </div>
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
                  Support the release
                </strong>
                <p style={{ margin: 0, color: "#c9c1b8", lineHeight: 1.8 }}>
                  Bandcamp is the central support path for this release — direct, simple,
                  and focused on the music itself.
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
                  Listening note
                </strong>
                <p style={{ margin: 0, color: "#c9c1b8", lineHeight: 1.8 }}>
                  Some records ask for immediate reaction. Others reveal themselves gradually.
                  <em> What the Town Keeps </em> belongs to the second kind — a release that
                  opens deeper with time, repetition, and quiet attention.
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
              src="/images/hero.jpg"
              alt="Parallax Hearts music page image"
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