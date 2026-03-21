"use client";
import { useState, useEffect } from "react";

const VERBS = ["MEJORAR", "OPTIMIZAR", "CRECER", "ESCALAR", "AUMENTAR"];

const STATS = [
  { value: "$0", label: "Costos de estructura eliminados" },
  { value: "E2E", label: "Análisis → Automatización → Resultado" },
  { value: "4", label: "Audiencias core: droguerías, farmacias, clínicas, profesionales" },
  { value: "100%", label: "Decisiones basadas en datos y KPIs" },
];

export default function Tesis() {
  const [verbIdx, setVerbIdx] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setVerbIdx((i) => (i + 1) % VERBS.length);
        setVisible(true);
      }, 370);
    }, 2600);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="tesis" className="py-24 sm:py-32 bg-mgm-navy">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 reveal">
          <h2 className="font-anton text-4xl sm:text-5xl lg:text-6xl text-white leading-tight">
            LO QUE NO SE MIDE
            <br />
            NO SE PUEDE{" "}
            <span
              className="text-mgm-yellow inline-block transition-all duration-300"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(-12px)",
              }}
            >
              {VERBS[verbIdx]}
            </span>
          </h2>
          <p className="text-gray-400 mt-8 max-w-3xl mx-auto text-base sm:text-lg leading-relaxed">
            Cada decisión estratégica que no está respaldada por datos es una apuesta.
            MGM Consulting convierte las métricas de tu <strong className="text-white">droguería, farmacia, clínica o laboratorio farmacéutico</strong> en
            ventaja competitiva real. Medimos todo, optimizamos procesos y te mostramos exactamente cuánto rinde cada peso invertido.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {STATS.map((stat, i) => (
            <div
              key={stat.value}
              className="reveal bg-mgm-navy-l border border-white/10 rounded-2xl p-5 sm:p-6 text-center hover:border-mgm-yellow/40 transition-all duration-300"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="font-anton text-3xl sm:text-5xl text-mgm-yellow mb-3">{stat.value}</div>
              <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
