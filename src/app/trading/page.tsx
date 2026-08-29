'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import {
  Boxes,
  Warehouse,
  Hammer,
  Anchor,
  Siren,
  FileCheck2,
  Handshake,
  Globe2,
  Award,
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import QuoteForm from '@/components/QuoteForm';
import PageHero from '@/components/PageHero';

const categories = [
  {
    title: 'Marine Equipment & Spare Parts',
    description:
      'Pumps, valves, engines, electrical systems, deck fittings and navigation instruments.',
    image: '/images/trading.png',
  },
  {
    title: 'Industrial Supplies',
    description:
      'Pipes, fasteners, safety gear, tools and lubricants for demanding operations.',
    image: '/images/trading1.png',
  },
  {
    title: 'Machinery & Components',
    description:
      'Compressors, generators, automation systems and motors from trusted OEMs.',
    image: '/images/trading2.png',
  },
];

const supplyServices = [
  {
    icon: Boxes,
    title: 'Stock & Ready Inventory',
    description:
      'A wide range of marine spares, OEM parts and proprietary components in stock for rapid response to urgent requests.',
  },
  {
    icon: Warehouse,
    title: 'Warehousing & Distribution',
    description:
      'Strategic warehousing in key ports and regions to minimize lead times and enable faster local delivery options.',
  },
  {
    icon: Hammer,
    title: 'Manufacturing & Repairs',
    description:
      'Cost-effective refurbishment, reconditioning and re-manufacturing of marine components to OEM standards.',
  },
  {
    icon: Anchor,
    title: 'Port Liaison',
    description:
      'Professional representation in shipyards and ports, handling all local regulations, documentation and logistics.',
  },
  {
    icon: Siren,
    title: 'Emergency Supply',
    description:
      '24/7 emergency procurement and expedited delivery services to minimize vessel downtime during critical situations.',
  },
  {
    icon: FileCheck2,
    title: 'Compliance & Certification',
    description:
      'Expert support with classification society documentation, inspections and certification to meet all regulatory requirements.',
  },
];

const strengths = [
  {
    icon: Handshake,
    title: 'Family Values, Professional Excellence',
    description:
      'We combine the trust and care of a family business with the highest professional standards in marine engineering, supply and services.',
  },
  {
    icon: Globe2,
    title: 'Global Network',
    description:
      'Access to an extensive network of trusted suppliers worldwide, ensuring quality and competitive pricing.',
  },
  {
    icon: Award,
    title: 'Marine Expertise',
    description:
      'Decades of combined experience in marine engineering, procurement and logistics solutions.',
  },
];

export default function TradingPage() {
  return (
    <main className="min-h-screen bg-navy-950 w-full relative">
      <Navbar />

      <PageHero
        eyebrow="Supplying excellence across oceans"
        title="Global Marine & Industrial Solutions"
        subtitle="VY Marine specializes in sourcing and supplying premium marine equipment, industrial materials, and general use goods. With trusted partnerships across Asia and Europe, we ensure quality, transparency and timely delivery."
        breadcrumb="Trading"
        backgroundImage="/images/trading3.png"
      />

      {/* Product categories — image cards */}
      <section className="relative py-24 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-2xl mb-16"
          >
            <p className="text-xs font-medium tracking-[0.15em] uppercase text-accent-400 mb-4">
              What we supply
            </p>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-white leading-tight mb-5">
              Reliable sourcing, trusted partnership
            </h2>
            <p className="text-lg text-white/60">
              Quality products for every operation — sourced, certified and delivered on schedule.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {categories.map((item, index) => (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.7, delay: index * 0.12, ease: [0.16, 1, 0.3, 1] }}
                className="group relative border border-white/10 overflow-hidden min-h-[360px] flex flex-col justify-end"
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/60 to-transparent" />
                <div className="relative p-8">
                  <h3 className="font-display text-xl font-semibold text-white mb-3">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-white/60">{item.description}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Supply services — clean list grid */}
      <section className="relative py-24 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-3xl mb-16"
          >
            <p className="text-xs font-medium tracking-[0.15em] uppercase text-accent-400 mb-4">
              Supply services
            </p>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-white">
              From warehouse to waterline
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10">
            {supplyServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6, delay: (index % 3) * 0.1 }}
                className="p-8 bg-navy-950 hover:bg-white/[0.03] transition-colors duration-300"
              >
                <service.icon className="h-6 w-6 text-accent-400 mb-6" />
                <h3 className="font-display text-lg font-semibold text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-sm leading-relaxed text-white/55">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why choose us — split image + text */}
      <section className="relative py-24 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="relative h-[400px] lg:h-[500px] border border-white/10 overflow-hidden"
            >
              <Image
                src="/images/trading4.png"
                alt="VY Marine operations"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/40 to-transparent" />
            </motion.div>

            {/* Text */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              <p className="text-xs font-medium tracking-[0.15em] uppercase text-accent-400 mb-4">
                Our strengths
              </p>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-10">
                Why choose VY Marine
              </h2>

              <div className="space-y-8">
                {strengths.map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex gap-5"
                  >
                    <div className="w-10 h-10 bg-white/5 flex items-center justify-center shrink-0 text-accent-400">
                      <item.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-display text-lg font-semibold text-white mb-2">
                        {item.title}
                      </h3>
                      <p className="text-sm leading-relaxed text-white/55">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <QuoteForm title="Need a quote on equipment or spares?" />
      <Footer />
    </main>
  );
}
