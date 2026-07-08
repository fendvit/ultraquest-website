import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Sports from './components/Sports';
import Expedition from './components/Expedition';
import AppShowcase from './components/AppShowcase';
import HowItWorks from './components/HowItWorks';
import FeaturedRaces from './components/FeaturedRaces';
import RealChallenges from './components/RealChallenges';
import CommunityFeed from './components/CommunityFeed';
import Premium from './components/Premium';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

import { useEffect } from 'react';
import Lenis from 'lenis';

function App() {
  useEffect(() => {
    const lenis = new Lenis();
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
    return () => lenis.destroy();
  }, []);
  return (
    <div className="min-h-screen bg-background text-white selection:bg-primary/30">
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Sports />
        <AppShowcase />
        <Expedition />
        <HowItWorks />
        <FeaturedRaces />
        <RealChallenges />
        <CommunityFeed />
        <Premium />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}

export default App;
