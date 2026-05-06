import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://parallaxhearts.org"),
  title: "Parallax Hearts | What the Town Keeps",
  description:
    "Parallax Hearts is the music project behind What the Town Keeps — a cinematic album, story world, and graphic novel universe set in the rainy small town of Vallen.",
  openGraph: {
    title: "Parallax Hearts | What the Town Keeps",
    description:
      "A cinematic album and story world about memory, absence, distance, and what a town learns to carry.",
    url: "https://parallaxhearts.org",
    siteName: "Parallax Hearts",
    images: ["/images/hero.jpg"],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}