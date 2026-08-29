'use client';

import Navbar from '@/components/Navbar';
import CinematicBackground from '@/components/CinematicBackground';
import Hero from '@/components/Hero';
import Stats from '@/components/Stats';
import Services from '@/components/Services';
import Story from '@/components/Story';
import RecentWork from '@/components/RecentWork';
import QuoteForm from '@/components/QuoteForm';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="relative min-h-screen bg-navy-950">
      {/* Fixed cinematic video that stays behind all content */}
      <CinematicBackground />

      {/* All content scrolls over the fixed video */}
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <Stats />
        <Services />
        <Story />
        <RecentWork />
        <QuoteForm />
        <Footer />
      </div>
    </main>
  );
}
