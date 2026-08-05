'use client';

import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import CtaButton from './CtaButton';

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center px-6">
      <div className="relative z-10 flex flex-col items-center text-center max-w-5xl">
        {/* Simple, non-AI badge */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-xs font-medium tracking-[0.2em] uppercase text-accent-400 mb-8"
        >
          VY Marine
        </motion.p>

        {/* Clean, non-gradient headline */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="font-display text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold text-white leading-[1.05] mb-8"
        >
          Engineering confidence
          <br className="hidden sm:block" />
          across every ocean
        </motion.h1>

        {/* Clean subhead */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-base sm:text-lg lg:text-xl text-white/60 max-w-2xl mb-10"
        >
          Decarbonization, dry-docking supervision, and spares trading —
          for safer, greener, and more efficient fleets.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <CtaButton href="/services" label="Explore Our Services" />
          <CtaButton href="/contact" label="Contact Us" variant="ghost" />
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] text-white/40">Scroll</span>
        <ChevronDown className="h-5 w-5 text-white/60 animate-bounce" />
      </motion.div>
    </section>
  );
}
