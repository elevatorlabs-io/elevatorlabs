import { SITE, SERVICE_LINKS, icon, faqBlock, ctaBand, label } from "../layout.mjs";
import { dashboard, flow, table, phone, saas, deploy } from "../visuals.mjs";

// Ilustración de la portada de cada servicio
const framed = (title, inner) => `<div class="ui ui-window"><div class="ui-bar"><i></i><i></i><i></i><span>${title}</span></div><div class="ui-pad">${inner}</div></div>`;
const ART = {
  "mejora-de-procesos": dashboard,
  "integraciones-e-inteligencia-artificial": () => framed("Flujo automático", flow()),
  "desarrollo-de-software-a-medida": () => framed("Gestión de pedidos", table()),
  "desarrollo-de-aplicaciones-moviles": phone,
  "desarrollo-saas": () => framed("Panel de suscripciones", saas()),
  "cloud-devops-y-auditoria": () => framed("Despliegue continuo", deploy()),
};

// Una página por servicio, pensada para una búsqueda principal.
const SERVICES = [
  {
    slug: "mejora-de-procesos",
    short: "mejora de procesos",
    name: "Mejora de procesos y eficiencia operativa",
    title: "Mejora de procesos y eficiencia operativa | Elevator Labs",
    description:
      "Mejora de procesos con tecnología en Colombia: diagnóstico de la operación, rediseño, automatización e indicadores para reducir tiempos, costos y errores.",
    h1: 'Mejora de procesos para una operación <span class="accent">más eficiente</span>',
    lead: "Encontramos dónde se pierde tiempo y dinero en tu operación, rediseñamos el proceso y lo llevamos a la práctica con la tecnología adecuada: desde una metodología de trabajo hasta automatizaciones y software a medida.",
    whatTitle: "Cómo mejoramos tus procesos",
    what: [
      ["Diagnóstico de la operación", "Entrevistas, observación y datos para mapear el proceso real, sus tiempos, costos y cuellos de botella."],
      ["Indicadores de partida", "Definimos qué medir (tiempo de ciclo, costo por transacción, errores, capacidad) y tomamos la línea base."],
      ["Rediseño del proceso", "Eliminamos pasos sin valor, aclaramos responsables y elegimos qué automatizar y qué no."],
      ["Implementación con tecnología", "Metodologías de trabajo, automatizaciones, integraciones o software a medida, según lo que cada mejora necesite."],
      ["Adopción y mejora continua", "Capacitamos a tu equipo, medimos el resultado contra la línea base y seguimos optimizando."],
    ],
    whyTitle: "Tecnología con propósito, no por moda",
    why: [
      "Automatizar un proceso desordenado solo hace más rápido el desorden. Por eso empezamos por entender y simplificar la operación, y después elegimos la herramienta: muchas mejoras se logran con lo que ya tienes.",
      "Trabajamos con áreas de operaciones, finanzas, comercial, logística y servicio al cliente, donde los procesos repetitivos y la doble digitación consumen más horas.",
      "Cada mejora tiene un indicador y un responsable. Al cierre comparamos contra la línea base para que veas el impacto en tiempo, costo y calidad, no solo un informe.",
    ],
    tags: ["Mapa de procesos", "BPMN", "Lean", "Metodologías ágiles", "Indicadores", "Automatización", "Tableros de control"],
    faqs: [
      {
        q: "¿Qué es la eficiencia operativa?",
        a: "Es la capacidad de una empresa de entregar sus productos o servicios con el menor uso posible de tiempo, dinero y esfuerzo sin perder calidad. Se mejora simplificando procesos, eliminando tareas manuales y midiendo resultados.",
      },
      {
        q: "¿Cuánto tarda un diagnóstico de procesos?",
        a: "Entre 1 y 3 semanas según el número de áreas y procesos. Al final recibes el mapa del proceso actual, los indicadores de partida y un plan de mejora priorizado por impacto y esfuerzo.",
      },
      {
        q: "¿Siempre terminan desarrollando software?",
        a: "No. Si la mejora se logra ordenando el flujo, con una metodología de trabajo o configurando herramientas que ya usas, eso es lo que recomendamos. Desarrollamos a la medida solo cuando aporta más valor.",
      },
      {
        q: "¿Cómo miden los resultados?",
        a: "Con los indicadores definidos en el diagnóstico, por ejemplo horas por proceso, costo por transacción, errores o tiempo de respuesta, comparados antes y después de cada mejora.",
      },
    ],
  },
  {
    slug: "desarrollo-de-software-a-medida",
    short: "software a medida",
    name: "Desarrollo de software a medida",
    title: "Desarrollo de software a medida en Colombia | Elevator Labs",
    description:
      "Desarrollo de software a medida en Medellín: aplicaciones web, sistemas internos, ERP y CRM hechos para tu operación. Propuesta con alcance y precio en 48 h.",
    h1: 'Desarrollo de software a medida para <span class="accent">tu operación</span>',
    lead: "Construimos aplicaciones web y sistemas internos que se adaptan a cómo trabaja tu empresa, no al revés. Un equipo senior en Colombia, con entregas semanales y código que es tuyo.",
    whatTitle: "Qué software a medida desarrollamos",
    what: [
      ["Aplicaciones web empresariales", "Portales, plataformas y herramientas internas con roles, permisos, reportes y auditoría."],
      ["ERP, CRM e inventarios a la medida", "Sistemas que modelan tus procesos reales en lugar de obligarte a cambiar la operación."],
      ["Portales de clientes y proveedores", "Autogestión de pedidos, documentos, pagos y soporte para reducir trabajo manual."],
      ["Modernización de sistemas heredados", "Migramos software antiguo a una arquitectura moderna sin detener tu operación."],
      ["APIs y backends escalables", "Servicios seguros, documentados y listos para integrarse con apps, socios y terceros."],
    ],
    whyTitle: "¿Por qué software a medida y no uno genérico?",
    why: [
      "Un software genérico obliga a tu equipo a adaptarse a sus límites: hojas de cálculo paralelas, procesos manuales y licencias que crecen con cada usuario. El software a medida hace exactamente lo que tu negocio necesita y se vuelve una ventaja que tu competencia no puede comprar.",
      "Empezamos con un diagnóstico sin costo, priorizamos lo que genera más valor y lanzamos un MVP en semanas. Después evolucionamos el sistema por fases, con métricas reales de uso.",
      "Trabajamos con TypeScript, Angular, React, Node.js, NestJS, .NET y PostgreSQL, desplegados en AWS, Azure o tu propia infraestructura con Docker y CI/CD.",
    ],
    tags: ["TypeScript", "Angular", "React", "Node.js", "NestJS", ".NET", "PostgreSQL", "Docker"],
    faqs: [
      {
        q: "¿Cuánto cuesta un software a medida en Colombia?",
        a: "Depende del número de módulos, usuarios, integraciones y plataformas. Tras una llamada de diagnóstico sin costo te enviamos en 48 horas una propuesta con alcance, tiempos y precio, y te sugerimos cómo dividir el proyecto en fases para invertir de forma gradual.",
      },
      {
        q: "¿Cuánto tarda el desarrollo de un software a medida?",
        a: "Un MVP suele estar listo entre 6 y 12 semanas. Sistemas más grandes se entregan por fases, con una versión funcionando cada semana desde el primer sprint.",
      },
      {
        q: "¿Pueden mejorar un sistema que ya tenemos?",
        a: "Sí. Auditamos el código y la arquitectura actuales, proponemos un plan priorizado y lo modernizamos por partes, sin detener la operación.",
      },
      {
        q: "¿Qué recibimos al terminar?",
        a: "El código fuente, la documentación técnica y de usuario, los accesos a la infraestructura y una sesión de transferencia de conocimiento con tu equipo.",
      },
    ],
  },
  {
    slug: "desarrollo-de-aplicaciones-moviles",
    short: "aplicaciones móviles",
    name: "Desarrollo de aplicaciones móviles",
    title: "Desarrollo de aplicaciones móviles iOS y Android | Elevator Labs",
    description:
      "Desarrollo de apps móviles para iOS y Android en Colombia: diseño UX, Flutter o React Native, backend y publicación en tiendas. Cotiza tu app en 48 h.",
    h1: 'Desarrollo de aplicaciones móviles para <span class="accent">iOS y Android</span>',
    lead: "Diseñamos y desarrollamos apps móviles que la gente sí usa: rápidas, seguras y fáciles de mantener. Una sola base de código para iOS y Android, con el backend y el panel de administración incluidos.",
    whatTitle: "Qué incluye el desarrollo de tu app",
    what: [
      ["Diseño UX/UI en Figma", "Prototipo navegable para validar la experiencia con usuarios antes de programar."],
      ["App multiplataforma", "Flutter o React Native para iOS y Android con rendimiento cercano al nativo y menor costo."],
      ["Backend, API y panel de administración", "Usuarios, pagos, notificaciones push y gestión de contenido desde la web."],
      ["Publicación en App Store y Google Play", "Nos encargamos de la configuración, las capturas y la revisión de las tiendas."],
      ["Analítica, soporte y nuevas versiones", "Medimos el uso real y evolucionamos la app con actualizaciones continuas."],
    ],
    whyTitle: "Apps móviles pensadas para crecer",
    why: [
      "Una app no termina al publicarla. Por eso la construimos con arquitectura limpia, pruebas automatizadas y despliegue continuo, para que cada nueva versión llegue rápido y sin romper lo que ya funciona.",
      "Desarrollamos apps para comercio, logística, salud, educación, servicios financieros y operación de campo, con modo sin conexión, geolocalización, pagos y notificaciones cuando el caso lo requiere.",
      "Si ya tienes una app, la auditamos y te decimos con claridad si conviene mejorarla o rehacerla.",
    ],
    tags: ["Flutter", "React Native", "iOS", "Android", "Figma", "Firebase", "Notificaciones push"],
    faqs: [
      {
        q: "¿Cuánto cuesta desarrollar una app móvil?",
        a: "Depende de las funcionalidades, las integraciones y si necesitas panel de administración. Con una llamada de diagnóstico sin costo te enviamos en 48 horas una propuesta con alcance, tiempos y precio, empezando por un MVP.",
      },
      {
        q: "¿Desarrollan apps nativas o multiplataforma?",
        a: "Recomendamos multiplataforma (Flutter o React Native) para la mayoría de proyectos porque reduce costo y tiempo con una sola base de código. Si tu caso exige nativo, lo hacemos nativo.",
      },
      {
        q: "¿Se encargan de publicar la app en las tiendas?",
        a: "Sí. Configuramos las cuentas de desarrollador a nombre de tu empresa, preparamos la ficha de la app y acompañamos la revisión de App Store y Google Play.",
      },
      {
        q: "¿Cuánto tarda desarrollar una aplicación?",
        a: "Un MVP móvil suele tomar entre 8 y 12 semanas, con versiones de prueba en tu celular desde las primeras semanas.",
      },
    ],
  },
  {
    slug: "desarrollo-saas",
    short: "plataformas SaaS",
    name: "Desarrollo de plataformas SaaS",
    title: "Desarrollo de plataformas SaaS a medida | Elevator Labs",
    description:
      "Desarrollamos tu SaaS de punta a punta: arquitectura multiempresa, suscripciones y pagos, roles, panel de administración e infraestructura escalable.",
    h1: 'Desarrollo de plataformas SaaS, <span class="accent">de la idea a los primeros clientes</span>',
    lead: "Construimos y operamos nuestros propios productos SaaS, así que conocemos el camino completo: arquitectura multiempresa, cobros recurrentes, métricas y una infraestructura que escala con tus clientes.",
    whatTitle: "Lo que construimos para tu SaaS",
    what: [
      ["Arquitectura multiempresa (multi-tenant)", "Datos aislados por cliente, planes y límites por cuenta, listos para escalar."],
      ["Suscripciones y pagos recurrentes", "Planes, pruebas gratuitas, facturación y pasarelas de pago para Colombia y Latinoamérica."],
      ["Cuentas, roles e inicio de sesión único", "Registro, equipos, permisos, invitaciones e inicio de sesión con Google o Microsoft."],
      ["Panel de administración y métricas", "Gestión de clientes, planes y uso, con indicadores como MRR, activación y retención."],
      ["Infraestructura, monitoreo y seguridad", "Despliegue continuo, copias de seguridad, registros y alertas desde el primer día."],
    ],
    whyTitle: "Un socio que ya ha lanzado SaaS",
    why: [
      "Lanzar un SaaS no es solo programar funcionalidades: hay que resolver cobros, onboarding, soporte, idiomas, analítica y operación. Llevamos esa experiencia de nuestros propios productos a tu plataforma.",
      "Empezamos por un MVP que puedas vender, medimos lo que usan tus primeros clientes y priorizamos con datos. La arquitectura queda lista para crecer sin reescribirse.",
      "Si ya tienes un SaaS, te ayudamos a escalarlo, a reducir costos de infraestructura o a sumar inteligencia artificial a tu producto.",
    ],
    tags: ["Multi-tenant", "Suscripciones", "Pasarelas de pago", "Angular", "NestJS", "PostgreSQL", "Docker", "CI/CD"],
    faqs: [
      {
        q: "¿Cuánto tarda lanzar un MVP de SaaS?",
        a: "Entre 8 y 14 semanas para un MVP con registro, planes, cobros y las funcionalidades clave de tu producto. Después iteramos con tus primeros clientes.",
      },
      {
        q: "¿Qué pasarelas de pago integran?",
        a: "Las que mejor funcionen para tu mercado, como Wompi, Mercado Pago, PayU, Stripe o PayPal, con cobros recurrentes y facturación.",
      },
      {
        q: "¿Pueden operar la plataforma después del lanzamiento?",
        a: "Sí. Ofrecemos planes de operación con monitoreo, copias de seguridad, actualizaciones de seguridad y un equipo dedicado para nuevas funcionalidades.",
      },
      {
        q: "¿De quién es la plataforma?",
        a: "De tu empresa. El código, la infraestructura y los datos quedan a tu nombre, y lo dejamos por escrito en el contrato.",
      },
    ],
  },
  {
    slug: "integraciones-e-inteligencia-artificial",
    short: "automatización e IA",
    name: "Integraciones, automatización e inteligencia artificial",
    title: "Integraciones e inteligencia artificial para empresas | Elevator Labs",
    description:
      "Integramos tu software con ERP, pagos, facturación electrónica, CRM y WhatsApp, y aplicamos IA para automatizar los procesos de tu empresa.",
    h1: 'Integraciones e <span class="accent">inteligencia artificial</span> que automatizan tu operación',
    lead: "Conectamos los sistemas que ya usas para eliminar la doble digitación y sumamos IA donde realmente ahorra tiempo: atención al cliente, documentos, análisis y tareas repetitivas.",
    whatTitle: "Integraciones y soluciones de IA que desarrollamos",
    what: [
      ["Integración de sistemas y APIs", "ERP, CRM, e-commerce, inventarios y bancos conectados en tiempo real con APIs y webhooks."],
      ["Facturación electrónica y pagos", "Conexión con proveedores de facturación electrónica y pasarelas de pago para automatizar cobros."],
      ["WhatsApp y canales de atención", "Notificaciones, bots y flujos de atención conectados a tus sistemas."],
      ["Asistentes y chatbots con IA", "Modelos de lenguaje conectados a tus documentos y datos (RAG), con respuestas verificables."],
      ["Automatización de procesos", "Flujos con n8n o código a la medida que leen correos, documentos y formularios y actúan solos."],
    ],
    whyTitle: "IA útil, segura y medible",
    why: [
      "No vendemos IA por moda. Primero identificamos los procesos donde la automatización ahorra más horas o reduce más errores, y medimos el resultado.",
      "Trabajamos con modelos de OpenAI, Anthropic y Google Gemini, o con modelos abiertos cuando la privacidad lo exige. Controlamos costos por uso, protegemos los datos personales y dejamos registro de cada decisión automática.",
      "Las integraciones quedan documentadas, monitoreadas y con reintentos automáticos, para que no dependan de que alguien las revise a mano.",
    ],
    tags: ["APIs REST", "Webhooks", "n8n", "OpenAI", "Anthropic", "Gemini", "RAG", "WhatsApp"],
    faqs: [
      {
        q: "¿Con qué sistemas pueden integrarse?",
        a: "Con cualquier sistema que tenga API, base de datos o archivos de intercambio: ERP, CRM, tiendas en línea, bancos, pasarelas de pago, facturación electrónica y WhatsApp, entre otros.",
      },
      {
        q: "¿Cómo protegen los datos al usar inteligencia artificial?",
        a: "Usamos proveedores con acuerdos de no entrenamiento sobre tus datos, anonimizamos la información sensible cuando es posible y cumplimos la Ley 1581 de 2012 de protección de datos personales.",
      },
      {
        q: "¿Cuánto tarda una automatización con IA?",
        a: "Una primera automatización suele estar en producción entre 3 y 6 semanas, incluyendo pruebas con casos reales y métricas de ahorro.",
      },
      {
        q: "¿Necesitamos cambiar nuestros sistemas actuales?",
        a: "No. La idea es conectar lo que ya usas. Solo recomendamos reemplazar algo si el diagnóstico muestra que es más barato que mantenerlo.",
      },
    ],
  },
  {
    slug: "cloud-devops-y-auditoria",
    short: "cloud, DevOps y auditoría",
    name: "Cloud, DevOps y auditoría de software",
    title: "Cloud, DevOps y auditoría de software | Elevator Labs",
    description:
      "Infraestructura en AWS, Azure o servidores propios con Docker y CI/CD, monitoreo y auditorías de código y arquitectura para operar seguro y con menos costo.",
    h1: 'Infraestructura confiable y <span class="accent">despliegues sin sustos</span>',
    lead: "Llevamos tu software a la nube o a tus servidores con despliegue continuo, monitoreo y copias de seguridad, y auditamos tu código y arquitectura para reducir riesgos y costos.",
    whatTitle: "Qué hacemos en cloud, DevOps y auditoría",
    what: [
      ["Arquitectura y migración a la nube", "AWS, Azure o servidores propios, elegidos por costo, rendimiento y cumplimiento."],
      ["CI/CD y contenedores", "Docker y GitHub Actions: cada cambio probado y desplegado en minutos."],
      ["Monitoreo y alertas", "Registros, métricas y alertas para saber que algo falla antes que tus clientes."],
      ["Copias de seguridad y recuperación", "Respaldos automáticos y planes de recuperación probados."],
      ["Auditoría de código y arquitectura", "Seguridad, rendimiento y deuda técnica, con un plan priorizado de mejora."],
    ],
    whyTitle: "Operar sin sustos y con menos costo",
    why: [
      "Una infraestructura mal configurada cuesta dos veces: en la factura de la nube y en las caídas que afectan a tus clientes. La dejamos segura, observable y del tamaño justo.",
      "Automatizamos los despliegues para que publicar una mejora sea rutina y no un riesgo, con pruebas automáticas y vuelta atrás inmediata si algo sale mal.",
      "La auditoría termina en un informe claro, con hallazgos priorizados por impacto y esfuerzo, y si quieres te acompañamos a corregirlos.",
    ],
    tags: ["AWS", "Azure", "Docker", "GitHub Actions", "Linux", "Grafana", "Copias de seguridad", "Seguridad"],
    faqs: [
      {
        q: "¿Pueden reducir lo que pagamos en la nube?",
        a: "Sí. Revisamos el uso real, ajustamos el tamaño de los servicios, eliminamos recursos sin uso y proponemos alternativas más económicas cuando conviene.",
      },
      {
        q: "¿Qué incluye una auditoría de software?",
        a: "Revisión del código, la arquitectura, la seguridad, el rendimiento y las prácticas de despliegue, con un informe de hallazgos priorizados y recomendaciones concretas. Suele tomar de 1 a 3 semanas.",
      },
      {
        q: "¿Trabajan con nuestra infraestructura actual?",
        a: "Sí. Podemos operar sobre tu proveedor actual o migrarte por fases sin detener el servicio.",
      },
      {
        q: "¿Ofrecen soporte continuo?",
        a: "Sí, con planes de operación que incluyen monitoreo, actualizaciones de seguridad, copias de seguridad y atención de incidentes.",
      },
    ],
  },
];

const arrow = icon("arrow");
const n = (i) => String(i + 1).padStart(2, "0");

function render(s) {
  const url = `${SITE.url}/servicios/${s.slug}`;
  const faq = faqBlock(s.faqs);
  const related = SERVICE_LINKS.filter(([href]) => href !== `/servicios/${s.slug}`);
  const body = `
<section class="hero page-hero" aria-labelledby="hero-title">
  <div class="container">
    <div class="hero-grid">
      <div>
        <nav class="breadcrumb" aria-label="Ruta"><ol><li><a href="/">Inicio</a></li><li><a href="/#servicios">Servicios</a></li><li aria-current="page">${s.name}</li></ol></nav>
        <h1 id="hero-title">${s.h1}</h1>
        <p class="hero-lead">${s.lead}</p>
        <div class="hero-ctas">
          <a href="/#contacto" class="btn btn-primary">Agenda un diagnóstico ${arrow}</a>
          <a href="/#modelos" class="btn btn-secondary">Modelos de trabajo</a>
        </div>
      </div>
      <div class="stage" aria-hidden="true">${ART[s.slug]()}</div>
    </div>
    <dl class="facts">
      <div><dt>Diagnóstico inicial</dt><dd>Sin costo y sin compromiso</dd></div>
      <div><dt>Propuesta en 48 horas</dt><dd>Alcance, indicadores y precio</dd></div>
      <div><dt>Avances cada semana</dt><dd>Demo con tu equipo</dd></div>
      <div><dt>El código es tuyo</dt><dd>Por contrato, sin dependencia</dd></div>
    </dl>
  </div>
</section>

<section class="section" aria-labelledby="que-title">
  <div class="container layout">
    <header class="aside prose" data-reveal>
      ${label("01", "Qué incluye")}
      <h2 id="que-title">${s.whatTitle}</h2>
      <p class="section-lead">${s.why[0]}</p>
    </header>
    <ul class="rows rows-plain" data-reveal>
      ${s.what.map(([t, d], i) => `<li><div class="row"><span class="row-num">${n(i)}</span><div><h3>${t}</h3><p>${d}</p></div></div></li>`).join("\n      ")}
    </ul>
  </div>
</section>

<section class="section section-soft" aria-labelledby="por-que-title">
  <div class="container layout">
    <header class="aside" data-reveal>
      ${label("02", "Enfoque")}
      <h2 id="por-que-title">${s.whyTitle}</h2>
    </header>
    <div data-reveal>
      <div class="prose">${s.why.slice(1).map((p) => `<p>${p}</p>`).join("")}</div>
      <ul class="chips" aria-label="Herramientas y tecnologías frecuentes">${s.tags.map((t) => `<li>${t}</li>`).join("")}</ul>
      <div class="related">
        <h3>Otros servicios</h3>
        ${related.map(([href, text]) => `<a href="${href}">${text} ${arrow}</a>`).join("")}
      </div>
    </div>
  </div>
</section>

<section class="section" id="faq" aria-labelledby="faq-title">
  <div class="container layout">
    <header class="aside" data-reveal>
      ${label("03", "Preguntas frecuentes")}
      <h2 id="faq-title">Preguntas sobre ${s.short}</h2>
    </header>
    <div data-reveal>${faq.html}</div>
  </div>
</section>

${ctaBand("Hablemos de tu operación", "Agenda un diagnóstico sin costo. En 48 horas recibes una propuesta con alcance, indicadores, tiempos y presupuesto.")}`;

  return {
    path: `/servicios/${s.slug}`,
    file: `servicios/${s.slug}.html`,
    priority: "0.9",
    title: s.title,
    description: s.description,
    ogAlt: `${s.name} — Elevator Labs`,
    body,
    graph: [
      {
        "@type": "WebPage",
        "@id": `${url}#webpage`,
        url,
        name: s.title,
        description: s.description,
        isPartOf: { "@id": `${SITE.url}/#website` },
        breadcrumb: { "@id": `${url}#breadcrumb` },
        inLanguage: "es",
      },
      {
        "@type": "Service",
        "@id": `${url}#service`,
        name: s.name,
        serviceType: s.name,
        description: s.description,
        url,
        provider: { "@id": `${SITE.url}/#organization` },
        areaServed: ["Colombia", "Latinoamérica"],
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: s.whatTitle,
          itemListElement: s.what.map(([t, d]) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name: t, description: d } })),
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${url}#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Inicio", item: `${SITE.url}/` },
          { "@type": "ListItem", position: 2, name: "Servicios", item: `${SITE.url}/#servicios` },
          { "@type": "ListItem", position: 3, name: s.name, item: url },
        ],
      },
      faq.node,
    ],
  };
}

export default SERVICES.map(render);
