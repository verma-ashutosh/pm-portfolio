import React, { useState } from 'react';
import { personalInfo } from '../data/portfolioData';
import confetti from 'canvas-confetti';
import { Mail, Linkedin, FileText, Copy, Check, Github, Instagram, ArrowUp, MapPin, Sparkles, Send, Zap } from 'lucide-react';

export const Footer = ({ onOpenResume }) => {
  const [copied, setCopied] = useState(false);

  const handleCopyAndMail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    confetti({
      particleCount: 45,
      spread: 65,
      origin: { y: 0.85 }
    });
    setTimeout(() => setCopied(false), 2500);
    window.location.href = `mailto:${personalInfo.email}`;
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="relative pt-24 pb-12 bg-[#0B0F17] text-white overflow-hidden border-t border-slate-800">
      
      {/* Background Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[#10B981]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Statement Hero CTA Section */}
        <div className="flex flex-col items-center text-center space-y-8 pb-20 border-b border-slate-800">
          
          {/* Eyebrow Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900 border border-slate-700 text-emerald-300 text-xs font-black uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
            <span>INITIATE CONTACT</span>
          </div>

          {/* Fresh Hero Typography */}
          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-heading font-black tracking-tight leading-tight text-white max-w-4xl">
            Got a bold product vision? Let’s <span className="bg-gradient-to-r from-emerald-400 via-emerald-300 to-teal-300 bg-clip-text text-transparent">bring it to life.</span>
          </h2>

          {/* Unique Personalized Subtext & Location */}
          <div className="space-y-4 max-w-2xl">
            <p className="text-sm sm:text-base font-medium text-slate-300 leading-relaxed">
              I build 0→1 AI workflows, map complex user journeys, and turn messy operational problems into crisp products. Open to Product Management roles in AI & HealthTech.
            </p>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1E293B] border border-slate-700 text-xs font-medium text-slate-200">
              <MapPin className="w-3.5 h-3.5 text-[#10B981] shrink-0" />
              <span>Based in Noida • Open to Bengaluru, Mumbai, Gurgaon, Hyderabad, & Remote</span>
            </div>
          </div>

          {/* Primary Interactive CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-3.5 pt-2">
            
            {/* Button 1: Start a Conversation */}
            <a
              href={`mailto:${personalInfo.email}`}
              className="bg-gradient-to-r from-[#10B981] to-[#059669] hover:from-emerald-500 hover:to-emerald-600 text-white font-black text-sm px-6 py-3.5 rounded-full shadow-lg shadow-emerald-500/25 hover:scale-105 hover:-translate-y-0.5 transition-all duration-200 cursor-pointer flex items-center gap-2 group"
            >
              <Zap className="w-4 h-4 text-amber-300" />
              <span>⚡ Start a Conversation</span>
              <Send className="w-3.5 h-3.5 opacity-80 group-hover:translate-x-0.5 transition-transform" />
            </a>

            {/* Button 2: Copy Email Address */}
            <button
              onClick={() => {
                navigator.clipboard.writeText(personalInfo.email);
                setCopied(true);
                confetti({ particleCount: 35, spread: 50, origin: { y: 0.85 } });
                setTimeout(() => setCopied(false), 2500);
              }}
              className="bg-[#1E293B] text-white border border-slate-700 hover:border-[#10B981] font-extrabold text-sm px-6 py-3.5 rounded-full shadow-md hover:scale-105 hover:-translate-y-0.5 transition-all duration-200 cursor-pointer flex items-center gap-2 group"
              title="Copy Email Address to Clipboard"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-emerald-400 animate-bounce" />
                  <span className="text-emerald-400">Email Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 text-[#10B981]" />
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
              className="bg-[#1E293B] text-white border border-slate-700 hover:border-[#10B981] font-extrabold text-sm px-6 py-3.5 rounded-full shadow-md hover:scale-105 hover:-translate-y-0.5 transition-all duration-200 cursor-pointer flex items-center gap-2 group"
            >
              <FileText className="w-4 h-4 text-[#10B981]" />
              <span>📄 Grab My Resume</span>
            </a>

          </div>

          {/* Dynamic Social Dock (Floating Icon Badges) */}
          <div className="pt-6">
            <span className="text-[10px] font-extrabold uppercase tracking-widest text-slate-500 block mb-3">
              CONNECT DIGITALLY
            </span>
            <div className="flex items-center justify-center gap-3">
              
              {/* LinkedIn */}
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                style={{ willChange: 'transform' }}
                className="p-3.5 rounded-2xl bg-[#1E293B] border border-slate-700 text-slate-200 hover:text-white hover:border-[#10B981]/80 shadow-md transition-all duration-200 ease-out hover:-translate-y-1 flex items-center justify-center group"
                title="LinkedIn Profile"
              >
                <Linkedin className="w-5 h-5 group-hover:text-[#10B981] transition-colors" />
              </a>

              {/* GitHub */}
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                style={{ willChange: 'transform' }}
                className="p-3.5 rounded-2xl bg-[#1E293B] border border-slate-700 text-slate-200 hover:text-white hover:border-[#10B981]/80 shadow-md transition-all duration-200 ease-out hover:-translate-y-1 flex items-center justify-center group"
                title="GitHub"
              >
                <Github className="w-5 h-5 group-hover:text-[#10B981] transition-colors" />
              </a>

              {/* Direct Email */}
              <a
                href={`mailto:${personalInfo.email}`}
                style={{ willChange: 'transform' }}
                className="p-3.5 rounded-2xl bg-[#1E293B] border border-slate-700 text-slate-200 hover:text-white hover:border-[#10B981]/80 shadow-md transition-all duration-200 ease-out hover:-translate-y-1 flex items-center justify-center group"
                title="Send Email"
              >
                <Mail className="w-5 h-5 group-hover:text-[#10B981] transition-colors" />
              </a>

              {/* Instagram */}
              <a
                href="https://instagram.com/azhutosh.verma32"
                target="_blank"
                rel="noopener noreferrer"
                style={{ willChange: 'transform' }}
                className="p-3.5 rounded-2xl bg-[#1E293B] border border-slate-700 text-slate-200 hover:text-white hover:border-[#10B981]/80 shadow-md transition-all duration-200 ease-out hover:-translate-y-1 flex items-center justify-center group"
                title="Instagram (@azhutosh.verma32)"
              >
                <Instagram className="w-5 h-5 group-hover:text-[#10B981] transition-colors" />
              </a>

            </div>
          </div>

        </div>

        {/* Custom Footer Bottom & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-semibold text-slate-400">
          <p>© 2026 Ashutosh Verma. Designed & built with intent.</p>
          
          <div className="flex items-center gap-4">
            <span className="text-[#10B981] font-mono text-[11px] bg-slate-900 px-2.5 py-0.5 rounded-full border border-slate-700">
              0→1 Product Portfolio
            </span>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 text-slate-300 hover:text-[#10B981] transition-colors cursor-pointer"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>

      {/* Subtle Background Watermark */}
      <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-6xl sm:text-8xl lg:text-9xl font-heading font-black uppercase text-slate-800/40 select-none pointer-events-none whitespace-nowrap tracking-widest z-0">
        DISCOVER • DESIGN • DELIVER
      </div>
    </footer>
  );
};
