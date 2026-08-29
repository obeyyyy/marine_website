'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Clock, ShieldCheck, MessageSquare, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';

interface QuoteFormProps {
  bgColor?: string;
  title?: string;
}

const inputClass =
  'w-full border-b border-white/15 bg-transparent px-0 py-3.5 text-sm text-white placeholder-white/30 outline-none transition-all duration-300 focus:border-accent-400';

export default function QuoteForm({
  title = 'Need a quote on equipment or spares?',
}: QuoteFormProps) {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    setError('');
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const result = await response.json().catch(() => ({}));
      if (!response.ok) throw new Error(result.error || 'Unable to send your enquiry.');
      setStatus('success');
    } catch (submitError) {
      console.error('Contact form submission failed:', submitError);
      setError(submitError instanceof Error ? submitError.message : 'Unable to send your enquiry. Please try again.');
      setStatus('error');
    }
  };

  return (
    <section className="relative py-24 overflow-hidden">
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="bg-white/5 border border-white/10 overflow-hidden grid grid-cols-1 lg:grid-cols-5"
        >
          {/* Left info panel */}
          <div className="relative lg:col-span-2 bg-white/5 p-10 lg:p-12 text-white overflow-hidden border-b lg:border-b-0 lg:border-r border-white/10">
            <div className="relative">
              <p className="text-xs font-medium tracking-[0.15em] uppercase text-accent-400 mb-5">
                Request a quote
              </p>
              <h2 className="font-display text-2xl lg:text-3xl font-bold leading-snug mb-6">
                {title}
              </h2>
              <p className="text-sm text-white/60 leading-relaxed mb-10">
                Send us your RFQ, scope of work or part list — our team will come back to you with
                a clear, structured proposal.
              </p>

              <ul className="space-y-5">
                {[
                  { icon: Clock, text: 'Response within 24 hours' },
                  { icon: ShieldCheck, text: 'ISO-certified partner network' },
                  { icon: MessageSquare, text: 'Direct line to our engineers' },
                ].map((item) => (
                  <li key={item.text} className="flex items-center gap-3 text-sm text-white/75">
                    <span className="w-9 h-9 bg-white/5 flex items-center justify-center shrink-0">
                      <item.icon className="h-4 w-4 text-accent-400" />
                    </span>
                    {item.text}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3 p-10 lg:p-12">
            <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                  <div>
                    <label htmlFor="firstName" className="block text-xs font-medium uppercase tracking-wider text-white/50 mb-2">
                      First name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      className={inputClass}
                      placeholder="John"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-xs font-medium uppercase tracking-wider text-white/50 mb-2">
                      Last name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      className={inputClass}
                      placeholder="Smith"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-xs font-medium uppercase tracking-wider text-white/50 mb-2">
                      Email address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={inputClass}
                      placeholder="john@company.com"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-xs font-medium uppercase tracking-wider text-white/50 mb-2">
                      Phone number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className={inputClass}
                      placeholder="+971 ..."
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-medium uppercase tracking-wider text-white/50 mb-2">
                    Your enquiry
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className={`${inputClass} resize-none`}
                    placeholder="Tell us what you need — RFQ, scope of work, or part list"
                    required
                  />
                </div>

                <motion.button
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  type="submit"
                  disabled={status === 'sending'}
                  aria-busy={status === 'sending'}
                  className={`group w-full inline-flex items-center justify-center gap-2 text-sm font-semibold tracking-wide py-4 px-6 transition-colors duration-300 disabled:cursor-wait ${status === 'success' ? 'bg-emerald-500 text-white' : status === 'error' ? 'bg-red-500/90 text-white hover:bg-red-500' : 'bg-white text-navy-950 hover:bg-white/90'}`}
                >
                  {status === 'sending' ? 'Sending…' : status === 'success' ? 'Email sent successfully' : 'Send message'}
                  {status === 'sending' ? <Loader2 className="h-4 w-4 animate-spin" /> : status === 'success' ? <CheckCircle2 className="h-4 w-4" /> : <Send className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />}
                </motion.button>
                {status === 'error' && (
                  <p role="alert" className="flex items-start gap-2 text-sm text-red-300"><AlertCircle className="h-4 w-4 mt-0.5 shrink-0" />{error}</p>
                )}
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
