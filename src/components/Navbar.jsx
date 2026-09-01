import React, { useState, useEffect } from 'react';
import { personalInfo } from '../data/portfolioData';
import { Menu, X, ArrowUpRight } from 'lucide-react';

export const Navbar = () => {
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

      const sections = ['about', 'product-work', 'experience', 'skills', 'contact'];
      const scrollPosition = window.scrollY + 180;

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
    { name: 'Product Work', href: '#product-work' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-150 ${
        isScrolled
          ? 'bg-[#F4F5F7]/95 backdrop-blur-xs border-b border-slate-200/80 py-3'
          : 'bg-transparent py-4'
      }`}
    >
      {/* Central 1200px container width with even side margins */}
      <div className="w-full max-w-[1200px] mx-auto px-6 md:px-12 flex items-center justify-between">
        
        {/* Left: Logo "AV" in dark rounded rectangle */}
        <a
          href={personalInfo.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          title="Open LinkedIn Profile"
          className="flex items-center focus:outline-none cursor-pointer"
        >
          <span className="px-3.5 py-1.5 rounded-lg text-white font-mono font-extrabold text-sm tracking-wider bg-[#18181B] hover:bg-[#3F3F46] transition-colors duration-150 flex items-center justify-center shadow-xs">
            AV
          </span>
        </a>

        {/* Center: Links */}
        <nav className="hidden md:flex items-center space-x-1 p-1 rounded-full bg-white border border-slate-200/80 shadow-[0_2px_8px_rgba(0,0,0,0.04)]">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.name}
                href={link.href}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-colors duration-150 ${
                  isActive
                    ? 'bg-[#18181B] text-white'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                }`}
              >
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* Right: Solid black button "Download CV" with arrow icon */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href={personalInfo.resumePdf}
            download="Ashutosh-Verma-APM-Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold text-white bg-[#18181B] hover:bg-[#3F3F46] transition-colors duration-150 cursor-pointer shadow-xs"
          >
            <span>Download CV</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-slate-300" />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-slate-800 hover:bg-slate-200/60 transition-colors"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#F4F5F7] border-b border-slate-200/80 px-6 pt-3 pb-5 space-y-2">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg text-xs font-semibold text-slate-800 hover:bg-slate-200/60 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
          <div className="pt-2 border-t border-slate-200/80">
            <a
              href={personalInfo.resumePdf}
              download="Ashutosh-Verma-APM-Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold text-white bg-[#18181B] hover:bg-[#3F3F46] transition-colors cursor-pointer"
            >
              <span>Download CV</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-slate-300" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
