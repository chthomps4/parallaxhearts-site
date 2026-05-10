import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import "./globals.css";

const facebookUrl = "https://www.facebook.com/share/1C7BVWq3f2/?mibextid=wwXIfr";
const instagramUrl =
  "https://www.instagram.com/parallax_hearts?igsh=MW11d2h3c3IxODhzYQ%3D%3D&utm_source=qr";
const youtubeUrl = "https://youtube.com/@parallaxhearts-u7q?si=VZZQD2j6J1MEY-pk";
const koFiUrl = "https://ko-fi.com/parallaxhearts";
const soundCloudUrl = "https://soundcloud.com/parallax-hearts";

export const metadata: Metadata = {
  metadataBase: new URL("https://parallaxhearts.org"),
  title: {
    default: "Parallax Hearts | What the Town Keeps",
    template: "%s | Parallax Hearts",
  },
  description:
    "Parallax Hearts is the music project behind What the Town Keeps — a cinematic album, story world, and graphic novel direction set in the rainy small town of Vallen, with Field Notes as a separate research lane.",
  applicationName: "Parallax Hearts",
  authors: [{ name: "Parallax Hearts" }],
  creator: "Parallax Hearts",
  publisher: "Parallax Hearts",
  keywords: [
    "Parallax Hearts",
    "What the Town Keeps",
    "Vallen",
    "cinematic acoustic alternative",
    "independent music",
    "graphic novel",
    "story world",
    "concept art",
    "album art",
    "literary music project",
    "Ko-fi music support",
    "SoundCloud",
    "Field Notes",
    "Forbidden Knowledge Circle",
    "Forbidden Knowledge Bible",
    "ancient knowledge",
    "lost etymology",
    "source trails",
    "evidence-aware research",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Parallax Hearts | What the Town Keeps",
    description:
      "A cinematic album, story world, and graphic novel direction set in Vallen, with a separate Field Notes research archive for source trails and evidence-aware exploration.",
    url: "https://parallaxhearts.org",
    siteName: "Parallax Hearts",
    images: [
      {
        url: "/images/hero.jpg",
        width: 1200,
        height: 630,
        alt: "Parallax Hearts — What the Town Keeps",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Parallax Hearts | What the Town Keeps",
    description:
      "A cinematic album, story world, and graphic novel direction set in Vallen, with a separate Field Notes research archive.",
    images: ["/images/hero.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  category: "music",
};

function SiteFooter() {
  return (
    <footer
      style={{
        borderTop: "1px solid var(--line)",
        background:
          "linear-gradient(180deg, rgba(5,5,7,0.72), rgba(5,5,7,0.96))",
        padding: "42px 0",
      }}
    >
      <div className="site-container">
        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "minmax(0, 1.2fr) repeat(3, minmax(160px, 0.55fr))",
            gap: "28px",
            alignItems: "start",
          }}
        >
          <div>
            <Link
              href="/"
              style={{
                color: "var(--paper)",
                textDecoration: "none",
                fontSize: "clamp(24px, 4vw, 34px)",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                lineHeight: 1,
              }}
            >
              Parallax Hearts
            </Link>

            <p
              className="soft-copy"
              style={{
                margin: "16px 0 0",
                maxWidth: "520px",
              }}
            >
              Cinematic music, Vallen story-world material, graphic novel
              direction, and the rainy small-town atmosphere of <em>What the Town Keeps</em>.
              Field Notes remains a separate research lane.
            </p>

            <p
              style={{
                margin: "18px 0 0",
                color: "var(--paper-dim)",
                fontSize: "13px",
                lineHeight: 1.6,
              }}
            >
              © {new Date().getFullYear()} Parallax Hearts. All rights
              reserved.
            </p>
          </div>

          <div>
            <p className="kicker" style={{ marginBottom: "12px" }}>
              Parallax Hearts
            </p>

            <FooterLinks
              links={[
                ["Home", "/"],
                ["Music", "/music"],
                ["What the Town Keeps", "/project"],
                ["Graphic Novel", "/graphic-novel"],
                ["Shop", "/shop"],
                ["Support", "/support"],
              ]}
            />
          </div>

          <div>
            <p className="kicker" style={{ marginBottom: "12px" }}>
              Research / Archive
            </p>

            <FooterLinks
              links={[
                ["Field Notes", "/field-notes"],
                ["Forbidden Knowledge", "/forbidden-knowledge"],
                ["PHYLAX", "/phylax"],
                ["PHYLAX Lore", "/phylax/lore"],
              ]}
            />
          </div>

          <div>
            <p className="kicker" style={{ marginBottom: "12px" }}>
              Connect
            </p>

            <FooterLinks
              links={[
                ["About", "/about"],
                ["Contact", "/contact"],
                ["Facebook", facebookUrl],
                ["Instagram", instagramUrl],
                ["YouTube", youtubeUrl],
                ["Ko-fi", koFiUrl],
                ["SoundCloud", soundCloudUrl],
              ]}
            />
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          footer div[style*="grid-template-columns"] {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </footer>
  );
}

function FooterLinks({
  links,
}: {
  links: [label: string, href: string][];
}) {
  return (
    <div style={{ display: "grid", gap: "10px" }}>
      {links.map(([label, href]) => {
        const isExternal = href.startsWith("http");

        if (isExternal) {
          return (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              style={{
                color: "var(--paper-soft)",
                textDecoration: "none",
                fontSize: "15px",
              }}
            >
              {label}
            </a>
          );
        }

        return (
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
        );
      })}
    </div>
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "MusicGroup",
    name: "Parallax Hearts",
    url: "https://parallaxhearts.org",
    image: "https://parallaxhearts.org/images/hero.jpg",
    sameAs: [facebookUrl, instagramUrl, youtubeUrl, koFiUrl, soundCloudUrl],
    album: {
      "@type": "MusicAlbum",
      name: "What the Town Keeps",
      url: "https://parallaxhearts.org/music",
      byArtist: {
        "@type": "MusicGroup",
        name: "Parallax Hearts",
      },
    },
  };

  return (
    <html lang="en">
      <body>
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4628988881101233"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
