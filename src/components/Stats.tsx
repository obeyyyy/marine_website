'use client';

import { useEffect, useRef, useState } from 'react';
import { animate, motion, useInView } from 'framer-motion';
import { Clock, Globe2, PackageCheck, ShieldCheck } from 'lucide-react';

function Counter({ value, suffix = '' }: { value: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    const controls = animate(0, value, {
      duration: 2.2,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setDisplay(Math.round(v)),
    });
    return () => controls.stop();
  }, [isInView, value]);

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  );
}

const stats = [
  { icon: PackageCheck, value: 97, suffix: '%', label: 'On-time delivery rate' },
  { icon: Clock, value: 72, suffix: 'h', label: 'Vendor shortlist lead time' },
  { icon: Globe2, value: 4, suffix: '', label: 'Countries of operation' },
  { icon: ShieldCheck, value: 100, suffix: '%', label: 'ISO-certified partners' },
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
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="p-8 md:p-10 text-center bg-navy-950/80 backdrop-blur-sm"
            >
              <stat.icon className="h-6 w-6 text-accent-400 mx-auto mb-4" />
              <div className="font-display text-3xl md:text-4xl font-bold text-white mb-2">
                <Counter value={stat.value} suffix={stat.suffix} />
              </div>
              <p className="text-xs md:text-sm uppercase tracking-wider text-white/50">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
