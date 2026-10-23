# Imágenes del sitio

| Carpeta / archivo | Uso |
|---|---|
| `logos/logo-labs-negro.svg` | Logo completo (ícono turquesa + texto oscuro) para el modo claro. Se genera desde `logo-labs-blanco.svg` cambiando los grises por oscuros. |
| `logos/logo-labs-blanco.svg` | Logo completo (ícono turquesa + texto claro) para el modo oscuro. |
| `logos/icono.svg` | Ícono «EA» solo; favicon SVG. |
| `logos/logo-negro.svg`, `logos/logo-blanco.svg` | Variantes monocromas para uso externo (documentos, redes). |
| `logos/elevator-labs-512.png` | Logo cuadrado para los datos estructurados (`Organization.logo`). |
| `logos/apple-touch-icon.png` | Ícono de 180 px para iOS. |
| `og/elevator-labs.png` | Imagen de 1200×630 para Open Graph y Twitter. |
| `tech/` | Logos de tecnologías (paquete `tech-stack-icons`, licencia MIT). |
| `pulso/` | Logos de Pulso, usados por sus páginas legales. |
| `favicon.ico` | Favicon de respaldo. |

Los SVG de logo están optimizados con `svgo` (precisión 1). Los PNG se regeneran con `scripts/og.html` (ver README principal).
