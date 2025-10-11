'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

export default function QuoteForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  return (
    <div className="max-w-full mx-auto bg-[#3CADC482] rounded-lg overflow-hidden shadow-lg">
      {/* Header */}
      <div className="mx-auto text-black py-12 text-center">
        <h2 className="w-full text-4xl font-bold">NEED A QUOTE ON EQUIPMENT OR SPARES?</h2>
        <div className="mx-auto w-200 relative flex py-5 items-center">
          <div className="flex-grow border-t border-4 border-purple-600"></div>
        </div> 
      </div>
      
      {/* Form */}
      <div className="w-full md:w-2/3 lg:w-1/2 mx-auto px-6 md:px-0 pb-12">
        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="relative">
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-1 py-3 bg-transparent border-b-2 border-black focus:outline-none text-lg placeholder-black placeholder-opacity-100"
                placeholder="First Name"
                required
              />
            </div>

            <div className="relative">
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-1 py-3 bg-transparent border-b-2 border-black focus:outline-none text-lg placeholder-black placeholder-opacity-100"
                placeholder="Last Name"
                required
              />
            </div>

            <div className="relative">
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-1 py-3 bg-transparent border-b-2 border-black focus:outline-none text-lg placeholder-black placeholder-opacity-100"
                placeholder="Email Address"
                required
              />
            </div>

            <div className="relative">
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-1 py-3 bg-transparent border-b-2 border-black focus:outline-none text-lg placeholder-black placeholder-opacity-100"
                placeholder="Phone Number"
              />
            </div>

            <div className="md:col-span-2 relative">
              <textarea
                id="message"
                name="message"
                rows={1}
                value={formData.message}
                onChange={handleChange}
                className="w-full px-1 py-3 bg-transparent border-b-2 border-black focus:outline-none text-lg placeholder-black placeholder-opacity-100 resize-none"
                placeholder="Tell us what you need (RFQ / Scope / Part List) *?"
                required
              ></textarea>
            </div>
          </div>

          <div className="pt-4">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="w-full bg-purple-600 text-black text-lg py-4 px-6 rounded-md font-medium hover:bg-purple-700 transition-colors"
            >
              Send Message
            </motion.button>
          </div>
        </form>
      </div>
    </div>
  );
}