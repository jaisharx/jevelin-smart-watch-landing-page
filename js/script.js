gsap.to('.layer-1', { y: '-100vh', delay: 0.2 });
gsap.to('.layer-2', { y: '-100vh', delay: 0.3 });
gsap.to('.layer-3', { y: '-100vh', delay: 0.4 });

gsap.to('.overlay', { y: '-100vh', delay: 0.8 });

gsap.fromTo(
    '.text',
    { x: '30rem', opacity: 0 },
    { x: '0', opacity: 1, ease: 'back.out(1.7)', delay: 1.2 }
);
gsap.fromTo(
    '.watch-wrapper',
    { x: '30rem', opacity: 0 },
    { x: '0', opacity: 1, ease: 'back.out(1.7)', delay: 1.4 }
);

gsap.fromTo(
    '.circle-small',
    { x: '-30rem', opacity: 0 },
    { x: '0', opacity: 1, ease: 'back.out(1.7)', delay: 0.8 }
);
gsap.fromTo(
    '.circle-large',
    { x: '30rem', opacity: 0 },
    { x: '0', opacity: 1, ease: 'back.out(1.7)', delay: 1.0 }
);
