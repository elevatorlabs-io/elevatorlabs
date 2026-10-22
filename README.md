# Elevator Labs — Landing Page

Landing page moderna, responsive y sin build step (HTML + CSS + JS puro), lista para publicar en **GitHub Pages**. Incluye animaciones al hacer scroll, un hero con orbes animados en canvas, acordeones, un carrusel de logos infinito y formulario de contacto (demo estática).

## Estructura del proyecto

```
├── index.html                 # Toda la landing page (secciones abajo)
├── css/
│   └── styles.css             # Design tokens + estilos + animaciones
├── js/
│   └── main.js                # Interacciones: scroll reveal, acordeones, canvas, etc.
├── assets/
│   └── images/                # 👉 AQUÍ van tus logos y fotos reales (ver assets/images/README.md)
│       ├── logo.svg
│       ├── favicon.svg
│       ├── logos/             # Logos de clientes/partners (carrusel)
│       ├── portfolio/         # Capturas/mockups de proyectos
│       └── team/              # Fotos para testimonios
└── .github/workflows/deploy.yml  # Despliegue automático a GitHub Pages
```

## Secciones incluidas

1. **Navbar** — sticky, cambia a fondo blanco con blur al hacer scroll.
2. **Hero** — headline con gradiente, orbes animados en `<canvas>`, stats con contador animado.
3. **Logos de clientes** — carrusel infinito (marquee), se pausa al pasar el mouse.
4. **Servicios** — lista tipo acordeón (6 servicios).
5. **Por qué Elevator Labs** — sección oscura, layout asimétrico 2×2.
6. **Proceso** — línea de tiempo con 4 pasos (horizontal en desktop, vertical en mobile).
7. **Proyectos** — grid de proyectos destacados con overlay al hover.
8. **Testimonios** — formato "pull quote" + foto y cargo.
9. **FAQ** — acordeón de preguntas frecuentes.
10. **CTA final** — sección oscura con glow radial.
11. **Contacto** — formulario (demo estática, ver nota abajo) + datos de contacto.
12. **Footer** — 4 columnas, indicador de disponibilidad, redes sociales.

## Cómo agregar tus imágenes y logos

Todo el contenido visual reemplazable vive en **`assets/images/`**. Ahí encontrarás un `README.md` con el detalle exacto de qué archivo reemplazar (logos de clientes, mockups de proyectos, fotos de testimonios, logo de marca y favicon). No necesitas tocar el HTML: solo sobrescribe los archivos con el mismo nombre.

## Ver el sitio en local

No requiere instalación de dependencias. Basta con abrir `index.html` en el navegador, o levantar un servidor local simple:

```bash
npx serve .
```

o con Python:

```bash
python -m http.server 8080
```

## Páginas legales

En español, inglés, portugués y francés (prevalece el español), con selector de idioma (`?lang=es|en|pt|fr`):

| Página | URL | Estilo |
|---|---|---|
| Términos y Condiciones Generales de Elevator Labs (marco de todos los productos) | `/terms-of-service` | `css/legal.css` + `js/legal.js` (marca Elevator Labs) |
| Términos de servicio de Pulso (condiciones particulares) | `/pulso/terms-of-service` | `pulso/legal.css` + `pulso/legal.js` |
| Política de tratamiento de datos personales de Pulso | `/pulso/privacy-policy` | `pulso/legal.css` + `pulso/legal.js` |

- Titular: Elevator Labs como nombre comercial de su titular, con domicilio en Medellín; ley colombiana (Leyes 527 de 1999, 1480 de 2011 y 1581 de 2012). Cuando se constituya la sociedad, actualiza la sección «Identificación del titular» y el «Responsable» de la política de datos (los términos ya prevén la cesión).
- Al cambiar un texto, cámbialo en los cuatro idiomas, conserva los mismos `id` de sección y actualiza la fecha de «Última actualización». Si el cambio es sustancial, los términos obligan a avisar con 15 días (30 si es un precio).
- Compromisos operativos que los textos prometen y hay que cumplir: registros técnicos 90 días como máximo, copias de seguridad que roten en 30 días, retracto con devolución en 30 días y respuesta a consultas (10 días hábiles) y reclamos (15 días hábiles) en `info@elevatorlabs.io`.

## Formulario de contacto

El formulario de la sección "Contacto" es una **demo estática**: al enviarlo solo muestra un mensaje de éxito en pantalla, no envía datos a ningún servidor. Para recibir mensajes reales, conéctalo a un servicio como:

- [Formspree](https://formspree.io/) (agrega `action="https://formspree.io/f/tu-id"` y `method="POST"` al `<form>`)
- Netlify Forms (si despliegas en Netlify en vez de GitHub Pages)
- Tu propio backend / API

## Despliegue en GitHub Pages

### Opción A — Automático con GitHub Actions (incluido)

Este repo ya trae `.github/workflows/deploy.yml`, que publica el sitio en cada push a `main`.

1. Sube el proyecto a un repositorio de GitHub.
2. Ve a **Settings → Pages**.
3. En **Build and deployment → Source**, selecciona **GitHub Actions**.
4. Haz push a `main` — el workflow se ejecuta solo y publica el sitio.
5. La URL quedará en `https://<tu-usuario>.github.io/<tu-repo>/`.

### Opción B — Manual, sin Actions

1. Sube el proyecto a GitHub.
2. Ve a **Settings → Pages**.
3. En **Build and deployment → Source**, selecciona **Deploy from a branch**.
4. Elige la rama `main` y la carpeta `/ (root)`.
5. Guarda — el sitio queda publicado en la misma URL indicada arriba.

> El archivo `.nojekyll` ya está incluido para evitar que GitHub Pages intente procesar el sitio con Jekyll.

## Personalización rápida

- **Colores y tipografía**: variables CSS al inicio de `css/styles.css` (`:root`).
- **Textos**: directamente en `index.html`, sección por sección.
- **Animaciones**: controladas por `js/main.js` (IntersectionObserver para scroll-reveal, canvas para los orbes del hero). Respetan `prefers-reduced-motion`.
