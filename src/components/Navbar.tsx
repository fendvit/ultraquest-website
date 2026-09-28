import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import { freezeScroll, unfreezeScroll } from '../lib/smoothScroll';

const NAV_LINKS = [
  { href: '#how-it-works', id: 'how-it-works', label: 'HOW IT WORKS' },
  { href: '#races', id: 'races', label: 'QUESTS' },
  { href: '#faq', id: 'faq', label: 'FAQ' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);

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

    const sections = ['how-it-works', 'races', 'faq'];
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  // Freeing the scroll synchronously (rather than in an effect) means a link tap can
  // close the menu and scroll to its section in the same handler.
  const closeMenu = () => {
    setMenuOpen(false);
    unfreezeScroll();
  };

  const toggleMenu = () => {
    setMenuOpen((open) => {
      if (open) unfreezeScroll();
      else freezeScroll();
      return !open;
    });
  };

  // Close on Escape, and if the viewport grows back to desktop while the menu is open.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeMenu();
    };
    const mq = window.matchMedia('(min-width: 768px)');
    const onBreakpoint = (e: MediaQueryListEvent) => {
      if (e.matches) closeMenu();
    };
    window.addEventListener('keydown', onKey);
    mq.addEventListener('change', onBreakpoint);
    return () => {
      window.removeEventListener('keydown', onKey);
      mq.removeEventListener('change', onBreakpoint);
      // Never leave the page frozen if the navbar unmounts while open.
      unfreezeScroll();
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
    closeMenu();
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
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled || menuOpen ? 'bg-background/80 backdrop-blur-md border-b border-white/5 py-0' : 'bg-transparent border-transparent py-4'}`}>
        <div className="max-w-7xl mx-auto px-5 sm:px-6 h-16 sm:h-20 flex items-center justify-between">
          <a href="#" onClick={(e) => scrollTo(e, '#')} className="flex items-center gap-2 group">
            <svg width="36" height="36" viewBox="0 0 48 48" fill="none" className="w-8 h-8 sm:w-9 sm:h-9 group-hover:scale-110 transition-transform">
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
            <span className="text-lg sm:text-xl font-semibold tracking-tighter">
              <span className="text-white">ULTRA</span><span className="text-primary">QUEST</span>
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
            {NAV_LINKS.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={(e) => scrollTo(e, link.href)}
                className={navLinkClass(link.id, '')}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <button
            type="button"
            onClick={toggleMenu}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            className="md:hidden -mr-2.5 p-2.5 text-white hover:text-primary transition-colors"
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/*
        Rendered as a sibling of <header>, not inside it: the header carries
        backdrop-blur, and a backdrop-filter makes an element the containing block
        for its position:fixed descendants — which would size this panel against
        the 64px header instead of the viewport.
      */}
      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            id="mobile-menu"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            /* touch-none keeps the page behind the panel from scrolling under a swipe. */
            className="md:hidden fixed inset-x-0 top-16 bottom-0 z-40 touch-none overscroll-none bg-background border-t border-white/5"
          >
            <div className="flex flex-col px-5 py-6 gap-1">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => scrollTo(e, link.href)}
                  className={`py-4 text-lg font-semibold tracking-wide border-b border-white/5 transition-colors ${
                    activeSection === link.id
                      ? 'text-white'
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  {link.label}
                </a>
              ))}

              <a
                href="https://play.google.com/store/apps/details?id=com.lovable.ultrarunquest&hl=cs"
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMenu}
                className="mt-6 bg-primary hover:bg-[#e65c00] text-white text-center px-6 py-4 rounded-md font-semibold uppercase tracking-wide transition-colors"
              >
                Get the app
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
}
