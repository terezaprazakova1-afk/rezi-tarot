/* Optional enhancements: content and bookings work without JavaScript. */
(() => {
  const motion = matchMedia('(prefers-reduced-motion: reduce)');
  const pointer = matchMedia('(hover: hover) and (pointer: fine)');
  const cards = document.querySelectorAll('.sig-card, .sig-path');
  cards.forEach(card => {
    let frame = 0;
    const reset = () => {
      cancelAnimationFrame(frame);
      ['--tilt-x','--tilt-y','--shine-x','--shine-y'].forEach(key => card.style.removeProperty(key));
    };
    card.addEventListener('pointermove', event => {
      if (motion.matches || !pointer.matches) return;
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const r = card.getBoundingClientRect();
        const x = Math.min(1,Math.max(0,(event.clientX-r.left)/r.width));
        const y = Math.min(1,Math.max(0,(event.clientY-r.top)/r.height));
        card.style.setProperty('--tilt-x', `${(0.5-y)*3}deg`);
        card.style.setProperty('--tilt-y', `${(x-0.5)*3}deg`);
        card.style.setProperty('--shine-x', `${x*100}%`);
        card.style.setProperty('--shine-y', `${y*100}%`);
      });
    });
    card.addEventListener('pointerleave',reset);
    card.addEventListener('pointercancel',reset);
    motion.addEventListener('change',reset);
    pointer.addEventListener('change',reset);
  });
  // Steps remain readable without JS; scrolling adds only a visual cue.
  if ('IntersectionObserver' in window) {
    const steps = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        entry.target.classList.toggle('is-in-view', entry.isIntersecting);
      });
    }, { threshold: 0.65 });
    document.querySelectorAll('.sig-process-step').forEach(el => steps.observe(el));
  }
  if (!motion.matches && 'IntersectionObserver' in window) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('sig-enter');
        observer.unobserve(entry.target);
      });
    }, {threshold:0.08});
    document.querySelectorAll('.sig-card,.sig-panel,.sig-venus,.sig-path').forEach((el,i) => {
      el.style.setProperty('--enter-delay',`${(i%4)*60}ms`);
      observer.observe(el);
    });
  }
  // Hero portrait: a whisper of parallax. Off for reduced motion and touch.
  const portrait = document.querySelector('.sig-photo--hero');
  if (portrait && !motion.matches && pointer.matches) {
    let ticking = false;
    const update = () => {
      const y = Math.min(window.scrollY, 600);
      portrait.style.setProperty('--hero-parallax', `${y * -0.06}px`);
      ticking = false;
    };
    addEventListener('scroll', () => { if (!ticking) { ticking = true; requestAnimationFrame(update); } }, { passive: true });
  }
})();
