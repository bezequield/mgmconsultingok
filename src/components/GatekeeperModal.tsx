"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { SECTORES } from "@/lib/sectores";

export default function GatekeeperModal() {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<string | null>(null);
  const [hovering, setHovering] = useState<string | null>(null);

  useEffect(() => {
    // Show modal only if user hasn't selected a sector yet
    const saved = localStorage.getItem("mgm_sector");
    if (!saved) {
      // Small delay so the general page renders first
      const t = setTimeout(() => setOpen(true), 200);
      return () => clearTimeout(t);
    }
  }, []);

  function handleSelect(slug: string) {
    setSelected(slug);
    localStorage.setItem("mgm_sector", slug);
    setTimeout(() => {
      router.push(`/sectores/${slug}`);
    }, 280);
  }

  function handleGeneral() {
    localStorage.setItem("mgm_sector", "general");
    setOpen(false);
  }

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center px-4 py-8">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-[#070e2a]/90 backdrop-blur-sm"
        onClick={handleGeneral}
      />

      {/* Panel */}
      <div className="relative z-10 w-full max-w-3xl bg-[#0d1b4a] border border-white/10 rounded-3xl shadow-2xl shadow-black/60 p-8 sm:p-10">
        {/* Close */}
        <button
          onClick={handleGeneral}
          className="absolute top-4 right-4 text-white/30 hover:text-white/70 transition-colors text-xl leading-none"
          aria-label="Cerrar"
        >
          ✕
        </button>

        {/* Logo */}
        <div className="text-center mb-6">
          <span className="font-anton text-3xl text-white tracking-tight">
            MGM<span className="text-[#f5c842]">.</span>
          </span>
          <p className="text-xs tracking-[0.2em] text-blue-300/50 uppercase mt-1">
            Consultora Estratégica · Sector Salud
          </p>
        </div>

        {/* Headline */}
        <div className="text-center mb-8">
          <h2 className="font-anton text-2xl sm:text-3xl text-white leading-tight">
            ¿EN QUÉ ÁREA DEL{" "}
            <span className="text-[#f5c842]">SECTOR SALUD</span>{" "}
            IMPULSAREMOS TU CRECIMIENTO?
          </h2>
          <p className="text-blue-200/60 text-sm mt-3 leading-relaxed">
            Elegí tu segmento y accedé a estrategias diseñadas específicamente para tu realidad.
          </p>
        </div>

        {/* Cards grid — 4 sectors + 1 general */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-0">
          {SECTORES.map((sector) => {
            const isSelected = selected === sector.slug;
            const isHovered = hovering === sector.slug;

            return (
              <button
                key={sector.slug}
                onClick={() => handleSelect(sector.slug)}
                onMouseEnter={() => setHovering(sector.slug)}
                onMouseLeave={() => setHovering(null)}
                className={`
                  group relative text-left rounded-2xl border p-5 transition-all duration-300
                  focus:outline-none focus:ring-2 focus:ring-[#f5c842]/60
                  ${
                    isSelected
                      ? "border-[#f5c842] bg-[#f5c842]/10 scale-[1.02]"
                      : isHovered
                      ? "border-white/30 bg-white/5 scale-[1.01]"
                      : "border-white/10 bg-white/[0.03] hover:bg-white/5"
                  }
                `}
              >
                <span className="text-2xl block mb-2">{sector.icon}</span>
                <h3
                  className={`font-bold text-sm mb-1 transition-colors duration-200 ${
                    isSelected ? "text-[#f5c842]" : "text-white"
                  }`}
                >
                  {sector.name}
                </h3>
                <p className="text-xs text-blue-200/50 leading-relaxed line-clamp-2">
                  {sector.tagline}
                </p>
                {isSelected && (
                  <span className="absolute inset-0 rounded-2xl ring-2 ring-[#f5c842]/40 pointer-events-none" />
                )}
              </button>
            );
          })}

          {/* Ver consultoría general — card with binoculars icon */}
          <button
            onClick={handleGeneral}
            onMouseEnter={() => setHovering("general")}
            onMouseLeave={() => setHovering(null)}
            className={`
              group relative text-left rounded-2xl border p-5 transition-all duration-300
              focus:outline-none focus:ring-2 focus:ring-[#f5c842]/60
              ${
                hovering === "general"
                  ? "border-[#f5c842]/50 bg-[#f5c842]/5 scale-[1.01]"
                  : "border-white/10 bg-white/[0.03] hover:bg-white/5"
              }
            `}
          >
            {/* Binoculars icon */}
            <span className="text-2xl block mb-2">🔭</span>
            <h3 className="font-bold text-sm mb-1 text-[#f5c842]/80 group-hover:text-[#f5c842] transition-colors">
              Ver consultoría general
            </h3>
            <p className="text-xs text-blue-200/50 leading-relaxed">
              Todos los servicios — sin filtrar por sector
            </p>
          </button>
        </div>
      </div>
    </div>
  );
}
