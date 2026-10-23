// Genera las páginas estáticas del sitio y el sitemap.xml a partir de src/.
// Uso: node scripts/build.mjs  (Node 18+, sin dependencias)
import { createHash } from "node:crypto";
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { page, SITE } from "../src/layout.mjs";
import home from "../src/pages/home.mjs";
import services from "../src/pages/services.mjs";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const hash = (file) => createHash("sha256").update(readFileSync(join(root, file))).digest("hex").slice(0, 8);
const assets = { css: hash("css/styles.css"), js: hash("js/main.js") };

const pages = [{ ...home, file: "index.html" }, ...services];

// Cada página debe tener título y descripción únicos y de longitud razonable para Google.
const seen = new Set();
for (const p of pages) {
  for (const key of ["title", "description"]) {
    if (seen.has(p[key])) throw new Error(`${key} repetido en ${p.path}`);
    seen.add(p[key]);
  }
  if (p.title.length > 70) console.warn(`Aviso: título de ${p.title.length} caracteres en ${p.path}`);
  if (p.description.length > 165) console.warn(`Aviso: descripción de ${p.description.length} caracteres en ${p.path}`);
}

for (const p of pages) {
  const out = join(root, p.file);
  mkdirSync(dirname(out), { recursive: true });
  writeFileSync(out, page({ ...p, assets }));
  console.log(`✓ ${p.file}`);
}

// Sitemap: páginas generadas + páginas legales (estáticas)
const today = new Date().toISOString().slice(0, 10);
const legal = [
  ["/terms-of-service", "0.3"],
  ["/pulso/terms-of-service", "0.2"],
  ["/pulso/privacy-policy", "0.2"],
];
const urls = [...pages.map((p) => [p.path, p.priority]), ...legal]
  .map(([path, priority]) => `  <url>\n    <loc>${SITE.url}${path}</loc>\n    <lastmod>${today}</lastmod>\n    <priority>${priority}</priority>\n  </url>`)
  .join("\n");
writeFileSync(
  join(root, "sitemap.xml"),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`
);
console.log("✓ sitemap.xml");
