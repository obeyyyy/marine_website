'use client';

import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import Link from 'next/link';
import { motion, AnimatePresence, type Variants } from 'framer-motion';
import { ChevronDown, ArrowUpRight } from 'lucide-react';
import { useOnClickOutside } from '@/hooks/useOnClickOutside';
import { useEscapeKey } from '@/hooks/useEscapeKey';
import { useMounted } from '@/hooks/useMounted';
import { NAV_LINK_CLASS, SERVICE_LINKS } from '@/lib/navigation';

type NavServicesMenuProps = {
  active: boolean;
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
};

const HOVER_CLOSE_DELAY = 150;

const panelVariants: Variants = {
  hidden: { opacity: 0, y: -8 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1], staggerChildren: 0.045, delayChildren: 0.05 },
  },
  exit: { opacity: 0, y: -8, transition: { duration: 0.2 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0 },
};

/**
 * Desktop "Services" nav item: a real link to /services that also reveals a
 * full-width mega menu on hover/focus. The panel is rendered through a
 * portal into `document.body` so it isn't clipped by the navbar and isn't
 * affected if the navbar itself is translated off-screen by the
 * hide-on-scroll behavior.
 */
export function NavServicesMenu({ active, isOpen, onOpenChange }: NavServicesMenuProps) {
  const triggerRef = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const mounted = useMounted();

  useOnClickOutside([triggerRef, panelRef], () => onOpenChange(false), isOpen);
  useEscapeKey(() => onOpenChange(false), isOpen);

  useEffect(() => () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
  }, []);

  const openNow = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    onOpenChange(true);
  };

  const closeSoon = () => {
    closeTimer.current = setTimeout(() => onOpenChange(false), HOVER_CLOSE_DELAY);
  };

  const highlighted = active || isOpen;

  return (
    <div ref={triggerRef} onMouseEnter={openNow} onMouseLeave={closeSoon}>
      {/*
        A real link to /services, not just a dropdown toggle — hovering (or
        focusing via keyboard) reveals the mega menu for quick browsing, but
        clicking goes straight to the overview page like any other nav item.
      */}
      <Link
        href="/services"
        className={`inline-flex items-center gap-1 ${NAV_LINK_CLASS} ${
          highlighted ? 'text-white' : 'text-white/70 hover:text-white'
        }`}
        aria-haspopup="true"
        aria-expanded={isOpen}
        onFocus={openNow}
        onBlur={closeSoon}
        onClick={() => onOpenChange(false)}
      >
        {highlighted && (
          <motion.span
            layoutId="nav-active-pill"
            className="absolute inset-0 rounded-full bg-white/10 ring-1 ring-accent-400/30"
            transition={{ type: 'spring', stiffness: 400, damping: 32 }}
          />
        )}
        <span className="relative z-10 flex items-center gap-1">
          Services
          <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
        </span>
      </Link>

      {mounted &&
        createPortal(
          <AnimatePresence>
            {isOpen && (
              <motion.div
                ref={panelRef}
                variants={panelVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                onMouseEnter={openNow}
                onMouseLeave={closeSoon}
                className="fixed left-0 top-20 z-40 w-full border-t border-white/10 bg-navy-950/98 backdrop-blur-2xl shadow-[0_40px_80px_-20px_rgba(4,13,26,0.75)]"
              >
                <div className="absolute inset-0 bg-grid-dark opacity-30 pointer-events-none" />
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 grid grid-cols-1 lg:grid-cols-[0.9fr_1.5fr] gap-14">
                  <motion.div variants={itemVariants}>
                    <p className="text-xs font-medium tracking-[0.25em] uppercase text-accent-400 mb-4">
                      What we do
                    </p>
                    <h3 className="font-display text-2xl md:text-3xl font-bold text-white leading-snug mb-4">
                      Five pillars of maritime expertise
                    </h3>
                    <p className="text-sm text-white/55 leading-relaxed mb-9 max-w-sm">
                      Technical solutions built around safer, greener and more efficient vessel
                      operations — delivered by engineers who understand life at sea.
                    </p>
                    <div className="grid grid-cols-2 gap-6 mb-9 max-w-xs">
                      <div>
                        <div className="font-display text-3xl font-bold text-white">97%</div>
                        <div className="text-[11px] uppercase tracking-wider text-white/40 mt-1">
                          On-time delivery
                        </div>
                      </div>
                      <div>
                        <div className="font-display text-3xl font-bold text-white">4</div>
                        <div className="text-[11px] uppercase tracking-wider text-white/40 mt-1">
                          Countries served
                        </div>
                      </div>
                    </div>
                    <Link
                      href="/services"
                      onClick={() => onOpenChange(false)}
                      className="group inline-flex items-center gap-2 text-sm font-semibold text-accent-400 hover:text-cyan-300 transition-colors"
                    >
                      View all services
                      <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </Link>
                  </motion.div>

                  <div className="grid sm:grid-cols-2 gap-px bg-white/10 rounded-2xl overflow-hidden border border-white/10">
                    {SERVICE_LINKS.map((service, index) => (
                      <motion.div key={service.href} variants={itemVariants}>
                        <Link
                          href={service.href}
                          onClick={() => onOpenChange(false)}
                          className="group relative flex flex-col h-full p-6 bg-navy-950/70 hover:bg-white/[0.04] transition-colors duration-300"
                        >
                          <span className="absolute top-4 right-5 font-display text-3xl font-bold text-white/5 group-hover:text-accent-400/15 transition-colors duration-300">
                            {String(index + 1).padStart(2, '0')}
                          </span>
                          <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-accent-400 mb-4 group-hover:bg-accent-400/15 transition-colors duration-300">
                            <service.icon className="h-[18px] w-[18px]" />
                          </div>
                          <h4 className="text-sm font-semibold text-white mb-1.5 group-hover:text-accent-400 transition-colors duration-300">
                            {service.label}
                          </h4>
                          <p className="text-xs text-white/45 leading-relaxed pr-6">{service.description}</p>
                        </Link>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>,
          document.body
        )}
    </div>
  );
}
