"use client";
import Link from "next/link";

const SERVICIOS = [
  {
    num: "01",
    icon: "📊",
    title: "Business Intelligence & KPIs",
    desc: "Transformamos datos de droguerías, clínicas y farmacias en decisiones estratégicas medibles. Dashboard, Sell-Out y reportes ejecutivos.",
    href: "/servicios/business-intelligence",
    audiences: ["Droguerías", "Clínicas", "Directores"],
  },
  {
    num: "02",
    icon: "⚙️",
    title: "Automatización de Procesos & CRM",
    desc: "Reducimos la carga operativa: turnos automáticos, recordatorios WhatsApp y CRM médico con cumplimiento de datos para farmacias y consultorios.",
    href: "/servicios/automatizacion-crm",
    audiences: ["Farmacias", "Consultorios", "Cadenas"],
  },
  {
    num: "03",
    icon: "📢",
    title: "Estrategia de Crecimiento & Ads",
    desc: "Pauta digital basada en ROI para el sector salud. Google Ads y Meta Ads optimizados para farmacias de barrio, retail y clínicas especializadas.",
    href: "/servicios/estrategia-ads",
    audiences: ["Retail Salud", "Laboratorios", "Clínicas"],
  },
  {
    num: "04",
    icon: "🔄",
    title: "Consultoría en Transformación Digital",
    desc: "El roadmap completo para digitalizar droguerías y farmacéuticas. Desde el diagnóstico hasta la integración ERP/CRM y la capacitación del equipo.",
    href: "/servicios/transformacion-digital",
    audiences: ["Farmacéuticas", "Distribuidoras", "Laboratorios"],
  },
  {
    num: "05",
    icon: "📱",
    title: "Redes Sociales & Contenido Médico",
    desc: "Gestión profesional de RRSS con contenido médico y farmacéutico auténtico. Autoridad de marca sin comprometer la ética profesional.",
    href: "/#servicios",
    audiences: ["Clínicas", "Profesionales", "Farmacias"],
  },
  {
    num: "06",
    icon: "🎯",
    title: "Estrategia End-to-End",
    desc: "Del análisis de mercado al anuncio activo. Una sola consultora, ciclo completo, sin intermediarios ni silos.",
    href: "/#servicios",
    audiences: ["Todos los segmentos"],
  },
  {
    num: "07",
    icon: "📧",
    title: "Email Marketing Segmentado",
    desc: "Comunicación automatizada y segmentada con pacientes y clientes para maximizar retención y ticket promedio en el sector salud.",
    href: "/#servicios",
    audiences: ["Farmacias", "Clínicas", "Droguerías"],
  },
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
            Para <strong className="text-white">droguerías, farmacéuticas, clínicas</strong> y profesionales de la salud.
            Desde el diagnóstico inicial hasta la optimización continua.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {SERVICIOS.map((s, i) => (
            <Link
              key={s.num}
              href={s.href}
              className="reveal group bg-mgm-navy-l border border-white/10 rounded-xl p-6 hover:border-mgm-yellow/60 hover:bg-mgm-navy-hover transition-all duration-300 cursor-pointer block"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <div className="flex items-start justify-between mb-4">
                <span className="text-3xl">{s.icon}</span>
                <span className="font-anton text-4xl text-mgm-yellow/20 group-hover:text-mgm-yellow/40 transition-colors">
                  {s.num}
                </span>
              </div>
              <h3 className="font-bold text-white text-base mb-2 group-hover:text-mgm-yellow transition-colors">
                {s.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">{s.desc}</p>

              {/* Audiencias */}
              <div className="flex flex-wrap gap-1.5 mb-4">
                {s.audiences.map((aud) => (
                  <span
                    key={aud}
                    className="text-xs text-mgm-yellow/70 border border-mgm-yellow/20 px-2 py-0.5 rounded-full"
                  >
                    {aud}
                  </span>
                ))}
              </div>

              <div className="mt-auto w-0 h-0.5 bg-mgm-yellow group-hover:w-full transition-all duration-300" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
