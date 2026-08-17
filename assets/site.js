/* Rezi Tarot — shared behaviour (no dependencies) */
(function () {
  'use strict';
  var REDUCED = matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* Scroll reveal */
  if ('IntersectionObserver' in window && !REDUCED) {
    var io = new IntersectionObserver(function (es) {
      es.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add('visible'); io.unobserve(e.target); }
      });
    }, { threshold: 0.14 });
    document.querySelectorAll('.reveal:not(.visible)').forEach(function (el) { io.observe(el); });
  } else {
    document.querySelectorAll('.reveal').forEach(function (el) { el.classList.add('visible'); });
  }

  /* Card glow follows cursor (fine pointers only) */
  if (matchMedia('(pointer: fine)').matches) {
    document.querySelectorAll('.card').forEach(function (c) {
      c.addEventListener('pointermove', function (e) {
        var r = c.getBoundingClientRect();
        c.style.setProperty('--mx', (e.clientX - r.left) + 'px');
        c.style.setProperty('--my', (e.clientY - r.top) + 'px');
      });
    });
  }

  /* Mobile menu — accessible */
  var burger = document.getElementById('burger');
  var links = document.getElementById('navLinks');
  if (burger && links) {
    burger.addEventListener('click', function () {
      var open = links.classList.toggle('open');
      burger.setAttribute('aria-expanded', String(open));
    });
    links.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () {
        links.classList.remove('open');
        burger.setAttribute('aria-expanded', 'false');
      });
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && links.classList.contains('open')) {
        links.classList.remove('open');
        burger.setAttribute('aria-expanded', 'false');
        burger.focus();
      }
    });
  }

  /* Ambient hero video — poster stays the LCP; video only where it makes sense.
     Never loads on: small screens, Save-Data, slow connections, reduced motion. */
  var hm = document.querySelector('.hero-media[data-webm], .hero-media[data-mp4]');
  if (hm && !REDUCED) {
    var conn = navigator.connection || {};
    var slow = conn.saveData === true ||
               /(^|-)2g|3g/.test(String(conn.effectiveType || ''));
    if (window.innerWidth >= 900 && !slow) {
      var v = document.createElement('video');
      v.muted = true; v.loop = true; v.autoplay = true;
      v.playsInline = true; v.setAttribute('playsinline', '');
      v.preload = 'auto';
      v.setAttribute('aria-hidden', 'true');
      v.setAttribute('tabindex', '-1');
      var ok = false;
      [['webm', hm.getAttribute('data-webm')], ['mp4', hm.getAttribute('data-mp4')]]
        .forEach(function (s) {
          if (!s[1]) return;
          var src = document.createElement('source');
          src.src = s[1]; src.type = 'video/' + s[0];
          v.appendChild(src); ok = true;
        });
      if (ok) {
        v.addEventListener('error', function () { v.remove(); }, true);
        v.addEventListener('playing', function () { v.classList.add('playing'); });
        hm.appendChild(v);
        var p = v.play(); if (p && p.catch) { p.catch(function () { v.remove(); }); }
      }
    }
  }
})();
