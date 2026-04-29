window.addEventListener('load', () => {
  setTimeout(() => {
    const splash = document.getElementById('splash');
    splash.classList.add('hidden');
    setTimeout(() => splash.remove(), 800);
  }, 2200);
});