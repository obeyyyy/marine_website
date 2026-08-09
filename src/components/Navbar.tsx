'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion, useScroll } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useNavbarScroll } from '@/hooks/useNavbarScroll';
import { isServicesPath } from '@/lib/navigation';
import CtaButton from './CtaButton';
import { NavLink } from './NavLink';
import { NavServicesMenu } from './NavServicesMenu';
import { NavMobileMenu } from './NavMobileMenu';

export default function Navbar() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const { isScrolled, isHidden } = useNavbarScroll();
  const { scrollYProgress } = useScroll();
  const pathname = usePathname();

  useEffect(() => {
    setIsMobileOpen(false);
    setIsServicesOpen(false);
  }, [pathname]);

  const showSolidBackground = isScrolled || isServicesOpen || isMobileOpen;
  const shouldHide = isHidden && !isServicesOpen && !isMobileOpen;

  return (
    <motion.nav
      animate={{ y: shouldHide ? '-100%' : '0%' }}
      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 w-full z-50 transition-colors duration-500 ${
        showSolidBackground
          ? 'bg-navy-950/90 backdrop-blur-xl border-b border-white/10 shadow-[0_8px_32px_rgba(4,13,26,0.45)]'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex-shrink-0 block">
            <motion.span
              className="inline-block"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              transition={{ type: 'spring', stiffness: 400, damping: 20 }}
            >
              <Image
                src="/images/new-logo.png"
                alt="VY Marine"
                width={150}
                height={50}
                className="h-9 w-auto"
                priority
              />
            </motion.span>
          </Link>

          <div className="hidden md:flex items-center justify-center flex-1">
            <div className="flex items-center gap-1 lg:gap-2">
              <NavLink href="/" active={pathname === '/'}>
                Home
              </NavLink>
              <NavServicesMenu
                active={isServicesPath(pathname)}
                isOpen={isServicesOpen}
                onOpenChange={setIsServicesOpen}
              />
              <NavLink href="/trading" active={pathname === '/trading'}>
                Trading
              </NavLink>
              <NavLink href="/contact" active={pathname === '/contact'}>
                Contact
              </NavLink>
            </div>
          </div>

          <div className="hidden md:flex items-center ml-6">
            <CtaButton />
          </div>

          <button
            onClick={() => setIsMobileOpen((prev) => !prev)}
            className="md:hidden inline-flex items-center justify-center p-2 rounded-lg text-white hover:text-accent-400 hover:bg-white/5 transition-colors"
            aria-expanded={isMobileOpen}
          >
            <span className="sr-only">Toggle main menu</span>
            {isMobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Voyage progress — a thin line that fills in as the visitor scrolls the page */}
      <motion.div
        style={{ scaleX: scrollYProgress }}
        className="absolute bottom-0 left-0 h-[2px] w-full origin-left bg-accent-400"
      />

      <NavMobileMenu isOpen={isMobileOpen} onClose={() => setIsMobileOpen(false)} />
    </motion.nav>
  );
}
