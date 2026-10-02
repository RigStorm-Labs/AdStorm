/* navigation.js — mobile menu, header state, active link. Vanilla only. */
(function () {
  var btn = document.getElementById('nav-toggle');
  var menu = document.getElementById('mobile-menu');
  var header = document.getElementById('site-header');
  if (btn && menu) {
    btn.addEventListener('click', function () {
      var open = menu.classList.toggle('hidden');
      btn.setAttribute('aria-expanded', String(!open));
      var iconOpen = btn.querySelector('[data-icon-open]');
      var iconClose = btn.querySelector('[data-icon-close]');
      if (iconOpen && iconClose) { iconOpen.classList.toggle('hidden'); iconClose.classList.toggle('hidden'); }
    });
    menu.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () {
        menu.classList.add('hidden');
        btn.setAttribute('aria-expanded', 'false');
      });
    });
  }
  if (header) {
    // Shadow lives on the rounded navbar container itself (first child),
    // never on the full-width transparent header wrapper.
    var navBar = header.firstElementChild;
    var onScroll = function () {
      if (navBar) navBar.classList.toggle('shadow-2xl', window.scrollY > 24);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }
  // Active link from current filename
  try {
    var page = (location.pathname.split('/').pop() || 'index.html').toLowerCase();
    document.querySelectorAll('[data-nav]').forEach(function (a) {
      var href = (a.getAttribute('href') || '').toLowerCase();
      if (href === page || (page === '' && href === 'index.html')) a.setAttribute('aria-current', 'page');
    });
  } catch (e) { /* noop */ }
})();
