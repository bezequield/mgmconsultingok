"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { SECTORES } from "@/lib/sectores";

export default function GatekeeperModal() {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<string | null>(null);

  useEffect(() => {
    const saved = localStorage.getItem("mgm_sector");
    if (!saved) {
      const t = setTimeout(() => setOpen(true), 200);
      return () => clearTimeout(t);
    }
  }, []);

  // Lock body scroll while modal is open (prevents iOS Safari scroll-through)
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  function handleSelect(slug: string) {
    setSelected(slug);
    localStorage.setItem("mgm_sector", slug);
    setTimeout(() => router.push(`/sectores/${slug}`), 280);
  }

  function handleGeneral() {
    localStorage.setItem("mgm_sector", "general");
    setOpen(false);
  }

  if (!open) return null;

  return (
    // Backdrop — scrollable so content is never clipped on small screens
    <div
      className="fixed inset-0 z-[9999] bg-[#070e2a]/90 backdrop-blur-sm overflow-y-auto"
      onClick={handleGeneral}
    >
      {/* Centering wrapper — min-h-full keeps it centered even when short */}
      <div className="min-h-screen flex items-center justify-center py-6 px-4" onClick={handleGeneral}>
        {/* Panel — stopPropagation so internal clicks don't close */}
        <div
          className="relative w-full max-w-2xl bg-[#0d1b4a] border border-white/10 rounded-3xl shadow-2xl shadow-black/60 p-4 sm:p-8"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close */}
          <button
            onClick={handleGeneral}
            className="absolute top-3 right-3 w-8 h-8 flex items-center justify-center text-white/40 hover:text-white/80 transition-colors text-lg leading-none"
            aria-label="Cerrar"
          >
            ✕
          </button>

          {/* Logo */}
          <div className="text-center mb-3 sm:mb-5">
            <span className="font-anton text-2xl sm:text-3xl text-white tracking-tight">
              MGM<span className="text-[#f5c842]">.</span>
            </span>
            <p className="text-[10px] tracking-[0.2em] text-blue-300/50 uppercase mt-0.5">
              Consultora Estratégica · Sector Salud
            </p>
          </div>

          {/* Headline */}
          <div className="text-center mb-4 sm:mb-6">
            <h2 className="font-anton text-lg sm:text-3xl text-white leading-tight">
              ¿EN QUÉ ÁREA DEL{" "}
              <span className="text-[#f5c842]">SECTOR SALUD</span>{" "}
              IMPULSAREMOS TU CRECIMIENTO?
            </h2>
            <p className="text-blue-200/60 text-xs sm:text-sm mt-1.5 sm:mt-3 leading-relaxed hidden sm:block">
              Elegí tu segmento y accedé a estrategias diseñadas específicamente para tu realidad.
            </p>
          </div>

          {/* Cards grid — 2 cols on mobile, 3 on desktop */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-3">
            {SECTORES.map((sector) => (
              <button
                key={sector.slug}
                onClick={() => handleSelect(sector.slug)}
                className={`
                  group relative text-left rounded-2xl border p-3 sm:p-5 transition-all duration-200
                  focus:outline-none focus:ring-2 focus:ring-[#f5c842]/60
                  ${selected === sector.slug
                    ? "border-[#f5c842] bg-[#f5c842]/10"
                    : "border-white/10 bg-white/[0.03] active:bg-white/10"
                  }
                `}
              >
                <span className="text-xl sm:text-2xl block mb-1 sm:mb-2">{sector.icon}</span>
                <h3 className={`font-bold text-xs sm:text-sm leading-snug transition-colors duration-200 ${selected === sector.slug ? "text-[#f5c842]" : "text-white"}`}>
                  {sector.name}
                </h3>
                <p className="text-[10px] sm:text-xs text-blue-200/50 mt-0.5 leading-relaxed line-clamp-2 hidden sm:block">
                  {sector.tagline}
                </p>
                {selected === sector.slug && (
                  <span className="absolute inset-0 rounded-2xl ring-2 ring-[#f5c842]/40 pointer-events-none" />
                )}
              </button>
            ))}

            {/* Ver consultoría general */}
            <button
              onClick={handleGeneral}
              className="group relative text-left rounded-2xl border border-white/10 bg-white/[0.03] p-3 sm:p-5 transition-all duration-200 active:bg-[#f5c842]/5 focus:outline-none focus:ring-2 focus:ring-[#f5c842]/60"
            >
              <span className="text-xl sm:text-2xl block mb-1 sm:mb-2">🔭</span>
              <h3 className="font-bold text-xs sm:text-sm text-[#f5c842]/80 group-hover:text-[#f5c842] transition-colors leading-snug">
                Ver consultoría general
              </h3>
              <p className="text-[10px] sm:text-xs text-blue-200/50 mt-0.5 leading-relaxed hidden sm:block">
                Todos los servicios — sin filtrar por sector
              </p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
