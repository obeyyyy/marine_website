'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { BadgeCheck, BarChart3, Sprout, Zap, Timer } from 'lucide-react';

const reasons = [
  {
    kicker: 'Quality',
    title: 'Supplier coordination',
    description:
      'We can help identify and coordinate suppliers based on the requirements of each assignment.',
    icon: BadgeCheck,
  },
  {
    kicker: 'Transparency',
    title: 'Clear project communication',
    description: 'We aim to keep communication clear and aligned with the agreed project scope.',
    icon: BarChart3,
  },
  {
    kicker: 'Sustainability',
    title: 'Considered sourcing',
    description:
      'We consider environmental impact when discussing sourcing options for a project.',
    icon: Sprout,
  },
  {
    kicker: 'Efficiency',
    title: 'Responsive support',
    description:
      'We review enquiries and discuss practical next steps based on the request and availability.',
    icon: Zap,
  },
  {
    kicker: 'Reliability',
    title: 'Project coordination',
    description:
      'We coordinate with relevant parties to support project requirements and timelines.',
    icon: Timer,
  },
];

export default function Story() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="relative py-24 text-white" aria-labelledby="why-vymarine-title">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mb-12 max-w-2xl"
        >
          <span className="mb-4 inline-block text-xs font-semibold uppercase tracking-[0.25em] text-accent-400">
            Why VY Marine
          </span>
          <h2 id="why-vymarine-title" className="font-display text-3xl font-bold text-white sm:text-5xl">
            Practical support, shaped around your needs.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 gap-px bg-white/10 sm:grid-cols-2 lg:grid-cols-5">
          {reasons.map((reason, index) => (
            <motion.article
              key={reason.title}
              initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.55, delay: index * 0.07, ease: [0.16, 1, 0.3, 1] }}
              className="bg-navy-950/85 p-7 sm:p-8"
            >
              <reason.icon aria-hidden="true" className="mb-7 h-5 w-5 text-accent-400" />
              <p className="mb-3 text-[11px] font-medium uppercase tracking-[0.16em] text-white/40">
                {reason.kicker}
              </p>
              <h3 className="mb-3 font-display text-lg font-semibold text-white">
                {reason.title}
              </h3>
              <p className="text-sm leading-relaxed text-white/55">{reason.description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
