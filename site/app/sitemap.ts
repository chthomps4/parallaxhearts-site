import type { MetadataRoute } from "next";
import { SITE_URL } from "./lib/seo";
import { chapterOnePages } from "./lib/novel/chapter-one";
import { characters } from "./phylax/characters/character-data";
import { loreChapters } from "./phylax/lore/lore-data";

const staticRoutes = [
  { path: "/", priority: 1, changeFrequency: "weekly" as const },
  { path: "/music", priority: 0.92, changeFrequency: "weekly" as const },
  { path: "/project", priority: 0.9, changeFrequency: "weekly" as const },
  { path: "/graphic-novel", priority: 0.94, changeFrequency: "weekly" as const },
  { path: "/graphic-novel/chapter-one", priority: 0.93, changeFrequency: "weekly" as const },
  { path: "/websites", priority: 0.88, changeFrequency: "weekly" as const },
  { path: "/website-planning", priority: 0.82, changeFrequency: "monthly" as const },
  { path: "/website-cleanup", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/field-notes", priority: 0.95, changeFrequency: "weekly" as const },
  { path: "/forbidden-knowledge", priority: 0.98, changeFrequency: "weekly" as const },
  { path: "/support", priority: 0.85, changeFrequency: "monthly" as const },
  { path: "/shop", priority: 0.65, changeFrequency: "monthly" as const },
  { path: "/about", priority: 0.65, changeFrequency: "monthly" as const },
  { path: "/contact", priority: 0.7, changeFrequency: "monthly" as const },
  { path: "/phylax", priority: 0.55, changeFrequency: "monthly" as const },
  { path: "/phylax/lore", priority: 0.5, changeFrequency: "monthly" as const },
  { path: "/phylax/story", priority: 0.45, changeFrequency: "monthly" as const },
  { path: "/phylax/characters", priority: 0.45, changeFrequency: "monthly" as const },
];

function routeEntry({
  path,
  priority,
  changeFrequency,
  lastModified,
}: {
  path: string;
  priority: number;
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
  lastModified: Date;
}) {
  return {
    url: new URL(path, SITE_URL).toString(),
    lastModified,
    changeFrequency,
    priority,
  };
}

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const corePages = staticRoutes.map((item) =>
    routeEntry({ ...item, lastModified })
  );

  const chapterPages = chapterOnePages.map((page, index) =>
    routeEntry({
      path: page.path,
      priority: 0.92 - index * 0.01,
      changeFrequency: "weekly" as const,
      lastModified,
    })
  );

  const lorePages = loreChapters.map((chapter) =>
    routeEntry({
      path: `/phylax/lore/${chapter.slug}`,
      priority: 0.4,
      changeFrequency: "monthly" as const,
      lastModified,
    })
  );

  const characterPages = characters.map((character) =>
    routeEntry({
      path: `/phylax/characters/${character.slug}`,
      priority: 0.4,
      changeFrequency: "monthly" as const,
      lastModified,
    })
  );

  return [...corePages, ...chapterPages, ...lorePages, ...characterPages];
}
