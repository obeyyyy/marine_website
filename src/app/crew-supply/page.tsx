'use client';

import { motion } from 'framer-motion';
import { Globe2, UserRoundCheck, BriefcaseBusiness } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageHero from '@/components/PageHero';
import CtaButton from '@/components/CtaButton';

const details = [
  {
    icon: UserRoundCheck,
    label: 'Employment',
    text: 'Technician crews recruited and employed by VyMarine.',
  },
  {
    icon: BriefcaseBusiness,
    label: 'Service focus',
    text: 'Trained service crews for Hatchwin Marine Equipment Co., Limited.',
  },
  {
    icon: Globe2,
    label: 'Deployment',
    text: 'Crews deployed worldwide for Hatchwin’s international jobs.',
  },
];

export default function CrewSupplyPage() {
  return (
    <main className="min-h-screen w-full bg-navy-950">
      <Navbar />

      <PageHero
        eyebrow="Crew Supply"
        title="Trained Service Crew for Hatchwin China"
        subtitle="Technician crews recruited and employed by VyMarine and deployed worldwide for Hatchwin’s international jobs."
        breadcrumb="Crew Supply"
        backgroundImage="/images/trading-marine-procurement.webp"
      />

      <section className="relative border-b border-white/10 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7 }}
            className="mb-12 max-w-2xl"
          >
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.18em] text-accent-400">
              Hatchwin Marine Equipment Co., Limited
            </p>
            <h2 className="font-display text-3xl font-bold text-white md:text-4xl">
              Service crew for international jobs
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 gap-px bg-white/10 md:grid-cols-3">
            {details.map((detail, index) => (
              <motion.article
                key={detail.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.55, delay: index * 0.08 }}
                className="bg-navy-950/85 p-8"
              >
                <detail.icon aria-hidden="true" className="mb-6 h-6 w-6 text-accent-400" />
                <h3 className="mb-3 font-display text-lg font-semibold text-white">{detail.label}</h3>
                <p className="text-sm leading-relaxed text-white/60">{detail.text}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-white/10 py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="mb-5 font-display text-3xl font-bold text-white md:text-4xl">
            Discuss crew requirements
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-white/55">
            Contact our team to discuss service crew requirements for Hatchwin’s international jobs.
          </p>
          <CtaButton href="/contact" label="Contact our team" variant="ghost" />
        </div>
      </section>

      <Footer />
    </main>
  );
}
