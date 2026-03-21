import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Business Intelligence & KPIs para Clínicas y Droguerías | MGM Consulting",
  description: "Transformamos datos de droguerías, farmacias y clínicas en decisiones estratégicas medibles. Dashboards ejecutivos, Sell-Out/Sell-In y análisis de KPIs en tiempo real.",
  keywords: "business intelligence droguerías, KPIs farmacias Argentina, dashboard clínicas, retail analytics salud, sell-out farmacéutico",
};

const BENEFICIOS = [
  {
    segment: "Droguerías & Distribuidoras",
    icon: "🏭",
    items: [
      "Análisis Sell-In vs. Sell-Out por canal y período",
      "Detección de quiebres de stock antes de que ocurran",
      "Rentabilidad por línea de producto y laboratorio",
      "Dashboard de cobranzas y cuentas por cobrar",
    ],
  },
  {
    segment: "Clínicas & Consultorios",
    icon: "🏥",
    items: [
      "Tasa de ocupación y proyección de agenda",
      "Análisis de rentabilidad por especialidad",
      "Indicadores de satisfacción de pacientes (NPS)",
      "Seguimiento de objetivos comerciales por período",
    ],
  },
  {
    segment: "Farmacias & Cadenas",
    icon: "💊",
    items: [
      "Performance por sucursal y por producto",
      "Análisis de obra social: acreditación y rechazos",
      "Identificación de productos ancla vs. de margen",
      "Alertas automáticas por desvío de KPIs",
    ],
  },
];

const PROCESO = [
  { step: "01", title: "Auditoría de fuentes de datos", desc: "Mapeamos todos los sistemas actuales: POS, ERP, planillas, CRM y cualquier otra fuente de datos relevante." },
  { step: "02", title: "Diseño del modelo de KPIs", desc: "Co-diseñamos con la dirección el set de indicadores que realmente importan para tu tipo de organización." },
  { step: "03", title: "Implementación del dashboard", desc: "Construimos el dashboard ejecutivo conectado a tus fuentes de datos. Actualización automática, sin intervención manual." },
  { step: "04", title: "Capacitación y adopción", desc: "Entrenamos a tu equipo para leer, interpretar y actuar sobre los datos. Un dashboard que nadie usa no sirve de nada." },
];

export default function BusinessIntelligencePage() {
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
              Servicio 01
            </span>
            <h1 className="font-anton text-4xl sm:text-5xl lg:text-6xl text-white leading-tight mb-6">
              BUSINESS INTELLIGENCE<br />
              <span className="text-mgm-yellow">& KPIs</span>
            </h1>
            <p className="text-gray-300 text-lg leading-relaxed max-w-2xl mb-10">
              Transformamos los datos de tu droguería, clínica o farmacia en decisiones estratégicas medibles.
              Del caos de planillas al dashboard ejecutivo que todo director necesita.
            </p>
            <Link
              href="/#contacto"
              className="inline-block bg-mgm-yellow text-mgm-navy-dark font-bold px-8 py-4 rounded-xl hover:bg-yellow-300 transition-colors text-base"
            >
              Diagnóstico Gratuito →
            </Link>
          </div>
        </section>

        {/* ¿Qué es? */}
        <section className="py-16 bg-mgm-navy">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div>
                <h2 className="font-anton text-3xl sm:text-4xl text-white mb-6">
                  ¿QUÉ ES EL BI<br />EN EL SECTOR SALUD?
                </h2>
                <p className="text-gray-400 leading-relaxed mb-4">
                  Business Intelligence (BI) es la capacidad de convertir datos operativos en información accionable.
                  En el sector salud, esto significa transformar datos de ventas, atención, stock y facturación en
                  indicadores claros que permiten a los directores tomar mejores decisiones, más rápido.
                </p>
                <p className="text-gray-400 leading-relaxed mb-4">
                  La mayoría de las organizaciones de salud en Argentina ya tienen los datos. El problema es que
                  están dispersos en sistemas incompatibles, planillas de Excel y reportes manuales que llegan tarde
                  y con errores.
                </p>
                <p className="text-gray-400 leading-relaxed">
                  MGM Consulting conecta esas fuentes, estandariza la información y la presenta en dashboards
                  ejecutivos que cualquier director puede leer sin necesidad de un analista de datos.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: "48h", label: "Tiempo promedio de setup del primer dashboard" },
                  { value: "100%", label: "Decisiones basadas en datos reales" },
                  { value: "-60%", label: "Reducción en tiempo de generación de reportes" },
                  { value: "+25%", label: "Mejora típica en margen bruto al optimizar mix" },
                ].map((kpi) => (
                  <div key={kpi.value} className="bg-mgm-navy-l border border-white/10 rounded-xl p-5 text-center">
                    <div className="font-anton text-3xl text-mgm-yellow mb-2">{kpi.value}</div>
                    <p className="text-gray-400 text-xs leading-relaxed">{kpi.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Beneficios por segmento */}
        <section className="py-16 bg-mgm-navy-dark">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="font-anton text-3xl sm:text-4xl text-white">
                BENEFICIOS POR SEGMENTO
              </h2>
              <p className="text-gray-400 mt-3 max-w-xl mx-auto">
                El BI no es genérico. Lo adaptamos a las necesidades específicas de cada tipo de organización de salud.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {BENEFICIOS.map((seg) => (
                <div key={seg.segment} className="bg-mgm-navy border border-white/10 rounded-2xl p-6 hover:border-mgm-yellow/40 transition-all duration-300">
                  <div className="text-3xl mb-3">{seg.icon}</div>
                  <h3 className="font-bold text-white text-base mb-4">{seg.segment}</h3>
                  <ul className="space-y-3">
                    {seg.items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-gray-400">
                        <span className="text-mgm-yellow mt-1 flex-shrink-0 text-xs">✓</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Cómo lo aplica MGM */}
        <section className="py-16 bg-mgm-navy">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="font-anton text-3xl sm:text-4xl text-white">CÓMO LO APLICA MGM</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {PROCESO.map((p) => (
                <div key={p.step} className="bg-mgm-navy-l border border-white/10 rounded-xl p-6 flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-mgm-yellow flex items-center justify-center flex-shrink-0">
                    <span className="font-anton text-mgm-navy-dark text-sm">{p.step}</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-sm mb-2">{p.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA final */}
        <section className="py-16 bg-mgm-navy-dark">
          <div className="max-w-2xl mx-auto px-4 text-center">
            <h2 className="font-anton text-3xl sm:text-4xl text-white mb-4">
              ¿TUS DATOS TRABAJAN PARA VOS?
            </h2>
            <p className="text-gray-400 mb-8">
              En 60 minutos de diagnóstico gratuito te mostramos qué KPIs deberías estar midiendo y por qué no los estás midiendo todavía.
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
