import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Consultoría en Transformación Digital para Droguerías y Farmacéuticas | MGM Consulting",
  description: "Roadmap completo para digitalizar droguerías, farmacéuticas y distribuidoras. Integración ERP/CRM, capacitación de equipos y gestión del cambio organizacional.",
  keywords: "transformación digital droguerías Argentina, digitalización farmacéutica, ERP farmacias, roadmap tecnológico salud, consultoría digital sector farmacéutico",
};

const ROADMAP = [
  {
    fase: "Fase 1",
    duracion: "Semanas 1-4",
    titulo: "Diagnóstico Digital",
    color: "border-mgm-yellow/30",
    items: [
      "Mapeo de todos los sistemas y herramientas actuales",
      "Identificación de brechas tecnológicas críticas",
      "Análisis de procesos manuales con mayor impacto",
      "Benchmark digital vs. competencia del sector",
    ],
  },
  {
    fase: "Fase 2",
    duracion: "Semanas 5-8",
    titulo: "Diseño del Roadmap",
    color: "border-mgm-yellow/50",
    items: [
      "Definición de arquitectura tecnológica objetivo",
      "Priorización de iniciativas por impacto/costo",
      "Plan de inversión con ROI estimado por etapa",
      "Gestión de riesgos y plan de contingencia",
    ],
  },
  {
    fase: "Fase 3",
    duracion: "Meses 3-6",
    titulo: "Implementación Core",
    color: "border-mgm-yellow/70",
    items: [
      "Implementación de sistemas prioritarios",
      "Integración con sistemas existentes (ERP, HIS, POS)",
      "Migración de datos con validación completa",
      "Pruebas piloto en unidades seleccionadas",
    ],
  },
  {
    fase: "Fase 4",
    duracion: "Mes 7 en adelante",
    titulo: "Optimización Continua",
    color: "border-mgm-yellow",
    items: [
      "Capacitación del equipo en nuevas herramientas",
      "Monitoreo de KPIs de adopción tecnológica",
      "Iteración y mejora continua basada en datos",
      "Escalamiento a toda la organización",
    ],
  },
];

const TECNOLOGIAS = [
  { cat: "CRM & Gestión de Pacientes/Clientes", tools: ["HubSpot Healthcare", "Salesforce Health Cloud", "CRM a medida", "Zoho CRM"] },
  { cat: "Business Intelligence", tools: ["Power BI", "Looker Studio", "Tableau", "Dashboards custom"] },
  { cat: "Automatización de Procesos", tools: ["WhatsApp Business API", "Make (Integromat)", "Zapier", "n8n"] },
  { cat: "Gestión Farmacéutica", tools: ["Integración con sistemas POS", "Software de gestión de farmacia", "Sistemas de obras sociales", "Plataformas de e-commerce"] },
];

const SEGMENTOS = [
  {
    segment: "Droguerías & Distribuidoras",
    icon: "🏭",
    desc: "El desafío principal es la integración de datos de toda la cadena: proveedores, almacén, distribución y clientes (farmacias). El roadmap se enfoca en visibilidad total de la operación.",
    prioridades: ["ERP integrado con logística", "Portal B2B para farmacias clientes", "Tracking de pedidos en tiempo real", "Analytics de rentabilidad por ruta/zona"],
  },
  {
    segment: "Farmacéuticas & Laboratorios",
    icon: "🔬",
    desc: "La transformación digital en laboratorios implica digitalizar la cadena comercial, los procesos regulatorios y la relación con distribuidores y farmacias.",
    prioridades: ["CRM para visitadores médicos", "Portal de gestión regulatoria", "Plataforma de capacitación digital", "Analytics de market share"],
  },
  {
    segment: "Cadenas Farmacéuticas",
    icon: "🏪",
    desc: "La escala de una cadena requiere estandarización de procesos en todas las sucursales con flexibilidad local. La clave es un sistema central con autonomía operativa por local.",
    prioridades: ["POS unificado multi-sucursal", "Central de compras digital", "Loyalty program integrado", "BI por sucursal con benchmarking"],
  },
];

export default function TransformacionDigitalPage() {
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
              Servicio 04
            </span>
            <h1 className="font-anton text-4xl sm:text-5xl lg:text-6xl text-white leading-tight mb-6">
              CONSULTORÍA EN<br />
              <span className="text-mgm-yellow">TRANSFORMACIÓN DIGITAL</span>
            </h1>
            <p className="text-gray-300 text-lg leading-relaxed max-w-2xl mb-10">
              El roadmap completo para digitalizar droguerías, farmacéuticas y distribuidoras.
              Desde el diagnóstico hasta la integración ERP/CRM y la capacitación del equipo.
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
                  TRANSFORMACIÓN DIGITAL<br />
                  <span className="text-mgm-yellow">NO ES COMPRAR SOFTWARE</span>
                </h2>
                <p className="text-gray-400 leading-relaxed mb-4">
                  El 70% de los proyectos de transformación digital fracasan. La razón casi siempre es la misma:
                  se elige la tecnología antes de entender el problema, y se implementa sin gestionar el cambio organizacional.
                </p>
                <p className="text-gray-400 leading-relaxed mb-4">
                  En MGM Consulting abordamos la transformación digital desde la estrategia, no desde el software.
                  Primero entendemos tu operación, tus procesos y tu cultura. Después elegimos (o desarrollamos)
                  la tecnología que resuelve el problema real.
                </p>
                <p className="text-gray-400 leading-relaxed">
                  El resultado es una organización que no solo adoptó nuevas herramientas, sino que cambió
                  la forma en que toma decisiones y gestiona su operación.
                </p>
              </div>
              <div className="space-y-4">
                {[
                  { title: "Enfoque Estratégico", desc: "Empezamos por el diagnóstico, no por la herramienta.", icon: "🎯" },
                  { title: "Gestión del Cambio", desc: "La tecnología sin adopción es un costo, no una inversión.", icon: "🔄" },
                  { title: "Integración Real", desc: "Los sistemas que implementamos se conectan con lo que ya tenés.", icon: "🔗" },
                  { title: "ROI Medible", desc: "Cada etapa tiene KPIs claros y resultados cuantificables.", icon: "📊" },
                ].map((item) => (
                  <div key={item.title} className="flex items-start gap-4 bg-mgm-navy-l border border-white/10 rounded-xl p-4">
                    <span className="text-2xl">{item.icon}</span>
                    <div>
                      <h3 className="font-bold text-white text-sm mb-1">{item.title}</h3>
                      <p className="text-gray-400 text-xs leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Roadmap */}
        <section className="py-16 bg-mgm-navy-dark">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="font-anton text-3xl sm:text-4xl text-white">EL ROADMAP MGM</h2>
              <p className="text-gray-400 mt-3">Cuatro fases con entregables concretos en cada etapa.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {ROADMAP.map((fase) => (
                <div key={fase.fase} className={`bg-mgm-navy border ${fase.color} rounded-2xl p-6`}>
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <span className="text-mgm-yellow text-xs font-bold uppercase tracking-widest">{fase.fase}</span>
                      <h3 className="font-bold text-white text-base mt-1">{fase.titulo}</h3>
                    </div>
                    <span className="text-gray-500 text-xs text-right">{fase.duracion}</span>
                  </div>
                  <ul className="space-y-2.5">
                    {fase.items.map((item) => (
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

        {/* Tecnologías */}
        <section className="py-16 bg-mgm-navy">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="font-anton text-3xl sm:text-4xl text-white">TECNOLOGÍAS QUE IMPLEMENTAMOS</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {TECNOLOGIAS.map((cat) => (
                <div key={cat.cat} className="bg-mgm-navy-l border border-white/10 rounded-xl p-5">
                  <h3 className="font-bold text-white text-sm mb-3">{cat.cat}</h3>
                  <div className="flex flex-wrap gap-2">
                    {cat.tools.map((tool) => (
                      <span key={tool} className="text-xs bg-mgm-navy border border-white/10 text-gray-300 px-3 py-1 rounded-full">
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Por segmento */}
        <section className="py-16 bg-mgm-navy-dark">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="font-anton text-3xl sm:text-4xl text-white">ENFOQUE POR ORGANIZACIÓN</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {SEGMENTOS.map((seg) => (
                <div key={seg.segment} className="bg-mgm-navy border border-white/10 rounded-2xl p-6 hover:border-mgm-yellow/40 transition-all duration-300">
                  <div className="text-3xl mb-3">{seg.icon}</div>
                  <h3 className="font-bold text-white text-base mb-3">{seg.segment}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-4">{seg.desc}</p>
                  <h4 className="text-mgm-yellow text-xs font-bold uppercase tracking-widest mb-3">Prioridades</h4>
                  <ul className="space-y-2">
                    {seg.prioridades.map((p) => (
                      <li key={p} className="flex items-start gap-2 text-xs text-gray-400">
                        <span className="text-mgm-yellow flex-shrink-0 mt-0.5">→</span>
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-mgm-navy">
          <div className="max-w-2xl mx-auto px-4 text-center">
            <h2 className="font-anton text-3xl sm:text-4xl text-white mb-4">
              ¿POR DÓNDE EMPEZAR?
            </h2>
            <p className="text-gray-400 mb-8">
              En el diagnóstico gratuito te mostramos el roadmap personalizado para tu tipo de organización, con prioridades claras y resultados esperados en cada etapa.
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
