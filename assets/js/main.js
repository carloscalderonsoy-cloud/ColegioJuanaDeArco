/* Sin dependencias. Menú móvil, animaciones de entrada y formularios -> WhatsApp. */
(function () {
  'use strict';
  var WA = '523326053778';
  document.documentElement.classList.add('js');

  // Menú móvil
  var btn = document.querySelector('.menu-btn');
  var nav = document.getElementById('nav');
  if (btn && nav) {
    btn.addEventListener('click', function () {
      var open = nav.classList.toggle('is-open');
      btn.setAttribute('aria-expanded', open);
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && nav.classList.contains('is-open')) { nav.classList.remove('is-open'); btn.setAttribute('aria-expanded', 'false'); btn.focus(); }
    });
  }

  // Aparición suave al hacer scroll
  var items = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) { if (en.isIntersecting) { en.target.classList.add('is-in'); io.unobserve(en.target); } });
    }, { threshold: 0.12 });
    items.forEach(function (el) { io.observe(el); });
  } else { items.forEach(function (el) { el.classList.add('is-in'); }); }

  // Formularios "Agenda un recorrido": arman un mensaje de WhatsApp
  document.querySelectorAll('form[data-wa]').forEach(function (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var d = new FormData(form), lines = ['Hola, quiero agendar un recorrido en el Colegio Juana de Arco.'];
      form.querySelectorAll('[name]').forEach(function (f) {
        var label = form.querySelector('label[for="' + f.id + '"]');
        var v = d.get(f.name);
        if (v) lines.push((label ? label.textContent.trim() : f.name) + ': ' + v);
      });
      window.open('https://wa.me/' + WA + '?text=' + encodeURIComponent(lines.join('\n')), '_blank', 'noopener');
    });
  });

  // Video del hero: pausa manual y respeta "reducir movimiento"
  var v = document.getElementById('hero-video'), tg = document.querySelector('.video-toggle');
  if (v && tg) {
    var rm = window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;
    var setP = function (paused) { paused ? v.pause() : v.play().catch(function(){}); tg.setAttribute('aria-pressed', paused); tg.setAttribute('aria-label', paused ? 'Reproducir video' : 'Pausar video'); };
    if (rm) setP(true);
    tg.addEventListener('click', function () { setP(!v.paused); });
    v.addEventListener('error', function () { tg.hidden = true; }, true);
    v.querySelector('source').addEventListener('error', function () { tg.hidden = true; });
  }

  // Fecha mínima = hoy
  var today = new Date().toISOString().split('T')[0];
  document.querySelectorAll('input[type="date"]').forEach(function (i) { i.min = today; });
})();
