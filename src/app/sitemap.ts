import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://mgmconsultingok.vercel.app";
  const blogSlugs = [
    "automatizacion-turnos-farmacias-ia",
    "crm-medico-cumplimiento-datos-clinicas",
    "estrategia-marketing-clinicas-alta-especialidad",
  ];

  return [
    { url: base, lastModified: new Date(), changeFrequency: "monthly", priority: 1 },
    ...blogSlugs.map((slug) => ({
      url: `${base}/blog/${slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
