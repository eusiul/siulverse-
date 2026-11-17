// ─────────────────────────────────────────────────────────────────────────────
// MOTION — Siulverse
// Movimiento deliberado y escaso: el "monumento" (wordmark) escala con el scroll,
// y cada sección entra una vez al aparecer. Todo tiene fallback sin JS y respeta
// prefers-reduced-motion.
// ─────────────────────────────────────────────────────────────────────────────
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export function initMotion() {
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // 1) Entradas por sección (IntersectionObserver, barato y robusto).
  //    Escalona heading → texto → media dentro de cada bloque .reveal.
  const reveals = document.querySelectorAll('.reveal');
  if (reduce || !('IntersectionObserver' in window)) {
    reveals.forEach((el) => el.classList.add('is-in'));
  } else {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-in');
            io.unobserve(entry.target);
          }
        });
      },
      { rootMargin: '0px 0px -12% 0px', threshold: 0.12 }
    );
    reveals.forEach((el) => io.observe(el));
  }

  // 2) Signature move: el monumento del hero escala al salir la primeira tela.
  gsap.registerPlugin(ScrollTrigger);

  const monument = document.querySelector('[data-monument]');
  if (monument) {
    gsap.fromTo(
      monument,
      { scale: 1 },
      {
        scale: 0.93,
        yPercent: -4,
        ease: 'none',
        scrollTrigger: {
          trigger: monument.closest('section') || monument,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      }
    );
  }

  // 3) El wordmark del footer crece de 0.94 a 1 al entrar (cierre pesado).
  const footerMark = document.querySelector('[data-footer-mark]');
  if (footerMark) {
    gsap.fromTo(
      footerMark,
      { scale: 0.94, opacity: 0.6 },
      {
        scale: 1,
        opacity: 1,
        ease: 'power2.out',
        scrollTrigger: { trigger: footerMark, start: 'top 85%', end: 'top 45%', scrub: true },
      }
    );
  }

  // 4) "Story scroll": cada sección después del hero entra ROTANDO desde la
  //    esquina inferior-izquierda hasta quedar recta, a medida que se hace scroll.
  //    (Solo la animación del componente de referencia, sin pin ni cambios de contenido.)
  const flowSections = Array.from(document.querySelectorAll('main > section, footer')).filter(
    (s) => s.id !== 'inicio'
  );
  // Tonos de negro apenas distintos para el efecto "pasar una página".
  const pageTones = ['#0d110f', '#0a0d0a', '#111614'];
  let toneIdx = 0;

  flowSections.forEach((section, i) => {
    // Intercalar el lado: par → desde la izquierda (bottom-left), impar → desde
    // la derecha (bottom-right), para que no todas vengan del mismo lado.
    const fromRight = i % 2 === 1;
    gsap.fromTo(
      section,
      {
        rotation: fromRight ? -18 : 18, // más inclinación para que se note bien
        transformOrigin: fromRight ? 'bottom right' : 'bottom left',
      },
      {
        rotation: 0,
        ease: 'none',
        scrollTrigger: {
          trigger: section,
          start: 'top bottom', // empieza cuando el borde superior entra por abajo
          end: 'top 55%', // queda recta cuando su top llega al 55% de la pantalla
          scrub: true,
        },
      }
    );

    // A partir de la 3ª sección: darle a cada una un negro apenas distinto, para
    // que al rotar se vea el borde de una sobre otra (como pasar una página).
    // Solo las que son transparentes (no toca el banner claro).
    if (i >= 2) {
      const cur = getComputedStyle(section).backgroundColor;
      if (cur === 'rgba(0, 0, 0, 0)' || cur === 'transparent') {
        section.style.backgroundColor = pageTones[toneIdx % pageTones.length];
        toneIdx++;
      }
    }
  });

  ScrollTrigger.refresh();
}
