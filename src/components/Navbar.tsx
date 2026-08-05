'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { ChevronDown, Menu, X } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import CtaButton from './CtaButton';

const servicesLinks = [
  { href: '/green-solutions', label: 'Green Solutions' },
  { href: '/optimization-energy-efficiency', label: 'Optimization & Energy Efficiency' },
  { href: '/dry-docking-solutions', label: 'Dry Docking Solutions' },
  { href: '/ship-repairs-supplies', label: 'Ship Repairs & Supplies' },
  { href: '/technical-consultancy', label: 'Technical Consultancy' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const servicesMenuRef = useRef<HTMLDivElement | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!isServicesOpen) return;
    const handleClickOutside = (event: MouseEvent) => {
      if (servicesMenuRef.current && !servicesMenuRef.current.contains(event.target as Node)) {
        setIsServicesOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isServicesOpen]);

  useEffect(() => {
    setIsOpen(false);
    setIsServicesOpen(false);
  }, [pathname]);

  const linkClass = (active: boolean) =>
    `relative px-3 py-2 text-sm font-medium tracking-wide transition-colors duration-300 ${
      active ? 'text-accent-400' : 'text-white/80 hover:text-white'
    } after:absolute after:left-3 after:right-3 after:-bottom-0.5 after:h-px after:origin-left after:scale-x-0 after:bg-accent-400 after:transition-transform after:duration-300 hover:after:scale-x-100`;

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-navy-950/85 backdrop-blur-xl border-b border-white/10 shadow-[0_8px_32px_rgba(4,13,26,0.45)]'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0 block">
            <Image
              src="/images/new-logo.png"
              alt="VY Marine"
              width={150}
              height={50}
              className="h-9 w-auto"
              priority
            />
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center justify-center flex-1">
            <div className="flex items-center gap-2 lg:gap-4">
              <Link href="/" className={linkClass(pathname === '/')}>
                Home
              </Link>

              {/* Services dropdown */}
              <div className="relative" ref={servicesMenuRef}>
                <button
                  type="button"
                  className={`inline-flex items-center gap-1 ${linkClass(
                    pathname === '/services' || servicesLinks.some((s) => s.href === pathname)
                  )}`}
                  aria-haspopup="true"
                  aria-expanded={isServicesOpen}
                  onClick={() => setIsServicesOpen((prev) => !prev)}
                >
                  Services
                  <ChevronDown
                    className={`h-4 w-4 transition-transform duration-300 ${
                      isServicesOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {isServicesOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.2 }}
                      className="absolute left-0 mt-3 w-80 rounded-2xl bg-navy-900/95 backdrop-blur-xl border border-white/10 shadow-[0_24px_60px_rgba(4,13,26,0.6)] overflow-hidden"
                    >
                      <Link
                        href="/services"
                        className="block px-5 py-3.5 text-sm font-semibold text-accent-400 hover:bg-white/5 border-b border-white/10"
                        onClick={() => setIsServicesOpen(false)}
                      >
                        All Services — Overview
                      </Link>
                      {servicesLinks.map((service) => (
                        <Link
                          key={service.href}
                          href={service.href}
                          className="block px-5 py-3 text-sm text-white/75 hover:text-white hover:bg-white/5 transition-colors"
                          onClick={() => setIsServicesOpen(false)}
                        >
                          {service.label}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Link href="/trading" className={linkClass(pathname === '/trading')}>
                Trading
              </Link>

              <Link href="/contact" className={linkClass(pathname === '/contact')}>
                Contact
              </Link>
            </div>
          </div>

          {/* CTA */}
          <div className="hidden md:flex items-center ml-6">
            <CtaButton />
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen((prev) => !prev)}
            className="md:hidden inline-flex items-center justify-center p-2 rounded-lg text-white hover:text-accent-400 hover:bg-white/5 transition-colors"
            aria-expanded={isOpen}
          >
            <span className="sr-only">Open main menu</span>
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden bg-navy-950/95 backdrop-blur-xl border-t border-white/10"
          >
            <div className="px-4 pt-4 pb-6 space-y-1">
              <Link
                href="/"
                className="block px-3 py-2.5 rounded-lg text-base font-medium text-white/85 hover:text-white hover:bg-white/5"
              >
                Home
              </Link>

              <button
                type="button"
                className="w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-base font-medium text-white/85 hover:text-white hover:bg-white/5"
                onClick={() => setIsServicesOpen((prev) => !prev)}
              >
                <span>Services</span>
                <ChevronDown
                  className={`h-5 w-5 transition-transform duration-300 ${
                    isServicesOpen ? 'rotate-180' : ''
                  }`}
                />
              </button>
              <AnimatePresence>
                {isServicesOpen && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="overflow-hidden pl-4 space-y-1"
                  >
                    <Link
                      href="/services"
                      className="block px-3 py-2 rounded-lg text-sm font-semibold text-accent-400 hover:bg-white/5"
                    >
                      All Services
                    </Link>
                    {servicesLinks.map((service) => (
                      <Link
                        key={service.href}
                        href={service.href}
                        className="block px-3 py-2 rounded-lg text-sm text-white/70 hover:text-white hover:bg-white/5"
                      >
                        {service.label}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>

              <Link
                href="/trading"
                className="block px-3 py-2.5 rounded-lg text-base font-medium text-white/85 hover:text-white hover:bg-white/5"
              >
                Trading
              </Link>
              <Link
                href="/contact"
                className="block px-3 py-2.5 rounded-lg text-base font-medium text-white/85 hover:text-white hover:bg-white/5"
              >
                Contact
              </Link>

              <div className="px-3 pt-3">
                <CtaButton className="w-full" />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
