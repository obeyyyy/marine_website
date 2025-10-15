import Image from 'next/image';

export default function Hero() {
  return (
    <section className="pt-20 pb-10 md:pt-32 md:pb-24 relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row sm:flex-col items-center">
          {/* Left side - Content */}
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Excellence in Marine Services & Trading
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8">
            End‑to‑end services across marine, trade, and technology. Pick a single service or let us orchestrate the entire value chain—from engineering and procurement to e‑commerce enablement and after‑sales support.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <button className="bg-blue-600 text-white px-8 py-3 rounded-md hover:bg-blue-700 transition-colors text-lg font-medium">
                Our Services
              </button>
              <button className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-md hover:bg-blue-50 transition-colors text-lg font-medium">
                Contact Us
              </button>
            </div>
          </div>
          
          {/* Right side - Image */}
          <div className="md:w-1/2 w-full flex justify-end absolute left-210 top-85 transform -translate-y-1/2">
            <div className="relative w-full max-w-4xl h-[500px] md:h-[700px]">
              <Image
                src="/images/hero1.png"
                alt="Marine services"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
