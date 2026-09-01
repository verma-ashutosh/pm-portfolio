import React from 'react';
import { personalInfo } from '../data/portfolioData';
import { Mail, FileText, Linkedin, Github } from 'lucide-react';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="py-14 bg-[#2D3748] text-white border-t border-[#4A5568]">
      {/* Central 1200px container width */}
      <div className="w-full max-w-[1200px] mx-auto px-6 md:px-12 space-y-8">
        
        {/* Main Content Container (Center-aligned compact vertical height) */}
        <div className="text-center max-w-2xl mx-auto space-y-4">
          
          {/* Top Tag */}
          <div>
            <span className="px-3 py-1 rounded-full bg-[#1E293B] text-[#CBD5E1] text-xs font-bold uppercase tracking-wider inline-block border border-slate-600/80 mb-1">
              • LET'S TALK
            </span>
          </div>

          {/* Main Headline */}
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Building something impactful?
          </h2>

          {/* Sub-headline */}
          <div className="space-y-2 text-xs sm:text-sm text-[#CBD5E1] font-medium leading-relaxed max-w-xl mx-auto">
            <p>
              Happy to discuss Product Intern & APM roles, collaborations, or feedback on my case studies.
            </p>
            <p className="text-xs text-[#A0AEC0] font-semibold">
              Noida-based · Open to Bengaluru · Noida · Gurugram · Hyderabad · Mumbai · Remote
            </p>
          </div>

          {/* Functional Buttons (Center-aligned flex row) */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            {/* Button 1: Email (Solid White) */}
            <a
              href={`mailto:${personalInfo.email}`}
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-white hover:bg-slate-100 text-[#1E293B] font-bold text-xs transition-colors cursor-pointer shadow-xs"
            >
              <Mail className="w-4 h-4 text-[#1E293B]" />
              <span>Say Hello</span>
            </a>

            {/* Button 2: Resume (Transparent + White Border) */}
            <a
              href={personalInfo.resumePdf}
              download="Ashutosh-Verma-APM-Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-transparent border-2 border-white hover:bg-white/10 text-white font-bold text-xs transition-colors cursor-pointer"
            >
              <FileText className="w-4 h-4 text-white" />
              <span>Download Resume</span>
            </a>
          </div>

          {/* Social Icons Row (Below main buttons) */}
          <div className="flex items-center justify-center gap-3 pt-3">
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              title="LinkedIn Profile"
              className="w-10 h-10 rounded-xl bg-[#1E293B] hover:bg-[#334155] border border-[#4A5568] text-white flex items-center justify-center transition-colors cursor-pointer shadow-2xs"
            >
              <Linkedin className="w-4 h-4" />
            </a>

            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              title="GitHub Profile"
              className="w-10 h-10 rounded-xl bg-[#1E293B] hover:bg-[#334155] border border-[#4A5568] text-white flex items-center justify-center transition-colors cursor-pointer shadow-2xs"
            >
              <Github className="w-4 h-4" />
            </a>
          </div>

        </div>

        {/* Footer Bottom (Subtle Horizontal Divider) */}
        <div className="pt-6 border-t border-[#4A5568] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#CBD5E1] font-medium">
          <p>© 2026 Ashutosh Verma. Founding Operator & APM Portfolio.</p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-[#CBD5E1] hover:text-white transition-colors font-semibold cursor-pointer"
          >
            <span>Back to top ↗</span>
          </button>
        </div>

      </div>
    </footer>
  );
};
