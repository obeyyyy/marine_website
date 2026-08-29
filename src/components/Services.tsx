'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Leaf, Gauge, Anchor, Wrench, ClipboardCheck, ArrowUpRight } from 'lucide-react';

const services = [
  {
    icon: Leaf,
    title: 'Green Solutions',
    description:
      'Comprehensive digitalization and decarbonization solutions for sustainable maritime operations. We guide you through emission roadmaps, alternative fuel readiness, and regulatory compliance — transforming your fleet for a cleaner future.',
    href: '/green-solutions',
    featured: true,
    highlights: ['Emission roadmaps', 'Alternative fuels', 'Regulatory compliance'],
  },
  {
    icon: Gauge,
    title: 'Optimization & Energy Efficiency',
    description: 'Maximize vessel performance while minimizing fuel consumption.',
    href: '/optimization-energy-efficiency',
  },
  {
    icon: Anchor,
    title: 'Dry Docking Solutions',
    description: 'Dry dock planning, yard selection, and full project supervision.',
    href: '/dry-docking-solutions',
  },
  {
    icon: Wrench,
    title: 'Ship Repairs & Supplies',
    description: 'Repair services, emergency maintenance, and spare parts support.',
    href: '/ship-repairs-supplies',
  },
  {
    icon: ClipboardCheck,
    title: 'Technical Consultancy',
    description: 'Expert consultancy on maintenance, compliance, and performance.',
    href: '/technical-consultancy',
  },
];

export default function Services() {
  return (
    <section className="relative py-24">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-2xl mb-16"
        >
          <p className="text-xs font-medium tracking-[0.2em] uppercase text-accent-400 mb-4">
            What we do
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-white leading-tight mb-5">
            Five pillars of maritime expertise
          </h2>
          <p className="text-lg text-white/60">
            Technical solutions built around safer, greener and more efficient vessel operations —
            delivered by engineers who understand life at sea.
          </p>
        </motion.div>

        {/* Clean cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.7, delay: (index % 3) * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className={service.featured ? 'md:col-span-2 lg:col-span-1 lg:row-span-2' : ''}
            >
              <Link
                href={service.href}
                className={`group relative flex flex-col h-full p-8 md:p-10 bg-navy-950/80 hover:bg-navy-900/80 transition-colors duration-300 ${
                  service.featured ? 'min-h-[420px]' : ''
                }`}
              >
                {service.featured ? (
                  <>
                    <span className="font-display text-7xl font-bold text-outline leading-none mb-12">
                      {String(index + 1).padStart(2, '0')}
                    </span>

                    <service.icon className="h-6 w-6 text-accent-400 mb-8" />

                    <h3 className="font-display text-3xl font-semibold mb-5 text-white leading-[1.1]">
                      Green <span className="text-accent-400">Solutions</span>
                    </h3>

                    <p className="text-base leading-relaxed text-white/65 mb-8">
                      {service.description}
                    </p>

                    <div className="mt-auto">
                      <div className="flex flex-wrap gap-x-3 gap-y-1 mb-8 text-xs tracking-wide text-white/40">
                        {service.highlights?.map((h, i) => (
                          <span key={h}>
                            {i > 0 && <span className="mr-3 text-white/20">/</span>}
                            {h}
                          </span>
                        ))}
                      </div>

                      <div className="inline-flex items-center gap-2 text-sm font-medium text-white/70 group-hover:text-accent-400 transition-colors duration-300">
                        Explore service
                        <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <span
                      className={`font-display text-5xl font-bold mb-10 ${
                        service.featured ? 'text-outline' : 'text-white/10'
                      }`}
                    >
                      {String(index + 1).padStart(2, '0')}
                    </span>

                    <div className="mb-6">
                      <service.icon className="h-6 w-6 text-accent-400" />
                    </div>

                    <h3 className="font-display text-xl font-semibold mb-3 text-white">
                      {service.title}
                    </h3>
                    <p className="text-sm leading-relaxed flex-1 text-white/55">
                      {service.description}
                    </p>

                    <div className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-white/70 group-hover:text-accent-400 transition-colors duration-300">
                      Explore service
                      <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </div>
                  </>
                )}
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
