import type { MetadataRoute } from "next";
import { SITE_URL } from "./lib/seo";
import { getLiveNovelPages } from "./lib/novel/chapter-one";

const staticRoutes = [
  { path: "/", priority: 1, changeFrequency: "weekly" as const, contentDate: "2026-08-15" },
  { path: "/music", priority: 0.92, changeFrequency: "weekly" as const, contentDate: "2026-07-18" },
  { path: "/book", priority: 0.94, changeFrequency: "weekly" as const, contentDate: "2026-08-15" },
  { path: "/project", priority: 0.9, changeFrequency: "weekly" as const, contentDate: "2026-07-18" },
  { path: "/visuals", priority: 0.82, changeFrequency: "monthly" as const, contentDate: "2026-07-18" },
  { path: "/graphic-novel", priority: 0.94, changeFrequency: "weekly" as const, contentDate: "2026-07-18" },
  { path: "/graphic-novel/chapter-one", priority: 0.93, changeFrequency: "weekly" as const, contentDate: "2026-07-18" },
  { path: "/support", priority: 0.85, changeFrequency: "monthly" as const, contentDate: "2026-07-18" },
  { path: "/shop", priority: 0.65, changeFrequency: "monthly" as const, contentDate: "2026-07-18" },
  { path: "/about", priority: 0.65, changeFrequency: "monthly" as const, contentDate: "2026-07-18" },
  { path: "/contact", priority: 0.7, changeFrequency: "monthly" as const, contentDate: "2026-07-18" },
];

const novelContentDate = new Date("2026-07-18T00:00:00.000Z");

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
  const corePages = staticRoutes.map((item) =>
    routeEntry({
      path: item.path,
      priority: item.priority,
      changeFrequency: item.changeFrequency,
      lastModified: new Date(`${item.contentDate}T00:00:00.000Z`),
    })
  );

  const chapterPages = getLiveNovelPages().map((page, index) =>
    routeEntry({
      path: page.path,
      priority: 0.92 - index * 0.01,
      changeFrequency: "weekly" as const,
      lastModified: novelContentDate,
    })
  );

  return [...corePages, ...chapterPages];
}
