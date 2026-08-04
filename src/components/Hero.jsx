import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { personalInfo } from '../data/portfolioData';
import confetti from 'canvas-confetti';
import { ArrowDown, Mail, Linkedin, Figma, FileText, Sparkles, Copy, Check, Twitter, Facebook, AtSign } from 'lucide-react';

export const Hero = ({ onOpenResume }) => {
  const [activeSublineIndex, setActiveSublineIndex] = useState(0);
  const [emailCopied, setEmailCopied] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSublineIndex((prev) => (prev + 1) % personalInfo.sublines.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setEmailCopied(true);
    confetti({
      particleCount: 35,
      spread: 50,
      origin: { y: 0.8 }
    });
    setTimeout(() => setEmailCopied(false), 2500);
  };

  const tags = [
    "AI Product Strategy",
    "0 → 1 Builder",
    "Customer Discovery",
    "BITSoM × Masai PM"
  ];

  return (
    <section id="hero" className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-slate-50 dark:bg-[#0F172A] text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-800">
      
      {/* Soft Ambient Emerald Glow blending into the portrait */}
      <div 
        className="absolute top-1/4 right-1/4 w-[600px] h-[600px] pointer-events-none rounded-full bg-emerald-500/10 blur-3xl"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Name & Main Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6 text-left"
          >
            {/* Top Status Pill Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-emerald-100/80 dark:bg-emerald-950/80 border border-emerald-200 dark:border-emerald-800 shadow-xs">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span className="text-xs font-bold text-emerald-900 dark:text-emerald-300 tracking-wide uppercase">
                CURRENTLY BUILDING AT CATI AI
              </span>
            </div>

            {/* Giant Stacked Display Name */}
            <div className="space-y-0 select-none">
              <h1 className="text-6xl sm:text-7xl lg:text-8xl font-heading font-black tracking-tight text-slate-900 dark:text-white leading-[0.9]">
                Ashutosh
              </h1>
              <h1 className="text-6xl sm:text-7xl lg:text-8xl font-heading font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-emerald-500 to-teal-500 leading-[0.95]">
                Verma
              </h1>
            </div>

            {/* Headline Tagline */}
            <div className="text-xl sm:text-2xl font-heading font-bold text-slate-800 dark:text-slate-200 tracking-tight">
              <span>Aspiring Product Manager building </span>
              <span className="italic text-emerald-600 dark:text-emerald-400 font-extrabold underline decoration-emerald-300 underline-offset-4">
                0 → 1 AI products.
              </span>
            </div>

            {/* Skill Tags */}
            <div className="flex flex-wrap gap-2 pt-1">
              {tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="px-3.5 py-1.5 rounded-full text-xs font-semibold bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700 shadow-xs"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Dynamic Animated Core Expertise */}
            <div className="flex items-center gap-2 text-sm font-semibold text-slate-700 dark:text-slate-300 h-7 pt-1">
              <Sparkles className="w-4 h-4 text-emerald-500 shrink-0" />
              <span className="text-slate-500 dark:text-slate-400 font-medium">Core Expertise:</span>
              <div className="relative overflow-hidden h-7 w-64 inline-block">
                {personalInfo.sublines.map((text, idx) => (
                  <motion.span
                    key={text}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{
                      opacity: activeSublineIndex === idx ? 1 : 0,
                      y: activeSublineIndex === idx ? 0 : -15,
                    }}
                    transition={{ duration: 0.4 }}
                    className="absolute left-0 top-0 text-emerald-600 dark:text-emerald-400 font-bold"
                  >
                    {text}
                  </motion.span>
                ))}
              </div>
            </div>

            {/* Sub-Headline Bio */}
            <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed font-normal max-w-2xl">
              Founding Team Associate at <strong className="font-extrabold text-slate-900 dark:text-white">Cati AI</strong>. 
              Specializing in user discovery, product roadmapping, PRD documentation, and shipping functional AI prototypes.
            </p>

            {/* Redesigned Pill CTAs with Hover Elevation */}
            <div className="flex flex-wrap items-center gap-4 pt-3">
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold text-sm shadow-md hover:shadow-xl hover:-translate-y-0.5 transition-all group"
              >
                <span>See My Projects ↓</span>
              </a>

              <a
                href="/Ashutosh_Verma_Resume.pdf"
                download="Ashutosh_Verma_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-300 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700/80 font-bold text-sm shadow-xs hover:shadow-md hover:-translate-y-0.5 transition-all cursor-pointer"
              >
                <FileText className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                <span>Download CV (PDF)</span>
              </a>
            </div>

            {/* Redesigned Minimalist Social CONNECT Bar */}
            <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-slate-200/80 dark:border-slate-800">
              <div className="flex items-center gap-3">
                <span className="text-xs font-extrabold text-slate-400 dark:text-slate-500 uppercase tracking-widest">
                  CONNECT:
                </span>

                <div className="flex items-center gap-2 sm:gap-2.5">
                  <a
                    href="mailto:azhutosh.verma32@gmail.com"
                    className="p-2.5 rounded-full bg-slate-900 text-white hover:bg-emerald-600 border border-slate-800 shadow-xs hover:shadow-md hover:scale-110 hover:-translate-y-0.5 transition-all"
                    title="Email: azhutosh.verma32@gmail.com"
                  >
                    <Mail className="w-4 h-4 text-white" />
                  </a>

                  <a
                    href={personalInfo.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-full bg-slate-900 text-white hover:bg-emerald-600 border border-slate-800 shadow-xs hover:shadow-md hover:scale-110 hover:-translate-y-0.5 transition-all"
                    title="LinkedIn Profile"
                  >
                    <Linkedin className="w-4 h-4 text-white" />
                  </a>

                  <a
                    href="https://x.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-full bg-slate-900 text-white hover:bg-emerald-600 border border-slate-800 shadow-xs hover:shadow-md hover:scale-110 hover:-translate-y-0.5 transition-all"
                    title="X / Twitter"
                  >
                    <Twitter className="w-4 h-4 text-white" />
                  </a>

                  <a
                    href="https://threads.net"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-full bg-slate-900 text-white hover:bg-emerald-600 border border-slate-800 shadow-xs hover:shadow-md hover:scale-110 hover:-translate-y-0.5 transition-all"
                    title="Threads"
                  >
                    <AtSign className="w-4 h-4 text-white" />
                  </a>

                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-full bg-slate-900 text-white hover:bg-emerald-600 border border-slate-800 shadow-xs hover:shadow-md hover:scale-110 hover:-translate-y-0.5 transition-all"
                    title="Facebook"
                  >
                    <Facebook className="w-4 h-4 text-white" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Portrait Avatar & Floating Badges */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-5 relative flex items-center justify-center py-6"
          >
            {/* Center Circular Portrait with Clean Double Emerald Ring */}
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full p-2 bg-gradient-to-tr from-emerald-600 via-teal-500 to-slate-900 shadow-2xl">
              <div className="w-full h-full rounded-full p-1 bg-slate-900">
                <img
                  src="./avatar.jpg"
                  alt="Ashutosh Verma - Aspiring Product Manager"
                  className="w-full h-full object-cover rounded-full shadow-inner border-2 border-emerald-500/40"
                />
              </div>
            </div>

            {/* Floating Badge 1: Top-Left (CATI AI) */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute top-0 -left-2 sm:left-0 bg-white dark:bg-slate-800 px-3.5 py-2 rounded-2xl shadow-xl border border-slate-200/80 dark:border-slate-700 flex items-center gap-2 max-w-[210px]"
            >
              <div className="w-7 h-7 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 flex items-center justify-center font-bold text-xs shrink-0">
                C
              </div>
              <div>
                <p className="text-[11px] font-extrabold text-slate-900 dark:text-white leading-tight">
                  CATI AI
                </p>
                <p className="text-[9px] text-slate-500 dark:text-slate-400 font-medium leading-tight">
                  Product & Strategy Associate (Founding Team)
                </p>
              </div>
            </motion.div>

            {/* Floating Badge 2: Bottom-Left (PIE ROOMS) */}
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              className="absolute bottom-12 -left-3 sm:left-0 bg-white dark:bg-slate-800 px-3.5 py-2 rounded-2xl shadow-xl border border-slate-200/80 dark:border-slate-700 flex items-center gap-2 max-w-[210px]"
            >
              <div className="w-7 h-7 rounded-full bg-amber-100 dark:bg-amber-950 text-amber-700 dark:text-amber-300 flex items-center justify-center font-bold text-xs shrink-0">
                PR
              </div>
              <div>
                <p className="text-[11px] font-extrabold text-slate-900 dark:text-white leading-tight">
                  PIE ROOMS
                </p>
                <p className="text-[9px] text-slate-500 dark:text-slate-400 font-medium leading-tight">
                  Business Operations & Growth
                </p>
              </div>
            </motion.div>

            {/* Floating Badge 3: Top-Right (Transitioned Journey) */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
              className="absolute top-2 right-0 sm:right-0 bg-white dark:bg-slate-800 px-3.5 py-2 rounded-2xl shadow-xl border border-slate-200/80 dark:border-slate-700 text-right max-w-[200px]"
            >
              <p className="text-[10px] font-bold text-emerald-600 dark:text-emerald-400 leading-tight">
                Transitioned Journey
              </p>
              <p className="text-[9px] text-slate-600 dark:text-slate-300 font-semibold leading-tight mt-0.5">
                Bio → Entrepreneur → Product
              </p>
            </motion.div>

            {/* Floating Badge 4: Bottom-Right (BITSoM × Masai) */}
            <motion.div
              animate={{ y: [0, 7, 0] }}
              transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
              className="absolute bottom-12 -right-3 sm:right-0 bg-white dark:bg-slate-800 px-3.5 py-2 rounded-2xl shadow-xl border border-slate-200/80 dark:border-slate-700 text-right max-w-[190px]"
            >
              <p className="text-[11px] font-extrabold text-emerald-600 dark:text-emerald-400 leading-tight">
                BITSoM × Masai
              </p>
              <p className="text-[9px] text-slate-500 dark:text-slate-400 font-semibold leading-tight mt-0.5">
                Product Management
              </p>
            </motion.div>

            {/* Floating Badge 5: Bottom Pill */}
            <motion.div
              animate={{ y: [0, -4, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -bottom-5 bg-emerald-50 dark:bg-emerald-950/80 px-4 py-2 rounded-full shadow-lg border border-emerald-200 dark:border-emerald-800/80 flex items-center gap-2"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span className="text-xs font-extrabold text-emerald-700 dark:text-emerald-300 uppercase tracking-wide">
                OPEN TO OPPORTUNITIES
              </span>
            </motion.div>

          </motion.div>

        </div>
      </div>
    </section>
  );
};
