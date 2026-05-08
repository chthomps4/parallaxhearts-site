import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

const koFiUrl = "https://ko-fi.com/parallaxhearts";
const facebookUrl = "https://www.facebook.com/parallaxhearts";
const freeIntroCourseUrl =
  "https://www.skool.com/forbidden-knowledge-3060/classroom/64b17ccf?md=20063ee25dcf452f98717008a96ff36f";

export const metadata: Metadata = {
  title: "Contact | Parallax Hearts + Field Notes",
  description:
    "Contact Parallax Hearts for music, What the Town Keeps, Field Notes, Forbidden Knowledge, Skool course questions, Ko-fi support, collaboration, press, and listener messages.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact | Parallax Hearts",
    description:
      "Reach Parallax Hearts for music, What the Town Keeps, Field Notes, Forbidden Knowledge, Skool course questions, Ko-fi support, and collaboration.",
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
      "Reach Parallax Hearts for music, What the Town Keeps, Field Notes, Forbidden Knowledge, Skool course questions, Ko-fi support, and collaboration.",
    images: ["/images/world.jpg"],
  },
};

const inquiryLanes = [
  {
    title: "Music / Parallax Hearts",
    text: "Listening, songs, collaboration, booking, press, or general messages about the band/project.",
  },
  {
    title: "What the Town Keeps",
    text: "Story world, Vallen, graphic novel material, visual archive, lyrics, album art, or related creative work.",
  },
  {
    title: "Field Notes / Forbidden Knowledge",
    text: "Source trails, evidence labels, the Handbook, ancient knowledge research, lost etymology, or the 5-Level Rabbit Hole Method.",
  },
  {
    title: "Skool / Course Questions",
    text: "Free intro course access, Forbidden Knowledge Circle questions, or future Inner Archive interest.",
  },
  {
    title: "Ko-fi / Support",
    text: "Membership tiers, digital shop items, purchases, bundles, or direct support questions.",
  },
];

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
                ["Field Notes", "/field-notes"],
                ["Shop", "/shop"],
                ["Support", "/support"],
                ["Contact", "/contact"],
              ].map(([label, href]) => (
                <Link
                  key={label}
                  href={href}
                  style={{
                    color:
                      label === "Contact"
                        ? "var(--gold)"
                        : "var(--paper-soft)",
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
                  Reach out through the right door.
                </h1>

                <p
                  className="body-copy"
                  style={{
                    margin: "24px 0 0",
                    maxWidth: "780px",
                    fontSize: "19px",
                  }}
                >
                  For Parallax Hearts, <em>What the Town Keeps</em>, Field
                  Notes, Forbidden Knowledge, Skool course questions, Ko-fi
                  support, collaboration, press, or listener messages, use the
                  contact points below.
                </p>

                <div
                  style={{
                    display: "grid",
                    gap: "16px",
                    marginTop: "30px",
                    maxWidth: "720px",
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
                      href={koFiUrl}
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
                      Free Skool Course
                    </strong>
                    <a
                      href={freeIntroCourseUrl}
                      target="_blank"
                      rel="noreferrer"
                      style={{
                        color: "var(--paper)",
                        textDecoration: "none",
                        fontSize: "18px",
                      }}
                    >
                      Start the free intro course
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
                      href={facebookUrl}
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
                  <Link href="/field-notes" className="primary-button">
                    Open Field Notes
                  </Link>

                  <Link href="/support" className="secondary-button">
                    Support the Project
                  </Link>

                  <Link href="/music" className="secondary-button">
                    Listen to the Album
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
                alt="Parallax Hearts and Field Notes contact page image"
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

      <section style={{ padding: "0 0 88px" }}>
        <div className="site-container">
          <div
            className="glass-panel"
            style={{
              padding: "clamp(26px, 5vw, 44px)",
            }}
          >
            <p className="kicker">Inquiry lanes</p>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))",
                gap: "14px",
                marginTop: "18px",
              }}
            >
              {inquiryLanes.map((lane) => (
                <article
                  key={lane.title}
                  style={{
                    border: "1px solid var(--line)",
                    borderRadius: "22px",
                    padding: "22px",
                    background: "rgba(255,255,255,0.035)",
                  }}
                >
                  <h2
                    style={{
                      margin: 0,
                      fontSize: "25px",
                      lineHeight: 1.05,
                      letterSpacing: "-0.035em",
                      fontWeight: 400,
                    }}
                  >
                    {lane.title}
                  </h2>

                  <p className="soft-copy" style={{ margin: "12px 0 0" }}>
                    {lane.text}
                  </p>
                </article>
              ))}
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
