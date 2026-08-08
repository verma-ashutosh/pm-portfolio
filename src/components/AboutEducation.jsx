import React from 'react';
import { motion } from 'framer-motion';
import { personalInfo } from '../data/portfolioData';
import { GraduationCap, Award, Dna, ArrowUpRight, CheckCircle2, Briefcase, MapPin, Sparkles, FileText, BookOpen, Linkedin, CheckSquare, Clock } from 'lucide-react';

export const AboutEducation = ({ onOpenResume }) => {
  return (
    <section id="about" className="py-20 bg-slate-50 dark:bg-[#0F172A] border-b border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid: Left Profile Card (Sticky) + Right Story & Qualifications */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* ======================================================== */}
          {/* 1. LEFT STICKY PROFILE CARD (Clean Executive Slate & Mint) */}
          {/* ======================================================== */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-4 lg:sticky lg:top-28 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-xl backdrop-blur-md rounded-3xl p-6 sm:p-8 space-y-6"
          >
            {/* Profile Avatar with Clean Mint Ring & Hover Zoom */}
            <div className="relative text-center">
              <div className="relative inline-block">
                <div className="absolute inset-0 rounded-full bg-emerald-500/20 blur-xl animate-pulse" />
                <img
                  src="./avatar.jpg"
                  alt="Ashutosh Verma - Product & Strategy Associate (Founding Team)"
                  className="relative w-28 h-28 sm:w-32 sm:h-32 object-cover rounded-full mx-auto shadow-2xl border-2 border-[#10B981] hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer"
                />
              </div>

              {/* Name & Title */}
              <h2 className="mt-4 font-heading font-black text-2xl text-slate-900 dark:text-white tracking-tight">
                Ashutosh Verma
              </h2>
              <p className="text-xs font-extrabold text-[#059669] dark:text-emerald-400 uppercase tracking-wide mt-1">
                PRODUCT & STRATEGY ASSOCIATE (Founding Team)
              </p>
            </div>

            {/* Details List */}
            <div className="space-y-3.5 pt-2 border-t border-slate-200 dark:border-slate-700 text-xs font-semibold text-slate-800 dark:text-slate-200">
              
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-xl bg-emerald-50 dark:bg-emerald-950/80 text-emerald-700 dark:text-emerald-300 shrink-0 mt-0.5 border border-emerald-200/60 dark:border-emerald-800/60">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-slate-500 dark:text-slate-400 font-medium block text-[10px] uppercase tracking-wider">Location</span>
                  <span>Noida, UP, India</span>
                </div>
              </div>

              {/* Clickable Education Links */}
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-xl bg-emerald-50 dark:bg-emerald-950/80 text-emerald-700 dark:text-emerald-300 shrink-0 mt-0.5 border border-emerald-200/60 dark:border-emerald-800/60">
                  <GraduationCap className="w-4 h-4" />
                </div>
                <div className="space-y-1.5 w-full">
                  <span className="text-slate-500 dark:text-slate-400 font-medium block text-[10px] uppercase tracking-wider mb-1">Education</span>
                  
                  {/* Clickable Link: Masai × BITSoM */}
                  <a 
                    href="https://www.linkedin.com/in/ashutosh-verma-pm/overlay/Position/2767935916/treasury/?profileId=ACoAADE-bjABLuw06kN64POkD8LMs5yo4WfonjY" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="group block text-[11px] text-slate-900 dark:text-white leading-snug font-bold hover:text-[#059669] transition-colors"
                  >
                    <div className="flex items-center justify-between">
                      <span>🎓 Product Management (Agentic & Generative AI)</span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-[#10B981] opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                    <span className="block text-[10px] text-[#059669] dark:text-emerald-400 font-semibold">Masai × BITSoM</span>
                  </a>
                </div>
              </div>

              {/* Current Role */}
              <div className="flex items-start gap-3 pt-1 border-t border-slate-200 dark:border-slate-700">
                <div className="p-2 rounded-xl bg-emerald-50 dark:bg-emerald-950/80 text-emerald-700 dark:text-emerald-300 shrink-0 mt-0.5 border border-emerald-200/60 dark:border-emerald-800/60">
                  <Briefcase className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-slate-500 dark:text-slate-400 font-medium block text-[10px] uppercase tracking-wider">Current Role</span>
                  <span>Product & Strategy Associate at Cati AI (Nov 2025 – Present)</span>
                </div>
              </div>

              {/* Status */}
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-xl bg-emerald-50 dark:bg-emerald-950/80 text-emerald-700 dark:text-emerald-300 shrink-0 mt-0.5 border border-emerald-200/60 dark:border-emerald-800/60">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-slate-500 dark:text-slate-400 font-medium block text-[10px] uppercase tracking-wider">Status</span>
                  <span className="text-emerald-700 dark:text-emerald-400 font-extrabold flex items-center gap-1.5">
                    <span className="h-2 w-2 rounded-full bg-emerald-500 animate-ping inline-block" />
                    Open for Product Management Roles
                  </span>
                </div>
              </div>

            </div>

            {/* Sleek Dark Action Buttons */}
            <div className="space-y-2.5 pt-3 border-t border-slate-200 dark:border-slate-700">
              <a
                href="/Ashutosh_Verma_Resume.pdf"
                download="Ashutosh_Verma_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-2xl bg-[#111827] text-white font-bold text-xs shadow-md hover:bg-[#1F2937] hover:border-[#10B981] border border-slate-800 transition-all cursor-pointer"
              >
                <FileText className="w-4 h-4 text-[#10B981]" />
                <span>Download Resume</span>
              </a>

              <a
                href="#projects"
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-2xl bg-[#111827] text-white font-bold text-xs shadow-md hover:bg-[#1F2937] hover:border-[#10B981] border border-slate-800 transition-all"
              >
                <BookOpen className="w-4 h-4 text-[#10B981]" />
                <span>Notion Portfolio</span>
              </a>

              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-2xl bg-[#111827] text-white font-bold text-xs shadow-md hover:bg-[#1F2937] hover:border-[#10B981] border border-slate-800 transition-all"
              >
                <Linkedin className="w-4 h-4 text-[#10B981]" />
                <span>LinkedIn Profile</span>
              </a>
            </div>

          </motion.div>

          {/* ======================================================== */}
          {/* 2. RIGHT COLUMN: STORY & QUALIFICATIONS */}
          {/* ======================================================== */}
          <div className="lg:col-span-8 space-y-8">
            
            {/* Top Tag & Main Heading */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="space-y-3"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950/80 text-emerald-800 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800 text-xs font-black uppercase tracking-widest">
                <Sparkles className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                <span>• ABOUT ME</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-heading font-black text-slate-900 dark:text-white tracking-tight leading-tight">
                "I turn ambiguous user problems into shipped 0→1 AI products."
              </h2>
            </motion.div>

            {/* High-Impact Bio Card with Bold Highlights & Micro-Pills */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 backdrop-blur-md rounded-3xl p-6 sm:p-7 space-y-4 text-sm text-slate-700 dark:text-slate-200 leading-relaxed shadow-sm"
            >
              <p>
                As a <strong className="font-extrabold text-slate-950 dark:text-white">Product & Strategy Associate</strong> on the founding team at <strong className="font-extrabold text-slate-950 dark:text-white">Cati AI</strong>, I operate right where <strong className="font-extrabold text-slate-950 dark:text-white">customer insights meet rapid execution</strong>. From conducting discovery across <strong className="font-extrabold text-slate-950 dark:text-white">12+ healthcare providers</strong> to scoping MVPs, authoring <strong className="font-extrabold text-slate-950 dark:text-white">5+ PRDs</strong>, and prototyping <strong className="font-extrabold text-slate-950 dark:text-white">20+ Figma screens</strong>, I build products from the ground up.
              </p>
              <p>
                Before stepping into AI products, I sharpened my business and growth muscle by <strong className="font-extrabold text-slate-950 dark:text-white">scaling bookings 3x</strong> at <strong className="font-extrabold text-slate-950 dark:text-white">Pie Rooms</strong> and streamlining operations at <strong className="font-extrabold text-slate-950 dark:text-white">Secret Private Cafe</strong>.
              </p>
              <p>
                Backed by a background in <strong className="font-extrabold text-slate-950 dark:text-white">Biotech</strong> and specialized AI PM training from <strong className="font-extrabold text-slate-950 dark:text-white">Masai × BITSoM (94% Capstone Score)</strong>, I thrive on validating hard problems fast, eliminating workflow friction, and driving measurable outcomes.
              </p>

              {/* Micro-Pills / Skill Badges */}
              <div className="pt-3 border-t border-slate-200 dark:border-slate-700 flex flex-wrap gap-2 text-xs font-extrabold">
                <span className="px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/80 text-emerald-800 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800 shadow-2xs">
                  0→1 Product Strategy
                </span>
                <span className="px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/80 text-emerald-800 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800 shadow-2xs">
                  Customer Discovery
                </span>
                <span className="px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/80 text-emerald-800 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800 shadow-2xs">
                  PRDs & Prototyping
                </span>
                <span className="px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/80 text-emerald-800 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800 shadow-2xs">
                  AI Workflows
                </span>
              </div>
            </motion.div>

            {/* ======================================================== */}
            {/* 3. EDUCATION GRID (3 Cards) */}
            {/* ======================================================== */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="space-y-4 pt-2"
            >
              <h3 className="font-heading font-extrabold text-lg text-slate-900 dark:text-white flex items-center gap-2">
                <GraduationCap className="w-5 h-5 text-[#10B981]" />
                <span>Academic & Professional Qualifications</span>
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                
                {/* Card 1: Masai × BITSoM */}
                <a 
                  href="https://www.linkedin.com/in/ashutosh-verma-pm/overlay/Position/2767935916/treasury/?profileId=ACoAADE-bjABLuw06kN64POkD8LMs5yo4WfonjY" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group relative bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl p-5 shadow-sm hover:-translate-y-1.5 hover:shadow-lg hover:border-[#10B981] transition-all duration-300 ease-out cursor-pointer space-y-2.5 flex flex-col justify-between overflow-hidden"
                >
                  <div>
                    <div className="flex items-center justify-between gap-1 mb-2">
                      <span className="text-[10px] font-black uppercase tracking-wider text-emerald-800 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-950 px-2.5 py-0.5 rounded-full border border-emerald-200 dark:border-emerald-800 group-hover:scale-105 transition-all">
                        Masai × BITSoM
                      </span>
                      <span className="text-[10px] font-semibold text-slate-500 dark:text-slate-400">
                        Nov 2025 – Jul 2026
                      </span>
                    </div>
                    <h4 className="font-heading font-bold text-sm text-slate-900 dark:text-white leading-tight group-hover:text-[#10B981] transition-colors">
                      Product Management (Agentic & Generative AI)
                    </h4>
                  </div>
                  
                  <div className="pt-2 border-t border-slate-200 dark:border-slate-700 flex items-center justify-between">
                    <p className="text-xs text-slate-800 dark:text-slate-200 font-extrabold flex items-center gap-1">
                      <Award className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                      <span>🏅 Certificate of Excellence (94% Score)</span>
                    </p>
                    <ArrowUpRight className="w-4 h-4 text-[#10B981] opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0 ml-1" />
                  </div>
                </a>

                {/* Card 2: University of Jammu */}
                <a 
                  href="https://www.linkedin.com/school/university-of-jammu/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group relative bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl p-5 shadow-sm hover:-translate-y-1.5 hover:shadow-lg hover:border-[#10B981] transition-all duration-300 ease-out cursor-pointer space-y-2.5 flex flex-col justify-between overflow-hidden"
                >
                  <div>
                    <div className="flex items-center justify-between gap-1 mb-2">
                      <span className="text-[10px] font-black uppercase tracking-wider text-emerald-800 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-950 px-2.5 py-0.5 rounded-full border border-emerald-200 dark:border-emerald-800 group-hover:scale-105 transition-all">
                        University of Jammu
                      </span>
                      <span className="text-[10px] font-semibold text-slate-500 dark:text-slate-400">
                        2023 – 2025
                      </span>
                    </div>
                    <h4 className="font-heading font-bold text-sm text-slate-900 dark:text-white leading-tight group-hover:text-[#10B981] transition-colors">
                      M.Sc. Biotechnology
                    </h4>
                  </div>
                  
                  <div className="pt-2 border-t border-slate-200 dark:border-slate-700 flex items-center justify-between">
                    <p className="text-xs text-slate-800 dark:text-slate-200 font-extrabold flex items-center gap-1">
                      <Dna className="w-3.5 h-3.5 text-[#10B981] shrink-0" />
                      <span>🧬 CGPA: 8.87 • GAT-B AIR 96 Recipient</span>
                    </p>
                    <ArrowUpRight className="w-4 h-4 text-[#10B981] opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0 ml-1" />
                  </div>
                </a>

                {/* Card 3: Kirori Mal College, DU */}
                <a 
                  href="https://www.linkedin.com/school/kirorimalcollege/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group relative bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl p-5 shadow-sm hover:-translate-y-1.5 hover:shadow-lg hover:border-[#10B981] transition-all duration-300 ease-out cursor-pointer space-y-2.5 flex flex-col justify-between overflow-hidden"
                >
                  <div>
                    <div className="flex items-center justify-between gap-1 mb-2">
                      <span className="text-[10px] font-black uppercase tracking-wider text-emerald-800 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-950 px-2.5 py-0.5 rounded-full border border-emerald-200 dark:border-emerald-800 group-hover:scale-105 transition-all">
                        Kirori Mal College, DU
                      </span>
                      <span className="text-[10px] font-semibold text-slate-500 dark:text-slate-400">
                        2019 – 2022
                      </span>
                    </div>
                    <h4 className="font-heading font-bold text-sm text-slate-900 dark:text-white leading-tight group-hover:text-[#10B981] transition-colors">
                      B.Sc. (Hons) Botany
                    </h4>
                  </div>
                  
                  <div className="pt-2 border-t border-slate-200 dark:border-slate-700 flex items-center justify-between">
                    <p className="text-xs text-slate-800 dark:text-slate-200 font-extrabold flex items-center gap-1">
                      <GraduationCap className="w-3.5 h-3.5 text-[#10B981] shrink-0" />
                      <span>🎓 CGPA: 7.50</span>
                    </p>
                    <ArrowUpRight className="w-4 h-4 text-[#10B981] opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0 ml-1" />
                  </div>
                </a>

              </div>
            </motion.div>

            {/* ======================================================== */}
            {/* 4. CURRENTLY BUILDING AT CATI AI (Bento Grid 2x2) */}
            {/* ======================================================== */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-3xl p-6 sm:p-7 space-y-5"
            >
              <div className="flex items-center justify-between">
                <h3 className="font-heading font-extrabold text-lg text-slate-900 dark:text-white flex items-center gap-2">
                  <span>⚡ Active Work Streams @ Cati AI</span>
                </h3>
                <span className="text-[10px] font-extrabold uppercase px-2.5 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950/80 text-emerald-800 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800">
                  Nov 2025 – Present
                </span>
              </div>

              {/* 2x2 Bento Work Streams */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                {/* Work Stream 1 */}
                <div className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-2xl p-4 shadow-2xs space-y-1.5 hover:border-emerald-500/60 transition-colors">
                  <div className="flex items-center justify-between">
                    <span className="text-[9px] font-black uppercase tracking-wider px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 flex items-center gap-1">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 inline-block" />
                      ACTIVE
                    </span>
                    <span className="text-[10px] font-mono text-slate-500">01</span>
                  </div>
                  <h4 className="font-heading font-extrabold text-sm text-slate-900 dark:text-white">
                    0→1 Healthcare MVP Scope
                  </h4>
                  <p className="text-xs text-slate-600 dark:text-slate-300 font-medium">
                    Synthesized user needs across 12 pilot provider discoveries into core feature sets.
                  </p>
                </div>

                {/* Work Stream 2 */}
                <div className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-2xl p-4 shadow-2xs space-y-1.5 hover:border-emerald-500/60 transition-colors">
                  <div className="flex items-center justify-between">
                    <span className="text-[9px] font-black uppercase tracking-wider px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 flex items-center gap-1">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 inline-block" />
                      ACTIVE
                    </span>
                    <span className="text-[10px] font-mono text-slate-500">02</span>
                  </div>
                  <h4 className="font-heading font-extrabold text-sm text-slate-900 dark:text-white">
                    End-to-End PRDs
                  </h4>
                  <p className="text-xs text-slate-600 dark:text-slate-300 font-medium">
                    Authored 5 structured PRDs and 30+ detailed user stories with clear acceptance criteria.
                  </p>
                </div>

                {/* Work Stream 3 */}
                <div className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-2xl p-4 shadow-2xs space-y-1.5 hover:border-emerald-500/60 transition-colors">
                  <div className="flex items-center justify-between">
                    <span className="text-[9px] font-black uppercase tracking-wider px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 flex items-center gap-1">
                      <CheckSquare className="w-3 h-3 text-[#10B981]" />
                      SHIPPED
                    </span>
                    <span className="text-[10px] font-mono text-slate-500">03</span>
                  </div>
                  <h4 className="font-heading font-extrabold text-sm text-slate-900 dark:text-white">
                    Interactive Prototyping
                  </h4>
                  <p className="text-xs text-slate-600 dark:text-slate-300 font-medium">
                    Designed 10+ voice & text AI workflows and 20+ interactive screens in Figma.
                  </p>
                </div>

                {/* Work Stream 4 */}
                <div className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-2xl p-4 shadow-2xs space-y-1.5 hover:border-emerald-500/60 transition-colors">
                  <div className="flex items-center justify-between">
                    <span className="text-[9px] font-black uppercase tracking-wider px-2 py-0.5 rounded bg-amber-100 text-amber-800 flex items-center gap-1">
                      <Clock className="w-3 h-3 text-amber-600" />
                      IN PROGRESS
                    </span>
                    <span className="text-[10px] font-mono text-slate-500">04</span>
                  </div>
                  <h4 className="font-heading font-extrabold text-sm text-slate-900 dark:text-white">
                    UAT & Feedback Loops
                  </h4>
                  <p className="text-xs text-slate-600 dark:text-slate-300 font-medium">
                    Managing usability issue tracking and rapid iteration cycles with engineering teams.
                  </p>
                </div>

              </div>
            </motion.div>

          </div>

        </div>

      </div>
    </section>
  );
};
