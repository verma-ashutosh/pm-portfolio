import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import { personalInfo } from '../data/portfolioData';
import { Sun, Moon, Menu, X, FileText, ArrowUpRight } from 'lucide-react';

export const Navbar = ({ onOpenResume }) => {
  const { theme, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('about');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      const sections = ['about', 'metrics', 'projects', 'experience', 'skills', 'beyond-product', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Beyond Product', href: '#beyond-product' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${
        isScrolled
          ? 'bg-[#F8F6FC]/85 backdrop-blur-md border-b border-[#9A89C8]/30 shadow-xs py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Brand Logo AV - Executive Emerald Gradient */}
        <a
          href={personalInfo.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          title="Open LinkedIn Profile"
          className="flex items-center group focus:outline-none"
        >
          <span 
            className="px-3.5 py-1.5 rounded-xl text-white font-heading font-black text-xl tracking-tight shadow-md hover:shadow-[0_0_22px_rgba(16,185,129,0.6)] hover:scale-110 hover:-rotate-3 transition-all duration-300 ease-out flex items-center justify-center"
            style={{ background: 'linear-gradient(135deg, #10B981, #059669)' }}
          >
            AV
          </span>
        </a>

        {/* Center Floating Nav Bar (Emerald & Slate Theme) */}
        <nav className="hidden md:flex items-center space-x-1 p-1.5 rounded-full shadow-md backdrop-blur-md bg-slate-200/70 dark:bg-slate-800/70 border border-slate-300 dark:border-slate-700/80">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.name}
                href={link.href}
                className={`relative px-4 py-1.5 rounded-full text-sm font-bold transition-all duration-200 ${
                  isActive
                    ? 'text-white'
                    : 'text-slate-700 dark:text-slate-200 hover:text-slate-950 dark:hover:text-white hover:bg-slate-300/40 dark:hover:bg-slate-700/40'
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="activePill"
                    className="absolute inset-0 rounded-full bg-[#10B981] shadow-sm -z-10"
                    transition={{ type: 'spring', stiffness: 380, damping: 28 }}
                  />
                )}
                <span>{link.name}</span>
              </a>
            );
          })}
        </nav>

        {/* Action Controls & Download CV Button */}
        <div className="hidden md:flex items-center space-x-3">
          
          {/* Theme Toggle Micro-Interaction */}
          <motion.button
            onClick={toggleTheme}
            aria-label="Toggle theme mode"
            whileTap={{ scale: 0.85, rotate: theme === 'dark' ? -30 : 30 }}
            whileHover={{ scale: 1.08 }}
            className="relative p-2.5 rounded-full bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700 shadow-xs hover:shadow-md transition-all duration-300 overflow-hidden group focus:outline-none"
          >
            <AnimatePresence mode="wait" initial={false}>
              {theme === 'dark' ? (
                <motion.div
                  key="sun"
                  initial={{ rotate: -90, scale: 0, opacity: 0 }}
                  animate={{ rotate: 0, scale: 1, opacity: 1 }}
                  exit={{ rotate: 90, scale: 0, opacity: 0 }}
                  transition={{ type: 'spring', stiffness: 350, damping: 22 }}
                  className="flex items-center justify-center"
                >
                  <Sun className="w-4 h-4 text-amber-400 drop-shadow-[0_0_8px_rgba(251,191,36,0.7)]" />
                </motion.div>
              ) : (
                <motion.div
                  key="moon"
                  initial={{ rotate: 90, scale: 0, opacity: 0 }}
                  animate={{ rotate: 0, scale: 1, opacity: 1 }}
                  exit={{ rotate: -90, scale: 0, opacity: 0 }}
                  transition={{ type: 'spring', stiffness: 350, damping: 22 }}
                  className="flex items-center justify-center"
                >
                  <Moon className="w-4 h-4 text-emerald-600 drop-shadow-[0_0_8px_rgba(16,185,129,0.4)]" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>

          {/* 'Download CV' Button with Direct PDF Download Link */}
          <a
            href="/Ashutosh_Verma_Resume.pdf"
            download="Ashutosh_Verma_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-xs font-bold text-white bg-slate-900 dark:bg-slate-800 border border-[#10B981] shadow-md hover:bg-[#10B981] hover:-translate-y-0.5 hover:shadow-[0_0_20px_rgba(16,185,129,0.4)] transition-all duration-300 group cursor-pointer"
          >
            <FileText className="w-3.5 h-3.5 text-[#10B981] group-hover:text-white transition-colors" />
            <span>Download CV</span>
            <ArrowUpRight className="w-3.5 h-3.5 opacity-80 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>

        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="flex md:hidden items-center gap-2">
          <motion.button
            onClick={toggleTheme}
            aria-label="Toggle theme mode"
            whileTap={{ scale: 0.85 }}
            className="p-2.5 rounded-full bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700 shadow-xs"
          >
            <Moon className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
          </motion.button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800"
            aria-label="Open menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-slate-100/95 dark:bg-[#0F172A]/95 backdrop-blur-xl border-b border-slate-200 dark:border-slate-800 px-4 pt-3 pb-6 space-y-3">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2.5 rounded-lg text-base font-bold text-slate-800 dark:text-slate-200 hover:bg-slate-200/60 dark:hover:bg-slate-800/60"
              >
                {link.name}
              </a>
            ))}
          </div>
            <a
              href="/Ashutosh_Verma_Resume.pdf"
              download="Ashutosh_Verma_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-sm font-bold text-white bg-slate-900 dark:bg-slate-800 border border-[#10B981] shadow-md hover:bg-[#10B981] transition-all cursor-pointer"
            >
              <FileText className="w-4 h-4 text-[#10B981]" />
              <span>Download CV</span>
            </a>
          </div>
        )}
      </header>
  );
};
