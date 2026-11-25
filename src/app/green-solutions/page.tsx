'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Route, Fuel, Fan, FileCheck2, LineChart, HardHat } from 'lucide-react';
import Navbar from '@/components/Navbar';
import CtaButton from '@/components/CtaButton';
import Footer from '@/components/Footer';
import PageHero from '@/components/PageHero';

const phases = [
  {
    step: '01',
    icon: Route,
    title: 'Assess & Prioritise',
    description:
      'Vessel screening, emission baselines and regulatory gap analysis. We identify which ships need what, and in what order.',
    items: ['Emission reduction roadmaps', 'CII / EEXI gap analysis', 'Fleet-level prioritisation'],
  },
  {
    step: '02',
    icon: Fuel,
    title: 'Design & Engineer',
    description:
      'Concept designs and technical assessments for alternative fuels, energy-saving devices and hybrid solutions.',
    items: ['LNG, methanol, ammonia readiness', 'ESD selection (propellers, ducts, sails)', 'Retrofit engineering packages'],
  },
  {
    step: '03',
    icon: FileCheck2,
    title: 'Comply & Document',
    description:
      'Full documentation support for IMO, EU and local frameworks — including SEEMP, CII and EEXI submissions.',
    items: ['SEEMP III preparation', 'CII rating improvement plans', 'Class & flag documentation'],
  },
  {
    step: '04',
    icon: LineChart,
    title: 'Monitor & Improve',
    description:
      'KPIs, dashboards and onboard routines to track real-world impact and close the loop between intent and outcome.',
    items: ['Performance monitoring setup', 'Crew engagement & training', "Owner's engineering throughout"],
  },
];

const results = [
  {
    value: '3–5%',
    title: 'Fuel Savings Per Vessel',
    description:
      'Achieved within the first voyage cycle on MV ABC through IoT sensor integration and PROPELIQ diagnostics.',
  },
  {
    value: 'E → D',
    title: 'CII Rating Recovery',
    description:
      'Operational quick-wins and SEEMP III planning delivered measurable CII improvement without capital expenditure.',
  },
  {
    value: '6–8 hrs',
    title: 'Superintendent Time Reclaimed',
    description:
      'Weekly time savings per superintendent after shifting from manual noon report review to live daily dashboards.',
  },
];

export default function GreenSolutionsPage() {
  return (
    <main className="min-h-screen bg-navy-950 w-full">
      <Navbar />

      <PageHero
        eyebrow="Sustainability first"
        title="Green Marine Solutions"
        subtitle="Supporting shipowners and operators with environmentally responsible upgrades, compliance strategies, and lifecycle efficiency improvements across the fleet."
        breadcrumb="Green Solutions"
        backgroundImage="/images/services-2.png"
      />

      {/* Intro + image */}
      <section className="relative py-24 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
                Decarbonisation with practical engineering
              </h2>
              <p className="text-lg leading-relaxed text-white/65">
                Built for ship managers facing CII downgrade risk, CFOs absorbing EU ETS exposure,
                and technical directors tired of vendor-driven advice. If your vessel must trade
                beyond 2027, this is not optional thinking.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.8 }}
              className="relative h-[350px] lg:h-[450px] border border-white/10 overflow-hidden"
            >
              <Image
                src="/images/green-solutions-practical-engineering.webp"
                alt="Marine salvage and towing operation viewed from above"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/50 to-transparent" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Proven results */}
      <section className="relative border-b border-white/10 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7 }}
            className="mb-14 text-center"
          >
            <h2 className="font-display text-3xl font-bold text-white md:text-4xl">Proven Results</h2>
            <p className="mt-4 text-white/65">
              Real outcomes from our maritime energy intelligence solutions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {results.map((result, index) => (
              <motion.article
                key={result.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="border border-white/25 bg-white/[0.02] px-7 py-10 text-center sm:px-9"
              >
                <p className="mb-2 font-display text-5xl font-bold tracking-tight text-blue-500 sm:text-6xl">
                  {result.value}
                </p>
                <h3 className="mb-5 text-lg font-semibold text-white">{result.title}</h3>
                <p className="text-sm leading-relaxed text-white/65">{result.description}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline / Roadmap */}
      <section className="relative py-24 border-b border-white/10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mb-16"
          >
            <p className="text-xs font-medium tracking-[0.15em] uppercase text-accent-400 mb-4">
              The roadmap
            </p>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-white">
              Four phases, one direction
            </h2>
          </motion.div>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-white/10 md:-translate-x-1/2" />

            {phases.map((phase, index) => (
              <motion.div
                key={phase.step}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className={`relative flex flex-col md:flex-row gap-8 mb-16 last:mb-0 ${
                  index % 2 === 1 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Spacer for alternating layout */}
                <div className="hidden md:block md:w-1/2" />

                {/* Content */}
                <div className={`md:w-1/2 pl-12 md:pl-0 ${index % 2 === 1 ? 'md:pl-12' : 'md:pr-12 md:text-right'}`}>
                  <div className={`flex items-center gap-4 mb-5 ${index % 2 === 1 ? '' : 'md:flex-row-reverse'}`}>
                    <div className="w-12 h-12 bg-white/5 flex items-center justify-center text-accent-400 shrink-0">
                      <phase.icon className="h-5 w-5" />
                    </div>
                    <span className="font-display text-5xl font-bold text-white/10">{phase.step}</span>
                  </div>
                  <h3 className="font-display text-2xl font-bold text-white mb-4">{phase.title}</h3>
                  <p className="text-white/55 leading-relaxed mb-5">{phase.description}</p>
                  <ul className={`space-y-2 ${index % 2 === 1 ? '' : 'md:text-right'}`}>
                    {phase.items.map((item) => (
                      <li key={item} className="text-sm text-white/45">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Node on the line */}
                <div className="absolute left-0 md:left-1/2 top-2 w-3 h-3 bg-accent-400 md:-translate-x-1/2" />
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
              Ready to plan your green upgrade?
            </h2>
            <p className="text-white/55 mb-8 max-w-2xl mx-auto">
              Whether you are planning a single retrofit or a multi-vessel programme, we can help
              you build a roadmap that is technically sound and commercially viable.
            </p>
            <CtaButton href="/contact" label="Talk to our team" variant="ghost" />
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
