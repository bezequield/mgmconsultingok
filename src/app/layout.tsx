import type { Metadata, Viewport } from "next";
import "./globals.css";
import ServiceWorkerRegistration from "@/components/ServiceWorkerRegistration";

export const viewport: Viewport = {
  themeColor: "#0d1b4a",
};

export const metadata: Metadata = {
  title: "MGM Consulting | Consultora Estratégica de Soluciones Digitales para el Sector Salud",
  description: "MGM Consulting es la consultora estratégica de soluciones digitales para droguerías, farmacéuticas, clínicas y profesionales de la salud en Argentina. Business Intelligence, automatización de procesos, CRM médico y estrategia de crecimiento E2E.",
  keywords: "consultora estratégica sector salud Argentina, automatización de turnos para farmacias, CRM médico con cumplimiento de datos, estrategia de marketing para clínicas de alta especialidad, business intelligence droguerías, transformación digital farmacéutica, marketing digital profesionales de la salud, consultoría droguerías Argentina",
  authors: [{ name: "MGM Consulting" }],
  creator: "MGM Consulting",
  publisher: "MGM Consulting",
  metadataBase: new URL("https://mgmconsultingok.vercel.app"),
  alternates: {
    canonical: "https://mgmconsultingok.vercel.app",
  },
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: "https://mgmconsultingok.vercel.app",
    title: "MGM Consulting | Consultora Estratégica para el Sector Salud",
    description: "Consultora estratégica de soluciones digitales para droguerías, farmacéuticas, clínicas y profesionales de la salud en Argentina.",
    siteName: "MGM Consulting",
    images: [{ url: "/img/team.jpg", width: 1200, height: 630, alt: "MGM Consulting Team" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "MGM Consulting | Consultora Estratégica para el Sector Salud",
    description: "Consultora estratégica de soluciones digitales para droguerías, farmacéuticas, clínicas y profesionales de la salud en Argentina.",
    images: ["/img/team.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-video-preview": -1, "max-image-preview": "large", "max-snippet": -1 },
  },
  manifest: "/manifest.json",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <head>
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link href="https://fonts.googleapis.com/css2?family=Anton&family=Space+Grotesk:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
        <link rel="apple-touch-icon" href="/icons/icon-192x192.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": ["MedicalBusiness", "ProfessionalService"],
                  "@id": "https://mgmconsultingok.vercel.app/#organization",
                  "name": "MGM Consulting",
                  "alternateName": "MGM Consulting Health & Retail",
                  "url": "https://mgmconsultingok.vercel.app",
                  "logo": "https://mgmconsultingok.vercel.app/img/mgm-logo.svg",
                  "description": "Consultora Estratégica de Soluciones Digitales para el Sector Salud. Especialistas en droguerías, farmacéuticas, clínicas, laboratorios y profesionales de la salud en Argentina.",
                  "areaServed": { "@type": "Country", "name": "Argentina" },
                  "knowsAbout": [
                    "Automatización de turnos para farmacias",
                    "CRM médico con cumplimiento de datos",
                    "Estrategia de marketing para clínicas de alta especialidad",
                    "Business Intelligence para droguerías y retail farmacéutico",
                    "Transformación digital para farmacéuticas y distribuidoras",
                    "Marketing digital para profesionales de la salud",
                    "Análisis de KPIs para el sector salud",
                    "Consultoría en estrategia de crecimiento para farmacias"
                  ],
                  "serviceType": ["Consultoría Estratégica", "Business Intelligence", "Automatización de Procesos", "CRM Médico", "Transformación Digital", "Marketing Digital Salud"],
                  "founders": [
                    { "@type": "Person", "name": "María Soledad Corrao", "jobTitle": "Cofundadora & Directora de Estrategia" },
                    { "@type": "Person", "name": "Ezequiel Ponce de León", "jobTitle": "Cofundador & Director de Implementación Digital" }
                  ],
                  "sameAs": ["https://www.instagram.com/mgmconsultingok"]
                }
              ]
            })
          }}
        />
      </head>
      <body className="bg-mgm-navy-dark text-white font-grotesk antialiased">
        <ServiceWorkerRegistration />
        {children}
      </body>
    </html>
  );
}
