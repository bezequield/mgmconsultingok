import Image from "next/image";

const TEAM = [
  {
    name: "María Soledad Corrao",
    role: "Cofundadora & Directora de Estrategia",
    bio: "Magíster en Marketing Digital (ENEB Barcelona). +16 años en retail farmacéutico con COTO CICSA. Especialista en Diagnóstico Comercial, Business Intelligence y Retail Analytics para droguerías, farmacéuticas y clínicas.",
    img: "/img/soledad.jpg",
    tags: ["Diagnóstico Comercial", "BI & KPIs", "Retail Analytics", "Marketing Estratégico"],
  },
  {
    name: "Ezequiel Ponce de León",
    role: "Cofundador & Director de Implementación Digital",
    bio: "+8 años en ecosistemas digitales. Media Buying, Frontend Design, SEO y Conversion Specialist. Arquitecto de soluciones tecnológicas para el sector salud: automatizaciones, CRM médico e integraciones de sistemas.",
    img: "/img/ezequiel.jpg",
    tags: ["Tech Implementation", "Media Buying", "SEO", "ROI Optimization"],
  },
];

export default function Equipo() {
  return (
    <section id="equipo" className="py-24 sm:py-32 bg-mgm-navy">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 reveal">
          <span className="text-mgm-yellow font-semibold text-sm uppercase tracking-widest">Equipo</span>
          <h2 className="font-anton text-4xl sm:text-5xl lg:text-6xl text-white mt-2">
            DOS PERFILES, UN SOLO CICLO
          </h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Estrategia e implementación bajo un mismo techo. Sin gaps de comunicación, con visión compartida para el sector salud.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {TEAM.map((member, i) => (
            <div
              key={member.name}
              className="reveal flex flex-row gap-6 bg-mgm-navy-l border border-white/10 rounded-2xl p-6 hover:border-mgm-yellow/40 transition-all duration-300"
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              {/* Foto: tamaño fijo para que nunca se deforme */}
              <div className="relative flex-shrink-0 w-24 h-24 sm:w-36 sm:h-36 rounded-xl overflow-hidden">
                <Image
                  src={member.img}
                  alt={member.name}
                  fill
                  sizes="144px"
                  className="object-cover object-top grayscale hover:grayscale-0 transition-all duration-500"
                  style={{ filter: "brightness(0.92) contrast(1.08) saturate(0.75)" }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-mgm-navy-dark/50 to-transparent" />
              </div>

              <div className="flex-1">
                <h3 className="font-bold text-white text-lg">{member.name}</h3>
                <p className="text-mgm-yellow text-sm font-medium mt-1">{member.role}</p>
                <p className="text-gray-400 text-sm mt-3 leading-relaxed">{member.bio}</p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {member.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs bg-mgm-navy border border-white/10 text-gray-300 px-3 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
