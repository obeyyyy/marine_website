'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { Plus, Minus } from 'lucide-react';
import Navbar from '@/components/Navbar';
import CtaButton from '@/components/CtaButton';
import Footer from '@/components/Footer';
import QuoteForm from '@/components/QuoteForm';
import PageHero from '@/components/PageHero';

const faqs = [
  {
    question: 'Can you help us decide whether a retrofit is worth it?',
    answer:
      'Yes. We run feasibility and concept studies that test technical options, costs and risk before you commit. We give you an honest assessment — including when the answer is "not yet".',
  },
  {
    question: 'Do you review designs and drawings from yards and suppliers?',
    answer:
      'We provide independent review of designs, calculations and documentation. We flag issues early, not after the steel is cut.',
  },
  {
    question: 'Can you investigate a failure or incident on one of our vessels?',
    answer:
      'We run structured root-cause analyses with clear findings and recommendations. We focus on what happened, why, and what to do about it — not on assigning blame.',
  },
  {
    question: 'Do you support tenders and contract specifications?',
    answer:
      'We provide technical input for RFQs, bid evaluations and contract specifications — making sure the scope is clear and the commercial risk is balanced.',
  },
  {
    question: 'Can you act as our long-term technical partner?',
    answer:
      "Many of our clients use us as Owner's Engineer across multiple projects, refits and retrofit programmes. We become an extension of your team, not a separate vendor.",
  },
  {
    question: 'Do you offer training for our shore staff or crew?',
    answer:
      'We run workshops, produce documentation and coach your people on specific topics — building internal capability over time rather than creating dependency.',
  },
];

function FAQItem({
  faq,
  isOpen,
  onToggle,
  index,
}: {
  faq: { question: string; answer: string };
  isOpen: boolean;
  onToggle: () => void;
  index: number;
}) {
  return (
    <div className="border-b border-white/10">
      <button
        onClick={onToggle}
        className="w-full flex items-start gap-6 py-6 text-left group"
      >
        <span className="font-display text-sm font-bold text-white/30 w-8 shrink-0 pt-1">
          {String(index + 1).padStart(2, '0')}
        </span>
        <span className="flex-1 font-display text-lg font-medium text-white group-hover:text-accent-400 transition-colors duration-300">
          {faq.question}
        </span>
        <span className="shrink-0 pt-1 text-accent-400">
          {isOpen ? <Minus className="h-5 w-5" /> : <Plus className="h-5 w-5" />}
        </span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <p className="pb-6 pl-14 pr-10 text-white/55 leading-relaxed">{faq.answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function TechnicalConsultancyPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <main className="min-h-screen bg-navy-950 w-full">
      <Navbar />

      <PageHero
        eyebrow="Independent engineering expertise"
        title="Technical Consultancy"
        subtitle="From concept and feasibility to troubleshooting and expert reviews, we support you with clear, unbiased technical guidance."
        breadcrumb="Consultancy"
        backgroundImage="/images/services-6.png"
      />

      {/* Intro split */}
      <section className="relative py-24 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.7 }}
            >
              <p className="text-xs font-medium tracking-[0.15em] uppercase text-accent-400 mb-4">
                A trusted partner for complex decisions
              </p>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
                Independent. Practical. On your side.
              </h2>
              <p className="text-white/60 leading-relaxed mb-6">
                We act as an extension of your technical team, bringing additional capacity,
                specialist skills and an independent point of view.
              </p>
              <p className="text-white/60 leading-relaxed">
                No agenda. No preferred suppliers to push. Just engineering judgement you can
                rely on when the stakes are high.
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
                src="/images/services1.png"
                alt="Technical consultancy"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/50 to-transparent" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ-style capabilities */}
      <section className="relative py-24 border-b border-white/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mb-12"
          >
            <p className="text-xs font-medium tracking-[0.15em] uppercase text-accent-400 mb-4">
              What we get asked
            </p>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-white">
              Questions we answer
            </h2>
          </motion.div>

          <div className="border-t border-white/10">
            {faqs.map((faq, index) => (
              <FAQItem
                key={faq.question}
                faq={faq}
                index={index}
                isOpen={openIndex === index}
                onToggle={() => setOpenIndex(openIndex === index ? null : index)}
              />
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
              Discuss your technical challenge
            </h2>
            <p className="text-white/55 mb-8 max-w-2xl mx-auto">
              From one-off questions to full project support, we are ready to help you move
              forward with confidence.
            </p>
            <CtaButton href="/contact" label="Speak with a consultant" variant="ghost" />
          </motion.div>
        </div>
      </section>

      <QuoteForm title="Get in touch with us today" />
      <Footer />
    </main>
  );
}
