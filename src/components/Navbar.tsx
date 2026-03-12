 'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import CtaButton from './CtaButton';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const servicesMenuRef = useRef<HTMLDivElement | null>(null);

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

  useEffect(() => {
    if (!isServicesOpen) return;

    const handleClickOutside = (event: MouseEvent) => {
      if (
        servicesMenuRef.current &&
        !servicesMenuRef.current.contains(event.target as Node)
      ) {
        setIsServicesOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isServicesOpen]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const servicesLinks = [
    { href: "/services#green-solutions", label: "Green Solutions" },
    { href: "/services#optimization-energy-efficiency", label: "Optimization & Energy Efficiency" },
    { href: "/services#dry-docking-solutions", label: "Dry Docking Solutions" },
    { href: "/services#ship-repairs-supplies", label: "Ship Repairs & Supplies" },
    { href: "/services#technical-consultancy", label: "Technical Consultancy" },
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
                src="/images/new-logo.png" 
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
              {/* Home */}
              <Link 
                href="/" 
                className="text-gray-900 hover:text-blue-600 px-3 py-2 text-md font-medium transition-colors whitespace-nowrap"
              >
                Home
              </Link>

              {/* Services dropdown */}
              <div className="relative" ref={servicesMenuRef}>
                <button
                  type="button"
                  className="inline-flex items-center text-gray-900 hover:text-blue-600 px-3 py-2 text-md font-medium transition-colors whitespace-nowrap focus:outline-none"
                  aria-haspopup="true"
                  aria-expanded={isServicesOpen}
                  onClick={() => setIsServicesOpen((prev) => !prev)}
                >
                  <span>Services</span>
                  <svg
                    className={`ml-2 h-4 w-4 transform transition-transform duration-200 ${isServicesOpen ? 'rotate-180' : 'rotate-0'}`}
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
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                <div
                  className={`absolute left-0 mt-2 w-64 rounded-md shadow-lg bg-white ring-1 ring-black/5 transition-all duration-200 origin-top ${
                    isServicesOpen
                      ? 'opacity-100 translate-y-0 pointer-events-auto'
                      : 'opacity-0 -translate-y-1 pointer-events-none'
                  }`}
                >
                  <div className="py-2">
                    {servicesLinks.map((service) => (
                      <Link
                        key={service.href}
                        href={service.href}
                        className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100 hover:text-blue-600"
                        onClick={() => setIsServicesOpen(false)}
                      >
                        {service.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              {/* Contact */}
              <Link 
                href="/contact" 
                className="text-gray-900 hover:text-blue-600 px-3 py-2 text-md font-medium transition-colors whitespace-nowrap"
              >
                Contact
              </Link>
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
          {/* Home */}
          <Link
            href="/"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-gray-100"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>

          {/* Services accordion */}
          <button
            type="button"
            className="w-full flex items-center justify-between px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-gray-100 focus:outline-none"
            onClick={() => setIsServicesOpen((prev) => !prev)}
            aria-haspopup="true"
            aria-expanded={isServicesOpen}
          >
            <span>Services</span>
            <svg
              className={`h-5 w-5 transform transition-transform duration-200 ${isServicesOpen ? 'rotate-180' : 'rotate-0'}`}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
          <div
            className={`pl-4 pr-2 space-y-1 transition-all duration-200 ${
              isServicesOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
            }`}
          >
            {servicesLinks.map((service) => (
              <Link
                key={service.href}
                href={service.href}
                className="block px-3 py-1.5 rounded-md text-sm font-medium text-gray-800 hover:bg-gray-100"
                onClick={() => {
                  setIsOpen(false);
                  setIsServicesOpen(false);
                }}
              >
                {service.label}
              </Link>
            ))}
          </div>

          {/* Contact */}
          <Link
            href="/contact"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-gray-100"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>

          <div className="px-3 py-2">
            <CtaButton/>
          </div>
        </div>
      </div>
    </nav>
  );
}