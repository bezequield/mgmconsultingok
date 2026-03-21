"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Sector } from "@/lib/sectores";
import { BlogPost } from "@/lib/blog-posts";
import Navbar from "@/components/Navbar";
import Contacto from "@/components/Contacto";
import Footer from "@/components/Footer";

interface Props {
  sector: Sector;
  posts: BlogPost[];
}

export default function SectorClientShell({ sector, posts }: Props) {
  const router = useRouter();
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Persist sector selection
    localStorage.setItem("mgm_sector", sector.slug);

    // IntersectionObserver reveal
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("revealed");
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );
    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [sector.slug]);

  const waLink = `https://wa.me/5491100000000?text=${encodeURIComponent(sector.ctaMessage)}`;

  return (
    <>
      <Navbar />
      <main>
        {/* ── HERO ─────────────────────────────────────────────────────── */}
        <section
          ref={heroRef}
          className="relative min-h-[90vh] flex items-center pt-24 pb-16 px-4 overflow-hidden bg-[#070e2a]"
        >
          {/* Grid background */}
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />
          {/* Glow */}
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              background: `radial-gradient(ellipse 70% 50% at 60% 40%, ${sector.accentColor}20 0%, transparent 65%)`,
            }}
          />

          <div className="relative z-10 max-w-6xl mx-auto w-full grid lg:grid-cols-2 gap-12 items-center">
            {/* Left */}
            <div>
              {/* Breadcrumb / sector tag */}
              <div className="flex items-center gap-2 mb-6">
                <button
                  onClick={() => {
                    localStorage.removeItem("mgm_sector");
                    router.push("/");
                  }}
                  className="text-xs text-blue-300/50 hover:text-blue-300 transition-colors"
                >
                  ← Cambiar sector
                </button>
                <span className="text-white/20">·</span>
                <span className="text-xs font-bold px-3 py-1 rounded-full border border-white/10 text-white/60 uppercase tracking-widest">
                  {sector.icon} {sector.shortName}
                </span>
              </div>

              <h1 className="font-anton text-4xl sm:text-5xl lg:text-6xl text-white leading-tight mb-6 whitespace-pre-line">
                {sector.heroTitle}
              </h1>

              <p className="text-blue-200/70 text-base sm:text-lg leading-relaxed mb-8 max-w-lg">
                {sector.heroSubtitle}
              </p>

              {/* Pain point callout */}
              <div className="border-l-2 border-[#f5c842] pl-4 mb-8">
                <p className="text-sm text-[#f5c842]/80 italic leading-relaxed">
                  {sector.painPoint}
                </p>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href={waLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-[#f5c842] text-[#070e2a] font-bold px-6 py-4 rounded-xl hover:bg-[#f5c842]/90 transition-all duration-200 text-sm sm:text-base"
                >
                  💬 {sector.ctaLabel}
                </a>
                <a
                  href="#servicios"
                  className="inline-flex items-center justify-center gap-2 border border-white/20 text-white px-6 py-4 rounded-xl hover:border-white/40 hover:bg-white/5 transition-all duration-200 text-sm sm:text-base"
                >
                  Ver servicios →
                </a>
              </div>
            </div>

            {/* Right — Stats */}
            <div className="grid grid-cols-2 gap-4">
              {sector.stats.map((stat, i) => (
                <div
                  key={i}
                  className="bg-white/[0.04] border border-white/10 rounded-2xl p-5 flex flex-col gap-2"
                >
                  <span
                    className="font-anton text-3xl sm:text-4xl"
                    style={{ color: sector.accentColor }}
                  >
                    {stat.value}
                  </span>
                  <span className="text-xs text-blue-200/60 leading-snug">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── SERVICIOS ────────────────────────────────────────────────── */}
        <section id="servicios" className="py-20 px-4 bg-[#0a1128]">
          <div className="max-w-6xl mx-auto">
            <div className="reveal mb-12 text-center">
              <span className="text-xs font-bold tracking-[0.3em] text-[#f5c842]/70 uppercase mb-3 block">
                Nuestros servicios para {sector.shortName}
              </span>
              <h2 className="font-anton text-3xl sm:text-4xl lg:text-5xl text-white">
                SOLUCIONES DISEÑADAS PARA
                <br />
                <span style={{ color: sector.accentColor }}>TU REALIDAD</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {sector.services.map((svc, i) => (
                <div
                  key={i}
                  className="reveal bg-white/[0.03] border border-white/10 rounded-2xl p-6 hover:border-white/20 hover:bg-white/[0.05] group"
                  style={{ transitionDelay: `${i * 100}ms` }}
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center mb-4 text-lg"
                    style={{ backgroundColor: `${sector.accentColor}20` }}
                  >
                    <span style={{ color: sector.accentColor }}>◆</span>
                  </div>
                  <h3 className="font-bold text-white text-lg mb-2">{svc.title}</h3>
                  <p className="text-blue-200/60 text-sm leading-relaxed mb-4">
                    {svc.description}
                  </p>
                  <Link
                    href={`/servicios/${svc.slug}`}
                    className="text-xs font-bold tracking-wider uppercase"
                    style={{ color: sector.accentColor }}
                  >
                    Ver detalle →
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── PROCESO ─────────────────────────────────────────────────── */}
        <section className="py-20 px-4 bg-[#070e2a]">
          <div className="max-w-4xl mx-auto">
            <div className="reveal mb-12 text-center">
              <span className="text-xs font-bold tracking-[0.3em] text-[#f5c842]/70 uppercase mb-3 block">
                Metodología
              </span>
              <h2 className="font-anton text-3xl sm:text-4xl text-white">
                CÓMO TRABAJAMOS CONTIGO
              </h2>
            </div>
            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-5 top-0 bottom-0 w-px bg-white/10 hidden sm:block" />
              <div className="space-y-8">
                {[
                  {
                    step: "01",
                    title: "Diagnóstico sin cargo",
                    desc: "Analizamos tu situación actual: presencia digital, procesos, competidores. Sin compromiso.",
                  },
                  {
                    step: "02",
                    title: "Propuesta estratégica",
                    desc: "Diseñamos un plan específico para tu segmento con KPIs, plazos y ROI proyectado.",
                  },
                  {
                    step: "03",
                    title: "Implementación Sprint",
                    desc: "Ejecutamos en sprints de 30 días. Ves resultados antes de comprometerte con el siguiente.",
                  },
                  {
                    step: "04",
                    title: "Optimización continua",
                    desc: "Medimos, ajustamos y escalamos. Cada decisión está respaldada por datos.",
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="reveal flex gap-6 items-start"
                    style={{ transitionDelay: `${i * 100}ms` }}
                  >
                    <div
                      className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center font-anton text-sm z-10"
                      style={{
                        backgroundColor: sector.accentColor,
                        color: "#fff",
                      }}
                    >
                      {item.step}
                    </div>
                    <div>
                      <h3 className="font-bold text-white text-base mb-1">{item.title}</h3>
                      <p className="text-blue-200/60 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── BLOG ────────────────────────────────────────────────────── */}
        {posts.length > 0 && (
          <section className="py-20 px-4 bg-[#0a1128]">
            <div className="max-w-6xl mx-auto">
              <div className="reveal mb-12 text-center">
                <span className="text-xs font-bold tracking-[0.3em] text-[#f5c842]/70 uppercase mb-3 block">
                  Inteligencia sectorial
                </span>
                <h2 className="font-anton text-3xl sm:text-4xl text-white">
                  ARTÍCULOS PARA{" "}
                  <span style={{ color: sector.accentColor }}>
                    {sector.shortName.toUpperCase()}
                  </span>
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {posts.slice(0, 3).map((post, i) => (
                  <Link
                    key={post.slug}
                    href={`/blog/${post.slug}`}
                    className="reveal group bg-white/[0.03] border border-white/10 rounded-2xl overflow-hidden hover:border-white/20 hover:bg-white/[0.05] flex flex-col"
                    style={{ transitionDelay: `${i * 100}ms` }}
                  >
                    <div className="p-6 flex flex-col gap-3 flex-1">
                      <span
                        className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full w-fit"
                        style={{
                          backgroundColor: `${sector.accentColor}20`,
                          color: sector.accentColor,
                        }}
                      >
                        {post.category}
                      </span>
                      <h3 className="font-bold text-white text-base leading-snug group-hover:text-[#f5c842] transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-blue-200/50 text-xs leading-relaxed line-clamp-3 flex-1">
                        {post.excerpt}
                      </p>
                      <span className="text-xs font-bold tracking-wider uppercase mt-2" style={{ color: sector.accentColor }}>
                        Leer artículo →
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ── CTA FINAL ────────────────────────────────────────────────── */}
        <section className="py-20 px-4 bg-[#070e2a]">
          <div className="max-w-3xl mx-auto text-center">
            <div className="reveal">
              <span className="text-4xl block mb-6">{sector.icon}</span>
              <h2 className="font-anton text-3xl sm:text-4xl lg:text-5xl text-white mb-4">
                TU {sector.shortName.toUpperCase()} MERECE
                <br />
                <span className="text-[#f5c842]">ESTRATEGIA REAL.</span>
              </h2>
              <p className="text-blue-200/60 text-base sm:text-lg mb-8 leading-relaxed">
                Diagnóstico gratuito. Sin compromiso. En 48 horas tenés un análisis
                personalizado de tu situación y un plan de acción concreto.
              </p>
              <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#f5c842] text-[#070e2a] font-bold px-8 py-4 rounded-xl hover:bg-[#f5c842]/90 transition-all duration-200 text-base"
              >
                💬 {sector.ctaLabel}
              </a>
            </div>
          </div>
        </section>

        <Contacto />
      </main>
      <Footer />
    </>
  );
}
