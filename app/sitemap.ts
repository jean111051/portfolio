import type { MetadataRoute } from "next";
import { getAllLogs } from "@/lib/logs";
import { absoluteUrl } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: absoluteUrl(),
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: absoluteUrl("/work"),
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: absoluteUrl("/logs"),
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];

  const logRoutes: MetadataRoute.Sitemap = getAllLogs().map((log) => ({
    url: absoluteUrl(`/logs/${log.slug}`),
    lastModified,
    changeFrequency: "yearly",
    priority: 0.6,
  }));

  return [...staticRoutes, ...logRoutes];
}
