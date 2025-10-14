'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

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

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-white/80 backdrop-blur-md shadow-sm' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo - Left */}
          <div className="flex-shrink-0 w-1/4">
            <Link href="/" className="block">
              <Image 
                src="/logo.svg" 
                alt="VY Marine Logo" 
                width={150} 
                height={50} 
                className="h-10 w-auto"
                priority
              />
            </Link>
          </div>
          
          {/* Navigation Links - Center */}
          <div className="hidden md:flex items-center justify-center flex-1">
            <div className="flex items-center space-x-6 lg:space-x-8">
              <Link href="/" className="text-gray-900 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors whitespace-nowrap">
                Home
              </Link>
              <Link href="/services" className="text-gray-900 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors whitespace-nowrap">
                Services
              </Link>
              <Link href="/trading" className="text-gray-900 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors whitespace-nowrap">
                Trading
              </Link>
              <Link href="/contact" className="text-gray-900 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors whitespace-nowrap">
                Contact
              </Link>
            </div>
          </div>
          
          {/* CTA Button - Right */}
          <div className="flex-shrink-0 w-1/4 flex justify-end">
            <Link 
              href="/contact" 
              className="bg-blue-600 text-white px-5 py-2.5 rounded-md text-sm font-medium hover:bg-blue-700 transition-colors whitespace-nowrap"
            >
              Get a Quote
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}