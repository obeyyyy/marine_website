'use client';

import { createPortal } from 'react-dom';
import Link from 'next/link';
import { motion, AnimatePresence, type Variants } from 'framer-motion';
import { useEscapeKey } from '@/hooks/useEscapeKey';
import { useLockBodyScroll } from '@/hooks/useLockBodyScroll';
import { useMounted } from '@/hooks/useMounted';
import { SERVICE_LINKS } from '@/lib/navigation';
import CtaButton from './CtaButton';

type NavMobileMenuProps = {
  isOpen: boolean;
  onClose: () => void;
};

const PRIMARY_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/trading', label: 'Trading' },
  { href: '/contact', label: 'Contact' },
];

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06, delayChildren: 0.15 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
};

/**
 * Full-screen mobile nav takeover, rendered through a portal so it sits
 * above everything regardless of stacking context and isn't affected by the
 * navbar's own hide-on-scroll transform.
 */
export function NavMobileMenu({ isOpen, onClose }: NavMobileMenuProps) {
  const mounted = useMounted();

  useEscapeKey(onClose, isOpen);
  useLockBodyScroll(isOpen);

  if (!mounted) return null;

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-40 md:hidden bg-navy-950/98 backdrop-blur-2xl overflow-y-auto"
        >
          <div className="absolute inset-0 bg-grid-dark opacity-30 pointer-events-none" />

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="relative min-h-screen flex flex-col justify-center px-8 py-28"
          >
            <div className="space-y-1">
              {PRIMARY_LINKS.slice(0, 1).map((link) => (
                <motion.div key={link.href} variants={itemVariants}>
                  <Link
                    href={link.href}
                    onClick={onClose}
                    className="block py-2 font-display text-4xl font-bold text-white/90 hover:text-accent-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div variants={itemVariants}>
                <Link
                  href="/services"
                  onClick={onClose}
                  className="block py-2 font-display text-4xl font-bold text-white/90 hover:text-accent-400 transition-colors"
                >
                  Services
                </Link>
              </motion.div>
              {PRIMARY_LINKS.slice(1).map((link) => (
                <motion.div key={link.href} variants={itemVariants}>
                  <Link
                    href={link.href}
                    onClick={onClose}
                    className="block py-2 font-display text-4xl font-bold text-white/90 hover:text-accent-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </div>

            <motion.div variants={itemVariants} className="mt-12 pt-10 border-t border-white/10">
              <p className="text-xs font-medium uppercase tracking-[0.25em] text-accent-400 mb-5">
                Our services
              </p>
              <div className="grid grid-cols-2 gap-x-4 gap-y-4">
                {SERVICE_LINKS.map((service) => (
                  <Link
                    key={service.href}
                    href={service.href}
                    onClick={onClose}
                    className="flex items-center gap-2.5 text-sm text-white/65 hover:text-white transition-colors"
                  >
                    <service.icon className="h-4 w-4 text-accent-400 shrink-0" />
                    {service.label}
                  </Link>
                ))}
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="mt-12">
              <CtaButton className="w-full" />
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
}
