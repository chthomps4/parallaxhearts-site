import type { MetadataRoute } from "next";
import { characters } from "./phylax/characters/character-data";
import { loreChapters } from "./phylax/lore/lore-data";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://parallaxhearts.org";
  const lastModified = new Date();

  const coreRoutes = [
    { route: "", priority: 1, changeFrequency: "weekly" as const },
    { route: "/forbidden-knowledge", priority: 0.98, changeFrequency: "weekly" as const },
    { route: "/field-notes", priority: 0.95, changeFrequency: "weekly" as const },
    { route: "/music", priority: 0.92, changeFrequency: "weekly" as const },
    { route: "/project", priority: 0.9, changeFrequency: "weekly" as const },
    { route: "/support", priority: 0.85, changeFrequency: "monthly" as const },
    { route: "/contact", priority: 0.7, changeFrequency: "monthly" as const },
    { route: "/about", priority: 0.65, changeFrequency: "monthly" as const },
    { route: "/shop", priority: 0.65, changeFrequency: "monthly" as const },
    { route: "/phylax", priority: 0.55, changeFrequency: "monthly" as const },
    { route: "/phylax/lore", priority: 0.5, changeFrequency: "monthly" as const },
    { route: "/phylax/story", priority: 0.45, changeFrequency: "monthly" as const },
    { route: "/phylax/characters", priority: 0.45, changeFrequency: "monthly" as const },
  ];

  const corePages = coreRoutes.map((item) => ({
    url: `${baseUrl}${item.route}`,
    lastModified,
    changeFrequency: item.changeFrequency,
    priority: item.priority,
  }));

  const lorePages = loreChapters.map((chapter) => ({
    url: `${baseUrl}/phylax/lore/${chapter.slug}`,
    lastModified,
    changeFrequency: "monthly" as const,
    priority: 0.4,
  }));

  const characterPages = characters.map((character) => ({
    url: `${baseUrl}/phylax/characters/${character.slug}`,
    lastModified,
    changeFrequency: "monthly" as const,
    priority: 0.4,
  }));

  return [...corePages, ...lorePages, ...characterPages];
}
