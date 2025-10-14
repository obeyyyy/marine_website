'use client';

import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Story from '@/components/Story';
import RecentWork from '@/components/RecentWork';
import QuoteForm from '@/components/QuoteForm';
import Footer from '@/components/Footer';
export default function Home() {
  return (
    <main className="min-h-screen bg-[#EBEEFF] relative">
      
      <Navbar />
      <div className="relative z-1">
        <Hero />
        <Services />
        <Story />
        <RecentWork />
        <div className="w-full">
      <QuoteForm />
    </div>
    <Footer />
      </div>
    </main>
  );
}
