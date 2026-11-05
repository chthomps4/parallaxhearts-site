import type { Metadata } from "next";
import { buildMetadata, breadcrumbSchema } from "../lib/seo";
import JsonLd from "../components/JsonLd";
export const metadata: Metadata = buildMetadata({
  title: "Shop | Parallax Hearts",
  description:
    "Find the existing Parallax Hearts Ko-fi page for current offerings, availability, and purchase terms.",
  path: "/shop",
});
export default function ShopLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Shop", path: "/shop" },
        ])}
      />
      {children}
    </>
  );
}
