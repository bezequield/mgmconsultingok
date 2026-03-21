"use client";
import { useState } from "react";

interface Step {
  num: string;
  title: string;
  desc: string;
  detail: string;
  kpis: string[];
}

const STEPS: Step[] = [
  {
    num: "01",
    title: "Análisis de Métricas",
    desc: "Auditoría completa de tus datos actuales: ventas, tráfico, conversiones y puntos de fricción.",
    detail: "Realizamos un relevamiento profundo de todas las fuentes de datos de tu organización: sistemas POS, Google Analytics, CRM, reportes de ventas y métricas operativas. Identificamos brechas, inconsistencias y oportunidades que el ojo humano no siempre detecta.",
    kpis: ["Tasa de conversión actual", "Costo por adquisición (CPA)", "Ticket promedio", "Frecuencia de compra", "Tasa de retención"],
  },
  {
    num: "02",
    title: "Informe de Status",
    desc: "Reporte ejecutivo con hallazgos clave, benchmark del sector y oportunidades identificadas.",
    detail: "Elaboramos un informe ejecutivo diseñado para directores y gerentes: datos concretos, benchmarks sectoriales comparados con tu competencia directa y un ranking de prioridades de mejora con impacto estimado en facturación.",
    kpis: ["Benchmark vs. sector", "Mapa de oportunidades", "Gap analysis comercial", "Potencial de UPLIFT estimado"],
  },
  {
    num: "03",
    title: "Propuesta de Mejoras",
    desc: "Hoja de ruta priorizada con acciones de alto impacto y ROI estimado por iniciativa.",
    detail: "Presentamos un roadmap priorizado por impacto y viabilidad. Cada iniciativa viene con: ROI estimado, tiempo de implementación, recursos requeridos y riesgo asociado. Sin promesas vacías, con números reales.",
    kpis: ["ROI proyectado por acción", "Timeline de implementación", "Recursos necesarios", "Indicadores de éxito"],
  },
  {
    num: "04",
    title: "Plan de Acción",
    desc: "Ejecución ordenada: quién hace qué, cuándo y con qué recursos. Sin ambigüedades.",
    detail: "Transformamos el roadmap en un plan operativo con responsables, fechas, hitos y presupuesto. Usamos metodologías ágiles adaptadas al sector salud para garantizar trazabilidad completa del avance.",
    kpis: ["Hitos semanales medibles", "Responsables definidos", "Presupuesto asignado", "Sistema de seguimiento"],
  },
  {
    num: "05",
    title: "Táctica Digital",
    desc: "Activación de canales: ads, email, RRSS y automatizaciones según el plan acordado.",
    detail: "Activamos todos los canales digitales de forma coordinada: campañas de Google y Meta Ads optimizadas para el sector salud, automatizaciones de WhatsApp, email marketing segmentado y gestión de redes sociales con contenido de autoridad médica.",
    kpis: ["CTR de campañas", "Costo por lead calificado", "Tasa de apertura email", "Alcance orgánico"],
  },
  {
    num: "06",
    title: "Análisis de ROI",
    desc: "Medición de resultados vs. objetivos. Iteración continua para maximizar el retorno.",
    detail: "Cerramos el ciclo E2E con análisis riguroso de resultados contra objetivos. Dashboard ejecutivo en tiempo real, reuniones de performance mensuales y ajuste estratégico continuo. El objetivo siempre es el UPLIFT real y medible.",
    kpis: ["ROAS por canal", "UPLIFT en facturación", "NPS de pacientes/clientes", "Eficiencia operativa ganada"],
  },
];

export default function Proceso() {
  const [modal, setModal] = useState<Step | null>(null);

  return (
    <>
      <section id="proceso" className="py-24 sm:py-32 bg-mgm-navy-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 reveal">
            <span className="text-mgm-yellow font-semibold text-sm uppercase tracking-widest">Metodología</span>
            <h2 className="font-anton text-4xl sm:text-5xl lg:text-6xl text-white mt-2">
              EL RECORRIDO COMPLETO: E2E
            </h2>
            <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
              Seis etapas que garantizan claridad, ejecución y resultados medibles.
              Tocá cada paso para ver los detalles y KPIs específicos.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {STEPS.map((step, i) => (
              <button
                key={step.num}
                onClick={() => setModal(step)}
                className="reveal text-left relative bg-mgm-navy-l border border-white/10 rounded-xl p-6 hover:border-mgm-yellow/60 hover:bg-mgm-navy transition-all duration-300 group cursor-pointer w-full"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-mgm-yellow flex items-center justify-center flex-shrink-0">
                    <span className="font-anton text-mgm-navy-dark text-lg">{step.num}</span>
                  </div>
                  <h3 className="font-bold text-white text-base group-hover:text-mgm-yellow transition-colors">
                    {step.title}
                  </h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">{step.desc}</p>
                <div className="mt-4 flex items-center gap-2 text-mgm-yellow/60 group-hover:text-mgm-yellow transition-colors">
                  <span className="text-xs font-semibold uppercase tracking-widest">Ver KPIs</span>
                  <span className="text-xs">→</span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Modal informativo */}
      {modal && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6"
          onClick={() => setModal(null)}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />

          {/* Modal content */}
          <div
            className="relative bg-mgm-navy border border-mgm-yellow/30 rounded-2xl p-6 sm:p-8 max-w-lg w-full shadow-2xl shadow-mgm-yellow/10 max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-start justify-between mb-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-mgm-yellow flex items-center justify-center flex-shrink-0">
                  <span className="font-anton text-mgm-navy-dark text-lg">{modal.num}</span>
                </div>
                <div>
                  <p className="text-mgm-yellow text-xs font-semibold uppercase tracking-widest">Etapa {modal.num}</p>
                  <h3 className="font-bold text-white text-xl">{modal.title}</h3>
                </div>
              </div>
              <button
                onClick={() => setModal(null)}
                className="text-gray-500 hover:text-white transition-colors flex-shrink-0 ml-4"
                aria-label="Cerrar"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Detail */}
            <p className="text-gray-300 text-sm leading-relaxed mb-6">{modal.detail}</p>

            {/* KPIs */}
            <div className="bg-mgm-navy-dark rounded-xl p-4">
              <p className="text-mgm-yellow text-xs font-bold uppercase tracking-widest mb-3">
                KPIs que medimos en esta etapa
              </p>
              <ul className="space-y-2">
                {modal.kpis.map((kpi) => (
                  <li key={kpi} className="flex items-center gap-3 text-sm text-gray-300">
                    <span className="text-mgm-yellow text-xs flex-shrink-0">◆</span>
                    {kpi}
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA */}
            <a
              href="#contacto"
              onClick={() => setModal(null)}
              className="mt-6 w-full block text-center bg-mgm-yellow text-mgm-navy-dark font-bold py-3 rounded-xl hover:bg-yellow-300 transition-colors text-sm"
            >
              Quiero aplicar esta metodología →
            </a>
          </div>
        </div>
      )}
    </>
  );
}
