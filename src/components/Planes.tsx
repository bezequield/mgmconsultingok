"use client";

const PLANES = [
  {
    id: "essential",
    tag: "DIAGNÓSTICO & BASE DIGITAL",
    name: "Plan Essential",
    featured: false,
    subtitle: "Ideal para farmacias de barrio, consultorios y clínicas que inician su transformación digital.",
    description: "Todo lo que necesitás para establecer tu presencia digital y comenzar a medir resultados reales.",
    features: [
      "Diagnóstico ADN Comercial + KPIs base",
      "Optimización Google My Business",
      "Gestión RRSS (9 posts/mes)",
      "Campañas Google & Meta Ads",
      "Email Marketing mensual",
      "Reporte de performance mensual",
    ],
    cta: "Consultar Disponibilidad",
    ctaStyle: "border border-mgm-yellow text-mgm-yellow hover:bg-mgm-yellow hover:text-mgm-navy-dark",
  },
  {
    id: "growth",
    tag: "AUTOMATIZACIÓN MÉDICA PRO",
    name: "Plan Growth",
    featured: true,
    subtitle: "Diseñado para droguerías, cadenas de farmacias y clínicas en expansión.",
    description: "Automatización inteligente, análisis de retail y performance escalable para negocios en crecimiento.",
    features: [
      "Todo lo del Plan Essential",
      "Retail Analysis & Sell-Out/Sell-In",
      "Captura de datos POS en tiempo real",
      "RRSS ampliadas (12 posts/mes)",
      "Email Marketing quincenal",
      "Automatización de turnos y recordatorios",
      "CRM médico con segmentación de pacientes",
      "Dashboard de BI personalizado",
    ],
    cta: "Empezar Ahora",
    ctaStyle: "bg-mgm-yellow text-mgm-navy-dark hover:bg-yellow-300",
  },
  {
    id: "enterprise",
    tag: "CONSULTORÍA INTEGRAL & DESARROLLO",
    name: "MGM Enterprise",
    featured: false,
    subtitle: "Para laboratorios farmacéuticos, distribuidoras y organizaciones de salud a escala.",
    description: "Soluciones a medida: integración de sistemas, CRM enterprise, desarrollo de plataformas y dirección comercial completa.",
    features: [
      "Dirección Comercial & Marketing completa",
      "Integración de sistemas ERP/CRM",
      "Desarrollo de plataformas a medida",
      "Customer Lifecycle Intelligence",
      "Protocolo WhatsApp automatizado",
      "Shoots foto/video trimestrales",
      "Reportes ejecutivos automáticos",
      "Soporte prioritario dedicado",
    ],
    cta: "Cotización Personalizada",
    ctaStyle: "border border-white/30 text-white hover:border-mgm-yellow hover:text-mgm-yellow",
  },
];

export default function Planes() {
  const handleCTA = () => {
    const target = document.querySelector("#contacto");
    if (target) {
      const top = target.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <section id="planes" className="py-24 sm:py-32 bg-mgm-navy-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 reveal">
          <span className="text-mgm-yellow font-semibold text-sm uppercase tracking-widest">Planes</span>
          <h2 className="font-anton text-4xl sm:text-5xl lg:text-6xl text-white mt-2">
            SIN COSTOS DE ESTRUCTURA INTERNA
          </h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Escalá tu negocio con el plan que mejor se adapta a tus objetivos. Para farmacias, droguerías, clínicas y laboratorios farmacéuticos.
          </p>
        </div>

        {/* Grid con overflow-visible para que el badge del plan destacado no se recorte */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 overflow-visible">
          {PLANES.map((plan) => (
            <div
              key={plan.id}
              className={`
                relative rounded-2xl transition-all duration-300
                ${plan.featured
                  ? "z-[100] bg-mgm-navy border-2 border-mgm-yellow shadow-2xl shadow-mgm-yellow/25 md:scale-[1.04] plan-shine overflow-visible"
                  : "bg-mgm-navy-l border border-white/10 hover:border-mgm-yellow/40 overflow-visible"
                }
              `}
            >
              {/* Badge "Más Popular" — dentro del card con margen negativo para que sobresalga visualmente sin clippearse */}
              {plan.featured && (
                <div className="flex justify-center -mt-4 mb-0 relative z-10">
                  <span className="bg-mgm-yellow text-mgm-navy-dark text-xs font-bold px-5 py-2 rounded-full uppercase tracking-widest shadow-lg shadow-mgm-yellow/40 whitespace-nowrap">
                    ⭐ Más Popular
                  </span>
                </div>
              )}

              <div className={`p-6 lg:p-8 ${plan.featured ? "pt-5" : ""}`}>
                <div className="mb-6">
                  <span className="text-mgm-yellow text-xs font-semibold uppercase tracking-widest">{plan.tag}</span>
                  <h3 className="font-anton text-2xl sm:text-3xl text-white mt-2">{plan.name}</h3>
                  <p className="text-gray-500 text-xs font-medium mt-2 leading-snug">{plan.subtitle}</p>
                  <p className="text-gray-400 text-sm mt-3 leading-relaxed">{plan.description}</p>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-sm text-gray-300">
                      <span className="text-mgm-yellow mt-0.5 flex-shrink-0">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>

                <button
                  onClick={handleCTA}
                  className={`w-full py-3.5 rounded-xl font-bold text-sm transition-all duration-200 ${plan.ctaStyle}`}
                >
                  {plan.cta}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Nota de transparencia */}
        <p className="text-center text-gray-600 text-xs mt-10">
          Los valores se definen en la sesión de diagnóstico según el tamaño y los objetivos de tu organización. Sin letra chica.
        </p>
      </div>
    </section>
  );
}
