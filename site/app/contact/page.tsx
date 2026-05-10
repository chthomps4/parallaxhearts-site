import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

const koFiUrl = "https://ko-fi.com/parallaxhearts";
const facebookUrl = "https://www.facebook.com/share/1C7BVWq3f2/?mibextid=wwXIfr";
const instagramUrl =
  "https://www.instagram.com/parallax_hearts?igsh=MW11d2h3c3IxODhzYQ%3D%3D&utm_source=qr";
const youtubeUrl = "https://youtube.com/@parallaxhearts-u7q?si=VZZQD2j6J1MEY-pk";
const soundCloudUrl = "https://soundcloud.com/parallax-hearts";

export const metadata: Metadata = {
  title: "Contact | Parallax Hearts",
  description:
    "Contact and follow Parallax Hearts for music, What the Town Keeps, the visual novel, social links, Ko-fi support, and listener messages.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact | Parallax Hearts",
    description:
      "Follow Parallax Hearts, listen on SoundCloud, support on Ko-fi, or send a message about What the Town Keeps.",
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
      "Follow Parallax Hearts, listen on SoundCloud, support on Ko-fi, or send a message about What the Town Keeps.",
    images: ["/images/world.jpg"],
  },
};

const navItems = [
  ["Home", "/"],
  ["Music", "/music"],
  ["Story", "/project"],
  ["Graphic Novel", "/graphic-novel"],
  ["Field Notes", "/field-notes"],
  ["Shop", "/shop"],
  ["Support", "/support"],
  ["Contact", "/contact"],
];

const contactLinks = [
  {
    label: "Email",
    value: "chad@parallaxhearts.org",
    href: "mailto:chad@parallaxhearts.org",
  },
  {
    label: "Facebook",
    value: "Parallax Hearts on Facebook",
    href: facebookUrl,
  },
  {
    label: "Instagram",
    value: "@parallax_hearts",
    href: instagramUrl,
  },
  {
    label: "YouTube",
    value: "@parallaxhearts-u7q",
    href: youtubeUrl,
  },
  {
    label: "SoundCloud",
    value: "soundcloud.com/parallax-hearts",
    href: soundCloudUrl,
  },
  {
    label: "Ko-fi",
    value: "ko-fi.com/parallaxhearts",
    href: koFiUrl,
  },
];

const contactPaths = [
  {
    title: "Listen",
    text: "Stream Parallax Hearts on SoundCloud.",
    href: soundCloudUrl,
    external: true,
  },
  {
    title: "Support",
    text: "Support the album, story, and visual work on Ko-fi.",
    href: koFiUrl,
    external: true,
  },
  {
    title: "Read",
    text: "Begin the visual novel with Chapter One — Ballast.",
    href: "/graphic-novel/chapter-one/page-001",
    external: false,
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
              {navItems.map(([label, href]) => (
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
              gridTemplateColumns: "minmax(0, 1fr) minmax(300px, 0.76fr)",
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
                <p className="kicker">Contact / Follow</p>

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
                  Follow the music. Send a note.
                </h1>

                <p
                  className="body-copy"
                  style={{
                    margin: "24px 0 0",
                    maxWidth: "740px",
                    fontSize: "19px",
                  }}
                >
                  Use this page for Parallax Hearts links, listener messages,
                  music, social platforms, and direct support for <em>What the Town Keeps</em>.
                </p>

                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))",
                    gap: "16px",
                    marginTop: "30px",
                    maxWidth: "820px",
                  }}
                >
                  {contactLinks.map((item) => (
                    <div
                      key={item.label}
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
                        {item.label}
                      </strong>
                      <a
                        href={item.href}
                        target={item.href.startsWith("http") ? "_blank" : undefined}
                        rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                        style={{
                          color: "var(--paper)",
                          textDecoration: "none",
                          fontSize: "18px",
                          lineHeight: 1.35,
                        }}
                      >
                        {item.value}
                      </a>
                    </div>
                  ))}
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

      <section style={{ padding: "0 0 88px" }}>
        <div className="site-container">
          <p className="kicker">Quick paths</p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))",
              gap: "14px",
              marginTop: "18px",
            }}
          >
            {contactPaths.map((path) => {
              const content = (
                <>
                  <h2
                    style={{
                      margin: 0,
                      fontSize: "30px",
                      lineHeight: 1.02,
                      letterSpacing: "-0.04em",
                      fontWeight: 400,
                    }}
                  >
                    {path.title}
                  </h2>

                  <p className="soft-copy" style={{ margin: "12px 0 0" }}>
                    {path.text}
                  </p>
                </>
              );

              if (path.external) {
                return (
                  <a
                    key={path.title}
                    href={path.href}
                    target="_blank"
                    rel="noreferrer"
                    className="glass-panel"
                    style={{
                      padding: "24px",
                      borderRadius: "24px",
                      color: "var(--paper)",
                      textDecoration: "none",
                    }}
                  >
                    {content}
                  </a>
                );
              }

              return (
                <Link
                  key={path.title}
                  href={path.href}
                  className="glass-panel"
                  style={{
                    padding: "24px",
                    borderRadius: "24px",
                    color: "var(--paper)",
                    textDecoration: "none",
                  }}
                >
                  {content}
                </Link>
              );
            })}
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
