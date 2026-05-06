import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Parallax Hearts for collaboration, booking, press, listener messages, visual work, or questions about What the Town Keeps.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact | Parallax Hearts",
    description:
      "Reach Parallax Hearts for collaboration, booking, press, listener messages, and questions about What the Town Keeps.",
    url: "https://parallaxhearts.org/contact",
    siteName: "Parallax Hearts",
    images: [
      {
        url: "/images/world.jpg",
        width: 1200,
        height: 630,
        alt: "Contact Parallax Hearts",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact | Parallax Hearts",
    description:
      "Reach Parallax Hearts for collaboration, booking, press, listener messages, and questions about What the Town Keeps.",
    images: ["/images/world.jpg"],
  },
};

export default function ContactPage() {
  return (
    <main className="site-shell">
      <section style={{ padding: "34px 0 18px" }}>
        <div className="site-container">
          <header
            style={{
              minHeight: "72px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              gap: "20px",
              flexWrap: "wrap",
              padding: "16px 0",
              borderBottom: "1px solid var(--line)",
            }}
          >
            <Link
              href="/"
              style={{
                color: "var(--paper)",
                textDecoration: "none",
                fontSize: "clamp(22px, 4vw, 32px)",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                lineHeight: 1,
              }}
            >
              Parallax Hearts
            </Link>

            <nav
              style={{
                display: "flex",
                gap: "16px",
                flexWrap: "wrap",
                alignItems: "center",
              }}
            >
              {[
                ["Home", "/"],
                ["Music", "/music"],
                ["Story", "/project"],
                ["Support", "/support"],
                ["Contact", "/contact"],
              ].map(([label, href]) => (
                <Link
                  key={label}
                  href={href}
                  style={{
                    color: "var(--paper-soft)",
                    textDecoration: "none",
                    fontSize: "15px",
                  }}
                >
                  {label}
                </Link>
              ))}
            </nav>
          </header>
        </div>
      </section>

      <section style={{ padding: "54px 0 88px" }}>
        <div className="site-container">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "minmax(0, 1fr) minmax(300px, 0.8fr)",
              gap: "28px",
              alignItems: "stretch",
            }}
          >
            <div
              className="glass-panel"
              style={{
                padding: "clamp(28px, 6vw, 58px)",
                position: "relative",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "radial-gradient(circle at 18% 10%, rgba(210,181,139,0.15), transparent 30%), radial-gradient(circle at 82% 20%, rgba(127,141,155,0.12), transparent 34%)",
                  pointerEvents: "none",
                }}
              />

              <div style={{ position: "relative", zIndex: 2 }}>
                <p className="kicker">Contact</p>

                <h1
                  style={{
                    margin: 0,
                    fontSize: "clamp(46px, 8vw, 86px)",
                    lineHeight: 0.9,
                    letterSpacing: "-0.07em",
                    fontWeight: 400,
                    maxWidth: "760px",
                  }}
                >
                  Reach out.
                </h1>

                <p
                  className="body-copy"
                  style={{
                    margin: "24px 0 0",
                    maxWidth: "760px",
                    fontSize: "19px",
                  }}
                >
                  For collaboration, booking, press, listener messages, visual
                  work, or anything connected to Parallax Hearts and{" "}
                  <em>What the Town Keeps</em>, use the contact points below.
                </p>

                <p
                  className="body-copy"
                  style={{
                    margin: "18px 0 0",
                    maxWidth: "760px",
                  }}
                >
                  The project is still growing through songs, story fragments,
                  images, videos, and the world of Vallen. Thoughtful messages
                  are welcome.
                </p>

                <div
                  style={{
                    display: "grid",
                    gap: "16px",
                    marginTop: "30px",
                    maxWidth: "680px",
                  }}
                >
                  <div
                    style={{
                      border: "1px solid var(--line)",
                      borderRadius: "20px",
                      padding: "22px",
                      background: "rgba(255,255,255,0.035)",
                    }}
                  >
                    <strong
                      style={{
                        display: "block",
                        marginBottom: "8px",
                        color: "var(--gold)",
                        textTransform: "uppercase",
                        letterSpacing: "0.14em",
                        fontSize: "12px",
                      }}
                    >
                      Email
                    </strong>
                    <a
                      href="mailto:chad@parallaxhearts.org"
                      style={{
                        color: "var(--paper)",
                        textDecoration: "none",
                        fontSize: "18px",
                      }}
                    >
                      chad@parallaxhearts.org
                    </a>
                  </div>

                  <div
                    style={{
                      border: "1px solid var(--line)",
                      borderRadius: "20px",
                      padding: "22px",
                      background: "rgba(255,255,255,0.035)",
                    }}
                  >
                    <strong
                      style={{
                        display: "block",
                        marginBottom: "8px",
                        color: "var(--gold)",
                        textTransform: "uppercase",
                        letterSpacing: "0.14em",
                        fontSize: "12px",
                      }}
                    >
                      Ko-fi
                    </strong>
                    <a
                      href="https://ko-fi.com/parallaxhearts"
                      target="_blank"
                      rel="noreferrer"
                      style={{
                        color: "var(--paper)",
                        textDecoration: "none",
                        fontSize: "18px",
                      }}
                    >
                      ko-fi.com/parallaxhearts
                    </a>
                  </div>

                  <div
                    style={{
                      border: "1px solid var(--line)",
                      borderRadius: "20px",
                      padding: "22px",
                      background: "rgba(255,255,255,0.035)",
                    }}
                  >
                    <strong
                      style={{
                        display: "block",
                        marginBottom: "8px",
                        color: "var(--gold)",
                        textTransform: "uppercase",
                        letterSpacing: "0.14em",
                        fontSize: "12px",
                      }}
                    >
                      Facebook
                    </strong>
                    <a
                      href="https://www.facebook.com/parallaxhearts"
                      target="_blank"
                      rel="noreferrer"
                      style={{
                        color: "var(--paper)",
                        textDecoration: "none",
                        fontSize: "18px",
                      }}
                    >
                      @parallaxhearts
                    </a>
                  </div>
                </div>

                <div
                  style={{
                    marginTop: "30px",
                    display: "flex",
                    gap: "12px",
                    flexWrap: "wrap",
                  }}
                >
                  <Link href="/music" className="primary-button">
                    Listen to the Album
                  </Link>

                  <Link href="/support" className="secondary-button">
                    Support the Project
                  </Link>
                </div>
              </div>
            </div>

            <div
              className="glass-panel"
              style={{
                borderRadius: "28px",
                overflow: "hidden",
                minHeight: "460px",
              }}
            >
              <Image
                src="/images/world.jpg"
                alt="Parallax Hearts contact page image"
                width={1200}
                height={1400}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  minHeight: "460px",
                }}
              />
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 900px) {
          section div[style*="grid-template-columns"] {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </main>
  );
}