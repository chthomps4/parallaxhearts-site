import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://parallaxhearts.org"),
  title: "Parallax Hearts",
  description:
    "Cinematic music, spiritual atmosphere, and love stories that leave weather behind.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Parallax Hearts",
    description:
      "Cinematic music, spiritual atmosphere, and love stories that leave weather behind.",
    url: "https://parallaxhearts.org",
    siteName: "Parallax Hearts",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Parallax Hearts",
    description:
      "Cinematic music, spiritual atmosphere, and love stories that leave weather behind.",
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