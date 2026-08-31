import React, { useState } from 'react';
import { personalInfo } from '../data/portfolioData';
import { Mail, Linkedin, FileText, Sparkles, Copy, Check, Twitter, Facebook, AtSign } from 'lucide-react';

export const Hero = ({ onOpenResume }) => {
  const [emailCopied, setEmailCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setEmailCopied(true);
    setTimeout(() => setEmailCopied(false), 2000);
  };

  const tags = [
    "AI Product Strategy",
    "0 → 1 Builder",
    "Customer Discovery",
    "BITSoM × Masai PM"
  ];

  return (
    <section id="hero" className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-[#FAFAFA] text-[#18181B] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          
          {/* Left Column: Name & Main Content */}
          <div className="lg:col-span-7 space-y-7 text-left">
            
            {/* Status Pill Badge - Crisp & Static */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-100 border border-slate-200">
              <span className="h-2 w-2 rounded-full bg-slate-700"></span>
              <span className="text-xs font-semibold text-slate-700 uppercase tracking-wide">
                CURRENTLY BUILDING AT CATI AI
              </span>
            </div>

            {/* Display Name */}
            <div className="space-y-1">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-[#18181B] leading-[1.05]">
                Ashutosh Verma
              </h1>
              <p className="text-xl sm:text-2xl font-bold text-[#3F3F46] tracking-tight pt-1">
                Aspiring Product Manager building <span className="underline underline-offset-4 decoration-slate-400">0 → 1 AI products</span>.
              </p>
            </div>

            {/* Skill Tags */}
            <div className="flex flex-wrap gap-2 pt-1">
              {tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 rounded-md text-xs font-medium bg-white text-slate-700 border border-slate-200"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Sub-Headline Bio */}
            <p className="text-sm sm:text-base text-[#52525B] leading-relaxed font-normal max-w-2xl">
              Founding Team Associate at <strong className="font-semibold text-[#18181B]">Cati AI</strong>. 
              Specializing in user discovery, product roadmapping, PRD documentation, and shipping functional AI prototypes.
            </p>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#18181B] text-white font-semibold text-xs hover:bg-[#3F3F46] transition-colors duration-150"
              >
                <span>See My Projects ↓</span>
              </a>

              <a
                href="/Ashutosh_Verma_Resume.pdf"
                download="Ashutosh_Verma_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-white text-slate-800 border border-slate-200 font-semibold text-xs hover:bg-slate-50 transition-colors duration-150 cursor-pointer"
              >
                <FileText className="w-3.5 h-3.5 text-slate-600" />
                <span>Download CV (PDF)</span>
              </a>
            </div>

            {/* Minimalist Social CONNECT Bar */}
            <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-slate-200">
              <div className="flex items-center gap-3">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                  CONNECT:
                </span>

                <div className="flex items-center gap-2">
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="p-2 rounded-full bg-white text-slate-700 hover:text-slate-900 border border-slate-200 hover:bg-slate-100 transition-colors duration-150 cursor-pointer"
                    title={`Send Email to ${personalInfo.email}`}
                  >
                    <Mail className="w-4 h-4" />
                  </a>

                  <button
                    onClick={handleCopyEmail}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white text-xs font-medium text-slate-700 hover:text-slate-900 border border-slate-200 hover:bg-slate-100 transition-colors duration-150 cursor-pointer"
                    title="Copy Email Address"
                  >
                    {emailCopied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-slate-900" />
                        <span className="text-slate-900 font-semibold">Copied!</span>
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
                    className="p-2 rounded-full bg-white text-slate-700 hover:text-slate-900 border border-slate-200 hover:bg-slate-100 transition-colors duration-150 cursor-pointer"
                    title="LinkedIn Profile"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>

                  <a
                    href="https://x.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full bg-white text-slate-700 hover:text-slate-900 border border-slate-200 hover:bg-slate-100 transition-colors duration-150"
                    title="X / Twitter"
                  >
                    <Twitter className="w-4 h-4" />
                  </a>

                  <a
                    href="https://threads.net"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full bg-white text-slate-700 hover:text-slate-900 border border-slate-200 hover:bg-slate-100 transition-colors duration-150"
                    title="Threads"
                  >
                    <AtSign className="w-4 h-4" />
                  </a>

                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full bg-white text-slate-700 hover:text-slate-900 border border-slate-200 hover:bg-slate-100 transition-colors duration-150"
                    title="Facebook"
                  >
                    <Facebook className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Portrait & Minimal Static Badges */}
          <div className="lg:col-span-5 relative flex items-center justify-center py-4">
            
            {/* Portrait Image Card */}
            <div className="relative w-64 h-64 sm:w-72 sm:h-72 rounded-2xl p-1 bg-white border border-slate-200 shadow-2xs">
              <img
                src="./avatar.jpg"
                alt="Ashutosh Verma - Aspiring Product Manager"
                className="w-full h-full object-cover rounded-xl"
              />
            </div>

            {/* Static Badges around Portrait */}
            <div className="absolute top-0 -left-2 sm:left-0 bg-white px-3 py-2 rounded-xl border border-slate-200 shadow-2xs max-w-[200px]">
              <p className="text-[11px] font-bold text-[#18181B] leading-tight">CATI AI</p>
              <p className="text-[9px] text-[#71717A] font-medium leading-tight">Product & Strategy Associate</p>
            </div>

            <div className="absolute bottom-4 -left-2 sm:left-0 bg-white px-3 py-2 rounded-xl border border-slate-200 shadow-2xs max-w-[200px]">
              <p className="text-[11px] font-bold text-[#18181B] leading-tight">PIE ROOMS</p>
              <p className="text-[9px] text-[#71717A] font-medium leading-tight">Business Operations & Growth</p>
            </div>

            <div className="absolute top-0 right-0 sm:right-0 bg-white px-3 py-2 rounded-xl border border-slate-200 shadow-2xs max-w-[190px] text-right">
              <p className="text-[10px] font-bold text-[#18181B] leading-tight">BITSoM × Masai</p>
              <p className="text-[9px] text-[#71717A] font-medium leading-tight">Product Management</p>
            </div>

            <div className="absolute -bottom-4 bg-white px-4 py-1.5 rounded-full border border-slate-200 shadow-2xs flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-slate-700"></span>
              <span className="text-xs font-semibold text-slate-800 uppercase tracking-wide">
                OPEN TO OPPORTUNITIES
              </span>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
