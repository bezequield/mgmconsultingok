"use client";
import { useState } from "react";

export default function Contacto() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", business: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1600);
  };

  const inputClass = "w-full bg-mgm-navy-dark border border-white/10 rounded-xl px-4 py-3.5 text-white text-sm placeholder-gray-600 focus:outline-none focus:border-mgm-yellow focus:ring-1 focus:ring-mgm-yellow/30 transition-all duration-200";

  return (
    <section id="contacto" className="py-24 sm:py-32 bg-mgm-navy-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 reveal">
          <span className="text-mgm-yellow font-semibold text-sm uppercase tracking-widest">Contacto</span>
          <h2 className="font-anton text-4xl sm:text-5xl lg:text-6xl text-white mt-2">ESCRIBINOS</h2>
          <p className="text-gray-400 mt-4 max-w-xl mx-auto">
            Contanos sobre tu negocio y en menos de 24hs te respondemos con un diagnóstico inicial gratuito.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          {submitted ? (
            <div className="reveal visible text-center py-20">
              <div className="text-6xl mb-6">✅</div>
              <h3 className="font-anton text-3xl text-white mb-4">¡Mensaje Recibido!</h3>
              <p className="text-gray-400">
                Gracias por contactarnos. Te responderemos en menos de 24 horas con tu diagnóstico inicial.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="reveal space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input type="text" placeholder="Nombre y apellido" className={inputClass} required
                  value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
                <input type="email" placeholder="Email profesional" className={inputClass} required
                  value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input type="tel" placeholder="Teléfono / WhatsApp" className={inputClass}
                  value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} />
                <select className={inputClass + " cursor-pointer"}
                  value={form.business} onChange={(e) => setForm({ ...form, business: e.target.value })}>
                  <option value="" disabled>Tipo de negocio</option>
                  <option value="farmacia">Farmacia / Cadena de Farmacias</option>
                  <option value="clinica">Clínica / Consultorio</option>
                  <option value="retail">Retail de Salud</option>
                  <option value="distribuidora">Distribuidora Farmacéutica</option>
                  <option value="otro">Otro</option>
                </select>
              </div>
              <textarea rows={5} placeholder="¿Cuál es tu principal desafío comercial hoy?" className={inputClass + " resize-none"} required
                value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} />
              <button type="submit" disabled={loading}
                className="w-full bg-mgm-yellow text-mgm-navy-dark font-bold py-4 rounded-xl text-base hover:bg-yellow-300 transition-all duration-200 disabled:opacity-70 disabled:cursor-not-allowed">
                {loading ? "Enviando..." : "Enviar Diagnóstico Gratuito →"}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
