import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import HowItWorks from '../components/HowItWorks';
import MatchingShowcase from '../components/MatchingShowcase';
import Features from '../components/Features';
import MobilePreview from '../components/MobilePreview';
import Stats from '../components/Stats';
import CtaSection from '../components/CtaSection';
import Footer from '../components/Footer';

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <HowItWorks />
        <MatchingShowcase />
        <Features />
        <MobilePreview />
        <Stats />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
