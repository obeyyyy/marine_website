 'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import QuoteForm from '@/components/QuoteForm';
import Link from 'next/link';

export default function GreenSolutionsPage() {
  return (
    <main className="min-h-screen bg-[#EBEEFF] w-full relative overflow-hidden">
      <Navbar />

      {/* Hero */}
      <section className="bg-[#92CDE1] py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center md:text-left flex flex-col md:flex-row items-center gap-10">
          <div className="flex-1">
            <p className="text-sm font-semibold tracking-wide text-blue-900 uppercase mb-3">
              Sustainability First
            </p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-black leading-tight mb-4">
              Green Marine Solutions
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-black/80 max-w-2xl">
              Supporting shipowners and operators with environmentally responsible upgrades, compliance
              strategies, and lifecycle efficiency improvements across the fleet.
            </p>
          </div>
          <div className="flex-1 flex justify-center">
            <img
              src="/images/green-solutions.png"
              alt="Green marine solutions"
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
              Decarbonisation Through Practical Engineering
            </h2>
            <p className="text-gray-700 text-base sm:text-lg">
              We help you plan and execute green upgrades that balance regulatory compliance, technical
              feasibility, and commercial realities – from single-vessel projects to full fleet programs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                title: 'Emission Reduction Roadmaps',
                desc: 'Strategy, vessel screening, and prioritisation to meet IMO, EU and local emission targets.',
              },
              {
                title: 'Alternative Fuel Readiness',
                desc: 'Technical assessments and concept designs for LNG, methanol, ammonia and hybrid solutions.',
              },
              {
                title: 'Energy-Saving Devices',
                desc: 'Selection and engineering support for ESDs such as propeller upgrades, ducts and sails.',
              },
              {
                title: 'Compliance & Documentation',
                desc: 'Support with CII, EEXI, SEEMP and other frameworks, including documentation and data flows.',
              },
              {
                title: 'Lifecycle Performance Monitoring',
                desc: 'Setting up KPIs, dashboards and routines to track the real impact of installed solutions.',
              },
              {
                title: 'Owner’s Engineering',
                desc: 'Independent technical partner throughout tendering, yard negotiations and implementation.',
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
            Ready to Plan Your Green Upgrade?
          </h2>
          <p className="text-base sm:text-lg text-gray-800 mb-8 max-w-3xl mx-auto">
            Whether you are planning a single retrofit or a multi-vessel programme, we can help you build
            a roadmap that is technically sound and commercially viable.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-3 rounded-lg bg-blue-700 text-white font-semibold shadow-md hover:bg-blue-800 transition-colors"
            >
              Talk to our team
            </Link>
            <span className="text-sm text-gray-700">
              Prefer a form? Use the detailed enquiry form below.
            </span>
          </div>
        </div>
      </section>

      <QuoteForm title="GET IN TOUCH WITH US TODAY" bgColor="bg-white" />
      <Footer />
    </main>
  );
}

