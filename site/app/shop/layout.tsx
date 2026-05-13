import type { Metadata } from "next";
import { absoluteUrl, breadcrumbSchema, defaultKeywords, socialLinks } from "../lib/seo";

const pageTitle = "Shop | Parallax Hearts";
const pageDescription =
  "Digital music, lyric books, concept art, story previews, and support bundles for Parallax Hearts and What the Town Keeps.";
const pageUrl = absoluteUrl("/shop");
const previewImage = absoluteUrl("/images/project.jpg");

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    ...defaultKeywords,
    "Parallax Hearts shop",
    "What the Town Keeps digital album",
    "lyric book PDF",
    "Vallen concept art",
    "graphic novel preview",
    "Ko-fi shop",
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
        alt: "Parallax Hearts digital shop",
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

const shopSchema = {
  "@context": "https://schema.org",
  "@type": "Store",
  "@id": `${pageUrl}#shop`,
  name: "Parallax Hearts Digital Shop",
  url: pageUrl,
  image: previewImage,
  description: pageDescription,
  sameAs: [socialLinks.koFi, socialLinks.soundCloud, socialLinks.facebook, socialLinks.instagram],
};

const pageBreadcrumbSchema = breadcrumbSchema([
  { name: "Home", path: "/" },
  { name: "Shop", path: "/shop" },
]);

export default function ShopLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([shopSchema, pageBreadcrumbSchema]),
        }}
      />
      {children}
    </>
  );
}
