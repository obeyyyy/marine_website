'use client';

import Link from 'next/link';
import Image from 'next/image';
import { FaLinkedin, FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa';
import { MapPin, Phone, Mail, Anchor } from 'lucide-react';

const serviceLinks = [
  { label: 'Green Solutions', href: '/green-solutions' },
  { label: 'Optimization & Energy Efficiency', href: '/optimization-energy-efficiency' },
  { label: 'Dry Docking Solutions', href: '/dry-docking-solutions' },
  { label: 'Ship Repairs & Supplies', href: '/ship-repairs-supplies' },
  { label: 'Technical Consultancy', href: '/technical-consultancy' },
];

const companyLinks = [
  { label: 'Home', href: '/' },
  { label: 'All Services', href: '/services' },
  { label: 'Trading', href: '/trading' },
  { label: 'Contact', href: '/contact' },
];

const socialLinks = [
  { icon: <FaLinkedin className="w-4 h-4" />, href: '#', label: 'LinkedIn' },
  { icon: <FaTwitter className="w-4 h-4" />, href: '#', label: 'Twitter' },
  { icon: <FaFacebook className="w-4 h-4" />, href: '#', label: 'Facebook' },
  { icon: <FaInstagram className="w-4 h-4" />, href: '#', label: 'Instagram' },
];

export default function Footer() {
  return (
    <footer className="relative bg-navy-950 text-white overflow-hidden">
      {/* Accent top border */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-accent-400/70 to-transparent" />

      {/* Subtle background texture */}
      <div className="absolute inset-0 bg-grid-dark pointer-events-none" />
      <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-accent-500/10 blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-4">
            <Link href="/" className="inline-block mb-6">
              <Image
                src="/images/new-logo.png"
                alt="VY Marine"
                width={170}
                height={60}
                className="h-10 w-auto"
              />
            </Link>
            <p className="text-sm leading-relaxed text-white/60 max-w-sm mb-6">
              An engineering company providing technical solutions for the maritime industry —
              focused on safer, greener and more efficient vessel operations across the globe.
            </p>
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-9 h-9 rounded-full border border-white/15 flex items-center justify-center text-white/60 hover:text-navy-950 hover:bg-accent-400 hover:border-accent-400 transition-all duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="sr-only">{social.label}</span>
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div className="lg:col-span-3">
            <h3 className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-accent-400 mb-5">
              Services
            </h3>
            <ul className="space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/65 hover:text-white transition-colors inline-flex items-center gap-2 group"
                  >
                    <span className="h-px w-0 bg-accent-400 transition-all duration-300 group-hover:w-3" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="lg:col-span-2">
            <h3 className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-accent-400 mb-5">
              Company
            </h3>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/65 hover:text-white transition-colors inline-flex items-center gap-2 group"
                  >
                    <span className="h-px w-0 bg-accent-400 transition-all duration-300 group-hover:w-3" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-3">
            <h3 className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-accent-400 mb-5">
              Contact
            </h3>
            <ul className="space-y-4 text-sm text-white/65">
              <li className="flex items-start gap-3">
                <MapPin className="h-4 w-4 mt-0.5 text-accent-400 shrink-0" />
                <span>Dubai · UK · China · India</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="h-4 w-4 mt-0.5 text-accent-400 shrink-0" />
                <div className="space-y-1">
                  <a href="tel:+971123456789" className="block hover:text-white transition-colors">
                    +971 123 456 789
                  </a>
                  <a href="tel:+911234567890" className="block hover:text-white transition-colors">
                    +91 123 456 7890
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="h-4 w-4 mt-0.5 text-accent-400 shrink-0" />
                <a href="mailto:info@vymarine.com" className="hover:text-white transition-colors">
                  info@vymarine.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 pt-7 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/45">
            &copy; {new Date().getFullYear()} VY Marine Services. All rights reserved.
          </p>
          <p className="text-xs text-white/45 inline-flex items-center gap-2">
            <Anchor className="h-3.5 w-3.5 text-accent-400/70" />
            Safer. Greener. More efficient.
          </p>
        </div>
      </div>
    </footer>
  );
}
