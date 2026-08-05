'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Cog, Package, Globe, ArrowUpRight } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'Deck Winch Retrofit',
    description:
      'Full engineering and supervision of a deck winch retrofit — from scope definition through sea trials.',
    category: 'Engineering',
    icon: Cog,
  },
  {
    id: 2,
    title: 'Pump & Valve Package — UAE',
    description:
      'Sourcing, certification and delivery of a complete pump and valve package for a fleet operator in the UAE.',
    category: 'Supply',
    icon: Package,
  },
  {
    id: 3,
    title: 'RFQ Portal for Spares',
    description:
      'A digital request-for-quote portal streamlining spare part procurement across a multi-vessel fleet.',
    category: 'E-Commerce',
    icon: Globe,
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
              Track record
            </p>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-white leading-tight">
              Recent work & supply highlights
            </h2>
          </div>
          <p className="text-white/55 max-w-sm">
            A selection of recent projects showing how we deliver across engineering, supply and
            digital enablement.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.7, delay: index * 0.12, ease: [0.16, 1, 0.3, 1] }}
              className="group relative border border-white/10 bg-white/5 hover:bg-white/[0.07] transition-colors duration-300"
            >
              {/* Visual header */}
              <div className="relative h-40 bg-white/5 overflow-hidden flex items-center justify-center">
                <project.icon className="h-12 w-12 text-white/60 group-hover:text-accent-400 transition-colors duration-300" />
                <span className="absolute top-4 left-4 text-[10px] font-medium tracking-[0.15em] uppercase text-white/70 border border-white/15 px-3 py-1">
                  {project.category}
                </span>
              </div>

              <div className="p-7">
                <h3 className="font-display text-xl font-semibold text-white mb-3 group-hover:text-accent-400 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-sm leading-relaxed text-white/55">{project.description}</p>
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
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 text-sm font-medium text-white border border-white/20 px-7 py-3.5 hover:bg-white/5 transition-colors duration-300"
          >
            Discuss your project
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
