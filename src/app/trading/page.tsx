'use client';
import React from 'react';
import Navbar from '@/components/Navbar';
import { motion } from 'framer-motion';
import QuoteForm from '@/components/QuoteForm';
import Footer from '@/components/Footer';
export default function TradingPage() {
    return (
        <main className="min-h-screen bg-[#EBEEFF] w-full  relative overflow-hidden">
            <Navbar />
            {/* Hero Section */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="h-screen lg:h-[700px] w-full flex flex-col lg:flex-row items-center justify-center p-4 sm:p-6 md:p-8 lg:p-12 xl:px-16 bg-[#92CDE1]"
            >
                {/* Image Section */}
                <motion.div 
                    className="w-full lg:w-1/2 flex justify-center lg:justify-end lg:pr-4 xl:pr-12"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                >
                    <img 
                        src="/images/trading1.png" 
                        alt="Marine Services"
                        className="w-full max-w-md md:max-w-xl h-auto object-contain mt-0 lg:mt-50"
                    />
                </motion.div>
      
                {/* Text Content */}
                <div className="w-full lg:w-1/2 flex flex-col justify-center text-center lg:text-left mt-8 lg:mt-0 lg:pl-4 xl:pl-12">
                    <motion.h1 
                        className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-black leading-tight'
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                    >
                        <span className="block">Global Marine &</span>
                        <span className="text-blue-900">Industrial Trading</span>
                    </motion.h1>
                    
                    <motion.p 
                        className='text-base sm:text-lg md:text-xl font-light text-black mt-4 sm:mt-6 md:mt-8 max-w-xl mx-auto lg:mx-0'
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                    >
                        Vy Marine's trading division specializes in sourcing and supplying premium marine equipment, industrial materials, and general trading goods. With trusted partnerships across Asia and Europe, we ensure quality, transparency, and timely delivery.
                    </motion.p>
                </div>
            </motion.div>

            {/* Products Section */}
            <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="min-h-screen flex flex-col items-center justify-center p-4 sm:p-6 md:p-10"
            >
                <div className='w-full bg-[#EBEEFF] text-black text-center py-8 sm:py-10 md:py-12 px-4 sm:px-6 rounded-lg'>   
                    <h1 className='text-3xl sm:text-4xl md:text-5xl font-bold leading-tight'>
                        SUPPLYING EXCELLENCE ACROSS OCEANS
                    </h1>
                    <div className='border-b-4 border-amber-300 w-24 sm:w-32 mx-auto mt-3 sm:mt-4'></div>
                    <h2 className='text-lg sm:text-xl font-light mt-3 sm:mt-4 max-w-3xl mx-auto'>
                        Reliable sourcing, trusted partnership and quality products for every operation.
                    </h2>
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-8 sm:py-12"
                >
                    {[
                        { 
                            title: "MARINE EQUIPMENT & SPARE PARTS", 
                            description: "Pumps, valves, engines, electrical systems, deck fittings, navigation instruments.",
                            icon: "/images/trading2.png" 
                        },
                        { 
                            title: "INDUSTRIAL SUPPLIES", 
                            description: "Pipes, fasteners, safety gear, tools, lubricants.",
                            icon: "/images/trading3.png" 
                        },
                        { 
                            title: "MACHINERY & COMPONENTS", 
                            description: "Compressors, generators, automation systems, motors.",
                            icon: "/images/trading4.png" 
                        },
                        { 
                            title: "GENERAL TRADING", 
                            description: "High-demand industrial and commercial products based on client needs.",
                            icon: "/images/trading5.png" 
                        }
                    ].map((item, index) => (
                        <motion.div 
                            key={index} 
                            className="flex flex-col p-4 sm:p-6 bg-white/10 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
                            whileHover={{ y: -5 }}
                        >
                            <div className='flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-4'>
                                <img 
                                    src={item.icon} 
                                    alt={item.title}
                                    className="w-16 h-16 sm:w-20 sm:h-20 object-contain flex-shrink-0"
                                />
                                <div className="flex-1">
                                    <h2 className="text-lg sm:text-xl font-bold text-gray-900">{item.title}</h2>
                                    {item.description && (
                                        <p className="text-gray-700 mt-2 text-sm sm:text-base">{item.description}</p>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>

            {/* Trading Services Section */}
            <div className="w-full bg-[#F4F4F4] py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8">
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="max-w-7xl mx-auto"
            >
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">TRADING SERVICES</h2>
                    <div className="w-24 h-1 bg-amber-400 mx-auto"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        {
                            title: "STOCK & READY INVENTORY",
                            description: "Maintain a wide range of marine spares, OEM-parts and proprietary components in stock for rapid response to urgent requests.",
                            delay: 0.1,
                            icon: "📦"
                        },
                        {
                            title: "WAREHOUSING & DISTRIBUTION",
                            description: "Strategic warehousing in key ports and regions to minimize lead times and enable faster local delivery options.",
                            delay: 0.2,
                            icon: "🏭"
                        },
                        {
                            title: "MANUFACTURING & REPAIRS",
                            description: "Cost-effective refurbishment, reconditioning, and re-manufacturing of marine components to OEM standards.",
                            delay: 0.3,
                            icon: "⚙️"
                        },
                        {
                            title: "PORT LIAISON",
                            description: "Professional representation in shipyards and ports, handling all local regulations, documentation, and logistics.",
                            delay: 0.1,
                            icon: "⚓"
                        },
                        {
                            title: "EMERGENCY SUPPLY",
                            description: "24/7 emergency procurement and expedited delivery services to minimize vessel downtime during critical situations.",
                            delay: 0.2,
                            icon: "🚨"
                        },
                        {
                            title: "COMPLIANCE & CERTIFICATION",
                            description: "Expert support with classification society documentation, inspections, and certification to meet all regulatory requirements.",
                            delay: 0.3,
                            icon: "📋"
                        }
                    ].map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: service.delay }}
                            whileHover={{ 
                                y: -8,
                                boxShadow: '0 15px 30px -5px rgba(0, 0, 0, 0.08)',
                                borderColor: 'rgba(251, 191, 36, 0.3)'
                            }}
                            className="group bg-transparent p-8 rounded-2xl border-2 border-transparent transition-all duration-300 relative overflow-hidden"
                        >
                            <div className="absolute top-6 right-6 text-3xl  group-hover:opacity-20 transition-opacity duration-300">
                                {service.icon}
                            </div>
                            <div className="relative z-10">
                                <div className="w-12 h-1.5 bg-amber-400 mb-6 rounded-full"></div>
                                <h3 className="text-xl font-bold text-gray-900 mb-4 leading-tight">{service.title}</h3>
                                <p className="text-gray-600 leading-relaxed">{service.description}</p>
                                <div className="mt-6">
                                    <span className="inline-flex items-center text-amber-600 font-medium group-hover:translate-x-1 transition-transform duration-300">
                                        Learn more
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                        </svg>
                                    </span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </div>

            {/* Why Choose Us Section */}
            <div className="w-full bg-gradient-to-b from-[#F4F4F4] to-white py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="relative"
                >
                    {/* Decorative Elements */}
                    <div className="absolute -top-10 left-0 w-32 h-32 bg-amber-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
                    <div className="absolute -bottom-8 right-20 w-32 h-32 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
                    
                    <div className="relative">
                        <div className="text-center mb-20">
                            <span className="inline-block px-4 py-1.5 text-sm font-semibold text-amber-700 bg-amber-100 rounded-full mb-4">
                                OUR STRENGTHS
                            </span>
                            <h2 className="text-5xl font-bold text-gray-900 mb-6">Why Choose Vy Marine</h2>
                            <div className="w-24 h-1.5 bg-gradient-to-r from-amber-400 to-amber-600 mx-auto rounded-full"></div>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                            {[
                                {
                                    icon: "🤝",
                                    title: "Family Values, Professional Excellence",
                                    description: "We combine the trust and care of a family business with the highest professional standards in marine trading.",
                                    color: "text-blue-600"
                                },
                                {
                                    icon: "🌍",
                                    title: "Global Network",
                                    description: "Access to an extensive network of trusted suppliers worldwide, ensuring quality and competitive pricing.",
                                    color: "text-emerald-600"
                                },
                                {
                                    icon: "⚓",
                                    title: "Marine Expertise",
                                    description: "Decades of combined experience in marine engineering, procurement, and logistics solutions.",
                                    color: "text-amber-600"
                                }
                            ].map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-50px" }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className="group relative bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-500 overflow-hidden"
                                >
                                    <div className={`absolute top-0 left-0 w-1 h-full ${item.color.replace('text', 'bg')} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                                    <div className={`text-5xl mb-6 ${item.color} transition-transform duration-500 group-hover:scale-110`}>
                                        {item.icon}
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-gray-800 transition-colors duration-300">
                                        {item.title}
                                    </h3>
                                    <p className="text-gray-600 leading-relaxed">
                                        {item.description}
                                    </p>
                                </motion.div>
                            ))}
                        </div>

                        <motion.div 
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="mt-24 relative"
                        >
                            <div className="relative z-10 max-w-4xl mx-auto bg-gradient-to-r from-blue-50 to-amber-50 p-12 rounded-3xl shadow-lg">
                                <div className="absolute -top-6 -left-6 w-12 h-12 bg-amber-400 rounded-full opacity-20"></div>
                                <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-blue-400 rounded-full opacity-10"></div>
                                
                                <div className="relative z-10">
                                    <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Our Commitment to Excellence</h3>
                                    <div className="space-y-6 text-gray-700">
                                        <p className="leading-relaxed">
                                            At Vy Marine, our strength lies in the perfect balance between family values and professional excellence. As a family-run business, we approach every partnership with honesty, accountability, and a commitment to long-term growth — not just transactions.
                                        </p>
                                        <p className="leading-relaxed">
                                            Our team combines decades of experience in marine engineering, trading, and procurement with an extensive network of trusted global suppliers. This allows us to deliver competitive prices without compromising on quality, no matter the size or urgency of your requirement.
                                        </p>
                                        <p className="leading-relaxed font-medium">
                                            Our goal is simple: to make every client feel confident that when they work with Vy Marine, they are working with a partner who understands their world — and delivers solutions that keep operations moving smoothly.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
            
        </div>
        <QuoteForm title='GET IN TOUCH WITH US TODAY' bgColor='bg-[#3CADC482]'/>
            <Footer />
        </main>
    );
}
