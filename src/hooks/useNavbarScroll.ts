'use client';

import { useEffect, useRef, useState } from 'react';

type NavbarScrollState = {
  /** Past `threshold` — the navbar should swap to its solid/blurred background. */
  isScrolled: boolean;
  /** Scrolling down past `hideThreshold` — the navbar should slide out of view. */
  isHidden: boolean;
};

/**
 * Drives a "smart" navbar: solid background once the user has scrolled a
 * little, and auto-hidden while scrolling down past a larger threshold
 * (reappearing as soon as they scroll back up or return near the top).
 * Both flags come from a single scroll listener to avoid duplicate work.
 */
export function useNavbarScroll(threshold = 24, hideThreshold = 160): NavbarScrollState {
  const [state, setState] = useState<NavbarScrollState>({ isScrolled: false, isHidden: false });
  const lastY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      const scrollingDown = y > lastY.current;
      lastY.current = y;

      setState({
        isScrolled: y > threshold,
        isHidden: scrollingDown && y > hideThreshold,
      });
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [threshold, hideThreshold]);

  return state;
}
