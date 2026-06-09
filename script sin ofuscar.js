 // Slideshow hero
  let slides = document.querySelectorAll('.hero-slide');
  let cur = 0;
  setInterval(() => {
    slides[cur].classList.remove('active');
    cur = (cur + 1) % slides.length;
    slides[cur].classList.add('active');
  }, 5000);

  // Sticky nav scroll
  const nav = document.getElementById('main-nav');
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 60);
  });

  // Mobile menu
  function toggleMenu() {
    nav.classList.toggle('open');
  }
  document.querySelectorAll('.nav-links a').forEach(a => {
    a.addEventListener('click', () => nav.classList.remove('open'));
  });

  // Scroll reveal
  const reveals = document.querySelectorAll('.reveal');
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('in'); obs.unobserve(e.target); }
    });
  }, { threshold: 0.12 });
  reveals.forEach(el => obs.observe(el));