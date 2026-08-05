'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, ClipboardList, Handshake, Eye, Landmark, Wrench, FileBarChart } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import QuoteForm from '@/components/QuoteForm';
import PageHero from '@/components/PageHero';

const steps = [
  {
    icon: ClipboardList,
    title: 'Scope & Budget',
    description:
      'Technical review, work list preparation and budget estimates aligned with your operational plans.',
  },
  {
    icon: Handshake,
    title: 'Yard & Vendor Selection',
    description:
      'Support with yard selection, negotiations and integration of specialist contractors.',
  },
  {
    icon: Eye,
    title: 'On-Site Supervision',
    description:
      "Owner's representative on site to monitor progress, quality, safety and variation orders.",
  },
  {
    icon: Landmark,
    title: 'Class & Regulatory',
    description:
      'Planning and coordination of class surveys, flag requirements and documentation.',
  },
  {
    icon: Wrench,
    title: 'Upgrades & Retrofits',
    description:
      'Integration of green technologies, ESDs and other upgrades into the docking programme.',
  },
  {
    icon: FileBarChart,
    title: 'Post-Docking Review',
    description:
      'Close-out reports, lessons learned and recommended actions for the next docking cycle.',
  },
];

export default function DryDockingSolutionsPage() {
  return (
    <main className="min-h-screen bg-navy-950 w-full">
      <Navbar />

      <PageHero
        eyebrow="Planned & emergency yard stays"
        title="Dry Docking Solutions"
        subtitle="From scope definition to redelivery, we coordinate technical, commercial and logistical aspects of your dry docking projects."
        breadcrumb="Dry Docking"
        backgroundImage="/images/services-4.png"
      />

      {/* Full-width image */}
      <section className="relative h-[40vh] min-h-[300px] border-b border-white/10 overflow-hidden">
        <Image
          src="/images/services-5.png"
          alt="Dry docking"
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/40 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-10">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-white/70 text-lg max-w-2xl"
          >
            We act as your on-the-ground partner, aligning yards, suppliers and service providers
            so your vessel returns to service safely, on time and on budget.
          </motion.p>
        </div>
      </section>

      {/* Process steps — horizontal connected cards */}
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
              The process
            </p>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-white">
              End-to-end docking management
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6, delay: (index % 3) * 0.1 }}
                className="group relative p-8 md:p-10 bg-navy-950 hover:bg-white/[0.03] transition-colors duration-300"
              >
                {/* Step number */}
                <div className="flex items-center gap-4 mb-6">
                  <span className="font-display text-4xl font-bold text-accent-400">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <div className="h-px flex-1 bg-white/10" />
                  <step.icon className="h-5 w-5 text-white/40" />
                </div>

                <h3 className="font-display text-lg font-semibold text-white mb-3">
                  {step.title}
                </h3>
                <p className="text-sm leading-relaxed text-white/55">{step.description}</p>
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
              Planning a docking or retrofit?
            </h2>
            <p className="text-white/55 mb-8 max-w-2xl mx-auto">
              Share your upcoming docking window or project idea and we will help you turn it into
              a clear, structured execution plan.
            </p>
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 text-sm font-medium text-white border border-white/20 px-7 py-3.5 hover:bg-white/5 transition-colors duration-300"
            >
              Discuss your docking project
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>
      </section>

      <QuoteForm title="Get in touch with us today" />
      <Footer />
    </main>
  );
}
