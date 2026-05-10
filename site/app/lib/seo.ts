import type { Metadata } from "next";

export const SITE_URL = "https://www.parallaxhearts.org";
export const SITE_NAME = "Parallax Hearts";
export const DEFAULT_OG_IMAGE = "/images/hero.jpg";

export const socialLinks = {
  facebook: "https://www.facebook.com/share/1C7BVWq3f2/?mibextid=wwXIfr",
  instagram:
    "https://www.instagram.com/parallax_hearts?igsh=MW11d2h3c3IxODhzYQ%3D%3D&utm_source=qr",
  youtube: "https://youtube.com/@parallaxhearts-u7q?si=VZZQD2j6J1MEY-pk",
  koFi: "https://ko-fi.com/parallaxhearts",
  soundCloud: "https://soundcloud.com/parallax-hearts",
};

type BuildMetadataInput = {
  title: string;
  description: string;
  path?: string;
  image?: string;
  type?: "website" | "article" | "music.album";
  keywords?: string[];
};

export function absoluteUrl(path = "/") {
  return new URL(path, SITE_URL).toString();
}

export function buildMetadata({
  title,
  description,
  path = "/",
  image = DEFAULT_OG_IMAGE,
  type = "website",
  keywords = [],
}: BuildMetadataInput): Metadata {
  const url = absoluteUrl(path);

  return {
    metadataBase: new URL(SITE_URL),
    title,
    description,
    keywords,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: SITE_NAME,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale: "en_US",
      type,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
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
  };
}

export const defaultKeywords = [
  "Parallax Hearts",
  "What the Town Keeps",
  "Vallen",
  "cinematic acoustic alternative",
  "independent music",
  "visual novel",
  "graphic novel",
  "story world",
  "literary music project",
  "Field Notes",
  "Forbidden Knowledge",
];

export function musicGroupSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "MusicGroup",
    name: SITE_NAME,
    url: SITE_URL,
    image: absoluteUrl(DEFAULT_OG_IMAGE),
    sameAs: [
      socialLinks.facebook,
      socialLinks.instagram,
      socialLinks.youtube,
      socialLinks.koFi,
      socialLinks.soundCloud,
    ],
    album: {
      "@type": "MusicAlbum",
      name: "What the Town Keeps",
      url: absoluteUrl("/music"),
      byArtist: {
        "@type": "MusicGroup",
        name: SITE_NAME,
      },
    },
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url: SITE_URL,
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}
