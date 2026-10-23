// Plantilla compartida de todas las páginas: <head> con SEO, cabecera, pie e iconos.
export const SITE = {
  url: "https://elevatorlabs.io",
  name: "Elevator Labs",
  email: "info@elevatorlabs.io",
  phone: "+573017175823",
  phoneLabel: "+57 301 717 5823",
  linkedin: "https://www.linkedin.com/company/elevator-labs-io",
  ogImage: "https://elevatorlabs.io/assets/images/og/elevator-labs.png",
};

export const whatsapp = (text = "Hola Elevator Labs, quiero cotizar un proyecto de software.") =>
  `https://wa.me/${SITE.phone.slice(1)}?text=${encodeURIComponent(text)}`;

// Iconos de trazo (24×24, currentColor)
const P = {
  check: '<path d="M5 12.5l4.2 4.2L19 7"/>',
  arrow: '<path d="M5 12h14M13 6l6 6-6 6"/>',
  web: '<rect x="3" y="4" width="18" height="14" rx="2"/><path d="M3 8h18M8 21h8"/>',
  mobile: '<rect x="7" y="2.5" width="10" height="19" rx="2.5"/><path d="M11 18.5h2"/>',
  saas: '<path d="M7 18a4.5 4.5 0 0 1-.6-8.96A6 6 0 0 1 18 8.5a4.5 4.5 0 0 1-.5 9.5H7z"/><path d="M12 11v5M9.5 13.5h5"/>',
  plug: '<path d="M9 7V3M15 7V3M7 7h10v4a5 5 0 0 1-10 0V7zM12 16v5"/>',
  ai: '<path d="M12 3l1.8 4.7L18.5 9.5l-4.7 1.8L12 16l-1.8-4.7L5.5 9.5l4.7-1.8L12 3zM19 15l.9 2.1L22 18l-2.1.9L19 21l-.9-2.1L16 18l2.1-.9L19 15z"/>',
  cloud: '<path d="M4 7h16M4 12h16M4 17h16"/><circle cx="7.5" cy="7" r=".6"/><circle cx="7.5" cy="12" r=".6"/><circle cx="7.5" cy="17" r=".6"/>',
  rocket: '<path d="M5 15c-1 1-1.5 3.5-1.5 5.5 2 0 4.5-.5 5.5-1.5M9 15l-1-1M14.5 4.5C17 3 20 3 21 3c0 1 0 4-1.5 6.5L13 16l-5-5 6.5-6.5zM15 9h.01"/>',
  mail: '<path d="M4 6h16v12H4zM4 7l8 6 8-6"/>',
  chat: '<path d="M4 19l1.4-4A8 8 0 1 1 9 18.6L4 19z"/>',
  pin: '<path d="M12 21s7-6.2 7-11.5a7 7 0 1 0-14 0C5 14.8 12 21 12 21z"/><circle cx="12" cy="9.5" r="2.4"/>',
  sun: '<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>',
  moon: '<path d="M20 14.5A8 8 0 0 1 9.5 4a8 8 0 1 0 10.5 10.5z"/>',
  menu: '<path d="M4 7h16M4 12h16M4 17h16"/>',
  process: '<rect x="3" y="4" width="6" height="5" rx="1.5"/><rect x="15" y="4" width="6" height="5" rx="1.5"/><rect x="9" y="15" width="6" height="5" rx="1.5"/><path d="M9 6.5h6M18 9v3H12v3M6 9v3h6"/>',
  chart: '<path d="M4 20V10M10 20V4M16 20v-7M22 20H2"/>',
};
export const icon = (name, cls = "") =>
  `<svg${cls ? ` class="${cls}"` : ""} viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${P[name]}</svg>`;

export const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;");

// Nodos JSON-LD comunes (se referencian por @id desde cada página)
export const orgNode = {
  "@type": "Organization",
  "@id": `${SITE.url}/#organization`,
  name: SITE.name,
  url: `${SITE.url}/`,
  logo: { "@type": "ImageObject", url: `${SITE.url}/assets/images/logos/elevator-labs-512.png`, width: 512, height: 512 },
  image: SITE.ogImage,
  description:
    "Empresa de tecnología en Medellín, Colombia, que impulsa la eficiencia operativa de las empresas: mejora y automatización de procesos, software a medida, aplicaciones web y móviles, plataformas SaaS, integraciones e inteligencia artificial para Colombia y Latinoamérica.",
  email: SITE.email,
  telephone: SITE.phone,
  address: { "@type": "PostalAddress", addressLocality: "Medellín", addressRegion: "Antioquia", addressCountry: "CO" },
  areaServed: [
    { "@type": "Country", name: "Colombia" },
    { "@type": "Place", name: "Latinoamérica" },
  ],
  knowsLanguage: ["es", "en"],
  sameAs: [SITE.linkedin],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "sales",
    telephone: SITE.phone,
    email: SITE.email,
    areaServed: ["CO", "MX", "PE", "CL", "EC", "AR", "PA", "CR", "US", "ES"],
    availableLanguage: ["Spanish", "English"],
  },
};
export const websiteNode = {
  "@type": "WebSite",
  "@id": `${SITE.url}/#website`,
  url: `${SITE.url}/`,
  name: SITE.name,
  inLanguage: "es",
  publisher: { "@id": `${SITE.url}/#organization` },
};

export const NAV = [
  ["servicios", "Servicios"],
  ["modelos", "Cómo trabajamos"],
  ["nosotros", "Nosotros"],
  ["proceso", "Método"],
  ["faq", "Preguntas"],
];

export const SERVICE_LINKS = [
  ["/servicios/mejora-de-procesos", "Mejora de procesos"],
  ["/servicios/integraciones-e-inteligencia-artificial", "Automatización e IA"],
  ["/servicios/desarrollo-de-software-a-medida", "Software a medida"],
  ["/servicios/desarrollo-de-aplicaciones-moviles", "Aplicaciones móviles"],
  ["/servicios/desarrollo-saas", "Plataformas SaaS"],
  ["/servicios/cloud-devops-y-auditoria", "Cloud, DevOps y auditoría"],
];

/**
 * Página completa.
 * @param {{path:string,title:string,description:string,ogAlt?:string,graph:object[],body:string,home?:boolean,assets:{css:string,js:string}}} p
 */
export function page(p) {
  const canonical = SITE.url + p.path;
  const pre = p.home ? "" : "/"; // en la portada los enlaces de sección son anclas locales
  const navLinks = NAV.map(([id, label]) => `<a href="${pre}#${id}">${label}</a>`).join("");
  const jsonld = JSON.stringify({ "@context": "https://schema.org", "@graph": [orgNode, websiteNode, ...p.graph] });
  const ogAlt = p.ogAlt || "Elevator Labs: eficiencia operativa impulsada por tecnología";

  return `<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>${esc(p.title)}</title>
<meta name="description" content="${esc(p.description)}" />
<link rel="canonical" href="${canonical}" />
<link rel="alternate" hreflang="es" href="${canonical}" />
<link rel="alternate" hreflang="x-default" href="${canonical}" />
<meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1" />
<meta name="author" content="Elevator Labs" />
<meta name="theme-color" content="#ffffff" />
<script>try{var t=localStorage.getItem("theme");if(t==="light"||t==="dark")document.documentElement.dataset.theme=t}catch(e){}</script>
<link rel="icon" href="/assets/images/favicon.ico" sizes="any" />
<link rel="icon" type="image/svg+xml" href="/assets/images/logos/icono.svg" />
<link rel="apple-touch-icon" href="/assets/images/logos/apple-touch-icon.png" />
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Sora:wght@600;700&display=swap" />
<link rel="stylesheet" href="/css/styles.css?v=${p.assets.css}" />
<script src="/js/main.js?v=${p.assets.js}" defer></script>

<meta property="og:type" content="website" />
<meta property="og:site_name" content="Elevator Labs" />
<meta property="og:locale" content="es_CO" />
<meta property="og:url" content="${canonical}" />
<meta property="og:title" content="${esc(p.title)}" />
<meta property="og:description" content="${esc(p.description)}" />
<meta property="og:image" content="${SITE.ogImage}" />
<meta property="og:image:width" content="1200" />
<meta property="og:image:height" content="630" />
<meta property="og:image:alt" content="${esc(ogAlt)}" />
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="${esc(p.title)}" />
<meta name="twitter:description" content="${esc(p.description)}" />
<meta name="twitter:image" content="${SITE.ogImage}" />
<meta name="twitter:image:alt" content="${esc(ogAlt)}" />

<script type="application/ld+json">${jsonld.replace(/</g, "\\u003c")}</script>
</head>
<body>
<a class="skip-link" href="#contenido">Saltar al contenido</a>

<header class="site-header">
  <div class="container header-inner">
    <a href="/" class="brand" aria-label="Elevator Labs, inicio">
      <img class="logo-light" src="/assets/images/logos/logo-labs-negro.svg" alt="Elevator Labs" width="117" height="34" />
      <img class="logo-dark" src="/assets/images/logos/logo-labs-blanco.svg" alt="" width="117" height="34" />
    </a>
    <nav class="nav" aria-label="Principal">${navLinks}</nav>
    <div class="header-actions">
      <button type="button" class="icon-btn theme-toggle" id="themeToggle" aria-label="Cambiar tema">${icon("moon", "i-moon")}${icon("sun", "i-sun")}</button>
      <a href="${pre}#contacto" class="btn btn-primary btn-sm">Agenda un diagnóstico</a>
      <button type="button" class="icon-btn nav-toggle" id="navToggle" aria-label="Abrir menú" aria-expanded="false" aria-controls="mobileMenu"><span class="burger" aria-hidden="true"><i></i><i></i><i></i></span></button>
    </div>
  </div>
  <nav class="mobile-menu" id="mobileMenu" aria-label="Menú móvil">${navLinks}<a href="${pre}#contacto" class="btn btn-primary">Agenda un diagnóstico</a></nav>
</header>

<main id="contenido">
${p.body}
</main>

<footer class="site-footer">
  <div class="container">
    <div class="footer-grid">
      <div>
        <a href="/" class="brand" aria-label="Elevator Labs, inicio">
          <img class="logo-light" src="/assets/images/logos/logo-labs-negro.svg" alt="Elevator Labs" width="124" height="36" loading="lazy" />
          <img class="logo-dark" src="/assets/images/logos/logo-labs-blanco.svg" alt="" width="124" height="36" loading="lazy" />
        </a>
        <p>Impulsamos la eficiencia operativa con tecnología: mejora y automatización de procesos, software a medida, integraciones e IA para empresas de Colombia y Latinoamérica.</p>
        <span class="status">Disponibles para nuevos proyectos</span>
      </div>
      <div>
        <h2>Servicios</h2>
        <ul>${SERVICE_LINKS.map(([href, label]) => `<li><a href="${href}">${label}</a></li>`).join("")}</ul>
      </div>
      <div>
        <h2>Empresa</h2>
        <ul>
          <li><a href="${pre}#modelos">Modelos de trabajo</a></li>
          <li><a href="${pre}#proceso">Método</a></li>
          <li><a href="${pre}#nosotros">Por qué nosotros</a></li>
          <li><a href="${pre}#faq">Preguntas frecuentes</a></li>
        </ul>
      </div>
      <div>
        <h2>Contacto</h2>
        <ul>
          <li><a href="mailto:${SITE.email}">${SITE.email}</a></li>
          <li><a href="${whatsapp()}" target="_blank" rel="noopener">WhatsApp ${SITE.phoneLabel}</a></li>
          <li><a href="${SITE.linkedin}" target="_blank" rel="noopener">LinkedIn</a></li>
          <li>Medellín, Colombia</li>
        </ul>
      </div>
    </div>
    <div class="footer-bottom">
      <span>&copy; <span id="year">2026</span> Elevator Labs. Todos los derechos reservados.</span>
      <nav aria-label="Legal"><a href="/terms-of-service">Términos y condiciones</a></nav>
    </div>
  </div>
</footer>
</body>
</html>
`;
}

// Bloque de preguntas frecuentes + su nodo FAQPage (mismo texto en HTML y JSON-LD)
export function faqBlock(items) {
  const html = `<div class="faq">${items
    .map((q, i) => `<details${i === 0 ? " open" : ""}><summary>${q.q}</summary><div><p>${q.a}</p></div></details>`)
    .join("")}</div>`;
  const node = {
    "@type": "FAQPage",
    mainEntity: items.map((q) => ({
      "@type": "Question",
      name: q.q,
      acceptedAnswer: { "@type": "Answer", text: q.a.replace(/<[^>]+>/g, "") },
    })),
  };
  return { html, node };
}

// Llamado final común
export const ctaBand = (title, text) => `
<section class="cta band-dark" aria-labelledby="cta-title">
  <div class="container cta-inner">
    <div>
      <h2 id="cta-title">${title}</h2>
      <p>${text}</p>
    </div>
    <div class="hero-ctas">
      <a href="/#contacto" class="btn btn-primary">Agenda un diagnóstico ${icon("arrow")}</a>
      <a href="${whatsapp()}" class="btn btn-secondary" target="_blank" rel="noopener">WhatsApp</a>
    </div>
  </div>
</section>`;

// Etiqueta de sección: número + nombre
export const label = (n, text) => `<p class="label"><span>${n}</span>${text}</p>`;

// Carrusel de tecnologías (la segunda lista es copia para el bucle infinito)
const STACK = [
  ["TypeScript", "typescript"], ["React", "react"], ["Next.js", "nextjs"], ["Node.js", "nodejs"], [".NET", "dotnet"],
  ["Flutter", "flutter"], ["PostgreSQL", "postgresql"], ["MongoDB", "mongodb"], ["Django", "django"], ["Laravel", "laravel"],
  ["AWS", "aws"], ["Azure", "azure"], ["Docker", "docker"], ["GitHub", "github"], ["n8n", "n8n"], ["Grafana", "grafana"],
  ["OpenAI", "openai"], ["Anthropic", "anthropic"], ["Gemini", "gemini"], ["TensorFlow", "tensorflow"], ["Figma", "figma"],
];
// Logos casi negros: en modo oscuro se invierten al ponerse a color
const MONO = new Set(["anthropic", "github", "nextjs", "openai", "aws"]);
export function stackStrip() {
  const list = (hidden) =>
    `<ul${hidden ? ' aria-hidden="true"' : ""}>${STACK.map(
      ([n, f]) => `<li${MONO.has(f) ? ' class="mono"' : ""}><img src="/assets/images/tech/${f}.svg" alt="" width="24" height="24" loading="lazy" decoding="async" />${n}</li>`
    ).join("")}</ul>`;
  return `<section class="container stack" id="tecnologias" aria-labelledby="stack-title">
  <h2 id="stack-title">Tecnologías con las que trabajamos</h2>
  <div class="marquee"><div class="marquee-track">${list(false)}${list(true)}</div></div>
</section>`;
}

// Diagrama de «pisos»: el método como un ascensor que sube piso a piso.
// Filas de arriba (P04) abajo (P00); cada barra es más larga que la anterior y se llena al aparecer.
export function floorsFigure() {
  const floors = ["Diagnóstico", "Diseño de la mejora", "Construcción", "Adopción", "Mejora continua"];
  const rows = floors
    .map((name, i) => ({ name, i }))
    .reverse()
    .map(
      ({ name, i }) => `<li${i === floors.length - 1 ? ' class="is-top"' : ""} style="--i:${i}"><span class="fl-num">P${String(i).padStart(2, "0")}</span><span class="fl-main"><span class="fl-name">${name}</span><span class="fl-bar"><i style="--w:${20 + i * 20}%"></i></span></span></li>`
    )
    .join("");
  return `<figure class="floors" aria-hidden="true">
  <ol class="fl-list">${rows}</ol>
  <figcaption>Cada piso, una mejora medible en tu operación.</figcaption>
</figure>`;
}
