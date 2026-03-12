 'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import QuoteForm from '@/components/QuoteForm';
import Link from 'next/link';

export default function OptimizationEnergyEfficiencyPage() {
  return (
    <main className="min-h-screen bg-[#EBEEFF] w-full relative overflow-hidden">
      <Navbar />

      {/* Hero */}
      <section className="bg-[#92CDE1] py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-10">
          <div className="flex-1 text-center md:text-left">
            <p className="text-sm font-semibold tracking-wide text-blue-900 uppercase mb-3">
              Performance & Fuel Savings
            </p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-black leading-tight mb-4">
              Optimization &amp; Energy Efficiency
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-black/80 max-w-2xl">
              From hull to propeller, from engine room to bridge, we optimise your vessels for safer,
              leaner and more predictable performance.
            </p>
          </div>
          <div className="flex-1 flex justify-center">
            <img
              src="/images/optimization-energy.png"
              alt="Optimization and energy efficiency"
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
              Turning Data Into Action On Board
            </h2>
            <p className="text-gray-700 text-base sm:text-lg">
              We combine operational data, engineering expertise and practical experience to identify
              improvements that crews can trust and owners can measure.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                title: 'Performance Diagnostics',
                desc: 'Baseline studies, speed–power curves and sea trial analysis to understand true vessel performance.',
              },
              {
                title: 'Voyage Optimization Support',
                desc: 'Advisory on routing, speed profiles and weather to reduce fuel burn without compromising safety.',
              },
              {
                title: 'Engine & Aux Systems Tuning',
                desc: 'Practical recommendations for machinery tuning, maintenance intervals and operating windows.',
              },
              {
                title: 'Digital Monitoring Setups',
                desc: 'Guidance on what to measure, how to validate data quality, and how to present insights to crew.',
              },
              {
                title: 'Crew Engagement & Training',
                desc: 'Workshops and onboard routines that embed fuel awareness and best practices into daily operations.',
              },
              {
                title: 'Continuous Improvement Loops',
                desc: 'Closed-loop processes linking shore teams, onboard feedback and performance dashboards.',
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
            Explore Your Efficiency Potential
          </h2>
          <p className="text-base sm:text-lg text-gray-800 mb-8 max-w-3xl mx-auto">
            Share your vessel or fleet profile with us and we will help you identify practical,
            step-by-step efficiency opportunities.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-3 rounded-lg bg-blue-700 text-white font-semibold shadow-md hover:bg-blue-800 transition-colors"
            >
              Schedule a consultation
            </Link>
            <span className="text-sm text-gray-700">
              Or send details directly via our enquiry form below.
            </span>
          </div>
        </div>
      </section>

      <QuoteForm title="GET IN TOUCH WITH US TODAY" bgColor="bg-white" />
      <Footer />
    </main>
  );
}

