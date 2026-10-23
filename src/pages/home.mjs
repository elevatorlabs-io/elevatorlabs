import { SITE, icon, whatsapp, faqBlock, ctaBand, label, stackStrip, floorsFigure } from "../layout.mjs";

const services = [
  {
    name: "Diagnóstico y mejora de procesos",
    text: "Mapeamos cómo opera tu empresa, medimos tiempos, costos y cuellos de botella, y rediseñamos los procesos con un plan priorizado por impacto.",
    tags: ["Mapa de procesos", "Indicadores", "Metodologías de trabajo"],
    href: "/servicios/mejora-de-procesos",
  },
  {
    name: "Automatización e inteligencia artificial",
    text: "Eliminamos tareas manuales y doble digitación: integraciones entre tus sistemas, flujos automáticos y asistentes con IA conectados a tus datos.",
    tags: ["Integraciones", "Flujos automáticos", "IA aplicada"],
    href: "/servicios/integraciones-e-inteligencia-artificial",
  },
  {
    name: "Software a medida",
    text: "Aplicaciones web y sistemas internos como ERP, CRM o portales, hechos para tu operación y no al revés, cuando ninguna herramienta del mercado encaja.",
    tags: ["Aplicaciones web", "ERP y CRM", "APIs"],
    href: "/servicios/desarrollo-de-software-a-medida",
  },
  {
    name: "Aplicaciones móviles",
    text: "Apps para iOS y Android que llevan tus procesos a campo, a tus clientes y a tu equipo, con una sola base de código y publicación en las tiendas.",
    tags: ["iOS", "Android", "Flutter"],
    href: "/servicios/desarrollo-de-aplicaciones-moviles",
  },
  {
    name: "Plataformas SaaS",
    text: "Convertimos un proceso que dominas en un producto digital: multiempresa, suscripciones y pagos, roles y panel de administración.",
    tags: ["Multiempresa", "Suscripciones", "Pagos"],
    href: "/servicios/desarrollo-saas",
  },
  {
    name: "Cloud, DevOps y auditoría",
    text: "Infraestructura en AWS, Azure o servidores propios con Docker y CI/CD, y auditorías de código y arquitectura para reducir riesgos y costos.",
    tags: ["AWS y Azure", "CI/CD", "Auditoría técnica"],
    href: "#contacto",
  },
];

const models = [
  {
    for: "Un proceso o sistema puntual",
    name: "Proyecto llave en mano",
    text: "Alcance, tiempos, indicadores y precio definidos antes de empezar. Ideal para automatizar un proceso o lanzar un sistema con objetivos claros.",
    points: ["Alcance y precio acordados desde el inicio", "Demo de avances cada semana", "Medición del resultado al cierre"],
    cta: "Cotizar mi proyecto",
  },
  {
    for: "Empresas en crecimiento",
    name: "Equipo dedicado",
    badge: "Recomendado",
    text: "Líder técnico, analista de procesos, desarrolladores y QA trabajando como parte de tu empresa, con tarifa mensual.",
    points: ["Escala el equipo cuando lo necesites", "Tu hoja de ruta, nuestra ejecución", "Indicadores y demo en cada sprint"],
    cta: "Armar mi equipo",
  },
  {
    for: "Empresas con equipo propio",
    name: "Socio tecnológico",
    text: "Metodologías de trabajo, auditoría y mentoría para tu equipo interno, o un CTO externo que lidere tu tecnología sin contratarlo a tiempo completo.",
    points: ["Auditoría de procesos y tecnología", "Metodologías ágiles y mentoría", "CTO como servicio"],
    cta: "Hablar con un consultor",
  },
];

const why = [
  ["Primero el proceso, luego el código", "Antes de proponer tecnología entendemos cómo trabaja tu equipo. A veces la mejora es ordenar un flujo; otras, automatizarlo o construir software."],
  ["Resultados que se miden", "Definimos indicadores desde el diagnóstico (tiempo, costo, errores, capacidad) y los comparamos antes y después de cada entrega."],
  ["Seniors en cada proyecto", "Consultores, arquitectos y líderes técnicos con años en producción diseñan y revisan cada entrega."],
  ["Transparencia total", "Acceso al tablero de trabajo, al repositorio y a una demo semanal desde el primer sprint."],
];

const steps = [
  ["Diagnóstico de la operación", "Mapeamos tus procesos, tiempos, costos y cuellos de botella con tu equipo.", "Sin costo para empezar"],
  ["Diseño de la mejora", "Proceso rediseñado, solución tecnológica, indicadores y presupuesto claro.", "Propuesta en 48 horas"],
  ["Construcción ágil", "Automatizaciones, integraciones o software en sprints cortos con entregas funcionando.", "Demo semanal"],
  ["Implementación y adopción", "Puesta en producción, capacitación y acompañamiento para que tu equipo la use de verdad.", "Cambio que se queda"],
  ["Medición y mejora continua", "Comparamos los indicadores con el punto de partida y seguimos optimizando.", "Resultados medibles"],
];

const faqs = [
  {
    q: "¿Cómo mejora la tecnología la eficiencia operativa de una empresa?",
    a: "Reduce el trabajo manual y repetitivo, evita errores de digitación, conecta los sistemas para que la información fluya sola y da indicadores en tiempo real para decidir mejor. El resultado es hacer más con el mismo equipo, en menos tiempo y con menos costo.",
  },
  {
    q: "¿Solo desarrollan software?",
    a: "No. Empezamos por entender y mejorar el proceso. Según el caso, la solución puede ser reorganizar un flujo, implementar una metodología de trabajo, automatizar con herramientas existentes, integrar tus sistemas o desarrollar software a medida.",
  },
  {
    q: "¿Cuánto cuesta un proyecto de mejora de procesos o de software a medida?",
    a: "Depende del alcance, los procesos involucrados y las integraciones. Después de un diagnóstico inicial sin costo te enviamos en 48 horas una propuesta con alcance, tiempos, indicadores y presupuesto. Puedes empezar por el proceso de mayor impacto y crecer por fases.",
  },
  {
    q: "¿Cuánto tiempo tarda?",
    a: "Un diagnóstico de procesos toma de 1 a 3 semanas. Una primera automatización suele estar en producción entre 3 y 6 semanas, y un software a medida entre 6 y 12 semanas. Desde el primer sprint ves avances funcionando cada semana.",
  },
  {
    q: "¿Trabajan con empresas fuera de Colombia?",
    a: "Sí. Estamos en Medellín y trabajamos de forma remota con empresas de toda Latinoamérica, Estados Unidos y España, en español o inglés y en horarios compatibles.",
  },
  {
    q: "¿De quién es el código fuente?",
    a: "De tu empresa. En los proyectos a medida lo dejamos por escrito en el contrato y al cierre recibes el código fuente, la documentación y todos los accesos, sin dependencia de nosotros.",
  },
  {
    q: "¿Qué pasa después de la implementación?",
    a: "Ofrecemos planes de soporte, mantenimiento y mejora continua con monitoreo, seguimiento de indicadores y nuevas mejoras basadas en los datos reales de tu operación.",
  },
];

const arrow = icon("arrow");
const faq = faqBlock(faqs);
const n = (i) => String(i + 1).padStart(2, "0");

const body = `
<section class="hero" aria-labelledby="hero-title">
  <div class="container">
    <p class="meta">Elevator Labs · Medellín, Colombia</p>
    <h1 id="hero-title">Procesos más eficientes, impulsados por <span class="accent">tecnología</span></h1>
    <div class="hero-grid">
      <div>
        <p class="hero-lead">Ayudamos a empresas de Colombia y Latinoamérica a operar mejor: diagnosticamos y mejoramos sus procesos, los automatizamos y desarrollamos el software a medida, las integraciones y la inteligencia artificial que los hacen más rápidos, medibles y escalables.</p>
        <div class="hero-ctas">
          <a href="#contacto" class="btn btn-primary">Agenda un diagnóstico ${arrow}</a>
          <a href="#servicios" class="btn btn-secondary">Ver servicios</a>
        </div>
      </div>
      ${floorsFigure()}
    </div>
    <dl class="facts">
      <div><dt>Diagnóstico inicial</dt><dd>Sin costo y sin compromiso</dd></div>
      <div><dt>Propuesta en 48 horas</dt><dd>Alcance, indicadores y precio</dd></div>
      <div><dt>Avances cada semana</dt><dd>Demo con tu equipo</dd></div>
      <div><dt>Resultados medibles</dt><dd>Antes y después, con datos</dd></div>
    </dl>
  </div>
</section>

${stackStrip()}

<section class="section" id="servicios" aria-labelledby="servicios-title">
  <div class="container layout">
    <header class="aside" data-reveal>
      ${label("01", "Servicios")}
      <h2 id="servicios-title">Tecnología al servicio de una operación más eficiente</h2>
      <p class="section-lead">Del diagnóstico de procesos a la automatización y el desarrollo de software: un solo equipo para mejorar cómo trabaja tu empresa y sostener esa mejora en el tiempo.</p>
    </header>
    <ul class="rows" data-reveal>
      ${services
        .map(
          (s, i) => `<li><a class="row" href="${s.href}"><span class="row-num">${n(i)}</span><div><h3>${s.name}</h3><p>${s.text}</p><ul class="row-tags">${s.tags
            .map((t) => `<li>${t}</li>`)
            .join("")}</ul></div><span class="row-arrow">${arrow}</span></a></li>`
        )
        .join("\n      ")}
    </ul>
  </div>
</section>

<section class="section band-dark" id="modelos" aria-labelledby="modelos-title">
  <div class="container">
    <div class="band-head" data-reveal>
      <div>${label("02", "Modelos de trabajo")}<h2 id="modelos-title">Elige cómo trabajar con nosotros</h2></div>
      <p class="section-lead">Desde la mejora de un proceso puntual hasta un equipo dedicado que crece contigo. Tú decides el nivel de compromiso; nosotros ponemos el método y la ingeniería.</p>
    </div>
    <div class="models" data-reveal>
      ${models
        .map(
          (m) => `<article class="model">
        <span class="model-for">${m.for}${m.badge ? `<b>· ${m.badge}</b>` : ""}</span>
        <h3>${m.name}</h3>
        <p>${m.text}</p>
        <ul class="dashes">${m.points.map((c) => `<li>${c}</li>`).join("")}</ul>
        <a href="#contacto" class="link-arrow">${m.cta} ${arrow}</a>
      </article>`
        )
        .join("\n      ")}
    </div>
  </div>
</section>

<section class="section" id="nosotros" aria-labelledby="nosotros-title">
  <div class="container layout">
    <header class="aside" data-reveal>
      ${label("03", "Por qué Elevator Labs")}
      <h2 id="nosotros-title">Más que una software factory: unimos procesos, personas y tecnología</h2>
      <p class="section-lead">No empezamos por el código, empezamos por tu operación. Somos un equipo senior que entiende de procesos y de ingeniería, y que también construye y opera sus propios productos SaaS en producción.</p>
      <a href="${whatsapp("Hola Elevator Labs, me gustaría agendar una llamada.")}" class="link-arrow" target="_blank" rel="noopener">Agenda una llamada ${arrow}</a>
    </header>
    <ul class="rows rows-plain" data-reveal>
      ${why.map(([t, d], i) => `<li><div class="row"><span class="row-num">${n(i)}</span><div><h3>${t}</h3><p>${d}</p></div></div></li>`).join("\n      ")}
    </ul>
  </div>
</section>

<section class="section section-soft" id="proceso" aria-labelledby="proceso-title">
  <div class="container layout">
    <header class="aside" data-reveal>
      ${label("04", "Método")}
      <h2 id="proceso-title">Cómo mejoramos tu operación, piso a piso</h2>
      <p class="section-lead">Un ciclo ágil y visible: sabes qué se mejora, cuándo y con qué resultado. Cada vuelta deja tu operación un piso más arriba.</p>
    </header>
    <ol class="rows rows-plain" data-reveal>
      ${steps
        .map(([t, d, s], i) => `<li><div class="row"><span class="row-num">P${String(i).padStart(2, "0")}</span><div><h3>${t}</h3><p>${d}</p><span class="row-meta">${s}</span></div></div></li>`)
        .join("\n      ")}
    </ol>
  </div>
</section>

<section class="section" id="faq" aria-labelledby="faq-title">
  <div class="container layout">
    <header class="aside" data-reveal>
      ${label("05", "Preguntas frecuentes")}
      <h2 id="faq-title">Lo que suelen preguntarnos antes de empezar</h2>
      <a href="#contacto" class="link-arrow">¿Otra pregunta? Escríbenos ${arrow}</a>
    </header>
    <div data-reveal>${faq.html}</div>
  </div>
</section>

${ctaBand("¿Qué proceso de tu empresa quieres mejorar?", "Cuéntanos dónde se pierde tiempo o dinero en tu operación y en 48 horas recibes una propuesta con alcance, indicadores y presupuesto.")}

<section class="section" id="contacto" aria-labelledby="contacto-title">
  <div class="container layout">
    <header class="aside" data-reveal>
      ${label("06", "Contacto")}
      <h2 id="contacto-title">Cuéntanos qué quieres mejorar</h2>
      <p class="section-lead">Respondemos en menos de 24 horas hábiles.</p>
      <ul class="contact-list">
        <li><small>Correo</small><a href="mailto:${SITE.email}">${SITE.email}</a></li>
        <li><small>WhatsApp</small><a href="${whatsapp()}" target="_blank" rel="noopener">${SITE.phoneLabel}</a></li>
        <li><small>Ubicación</small><span>Medellín, Colombia · Remoto en Latinoamérica</span></li>
      </ul>
    </header>
    <form class="form" id="contactForm" action="https://formsubmit.co/ajax/${SITE.email}" method="POST" data-reveal>
      <!-- FormSubmit: los mensajes llegan a info@elevatorlabs.io (la primera vez pide activar el correo). -->
      <input type="hidden" name="_subject" value="Nuevo contacto desde elevatorlabs.io" />
      <input type="hidden" name="_captcha" value="false" />
      <input type="hidden" name="_template" value="table" />
      <input class="hp" type="text" name="_honey" tabindex="-1" autocomplete="off" aria-hidden="true" />
      <div class="form-row">
        <div class="field"><label for="name">Nombre</label><input id="name" name="name" type="text" required autocomplete="name" /></div>
        <div class="field"><label for="email">Correo</label><input id="email" name="email" type="email" required autocomplete="email" /></div>
      </div>
      <div class="form-row">
        <div class="field"><label for="company">Empresa (opcional)</label><input id="company" name="company" type="text" autocomplete="organization" /></div>
        <div class="field"><label for="need">¿Qué necesitas?</label>
          <select id="need" name="need">
            <option>Mejorar o automatizar procesos</option>
            <option>Integraciones o inteligencia artificial</option>
            <option>Software a medida</option>
            <option>Aplicación móvil</option>
            <option>Plataforma SaaS</option>
            <option>Equipo dedicado</option>
            <option>Auditoría o consultoría</option>
            <option>Otro</option>
          </select>
        </div>
      </div>
      <div class="field"><label for="message">¿Qué proceso o proyecto quieres mejorar?</label><textarea id="message" name="message" required></textarea></div>
      <div class="form-foot">
        <button type="submit" class="btn btn-primary">Enviar mensaje ${arrow}</button>
        <p class="form-note">Tus datos solo se usan para responderte.</p>
      </div>
      <p class="form-msg" id="formSuccess" role="status">¡Gracias! Recibimos tu mensaje y te contactaremos muy pronto.</p>
      <p class="form-msg is-error" id="formError" role="alert">No pudimos enviar el mensaje. Escríbenos a ${SITE.email} o por WhatsApp.</p>
    </form>
  </div>
</section>`;

export default {
  path: "/",
  home: true,
  priority: "1.0",
  title: "Eficiencia operativa y software a medida en Colombia | Elevator Labs",
  description:
    "Impulsamos la eficiencia operativa con tecnología: mejora y automatización de procesos, software a medida, integraciones e IA para empresas de Colombia y LATAM.",
  body,
  graph: [
    {
      "@type": "WebPage",
      "@id": `${SITE.url}/#webpage`,
      url: `${SITE.url}/`,
      name: "Eficiencia operativa y software a medida en Colombia | Elevator Labs",
      isPartOf: { "@id": `${SITE.url}/#website` },
      about: { "@id": `${SITE.url}/#organization` },
      inLanguage: "es",
    },
    ...services.map((s) => ({
      "@type": "Service",
      name: s.name,
      serviceType: s.name,
      description: s.text,
      provider: { "@id": `${SITE.url}/#organization` },
      areaServed: ["Colombia", "Latinoamérica"],
      url: s.href.startsWith("/") ? SITE.url + s.href : `${SITE.url}/#servicios`,
    })),
    faq.node,
  ],
};
