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
    "Contact Parallax Hearts for music, What the Town Keeps, the graphic novel, Vallen story-world material, Ko-fi support, social links, collaboration, press, Field Notes, and research inquiries.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact | Parallax Hearts",
    description:
      "Reach Parallax Hearts for music, What the Town Keeps, the graphic novel, Vallen story-world material, Ko-fi support, social links, collaboration, press, Field Notes, and research inquiries.",
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
      "Reach Parallax Hearts for music, What the Town Keeps, the graphic novel, Vallen story-world material, Ko-fi support, social links, collaboration, press, Field Notes, and research inquiries.",
    images: ["/images/world.jpg"],
  },
};

const navItems = [
  ["Home", "/"],
  ["Music", "/music"],
  ["Story", "/project"],
  ["Graphic Novel", "/graphic-novel"],
  ["Forbidden Knowledge", "/forbidden-knowledge"],
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
    title: "Graphic Novel / Visual Archive",
    text: "Chapter pages, visual novel updates, page art, story adaptation, and built-in website archive questions.",
  },
  {
    title: "Ko-fi / Support",
    text: "Membership tiers, digital shop items, purchases, bundles, or direct support questions.",
  },
  {
    title: "Field Notes / Research",
    text: "Source trails, evidence labels, the Handbook, ancient knowledge research, lost etymology, or the 5-Level Rabbit Hole Method.",
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
                  For Parallax Hearts, <em>What the Town Keeps</em>, the
                  graphic novel, Vallen, Ko-fi support, collaboration, press,
                  listener messages, social links, or Field Notes research
                  inquiries, use the contact points below.
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

                  <Link href="/graphic-novel" className="secondary-button">
                    Read the Graphic Novel
                  </Link>

                  <Link href="/forbidden-knowledge" className="secondary-button">
                    Start the Free Course
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
