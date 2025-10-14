'use client';

import Link from 'next/link';
import Image from 'next/image';
import { FaLinkedin, FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa';

export default function Footer() {
  const navLinks = [ 
    { name: 'Services', href: '/services' ,subtitles: ['Marine Projects Engineering', 'E-commerce Solutions', 'Compliance & Documentation', 'Equipment Trading' , 'Service Brokerage' ]},
    { name: 'Trading', href: '/trading' ,subtitles: ['Marine Equipments' , 'Spare Parts' , 'Industrial Supplies' , 'Machinery & Components' ]},
    { name: 'Contact Us', href: '/contact' ,subtitles: ['Dubai | UK | China', 'Dummy1@vymarine.com', '+971 123456789']},
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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Logo Section */}
          <div className="lg:col-span-3 flex justify-center lg:justify-start">
            <Link href="/" className="flex">
              <Image
                src="/logo.svg"
                alt="Company Logo"
                width={150}
                height={50}
                className="h-12 w-auto"
              />
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="lg:col-span-6">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              {navLinks.map((link) => (
                <div key={link.name} className="min-w-[200px]">
                  <Link href={link.href}>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4 hover:text-blue-600 transition-colors">
                      {link.name}
                    </h3>
                  </Link>
                  <ul className="space-y-2">
                    {link.subtitles.map((subtitle, index) => (
                      <li key={index} className="text-gray-600 hover:text-blue-600 transition-colors">
                        <Link href={link.href} className="block py-1 text-sm">
                          {subtitle}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Social Media Links */}
          <div className="lg:col-span-3 flex items-center justify-center lg:justify-end space-x-6">
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