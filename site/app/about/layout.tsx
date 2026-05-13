import type { Metadata } from "next";
import { absoluteUrl, breadcrumbSchema, defaultKeywords, socialLinks } from "../lib/seo";

const pageTitle = "About | Parallax Hearts";
const pageDescription =
  "About Parallax Hearts, What the Town Keeps, Vallen, the visual novel archive, and the Field Notes research lane.";
const pageUrl = absoluteUrl("/about");
const previewImage = absoluteUrl("/images/portrait.jpg");

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    ...defaultKeywords,
    "about Parallax Hearts",
    "What the Town Keeps creator",
    "Vallen story world",
    "independent music project",
    "visual novel archive",
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
        alt: "About Parallax Hearts",
      },
    ],
    locale: "en_US",
    type: "profile",
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: [previewImage],
  },
};

const aboutSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `${pageUrl}#creator`,
  name: "Parallax Hearts",
  url: pageUrl,
  image: previewImage,
  description: pageDescription,
  sameAs: [socialLinks.facebook, socialLinks.instagram, socialLinks.youtube, socialLinks.soundCloud],
};

const pageBreadcrumbSchema = breadcrumbSchema([
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
]);

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([aboutSchema, pageBreadcrumbSchema]),
        }}
      />
      {children}
    </>
  );
}
