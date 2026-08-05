'use client';

import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import QuoteForm from '@/components/QuoteForm';
import PageHero from '@/components/PageHero';

const offices = [
  { city: 'Dubai', role: 'Head office' },
  { city: 'United Kingdom', role: 'Europe desk' },
  { city: 'China', role: 'Procurement & QA' },
  { city: 'India', role: 'Crewing & supplies' },
];

const contacts = [
  { label: 'RFQ & general', value: 'info@vymarine.com' },
  { label: 'Technical', value: 'tech@vymarine.com' },
  { label: 'Supply', value: 'supply@vymarine.com' },
];

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-navy-950 w-full">
      <Navbar />

      <PageHero
        eyebrow="Get in touch"
        title="Let's talk about your next project"
        subtitle="Whether it's an urgent repair, a fleet-wide efficiency programme or a single RFQ — our team responds within 24 hours."
        breadcrumb="Contact"
        backgroundImage="/images/hero.png"
      />

      {/* Contact details */}
      <section className="relative py-24 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Locations */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.7 }}
            >
              <div className="flex items-center gap-3 mb-8">
                <MapPin className="h-5 w-5 text-accent-400" />
                <h2 className="font-display text-2xl font-bold text-white">Where we are</h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-white/10">
                {offices.map((office) => (
                  <div
                    key={office.city}
                    className="p-6 bg-navy-950/80"
                  >
                    <p className="text-lg font-medium text-white mb-1">{office.city}</p>
                    <p className="text-sm text-white/50">{office.role}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Contact methods */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              <div className="flex items-center gap-3 mb-8">
                <Phone className="h-5 w-5 text-accent-400" />
                <h2 className="font-display text-2xl font-bold text-white">How to reach us</h2>
              </div>

              <div className="space-y-6 mb-10">
                <div className="flex items-start gap-4 border-b border-white/10 pb-6">
                  <Mail className="h-5 w-5 text-accent-400 mt-0.5" />
                  <div>
                    <p className="text-sm text-white/50 mb-2">Email</p>
                    {contacts.map((c) => (
                      <a
                        key={c.label}
                        href={`mailto:${c.value}`}
                        className="block text-white hover:text-accent-400 transition-colors text-base"
                      >
                        {c.value} <span className="text-white/40">— {c.label}</span>
                      </a>
                    ))}
                  </div>
                </div>

                <div className="flex items-start gap-4 border-b border-white/10 pb-6">
                  <Phone className="h-5 w-5 text-accent-400 mt-0.5" />
                  <div>
                    <p className="text-sm text-white/50 mb-2">Phone</p>
                    <p className="text-white">+971 4 123 4567</p>
                    <p className="text-white/50 text-sm mt-1">Available 24/7 for emergencies</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Clock className="h-5 w-5 text-accent-400 mt-0.5" />
                  <div>
                    <p className="text-sm text-white/50 mb-2">Response time</p>
                    <p className="text-white">Standard enquiries within 24 hours.</p>
                    <p className="text-white/50 text-sm mt-1">Critical spares and repairs — immediate.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <QuoteForm title="Get in touch with us today" />
      <Footer />
    </main>
  );
}
