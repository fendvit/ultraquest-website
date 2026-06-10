import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Expedition from './components/Expedition';
import AppShowcase from './components/AppShowcase';
import HowItWorks from './components/HowItWorks';
import FeaturedRaces from './components/FeaturedRaces';
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
        <AppShowcase />
        <Expedition />
        <HowItWorks />
        <FeaturedRaces />
        <CommunityFeed />
        <Premium />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}

export default App;
