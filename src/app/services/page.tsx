'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Check } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import QuoteForm from '@/components/QuoteForm';
import PageHero from '@/components/PageHero';

const pillars = [
  {
    id: 'green-solutions',
    image: '/images/services-2.png',
    kicker: 'Decarbonization & Digitalization',
    title: 'Green Solutions',
    description:
      'Decarbonization and digitalization support, including guidance on practical options for greener and more efficient vessel operations.',
    points: [
      'Decarbonization planning support',
      'Alternative fuel assessments',
      'Energy-saving devices & retrofits',
      'Emissions and regulatory guidance',
    ],
    href: '/green-solutions',
  },
  {
    id: 'optimization-energy-efficiency',
    image: '/images/services-3.png',
    kicker: 'Performance & Fuel Savings',
    title: 'Optimization & Energy Efficiency',
    description:
      'Energy saving solutions informed by vessel operations and engineering considerations, with recommendations suited to each project.',
    points: [
      'Performance diagnostics & sea trial analysis',
      'Voyage optimization support',
      'Engine & auxiliary systems tuning',
      'Digital monitoring & crew training',
    ],
    href: '/optimization-energy-efficiency',
  },
  {
    id: 'dry-docking-solutions',
    image: '/images/services-4.png',
    kicker: 'Planned & Emergency Yard Stays',
    title: 'Dry Docking Solutions & Project Management',
    description:
      'Dry dock support that can include scope discussions, yard coordination and communication with relevant service providers.',
    points: [
      'Scope & budget definition',
      'Yard selection & vendor coordination',
      "On-site owner's representation",
      'Class & regulatory interface',
    ],
    href: '/dry-docking-solutions',
  },
  {
    id: 'ship-repairs-supplies',
    image: '/images/services-5.png',
    kicker: 'Reliable Support, In Port & At Sea',
    title: 'Ship Repairs & Supplies',
    description:
      'Technical spares and stores supply, along with coordination support for repair and maintenance requirements.',
    points: [
      'Mechanical, hull & electrical repairs',
      'Specialized technical service coordination',
      'Spare parts sourcing & supply',
      'Repair and maintenance support',
    ],
    href: '/ship-repairs-supplies',
  },
  {
    id: 'technical-consultancy',
    image: '/images/services-6.png',
    kicker: 'Independent Engineering Expertise',
    title: 'Technical Consultancy',
    description:
      'Technical guidance and specialized services shaped around the needs and scope of each assignment.',
    points: [
      'Feasibility & concept studies',
      'Design reviews & failure analysis',
      'Tender & contract support',
      'Training & knowledge transfer',
    ],
    href: '/technical-consultancy',
  },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-navy-950 w-full relative">
      <Navbar />

      <PageHero
        eyebrow="Our services"
        title="Expert marine engineering solutions"
        subtitle="VY Marine delivers technical solutions for the maritime industry — focused on safer, greener and more efficient vessel operations."
        breadcrumb="Services"
        backgroundImage="/images/services1.png"
      />

      {/* Pillars — alternating image / text blocks */}
      <section className="relative py-24">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
          {pillars.map((pillar, index) => {
            const isReversed = index % 2 === 1;

            return (
              <motion.article
                key={pillar.id}
                id={pillar.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="group scroll-mt-28 border border-white/10 bg-white/5"
              >
                <div
                  className={`grid grid-cols-1 lg:grid-cols-2 min-h-[420px] ${
                    isReversed ? 'lg:flex-row-reverse' : ''
                  }`}
                >
                  {/* Image */}
                  <div className={`relative h-64 lg:h-auto ${isReversed ? 'lg:order-2' : ''}`}>
                    <Image
                      src={pillar.image}
                      alt={pillar.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-950/60 via-transparent to-transparent lg:bg-gradient-to-r lg:from-navy-950/30 lg:via-transparent lg:to-transparent" />
                  </div>

                  {/* Content */}
                  <div className={`p-8 md:p-12 lg:p-14 flex flex-col justify-center ${isReversed ? 'lg:order-1' : ''}`}>
                    <span className="text-xs font-medium tracking-[0.15em] uppercase text-accent-400 mb-4">
                      {pillar.kicker}
                    </span>
                    <h2 className="font-display text-2xl md:text-4xl font-bold text-white mb-5 leading-tight">
                      {pillar.title}
                    </h2>
                    <p className="text-white/60 leading-relaxed mb-8 max-w-xl">
                      {pillar.description}
                    </p>

                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-3 mb-10">
                      {pillar.points.map((point) => (
                        <li key={point} className="flex items-start gap-3 text-sm text-white/55">
                          <span className="mt-0.5 text-accent-400">
                            <Check className="h-3.5 w-3.5" />
                          </span>
                          {point}
                        </li>
                      ))}
                    </ul>

                    <Link
                      href={pillar.href}
                      className="group/link inline-flex items-center gap-2 text-sm font-medium text-white/70 hover:text-accent-400 transition-colors duration-300 w-fit"
                    >
                      Learn more about {pillar.title.split('&')[0].trim()}
                      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/link:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </section>

      <QuoteForm title="Need a quote or a technical opinion?" />
      <Footer />
    </main>
  );
}
