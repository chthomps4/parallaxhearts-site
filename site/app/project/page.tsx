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

          <p style={{ fontSize: "18px", lineHeight: 1.85, color: "#c9c1b8", maxWidth: "900px" }}>
            Parallax Hearts is more than a collection of songs. It is an unfolding atmosphere —
            a project world shaped by memory, symbolic weight, spiritual tension, and the
            emotional geography of place. Each release extends that world, carrying new shades
            of meaning while remaining connected to the same deeper current.
          </p>

          <p style={{ fontSize: "18px", lineHeight: 1.85, color: "#c9c1b8", maxWidth: "900px" }}>
            The project is drawn to thresholds: between town and wilderness, silence and revelation,
            grief and beauty, the visible and the hidden. The visual language, the titles,
            the textures of the songs, and the surrounding ideas all point toward a world that
            feels familiar, but charged — as if something sacred or unresolved is moving just
            behind what can be seen.
          </p>

          <p style={{ fontSize: "18px", lineHeight: 1.85, color: "#c9c1b8", maxWidth: "900px" }}>
            Parallax Hearts returns again and again to the question of what remains: what a place keeps,
            what a life buries, what silence protects, and what art can reveal without fully explaining.
            That tension is part of the project’s pulse.
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
              <p style={{ color: "#c9c1b8", lineHeight: 1.8 }}>
                The project lives in the tension between what is held and what is hidden —
                between memory and haunting, tenderness and distance, home and estrangement.
                Its mythology is not fixed lore so much as a recurring spiritual weather.
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
              <p style={{ color: "#c9c1b8", lineHeight: 1.8 }}>
                <em>What the Town Keeps</em> centers the emotional and symbolic terrain of place:
                what settles into the walls, what lingers in a name, what a town carries long after
                the visible story appears to move on.
              </p>
            </div>
          </div>

          <div
            style={{
              marginTop: "22px",
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.09)",
              borderRadius: "24px",
              padding: "28px",
            }}
          >
            <h2 style={{ marginTop: 0, fontSize: "28px" }}>Themes moving through the work</h2>
            <p style={{ color: "#c9c1b8", lineHeight: 1.85, marginBottom: 0 }}>
              Place as spirit. Memory as residue. Beauty touched by ache. The sacred hidden
              inside the ordinary. Emotional inheritance. Silence as testimony. Music as a way
              of approaching what cannot be fully named, but can still be felt.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}