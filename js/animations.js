/* animations.js — IntersectionObserver reveals + counters. Respects reduced motion. */
(function () {
  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var els = document.querySelectorAll('.reveal');
  if (reduce || !('IntersectionObserver' in window)) {
    els.forEach(function (el) { el.classList.add('in'); });
  } else {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });
    els.forEach(function (el) { io.observe(el); });
  }
  // Animated numerals [data-count]
  var nums = document.querySelectorAll('[data-count]');
  if (!nums.length) return;
  var fmt = function (v, d) { return d > 0 ? v.toFixed(d) : Math.round(v).toString(); };
  var run = function (el) {
    var target = parseFloat(el.getAttribute('data-count'));
    var dec = parseInt(el.getAttribute('data-decimals') || '0', 10);
    if (reduce) { el.textContent = fmt(target, dec); return; }
    var t0 = null, dur = 1100;
    var step = function (t) {
      if (!t0) t0 = t;
      var p = Math.min((t - t0) / dur, 1);
      var e = 1 - Math.pow(1 - p, 3);
      el.textContent = fmt(target * e, dec);
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  };
  if ('IntersectionObserver' in window && !reduce) {
    var nio = new IntersectionObserver(function (es) {
      es.forEach(function (en) { if (en.isIntersecting) { run(en.target); nio.unobserve(en.target); } });
    }, { threshold: 0.5 });
    nums.forEach(function (n) { nio.observe(n); });
  } else { nums.forEach(run); }
})();
