'use client';

import { motion, useInView, Variants } from 'framer-motion';
import { useRef } from 'react';

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
    icon: <img src={"/images/service-1.png"} className="w-8 h-8 " />,
    title: 'MARINE PROJECTS ENGINEERING',
    description: 'Feasibility, design reviews, vendor selection, and owner’s engineering for refits, retrofits, and new builds.'
  },
  {
    icon:  <img src={"/images/service-2.png"} className="w-8 h-8 "/>,
    title: 'EQUIPMENT & MACHINERY TRADING',
    description: 'Sourcing, QA, and logistics for pumps, valves, deck machinery, safety systems, and spares—OEM or equivalent.'

  },
  {
    icon:  <img src={"/images/service-3.png"} className="w-8 h-8 " />,
    title: 'E-COMMERCE SOLUTIONS',
    description: 'B2B storefronts, RFQ flows, and catalogue management to bring your inventory online with real‑time quoting.'
  },
  {
    icon:  <img src={"/images/service-4.png"} className="w-8 h-8 " />,
    title: 'SERVICE BROKEAGE',
    description: 'Connect with vetted surveyors, repair yards, and technicians worldwide—booked and coordinated by us.'
  },
  {
    icon:  <img src={"/images/service-5.png"} className="w-8 h-8 " />,
    title: 'GENERAL TRADING',
    description: 'Beyond marine: industrial consumables, tools, and engineered products for energy, utilities, and manufacturing.'
  },
  {
    icon:  <img src={"/images/service-6.png"} className="w-8 h-8 " />,
    title: 'COMPLIANCE & DOCUMENTATION',
    description: 'INCOTERMS, HS codes, export control checks, and paperwork handled correctly and on time.'
  }
];

function ServiceCard({ service, index }: { service: typeof services[0], index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <motion.div
      ref={ref}
      className="p-6 bg-gray-50 rounded-lg"
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
      <h3 className="text-xl font-extrabold text-black mb-2">{service.title}</h3>
      <p className="text-gray-600">{service.description}</p>
    </motion.div>
  );
}

export default function Services() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section className="py-16 overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
          <motion.div 
            className="w-20 h-1 bg-blue-600 mx-auto"
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{ delay: 0.2, duration: 0.5, ease: 'easeOut' }}
          />
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          ref={ref}
        >
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
