'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import CtaButton from './CtaButton';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/trading", label: "Trading" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/10 backdrop-blur-md shadow-sm' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo - Left */}
          <div className="flex-shrink-0">
            <Link href="/" className="block">
              <Image 
                src="/images/logo.png" 
                alt="VY Marine Logo" 
                width={150} 
                height={50} 
                className="h-10 w-auto"
                priority
              />
            </Link>
          </div>
          {/* Desktop Navigation Links - Center */}
          <div className="hidden md:flex items-center justify-center flex-1">
            <div className="flex items-center space-x-6 lg:space-x-8">
              {navLinks.map((link) => (
                <Link 
                  key={link.href}
                  href={link.href} 
                  className="text-gray-900 hover:text-blue-600 px-3 py-2 text-md font-medium transition-colors whitespace-nowrap"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* CTA Button - Right */}
          <div className="hidden md:flex items-center ml-6">
            <CtaButton/>
        
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-900 hover:text-blue-600 focus:outline-none"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {/* Hamburger icon */}
              <svg
                className={`h-6 w-6 ${isOpen ? 'hidden' : 'block'}`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              {/* Close icon */}
              <svg
                className={`h-6 w-6 ${isOpen ? 'block' : 'hidden'}`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-96' : 'max-h-0 overflow-hidden'
        }`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-gray-100"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <div className="px-3 py-2">
            <CtaButton/>
          </div>
        </div>
      </div>
    </nav>
  );
}