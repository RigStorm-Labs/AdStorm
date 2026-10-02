/* form.js — Growth Brief UX: progress, blur validation, AJAX submit w/ native fallback. No localStorage. */
(function () {
  var form = document.getElementById('growth-brief-form');
  if (!form) return;
  var bar = document.getElementById('brief-progress');
  var stepLabel = document.getElementById('brief-step');
  var success = document.getElementById('brief-success');
  var errorBox = document.getElementById('brief-error');
  var submitBtn = document.getElementById('brief-submit');
  var emailInput = form.querySelector('#email');
  var phoneInput = form.querySelector('#phone');
  var contactErr = form.querySelector('#contact-err');
  var CONTACT_MSG = 'Please provide an email address or phone number.';
  // Conditional rule: at least one contact method is required (not per-field).
  var contactValid = function () {
    var e = emailInput ? emailInput.value.trim() : '';
    var p = phoneInput ? phoneInput.value.trim() : '';
    return e !== '' || p !== '';
  };
  var showContactError = function () {
    if (contactErr) contactErr.textContent = CONTACT_MSG;
    [emailInput, phoneInput].forEach(function (f) {
      if (f) { f.classList.add('field-error'); f.setAttribute('aria-invalid', 'true'); }
    });
  };
  var sections = Array.prototype.slice.call(form.querySelectorAll('[data-brief-section]'));

  // Preselect package from ?package= (non-sensitive only)
  try {
    var pkg = new URLSearchParams(location.search).get('package');
    var sel = form.querySelector('[name="preferred_package"]');
    if (pkg && sel) {
      var match = Array.prototype.find.call(sel.options, function (o) { return o.value.toLowerCase() === pkg.toLowerCase(); });
      if (match) sel.value = match.value;
    }
  } catch (e) {}

  var requiredOf = function (sec) { return sec.querySelectorAll('[required]'); };
  var filledRequired = function () {
    var req = form.querySelectorAll('[required]');
    var done = 0;
    req.forEach(function (f) {
      if (f.type === 'checkbox' ? f.checked : f.value.trim() !== '') done++;
    });
    return { done: done, total: req.length };
  };
  var updateProgress = function () {
    var s = filledRequired();
    var pct = s.total ? Math.round((s.done / s.total) * 100) : 0;
    if (bar) { bar.style.width = pct + '%'; bar.setAttribute('aria-valuenow', String(pct)); }
    // Current section = first section with an empty required field
    var idx = sections.findIndex(function (sec) {
      return Array.prototype.some.call(requiredOf(sec), function (f) {
        return f.type === 'checkbox' ? !f.checked : f.value.trim() === '';
      });
    });
    if (stepLabel) stepLabel.textContent = idx === -1 ? 'Ready to send' : 'Section ' + (idx + 1) + ' of ' + sections.length;
  };

  var showErr = function (input, msg) {
    input.classList.add('field-error');
    input.setAttribute('aria-invalid', 'true');
    var p = input.closest('div');
    var slot = p ? p.querySelector('.err-text') : null;
    if (!slot && p) {
      slot = document.createElement('p');
      slot.className = 'err-text';
      p.appendChild(slot);
    }
    if (slot) slot.textContent = msg;
  };
  var clearErr = function (input) {
    input.classList.remove('field-error');
    input.removeAttribute('aria-invalid');
    var slot = input.closest('div') ? input.closest('div').querySelector('.err-text') : null;
    if (slot) slot.textContent = '';
  };
  var validate = function (input) {
    clearErr(input);
    var v = input.value.trim();
    if (input.hasAttribute('required') && !v && input.type !== 'checkbox') { showErr(input, 'This field is required.'); return false; }
    if (input.type === 'checkbox' && input.hasAttribute('required') && !input.checked) { showErr(input, 'Please confirm to continue.'); return false; }
    if (v && input.type === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v)) { showErr(input, 'Enter a valid email address.'); return false; }
    if (v && input.type === 'url' && !/^https?:\/\/.+\..+/.test(v)) { showErr(input, 'Enter a full URL starting with http(s)://'); return false; }
    return true;
  };

  form.querySelectorAll('input,select,textarea').forEach(function (f) {
    f.addEventListener('blur', function () {
      validate(f);
      // Keep both contact fields marked while the combined error is showing.
      if ((f === emailInput || f === phoneInput) && contactErr && contactErr.textContent !== '' && !contactValid()) showContactError();
      updateProgress();
    });
    f.addEventListener('input', updateProgress);
    f.addEventListener('change', updateProgress);
  });
  // Clear the combined contact error as soon as either method is provided.
  [emailInput, phoneInput].forEach(function (f) {
    if (f) f.addEventListener('input', function () {
      if (contactErr && contactErr.textContent !== '' && contactValid()) {
        contactErr.textContent = '';
        // Re-run per-field checks so genuine format errors survive.
        validate(emailInput);
        validate(phoneInput);
      }
    });
  });
  updateProgress();

  form.addEventListener('submit', function (e) {
    var fields = Array.prototype.slice.call(form.querySelectorAll('input,select,textarea'));
    var ok = fields.map(validate).every(Boolean);
    var contactOk = contactValid();
    if (!contactOk) showContactError();
    updateProgress();
    if (!ok || !contactOk) {
      e.preventDefault();
      var first = form.querySelector('.field-error');
      if (first) {
        first.focus();
        first.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
      return;
    }
    // AJAX for inline success/error UX; native POST remains the no-JS fallback.
    e.preventDefault();
    if (errorBox) errorBox.classList.add('hidden');
    if (submitBtn) { submitBtn.disabled = true; submitBtn.querySelector('[data-label]').textContent = 'Sending…'; }
    var data = new FormData(form);
    fetch(form.action, { method: 'POST', body: data, headers: { Accept: 'application/json' } })
      .then(function (r) { return r.json().then(function (j) { return { ok: r.ok, j: j }; }); })
      .then(function (res) {
        if (res.ok) {
          form.classList.add('hidden');
          var prog = document.getElementById('brief-progress-wrap');
          if (prog) prog.classList.add('hidden');
          if (success) {
            success.classList.remove('hidden');
            success.scrollIntoView({ behavior: 'smooth', block: 'start' });
            var h = success.querySelector('h2'); if (h) h.focus();
          }
        } else {
          throw new Error((res.j && res.j.errors && res.j.errors[0] && res.j.errors[0].message) || 'submit failed');
        }
      })
      .catch(function () {
        if (errorBox) {
          errorBox.classList.remove('hidden');
          errorBox.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      })
      .finally(function () {
        if (submitBtn) { submitBtn.disabled = false; submitBtn.querySelector('[data-label]').textContent = 'Submit Growth Brief'; }
      });
  });

  var retry = document.getElementById('brief-retry');
  if (retry && submitBtn) retry.addEventListener('click', function () {
    if (errorBox) errorBox.classList.add('hidden');
    submitBtn.focus();
  });
})();
