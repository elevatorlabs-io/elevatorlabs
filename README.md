# Elevator Labs — sitio web

Sitio público de Elevator Labs (`elevatorlabs.io`): empresa que impulsa la eficiencia operativa y la mejora de procesos con tecnología (automatización, software a medida, apps, SaaS, integraciones e IA). HTML estático generado con un script de Node sin dependencias, con modo claro y oscuro y SEO completo.

## Estructura

| Ruta | Qué contiene |
|---|---|
| `src/layout.mjs` | Plantilla común: `<head>` con SEO, cabecera, pie, iconos, JSON-LD de la organización, carrusel de tecnologías, diagrama de «pisos» y llamado final. |
| `src/visuals.mjs` | Ilustraciones de producto en HTML/CSS (tablero, flujo, tabla, app, SaaS, despliegue); escalan con `font-size` y siguen el tema. |
| `src/pages/home.mjs` | Portada: textos, servicios, modelos de trabajo, método y preguntas frecuentes. |
| `src/pages/services.mjs` | Páginas de servicio (`/servicios/…`), una por búsqueda principal. |
| `scripts/build.mjs` | Genera `index.html`, `servicios/*.html` y `sitemap.xml`. |
| `scripts/og.html` | Plantilla de la imagen para redes y de los iconos PNG. |
| `css/styles.css` | Estilos (tokens de claro y oscuro, componentes). |
| `js/main.js` | Tema con transición, menú móvil, aparición al hacer scroll y formulario. |
| `index.html`, `servicios/`, `sitemap.xml` | **Generados**: no se editan a mano. |
| `terms-of-service.html`, `pulso/` | Páginas legales (estáticas, ver abajo). |
| `assets/images/` | Logos, imagen para redes y logos de tecnologías (ver su `README.md`). |
| `_config.yml` | Excluye `src/` y `scripts/` de la publicación en GitHub Pages. |

## Desarrollo

Requiere Node 18 o superior. Edita `src/` o `css/` y genera:

```bash
node scripts/build.mjs
```

```bash
npx serve .
```

El build falla si dos páginas comparten `title` o `description`, y avisa si un título pasa de 70 caracteres o una descripción de 165. También añade a `styles.css` y `main.js` un hash de contenido (`?v=…`) para invalidar la caché.

**Haz commit de los archivos generados**: GitHub Pages publica el repositorio tal cual, sin ejecutar el build.

## Pruebas

No hay pruebas automatizadas. Antes de publicar:

1. `node scripts/build.mjs` sin avisos.
2. Revisa en el navegador escritorio y móvil, modo claro y oscuro (botón de la cabecera), sin errores de consola.
3. Valida los datos estructurados de una página en [Rich Results Test](https://search.google.com/test/rich-results).

## Despliegue

| Rama | Destino | Cómo |
|---|---|---|
| `main` | `https://elevatorlabs.io` | GitHub Pages (despliegue desde la rama, carpeta raíz) detrás de Cloudflare. Cada push publica en ~1 minuto. |

No hay variables ni secretos. El dominio está en `CNAME`. Recomendado en Cloudflare: **activar «Always Use HTTPS»** para que `http://` redirija a `https://` (hoy responde 200 en ambos).

## Páginas y SEO

Cada página tiene `title` y `description` propios, URL canónica, `hreflang` (`es` y `x-default`), Open Graph, Twitter card y un `@graph` de JSON-LD con `Organization` y `WebSite` comunes más sus nodos (`WebPage`, `Service`, `BreadcrumbList`, `FAQPage`). Las preguntas frecuentes salen del mismo texto en HTML y en JSON-LD.

| URL | Búsqueda principal |
|---|---|
| `/` | eficiencia operativa, empresa de desarrollo de software en Colombia |
| `/servicios/mejora-de-procesos` | mejora de procesos, eficiencia operativa |
| `/servicios/integraciones-e-inteligencia-artificial` | automatización de procesos, integraciones, IA para empresas |
| `/servicios/desarrollo-de-software-a-medida` | desarrollo de software a medida |
| `/servicios/desarrollo-de-aplicaciones-moviles` | desarrollo de aplicaciones móviles |
| `/servicios/desarrollo-saas` | desarrollo de plataformas SaaS |
| `/servicios/cloud-devops-y-auditoria` | cloud, DevOps, auditoría de software |

**Añadir una página de servicio:** agrega un objeto al arreglo `SERVICES` de `src/pages/services.mjs` (`slug`, `short`, `name`, `title`, `description`, `h1`, `lead`, `what`, `why`, `tags`, `faqs`), añade su enlace a `SERVICE_LINKS` en `src/layout.mjs` y ejecuta el build: la página entra sola al sitemap.

**Añadir una sección a la portada:** escríbela en `body` de `src/pages/home.mjs` usando `layout` + `aside` (título fijo a la izquierda) y `rows` (filas con filete), y si debe aparecer en el menú, añádela a `NAV`.

## Diseño

- Lenguaje editorial: columnas asimétricas, filetes finos en lugar de tarjetas, turquesa `#2dd4bf` solo como acento sobre negro `#060708` o blanco.
- Tema: sigue la preferencia del sistema; el botón de la cabecera lo fija en `localStorage` (`theme`). Un script en línea del `<head>` lo aplica antes de pintar. Al cambiarlo, el nuevo tema se abre como unas puertas de ascensor, del centro hacia los lados, mientras el anterior retrocede (View Transitions API); sin soporte, hace un fundido de colores, y con «reducir movimiento» cambia sin animación.
- Imágenes: no hay fotos de archivo. Cada servicio y la portada usan ilustraciones de `src/visuals.mjs` (los números son ilustrativos). **Añadir una:** exporta una función que devuelva HTML con la clase `ui`, dale estilos `ui-*` en unidades `em` y úsala en `services` (portada) o en `ART` (`src/pages/services.mjs`).
- Menú móvil: se despliega de arriba abajo con los enlaces en cascada y la hamburguesa se convierte en X.
- Tipografías: Sora (títulos) e Inter (texto) desde Google Fonts con `display=swap`.
- Carrusel de tecnologías: `STACK` en `src/layout.mjs`; nunca se detiene. Los logos van en gris y, al pasar el cursor, crecen y se ponen a color (los casi negros, listados en `MONO`, se invierten en modo oscuro). Queda estático con «reducir movimiento». Para añadir una, pon su SVG en `assets/images/tech/` y agrégala a `STACK`.
- El diagrama de «pisos» de la sección Método representa el ciclo de mejora (`floorsFigure()`): una fila por piso con barras que crecen y se llenan al aparecer, y la cabina del ascensor en el último piso.
- Enlaces a secciones desde otra página (como la miga «Servicios» → `/#servicios`): `js/main.js` repite el salto al terminar de cargar, porque el nativo se pierde mientras cargan fuentes e ilustraciones.

## Imágenes para redes

`assets/images/og/elevator-labs.png` (1200×630) y los iconos PNG se generan desde `scripts/og.html` con Chrome sin interfaz:

```bash
"/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" --headless=new --hide-scrollbars --allow-file-access-from-files --virtual-time-budget=4000 --window-size=1200,630 --screenshot="$PWD/assets/images/og/elevator-labs.png" "file://$PWD/scripts/og.html"
```

```bash
"/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" --headless=new --hide-scrollbars --allow-file-access-from-files --virtual-time-budget=4000 --window-size=512,512 --screenshot="$PWD/assets/images/logos/elevator-labs-512.png" "file://$PWD/scripts/og.html#icon" && sips -z 180 180 assets/images/logos/elevator-labs-512.png --out assets/images/logos/apple-touch-icon.png
```

## Formulario de contacto

Envía a `info@elevatorlabs.io` con [FormSubmit](https://formsubmit.co) (endpoint `/ajax/`, sin cuenta). La primera vez FormSubmit manda un correo de activación a esa dirección que hay que confirmar una sola vez. Lleva un campo trampa (`_honey`) contra spam. Para cambiar de proveedor, cambia el `action` del formulario en `src/pages/home.mjs` y la respuesta esperada en `js/main.js`.

## Páginas legales

En español, inglés, portugués y francés (prevalece el español), con selector de idioma (`?lang=es|en|pt|fr`). No usan el generador.

| Página | URL | Estilo |
|---|---|---|
| Términos y Condiciones Generales de Elevator Labs (marco de todos los productos) | `/terms-of-service` | `css/legal.css` + `js/legal.js` |
| Términos de servicio de Pulso (condiciones particulares) | `/pulso/terms-of-service` | `pulso/legal.css` + `pulso/legal.js` |
| Política de tratamiento de datos personales de Pulso | `/pulso/privacy-policy` | `pulso/legal.css` + `pulso/legal.js` |

- Titular: Elevator Labs como nombre comercial de su titular, con domicilio en Medellín; ley colombiana (Leyes 527 de 1999, 1480 de 2011 y 1581 de 2012). Cuando se constituya la sociedad, actualiza la sección «Identificación del titular» y el «Responsable» de la política de datos (los términos ya prevén la cesión).
- Al cambiar un texto, cámbialo en los cuatro idiomas, conserva los mismos `id` de sección y actualiza la fecha de «Última actualización». Si el cambio es sustancial, los términos obligan a avisar con 15 días (30 si es un precio).
- Compromisos operativos que los textos prometen y hay que cumplir: registros técnicos 90 días como máximo, copias de seguridad que roten en 30 días, retracto con devolución en 30 días y respuesta a consultas (10 días hábiles) y reclamos (15 días hábiles) en `info@elevatorlabs.io`.
