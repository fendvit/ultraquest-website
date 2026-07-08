import { useState, useEffect } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, { rootMargin: '-20% 0px -80% 0px' });

    const sections = ['how-it-works', 'races', 'premium', 'faq'];
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  const navLinkClass = (id: string, customColor: string = '') => {
    const isActive = activeSection === id;
    const baseColor = customColor || 'text-gray-300 hover:text-white';
    const activeColor = customColor ? customColor : 'text-white';
    
    return `relative transition-colors py-1 ${
      isActive ? `${activeColor} after:scale-x-100` : `${baseColor} after:scale-x-0`
    } after:content-[''] after:absolute after:w-full hover:after:scale-x-100 after:h-[2px] after:bottom-0 after:left-0 after:bg-primary after:origin-bottom-left after:transition-transform after:duration-300`;
  };

  const scrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    if (id === '#') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const element = document.querySelector(id);
    if (element) {
      window.scrollTo({
        top: element.getBoundingClientRect().top + window.scrollY - 80,
        behavior: 'smooth'
      });
    }
  };
  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-background/80 backdrop-blur-md border-b border-white/5 py-0' : 'bg-transparent border-transparent py-4'}`}>
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <a href="#" onClick={(e) => scrollTo(e, '#')} className="flex items-center gap-2 group">
          <svg width="36" height="36" viewBox="0 0 48 48" fill="none" className="group-hover:scale-110 transition-transform">
            <defs>
              <linearGradient id="peakGradient" x1="0%" y1="100%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#ff6600" stopOpacity="0.2"></stop>
                <stop offset="100%" stopColor="#ff6600"></stop>
              </linearGradient>
              <linearGradient id="trailGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#ff6600" stopOpacity="0"></stop>
                <stop offset="50%" stopColor="#ff6600"></stop>
                <stop offset="100%" stopColor="#ff6600" stopOpacity="0.5"></stop>
              </linearGradient>
            </defs>
            <path d="M24 8L40 38H8L24 8Z" fill="url(#peakGradient)" opacity="1"></path>
            <path d="M24 8L30 20H18L24 8Z" fill="#ff6600" opacity="1"></path>
            <path d="M6 42C10 38 14 36 18 35C22 34 26 35 30 34C34 33 38 30 42 28" stroke="url(#trailGradient)" strokeWidth="3" strokeLinecap="round" fill="none"></path>
            <circle cx="30" cy="34" r="3" fill="#ff6600"></circle>
          </svg>
          <span className="text-xl font-semibold tracking-tighter">
            <span className="text-white">ULTRA</span><span className="text-primary">QUEST</span>
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          <a href="#how-it-works" onClick={(e) => scrollTo(e, '#how-it-works')} className={navLinkClass('how-it-works')}>HOW IT WORKS</a>
          <a href="#races" onClick={(e) => scrollTo(e, '#races')} className={navLinkClass('races')}>QUESTS</a>
          <a href="#premium" onClick={(e) => scrollTo(e, '#premium')} className={navLinkClass('premium', 'text-primary hover:text-[#e65c00]')}>PREMIUM</a>
          <a href="#faq" onClick={(e) => scrollTo(e, '#faq')} className={navLinkClass('faq')}>FAQ</a>
        </nav>
      </div>
    </header>
  );
}
