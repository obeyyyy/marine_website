'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import type { LucideIcon } from 'lucide-react';
import { ArrowRight } from 'lucide-react';
import Navbar from './Navbar';
import Footer from './Footer';
import QuoteForm from './QuoteForm';
import PageHero from './PageHero';

export type ServiceFeature = {
  icon: LucideIcon;
  title: string;
  desc: string;
};

type ServicePageTemplateProps = {
  eyebrow: string;
  title: string;
  subtitle: string;
  sectionTitle: string;
  sectionIntro: string;
  features: ServiceFeature[];
  ctaTitle: string;
  ctaText: string;
  ctaButtonLabel: string;
};

export default function ServicePageTemplate({
  eyebrow,
  title,
  subtitle,
  sectionTitle,
  sectionIntro,
  features,
  ctaTitle,
  ctaText,
  ctaButtonLabel,
}: ServicePageTemplateProps) {
  return (
    <main className="min-h-screen bg-mist-50 w-full relative">
      <Navbar />

      <PageHero eyebrow={eyebrow} title={title} subtitle={subtitle} breadcrumb={title} />

      {/* Features */}
      <section className="relative py-24 bg-mist-50 overflow-hidden">
        <div className="absolute inset-0 bg-dots-light pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-3xl mx-auto text-center mb-16"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-navy-900 mb-5">
              {sectionTitle}
            </h2>
            <p className="text-lg text-slate-600">{sectionIntro}</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((item, index) => (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.7, delay: (index % 3) * 0.12, ease: [0.16, 1, 0.3, 1] }}
                className="group relative bg-white rounded-2xl border border-slate-200 p-8 hover:border-accent-400/60 hover:shadow-[0_24px_50px_rgba(12,38,69,0.12)] hover:-translate-y-1.5 transition-all duration-500 overflow-hidden"
              >
                <div className="w-12 h-12 rounded-xl bg-mist-100 text-navy-800 flex items-center justify-center mb-6 group-hover:bg-accent-400/15 group-hover:text-accent-500 transition-colors duration-500">
                  <item.icon className="h-5 w-5" />
                </div>
                <h3 className="font-display text-lg font-semibold text-navy-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-slate-600">{item.desc}</p>
                <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-accent-400 transition-all duration-500 group-hover:w-full" />
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 bg-white overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative rounded-3xl bg-navy-900 p-12 md:p-16 text-center overflow-hidden"
          >
            <div className="absolute inset-0 bg-grid-dark" />
            <div className="absolute -top-24 left-1/3 w-80 h-80 rounded-full bg-accent-500/15 blur-3xl animate-pulse-glow" />

            <div className="relative">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-5">
                {ctaTitle}
              </h2>
              <p className="text-base md:text-lg text-white/60 mb-9 max-w-2xl mx-auto">
                {ctaText}
              </p>
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 rounded-full bg-accent-400 text-navy-950 font-semibold text-sm tracking-wide px-8 py-4 hover:bg-cyan-300 hover:shadow-[0_0_28px_rgba(34,211,238,0.45)] transition-all duration-300"
              >
                {ctaButtonLabel}
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <QuoteForm title="Get in touch with us today" />
      <Footer />
    </main>
  );
}
