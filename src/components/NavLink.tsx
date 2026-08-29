'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import type { ReactNode } from 'react';
import { NAV_LINK_CLASS } from '@/lib/navigation';

type NavLinkProps = {
  href: string;
  active: boolean;
  children: ReactNode;
};

/**
 * A top-level nav link. Active links render a `layoutId`-shared pill behind
 * their label — because every active link uses the same `layoutId`, Framer
 * Motion animates it smoothly from wherever it previously was to its new
 * position whenever the route changes, instead of it just popping in place.
 */
export function NavLink({ href, active, children }: NavLinkProps) {
  return (
    <Link href={href} className={`${NAV_LINK_CLASS} ${active ? 'text-white' : 'text-white/70 hover:text-white'}`}>
      {active && (
        <motion.span
          layoutId="nav-active-pill"
          className="absolute inset-0 rounded-full bg-white/10 ring-1 ring-accent-400/30"
          transition={{ type: 'spring', stiffness: 400, damping: 32 }}
        />
      )}
      <span className="relative z-10">{children}</span>
    </Link>
  );
}
