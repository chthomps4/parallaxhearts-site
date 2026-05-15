import type { Metadata } from "next";
import { absoluteUrl, defaultKeywords } from "../lib/seo";

const pageTitle = "What the Town Keeps | Parallax Hearts";
const pageDescription =
  "Enter What the Town Keeps by Parallax Hearts — the album, story world, visual novel archive, and rainy small-town world of Vallen.";
const pageUrl = absoluteUrl("/project");
const previewImage = absoluteUrl("/images/story-world.jpg");

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    ...defaultKeywords,
    "What the Town Keeps story world",
    "Vallen",
    "Elias Vale",
    "cinematic literary drama",
    "Parallax Hearts story",
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
        alt: "What the Town Keeps story world",
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

export default function ProjectLayout({ children }: { children: React.ReactNode }) {
  return children;
}
