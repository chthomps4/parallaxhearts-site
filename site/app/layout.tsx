import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://parallaxhearts.org"),
  title: "Parallax Hearts",
  description:
    "Parallax Hearts is a cosmic and spiritual music and visual art project exploring sound, atmosphere, myth, and inner landscapes.",
  openGraph: {
    title: "Parallax Hearts",
    description:
      "A cosmic and spiritual music and art project exploring atmosphere, feeling, myth, and resonance.",
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