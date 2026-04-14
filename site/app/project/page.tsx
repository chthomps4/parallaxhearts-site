import Image from "next/image";
import Link from "next/link";

export default function ProjectPage() {
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
            <Link href="/shop" style={{ textDecoration: "none" }}>Store</Link>
            <Link href="/contact" style={{ textDecoration: "none" }}>Contact</Link>
          </nav>
        </header>

        <section style={{ padding: "60px 0 80px" }}>
          <div
            style={{
              color: "#e6cfb0",
              textTransform: "uppercase",
              letterSpacing: "0.16em",
              fontSize: "12px",
              marginBottom: "18px",
            }}
          >
            Project
          </div>

          <h1 style={{ fontSize: "clamp(36px, 7vw, 68px)", lineHeight: 0.98, marginTop: 0 }}>
            A world built through sound and image
          </h1>

          <p style={{ fontSize: "18px", lineHeight: 1.8, color: "#c9c1b8", maxWidth: "820px" }}>
            This section can hold the evolving story of the project, album-era
            concepts, visual motifs, lyrics fragments, statements of intent, and
            deeper thematic threads.
          </p>

          <div
            style={{
              marginTop: "28px",
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "22px",
            }}
          >
            <div
              style={{
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: "24px",
                overflow: "hidden",
              }}
            >
              <Image
                src="/images/project.jpg"
                alt="Parallax Hearts project image"
                width={1200}
                height={900}
                style={{ width: "100%", height: "100%", objectFit: "cover", minHeight: "320px" }}
              />
            </div>

            <div
              style={{
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: "24px",
                overflow: "hidden",
              }}
            >
              <Image
                src="/images/world.jpg"
                alt="Parallax Hearts world image"
                width={1200}
                height={900}
                style={{ width: "100%", height: "100%", objectFit: "cover", minHeight: "320px" }}
              />
            </div>
          </div>

          <div
            style={{
              marginTop: "22px",
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "22px",
            }}
          >
            <div
              style={{
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: "24px",
                padding: "22px",
              }}
            >
              <h3 style={{ marginTop: 0 }}>Creative mythos</h3>
              <p style={{ color: "#c9c1b8", lineHeight: 1.75 }}>
                Use this area for the deeper language of the project — the spiritual,
                cosmic, poetic, and emotional frame around the music.
              </p>
            </div>

            <div
              style={{
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: "24px",
                padding: "22px",
              }}
            >
              <h3 style={{ marginTop: 0 }}>Current era</h3>
              <p style={{ color: "#c9c1b8", lineHeight: 1.75 }}>
                Use this block for your active release cycle, visual chapter, or featured
                project statement tied to the latest album or body of artwork.
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}