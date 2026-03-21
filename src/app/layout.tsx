import type { Metadata, Viewport } from "next";
import "./globals.css";
import ServiceWorkerRegistration from "@/components/ServiceWorkerRegistration";

export const viewport: Viewport = {
  themeColor: "#0d1b4a",
};

export const metadata: Metadata = {
  title: "MGM Consulting | Health & Retail — Tu Departamento Comercial y de Marketing Externo",
  description: "MGM Consulting es tu departamento comercial y de marketing externo especializado en farmacias, clínicas y retail de salud. Business Intelligence, automatización de turnos, CRM médico y estrategia E2E.",
  keywords: "automatización de turnos para farmacias, CRM médico con cumplimiento de datos, estrategia de marketing para clínicas de alta especialidad, marketing digital salud Argentina, consultoría farmacéutica, business intelligence retail",
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
    title: "MGM Consulting | Health & Retail",
    description: "Tu departamento comercial y de marketing externo especializado en farmacias, clínicas y retail de salud.",
    siteName: "MGM Consulting",
    images: [{ url: "/img/team.jpg", width: 1200, height: 630, alt: "MGM Consulting Team" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "MGM Consulting | Health & Retail",
    description: "Tu departamento comercial y de marketing externo especializado en farmacias, clínicas y retail de salud.",
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
                  "description": "Departamento comercial y de marketing externo especializado en farmacias, clínicas y retail de salud en Argentina.",
                  "areaServed": { "@type": "Country", "name": "Argentina" },
                  "knowsAbout": [
                    "Automatización de turnos para farmacias",
                    "CRM médico con cumplimiento de datos",
                    "Estrategia de marketing para clínicas de alta especialidad",
                    "Business Intelligence para retail farmacéutico",
                    "Marketing digital para profesionales de la salud"
                  ],
                  "serviceType": ["Marketing Digital", "Business Intelligence", "Automatización", "CRM Médico", "Consultoría Estratégica"],
                  "founders": [
                    { "@type": "Person", "name": "María Soledad Corrao", "jobTitle": "Cofundadora & Directora de Estrategia" },
                    { "@type": "Person", "name": "Ezequiel Ponce de León", "jobTitle": "Cofundador & Director de Implementación Digital" }
                  ],
                  "sameAs": ["https://www.instagram.com/mgmconsulting.health"]
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
