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
            <Link href="/about" style={{ textDecoration: "none", color: "#f3eee7" }}>
              About
            </Link>
            <Link href="/project" style={{ textDecoration: "none", color: "#f3eee7" }}>
              Project
            </Link>
            <Link href="/music" style={{ textDecoration: "none", color: "#f3eee7" }}>
              Music
            </Link>
            <Link href="/contact" style={{ textDecoration: "none", color: "#f3eee7" }}>
              Contact
            </Link>
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
              Parallax Hearts is a music project shaped by atmosphere, memory, longing,
              inner vision, and the quiet forces that move beneath the surface of ordinary life.
              The work lives where song becomes landscape, where feeling becomes image, and where
              spiritual searching leaves a trace in sound.
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
                href="https://ko-fi.com/parallaxhearts"
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
                Support on Ko-fi
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

        <section style={{ padding: "12px 0 36px" }}>
          <h2 style={{ fontSize: "30px", marginBottom: "12px" }}>A signal from somewhere deeper</h2>
          <p style={{ color: "#c9c1b8", lineHeight: 1.85, maxWidth: "860px" }}>
            The work of Parallax Hearts moves between devotion and distance, intimacy and myth,
            town and threshold, body and spirit. It is interested in the places where memory
            becomes haunted, where beauty is mixed with ache, and where music can open a door
            into what words alone cannot fully hold. The songs are not just meant to be heard —
            they are meant to be inhabited, revisited, and felt more deeply over time.
          </p>
        </section>

        <section style={{ padding: "0 0 72px" }}>
          <div
            style={{
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
              <p style={{ color: "#c9c1b8", lineHeight: 1.8 }}>
                Songs, releases, and evolving bodies of work that carry emotional weight,
                spiritual tension, and a sense of atmosphere that lingers after the last note.
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
              <h3 style={{ marginTop: 0 }}>Project World</h3>
              <p style={{ color: "#c9c1b8", lineHeight: 1.8 }}>
                A larger field of imagery, ideas, symbols, and emotional landscapes surrounding
                the music — a place where the visual and the unseen meet.
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
              <h3 style={{ marginTop: 0 }}>Ko-fi</h3>
              <p style={{ color: "#c9c1b8", lineHeight: 1.8 }}>
                The place to directly support Parallax Hearts, pick up releases,
                and help fund future music, visuals, and new work.
              </p>
            </div>
          </div>
        </section>

        <section style={{ padding: "0 0 72px" }}>
          <div
            style={{
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.09)",
              borderRadius: "24px",
              padding: "28px",
            }}
          >
            <h2 style={{ marginTop: 0, fontSize: "28px" }}>Current Release</h2>
            <p style={{ color: "#c9c1b8", lineHeight: 1.85, maxWidth: "860px" }}>
              <em>What the Town Keeps</em> gathers the emotional and atmospheric spirit of the
              project into a release shaped by memory, place, silence, and the unseen pressure
              of what remains. It carries the feeling of things buried but still speaking,
              familiar streets touched by mystery, and the sense that what is hidden often
              leaves the deepest imprint.
            </p>
            <div style={{ marginTop: "18px" }}>
              <a
                href="https://ko-fi.com/parallaxhearts"
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
                Get it on Ko-fi
              </a>
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
            <a href="https://parallaxhearts.org" style={{ textDecoration: "none", color: "#a79d93" }}>
              parallaxhearts.org
            </a>
            <a
              href="https://ko-fi.com/parallaxhearts"
              target="_blank"
              rel="noreferrer"
              style={{ textDecoration: "none", color: "#a79d93" }}
            >
              Ko-fi
            </a>
            <a href="mailto:chad@parallaxhearts.org" style={{ textDecoration: "none", color: "#a79d93" }}>
              chad@parallaxhearts.org
            </a>
          </div>
        </footer>
      </div>
    </main>
  );
}