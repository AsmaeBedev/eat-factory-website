import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Menu', href: '#menu' },
    { label: 'Le Lieu', href: '#lieu' },
    { label: 'Services', href: '#services' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-[#F5F3F0]/95 backdrop-blur-md border-b border-[#E5E2DC] shadow-sm'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <a href="#" className="flex items-center gap-3 group">
              <div className="w-9 h-9 bg-[#D97706] flex items-center justify-center">
                <span className="font-display text-white text-xs font-bold tracking-widest leading-none">EF</span>
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-display text-[#111110] text-lg font-bold tracking-widest leading-none">
                  EAT FACTORY
                </span>
                <span className="font-body text-[#6B7280] text-[9px] tracking-[0.25em] uppercase leading-none mt-0.5">
                  El Jadida
                </span>
              </div>
            </a>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-10">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="font-body text-[#111110] text-sm font-medium tracking-widest uppercase hover:text-[#D97706] transition-colors duration-200 relative group"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#D97706] group-hover:w-full transition-all duration-300" />
                </a>
              ))}
            </nav>

            {/* CTA Button Desktop */}
            <a
              href="tel:0660478765"
              className="hidden lg:flex items-center gap-2 bg-[#D97706] text-white font-body text-xs font-semibold tracking-[0.15em] uppercase px-6 py-3 hover:bg-[#B45309] transition-colors duration-200"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 13.27a19.79 19.79 0 01-3.07-8.68A2 2 0 012 2.5h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 10.1a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/>
              </svg>
              Reserver
            </a>

            {/* Hamburger */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden flex flex-col gap-1.5 p-2 group"
              aria-label="Menu"
            >
              <motion.span
                animate={{ rotate: menuOpen ? 45 : 0, y: menuOpen ? 8 : 0 }}
                className="block w-7 h-0.5 bg-[#111110] origin-center transition-all"
              />
              <motion.span
                animate={{ opacity: menuOpen ? 0 : 1, x: menuOpen ? 10 : 0 }}
                className="block w-5 h-0.5 bg-[#111110] transition-all"
              />
              <motion.span
                animate={{ rotate: menuOpen ? -45 : 0, y: menuOpen ? -8 : 0 }}
                className="block w-7 h-0.5 bg-[#111110] origin-center transition-all"
              />
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-40 bg-[#F5F3F0] flex flex-col pt-24 px-8"
          >
            <nav className="flex flex-col gap-2">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.07 + 0.1, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  onClick={() => setMenuOpen(false)}
                  className="font-display text-[#111110] text-5xl font-bold tracking-tight border-b border-[#E5E2DC] py-5 hover:text-[#D97706] transition-colors"
                >
                  {link.label}
                </motion.a>
              ))}
            </nav>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mt-12"
            >
              <a
                href="tel:0660478765"
                className="inline-flex items-center gap-3 bg-[#D97706] text-white font-body text-sm font-semibold tracking-widest uppercase px-8 py-4"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 13.27a19.79 19.79 0 01-3.07-8.68A2 2 0 012 2.5h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 10.1a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/>
                </svg>
                06 60 47 87 65
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
