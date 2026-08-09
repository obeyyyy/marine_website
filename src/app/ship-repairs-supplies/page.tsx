'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Hammer, CircuitBoard, Users, Package, Anchor, PhoneCall } from 'lucide-react';
import CtaButton from '@/components/CtaButton';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import QuoteForm from '@/components/QuoteForm';
import PageHero from '@/components/PageHero';

const services = [
  {
    icon: Hammer,
    title: 'Mechanical & Hull Repairs',
    description:
      'Repairs to machinery, piping, structure and coatings through vetted service partners.',
  },
  {
    icon: CircuitBoard,
    title: 'Electrical & Automation',
    description:
      'Troubleshooting and upgrade works for electrical systems, automation and navigation.',
  },
  {
    icon: Users,
    title: 'Riding Squads',
    description:
      'Multi-discipline teams that can travel with the vessel to minimise off-hire time.',
  },
  {
    icon: Package,
    title: 'Spare Parts & Consumables',
    description:
      'Sourcing and logistics for genuine parts, equivalents and critical consumables.',
  },
  {
    icon: Anchor,
    title: 'Port & Yard Coordination',
    description:
      'On-site coordination with port agents, terminals and yards for smooth execution.',
  },
];

export default function ShipRepairsSuppliesPage() {
  return (
    <main className="min-h-screen bg-navy-950 w-full">
      <Navbar />

      <PageHero
        eyebrow="Reliable support, in port & at sea"
        title="Ship Repairs & Supplies"
        subtitle="Fast, coordinated responses for mechanical breakdowns, damage repairs and urgent spare part needs — supported by a trusted vendor network."
        breadcrumb="Ship Repairs"
        backgroundImage="/images/services-5.png"
      />

      {/* 24/7 Emergency banner */}
      <section className="relative border-b border-white/10 bg-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col md:flex-row items-center justify-between gap-6"
          >
            <div className="flex items-center gap-5">
              <div className="w-14 h-14 bg-accent-400/10 flex items-center justify-center text-accent-400">
                <PhoneCall className="h-6 w-6" />
              </div>
              <div>
                <p className="font-display text-xl font-bold text-white">24/7 Emergency Response</p>
                <p className="text-sm text-white/50">From first assessment through to close-out — we move fast.</p>
              </div>
            </div>
            <CtaButton href="/contact" label="Contact our repairs team" variant="ghost" />
          </motion.div>
        </div>
      </section>

      {/* Image + intro */}
      <section className="relative py-24 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.8 }}
              className="relative h-[350px] lg:h-[450px] border border-white/10 overflow-hidden"
            >
              <Image
                src="/images/services-6.png"
                alt="Ship repairs"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/50 to-transparent" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              <p className="text-xs font-medium tracking-[0.15em] uppercase text-accent-400 mb-4">
                From minor repairs to complex jobs
              </p>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
                Coordinated. Fast. Safe.
              </h2>
              <p className="text-white/60 leading-relaxed mb-6">
                We coordinate workshops, riding squads and OEM service teams to solve issues
                quickly while keeping safety, quality and cost under control.
              </p>
              <p className="text-white/60 leading-relaxed">
                One point of contact. A vetted network. Clear communication from the first call
                to the final sign-off.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services — asymmetric grid (first card spans 2 cols) */}
      <section className="relative py-24 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mb-16"
          >
            <p className="text-xs font-medium tracking-[0.15em] uppercase text-accent-400 mb-4">
              What we handle
            </p>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-white">
              Five service areas
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/10">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6, delay: (index % 3) * 0.1 }}
                className={`p-8 md:p-10 bg-navy-950 hover:bg-white/[0.03] transition-colors duration-300 ${
                  index === 0 ? 'md:col-span-2' : ''
                }`}
              >
                <service.icon className="h-7 w-7 text-accent-400 mb-6" />
                <h3 className="font-display text-xl font-semibold text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-sm leading-relaxed text-white/55">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 border-b border-white/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-5">
              Need immediate technical support?
            </h2>
            <p className="text-white/55 mb-8 max-w-2xl mx-auto">
              Share the situation, the vessel position and time constraints — we will coordinate
              the right mix of people, parts and partners.
            </p>
            <CtaButton href="/contact" label="Contact our repairs team" variant="ghost" />
          </motion.div>
        </div>
      </section>

      <QuoteForm title="Get in touch with us today" />
      <Footer />
    </main>
  );
}
