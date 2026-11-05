import type { Metadata } from "next";
import SiteHeader from "./components/SiteHeader";
import SiteFooter from "./components/SiteFooter";
import JsonLd from "./components/JsonLd";
import { SITE_NAME, SITE_URL, defaultKeywords, websiteSchema } from "./lib/seo";
import "@fontsource/cormorant-garamond/latin-400.css";
import "@fontsource/cormorant-garamond/latin-400-italic.css";
import "@fontsource/cormorant-garamond/latin-600.css";
import "@fontsource/dm-mono/latin-400.css";
import "./globals.css";
import "./audit-fixes.css";
import "./publication.css";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Parallax Hearts | Poetry, Music & Stories",
    template: "%s",
  },
  description:
    "The creative home of Chad Thompson. Crown of Phases poetry, original music, visual storytelling, and explorations of pattern and meaning.",
  applicationName: SITE_NAME,
  authors: [{ name: "Chad Thompson" }],
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
  category: "arts and literature",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <a className="skip-link" href="#main-content">
          Skip to content
        </a>
        <JsonLd data={websiteSchema()} />
        <SiteHeader />
        <div id="main-content" tabIndex={-1}>
          {children}
        </div>
        <SiteFooter />
      </body>
    </html>
  );
}
