export interface SectorService {
  title: string;
  description: string;
  slug: string;
}

export interface SectorStat {
  value: string;
  label: string;
}

export interface Sector {
  slug: string;
  name: string;
  shortName: string;
  tagline: string;
  description: string;
  heroTitle: string;
  heroSubtitle: string;
  painPoint: string;
  icon: string;
  color: string;
  accentColor: string;
  stats: SectorStat[];
  services: SectorService[];
  blogSlugs: string[];
  jsonLdType: string;
  ctaLabel: string;
  ctaMessage: string;
}

export const SECTORES: Sector[] = [
  {
    slug: "droguerias",
    name: "Droguerías y Distribuidoras",
    shortName: "Droguerías",
    tagline: "Inteligencia comercial B2B para el canal farmacéutico mayorista",
    description:
      "Las droguerías operan en un mercado de márgenes comprimidos donde la visibilidad ante laboratorios y farmacias determina el volumen. Sin estrategia digital B2B, perdés contratos ante distribuidoras más pequeñas pero mejor posicionadas.",
    heroTitle: "TU DROGUERÍA COMPITE\nCON GIGANTES.\n¿TIENE LA\nESTRATEGIA PARA\nGANAR?",
    heroSubtitle:
      "Business Intelligence, posicionamiento B2B y kits digitales para visitadores médicos. Escalá tu participación de mercado sin aumentar tu estructura.",
    painPoint:
      "El 68% de las droguerías regionales pierde contratos con laboratorios por falta de reportes de gestión estructurados.",
    icon: "🏭",
    color: "from-blue-900 to-blue-700",
    accentColor: "#1d4ed8",
    stats: [
      { value: "+34%", label: "Incremento promedio en cobertura de puntos de venta" },
      { value: "48h", label: "Setup inicial de dashboard de KPIs operativos" },
      { value: "3x", label: "Mayor tasa de apertura en comunicaciones B2B" },
      { value: "-40%", label: "Reducción en tiempo de elaboración de reportes" },
    ],
    services: [
      {
        title: "Business Intelligence para Droguerías",
        description:
          "Dashboards en tiempo real de rotación, cobertura por zona, márgenes por laboratorio y alertas de stock crítico. Presentá datos que los laboratorios exigen.",
        slug: "business-intelligence",
      },
      {
        title: "Kits Digitales para Visitadores",
        description:
          "Materiales de presentación, catálogos interactivos y secuencias de seguimiento automatizadas para que tu equipo de campo cierre más contratos con farmacias.",
        slug: "automatizacion-crm",
      },
      {
        title: "Posicionamiento B2B en Google",
        description:
          "SEO específico para búsquedas de laboratorios y farmacias que buscan proveedores mayoristas. Captá RFPs antes que la competencia.",
        slug: "estrategia-ads",
      },
      {
        title: "Transformación Digital Operativa",
        description:
          "Digitalización de procesos de pedidos, facturación y logística. Reducí errores y tiempos muertos que impactan directamente en tu margen.",
        slug: "transformacion-digital",
      },
    ],
    blogSlugs: [
      "droguerias-invisibilidad-b2b-mercado-farmaceutico",
      "distribuidoras-farmaceuticas-vs-gigantes-estrategia-competitiva",
      "seo-laboratorios-principios-activos-posicionamiento-b2b",
    ],
    jsonLdType: "WholesaleStore",
    ctaLabel: "Diagnóstico gratuito para tu droguería",
    ctaMessage:
      "Hola MGM Consulting, soy una droguería/distribuidora y quiero un diagnóstico gratuito de mi estrategia B2B.",
  },
  {
    slug: "farmacia-barrio",
    name: "Farmacia de Barrio",
    shortName: "Farmacia Barrio",
    tagline: "Convertí tu farmacia de barrio en el referente de salud de tu comunidad",
    description:
      "Las cadenas entran a tu barrio con precios subsidiados y apps propias. Tu ventaja es la confianza vecinal — pero solo si la activás digitalmente antes de que ellos terminen de instalarse.",
    heroTitle: "LAS CADENAS\nYA ESTÁN EN\nTU BARRIO.\n¿TU FARMACIA\nTIENE PLAN?",
    heroSubtitle:
      "SEO local en Google Maps, fidelización por WhatsApp y gestión de reputación vecinal. Defendé tu territorio con estrategia digital.",
    painPoint:
      "Una farmacia de barrio sin presencia en Google Maps pierde hasta el 40% de los clientes nuevos que buscan 'farmacia cerca' desde su celular.",
    icon: "💊",
    color: "from-emerald-900 to-emerald-700",
    accentColor: "#059669",
    stats: [
      { value: "+55%", label: "Más consultas desde Google Maps optimizado" },
      { value: "4.8★", label: "Rating promedio de farmacias que gestionamos en Google" },
      { value: "2x", label: "Tasa de retención con programa de fidelización WhatsApp" },
      { value: "30d", label: "Primeros resultados visibles en búsqueda local" },
    ],
    services: [
      {
        title: "SEO Local y Google Maps",
        description:
          "Optimización completa de tu ficha de Google Business Profile: categorías correctas, fotos, horarios, respuesta a reseñas y estrategia de posicionamiento por palabras clave del barrio.",
        slug: "estrategia-ads",
      },
      {
        title: "Sistema de Fidelización WhatsApp",
        description:
          "Recordatorios de medicación crónica, alertas de stock, promociones segmentadas y canal de consultas rápidas. Tu cliente no necesita ir a otra farmacia.",
        slug: "automatizacion-crm",
      },
      {
        title: "Gestión de Reputación Online",
        description:
          "Estrategia sistemática para generar reseñas positivas, responder comentarios y construir la reputación digital que las cadenas no pueden imitar: la confianza personal.",
        slug: "transformacion-digital",
      },
      {
        title: "Campañas Locales en Meta y Google",
        description:
          "Anuncios hipersegmentados por radio de 2km, con creatividades que hablan el idioma del barrio. Presupuestos mínimos, impacto máximo.",
        slug: "estrategia-ads",
      },
    ],
    blogSlugs: [
      "cadenas-farmaceuticas-amenaza-farmacia-barrio-estrategia",
      "whatsapp-business-farmacias-sistema-fidelizacion",
      "google-maps-farmacias-seo-local-barrio",
    ],
    jsonLdType: "Pharmacy",
    ctaLabel: "Diagnóstico gratuito para tu farmacia",
    ctaMessage:
      "Hola MGM Consulting, tengo una farmacia de barrio y quiero un diagnóstico gratuito de mi presencia digital.",
  },
  {
    slug: "farmacia-retail",
    name: "Farmacia Retail y Perfumería",
    shortName: "Farmacia Retail",
    tagline: "Escala tu volumen de venta con estrategia digital de alto rendimiento",
    description:
      "El retail farmacéutico juega en otro estadio: e-commerce, dermocosmética, parafarmacia y campañas de volumen. Sin estructura digital profesional, tu inversión en publicidad se convierte en gasto sin retorno.",
    heroTitle: "INVERTÍS EN ADS\nY EL ROI NO\nCIERRA.\nACÁ ESTÁ\nEL PROBLEMA.",
    heroSubtitle:
      "E-commerce farmacéutico, estrategia de dermocosmética y campañas de performance con ROI medible. Vendé más sin quemar el presupuesto.",
    painPoint:
      "El 73% de las farmacias retail con Meta Ads activos nunca midió correctamente su ROAS. Están financiando campañas que pierden dinero sin saberlo.",
    icon: "🛍️",
    color: "from-purple-900 to-purple-700",
    accentColor: "#7c3aed",
    stats: [
      { value: "3.8x", label: "ROAS promedio en campañas de dermocosmética optimizadas" },
      { value: "+120%", label: "Incremento en conversión con landing pages de producto" },
      { value: "-35%", label: "Reducción en costo por adquisición tras auditoría de cuentas" },
      { value: "60d", label: "Para alcanzar performance sostenible en e-commerce" },
    ],
    services: [
      {
        title: "Estrategia de Meta Ads y Google Ads",
        description:
          "Auditoría de cuentas activas, reestructuración de campañas, segmentación por intención de compra y optimización de ROAS. Paramos el sangrado antes de escalar.",
        slug: "estrategia-ads",
      },
      {
        title: "E-commerce Farmacéutico",
        description:
          "Implementación y optimización de tienda online cumpliendo normativa ANMAT vigente. Catálogo, fichas de producto, pasarela de pagos y logística integrada.",
        slug: "transformacion-digital",
      },
      {
        title: "Posicionamiento en Dermocosmética",
        description:
          "Estrategia de contenido y autoridad para marcas de alta gama: La Roche-Posay, Vichy, Bioderma. Convertí tu farmacia en el referente dermatológico online.",
        slug: "estrategia-ads",
      },
      {
        title: "CRM y Automatización de Ventas",
        description:
          "Segmentación de base de clientes, carritos abandonados, reactivación de compradores inactivos y programas de fidelización por ticket de compra.",
        slug: "automatizacion-crm",
      },
    ],
    blogSlugs: [
      "meta-ads-farmacia-retail-roi-errores-comunes",
      "dermocosmetica-parafarmacia-credibilidad-online",
      "ecommerce-farmaceutico-argentina-2026-regulacion-estrategia",
    ],
    jsonLdType: "Pharmacy",
    ctaLabel: "Auditoría gratuita de tus campañas",
    ctaMessage:
      "Hola MGM Consulting, tengo una farmacia retail y quiero una auditoría gratuita de mis campañas digitales.",
  },
  {
    slug: "clinicas",
    name: "Clínicas y Centros de Salud",
    shortName: "Clínicas",
    tagline: "De la ocupación irregular al crecimiento predecible con datos e inteligencia clínica",
    description:
      "Las clínicas de alta complejidad enfrentan el desafío de escalar sin comprometer la calidad asistencial. El caos administrativo, la reputación online no gestionada y la ausencia de KPIs clínicos destruyen márgenes que ninguna obra social va a recuperar.",
    heroTitle: "TU CLÍNICA\nCRECE EN\nPACIENTES\nY TAMBIÉN\nEN CAOS.",
    heroSubtitle:
      "CRM médico con cumplimiento de datos, Business Intelligence clínico y gestión de reputación en Google. Escalar sin perder control es posible.",
    painPoint:
      "Una clínica sin CRM pierde en promedio el 28% de sus pacientes post-tratamiento por falta de seguimiento. Cada paciente perdido son 3 derivaciones que nunca llegan.",
    icon: "🏥",
    color: "from-red-900 to-red-700",
    accentColor: "#dc2626",
    stats: [
      { value: "+28%", label: "Retención de pacientes con seguimiento automatizado" },
      { value: "4.9★", label: "Rating promedio en Google con gestión activa" },
      { value: "-45%", label: "Reducción en tiempo de gestión administrativa" },
      { value: "+40%", label: "Incremento en derivaciones orgánicas gestionadas" },
    ],
    services: [
      {
        title: "CRM Médico con Cumplimiento Legal",
        description:
          "Implementación de CRM que cumple Ley 26.529 (Derechos del Paciente) y Ley 25.326 (Protección de Datos). Seguimiento de pacientes, recordatorios y gestión de turnos sin riesgo legal.",
        slug: "automatizacion-crm",
      },
      {
        title: "Business Intelligence Clínico",
        description:
          "Dashboards de ocupación, facturación por especialidad, KPIs de calidad asistencial y análisis de rentabilidad por prestación. Tomá decisiones basadas en datos, no en intuición.",
        slug: "business-intelligence",
      },
      {
        title: "Gestión de Reputación en Google",
        description:
          "Estrategia de reseñas, respuesta a comentarios críticos y posicionamiento de tu clínica como referente de especialidad en búsquedas locales. La reputación digital es el nuevo boca en boca.",
        slug: "estrategia-ads",
      },
      {
        title: "Transformación Digital Asistencial",
        description:
          "Historia clínica digital, turnos online, teleconsulta y automatización de procesos de admisión. Reducí fricciones en cada punto de contacto con el paciente.",
        slug: "transformacion-digital",
      },
    ],
    blogSlugs: [
      "caos-administrativo-clinicas-kpis-business-intelligence",
      "reputacion-google-clinicas-gestion-crisis",
      "crm-clinicas-alta-complejidad-ciclo-vida-paciente",
    ],
    jsonLdType: "MedicalBusiness",
    ctaLabel: "Diagnóstico gratuito para tu clínica",
    ctaMessage:
      "Hola MGM Consulting, dirijo una clínica/centro de salud y quiero un diagnóstico gratuito de mi estrategia digital.",
  },
  {
    slug: "profesionales",
    name: "Profesionales de la Salud",
    shortName: "Profesionales",
    tagline: "Tu expertise merece el paciente correcto. Tu marca personal lo hace posible.",
    description:
      "Los médicos y profesionales de la salud enfrentan una paradoja: cuanto más tiempo pasan atendiendo pacientes, menos tiempo tienen para construir la presencia digital que atrae los casos que realmente quieren atender. El resultado es una agenda llena de consultas que no corresponden a su especialización real.",
    heroTitle: "AGENDA LLENA,\nPERO NO CON\nEL PACIENTE\nQUE ELEGISTE\nATENDER.",
    heroSubtitle:
      "Marca personal médica, turnos automatizados y posicionamiento de especialidad. Que lleguen los pacientes correctos, no los que llegan.",
    painPoint:
      "El 61% de los profesionales con agenda saturada atiende casos fuera de su especialización preferida. El marketing digital ético puede corregirlo.",
    icon: "👨‍⚕️",
    color: "from-teal-900 to-teal-700",
    accentColor: "#0d9488",
    stats: [
      { value: "+70%", label: "Más consultas de especialidad con posicionamiento correcto" },
      { value: "4h", label: "Ahorradas semanalmente con automatización de turnos" },
      { value: "3x", label: "Mayor alcance con contenido de autoridad en LinkedIn/Instagram" },
      { value: "90d", label: "Para construir presencia digital de autoridad medible" },
    ],
    services: [
      {
        title: "Marca Personal Médica",
        description:
          "Estrategia de contenido que posiciona tu especialización en LinkedIn e Instagram. Contenido que cumple el Código de Ética de la AMM y construye autoridad sin comprometer tu reputación profesional.",
        slug: "estrategia-ads",
      },
      {
        title: "Automatización de Turnos y Agenda",
        description:
          "Sistema de reserva online, confirmaciones automáticas por WhatsApp, recordatorios 24h antes y lista de espera inteligente. Tu secretaria puede enfocarse en lo que importa.",
        slug: "automatizacion-crm",
      },
      {
        title: "Posicionamiento de Especialidad",
        description:
          "SEO médico para búsquedas de alta intención: 'mejor [especialista] en [ciudad]'. Que el paciente que te busca te encuentre antes que al médico de guardia de la prepaga.",
        slug: "estrategia-ads",
      },
      {
        title: "Dashboard de Práctica Privada",
        description:
          "KPIs de tu consultorio: tasa de retención, origen de pacientes, rentabilidad por prestación y proyección de agenda. Gestioná tu práctica como un negocio profesional.",
        slug: "business-intelligence",
      },
    ],
    blogSlugs: [
      "marketing-medico-etico-posicionamiento-codigo-etica",
      "burnout-administrativo-medicos-costo-tiempo",
      "marca-personal-medicos-2026-autoridad-digital",
    ],
    jsonLdType: "Physician",
    ctaLabel: "Diagnóstico gratuito para tu práctica",
    ctaMessage:
      "Hola MGM Consulting, soy profesional de la salud y quiero un diagnóstico gratuito de mi estrategia digital.",
  },
];

export function getSectorBySlug(slug: string): Sector | undefined {
  return SECTORES.find((s) => s.slug === slug);
}

export function getAllSectorSlugs(): string[] {
  return SECTORES.map((s) => s.slug);
}
