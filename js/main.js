/* main.js — FAQ accordion, package select passthrough, footer year, smooth anchor offset. */
(function () {
  // FAQ accordion (progressive enhancement over <button> markup)
  document.querySelectorAll('.faq-item').forEach(function (item) {
    var btn = item.querySelector('.faq-q');
    if (!btn) return;
    btn.addEventListener('click', function () {
      var open = item.getAttribute('data-open') === 'true';
      document.querySelectorAll('.faq-item[data-open="true"]').forEach(function (o) {
        o.setAttribute('data-open', 'false');
        o.querySelector('.faq-q').setAttribute('aria-expanded', 'false');
      });
      item.setAttribute('data-open', String(!open));
      btn.setAttribute('aria-expanded', String(!open));
    });
  });

  // Package buttons -> growth-brief with preselected package (query param read by form.js; never sensitive)
  document.querySelectorAll('[data-package]').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var pkg = btn.getAttribute('data-package');
      try {
        try { if (window.gtag) window.gtag('event', 'package_selected', { package: pkg }); } catch (e) {}
      } catch (e) {}
      window.location.href = 'growth-brief.html?package=' + encodeURIComponent(pkg);
    });
  });

  // Footer year
  document.querySelectorAll('[data-year]').forEach(function (el) { el.textContent = '2026'; });

  // Anchor offset for floating header
  document.querySelectorAll('a[href^="#"]').forEach(function (a) {
    a.addEventListener('click', function (e) {
      var id = a.getAttribute('href');
      if (id.length < 2) return;
      var t = document.querySelector(id);
      if (!t) return;
      e.preventDefault();
      var y = t.getBoundingClientRect().top + window.scrollY - 110;
      window.scrollTo({ top: y, behavior: 'smooth' });
      t.setAttribute('tabindex', '-1');
      t.focus({ preventScroll: true });
    });
  });
})();
