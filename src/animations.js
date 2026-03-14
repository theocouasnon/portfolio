/**
 * animations.js — Scroll-reveal and intersection observer animations
 */

export function initScrollReveal() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          // Don't unobserve so we can re-trigger if needed
        }
      });
    },
    {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px',
    }
  );

  const revealElements = document.querySelectorAll(
    '.reveal, .reveal-left, .reveal-right, .reveal-scale'
  );
  revealElements.forEach((el) => observer.observe(el));
}

export function initParallax() {
  const heroGradients = document.querySelectorAll('.hero-gradient');

  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    heroGradients.forEach((g, i) => {
      const speed = i === 0 ? 0.3 : 0.15;
      g.style.transform = `translateY(${scrollY * speed}px)`;
    });
  }, { passive: true });
}

export function initParticles() {
  const hero = document.querySelector('.hero-bg');
  if (!hero) return;

  const particleContainer = document.createElement('div');
  particleContainer.className = 'bg-particles';

  for (let i = 0; i < 30; i++) {
    const particle = document.createElement('div');
    particle.className = 'particle';
    particle.style.left = `${Math.random() * 100}%`;
    particle.style.top = `${Math.random() * 100}%`;
    particle.style.animationDelay = `${Math.random() * 6}s`;
    particle.style.animationDuration = `${4 + Math.random() * 4}s`;
    particle.style.width = `${1 + Math.random() * 2}px`;
    particle.style.height = particle.style.width;
    particleContainer.appendChild(particle);
  }

  hero.appendChild(particleContainer);
}
