import type { Metadata } from "next";
import { buildMetadata, absoluteUrl, breadcrumbSchema } from "../lib/seo";
import JsonLd from "../components/JsonLd";
export const metadata: Metadata = buildMetadata({
  title: "About | Parallax Hearts",
  description:
    "Parallax Hearts is Chad Thompson’s creative home for poetry, music, original writing, visual storytelling, and explorations of pattern and meaning.",
  path: "/about",
});
export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <JsonLd
        data={[
          {
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Chad Thompson",
            url: absoluteUrl("/about"),
          },
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "About", path: "/about" },
          ]),
        ]}
      />
      {children}
    </>
  );
}
