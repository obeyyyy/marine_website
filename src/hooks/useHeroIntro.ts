'use client';

import { useEffect, type RefObject } from 'react';
import gsap from 'gsap';

type HeroIntroRefs = {
  headline: RefObject<HTMLElement | null>;
  subhead: RefObject<HTMLElement | null>;
  ctaGroup: RefObject<HTMLElement | null>;
  scrollHint: RefObject<HTMLElement | null>;
};

/**
 * Plays the Hero section's one-time entrance sequence (headline, subhead,
 * CTAs, scroll hint) followed by a looping float on the scroll hint.
 * Built as a single timeline so the whole sequence can be reversed/killed
 * as one unit on unmount.
 */
export function useHeroIntro({ headline, subhead, ctaGroup, scrollHint }: HeroIntroRefs) {
  useEffect(() => {
    if (!headline.current || !subhead.current || !ctaGroup.current || !scrollHint.current) return;

    const timeline = gsap.timeline({ defaults: { ease: 'power3.out' } });

    timeline
      .fromTo(
        headline.current,
        { y: 60, opacity: 0, rotationX: 15 },
        { y: 0, opacity: 1, rotationX: 0, duration: 1 },
        0.2
      )
      .fromTo(subhead.current, { y: 40, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8 }, 0.5)
      .fromTo(
        ctaGroup.current.children,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, stagger: 0.15 },
        0.8
      )
      .fromTo(scrollHint.current, { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6 }, 1.4)
      .to(scrollHint.current, { y: 8, duration: 1.5, repeat: -1, yoyo: true, ease: 'power1.inOut' }, 1.8);

    return () => {
      timeline.kill();
    };
    // Refs are stable across renders; this effect is intended to run once.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
}
