 'use client';

import { motion, useInView, Variants } from 'framer-motion';
import { useRef } from 'react';
import Link from 'next/link';

const cardVariants: Variants = {
  offscreen: {
    y: 50,
    opacity: 0
  },
  onscreen: (i: number) => ({
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      bounce: 0.4,
      duration: 0.8,
      delay: i * 0.1
    }
  }),
  hover: {
    y: -10,
    boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
    transition: {
      type: 'spring',
      stiffness: 300,
      damping: 10
    }
  }
};

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      when: 'beforeChildren'
    }
  }
};

const services = [
  {
    icon: <img src={"/images/service-1.png"} className="w-8 h-8" />,
    title: 'Green Solutions',
    description: 'Digitalization and decarbonization solutions for sustainable maritime operations.',
    href: '/green-solutions',
  },
  {
    icon: <img src={"/images/service-2.png"} className="w-8 h-8" />,
    title: 'Optimization & Energy Efficiency',
    description: 'Maximize vessel performance while minimizing fuel consumption.',
    href: '/optimization-energy-efficiency',
  },
  {
    icon: <img src={"/images/service-3.png"} className="w-8 h-8" />,
    title: 'Dry Docking Solutions & Project Management',
    description: 'Provide dry dock planning, yard selection, and full project supervision.',
    href: '/dry-docking-solutions',
  },
  {
    icon: <img src={"/images/service-4.png"} className="w-8 h-8" />,
    title: 'Ship Repairs & Supplies',
    description: 'Offer ship repair services, emergency maintenance, and spare parts support.',
    href: '/ship-repairs-supplies',
  },
  {
    icon: <img src={"/images/service-5.png"} className="w-8 h-8" />,
    title: 'Technical Consultancy',
    description: 'Provide expert consultancy on vessel maintenance, regulatory compliance, and performance optimization.',
    href: '/technical-consultancy',
  },
];

type Service = typeof services[0];

function ServiceCard({
  service,
  index,
  isLast,
}: {
  service: Service;
  index: number;
  isLast: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <motion.div
      ref={ref}
      className={`flex flex-col h-full p-6 bg-gray-50 rounded-2xl border border-white/60 shadow-sm ${
        isLast ? 'md:col-span-2 md:max-w-sm md:mx-auto' : ''
      }`}
      initial="offscreen"
      animate={isInView ? "onscreen" : "offscreen"}
      variants={cardVariants}
      custom={index}
      whileHover="hover"
    >
      <motion.div 
        className="w-16 h-16 bg-[#9F32E726] rounded-3xl flex items-center justify-center mb-4"
        whileHover={{ scale: 1.05, rotate: 5 }}
        transition={{ type: 'spring', stiffness: 400, damping: 10 }}
      >
        {service.icon}
      </motion.div>
      <h3 className="text-lg font-extrabold text-black mb-2">{service.title}</h3>
      <p className="text-sm text-gray-600 flex-1">{service.description}</p>
      <div className="mt-6">
        <Link
          href={service.href}
          className="inline-flex items-center px-4 py-2 text-sm font-semibold text-blue-700 bg-white rounded-full shadow-sm hover:bg-blue-50 transition-colors"
        >
          Learn more
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="ml-2 h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </motion.div>
  );
}

export default function Services() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section className="py-20 bg-[#EBEEFF] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <motion.div 
            className="w-24 h-1 bg-blue-600 mx-auto rounded-full"
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{ delay: 0.2, duration: 0.5, ease: 'easeOut' }}
          />
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          ref={ref}
        >
          {services.map((service, index) => (
            <ServiceCard
              key={service.title}
              service={service}
              index={index}
              isLast={index === services.length - 1}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
