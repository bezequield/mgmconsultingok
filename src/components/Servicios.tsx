"use client";

const SERVICIOS = [
  { num: "01", icon: "📊", title: "Business Intelligence & KPIs", desc: "Diagnóstico ADN Comercial. Convertimos datos de tu negocio en decisiones estratégicas medibles.", slug: "auditoria-comercial" },
  { num: "02", icon: "🎯", title: "Estrategia End-to-End", desc: "Del análisis de mercado al anuncio activo. Una sola consultora, ciclo completo.", slug: "estrategia-e2e" },
  { num: "03", icon: "⚙️", title: "Automatización con IA", desc: "Turnos, recordatorios, WhatsApp y CRM automatizados para farmacias y clínicas.", slug: "automatizaciones-ia" },
  { num: "04", icon: "📱", title: "Redes Sociales & Contenido", desc: "Gestión profesional de RRSS con contenido médico y farmacéutico auténtico.", slug: "redes-sociales" },
  { num: "05", icon: "📢", title: "Publicidad Digital", desc: "Campañas Google Ads y Meta Ads optimizadas para el sector salud y retail.", slug: "publicidad-digital" },
  { num: "06", icon: "📧", title: "Email Marketing", desc: "Comunicación segmentada con pacientes y clientes para maximizar retención.", slug: "email-marketing" },
  { num: "07", icon: "🌐", title: "Sitios Web & Landing Pages", desc: "Desarrollo de sitios optimizados para SEO y conversión en el sector salud.", slug: "sitios-web" },
];

export default function Servicios() {
  return (
    <section id="servicios" className="py-24 sm:py-32 bg-mgm-navy">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 reveal">
          <span className="text-mgm-yellow font-semibold text-sm uppercase tracking-widest">Servicios</span>
          <h2 className="font-anton text-4xl sm:text-5xl lg:text-6xl text-white mt-2">
            UNA SOLA CONSULTORA,<br />CICLO COMPLETO
          </h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Desde el diagnóstico inicial hasta la optimización continua. Sin intermediarios, sin silos, sin excusas.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {SERVICIOS.map((s, i) => (
            <div key={s.num}
              className="reveal group bg-mgm-navy-l border border-white/10 rounded-xl p-6 hover:border-mgm-yellow/60 hover:bg-mgm-navy-hover transition-all duration-300 cursor-pointer"
              style={{ transitionDelay: `${i * 60}ms` }}>
              <div className="flex items-start justify-between mb-4">
                <span className="text-3xl">{s.icon}</span>
                <span className="font-anton text-4xl text-mgm-yellow/20 group-hover:text-mgm-yellow/40 transition-colors">{s.num}</span>
              </div>
              <h3 className="font-bold text-white text-base mb-2 group-hover:text-mgm-yellow transition-colors">{s.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{s.desc}</p>
              <div className="mt-4 w-0 h-0.5 bg-mgm-yellow group-hover:w-full transition-all duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
