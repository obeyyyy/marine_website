'use client';

import { motion } from 'framer-motion';
import { Clock, Globe2, PackageCheck, ShieldCheck } from 'lucide-react';

const capabilities = [
  { icon: PackageCheck, label: 'Technical spares supply' },
  { icon: Clock, label: 'Dry dock support' },
  { icon: Globe2, label: 'Energy saving solutions' },
  { icon: ShieldCheck, label: 'Specialized technical services' },
];

export default function Stats() {
  return (
    <section className="relative py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/10"
        >
          {capabilities.map((capability, i) => (
            <motion.div
              key={capability.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="p-8 md:p-10 text-center bg-navy-950/80 backdrop-blur-sm"
            >
              <capability.icon className="h-6 w-6 text-accent-400 mx-auto mb-4" />
              <p className="font-display text-base md:text-lg font-semibold text-white">
                {capability.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
