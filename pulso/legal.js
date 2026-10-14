/* Selector de idioma de las páginas legales: es, en, pt, fr. Sin dependencias. */
(function () {
  var LANGS = ['es', 'en', 'pt', 'fr'];
  var docs = document.querySelectorAll('.doc');
  var buttons = document.querySelectorAll('[data-set-lang]');
  var titles = {};
  try { titles = JSON.parse(document.body.getAttribute('data-titles') || '{}'); } catch (e) { /* sin títulos */ }

  function stored() { try { return localStorage.getItem('legal.lang'); } catch (e) { return null; } }
  function pick() {
    var q = new URLSearchParams(location.search).get('lang');
    if (LANGS.indexOf(q) >= 0) return q;
    var s = stored();
    if (LANGS.indexOf(s) >= 0) return s;
    var n = ((navigator.language || 'es') + '').slice(0, 2).toLowerCase();
    return LANGS.indexOf(n) >= 0 ? n : 'es';
  }
  function show(lang, remember) {
    docs.forEach(function (d) { d.hidden = d.getAttribute('data-lang') !== lang; });
    buttons.forEach(function (b) { b.setAttribute('aria-pressed', String(b.getAttribute('data-set-lang') === lang)); });
    document.documentElement.lang = lang;
    if (titles[lang]) document.title = titles[lang];
    if (remember) {
      try { localStorage.setItem('legal.lang', lang); } catch (e) { /* sin almacenamiento */ }
      var u = new URL(location.href);
      u.searchParams.set('lang', lang);
      history.replaceState(null, '', u.pathname + u.search + u.hash);
    }
  }
  buttons.forEach(function (b) { b.addEventListener('click', function () { show(b.getAttribute('data-set-lang'), true); }); });
  show(pick(), false);

  // Al ir a una sección, el título recibe el foco (útil con lector de pantalla).
  document.addEventListener('click', function (e) {
    var a = e.target.closest && e.target.closest('aside a[href^="#"]');
    if (!a) return;
    var el = document.getElementById(a.getAttribute('href').slice(1));
    if (el) setTimeout(function () { el.focus({ preventScroll: true }); }, 0);
  });
})();
