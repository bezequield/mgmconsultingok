import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Automatización de Procesos & CRM Médico para Farmacias y Clínicas | MGM Consulting",
  description: "Reducimos la carga operativa de farmacias y consultorios con automatización de turnos, recordatorios WhatsApp y CRM médico con cumplimiento de datos Ley 25.326.",
  keywords: "automatización turnos farmacias, CRM médico Argentina, recordatorios WhatsApp consultorios, gestión pacientes clínicas, automatización procesos salud",
};

const AUTOMATIZACIONES = [
  { icon: "📅", title: "Gestión de Turnos Automática", desc: "Sistema multicanal (WhatsApp, web, presencial) con confirmaciones automáticas y reprogramación sin intervención humana." },
  { icon: "💬", title: "WhatsApp Business API", desc: "Recordatorios 48h, 24h y 2h antes del turno. Respuestas automáticas a consultas frecuentes. Notificaciones de medicación crónica." },
  { icon: "🗂️", title: "CRM Médico Compliant", desc: "Historial de pacientes, segmentación por patología y frecuencia, integración con historia clínica. 100% alineado con Ley 25.326." },
  { icon: "📊", title: "Dashboard de Gestión", desc: "Panel en tiempo real con tasa de asistencia, tipos de consulta, ingresos por turno y alertas de desvío." },
  { icon: "🔔", title: "Recordatorios de Medicación", desc: "Para farmacias: notificaciones automáticas cuando se acerca la fecha de renovación de recetas de medicación crónica." },
  { icon: "🔄", title: "Integración de Sistemas", desc: "Conectamos con los sistemas que ya usás: software de gestión de farmacias, HIS hospitalarios y plataformas de agenda." },
];

const BENEFICIOS = [
  {
    segment: "Farmacias de Barrio",
    icon: "💊",
    kpis: ["Reducción del 38% en ausencias a turnos de vacunación", "3 horas diarias liberadas del equipo", "+22% en retención de clientes con medicación crónica", "Gestión de agenda sin intervención manual"],
  },
  {
    segment: "Clínicas & Consultorios",
    icon: "🏥",
    kpis: ["Lista de espera gestionada automáticamente", "-45% en tiempo de gestión administrativa", "NPS de pacientes +30 puntos en 6 meses", "Cero pérdida de turnos por falta de recordatorio"],
  },
  {
    segment: "Cadenas Farmacéuticas",
    icon: "🏪",
    kpis: ["Centralización de agenda de todos los servicios", "Reporting unificado por sucursal", "Protocolo de atención estandarizado", "Reducción de fricción en el proceso de reserva"],
  },
];

export default function AutomatizacionCRMPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-mgm-navy-dark pt-20">
        {/* Hero */}
        <section className="py-16 sm:py-24 bg-mgm-navy-dark">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-4">
              <Link href="/#servicios" className="text-mgm-yellow text-sm hover:underline">
                ← Volver a Servicios
              </Link>
            </div>
            <span className="inline-block bg-mgm-yellow/10 border border-mgm-yellow/30 text-mgm-yellow text-xs font-semibold px-4 py-1.5 rounded-full tracking-widest uppercase mb-6">
              Servicio 02
            </span>
            <h1 className="font-anton text-4xl sm:text-5xl lg:text-6xl text-white leading-tight mb-6">
              AUTOMATIZACIÓN DE<br />
              <span className="text-mgm-yellow">PROCESOS & CRM</span>
            </h1>
            <p className="text-gray-300 text-lg leading-relaxed max-w-2xl mb-10">
              Reducimos la carga operativa de farmacias, consultorios y clínicas con automatizaciones
              inteligentes y un CRM médico que cumple con todos los estándares de privacidad argentinos.
            </p>
            <Link
              href="/#contacto"
              className="inline-block bg-mgm-yellow text-mgm-navy-dark font-bold px-8 py-4 rounded-xl hover:bg-yellow-300 transition-colors text-base"
            >
              Diagnóstico Gratuito →
            </Link>
          </div>
        </section>

        {/* ¿Qué es? */}
        <section className="py-16 bg-mgm-navy">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div>
                <h2 className="font-anton text-3xl sm:text-4xl text-white mb-6">
                  LA AUTOMATIZACIÓN<br />QUE EL SECTOR SALUD<br />
                  <span className="text-mgm-yellow">NECESITA</span>
                </h2>
                <p className="text-gray-400 leading-relaxed mb-4">
                  La automatización en salud no es simplemente instalar un bot. Es diseñar un flujo completo
                  que respeta la sensibilidad del paciente, cumple con la regulación de datos y libera al
                  equipo de salud para hacer lo que realmente importa: atender personas.
                </p>
                <p className="text-gray-400 leading-relaxed mb-4">
                  En MGM aplicamos la <strong className="text-white">Ley 26.529 de Derechos del Paciente</strong> y
                  la <strong className="text-white">Ley 25.326 de Protección de Datos Personales</strong> en cada
                  implementación. No es un extra: es la base de todo lo que construimos.
                </p>
                <p className="text-gray-400 leading-relaxed">
                  El resultado es un sistema que funciona mientras vos atendés pacientes, no uno que
                  genera más trabajo para el personal administrativo.
                </p>
              </div>
              <div className="bg-mgm-navy-l border border-mgm-yellow/20 rounded-2xl p-6">
                <h3 className="font-bold text-white text-base mb-4">Flujo típico de automatización</h3>
                <div className="space-y-3">
                  {[
                    { step: "1", text: "Paciente reserva turno desde WhatsApp" },
                    { step: "2", text: "Sistema confirma y agrega al calendario" },
                    { step: "3", text: "Recordatorio automático 48h antes" },
                    { step: "4", text: "Confirmación/reprogramación sin intervención" },
                    { step: "5", text: "Post-consulta: seguimiento y próximo turno" },
                    { step: "6", text: "Dashboard actualizado en tiempo real" },
                  ].map((item) => (
                    <div key={item.step} className="flex items-center gap-3">
                      <div className="w-7 h-7 rounded-full bg-mgm-yellow flex items-center justify-center flex-shrink-0">
                        <span className="font-anton text-mgm-navy-dark text-xs">{item.step}</span>
                      </div>
                      <p className="text-gray-300 text-sm">{item.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Automatizaciones disponibles */}
        <section className="py-16 bg-mgm-navy-dark">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="font-anton text-3xl sm:text-4xl text-white">
                QUÉ AUTOMATIZAMOS
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {AUTOMATIZACIONES.map((a) => (
                <div key={a.title} className="bg-mgm-navy border border-white/10 rounded-xl p-5 hover:border-mgm-yellow/40 transition-all duration-300">
                  <div className="text-2xl mb-3">{a.icon}</div>
                  <h3 className="font-bold text-white text-sm mb-2">{a.title}</h3>
                  <p className="text-gray-400 text-xs leading-relaxed">{a.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Beneficios por segmento */}
        <section className="py-16 bg-mgm-navy">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="font-anton text-3xl sm:text-4xl text-white">RESULTADOS POR SEGMENTO</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {BENEFICIOS.map((seg) => (
                <div key={seg.segment} className="bg-mgm-navy-l border border-white/10 rounded-2xl p-6">
                  <div className="text-3xl mb-3">{seg.icon}</div>
                  <h3 className="font-bold text-white text-base mb-4">{seg.segment}</h3>
                  <ul className="space-y-3">
                    {seg.kpis.map((kpi) => (
                      <li key={kpi} className="flex items-start gap-2 text-sm text-gray-400">
                        <span className="text-mgm-yellow mt-1 flex-shrink-0 text-xs">✓</span>
                        {kpi}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-mgm-navy-dark">
          <div className="max-w-2xl mx-auto px-4 text-center">
            <h2 className="font-anton text-3xl sm:text-4xl text-white mb-4">
              ¿CUÁNTAS HORAS PIERDE TU EQUIPO HOY?
            </h2>
            <p className="text-gray-400 mb-8">
              En el diagnóstico gratuito calculamos exactamente cuánto tiempo y dinero estás perdiendo por procesos manuales, y el ROI estimado de automatizarlos.
            </p>
            <Link
              href="/#contacto"
              className="inline-block bg-mgm-yellow text-mgm-navy-dark font-bold px-10 py-4 rounded-xl hover:bg-yellow-300 transition-colors text-base"
            >
              Solicitar Diagnóstico Gratuito →
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
