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
