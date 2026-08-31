import React, { useState } from 'react';
import { personalInfo } from '../data/portfolioData';
import { Mail, Linkedin, FileText, Copy, Check, Github, Instagram, ArrowUp, MapPin, Send } from 'lucide-react';

export const Footer = ({ onOpenResume }) => {
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
    <footer id="contact" className="relative pt-24 pb-12 bg-[#FAFAFA] text-[#18181B] border-t border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main CTA Section */}
        <div className="flex flex-col items-center text-center space-y-6 pb-16 border-b border-slate-200">
          
          {/* Eyebrow Badge */}
          <span className="text-xs font-semibold uppercase tracking-widest text-slate-500">
            • INITIATE CONTACT
          </span>

          {/* Heading */}
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#18181B] max-w-3xl leading-tight">
            Got a bold product vision? Let’s bring it to life.
          </h2>

          {/* Subtext & Location */}
          <div className="space-y-3 max-w-2xl">
            <p className="text-sm sm:text-base font-normal text-slate-600 leading-relaxed">
              I build 0→1 AI workflows, map complex user journeys, and turn operational problems into crisp products. Open to Product Management roles in AI & HealthTech.
            </p>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-slate-200 text-xs font-medium text-slate-700">
              <MapPin className="w-3.5 h-3.5 text-slate-500 shrink-0" />
              <span>Based in Noida • Open to Bengaluru, Mumbai, Gurgaon, Hyderabad, & Remote</span>
            </div>
          </div>

          {/* Interactive CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            
            {/* Button 1: Start a Conversation */}
            <a
              href={`mailto:${personalInfo.email}`}
              className="bg-[#18181B] hover:bg-[#3F3F46] text-white font-semibold text-xs px-6 py-3 rounded-full shadow-2xs transition-colors duration-150 cursor-pointer flex items-center gap-2"
            >
              <span>Start a Conversation</span>
              <Send className="w-3.5 h-3.5 text-slate-300" />
            </a>

            {/* Button 2: Copy Email Address */}
            <button
              onClick={handleCopyEmail}
              className="bg-white text-slate-800 border border-slate-200 hover:bg-slate-50 font-semibold text-xs px-6 py-3 rounded-full shadow-2xs transition-colors duration-150 cursor-pointer flex items-center gap-2"
              title="Copy Email Address to Clipboard"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-slate-900" />
                  <span className="text-slate-900 font-bold">Email Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-slate-500" />
                  <span>Copy Email</span>
                </>
              )}
            </button>

            {/* Button 3: Grab My Resume */}
            <a
              href="/Ashutosh_Verma_Resume.pdf"
              download="Ashutosh_Verma_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-slate-800 border border-slate-200 hover:bg-slate-50 font-semibold text-xs px-6 py-3 rounded-full shadow-2xs transition-colors duration-150 cursor-pointer flex items-center gap-2"
            >
              <FileText className="w-3.5 h-3.5 text-slate-600" />
              <span>Grab My Resume</span>
            </a>

          </div>

          {/* Social Dock */}
          <div className="pt-4">
            <span className="text-[10px] font-semibold uppercase tracking-widest text-slate-400 block mb-3">
              CONNECT DIGITALLY
            </span>
            <div className="flex items-center justify-center gap-2.5">
              
              {/* LinkedIn */}
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-white border border-slate-200 text-slate-700 hover:text-slate-900 hover:bg-slate-100 transition-colors duration-150 flex items-center justify-center"
                title="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>

              {/* GitHub */}
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-white border border-slate-200 text-slate-700 hover:text-slate-900 hover:bg-slate-100 transition-colors duration-150 flex items-center justify-center"
                title="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>

              {/* Direct Email */}
              <a
                href={`mailto:${personalInfo.email}`}
                className="p-3 rounded-full bg-white border border-slate-200 text-slate-700 hover:text-slate-900 hover:bg-slate-100 transition-colors duration-150 flex items-center justify-center"
                title="Send Email"
              >
                <Mail className="w-4 h-4" />
              </a>

              {/* Instagram */}
              <a
                href="https://instagram.com/azhutosh.verma32"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-white border border-slate-200 text-slate-700 hover:text-slate-900 hover:bg-slate-100 transition-colors duration-150 flex items-center justify-center"
                title="Instagram (@azhutosh.verma32)"
              >
                <Instagram className="w-4 h-4" />
              </a>

            </div>
          </div>

        </div>

        {/* Footer Bottom & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-medium text-slate-500">
          <p>© 2026 Ashutosh Verma. Designed & built with intent.</p>
          
          <div className="flex items-center gap-4">
            <span className="text-slate-700 font-mono text-[11px] bg-slate-100 px-2.5 py-0.5 rounded-full border border-slate-200">
              0→1 Product Portfolio
            </span>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1 text-slate-600 hover:text-slate-900 transition-colors cursor-pointer"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
