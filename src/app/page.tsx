"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { SECTORES } from "@/lib/sectores";

export default function GatekeeperPage() {
  const router = useRouter();
  const [selected, setSelected] = useState<string | null>(null);
  const [hovering, setHovering] = useState<string | null>(null);
  const [previousSector, setPreviousSector] = useState<string | null>(null);

  useEffect(() => {
    // Lee el sector previo sólo para resaltarlo visualmente — nunca redirige
    const saved = localStorage.getItem("mgm_sector");
    if (saved) setPreviousSector(saved);
  }, []);

  function handleSelect(slug: string) {
    setSelected(slug);
    localStorage.setItem("mgm_sector", slug);
    setTimeout(() => {
      router.push(`/sectores/${slug}`);
    }, 320);
  }

  return (
    <main className="min-h-screen bg-[#070e2a] flex flex-col items-center justify-center px-4 py-16 relative overflow-hidden">
      {/* Background radial glow */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 40%, rgba(29,78,216,0.13) 0%, transparent 70%)",
        }}
      />

      {/* Logo */}
      <div className="mb-10 flex flex-col items-center gap-3 z-10">
        <span className="font-anton text-4xl sm:text-5xl text-white tracking-tight">
          MGM<span className="text-[#f5c842]">.</span>
        </span>
        <span className="text-xs tracking-[0.25em] text-blue-300/50 uppercase font-medium text-center">
          Consultora Estratégica · Sector Salud
        </span>
      </div>

      {/* Headline */}
      <div className="text-center z-10 mb-12 max-w-2xl">
        <h1 className="font-anton text-3xl sm:text-4xl lg:text-5xl text-white leading-tight mb-4">
          ¿EN QUÉ ÁREA DEL{" "}
          <span className="text-[#f5c842]">SECTOR SALUD</span>{" "}
          IMPULSAREMOS TU CRECIMIENTO?
        </h1>
        <p className="text-blue-200/70 text-sm sm:text-base leading-relaxed">
          Cada segmento tiene su propia dinámica competitiva. Elegí el tuyo y accedé
          a estrategias diseñadas específicamente para tu realidad.
        </p>
      </div>

      {/* Sector Cards Grid */}
      <div className="z-10 w-full max-w-5xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
        {SECTORES.map((sector, i) => {
          const isSelected = selected === sector.slug;
          const isHovered = hovering === sector.slug;
          const isPrevious = previousSector === sector.slug && !selected;

          return (
            <button
              key={sector.slug}
              onClick={() => handleSelect(sector.slug)}
              onMouseEnter={() => setHovering(sector.slug)}
              onMouseLeave={() => setHovering(null)}
              className={`
                group relative text-left rounded-2xl border p-6 transition-all duration-300
                focus:outline-none focus:ring-2 focus:ring-[#f5c842]/60
                ${
                  isSelected
                    ? "border-[#f5c842] bg-[#f5c842]/10 scale-[1.02]"
                    : isPrevious
                    ? "border-white/25 bg-white/[0.05]"
                    : isHovered
                    ? "border-white/30 bg-white/5 scale-[1.01]"
                    : "border-white/10 bg-white/[0.03] hover:bg-white/5"
                }
                ${i === 4 ? "sm:col-span-2 lg:col-span-1" : ""}
              `}
            >
              {/* Icon */}
              <span className="text-3xl block mb-3">{sector.icon}</span>

              {/* Name */}
              <h2
                className={`font-bold text-base sm:text-lg mb-1 transition-colors duration-200 ${
                  isSelected ? "text-[#f5c842]" : "text-white"
                }`}
              >
                {sector.name}
              </h2>

              {/* Short description */}
              <p className="text-xs sm:text-sm text-blue-200/60 leading-relaxed">
                {sector.tagline}
              </p>

              {/* "Tu sector anterior" badge — discrete */}
              {isPrevious && (
                <span className="absolute top-3 right-3 text-[10px] text-white/30 uppercase tracking-widest">
                  tu sector
                </span>
              )}

              {/* Arrow indicator */}
              <span
                className={`absolute right-5 top-1/2 -translate-y-1/2 text-lg transition-all duration-300 ${
                  isSelected
                    ? "opacity-100 text-[#f5c842] translate-x-0"
                    : isHovered
                    ? "opacity-80 text-white translate-x-0"
                    : "opacity-0 -translate-x-2"
                }`}
              >
                →
              </span>

              {/* Selected shimmer overlay */}
              {isSelected && (
                <span className="absolute inset-0 rounded-2xl ring-2 ring-[#f5c842]/40 pointer-events-none" />
              )}
            </button>
          );
        })}
      </div>

      {/* Divider */}
      <div className="z-10 flex items-center gap-4 w-full max-w-sm mb-6">
        <div className="flex-1 h-px bg-white/10" />
        <span className="text-xs text-white/30 uppercase tracking-widest">o</span>
        <div className="flex-1 h-px bg-white/10" />
      </div>

      {/* Consultoría General — discrete link */}
      <div className="z-10 text-center">
        <Link
          href="/general"
          className="text-sm text-blue-300/50 hover:text-blue-300/80 underline underline-offset-4 transition-colors duration-200"
          onClick={() => localStorage.removeItem("mgm_sector")}
        >
          Ver consultoría general (todos los servicios)
        </Link>
      </div>

      {/* Bottom badge */}
      <p className="absolute bottom-6 text-[11px] text-white/20 tracking-wider z-10">
        MGM CONSULTING · ARGENTINA · 2026
      </p>
    </main>
  );
}
