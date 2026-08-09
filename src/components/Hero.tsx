'use client';

import { useRef } from 'react';
import { ChevronDown } from 'lucide-react';
import { useHeroIntro } from '@/hooks/useHeroIntro';
import CtaButton from './CtaButton';

export default function Hero() {
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subheadRef = useRef<HTMLParagraphElement>(null);
  const ctaGroupRef = useRef<HTMLDivElement>(null);
  const scrollHintRef = useRef<HTMLDivElement>(null);

  useHeroIntro({
    headline: headlineRef,
    subhead: subheadRef,
    ctaGroup: ctaGroupRef,
    scrollHint: scrollHintRef,
  });

  return (
    <section className="relative flex min-h-screen items-center justify-center px-6">
      <div className="relative z-10 flex flex-col items-center text-center max-w-5xl">
        <h1
          ref={headlineRef}
          className="font-display text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold text-white leading-[1.05] mb-8"
        >
          Engineering confidence
          <br className="hidden sm:block" />
          across every ocean
        </h1>

        <p
          ref={subheadRef}
          className="text-base sm:text-lg lg:text-xl text-white/60 max-w-2xl mb-12"
        >
          Decarbonization, dry-docking supervision, and spares trading
          for safer, greener, and more efficient fleets.
        </p>

        <div ref={ctaGroupRef} className="flex flex-col sm:flex-row gap-6">
          <CtaButton href="/services" label="Explore Our Services" />
          <CtaButton href="/contact" label="Contact Us" variant="ghost" />
        </div>
      </div>

      <div
        ref={scrollHintRef}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 z-10"
      >
        <span className="text-[11px] uppercase tracking-[0.25em] text-white/30 font-medium">Scroll</span>
        <ChevronDown className="h-5 w-5 text-white/50" />
      </div>
    </section>
  );
}
