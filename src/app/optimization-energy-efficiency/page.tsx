'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Activity, Navigation, Settings, MonitorCheck, Users, RefreshCcw } from 'lucide-react';
import Navbar from '@/components/Navbar';
import CtaButton from '@/components/CtaButton';
import Footer from '@/components/Footer';
import QuoteForm from '@/components/QuoteForm';
import PageHero from '@/components/PageHero';

const metrics = [
  { value: '5–15%', label: 'Typical fuel savings range' },
  { value: '2–4%', label: 'From hull cleaning alone' },
  { value: '3–8%', label: 'From engine & aux tuning' },
  { value: '1–5%', label: 'From voyage optimisation' },
];

const capabilities = [
  {
    icon: Activity,
    title: 'Performance Diagnostics',
    description:
      'Baseline studies, speed–power curves and sea trial analysis to understand true vessel performance.',
  },
  {
    icon: Navigation,
    title: 'Voyage Optimisation',
    description:
      'Advisory on routing, speed profiles and weather to reduce fuel burn without compromising safety.',
  },
  {
    icon: Settings,
    title: 'Engine & Aux Tuning',
    description:
      'Practical recommendations for machinery tuning, maintenance intervals and operating windows.',
  },
  {
    icon: MonitorCheck,
    title: 'Digital Monitoring',
    description:
      'Guidance on what to measure, how to validate data quality, and how to present insights to crew.',
  },
  {
    icon: Users,
    title: 'Crew Engagement',
    description:
      'Workshops and onboard routines that embed fuel awareness and best practices into daily operations.',
  },
  {
    icon: RefreshCcw,
    title: 'Continuous Improvement',
    description:
      'Closed-loop processes linking shore teams, onboard feedback and performance dashboards.',
  },
];

export default function OptimizationEnergyEfficiencyPage() {
  return (
    <main className="min-h-screen bg-navy-950 w-full">
      <Navbar />

      <PageHero
        eyebrow="Performance & fuel savings"
        title="Optimization & Energy Efficiency"
        subtitle="From hull to propeller, from engine room to bridge, we optimise your vessels for safer, leaner and more predictable performance."
        breadcrumb="Optimization"
        backgroundImage="/images/services-3.png"
      />

      {/* Metrics band */}
      <section className="relative py-20 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mb-12 max-w-2xl"
          >
            <p className="text-xs font-medium tracking-[0.15em] uppercase text-accent-400 mb-4">
              The opportunity
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white leading-tight">
              Small changes, measurable impact
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/10">
            {metrics.map((metric, i) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="p-8 md:p-10 bg-navy-950"
              >
                <p className="font-display text-4xl md:text-5xl font-bold text-accent-400 mb-3">
                  {metric.value}
                </p>
                <p className="text-sm text-white/50">{metric.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Image + intro */}
      <section className="relative py-24 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.8 }}
              className="relative h-[350px] lg:h-[450px] border border-white/10 overflow-hidden"
            >
              <Image
                src="/images/services-4.png"
                alt="Vessel performance optimisation"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/50 to-transparent" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              <p className="text-xs font-medium tracking-[0.15em] uppercase text-accent-400 mb-4">
                Turning data into action
              </p>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
                What we actually do on board
              </h2>
              <p className="text-white/60 leading-relaxed mb-6">
                We combine operational data, engineering expertise and practical experience to
                identify improvements that crews can trust and owners can measure.
              </p>
              <p className="text-white/60 leading-relaxed">
                No black boxes. No generic dashboards. Just clear recommendations, validated data
                and routines that stick.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Capabilities — numbered list */}
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
              Capabilities
            </p>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-white">
              Six areas of focus
            </h2>
          </motion.div>

          <div className="space-y-px bg-white/10">
            {capabilities.map((cap, index) => (
              <motion.div
                key={cap.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="group flex items-start gap-6 p-8 bg-navy-950 hover:bg-white/[0.03] transition-colors duration-300"
              >
                <span className="font-display text-3xl font-bold text-white/10 w-12 shrink-0">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <cap.icon className="h-6 w-6 text-accent-400 mt-1 shrink-0" />
                <div>
                  <h3 className="font-display text-lg font-semibold text-white mb-2">{cap.title}</h3>
                  <p className="text-sm leading-relaxed text-white/55">{cap.description}</p>
                </div>
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
              Explore your efficiency potential
            </h2>
            <p className="text-white/55 mb-8 max-w-2xl mx-auto">
              Share your vessel or fleet profile with us and we will help you identify practical,
              step-by-step efficiency opportunities.
            </p>
            <CtaButton href="/contact" label="Schedule a consultation" variant="ghost" />
          </motion.div>
        </div>
      </section>

      <QuoteForm title="Get in touch with us today" />
      <Footer />
    </main>
  );
}
