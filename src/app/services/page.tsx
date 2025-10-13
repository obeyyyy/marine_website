'use client';

import { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

// Animation variants
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.8,
      Easing: [0.16, 1, 0.3, 1],
    },
  },
};

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      Easing: "easeInOut",
    },
  },
};

type Service = {
  title: string;
  description: string;
  icon: string;
};

const services: Service[] = [
  {
    title: 'Marine Construction',
    description: 'Expert marine construction services including docks, seawalls, and waterfront structures built to last.',
    icon: '⛵',
  },
  {
    title: 'Boat Repair',
    description: 'Comprehensive boat repair and maintenance services to keep your vessel in top condition.',
    icon: '🔧',
  },
  {
    title: 'Dock Maintenance',
    description: 'Professional dock maintenance and repair services to ensure safety and longevity of your waterfront property.',
    icon: '⚓',
  },
  {
    title: 'Marine Consulting',
    description: 'Expert advice and consulting services for all your marine construction and maintenance needs.',
    icon: '📝',
  },
];

const DottedLinesBackground: React.FC = () => (
  // The DottedLinesBackground wrapper should not use max-w-7xl here, 
  // but let's assume the component consuming it has the wrapper (as in your last solution).
  // I'll update the properties inside.
  <div className="absolute inset-0 pointer-events-none z-0">
    
    {/* 1. Top-Left Dotted Border Box (around the image) */}
    <div 
      className="absolute top-15 left-10 h-[90%] w-[47%] border-t-[3px]
                border-dashed border-[#A999D0]
                 opacity-70 hidden lg:block" 
    />

    {/* 2. Vertical Separator Line */}
    <div 
      className="absolute top-[9%] left-1/2 h-[85%] w-0 
                 border-l-[3px] border-dashed border-[#A999D0] 
                 opacity-70 hidden lg:block"
      style={{
        // Centers the line on the division between columns
        transform: 'translateX(-50%)', 
      }}
    />

    {/* 3. Bottom-Right L-Shaped Line */}
    
    {/* Horizontal Line Segment (The FIX) */}
    <div 
      // Start just past the vertical separator (left-1/2) and extend to the right edge.
      className="absolute bottom-10 left-1/2 w-[60%] h-0 
                 border-b-[3px] border-dashed border-[#A999D0] 
                 opacity-70 hidden lg:block"
      
    />

    {/* Vertical L-Segment (The part that connects the horizontal line upwards) */}
    {/* Adjust top/bottom to control its length and position */}
   
  </div>
);

export default function ServicesPage() {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  useEffect(() => {
    if (isInView) {
      controls.start('show');
    }
  }, [controls, isInView]);

  return (
    <main className="min-h-screen bg-[#EBEEFF] w-full  relative overflow-hidden">
      <Navbar />
      
      {/* Hero Section with Scroll Animation */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative h-screen w-full"
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/30 z-10"></div>
        <img 
          src="/images/services1.png" 
          alt="Marine Services"
          className="w-full h-full object-cover"
        />
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="absolute inset-0 flex flex-col items-center justify-center z-20 px-4"
        >
          <motion.div 
            variants={{
              hidden: { opacity: 0, y: 20 },
              show: { 
                opacity: 1, 
                y: 0,
                transition: {
                  duration: 0.8,
                  ease: [0.16, 1, 0.3, 1],
                },
              },
            }}
            initial="hidden"
            animate="show"
            className="text-center max-w-5xl mx-auto"
          >
            <motion.h1 
              variants={item}
              className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 drop-shadow-2xl leading-tight"
            >
              Expert Marine Engineering Solutions
            </motion.h1>
            <motion.p 
              variants={item}
              className="text-xl md:text-2xl lg:text-3xl text-gray-100 mb-12 max-w-4xl mx-auto font-light"
            >
              Delivering excellence in marine and offshore project engineering
            </motion.p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ 
              opacity: [0, 1, 1],
              y: [20, 0, 10],
            }}
            transition={{ 
              delay: 1.5,
              duration: 2,
              repeat: Infinity,
              repeatType: 'reverse'
            }}
            className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
          >
            <button 
              onClick={() => {
                const servicesSection = document.getElementById('services-section');
                servicesSection?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="text-white hover:text-cyan-300 transition-colors duration-300"
              aria-label="Scroll down to services"
            >
              <svg 
                className="w-12 h-12" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth="1.5" 
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                ></path>
              </svg>
            </button>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Services Section */}
      <motion.div 
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={container}
        id="services-section" 
        className="bg-gradient-to-b from-[#92CDE1] to-[#EBF8FC] py-20 scroll-mt-20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={item} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-cyan-700 mb-4">Our Services</h2>
            <motion.div 
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="w-24 h-1 bg-cyan-500 mx-auto"
            />
          </motion.div>

          <motion.div 
            variants={container}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          >
            <motion.div 
              variants={item}
              className="relative group overflow-hidden rounded-2xl shadow-xl"
              whileHover={{ scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <motion.img 
                className="w-full h-full object-cover"
                src="/images/services-2.png" 
                alt="Marine Projects Engineering"
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.7 }}
              />
            </motion.div>
            
            <motion.div variants={item} className="space-y-6">
              <motion.h1 
                variants={fadeInUp}
                className="text-4xl font-bold text-gray-900"
              >
                Marine Projects Engineering
              </motion.h1>
              <motion.p 
                variants={fadeInUp}
                className="text-lg text-cyan-800 leading-relaxed"
              >
                At Vy Marine, we provide end-to-end project engineering solutions for marine and offshore operations.
              </motion.p>
              
              <motion.div variants={fadeInUp} className="space-y-4 mt-8">
                <h3 className="text-xl font-semibold text-gray-800">Our services include:</h3>
                <motion.ul variants={container} className="space-y-3">
                  {[
                    "Feasibility Studies & Design Reviews – Evaluating project viability, safety, and cost-effectiveness.",
                    "Vendor Selection & Management – Identifying and managing qualified suppliers for critical equipment.",
                    "Owner's Engineering – Technical support for refits, retrofits, and new builds.",
                    "On-site Supervision & Quality Control – Monitoring every stage from concept to completion."
                  ].map((service, index) => (
                    <motion.li 
                      key={index} 
                      variants={item}
                      className="flex items-start"
                    >
                      <svg className="h-5 w-5 text-cyan-600 mt-1 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700">{service}</span>
                    </motion.li>
                  ))}
                </motion.ul>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* NEW CODE for the Equipment & Machinery Trading Section */}



    // Equipment & Machinery Trading Section - Responsive
    <motion.div 
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, amount: 0.2 }}
    variants={container}
    className="relative w-full py-12 md:py-20 px-4 sm:px-6 lg:px-8 scroll-mt-16"
    >
    <DottedLinesBackground />

    <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 relative z-10">
        {/* Image Section */}
        <motion.div 
        variants={item} 
        className="relative flex justify-center items-center px-4 sm:px-0"
        >
        <img 
            src="/images/services-3.png"
            alt="Equipment & Machinery Trading" 
            className="w-full max-w-lg h-auto rounded-xl shadow-lg"
            loading="lazy"
        />

        {/* Vessels Button */}
        <motion.div 
            variants={item}
            className="absolute -bottom-4 -right-4 md:-bottom-0 md:-right-18 
                    flex items-center bg-white p-1.5 md:p-2 rounded-full 
                    shadow-xl transition-all duration-300 hover:scale-105"
        >
            <div className="w-16 h-16 md:w-20 md:h-20">
            <img 
                src="images/vessels.png" 
                alt="View our Vessels" 
                className="w-full h-full object-cover rounded-full"
            />
            </div>
        </motion.div>
        </motion.div>

        {/* Text Content */}
        <div className="pt-6 lg:pt-10 lg:pl-4 xl:pl-10">
        <motion.h2 
            variants={fadeInUp} 
            className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4 md:mb-6"
        >
            Equipment & Machinery Trading
        </motion.h2>

        <motion.p 
            variants={fadeInUp} 
            className="text-base sm:text-lg text-gray-700 leading-relaxed mb-4 md:mb-6"
        >
            We specialize in the supply and sourcing of marine equipment, machinery, and spare parts for vessels, ports, and offshore platforms.
        </motion.p>

        <motion.h3 
            variants={fadeInUp} 
            className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3 md:mb-4"
        >
            Our trading portfolio includes:
        </motion.h3>
        
        <motion.ul 
            variants={container} 
            className="space-y-2 sm:space-y-3 mb-6 text-gray-700"
        >
            {[
            'Pumps, valves, compressors, and hydraulic systems', 
            'Main and auxiliary engine parts', 
            'Electrical, deck, and safety equipment', 
            'Instrumentation, navigation systems, and consumables'
            ].map((itemText, index) => (
            <motion.li 
                key={index} 
                variants={item} 
                className="flex items-start text-sm sm:text-base"
            >
                <svg 
                className="h-4 w-4 sm:h-5 sm:w-5 text-cyan-600 mt-1 mr-2 flex-shrink-0" 
                fill="currentColor" 
                viewBox="0 0 20 20"
                >
                <path 
                    fillRule="evenodd" 
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" 
                    clipRule="evenodd" 
                />
                </svg>
                <span>{itemText}</span>
            </motion.li>
            ))}
        </motion.ul>

        <motion.p 
            variants={fadeInUp} 
            className="text-base sm:text-lg text-gray-700 leading-relaxed"
        >
            With a trusted global network of OEMs and certified vendors, we ensure quick turnaround times, genuine parts, and tailored sourcing.
        </motion.p>
        </div>
    </div>
    </motion.div>

    {/* E-Commerce Solution Section */}
    <motion.div 
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, amount: 0.2 }}
    variants={container}
    className="relative w-full py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-white"
    >
    <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-cyan-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50"></div>
    </div>

    <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-12">
        <motion.h2 
            variants={fadeInUp}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4"
        >
            E-Commerce Solutions
        </motion.h2>
        <motion.div 
            variants={fadeInUp}
            className="w-20 h-1 bg-blue-600 mx-auto rounded-full"
        ></motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Column - Image */}
        <motion.div 
            variants={item}
            className="relative rounded-2xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-transform duration-500"
        >
            <img
            src="/images/e-commerce.jpg" // Replace with your image
            alt="Marine E-Commerce Platform"
            className="w-full h-auto"
            loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-6 text-white">
            <h3 className="text-2xl font-bold mb-2">Digital Procurement Made Simple</h3>
            <p className="text-blue-100">Streamlined. Transparent. Efficient.</p>
            </div>
        </motion.div>

        {/* Right Column - Content */}
        <motion.div variants={item} className="space-y-6">
            <motion.p 
            variants={fadeInUp}
            className="text-lg md:text-xl text-gray-700 leading-relaxed"
            >
            Our E-Commerce platform brings marine trading online — simplifying procurement through a digital interface for faster quoting, order tracking, and vendor communication.
            </motion.p>

            <motion.div variants={fadeInUp} className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-800">Key features include:</h3>
            <ul className="space-y-3">
                {[
                'B2B storefronts for spare parts and equipment',
                'Real-time RFQ management for easy quote submissions',
                'Inventory transparency with up-to-date catalogues',
                'Secure payment and logistics tracking'
                ].map((feature, index) => (
                <motion.li 
                    key={index} 
                    variants={item}
                    className="flex items-start"
                >
                    <svg 
                    className="h-5 w-5 text-blue-600 mt-1 mr-3 flex-shrink-0" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                    >
                    <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M5 13l4 4L19 7" 
                    />
                    </svg>
                    <span className="text-gray-700">{feature}</span>
                </motion.li>
                ))}
            </ul>
            </motion.div>

            <motion.p 
            variants={fadeInUp}
            className="text-gray-600 italic border-l-4 border-blue-500 pl-4 py-2 bg-blue-50 rounded-r"
            >
            Designed for efficiency and transparency, Vy Marine's e-commerce solution connects clients and suppliers in a smarter, faster way.
            </motion.p>

            <motion.div 
            variants={fadeInUp}
            className="pt-4"
            >
            <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-300 flex items-center">
                Contact Us
                <svg 
                className="w-5 h-5 ml-2" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
                >
                <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M14 5l7 7m0 0l-7 7m7-7H3" 
                />
                </svg>
            </button>
            </motion.div>
        </motion.div>
        </div>
    </div>
    </motion.div>

      {/* CTA Section */}
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20 overflow-hidden"
      >
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-center"></div>
        </div>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        >
          <motion.h2 
            variants={fadeInUp}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            Ready to Start Your Project?
          </motion.h2>
          <motion.p 
            variants={fadeInUp}
            className="text-xl mb-8 max-w-2xl mx-auto text-blue-100"
          >
            Contact us today for a free consultation and let's discuss how we can bring your marine project to life.
          </motion.p>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="bg-white text-blue-700 font-semibold py-3 px-8 rounded-lg shadow-lg"
          >
            Get a Free Quote
          </motion.button>
        </motion.div>
      </motion.div>

      <Footer />
    </main>
  );
}