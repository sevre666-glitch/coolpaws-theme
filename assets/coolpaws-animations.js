// CoolPaws Co. — Scroll animations & interactions

document.addEventListener('DOMContentLoaded', () => {

  // Fade-in on scroll via IntersectionObserver
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('cp-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  document.querySelectorAll('.cp-fade-up').forEach(el => observer.observe(el));

  // Add paw float decoration
  const paw = document.createElement('div');
  paw.className = 'cp-paw-float';
  paw.textContent = '🐾';
  paw.title = 'CoolPaws Co.';
  document.body.appendChild(paw);

});
