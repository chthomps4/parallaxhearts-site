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
            <Link href="/phylax" style={{ textDecoration: "none" }}>PHYLAX</Link>
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
              Support Parallax Hearts through direct purchase links for music and visual work.
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
                  Album purchase
                </strong>
                <p style={{ margin: "0 0 14px", color: "#c9c1b8", lineHeight: 1.75 }}>
                  Purchase the current album directly through PayPal.
                </p>

                <a
                  href="PASTE_YOUR_LIVE_PAYPAL_ALBUM_BUTTON_OR_PAYMENT_LINK_HERE"
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
                  Buy Album with PayPal
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
                  Artwork purchase
                </strong>
                <p style={{ margin: "0 0 14px", color: "#c9c1b8", lineHeight: 1.75 }}>
                  Buy artwork, prints, or exclusive visual offerings through PayPal.
                </p>

                <a
                  href="PASTE_YOUR_LIVE_PAYPAL_ARTWORK_BUTTON_OR_PAYMENT_LINK_HERE"
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
                  Buy Artwork with PayPal
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
                  Note
                </strong>
                <p style={{ margin: 0, color: "#c9c1b8", lineHeight: 1.75 }}>
                  Use live PayPal hosted links here. Do not place sandbox keys or secret credentials in the page code.
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