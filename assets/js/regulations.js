const sections = document.querySelectorAll('.reg-article');
const navLinks = document.querySelectorAll('.reg-nav__link');

function setActive(id) {
  navLinks.forEach(link => {
    link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
  });
}

let locked = false;

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    const id = link.getAttribute('href').replace('#', '');
    setActive(id);
    locked = true;
    setTimeout(() => { locked = false; }, 1200);
  });
});

const observer = new IntersectionObserver((entries) => {
  if (locked) return;
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      setActive(entry.target.getAttribute('id'));
    }
  });
}, {
  rootMargin: '-15% 0px -75% 0px',
  threshold: 0
});

sections.forEach(s => observer.observe(s));