import type { Metadata } from "next";
import { absoluteUrl, defaultKeywords } from "../lib/seo";

const pageTitle = "Support | Parallax Hearts";
const pageDescription =
  "Support Parallax Hearts, What the Town Keeps, the Vallen story world, visual novel pages, music, and related creative work through Ko-fi.";
const pageUrl = absoluteUrl("/support");
const previewImage = absoluteUrl("/images/hero.jpg");

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    ...defaultKeywords,
    "support Parallax Hearts",
    "Ko-fi Parallax Hearts",
    "What the Town Keeps support",
    "independent music support",
    "visual novel support",
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
        alt: "Support Parallax Hearts and What the Town Keeps",
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

export default function SupportLayout({ children }: { children: React.ReactNode }) {
  return children;
}
