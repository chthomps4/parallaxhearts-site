import type { Metadata } from "next";
import { absoluteUrl, breadcrumbSchema, defaultKeywords } from "../lib/seo";

const pageTitle = "PHYLAX: The First Breach | Parallax Hearts";
const pageDescription =
  "Enter PHYLAX: The First Breach, a dark cinematic Parallax Hearts side-world of oath, descent, forbidden knowledge, and consequence.";
const pageUrl = absoluteUrl("/phylax");
const previewImage = absoluteUrl("/images/phylax/atmosphere/upper-watch-hero.png");

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    ...defaultKeywords,
    "PHYLAX",
    "The First Breach",
    "darkgaze",
    "cinematic album world",
    "forbidden knowledge",
    "Watchers inspired story world",
  ],
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: pageUrl,
    siteName: "Parallax Hearts",
    images: [
      {
        url: previewImage,
        width: 1200,
        height: 630,
        alt: "PHYLAX: The First Breach",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: [previewImage],
  },
};

const creativeWorkSchema = {
  "@context": "https://schema.org",
  "@type": "CreativeWork",
  "@id": `${pageUrl}#phylax`,
  name: "PHYLAX: The First Breach",
  url: pageUrl,
  image: previewImage,
  description: pageDescription,
  creator: {
    "@type": "MusicGroup",
    name: "Parallax Hearts",
    url: absoluteUrl("/"),
  },
};

const pageBreadcrumbSchema = breadcrumbSchema([
  { name: "Home", path: "/" },
  { name: "PHYLAX", path: "/phylax" },
]);

export default function PhylaxLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([creativeWorkSchema, pageBreadcrumbSchema]),
        }}
      />
      {children}
    </>
  );
}
