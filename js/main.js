/* Elevator Labs — interacciones mínimas del sitio (sin dependencias).
   El tema inicial lo aplica un script en línea del <head> para evitar parpadeos. */
(() => {
  const root = document.documentElement;
  root.classList.add("js");

  /* Llegar desde otra página a una sección (p. ej. /#servicios desde las migas de pan):
     el salto nativo ocurre antes de que carguen fuentes e ilustraciones y se pierde,
     así que se repite cuando la página termina de cargar. */
  if (location.hash.length > 1) {
    const target = document.getElementById(decodeURIComponent(location.hash.slice(1)));
    if (target) {
      if ("scrollRestoration" in history) history.scrollRestoration = "manual";
      const go = () => target.scrollIntoView({ behavior: "instant", block: "start" });
      go();
      addEventListener("load", go, { once: true });
    }
  }

  /* Tema claro / oscuro: alterna y recuerda la elección */
  const themeBtn = document.getElementById("themeToggle");
  const metaTheme = document.querySelector('meta[name="theme-color"]:not([media])');
  const isDark = () =>
    root.dataset.theme ? root.dataset.theme === "dark" : matchMedia("(prefers-color-scheme: dark)").matches;
  const syncThemeUi = () => {
    const dark = isDark();
    if (themeBtn) themeBtn.setAttribute("aria-label", dark ? "Cambiar a modo claro" : "Cambiar a modo oscuro");
    if (metaTheme) metaTheme.content = dark ? "#050607" : "#ffffff";
  };
  if (themeBtn) {
    const applyTheme = (next) => {
      root.dataset.theme = next;
      try { localStorage.setItem("theme", next); } catch (e) { /* sin almacenamiento */ }
      syncThemeUi();
    };
    themeBtn.addEventListener("click", () => {
      const next = isDark() ? "light" : "dark";
      const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
      // Sin View Transitions: fundido suave de colores
      if (!document.startViewTransition || reduced) {
        if (!reduced) {
          root.classList.add("theme-fade");
          setTimeout(() => root.classList.remove("theme-fade"), 450);
        }
        applyTheme(next);
        return;
      }
      // Con View Transitions: «puertas de ascensor». El nuevo tema se abre desde el centro hacia los lados
      // mientras el anterior retrocede y se oscurece.
      const transition = document.startViewTransition(() => applyTheme(next));
      transition.ready.then(() => {
        const timing = { duration: 800, easing: "cubic-bezier(0.65, 0, 0.35, 1)" };
        root.animate(
          { clipPath: ["inset(0 50% 0 50%)", "inset(0 0% 0 0%)"] },
          { ...timing, pseudoElement: "::view-transition-new(root)" }
        );
        root.animate(
          { transform: ["scale(1)", "scale(0.94)"], filter: ["brightness(1)", "brightness(0.55)"] },
          { ...timing, pseudoElement: "::view-transition-old(root)" }
        );
      });
    });
  }
  syncThemeUi();

  /* Cabecera con borde al hacer scroll */
  const header = document.querySelector(".site-header");
  const onScroll = () => header && header.classList.toggle("is-scrolled", scrollY > 8);
  addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* Menú móvil */
  const toggle = document.getElementById("navToggle");
  const menu = document.getElementById("mobileMenu");
  if (toggle && menu) {
    const setOpen = (open) => {
      menu.classList.toggle("is-open", open);
      toggle.setAttribute("aria-expanded", String(open));
      toggle.setAttribute("aria-label", open ? "Cerrar menú" : "Abrir menú");
    };
    toggle.addEventListener("click", () => setOpen(!menu.classList.contains("is-open")));
    menu.addEventListener("click", (e) => { if (e.target.closest("a")) setOpen(false); });
    addEventListener("keydown", (e) => { if (e.key === "Escape") setOpen(false); });
  }

  /* Enlace activo de la navegación según la sección visible */
  const navLinks = [...document.querySelectorAll('.nav a[href^="#"]')];
  if (navLinks.length && "IntersectionObserver" in window) {
    const byId = new Map(navLinks.map((a) => [a.hash.slice(1), a]));
    const spy = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        navLinks.forEach((a) => a.removeAttribute("aria-current"));
        const link = byId.get(entry.target.id);
        if (link) link.setAttribute("aria-current", "true");
      });
    }, { rootMargin: "-45% 0px -50% 0px" });
    byId.forEach((_, id) => { const el = document.getElementById(id); if (el) spy.observe(el); });
  }

  /* Aparición suave al entrar en pantalla */
  const revealables = document.querySelectorAll("[data-reveal]");
  if ("IntersectionObserver" in window && !matchMedia("(prefers-reduced-motion: reduce)").matches) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) { entry.target.classList.add("is-visible"); io.unobserve(entry.target); }
      });
    }, { rootMargin: "0px 0px -8% 0px" });
    revealables.forEach((el) => io.observe(el));
  } else {
    revealables.forEach((el) => el.classList.add("is-visible"));
  }

  /* Formulario de contacto (FormSubmit, endpoint /ajax/ en el action) */
  const form = document.getElementById("contactForm");
  if (form) {
    const ok = document.getElementById("formSuccess");
    const fail = document.getElementById("formError");
    const btn = form.querySelector('button[type="submit"]');
    const label = btn ? btn.textContent : "";
    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      ok.classList.remove("is-visible");
      fail.classList.remove("is-visible");
      if (btn) { btn.disabled = true; btn.textContent = "Enviando…"; }
      try {
        const res = await fetch(form.action, { method: "POST", headers: { Accept: "application/json" }, body: new FormData(form) });
        const data = await res.json().catch(() => ({}));
        if (!res.ok || !(data.success === true || data.success === "true")) throw new Error(data.message || "Error");
        ok.classList.add("is-visible");
        form.reset();
      } catch (err) {
        fail.classList.add("is-visible");
      } finally {
        if (btn) { btn.disabled = false; btn.textContent = label; }
      }
    });
  }

  /* Año del pie */
  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();
})();
