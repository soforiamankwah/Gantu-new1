/* GANTU website scripts */
(function () {
  var nav = document.getElementById('nav');
  var btn = document.querySelector('.menu');
  if (nav && btn) {
    btn.addEventListener('click', function () {
      var open = nav.classList.toggle('open');
      btn.setAttribute('aria-expanded', open);
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && nav.classList.contains('open')) {
        nav.classList.remove('open');
        btn.setAttribute('aria-expanded', 'false');
        btn.focus();
      }
    });
  }

  // Contact form: opens the visitor's email app (no server needed).
  // To use a real form service later (Formspree, Netlify Forms, etc.), replace this block.
  var form = document.getElementById('cf');
  if (form) {
    form.addEventListener('submit', function (ev) {
      ev.preventDefault();
      var g = function (id) { return document.getElementById(id).value; };
      var body = 'Name: ' + g('n') + '\nCompany: ' + g('c') + '\nEmail: ' + g('e') + '\n\n' + g('m');
      location.href = 'mailto:info@gantu.co.za?subject=' + encodeURIComponent(g('t')) +
        '&body=' + encodeURIComponent(body);
    });
  }
})();
