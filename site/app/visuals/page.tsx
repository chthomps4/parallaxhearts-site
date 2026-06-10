import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { absoluteUrl, defaultKeywords } from "../lib/seo";
import { getStoryAsset } from "../lib/story-assets";

const pageTitle = "Visuals | What the Town Keeps";
const pageDescription =
  "A visual archive for What the Town Keeps: Vallen imagery, graphic novel atmosphere, album-world stills, and rain-soaked cinematic scenes.";
const pageUrl = absoluteUrl("/visuals");
const visualsHeroAsset = getStoryAsset("story-world");
const previewImage = absoluteUrl(visualsHeroAsset.src);

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    ...defaultKeywords,
    "What the Town Keeps visuals",
    "Vallen imagery",
    "Parallax Hearts art",
    "graphic novel atmosphere",
    "cinematic story world",
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
        width: visualsHeroAsset.width,
        height: visualsHeroAsset.height,
        alt: "What the Town Keeps visual archive",
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

const visualCards = [
  {
    title: "Vallen atmosphere",
    text: "Rain, rail lines, warm windows, old rooms, dusk streets, and the weathered surfaces that carry the story world.",
    asset: getStoryAsset("hero-vallen-arrival"),
    alt: "Rainy Vallen atmosphere from What the Town Keeps",
    href: "/story",
    label: "Enter the story world",
  },
  {
    title: "Graphic novel panels",
    text: "The visual-novel side of What the Town Keeps, beginning with Chapter One — Ballast.",
    asset: getStoryAsset("graphic-novel-hub"),
    alt: "Graphic novel atmosphere for What the Town Keeps",
    href: "/graphic-novel",
    label: "Open the graphic novel",
  },
  {
    title: "Music-world imagery",
    text: "Images connected to the album, lyrics, reels, support posts, and the cinematic language around Parallax Hearts.",
    asset: getStoryAsset("story-world"),
    alt: "Parallax Hearts music-world image archive",
    href: "/music",
    label: "Listen to the album",
  },
];

export default function VisualsPage() {
  return (
    <main className="site-shell">
      <section style={{ padding: "54px 0 34px" }}>
        <div className="site-container">
          <div
            className="glass-panel"
            style={{
              position: "relative",
              overflow: "hidden",
              minHeight: "60vh",
              display: "flex",
              alignItems: "flex-end",
              borderRadius: "38px",
            }}
          >
            <Image
              src={visualsHeroAsset.src}
              alt={visualsHeroAsset.alt}
              fill
              priority
              sizes="(max-width: 980px) 100vw, 1180px"
              style={{
                objectFit: "cover",
                objectPosition: "center",
                filter: "saturate(0.78) contrast(1.06)",
              }}
            />

            <div
              aria-hidden="true"
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "linear-gradient(180deg, rgba(4,5,6,0.06), rgba(4,5,6,0.38) 45%, rgba(4,5,6,0.97) 100%), linear-gradient(90deg, rgba(4,5,6,0.86), rgba(4,5,6,0.32), rgba(4,5,6,0.72))",
              }}
            />

            <div
              style={{
                position: "relative",
                zIndex: 2,
                padding: "clamp(28px, 6vw, 58px)",
                maxWidth: "860px",
              }}
            >
              <p className="kicker">Visual archive</p>
              <h1
                style={{
                  margin: 0,
                  fontSize: "clamp(48px, 8vw, 94px)",
                  lineHeight: 0.9,
                  letterSpacing: "-0.075em",
                  fontWeight: 400,
                  textShadow: "0 18px 54px rgba(0,0,0,0.68)",
                }}
              >
                The images around the town.
              </h1>
              <p
                className="body-copy"
                style={{ margin: "22px 0 0", maxWidth: "720px" }}
              >
                A visual doorway into <em>What the Town Keeps</em>: Vallen,
                album atmosphere, graphic-novel panels, rain, rails, dim rooms,
                and the small-town weather that surrounds the songs.
              </p>
              <div style={{ marginTop: "28px", display: "flex", gap: "12px", flexWrap: "wrap" }}>
                <Link href="/graphic-novel" className="primary-button">
                  Open the graphic novel
                </Link>
                <Link href="/music" className="secondary-button">
                  Listen to the album
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: "34px 0 88px" }}>
        <div className="site-container">
          <p className="kicker">Visual paths</p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: "18px",
              marginTop: "18px",
            }}
          >
            {visualCards.map((card) => (
              <article
                key={card.title}
                className="glass-panel link-card"
                style={{ overflow: "hidden", borderRadius: "28px" }}
              >
                <div style={{ position: "relative", minHeight: "260px" }}>
                  <Image
                    src={card.asset.src}
                    alt={card.alt}
                    fill
                    sizes="(max-width: 900px) 100vw, 33vw"
                    style={{ objectFit: "cover", filter: "saturate(0.82) contrast(1.04)" }}
                  />
                </div>
                <div style={{ padding: "24px" }}>
                  <h2
                    style={{
                      margin: 0,
                      fontSize: "31px",
                      lineHeight: 1.02,
                      letterSpacing: "-0.045em",
                      fontWeight: 400,
                    }}
                  >
                    {card.title}
                  </h2>
                  <p className="soft-copy" style={{ margin: "14px 0 20px" }}>
                    {card.text}
                  </p>
                  <Link href={card.href} className="secondary-button">
                    {card.label}
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
