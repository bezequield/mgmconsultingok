import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Estrategia de Crecimiento & Ads para el Sector Salud | MGM Consulting",
  description: "Pauta digital basada en ROI para farmacias, droguerías y clínicas. Google Ads y Meta Ads optimizados para el sector salud con cumplimiento de las políticas de publicidad médica.",
  keywords: "publicidad digital farmacias Argentina, Google Ads sector salud, Meta Ads clínicas, ROI marketing salud, campañas digitales farmacéutico",
};

const CANALES = [
  {
    icon: "🔍",
    title: "Google Search Ads",
    desc: "Capturamos la demanda activa: pacientes y clientes que ya están buscando tu servicio o producto. Alta intención de compra, máximo retorno.",
    highlights: ["Keywords de alta intencionalidad médica", "Extensiones de ubicación para farmacias", "Grupos de anuncios por especialidad"],
  },
  {
    icon: "📱",
    title: "Meta Ads (Facebook & Instagram)",
    desc: "Construcción de audiencias hipersegmentadas por zona, comportamiento y datos demográficos. Ideal para farmacias de barrio, clínicas de estética y retail de salud.",
    highlights: ["Audiencias lookalike de pacientes actuales", "Retargeting de visitantes del sitio", "Campañas de WhatsApp directo"],
  },
  {
    icon: "📍",
    title: "Google My Business & Local",
    desc: "Para farmacias y consultorios: la búsqueda local es donde se ganan o pierden clientes nuevos cada día. Optimización completa del perfil y estrategia de reseñas.",
    highlights: ["Optimización de perfil y categorías", "Estrategia de reseñas auténticas", "Posts y actualizaciones regulares"],
  },
  {
    icon: "🎯",
    title: "Remarketing & Funnel Completo",
    desc: "No alcanza con captar el clic. Diseñamos el funnel completo desde el anuncio hasta la conversión: página de destino, formulario y seguimiento post-conversión.",
    highlights: ["Landing pages optimizadas para salud", "Seguimiento de conversiones real", "A/B testing continuo"],
  },
];

const SEGMENTOS = [
  {
    segment: "Farmacias de Barrio",
    icon: "💊",
    estrategia: "Google My Business + Search local + Meta Ads de cercanía",
    kpis: ["+45% en nuevos clientes desde búsqueda orgánica local", "Costo por nuevo cliente -60% vs. referidos tradicionales"],
  },
  {
    segment: "Retail Farmacéutico & Perfumería",
    icon: "🏪",
    estrategia: "Meta Ads con audiencias de interés + Google Shopping cuando aplica",
    kpis: ["ROAS promedio 4.5x en campañas de perfumería", "+35% en ticket promedio con campañas de upsell"],
  },
  {
    segment: "Clínicas de Alta Especialidad",
    icon: "🏥",
    estrategia: "Google Search de alta intención + contenido de autoridad + remarketing",
    kpis: ["+127% en consultas orgánicas en 6 meses", "Costo por consulta calificada -34%"],
  },
  {
    segment: "Laboratorios & Droguerías (B2B)",
    icon: "🔬",
    estrategia: "LinkedIn Ads + Google Search B2B + email marketing segmentado",
    kpis: ["Ciclo de venta -40% con nurturing automatizado", "+3x en leads calificados por trimestre"],
  },
];

export default function EstrategiaAdsPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-mgm-navy-dark pt-20">
        {/* Hero */}
        <section className="py-16 sm:py-24 bg-mgm-navy-dark">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-4">
              <Link href="/#servicios" className="text-mgm-yellow text-sm hover:underline">
                ← Volver a Servicios
              </Link>
            </div>
            <span className="inline-block bg-mgm-yellow/10 border border-mgm-yellow/30 text-mgm-yellow text-xs font-semibold px-4 py-1.5 rounded-full tracking-widest uppercase mb-6">
              Servicio 03
            </span>
            <h1 className="font-anton text-4xl sm:text-5xl lg:text-6xl text-white leading-tight mb-6">
              ESTRATEGIA DE<br />
              <span className="text-mgm-yellow">CRECIMIENTO & ADS</span>
            </h1>
            <p className="text-gray-300 text-lg leading-relaxed max-w-2xl mb-10">
              Pauta digital basada en ROI para el sector salud. No compramos clicks: construimos sistemas de captación
              de pacientes y clientes que se optimizan solos con el tiempo.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/#contacto"
                className="inline-block bg-mgm-yellow text-mgm-navy-dark font-bold px-8 py-4 rounded-xl hover:bg-yellow-300 transition-colors text-base text-center"
              >
                Diagnóstico Gratuito →
              </Link>
              <Link
                href="/#planes"
                className="inline-block border border-white/20 text-white font-semibold px-8 py-4 rounded-xl hover:border-mgm-yellow hover:text-mgm-yellow transition-colors text-base text-center"
              >
                Ver Planes
              </Link>
            </div>
          </div>
        </section>

        {/* Filosofía ROI */}
        <section className="py-16 bg-mgm-navy">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div>
                <h2 className="font-anton text-3xl sm:text-4xl text-white mb-6">
                  PUBLICIDAD EN SALUD:<br />
                  <span className="text-mgm-yellow">LAS REGLAS SON DISTINTAS</span>
                </h2>
                <p className="text-gray-400 leading-relaxed mb-4">
                  Las plataformas de publicidad digital tienen políticas específicas para el sector salud que muchas
                  agencias genéricas no conocen. Un anuncio mal configurado puede resultar en la suspensión de la cuenta,
                  multas regulatorias o daños reputacionales.
                </p>
                <p className="text-gray-400 leading-relaxed mb-4">
                  En MGM diseñamos campañas que son <strong className="text-white">efectivas Y compliant</strong>:
                  respetan las políticas de Meta y Google para salud, la legislación argentina de publicidad médica
                  y los estándares éticos de cada especialidad.
                </p>
                <p className="text-gray-400 leading-relaxed">
                  El resultado: campañas que funcionan, cuentas que no se suspenden y una reputación que se construye,
                  no que se destruye.
                </p>
              </div>
              <div className="space-y-4">
                <div className="bg-mgm-navy-l border border-white/10 rounded-xl p-5">
                  <h3 className="font-bold text-white text-sm mb-3">Lo que medimos siempre:</h3>
                  <div className="grid grid-cols-2 gap-3">
                    {["ROAS por canal", "CPA real", "LTV del paciente", "Tasa de conversión", "Costo por consulta calificada", "Retención a 6 meses"].map((m) => (
                      <div key={m} className="flex items-center gap-2 text-xs text-gray-300">
                        <span className="text-mgm-yellow">◆</span> {m}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="bg-mgm-yellow/10 border border-mgm-yellow/30 rounded-xl p-5">
                  <p className="text-mgm-yellow text-sm font-bold mb-1">Nuestro compromiso:</p>
                  <p className="text-gray-300 text-sm">Si no podemos proyectar un ROI positivo para tu tipo de negocio, te lo decimos antes de cobrar un peso. Sin compromisos vacíos.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Canales */}
        <section className="py-16 bg-mgm-navy-dark">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="font-anton text-3xl sm:text-4xl text-white">CANALES QUE ACTIVAMOS</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {CANALES.map((canal) => (
                <div key={canal.title} className="bg-mgm-navy border border-white/10 rounded-xl p-6 hover:border-mgm-yellow/40 transition-all duration-300">
                  <div className="text-3xl mb-3">{canal.icon}</div>
                  <h3 className="font-bold text-white text-base mb-2">{canal.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-4">{canal.desc}</p>
                  <ul className="space-y-1.5">
                    {canal.highlights.map((h) => (
                      <li key={h} className="flex items-center gap-2 text-xs text-gray-500">
                        <span className="text-mgm-yellow">→</span> {h}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Estrategia por segmento */}
        <section className="py-16 bg-mgm-navy">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="font-anton text-3xl sm:text-4xl text-white">ESTRATEGIA POR SEGMENTO</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {SEGMENTOS.map((seg) => (
                <div key={seg.segment} className="bg-mgm-navy-l border border-white/10 rounded-xl p-6 hover:border-mgm-yellow/40 transition-all duration-300">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-2xl">{seg.icon}</span>
                    <h3 className="font-bold text-white text-base">{seg.segment}</h3>
                  </div>
                  <p className="text-mgm-yellow text-xs font-semibold uppercase tracking-widest mb-2">Enfoque</p>
                  <p className="text-gray-400 text-sm mb-4">{seg.estrategia}</p>
                  <p className="text-mgm-yellow text-xs font-semibold uppercase tracking-widest mb-2">Resultados típicos</p>
                  <ul className="space-y-1.5">
                    {seg.kpis.map((kpi) => (
                      <li key={kpi} className="text-xs text-gray-300 flex items-start gap-2">
                        <span className="text-mgm-yellow flex-shrink-0 mt-0.5">✓</span>
                        {kpi}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-mgm-navy-dark">
          <div className="max-w-2xl mx-auto px-4 text-center">
            <h2 className="font-anton text-3xl sm:text-4xl text-white mb-4">
              ¿CUÁNTO DEBERÍAS INVERTIR EN ADS?
            </h2>
            <p className="text-gray-400 mb-8">
              En el diagnóstico gratuito calculamos el presupuesto óptimo para tu tipo de negocio y los resultados proyectados antes de gastar un peso.
            </p>
            <Link
              href="/#contacto"
              className="inline-block bg-mgm-yellow text-mgm-navy-dark font-bold px-10 py-4 rounded-xl hover:bg-yellow-300 transition-colors text-base"
            >
              Solicitar Diagnóstico Gratuito →
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
