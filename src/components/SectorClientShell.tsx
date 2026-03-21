"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Sector } from "@/lib/sectores";
import { BlogPost } from "@/lib/blog-posts";
import Navbar from "@/components/Navbar";
import Contacto from "@/components/Contacto";
import Footer from "@/components/Footer";
import ParticleCanvas from "@/components/ParticleCanvas";

interface Props {
  sector: Sector;
  posts: BlogPost[];
}

function useTypewriter(words: string[]) {
  const [text, setText] = useState("");
  const [wordIdx, setWordIdx] = useState(0);
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    const current = words[wordIdx];
    let timeout: ReturnType<typeof setTimeout>;

    if (typing) {
      if (text.length < current.length) {
        timeout = setTimeout(() => setText(current.slice(0, text.length + 1)), 38);
      } else {
        timeout = setTimeout(() => setTyping(false), 1400);
      }
    } else {
      if (text.length > 0) {
        timeout = setTimeout(() => setText(text.slice(0, -1)), 16);
      } else {
        timeout = setTimeout(() => {
          setWordIdx((i) => (i + 1) % words.length);
          setTyping(true);
        }, 200);
      }
    }

    return () => clearTimeout(timeout);
  }, [text, typing, wordIdx, words]);

  return text;
}

export default function SectorClientShell({ sector, posts }: Props) {
  const router = useRouter();
  const typeText = useTypewriter(sector.heroWords);

  useEffect(() => {
    localStorage.setItem("mgm_sector", sector.slug);

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
        <section className="relative min-h-[90vh] flex items-center pt-24 pb-16 px-4 overflow-hidden bg-[#070e2a]">
          {/* Particles */}
          <ParticleCanvas />

          {/* Grid overlay */}
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.035]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(245,200,66,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(245,200,66,0.3) 1px, transparent 1px)",
              backgroundSize: "60px 60px",
              maskImage: "radial-gradient(ellipse at center, black 0%, transparent 75%)",
              WebkitMaskImage: "radial-gradient(ellipse at center, black 0%, transparent 75%)",
            }}
          />

          {/* Ambient glow orbs */}
          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            <div
              className="absolute -top-20 -left-20 w-80 h-80 rounded-full opacity-10"
              style={{ background: "radial-gradient(circle, #f5c842 0%, transparent 70%)" }}
            />
            <div
              className="absolute bottom-0 -right-20 w-96 h-96 rounded-full opacity-10"
              style={{ background: `radial-gradient(circle, ${sector.accentColor} 0%, transparent 70%)` }}
            />
          </div>

          <div className="relative z-10 max-w-6xl mx-auto w-full grid lg:grid-cols-2 gap-12 items-center">
            {/* Left */}
            <div>
              {/* Breadcrumb */}
              <div className="flex items-center gap-2 mb-6">
                <button
                  onClick={() => {
                    localStorage.removeItem("mgm_sector");
                    router.push("/");
                  }}
                  className="text-xs text-blue-300/50 hover:text-[#f5c842] transition-colors duration-200"
                >
                  ← Cambiar sector
                </button>
                <span className="text-white/20">·</span>
                <span className="text-xs font-bold px-3 py-1 rounded-full border border-white/10 text-white/60 uppercase tracking-widest">
                  {sector.icon} {sector.shortName}
                </span>
              </div>

              {/* Title — static part */}
              <h1 className="font-anton text-4xl sm:text-5xl lg:text-6xl text-white leading-tight mb-0 whitespace-pre-line">
                {sector.heroTitleStatic}
              </h1>

              {/* Typewriter word — yellow, same size */}
              <div className="h-14 sm:h-16 lg:h-20 flex items-center mb-6">
                <span className="font-anton text-4xl sm:text-5xl lg:text-6xl text-[#f5c842] leading-tight">
                  {typeText}
                  <span className="cursor-blink ml-0.5 opacity-80">|</span>
                </span>
              </div>

              <p className="text-blue-200/70 text-base sm:text-lg leading-relaxed mb-6 max-w-lg">
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
                  className="inline-flex items-center justify-center gap-2 bg-[#f5c842] text-[#070e2a] font-bold px-6 py-4 rounded-xl
                    hover:bg-white hover:scale-[1.03] active:scale-[0.98]
                    transition-all duration-200 shadow-lg shadow-[#f5c842]/20 text-sm sm:text-base"
                >
                  💬 {sector.ctaLabel}
                </a>
                <a
                  href="#servicios"
                  className="inline-flex items-center justify-center gap-2 border border-[#f5c842]/30 text-[#f5c842] px-6 py-4 rounded-xl
                    hover:border-[#f5c842] hover:bg-[#f5c842]/10 hover:scale-[1.02] active:scale-[0.98]
                    transition-all duration-200 text-sm sm:text-base font-semibold"
                >
                  Ver servicios →
                </a>
              </div>
            </div>

            {/* Right — Stats en amarillo */}
            <div className="grid grid-cols-2 gap-4">
              {sector.stats.map((stat, i) => (
                <div
                  key={i}
                  className="bg-white/[0.04] border border-[#f5c842]/20 rounded-2xl p-5 flex flex-col gap-2
                    hover:border-[#f5c842]/50 hover:bg-[#f5c842]/5 transition-all duration-300"
                >
                  <span className="font-anton text-3xl sm:text-4xl text-[#f5c842]">
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
                <span className="text-[#f5c842]">TU REALIDAD</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {sector.services.map((svc, i) => (
                <div
                  key={i}
                  className="reveal bg-white/[0.03] border border-white/10 rounded-2xl p-6
                    hover:border-[#f5c842]/30 hover:bg-white/[0.06] hover:-translate-y-1
                    transition-all duration-300 group"
                  style={{ transitionDelay: `${i * 80}ms` }}
                >
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4 bg-[#f5c842]/10 group-hover:bg-[#f5c842]/20 transition-colors">
                    <span className="text-[#f5c842]">◆</span>
                  </div>
                  <h3 className="font-bold text-white text-lg mb-2 group-hover:text-[#f5c842] transition-colors">
                    {svc.title}
                  </h3>
                  <p className="text-blue-200/60 text-sm leading-relaxed mb-4">
                    {svc.description}
                  </p>
                  <Link
                    href={`/servicios/${svc.slug}`}
                    className="text-xs font-bold tracking-wider uppercase text-[#f5c842]/70 hover:text-[#f5c842] transition-colors"
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
              <div className="absolute left-5 top-0 bottom-0 w-px bg-[#f5c842]/10 hidden sm:block" />
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
                    <div className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center font-anton text-sm z-10 bg-[#f5c842] text-[#070e2a]">
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
                  <span className="text-[#f5c842]">{sector.shortName.toUpperCase()}</span>
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {posts.slice(0, 3).map((post, i) => (
                  <Link
                    key={post.slug}
                    href={`/blog/${post.slug}`}
                    className="reveal group bg-white/[0.03] border border-white/10 rounded-2xl overflow-hidden
                      hover:border-[#f5c842]/30 hover:-translate-y-1 transition-all duration-300 flex flex-col"
                    style={{ transitionDelay: `${i * 100}ms` }}
                  >
                    <div className="p-6 flex flex-col gap-3 flex-1">
                      <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full w-fit bg-[#f5c842]/10 text-[#f5c842]">
                        {post.category}
                      </span>
                      <h3 className="font-bold text-white text-base leading-snug group-hover:text-[#f5c842] transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-blue-200/50 text-xs leading-relaxed line-clamp-3 flex-1">
                        {post.excerpt}
                      </p>
                      <span className="text-xs font-bold tracking-wider uppercase mt-2 text-[#f5c842]/70 group-hover:text-[#f5c842] transition-colors">
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
                className="inline-flex items-center gap-2 bg-[#f5c842] text-[#070e2a] font-bold px-8 py-4 rounded-xl
                  hover:bg-white hover:scale-[1.04] active:scale-[0.97]
                  transition-all duration-200 shadow-xl shadow-[#f5c842]/20 text-base"
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
