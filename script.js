// Mobile menu toggle
const menuBtn = document.getElementById('mobile-menu-btn');
const menuIcon = document.getElementById('mobile-menu-icon');
const mobileMenu = document.getElementById('mobile-menu');

if (menuBtn && mobileMenu) {
  menuBtn.addEventListener('click', () => {
    const isOpen = mobileMenu.classList.toggle('flex');
    mobileMenu.classList.toggle('hidden');
    menuBtn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    menuIcon.textContent = isOpen ? 'close' : 'menu';
  });

  // Close mobile menu after clicking a link
  mobileMenu.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      mobileMenu.classList.add('hidden');
      mobileMenu.classList.remove('flex');
      menuBtn.setAttribute('aria-expanded', 'false');
      menuIcon.textContent = 'menu';
    });
  });
}

// Scroll-reveal animation using IntersectionObserver
const revealEls = document.querySelectorAll('.reveal');

if ('IntersectionObserver' in window && revealEls.length) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  revealEls.forEach((el) => observer.observe(el));
} else {
  // Fallback: just show everything
  revealEls.forEach((el) => el.classList.add('is-visible'));
}
