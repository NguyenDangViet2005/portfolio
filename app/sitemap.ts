import type { MetadataRoute } from "next";

import { getSiteConfig } from "@/lib/portfolio-data";

export default function sitemap(): MetadataRoute.Sitemap {
  const site = getSiteConfig();
  const lastModified = new Date();

  return [
    {
      url: site.url,
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
