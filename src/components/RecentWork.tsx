'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import CtaButton from './CtaButton';

const capabilities = [
  {
    id: 1,
    tag: 'CREW',
    title: 'Trained Service Crew for Hatchwin China',
    description:
      'Technician crews recruited and employed by VyMarine and deployed worldwide for Hatchwin’s international jobs.',
  },
  {
    id: 2,
    title: 'Coming soon',
    description: '',
    tag: 'Coming soon',
  },
  {
    id: 3,
    title: 'Coming soon',
    description: '',
    tag: 'Coming soon',
  },
];

export default function RecentWork() {
  return (
    <section className="relative py-24">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16"
        >
          <div className="max-w-xl">
            <p className="text-xs font-medium tracking-[0.2em] uppercase text-accent-400 mb-4">
              Current focus
            </p>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-white leading-tight">
              Project capabilities
            </h2>
          </div>
          <p className="text-white/55 max-w-sm">
            Trained service crews for Hatchwin’s international jobs.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilities.map((capability, index) => (
            <motion.article
              key={capability.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.7, delay: index * 0.12, ease: [0.16, 1, 0.3, 1] }}
              className="group relative border border-white/10 bg-white/5 hover:bg-white/[0.07] transition-colors duration-300"
            >
              <div className="p-7 md:p-8">
                <span className="mb-5 inline-block border border-accent-400/40 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.18em] text-accent-400">
                  {capability.tag}
                </span>
                <h3 className="font-display text-xl font-semibold text-white mb-3">
                  {capability.title}
                </h3>
                {capability.description && (
                  <p className="text-sm leading-relaxed text-white/55">{capability.description}</p>
                )}
                {capability.id === 1 && (
                  <p className="mt-4 text-xs tracking-wide text-white/35">
                    Hatchwin Marine Equipment Co., Limited
                  </p>
                )}
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-center mt-14"
        >
          <CtaButton href="/contact" label="Discuss your project" variant="ghost" icon={ArrowUpRight} />
        </motion.div>
      </div>
    </section>
  );
}
