const nav       = document.querySelector('.nav');
const toggle    = document.querySelector('.nav__toggle');
const mobileMenu = document.querySelector('.nav__mobile');

// Scroll effect
window.addEventListener('scroll', () => {
  nav.classList.toggle('nav--scrolled', window.scrollY > 20);
});

// Hamburger toggle
toggle?.addEventListener('click', () => {
  toggle.classList.toggle('active');
  mobileMenu.classList.toggle('open');
});

// Close mobile menu on link click
document.querySelectorAll('.nav__mobile a').forEach(link => {
  link.addEventListener('click', () => {
    toggle.classList.remove('active');
    mobileMenu.classList.remove('open');
  });
});