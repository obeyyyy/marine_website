 'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import QuoteForm from '@/components/QuoteForm';
import Link from 'next/link';

export default function DryDockingSolutionsPage() {
  return (
    <main className="min-h-screen bg-[#EBEEFF] w-full relative overflow-hidden">
      <Navbar />

      {/* Hero */}
      <section className="bg-[#92CDE1] py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-10">
          <div className="flex-1 text-center md:text-left">
            <p className="text-sm font-semibold tracking-wide text-blue-900 uppercase mb-3">
              Planned &amp; Emergency Yard Stays
            </p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-black leading-tight mb-4">
              Dry Docking Solutions
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-black/80 max-w-2xl">
              From scope definition to redelivery, we coordinate technical, commercial and logistical
              aspects of your dry docking projects.
            </p>
          </div>
          <div className="flex-1 flex justify-center">
            <img
              src="/images/dry-docking.png"
              alt="Dry docking solutions"
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
              End-to-End Docking Management
            </h2>
            <p className="text-gray-700 text-base sm:text-lg">
              We act as your on-the-ground partner, aligning yards, suppliers and service providers so
              your vessel returns to service safely, on time and on budget.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                title: 'Scope & Budget Definition',
                desc: 'Technical review, work list preparation and budget estimates aligned with your operational plans.',
              },
              {
                title: 'Yard & Vendor Coordination',
                desc: 'Support with yard selection, negotiations and integration of specialist contractors.',
              },
              {
                title: 'On-Site Supervision',
                desc: 'Owner’s representative on site to monitor progress, quality, safety and variation orders.',
              },
              {
                title: 'Class & Regulatory Interface',
                desc: 'Planning and coordination of class surveys, flag requirements and documentation.',
              },
              {
                title: 'Upgrades & Retrofits',
                desc: 'Integration of green technologies, ESDs and other upgrades into the docking programme.',
              },
              {
                title: 'Post-Docking Review',
                desc: 'Close-out reports, lessons learned and recommended actions for the next docking cycle.',
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
            Planning a Docking or Retrofit?
          </h2>
          <p className="text-base sm:text-lg text-gray-800 mb-8 max-w-3xl mx-auto">
            Share your upcoming docking window or project idea and we will help you turn it into a clear,
            structured execution plan.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-3 rounded-lg bg-blue-700 text-white font-semibold shadow-md hover:bg-blue-800 transition-colors"
            >
              Discuss your docking project
            </Link>
            <span className="text-sm text-gray-700">
              Or outline your scope directly using our enquiry form below.
            </span>
          </div>
        </div>
      </section>

      <QuoteForm title="GET IN TOUCH WITH US TODAY" bgColor="bg-white" />
      <Footer />
    </main>
  );
}

