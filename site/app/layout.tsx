import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://parallaxhearts.org"),
  title: {
    default: "Parallax Hearts | What the Town Keeps",
    template: "%s | Parallax Hearts",
  },
  description:
    "Parallax Hearts is the music project behind What the Town Keeps — a cinematic album, story world, and graphic novel universe set in the rainy small town of Vallen.",
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
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Parallax Hearts | What the Town Keeps",
    description:
      "A cinematic album and story world about memory, absence, distance, and what a town learns to carry.",
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
      "A cinematic album and story world about memory, absence, distance, and what a town learns to carry.",
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
    sameAs: [
      "https://www.facebook.com/parallaxhearts",
      "https://ko-fi.com/parallaxhearts",
      "https://parallaxhearts.bandcamp.com/album/what-the-town-keeps",
    ],
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
        {children}
      </body>
    </html>
  );
}