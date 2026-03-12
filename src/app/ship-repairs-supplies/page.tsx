 'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import QuoteForm from '@/components/QuoteForm';
import Link from 'next/link';

export default function ShipRepairsSuppliesPage() {
  return (
    <main className="min-h-screen bg-[#EBEEFF] w-full relative overflow-hidden">
      <Navbar />

      {/* Hero */}
      <section className="bg-[#92CDE1] py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-10">
          <div className="flex-1 text-center md:text-left">
            <p className="text-sm font-semibold tracking-wide text-blue-900 uppercase mb-3">
              Reliable Support, In Port &amp; At Sea
            </p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-black leading-tight mb-4">
              Ship Repairs &amp; Supplies
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-black/80 max-w-2xl">
              Fast, coordinated responses for mechanical breakdowns, damage repairs and urgent spare part
              needs – supported by a trusted vendor network.
            </p>
          </div>
          <div className="flex-1 flex justify-center">
            <img
              src="/images/repairs-supplies.png"
              alt="Ship repairs and supplies"
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
              From Minor Repairs to Complex Jobs
            </h2>
            <p className="text-gray-700 text-base sm:text-lg">
              We coordinate workshops, riding squads and OEM service teams to solve issues quickly while
              keeping safety, quality and cost under control.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                title: 'Mechanical & Hull Repairs',
                desc: 'Repairs to machinery, piping, structure and coatings through vetted service partners.',
              },
              {
                title: 'Electrical & Automation Support',
                desc: 'Troubleshooting and upgrade works for electrical systems, automation and navigation.',
              },
              {
                title: 'Riding Squads',
                desc: 'Multi-discipline teams that can travel with the vessel to minimise off-hire time.',
              },
              {
                title: 'Spare Parts & Consumables',
                desc: 'Sourcing and logistics for genuine parts, equivalents and critical consumables.',
              },
              {
                title: 'Port & Yard Coordination',
                desc: 'On-site coordination with port agents, terminals and yards for smooth execution.',
              },
              {
                title: '24/7 Case Handling',
                desc: 'Reactive support for urgent incidents, from first assessment through to close-out.',
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
            Need Immediate Technical Support?
          </h2>
          <p className="text-base sm:text-lg text-gray-800 mb-8 max-w-3xl mx-auto">
            Share the situation, the vessel position and time constraints – we will coordinate the right
            mix of people, parts and partners.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-3 rounded-lg bg-blue-700 text-white font-semibold shadow-md hover:bg-blue-800 transition-colors"
            >
              Contact our repairs team
            </Link>
            <span className="text-sm text-gray-700">
              You can also include technical details via the enquiry form below.
            </span>
          </div>
        </div>
      </section>

      <QuoteForm title="GET IN TOUCH WITH US TODAY" bgColor="bg-white" />
      <Footer />
    </main>
  );
}

