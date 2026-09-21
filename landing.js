// Progressive enhancement: the full page remains available without JavaScript.
if ('IntersectionObserver' in window && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const observer = new IntersectionObserver(entries => {
    for (const entry of entries) if (entry.isIntersecting) {
      entry.target.classList.remove('is-pending');
      observer.unobserve(entry.target);
    }
  }, {threshold: 0.08});
  document.querySelectorAll('.section-heading, .story-card, .trust-heading, .trust-details article, .closing').forEach(el => {
    // Never hide content already in view, including restored scroll positions.
    if (el.getBoundingClientRect().top > innerHeight) {
      el.classList.add('reveal', 'is-pending');
      observer.observe(el);
    }
  });
}
document.querySelectorAll('a[href="#plans"]').forEach(link => link.addEventListener('click', () => {
  document.getElementById('plans').open = true;
}));
