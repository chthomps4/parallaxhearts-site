import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background:
          "radial-gradient(circle at top, rgba(110,78,146,0.22), transparent 35%), radial-gradient(circle at right, rgba(214,168,107,0.12), transparent 28%), linear-gradient(180deg, #08080d 0%, #0b0b12 45%, #11111b 100%)",
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
            padding: "72px 0 48px",
            display: "grid",
            gridTemplateColumns: "1.15fr 0.85fr",
            gap: "28px",
            alignItems: "center",
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
              Cosmic · Spiritual · Musical
            </div>

            <h1
              style={{
                fontSize: "clamp(42px, 8vw, 82px)",
                lineHeight: 0.95,
                margin: "0 0 18px",
                fontWeight: 600,
              }}
            >
              Parallax Hearts
            </h1>

            <p
              style={{
                fontSize: "18px",
                lineHeight: 1.8,
                color: "#c9c1b8",
                maxWidth: "720px",
                margin: 0,
              }}
            >
              A living music project shaped by atmosphere, inner vision, mythic feeling,
              and the unseen currents beneath ordinary life. Parallax Hearts is a home
              for songs, resonance, and the deeper spirit moving through them.
            </p>

            <div style={{ display: "flex", gap: "14px", flexWrap: "wrap", marginTop: "28px" }}>
              <Link
                href="/music"
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
                Enter the Music
              </Link>

              <a
                href="https://parallaxhearts.bandcamp.com/album/what-the-town-keeps"
                target="_blank"
                rel="noreferrer"
                style={{
                  display: "inline-block",
                  padding: "12px 20px",
                  borderRadius: "999px",
                  border: "1px solid rgba(255,255,255,0.14)",
                  color: "#f3eee7",
                  textDecoration: "none",
                }}
              >
                Support on Bandcamp
              </a>
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
              alt="Parallax Hearts hero image"
              width={1200}
              height={1400}
              style={{ width: "100%", height: "100%", objectFit: "cover", minHeight: "520px" }}
              priority
            />
          </div>
        </section>

        <section style={{ padding: "12px 0 72px" }}>
          <h2 style={{ fontSize: "30px", marginBottom: "12px" }}>A signal from somewhere deeper</h2>
          <p style={{ color: "#c9c1b8", lineHeight: 1.8, maxWidth: "800px" }}>
            Parallax Hearts moves between music, image, memory, symbol, longing,
            and revelation. The work carries a reflective and visionary tone —
            rooted in emotional truth, spiritual atmosphere, and the sense that
            art can become a portal.
          </p>

          <div
            style={{
              marginTop: "28px",
              display: "grid",
              gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
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
              <h3 style={{ marginTop: 0 }}>Music</h3>
              <p style={{ color: "#c9c1b8", lineHeight: 1.75 }}>
                Songs, releases, listening links, and the current world of the project.
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
              <h3 style={{ marginTop: 0 }}>Project</h3>
              <p style={{ color: "#c9c1b8", lineHeight: 1.75 }}>
                Visual atmosphere, themes, mythology, and the deeper frame around the music.
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
              <h3 style={{ marginTop: 0 }}>Bandcamp</h3>
              <p style={{ color: "#c9c1b8", lineHeight: 1.75 }}>
                The main place to listen, support the release, and stay connected to new music.
              </p>
            </div>
          </div>
        </section>

        <footer
          style={{
            padding: "12px 0 36px",
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
          <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
            <a href="https://parallaxhearts.org" style={{ textDecoration: "none" }}>
              parallaxhearts.org
            </a>
            <a
              href="https://parallaxhearts.bandcamp.com/album/what-the-town-keeps"
              target="_blank"
              rel="noreferrer"
              style={{ textDecoration: "none" }}
            >
              Bandcamp
            </a>
            <a href="mailto:chad@parallaxhearts.org" style={{ textDecoration: "none" }}>
              chad@parallaxhearts.org
            </a>
          </div>
        </footer>
      </div>
    </main>
  );
}