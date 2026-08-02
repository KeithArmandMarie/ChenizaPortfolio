'use client';

import { useEffect, useRef } from 'react';

export default function Cursor() {
  const followerRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!window.matchMedia('(pointer: fine)').matches) return;

    const follower = followerRef.current;
    const dot = dotRef.current;
    if (!follower || !dot) return;

    let mouseX = 0, mouseY = 0;
    let followerX = 0, followerY = 0;

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      dot.style.left = `${mouseX}px`;
      dot.style.top = `${mouseY}px`;
    };
    window.addEventListener('mousemove', onMove);

    let raf: number;
    const animate = () => {
      followerX += (mouseX - followerX) * 0.15;
      followerY += (mouseY - followerY) * 0.15;
      follower.style.left = `${followerX}px`;
      follower.style.top = `${followerY}px`;
      raf = requestAnimationFrame(animate);
    };
    raf = requestAnimationFrame(animate);

    const els = document.querySelectorAll('a, button, .estimator__option-card, .estimator-option, article');
    const enter = () => {
      follower.style.transform = 'translate(-50%, -50%) scale(1.6)';
      follower.style.borderColor = '#FFF2C2';
      follower.style.backgroundColor = 'rgba(212, 175, 55, 0.15)';
    };
    const leave = () => {
      follower.style.transform = 'translate(-50%, -50%) scale(1)';
      follower.style.borderColor = '#D4AF37';
      follower.style.backgroundColor = 'transparent';
    };
    els.forEach(el => {
      el.addEventListener('mouseenter', enter);
      el.addEventListener('mouseleave', leave);
    });

    return () => {
      window.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(raf);
      els.forEach(el => {
        el.removeEventListener('mouseenter', enter);
        el.removeEventListener('mouseleave', leave);
      });
    };
  }, []);

  return (
    <>
      <div ref={followerRef} className="cursor-follower" />
      <div ref={dotRef} className="cursor-dot" />
    </>
  );
}
