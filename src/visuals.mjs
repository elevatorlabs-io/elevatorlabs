// Ilustraciones de producto en HTML/CSS (sin imágenes): se adaptan al tema y escalan con font-size (unidades em).
// Son decorativas (aria-hidden); los números son ilustrativos.

const ok = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12.5l4.2 4.2L19 7"/></svg>';

// Tablero de operación: portada y página de mejora de procesos
export const dashboard = () => `
<div class="ui ui-window ui-dash">
  <div class="ui-bar"><i></i><i></i><i></i><span>Tablero de operación</span></div>
  <div class="ui-pad">
    <div class="ui-head"><div><small>Últimos 12 meses</small><strong>Conciliación y facturación</strong></div><span class="ui-live">En vivo</span></div>
    <div class="ui-kpis">
      <div><small>Tiempo de ciclo</small><b>1,2 días</b><em>−64 %</em></div>
      <div><small>Tareas manuales</small><b>18 / sem.</b><em>−72 %</em></div>
      <div><small>Errores</small><b>0,4 %</b><em>−81 %</em></div>
    </div>
    <div class="ui-chart"><small>Horas de trabajo manual por semana</small><div class="ui-bars">${[92, 88, 95, 90, 86, 70, 52, 41, 33, 29, 26, 24]
      .map((h, i) => `<span${i >= 5 ? ' class="on"' : ""} style="--h:${h}%"></span>`)
      .join("")}</div><div class="ui-axis"><span>Antes</span><span>Automatización</span></div></div>
  </div>
</div>
<div class="ui ui-toast"><span class="ui-ok">${ok}</span><div><strong>Pago conciliado</strong><small>Automático · hace 2 min</small></div></div>`;

// Comparación antes / después
export const compare = () => `
<div class="ui ui-cmp">
  ${[["Tiempo de ciclo", "3,4 d", "1,2 d", 92, 34], ["Errores de digitación", "5,1 %", "0,9 %", 80, 16]]
    .map(
      ([t, a, b, wa, wb]) => `<div class="ui-cmp-g"><small>${t}</small>
    <div class="ui-cmp-r"><span class="ui-track"><span style="--w:${wa}%"></span></span><b>${a}</b></div>
    <div class="ui-cmp-r on"><span class="ui-track"><span style="--w:${wb}%"></span></span><b>${b}</b></div></div>`
    )
    .join("")}
</div>`;

// Flujo automatizado entre sistemas
export const flow = () => `
<div class="ui ui-flow">
  <div class="ui-node"><span>@</span><small>Correo</small></div>
  <i class="ui-link"><b></b></i>
  <div class="ui-node is-ai"><span>✦</span><small>IA</small></div>
  <i class="ui-link"><b></b></i>
  <div class="ui-node"><span>▦</span><small>ERP</small></div>
</div>
<div class="ui ui-line"><span class="ui-ok">${ok}</span>Factura FE-2481 registrada y notificada por WhatsApp</div>`;

// Tabla de un sistema a medida
export const table = () => `
<div class="ui ui-table">
  <div class="ui-tr ui-th"><span>Pedido</span><span>Cliente</span><span>Estado</span></div>
  ${[["#1042", 72, "Aprobado", "ok"], ["#1041", 54, "En ruta", "info"], ["#1040", 64, "Aprobado", "ok"], ["#1039", 46, "Pendiente", "wait"]]
    .map(([id, w, s, c]) => `<div class="ui-tr"><span class="ui-id">${id}</span><span class="ui-sk" style="--w:${w}%"></span><span class="ui-tag ${c}">${s}</span></div>`)
    .join("")}
</div>`;

// App móvil de campo
export const phone = () => `
<div class="ui ui-phone">
  <div class="ui-notch"></div>
  <small>Ruta de hoy</small><strong>4 visitas</strong>
  ${[["Centro", true], ["Laureles", true], ["Envigado", false]]
    .map(([z, d]) => `<div class="ui-item${d ? " done" : ""}"><span class="ui-ck">${d ? ok : ""}</span>Visita · ${z}</div>`)
    .join("")}
  <div class="ui-cta">Registrar entrega</div>
</div>`;

// Panel de un SaaS: planes e ingresos recurrentes
export const saas = () => `
<div class="ui ui-saas">
  <div class="ui-plans"><span>Básico</span><span class="on">Pro</span><span>Empresa</span></div>
  <div class="ui-mrr"><small>Ingresos recurrentes</small><b>+38 %</b></div>
  <svg viewBox="0 0 200 60" preserveAspectRatio="none"><path class="ui-area" d="M0 52 L25 48 L50 50 L75 40 L100 36 L125 30 L150 22 L175 16 L200 8 L200 60 L0 60Z"/><path class="ui-spark" d="M0 52 L25 48 L50 50 L75 40 L100 36 L125 30 L150 22 L175 16 L200 8"/></svg>
</div>`;

// Despliegue continuo
export const deploy = () => `
<div class="ui ui-term">
  ${["Pruebas 128/128", "Build en 42 s", "Despliegue a producción"].map((t) => `<div><span class="ui-ok">${ok}</span>${t}</div>`).join("")}
  <div class="ui-uptime">${Array.from({ length: 30 }, (_, i) => `<span${i === 11 ? ' class="warn"' : ""}></span>`).join("")}</div>
  <small>Disponibilidad · 30 días</small>
</div>`;
