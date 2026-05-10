import type { MetadataRoute } from "next";
import { SITE_URL } from "./lib/seo";
import { chapterOnePages } from "./lib/novel/chapter-one";

const staticRoutes = [
  { path: "/", priority: 1, changeFrequency: "weekly" as const },
  { path: "/music", priority: 0.92, changeFrequency: "weekly" as const },
  { path: "/project", priority: 0.9, changeFrequency: "weekly" as const },
  { path: "/graphic-novel", priority: 0.94, changeFrequency: "weekly" as const },
  { path: "/graphic-novel/chapter-one", priority: 0.93, changeFrequency: "weekly" as const },
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

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const chapterRoutes = chapterOnePages.map((page, index) => ({
    path: page.path,
    priority: 0.92 - index * 0.01,
    changeFrequency: "weekly" as const,
  }));

  return [...staticRoutes, ...chapterRoutes].map((item) => ({
    url: new URL(item.path, SITE_URL).toString(),
    lastModified,
    changeFrequency: item.changeFrequency,
    priority: item.priority,
  }));
}
