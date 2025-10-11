'use client';

import Link from 'next/link';
import Image from 'next/image';
import { FaLinkedin, FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa';

export default function Footer() {
  const navLinks = [
    { name: 'About Us', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Projects', href: '/projects' },
  ];

  const socialLinks = [
    { icon: <FaLinkedin className="w-5 h-5" />, href: '#' },
    { icon: <FaTwitter className="w-5 h-5" />, href: '#' },
    { icon: <FaFacebook className="w-5 h-5" />, href: '#' },
    { icon: <FaInstagram className="w-5 h-5" />, href: '#' }
  ];

  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo Section */}
          <div className="flex items-center md:justify-start justify-center">
            <Link href="/" className="flex items-center">
              <Image
                src="/logo.svg" // Update with your logo path
                alt="Company Logo"
                width={120}
                height={40}
                className="h-10 w-auto"
              />
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="flex justify-center">
            <div className="grid grid-cols-3 gap-x-8 gap-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Social Media Links */}
          <div className="flex items-center justify-center md:justify-end space-x-6">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                className="text-gray-400 hover:text-blue-600 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="sr-only">Social media link</span>
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-center text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} VY's Marine Services Company. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}