"use client";
import { useEffect, useRef, useState } from "react";

const PHRASES = [
  "PARA FARMACIAS",
  "PARA CLÍNICAS Y CONSULTORIOS",
  "PARA RETAIL DE SALUD",
  "PARA PROFESIONALES DE LA SALUD",
  "PARA DISTRIBUIDORAS FARMACÉUTICAS",
];

export default function Hero() {
  const [typeText, setTypeText] = useState("");
  const [phraseIdx, setPhraseIdx] = useState(0);
  const [typing, setTyping] = useState(true);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Typewriter effect
  useEffect(() => {
    const phrase = PHRASES[phraseIdx];
    let timeout: ReturnType<typeof setTimeout>;

    if (typing) {
      if (typeText.length < phrase.length) {
        timeout = setTimeout(() => setTypeText(phrase.slice(0, typeText.length + 1)), 32);
      } else {
        timeout = setTimeout(() => setTyping(false), 1000);
      }
    } else {
      if (typeText.length > 0) {
        timeout = setTimeout(() => setTypeText(typeText.slice(0, -1)), 14);
      } else {
        setTimeout(() => {
          setPhraseIdx((i) => (i + 1) % PHRASES.length);
          setTyping(true);
        }, 180);
      }
    }

    return () => clearTimeout(timeout);
  }, [typeText, typing, phraseIdx]);

  // Particles
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    const isMobile = window.innerWidth < 768;
    const COUNT = isMobile ? 45 : 90;
    const MAX_DIST = isMobile ? 110 : 160;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();

    const particles = Array.from({ length: COUNT }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.56,
      vy: (Math.random() - 0.5) * 0.56,
      r: 0.5 + Math.random() * 1.5,
      yellow: Math.random() < 0.18,
      phase: Math.random() * Math.PI * 2,
    }));

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const t = Date.now() * 0.001;

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < MAX_DIST) {
            const op = (1 - dist / MAX_DIST) * 0.18;
            ctx.beginPath();
            ctx.strokeStyle = `rgba(255,199,0,${op})`;
            ctx.lineWidth = 0.6;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        const op = 0.4 + 0.3 * Math.sin(t + p.phase);
        const [r, g, b] = p.yellow ? [255, 199, 0] : [200, 200, 200];
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${r},${g},${b},${op})`;
        ctx.fill();
      });

      animId = requestAnimationFrame(draw);
    };

    draw();

    const handleResize = () => {
      resize();
    };
    window.addEventListener("resize", handleResize);
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleAnchorClick = (href: string) => {
    const target = document.querySelector(href);
    if (target) {
      const top = target.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-mgm-navy-dark">
      {/* Canvas particles */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />

      {/* Background orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full opacity-20 animate-float-slow"
          style={{ background: "radial-gradient(circle, #ffc700 0%, transparent 70%)" }} />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 rounded-full opacity-15 animate-float-medium"
          style={{ background: "radial-gradient(circle, #162255 0%, transparent 70%)" }} />
      </div>

      {/* Grid overlay */}
      <div className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage: "linear-gradient(rgba(255,199,0,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,199,0,0.3) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          maskImage: "radial-gradient(ellipse at center, black 0%, transparent 75%)",
          WebkitMaskImage: "radial-gradient(ellipse at center, black 0%, transparent 75%)",
        }} />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-24 pb-16">
        <div className="mb-6">
          <span className="inline-block bg-mgm-yellow/10 border border-mgm-yellow/30 text-mgm-yellow text-xs font-semibold px-4 py-2 rounded-full tracking-widest uppercase">
            Business Intelligence · E2E Marketing · Automatización
          </span>
        </div>

        <h1 className="font-anton text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight mb-4 text-white">
          TU DEPARTAMENTO COMERCIAL
          <br />Y DE MARKETING EXTERNO
        </h1>

        <div className="h-12 sm:h-14 flex items-center justify-center mb-6">
          <span className="font-anton text-2xl sm:text-3xl md:text-4xl text-mgm-yellow">
            {typeText}
            <span className="cursor-blink ml-0.5">|</span>
          </span>
        </div>

        <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
          Gestionamos <strong className="text-mgm-yellow">UPLIFT</strong>: el incremento real y medible en tu facturación.
          Sin costos de estructura interna, con resultados desde el día uno.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <button onClick={() => handleAnchorClick("#contacto")}
            className="magnetic-btn bg-mgm-yellow text-mgm-navy-dark font-bold px-8 py-4 rounded-xl text-base hover:bg-yellow-300 transition-all duration-200 shadow-lg shadow-mgm-yellow/20">
            Diagnóstico ADN Comercial
          </button>
          <button onClick={() => handleAnchorClick("#planes")}
            className="magnetic-btn border border-white/20 text-white font-semibold px-8 py-4 rounded-xl text-base hover:border-mgm-yellow hover:text-mgm-yellow transition-all duration-200">
            Ver Planes
          </button>
        </div>

        {/* Stats */}
        <div className="flex flex-wrap justify-center gap-8 sm:gap-12">
          {[
            { value: "+16", label: "Años de experiencia" },
            { value: "2", label: "Continentes" },
            { value: "E2E", label: "Del análisis al anuncio" },
          ].map((stat) => (
            <div key={stat.value} className="text-center">
              <div className="font-anton text-3xl sm:text-4xl text-mgm-yellow">{stat.value}</div>
              <div className="text-xs text-gray-400 mt-1 uppercase tracking-widest">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50">
        <div className="w-px h-8 bg-gradient-to-b from-transparent to-white/40" />
        <div className="w-1.5 h-1.5 rounded-full bg-mgm-yellow animate-pulse" />
      </div>
    </section>
  );
}
