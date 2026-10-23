import { SITE, icon, whatsapp, faqBlock, ctaBand, label, stackStrip, floorsFigure } from "../layout.mjs";
import { dashboard, compare, flow, table, phone, saas, deploy } from "../visuals.mjs";

const services = [
  { name: "Mejora de procesos", text: "Mapeamos tu operación, medimos dónde se pierde tiempo y rediseñamos el proceso.", href: "/servicios/mejora-de-procesos", art: compare },
  { name: "Automatización e IA", text: "Integraciones y flujos con inteligencia artificial que eliminan la doble digitación.", href: "/servicios/integraciones-e-inteligencia-artificial", art: flow },
  { name: "Software a medida", text: "Sistemas web, ERP y CRM hechos para cómo trabaja tu empresa.", href: "/servicios/desarrollo-de-software-a-medida", art: table },
  { name: "Aplicaciones móviles", text: "Apps para iOS y Android que llevan tus procesos a campo y a tus clientes.", href: "/servicios/desarrollo-de-aplicaciones-moviles", art: phone, phone: true },
  { name: "Plataformas SaaS", text: "Convierte lo que tu empresa sabe hacer en un producto digital con suscripciones.", href: "/servicios/desarrollo-saas", art: saas },
  { name: "Cloud, DevOps y auditoría", text: "Infraestructura segura, despliegue continuo, monitoreo y auditoría de tu software.", href: "/servicios/cloud-devops-y-auditoria", art: deploy },
];

const models = [
  {
    for: "Un proceso o sistema puntual",
    name: "Proyecto llave en mano",
    text: "Alcance, plazos y precio cerrados antes de empezar.",
    points: ["Precio acordado desde el inicio", "Demo de avances cada semana", "Medición del resultado al cierre"],
    cta: "Cotizar mi proyecto",
  },
  {
    for: "Empresas en crecimiento",
    name: "Equipo dedicado",
    badge: "Recomendado",
    text: "Un equipo multidisciplinario que trabaja como parte de tu empresa, con tarifa mensual.",
    points: ["Escala cuando lo necesites", "Tu hoja de ruta, nuestra ejecución", "Indicadores en cada sprint"],
    cta: "Armar mi equipo",
  },
  {
    for: "Empresas con equipo propio",
    name: "Socio tecnológico",
    text: "Auditoría, metodologías y mentoría para tu equipo, o un CTO externo.",
    points: ["Auditoría de procesos y tecnología", "Metodologías ágiles", "CTO como servicio"],
    cta: "Hablar con un consultor",
  },
];

const pledges = [
  ["Primero el proceso", "Proponemos tecnología solo donde de verdad mejora tu operación."],
  ["Resultados medibles", "Indicadores definidos en el diagnóstico y comparados antes y después."],
  ["Equipo senior", "Consultores y arquitectos con años en producción en cada proyecto."],
  ["El código es tuyo", "Por contrato: código, documentación y accesos a nombre de tu empresa."],
];

const steps = [
  ["Diagnóstico de la operación", "Mapeamos procesos, tiempos y costos con tu equipo.", "Sin costo para empezar"],
  ["Diseño de la mejora", "Proceso rediseñado, solución, indicadores y presupuesto.", "Propuesta en 48 horas"],
  ["Construcción ágil", "Entregas funcionando en sprints cortos.", "Demo semanal"],
  ["Implementación y adopción", "Puesta en producción y capacitación de tu equipo.", "Cambio que se queda"],
  ["Medición y mejora continua", "Comparamos con la línea base y seguimos optimizando.", "Resultados medibles"],
];

const faqs = [
  {
    q: "¿Cómo mejora la tecnología la eficiencia operativa?",
    a: "Reduce el trabajo manual, evita errores de digitación, conecta tus sistemas para que la información fluya sola y te da indicadores en tiempo real. Así tu equipo hace más, en menos tiempo y con menos costo.",
  },
  {
    q: "¿Solo desarrollan software?",
    a: "No. Empezamos por el proceso: a veces basta con ordenar un flujo o aplicar una metodología; otras conviene automatizar, integrar sistemas o desarrollar software a medida.",
  },
  {
    q: "¿Cuánto cuesta?",
    a: "Depende del alcance. Tras un diagnóstico inicial sin costo te enviamos en 48 horas una propuesta con alcance, indicadores, tiempos y precio. Puedes empezar por el proceso de mayor impacto.",
  },
  {
    q: "¿Cuánto tiempo tarda?",
    a: "Un diagnóstico toma de 1 a 3 semanas; una primera automatización, de 3 a 6; un software a medida, de 6 a 12. Desde el primer sprint ves avances cada semana.",
  },
  {
    q: "¿Trabajan con empresas fuera de Colombia?",
    a: "Sí. Desde Medellín trabajamos de forma remota con empresas de Latinoamérica, Estados Unidos y España, en español o inglés.",
  },
];

const arrow = icon("arrow");
const faq = faqBlock(faqs);

const body = `
<section class="hero" aria-labelledby="hero-title">
  <div class="container">
    <div class="hero-grid">
      <div>
        <p class="meta">Elevator Labs · Medellín, Colombia</p>
        <h1 id="hero-title">Procesos más eficientes, impulsados por <span class="accent">tecnología</span></h1>
        <p class="hero-lead">Diagnosticamos tus procesos, los automatizamos y construimos el software que los hace más rápidos, medibles y escalables.</p>
        <div class="hero-ctas">
          <a href="#contacto" class="btn btn-primary">Agenda un diagnóstico ${arrow}</a>
          <a href="#servicios" class="btn btn-secondary">Ver servicios</a>
        </div>
      </div>
      <div class="stage" aria-hidden="true">${dashboard()}</div>
    </div>
    <dl class="facts">
      <div><dt>Diagnóstico inicial</dt><dd>Sin costo y sin compromiso</dd></div>
      <div><dt>Propuesta en 48 horas</dt><dd>Alcance, indicadores y precio</dd></div>
      <div><dt>Avances cada semana</dt><dd>Demo con tu equipo</dd></div>
      <div><dt>El código es tuyo</dt><dd>Por contrato, sin dependencia</dd></div>
    </dl>
  </div>
</section>

${stackStrip()}

<section class="section" id="servicios" aria-labelledby="servicios-title">
  <div class="container">
    <div class="section-top" data-reveal>
      <div>${label("01", "Servicios")}<h2 id="servicios-title">Tecnología al servicio de tu operación</h2></div>
      <p class="section-lead">Un solo equipo para mejorar cómo trabaja tu empresa, de punta a punta.</p>
    </div>
    <div class="svc-grid">
      ${services
        .map(
          (s) => `<a class="svc" href="${s.href}" data-reveal>
        <div class="svc-art${s.phone ? " is-phone" : ""}" aria-hidden="true">${s.art()}</div>
        <div class="svc-body"><h3>${s.name}</h3><p>${s.text}</p><span class="more">${s.more || "Ver servicio"} ${arrow}</span></div>
      </a>`
        )
        .join("\n      ")}
    </div>
  </div>
</section>

<section class="section band-dark" id="modelos" aria-labelledby="modelos-title">
  <div class="container">
    <div class="band-head" data-reveal>
      <div>${label("02", "Modelos de trabajo")}<h2 id="modelos-title">Elige cómo trabajar con nosotros</h2></div>
      <p class="section-lead">De la mejora de un proceso puntual a un equipo dedicado que crece contigo.</p>
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
      <h2 id="nosotros-title">Más que una software factory</h2>
      <p class="section-lead">No empezamos por el código, empezamos por tu operación. Y operamos nuestros propios productos SaaS en producción.</p>
      <a href="${whatsapp("Hola Elevator Labs, me gustaría agendar una llamada.")}" class="link-arrow" target="_blank" rel="noopener">Agenda una llamada ${arrow}</a>
    </header>
    <ul class="pledges" data-reveal>
      ${pledges.map(([t, d]) => `<li><span class="ui-ok">${icon("check")}</span><h3>${t}</h3><p>${d}</p></li>`).join("\n      ")}
    </ul>
  </div>
</section>

<section class="section section-soft" id="proceso" aria-labelledby="proceso-title">
  <div class="container layout">
    <header class="aside" data-reveal>
      ${label("04", "Método")}
      <h2 id="proceso-title">Tu operación, piso a piso</h2>
      <p class="section-lead">Cada vuelta del ciclo deja tu operación un piso más arriba.</p>
      ${floorsFigure()}
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
      <h2 id="faq-title">Antes de empezar</h2>
      <a href="#contacto" class="link-arrow">¿Otra pregunta? Escríbenos ${arrow}</a>
    </header>
    <div data-reveal>${faq.html}</div>
  </div>
</section>

${ctaBand("¿Qué proceso quieres mejorar?", "Cuéntanos dónde se pierde tiempo o dinero y en 48 horas recibes una propuesta.")}

<section class="section" id="contacto" aria-labelledby="contacto-title">
  <div class="container layout">
    <header class="aside" data-reveal>
      ${label("06", "Contacto")}
      <h2 id="contacto-title">Hablemos de tu operación</h2>
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
