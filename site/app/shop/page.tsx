import Image from "next/image";
import Link from "next/link";

export default function ShopPage() {
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
              Store
            </div>

            <h1 style={{ fontSize: "clamp(36px, 7vw, 68px)", lineHeight: 0.98, marginTop: 0 }}>
              Albums, artwork, and premium releases
            </h1>

            <p style={{ fontSize: "18px", lineHeight: 1.8, color: "#c9c1b8" }}>
              This page is ready for paid albums, artwork, exclusive downloads,
              and future member-only or private release links.
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
                  Album paywall
                </strong>
                <p style={{ margin: "0 0 14px", color: "#c9c1b8", lineHeight: 1.75 }}>
                  Add your digital album description, edition details, and payment link here.
                </p>
                <a
                  href="#"
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
                  Add album payment link
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
                  Artwork paywall
                </strong>
                <p style={{ margin: "0 0 14px", color: "#c9c1b8", lineHeight: 1.75 }}>
                  Add collectible artwork, prints, private visual releases, or download bundles here.
                </p>
                <a
                  href="#"
                  style={{
                    display: "inline-block",
                    padding: "12px 20px",
                    borderRadius: "999px",
                    border: "1px solid rgba(255,255,255,0.14)",
                    color: "#f3eee7",
                    textDecoration: "none",
                  }}
                >
                  Add artwork payment link
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
                  Exclusive / private release page
                </strong>
                <p style={{ margin: 0, color: "#c9c1b8", lineHeight: 1.75 }}>
                  You can later add secret links, limited drops, supporter-only music,
                  or special visual bundles here.
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
              src="/images/project.jpg"
              alt="Parallax Hearts store page image"
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