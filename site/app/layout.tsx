import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import DispatchSignup from "./components/DispatchSignup";
import SiteHeader from "./components/SiteHeader";
import { footerArchiveLinks, footerMainLinks } from "./config/navigation";
import {
  SITE_NAME,
  SITE_URL,
  defaultKeywords,
  musicGroupSchema,
  socialLinks,
  websiteSchema,
} from "./lib/seo";
import "./globals.css";

const siteDescription =
  "Parallax Hearts is the music project behind What the Town Keeps — a cinematic album, story world, and visual novel archive set in the rainy small town of Vallen, with Field Notes as a separate research lane.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Parallax Hearts | What the Town Keeps",
    template: "%s",
  },
  description: siteDescription,
  applicationName: SITE_NAME,
  authors: [{ name: SITE_NAME }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  keywords: defaultKeywords,
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
              Cinematic music, the rainy story world of Vallen, and the
              visual-novel archive of <em>What the Town Keeps</em>. Field Notes
              remains a separate research lane.
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
              Main paths
            </p>

            <FooterLinks links={footerMainLinks} />
          </div>

          <div>
            <p className="kicker" style={{ marginBottom: "12px" }}>
              Archives
            </p>

            <FooterLinks links={footerArchiveLinks} />
          </div>

          <div>
            <p className="kicker" style={{ marginBottom: "12px" }}>
              Connect
            </p>

            <FooterLinks
              links={[
                ["Contact", "/contact"],
                ["Facebook", socialLinks.facebook],
                ["Instagram", socialLinks.instagram],
                ["YouTube", socialLinks.youtube],
                ["Ko-fi", socialLinks.koFi],
                ["SoundCloud", socialLinks.soundCloud],
              ]}
            />
          </div>
        </div>
      </div>

      <style>{`\n        @media (max-width: 900px) {\n          footer div[style*="grid-template-columns"] {\n            grid-template-columns: 1fr !important;\n          }\n        }\n      `}</style>
    </footer>
  );
}

function FooterLinks({
  links,
}: {
  links: readonly (readonly [label: string, href: string])[];
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
  const structuredData = [musicGroupSchema(), websiteSchema()];

  return (
    <html lang="en">
      <body>
        <a className="skip-link" href="#main-content">
          Skip to content
        </a>
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
        <span
          aria-hidden="true"
          title="GnatP"
          data-muse="GnatP"
          style={{
            position: "fixed",
            right: "7px",
            bottom: "7px",
            width: "1px",
            height: "1px",
            overflow: "hidden",
            opacity: 0.01,
            pointerEvents: "none",
            userSelect: "none",
          }}
        >
          GnatP
        </span>
        <SiteHeader />
        <div id="main-content" tabIndex={-1}>
          {children}
        </div>
        <DispatchSignup />
        <SiteFooter />
      </body>
    </html>
  );
}
