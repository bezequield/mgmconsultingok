import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getSectorBySlug, getAllSectorSlugs, Sector } from "@/lib/sectores";
import { getPostsBySector } from "@/lib/blog-posts";
import SectorClientShell from "@/components/SectorClientShell";

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  return getAllSectorSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const sector = getSectorBySlug(params.slug);
  if (!sector) return {};

  const base = "https://mgmconsultingok.vercel.app";
  const url = `${base}/sectores/${sector.slug}`;

  return {
    title: `${sector.name} | MGM Consulting`,
    description: sector.description,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      locale: "es_AR",
      url,
      title: `${sector.name} | MGM Consulting`,
      description: sector.description,
      siteName: "MGM Consulting",
      images: [{ url: "/img/team.jpg", width: 1200, height: 630 }],
    },
  };
}

export default function SectorPage({ params }: Props) {
  const sector = getSectorBySlug(params.slug);
  if (!sector) notFound();

  const posts = getPostsBySector(sector.slug);

  const jsonLd = buildJsonLd(sector);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <SectorClientShell sector={sector} posts={posts} />
    </>
  );
}

function buildJsonLd(sector: Sector) {
  const base = "https://mgmconsultingok.vercel.app";
  const url = `${base}/sectores/${sector.slug}`;

  const typeMap: Record<string, string | string[]> = {
    WholesaleStore: "WholesaleStore",
    Pharmacy: "Pharmacy",
    MedicalBusiness: ["MedicalBusiness", "LocalBusiness"],
    Physician: ["Physician", "MedicalBusiness"],
  };

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": typeMap[sector.jsonLdType] ?? "LocalBusiness",
        "@id": `${url}#entity`,
        name: `MGM Consulting — ${sector.name}`,
        url,
        description: sector.description,
        areaServed: { "@type": "Country", name: "Argentina" },
        provider: {
          "@type": "ProfessionalService",
          name: "MGM Consulting",
          url: base,
        },
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: `Servicios para ${sector.name}`,
          itemListElement: sector.services.map((svc, i) => ({
            "@type": "Offer",
            position: i + 1,
            itemOffered: {
              "@type": "Service",
              name: svc.title,
              description: svc.description,
            },
          })),
        },
      },
    ],
  };
}
