'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';

/**
 * Drives the CtaButton's hover interactions: a magnetic pull toward the
 * cursor, an icon nudge, and a diagonal light sheen. All logic lives here so
 * the component itself stays declarative.
 *
 * Bails out entirely under `prefers-reduced-motion`.
 */
export function useMagneticButton() {
  const buttonRef = useRef<HTMLAnchorElement>(null);
  const iconRef = useRef<SVGSVGElement>(null);
  const sheenRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const button = buttonRef.current;
    const icon = iconRef.current;
    const sheen = sheenRef.current;
    if (!button || !icon || !sheen) return;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const moveX = gsap.quickTo(button, 'x', { duration: 0.35, ease: 'power3.out' });
    const moveY = gsap.quickTo(button, 'y', { duration: 0.35, ease: 'power3.out' });

    const handleMove = (event: MouseEvent) => {
      const bounds = button.getBoundingClientRect();
      moveX((event.clientX - bounds.left - bounds.width / 2) * 0.12);
      moveY((event.clientY - bounds.top - bounds.height / 2) * 0.12);
    };

    const handleEnter = () => {
      gsap.to(icon, { x: 5, rotation: -45, duration: 0.45, ease: 'back.out(2)' });
      gsap.to(sheen, { xPercent: 100, duration: 0.65, ease: 'power2.out' });
    };

    const handleLeave = () => {
      gsap.to(button, { x: 0, y: 0, duration: 0.55, ease: 'elastic.out(1, 0.35)' });
      gsap.to(icon, { x: 0, rotation: 0, duration: 0.35, ease: 'power2.out' });
      gsap.to(sheen, { xPercent: -100, duration: 0.45, ease: 'power2.inOut' });
    };

    button.addEventListener('mousemove', handleMove);
    button.addEventListener('mouseenter', handleEnter);
    button.addEventListener('mouseleave', handleLeave);

    return () => {
      button.removeEventListener('mousemove', handleMove);
      button.removeEventListener('mouseenter', handleEnter);
      button.removeEventListener('mouseleave', handleLeave);
      gsap.killTweensOf([button, icon, sheen]);
    };
  }, []);

  return { buttonRef, iconRef, sheenRef };
}
