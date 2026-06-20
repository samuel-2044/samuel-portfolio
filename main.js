document.addEventListener('DOMContentLoaded', function () {
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';

  document.querySelectorAll('.nav-link').forEach(function (link) {
    if (link.getAttribute('href') === currentPage) {
      link.classList.add('is-active');
    }

    link.addEventListener('click', function () {
      const navToggle = document.getElementById('nav-open');
      if (navToggle) {
        navToggle.checked = false;
      }
    });
  });
});

document.addEventListener('DOMContentLoaded', function () {
  const btn = document.getElementById('scrollTopBtn');
  if (!btn) return;

  window.addEventListener('scroll', function () {
    if (window.scrollY > 400) {
      btn.style.display = 'flex';
    } else {
      btn.style.display = 'none';
    }
  });

  btn.addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
});
