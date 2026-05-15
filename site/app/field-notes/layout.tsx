import type { Metadata } from "next";
import { absoluteUrl, defaultKeywords } from "../lib/seo";

const pageTitle = "Field Notes | Forbidden Knowledge";
const pageDescription =
  "Source trails, evidence labels, lost etymology, ancient knowledge, and The Forbidden Knowledge Bible research lane.";
const pageUrl = absoluteUrl("/field-notes");
const previewImage = absoluteUrl("/images/field-notes.jpg");

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    ...defaultKeywords,
    "Field Notes",
    "Forbidden Knowledge",
    "Forbidden Knowledge Bible",
    "source trails",
    "evidence-aware research",
    "ancient knowledge",
    "lost etymology",
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
        alt: "Field Notes research lane",
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

export default function FieldNotesLayout({ children }: { children: React.ReactNode }) {
  return children;
}
