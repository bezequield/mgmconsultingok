"use client";

const STEPS = [
  { num: "01", title: "Análisis de Métricas", desc: "Auditoría completa de tus datos actuales: ventas, tráfico, conversiones y puntos de fricción." },
  { num: "02", title: "Informe de Status", desc: "Reporte ejecutivo con hallazgos clave, benchmark del sector y oportunidades identificadas." },
  { num: "03", title: "Propuesta de Mejoras", desc: "Hoja de ruta priorizada con acciones de alto impacto y ROI estimado por iniciativa." },
  { num: "04", title: "Plan de Acción", desc: "Ejecución ordenada: quién hace qué, cuándo y con qué recursos. Sin ambigüedades." },
  { num: "05", title: "Táctica Digital", desc: "Activación de canales: ads, email, RRSS y automatizaciones según el plan acordado." },
  { num: "06", title: "Análisis de ROI", desc: "Medición de resultados vs objetivos. Iteración continua para maximizar el retorno." },
];

export default function Proceso() {
  return (
    <section id="proceso" className="py-24 sm:py-32 bg-mgm-navy-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 reveal">
          <span className="text-mgm-yellow font-semibold text-sm uppercase tracking-widest">Metodología</span>
          <h2 className="font-anton text-4xl sm:text-5xl lg:text-6xl text-white mt-2">
            EL RECORRIDO COMPLETO: E2E
          </h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Seis etapas que garantizan claridad, ejecución y resultados medibles en cada proyecto.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {STEPS.map((step, i) => (
            <div key={step.num}
              className="reveal relative bg-mgm-navy-l border border-white/10 rounded-xl p-6 hover:border-mgm-yellow/40 transition-all duration-300"
              style={{ transitionDelay: `${i * 80}ms` }}>
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-mgm-yellow flex items-center justify-center flex-shrink-0">
                  <span className="font-anton text-mgm-navy-dark text-lg">{step.num}</span>
                </div>
                <h3 className="font-bold text-white text-base">{step.title}</h3>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
