import type { MetadataRoute } from "next";

// Minimal, stable sitemap (no dynamic routes).
// Uses relative URLs; Next will resolve against deployment origin.
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    { url: "/", lastModified: now },
    { url: "/spec", lastModified: now },
    { url: "/reference", lastModified: now },
    { url: "/architecture", lastModified: now },
    { url: "/compliance", lastModified: now },
    { url: "/docs", lastModified: now },
    { url: "/contact", lastModified: now },
    { url: "/privacy", lastModified: now },
    { url: "/imprint", lastModified: now },
  ];
}
