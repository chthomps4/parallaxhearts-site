import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://parallaxhearts.org";

  const routes = [
    "",
    "/about",
    "/contact",
    "/music",
    "/project",
    "/support",
    "/shop",
    "/phylax",
    "/phylax/lore",
    "/phylax/story",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority:
      route === ""
        ? 1
        : route === "/music" || route === "/project"
          ? 0.9
          : route === "/support"
            ? 0.8
            : 0.6,
  }));
}