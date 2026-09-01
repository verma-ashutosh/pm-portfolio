import React, { useState } from 'react';
import { personalInfo } from '../data/portfolioData';
import { Mail, Linkedin, Github, Copy, Check, ArrowUp } from 'lucide-react';

export const Footer = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="py-14 bg-[#F4F5F7] text-[#18181B] border-t border-slate-200/80">
      <div className="w-full max-w-[1440px] mx-auto px-4 md:px-8 space-y-8">
        
        {/* Main Connect Box */}
        <div className="bg-white border border-slate-200/90 rounded-xl p-6 text-center space-y-4 shadow-[0_2px_8px_rgba(0,0,0,0.04)]">
          <div>
            <span className="text-[10px] font-semibold uppercase tracking-widest text-slate-500 block mb-1">
              • INITIATE CONTACT
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#18181B] tracking-tight">
              Let's Connect
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 font-normal mt-1 max-w-md mx-auto">
              Happy to discuss Product Intern & APM roles, collaborations, or feedback on my case studies.
            </p>
          </div>

          {/* Simple Contact Links Line */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2 text-xs font-semibold">
            <a
              href={`mailto:${personalInfo.email}`}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#18181B] text-white hover:bg-[#3F3F46] transition-colors shadow-xs"
            >
              <Mail className="w-3.5 h-3.5 text-slate-300" />
              <span>{personalInfo.email}</span>
            </a>

            <button
              onClick={handleCopyEmail}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-slate-100 text-slate-800 border border-slate-200 hover:bg-slate-200 transition-colors cursor-pointer"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-slate-900" />
                  <span>Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-slate-500" />
                  <span>Copy Email</span>
                </>
              )}
            </button>

            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white text-slate-800 border border-slate-200 hover:bg-slate-50 transition-colors"
            >
              <Linkedin className="w-3.5 h-3.5 text-slate-600" />
              <span>LinkedIn</span>
            </a>

            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white text-slate-800 border border-slate-200 hover:bg-slate-50 transition-colors"
            >
              <Github className="w-3.5 h-3.5 text-slate-600" />
              <span>GitHub</span>
            </a>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-medium text-slate-500">
          <p>© 2026 Ashutosh Verma. Founding Operator & APM Portfolio.</p>
          
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1 text-slate-600 hover:text-slate-900 transition-colors cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
