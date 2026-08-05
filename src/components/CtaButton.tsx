'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

type CtaButtonProps = {
  href?: string;
  label?: string;
  variant?: 'primary' | 'ghost' | 'light';
  className?: string;
};

export default function CtaButton({
  href = '/contact',
  label = 'Get a Quote',
  variant = 'primary',
  className = '',
}: CtaButtonProps) {
  const base =
    'group inline-flex items-center justify-center gap-2 rounded-full font-semibold text-sm tracking-wide px-6 py-3 transition-all duration-300';

  const variants: Record<string, string> = {
    primary:
      'bg-accent-400 text-navy-950 hover:bg-cyan-300 hover:shadow-[0_0_28px_rgba(34,211,238,0.45)]',
    ghost:
      'border border-white/25 text-white hover:border-accent-400 hover:text-accent-400 hover:bg-white/5',
    light:
      'bg-navy-900 text-white hover:bg-navy-800 hover:shadow-[0_12px_30px_rgba(7,26,47,0.35)]',
  };

  return (
    <Link href={href} className={`${base} ${variants[variant]} ${className}`}>
      {label}
      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
    </Link>
  );
}
