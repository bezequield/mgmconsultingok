import { MetadataRoute } from "next";
import { BLOG_POSTS } from "@/lib/blog-posts";
import { getAllSectorSlugs } from "@/lib/sectores";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://mgmconsultingok.vercel.app";

  const serviciosSlugs = [
    "business-intelligence",
    "automatizacion-crm",
    "estrategia-ads",
    "transformacion-digital",
  ];

  const sectorSlugs = getAllSectorSlugs();
  const blogSlugs = BLOG_POSTS.map((p) => p.slug);

  return [
    { url: base, lastModified: new Date(), changeFrequency: "monthly", priority: 1 },
    { url: `${base}/general`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    ...sectorSlugs.map((slug) => ({
      url: `${base}/sectores/${slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.95,
    })),
    ...serviciosSlugs.map((slug) => ({
      url: `${base}/servicios/${slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.85,
    })),
    ...blogSlugs.map((slug) => ({
      url: `${base}/blog/${slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.75,
    })),
  ];
}
