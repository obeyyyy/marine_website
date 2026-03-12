 'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import QuoteForm from '@/components/QuoteForm';
import Link from 'next/link';

export default function TechnicalConsultancyPage() {
  return (
    <main className="min-h-screen bg-[#EBEEFF] w-full relative overflow-hidden">
      <Navbar />

      {/* Hero */}
      <section className="bg-[#92CDE1] py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-10">
          <div className="flex-1 text-center md:text-left">
            <p className="text-sm font-semibold tracking-wide text-blue-900 uppercase mb-3">
              Independent Engineering Expertise
            </p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-black leading-tight mb-4">
              Technical Consultancy
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-black/80 max-w-2xl">
              From concept and feasibility to troubleshooting and expert reviews, we support you with
              clear, unbiased technical guidance.
            </p>
          </div>
          <div className="flex-1 flex justify-center">
            <img
              src="/images/technical-consultancy.png"
              alt="Technical consultancy"
              className="w-full max-w-md rounded-2xl shadow-lg object-cover"
            />
          </div>
        </div>
      </section>

      {/* Intro + Features */}
      <section className="py-16 md:py-20 bg-[#EBEEFF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              A Trusted Partner for Complex Decisions
            </h2>
            <p className="text-gray-700 text-base sm:text-lg">
              We act as an extension of your technical team, bringing additional capacity, specialist
              skills and an independent point of view.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                title: 'Feasibility & Concept Studies',
                desc: 'Early-stage assessments to test technical options, costs and risk before you commit.',
              },
              {
                title: 'Design & Drawing Reviews',
                desc: 'Independent review of designs, calculations and documentation from yards and suppliers.',
              },
              {
                title: 'Failure Analysis & RCA',
                desc: 'Structured investigations into incidents and failures, with clear root cause findings.',
              },
              {
                title: 'Tender & Contract Support',
                desc: 'Technical input for RFQs, bid evaluations and contract specifications.',
              },
              {
                title: 'Owner’s Engineering',
                desc: 'Long-term technical partner across projects, refits and retrofit programmes.',
              },
              {
                title: 'Training & Knowledge Transfer',
                desc: 'Workshops, documentation and coaching to build internal capability over time.',
              },
            ].map((item) => (
              <article
                key={item.title}
                className="bg-white/70 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 p-6 border border-white/60"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-sm sm:text-base text-gray-700">{item.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Call to action */}
      <section className="bg-[#9DCBDB] py-16 md:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Discuss Your Technical Challenge
          </h2>
          <p className="text-base sm:text-lg text-gray-800 mb-8 max-w-3xl mx-auto">
            From one-off questions to full project support, we are ready to help you move forward with
            confidence.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-3 rounded-lg bg-blue-700 text-white font-semibold shadow-md hover:bg-blue-800 transition-colors"
            >
              Speak with a consultant
            </Link>
            <span className="text-sm text-gray-700">
              Or outline your case using the enquiry form below.
            </span>
          </div>
        </div>
      </section>

      <QuoteForm title="GET IN TOUCH WITH US TODAY" bgColor="bg-white" />
      <Footer />
    </main>
  );
}

