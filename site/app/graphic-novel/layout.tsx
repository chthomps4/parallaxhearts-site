import type { Metadata } from "next";
import { absoluteUrl, defaultKeywords } from "../lib/seo";

const pageTitle = "Graphic Novel | What the Town Keeps";
const pageDescription =
  "Read the built-in graphic novel and visual novel adaptation of What the Town Keeps by Parallax Hearts, beginning with Chapter One — Ballast.";
const pageUrl = absoluteUrl("/graphic-novel");
const previewImage = absoluteUrl("/images/project.jpg");

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    ...defaultKeywords,
    "What the Town Keeps graphic novel",
    "What the Town Keeps visual novel",
    "Parallax Hearts graphic novel",
    "Vallen",
    "Elias Vale",
    "Ballast",
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
        alt: "What the Town Keeps graphic novel preview",
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

export default function GraphicNovelLayout({ children }: { children: React.ReactNode }) {
  return children;
}
