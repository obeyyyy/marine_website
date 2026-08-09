'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { useMagneticButton } from '@/hooks/useMagneticButton';

type CtaButtonProps = {
  href?: string;
  label?: string;
  variant?: 'primary' | 'ghost' | 'light';
  icon?: LucideIcon;
  className?: string;
};

const VARIANT_STYLES: Record<NonNullable<CtaButtonProps['variant']>, string> = {
  primary: 'bg-accent-400 text-navy-950 hover:bg-cyan-300',
  ghost: 'border border-white/20 text-white hover:border-accent-400/70 hover:bg-white/[0.06]',
  light: 'border border-navy-900/10 bg-white text-navy-900 hover:bg-mist-50',
};

// Angular "cut corner" clip path shared by every CTA so the shape reads as
// an intentional part of the brand rather than a generic rounded pill.
const CLIP_CORNER = 10;
const CLIP_PATH = `polygon(${CLIP_CORNER}px 0, 100% 0, 100% calc(100% - ${CLIP_CORNER}px), calc(100% - ${CLIP_CORNER}px) 100%, 0 100%, 0 ${CLIP_CORNER}px)`;

export default function CtaButton({
  href = '/contact',
  label = 'Get a Quote',
  variant = 'primary',
  icon: Icon = ArrowRight,
  className = '',
}: CtaButtonProps) {
  const { buttonRef, iconRef, sheenRef } = useMagneticButton();

  return (
    <Link
      ref={buttonRef}
      href={href}
      style={{ clipPath: CLIP_PATH }}
      className={`group relative inline-flex min-h-12 items-center justify-center gap-3 overflow-hidden px-7 py-3.5 text-sm font-semibold tracking-wide transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-400 focus-visible:ring-offset-2 focus-visible:ring-offset-navy-950 ${VARIANT_STYLES[variant]} ${className}`}
    >
      <span
        ref={sheenRef}
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 -left-1/2 w-1/2 -translate-x-full skew-x-[-20deg] bg-white/30"
      />
      <span className="relative z-10">{label}</span>
      <Icon ref={iconRef} aria-hidden="true" className="relative z-10 h-4 w-4" />
    </Link>
  );
}
