import React from 'react';
import { personalInfo } from '../data/portfolioData';
import { GraduationCap, Award, Dna, ArrowUpRight, CheckCircle2, Briefcase, MapPin, FileText, BookOpen, Linkedin, CheckSquare, Clock } from 'lucide-react';

export const AboutEducation = ({ onOpenResume }) => {
  return (
    <section id="about" className="py-24 bg-[#FAFAFA] text-[#18181B] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid: Left Profile Card (Sticky) + Right Story & Qualifications */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* 1. LEFT STICKY PROFILE CARD */}
          <div className="lg:col-span-4 lg:sticky lg:top-28 bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 space-y-6">
            
            {/* Profile Avatar */}
            <div className="text-center">
              <div className="inline-block p-1 bg-white border border-slate-200 rounded-full shadow-2xs">
                <img
                  src="./avatar.jpg"
                  alt="Ashutosh Verma - Product & Strategy Associate"
                  className="w-28 h-28 sm:w-32 sm:h-32 object-cover rounded-full mx-auto"
                />
              </div>

              {/* Name & Title */}
              <h2 className="mt-4 font-bold text-xl text-[#18181B] tracking-tight">
                Ashutosh Verma
              </h2>
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide mt-1">
                PRODUCT & STRATEGY ASSOCIATE (FOUNDING TEAM)
              </p>
            </div>

            {/* Details List */}
            <div className="space-y-3 pt-2 border-t border-slate-100 text-xs font-medium text-slate-700">
              
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-slate-100 text-slate-700 shrink-0 border border-slate-200">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-slate-400 font-medium block text-[10px] uppercase tracking-wider">Location</span>
                  <span className="font-semibold text-[#18181B]">Noida, UP, India</span>
                </div>
              </div>

              {/* Education Link */}
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-slate-100 text-slate-700 shrink-0 border border-slate-200">
                  <GraduationCap className="w-4 h-4" />
                </div>
                <div className="space-y-1 w-full">
                  <span className="text-slate-400 font-medium block text-[10px] uppercase tracking-wider">Education</span>
                  
                  <a 
                    href="https://www.linkedin.com/in/ashutosh-verma-pm/overlay/Position/2767935916/treasury/?profileId=ACoAADE-bjABLuw06kN64POkD8LMs5yo4WfonjY" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="group block text-xs text-[#18181B] font-bold hover:text-slate-600 transition-colors"
                  >
                    <div className="flex items-center justify-between">
                      <span>Product Management (Agentic & Generative AI)</span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-slate-400" />
                    </div>
                    <span className="block text-[11px] text-slate-500 font-semibold">Masai × BITSoM</span>
                  </a>
                </div>
              </div>

              {/* Current Role */}
              <div className="flex items-start gap-3 pt-1 border-t border-slate-100">
                <div className="p-2 rounded-lg bg-slate-100 text-slate-700 shrink-0 border border-slate-200">
                  <Briefcase className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-slate-400 font-medium block text-[10px] uppercase tracking-wider">Current Role</span>
                  <span className="font-semibold text-[#18181B]">Product & Strategy Associate at Cati AI (Nov 2025 – Present)</span>
                </div>
              </div>

              {/* Status */}
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-slate-100 text-slate-700 shrink-0 border border-slate-200">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-slate-400 font-medium block text-[10px] uppercase tracking-wider">Status</span>
                  <span className="text-slate-800 font-bold flex items-center gap-1.5">
                    <span className="h-2 w-2 rounded-full bg-slate-700 inline-block" />
                    Open for Product Management Roles
                  </span>
                </div>
              </div>

            </div>

            {/* Action Buttons */}
            <div className="space-y-2 pt-3 border-t border-slate-100">
              <a
                href="/Ashutosh_Verma_Resume.pdf"
                download="Ashutosh_Verma_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#18181B] text-white font-semibold text-xs hover:bg-[#3F3F46] transition-colors cursor-pointer"
              >
                <FileText className="w-4 h-4 text-slate-300" />
                <span>Download Resume</span>
              </a>

              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-white text-slate-800 border border-slate-200 font-semibold text-xs hover:bg-slate-50 transition-colors"
              >
                <Linkedin className="w-4 h-4 text-slate-600" />
                <span>LinkedIn Profile</span>
              </a>
            </div>

          </div>

          {/* 2. RIGHT COLUMN: STORY & QUALIFICATIONS */}
          <div className="lg:col-span-8 space-y-10">
            
            {/* Top Eyebrow & Headline */}
            <div className="space-y-2">
              <span className="text-xs font-semibold uppercase tracking-widest text-slate-500">
                • ABOUT ME
              </span>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#18181B] tracking-tight leading-tight">
                "I turn ambiguous user problems into shipped 0→1 AI products."
              </h2>
            </div>

            {/* High-Impact Bio Card */}
            <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 space-y-4 text-sm text-[#52525B] leading-relaxed">
              <p>
                As a <strong className="font-bold text-[#18181B]">Product & Strategy Associate</strong> on the founding team at <strong className="font-bold text-[#18181B]">Cati AI</strong>, I operate right where customer insights meet rapid execution. From conducting discovery across <strong className="font-bold text-[#18181B]">12+ healthcare providers</strong> to scoping MVPs, authoring <strong className="font-bold text-[#18181B]">5+ PRDs</strong>, and prototyping <strong className="font-bold text-[#18181B]">20+ Figma screens</strong>, I build products from the ground up.
              </p>
              <p>
                Before stepping into AI products, I sharpened my business and growth muscle by <strong className="font-bold text-[#18181B]">scaling bookings 3x</strong> at <strong className="font-bold text-[#18181B]">Pie Rooms</strong> and streamlining operations at <strong className="font-bold text-[#18181B]">Secret Private Cafe</strong>.
              </p>
              <p>
                Backed by a background in <strong className="font-bold text-[#18181B]">Biotech</strong> and specialized AI PM training from <strong className="font-bold text-[#18181B]">Masai × BITSoM (94% Capstone Score)</strong>, I thrive on validating hard problems fast, eliminating workflow friction, and driving measurable outcomes.
              </p>

              {/* Micro-Pills */}
              <div className="pt-3 border-t border-slate-100 flex flex-wrap gap-2 text-xs font-medium">
                <span className="px-3 py-1 rounded-md bg-slate-100 text-slate-700 border border-slate-200">
                  0→1 Product Strategy
                </span>
                <span className="px-3 py-1 rounded-md bg-slate-100 text-slate-700 border border-slate-200">
                  Customer Discovery
                </span>
                <span className="px-3 py-1 rounded-md bg-slate-100 text-slate-700 border border-slate-200">
                  PRDs & Prototyping
                </span>
                <span className="px-3 py-1 rounded-md bg-slate-100 text-slate-700 border border-slate-200">
                  AI Workflows
                </span>
              </div>
            </div>

            {/* 3. EDUCATION GRID */}
            <div className="space-y-4">
              <h3 className="font-bold text-base text-[#18181B] flex items-center gap-2">
                <GraduationCap className="w-4 h-4 text-slate-700" />
                <span>Academic & Professional Qualifications</span>
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                
                {/* Card 1: Masai × BITSoM */}
                <a 
                  href="https://www.linkedin.com/in/ashutosh-verma-pm/overlay/Position/2767935916/treasury/?profileId=ACoAADE-bjABLuw06kN64POkD8LMs5yo4WfonjY" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-white border border-slate-200 rounded-2xl p-5 hover:bg-slate-50 transition-colors cursor-pointer space-y-3 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between gap-1 mb-2">
                      <span className="text-[10px] font-semibold uppercase tracking-wider text-slate-700 bg-slate-100 px-2 py-0.5 rounded border border-slate-200">
                        Masai × BITSoM
                      </span>
                      <span className="text-[10px] text-slate-500 font-medium">
                        2025 – 2026
                      </span>
                    </div>
                    <h4 className="font-bold text-xs text-[#18181B] leading-snug">
                      Product Management (Agentic & Generative AI)
                    </h4>
                  </div>
                  
                  <div className="pt-2 border-t border-slate-100 flex items-center justify-between">
                    <p className="text-[11px] text-slate-700 font-semibold flex items-center gap-1">
                      <Award className="w-3.5 h-3.5 text-slate-600 shrink-0" />
                      <span>Certificate of Excellence (94%)</span>
                    </p>
                    <ArrowUpRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                  </div>
                </a>

                {/* Card 2: University of Jammu */}
                <a 
                  href="https://www.linkedin.com/school/university-of-jammu/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-white border border-slate-200 rounded-2xl p-5 hover:bg-slate-50 transition-colors cursor-pointer space-y-3 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between gap-1 mb-2">
                      <span className="text-[10px] font-semibold uppercase tracking-wider text-slate-700 bg-slate-100 px-2 py-0.5 rounded border border-slate-200">
                        University of Jammu
                      </span>
                      <span className="text-[10px] text-slate-500 font-medium">
                        2023 – 2025
                      </span>
                    </div>
                    <h4 className="font-bold text-xs text-[#18181B] leading-snug">
                      M.Sc. Biotechnology
                    </h4>
                  </div>
                  
                  <div className="pt-2 border-t border-slate-100 flex items-center justify-between">
                    <p className="text-[11px] text-slate-700 font-semibold flex items-center gap-1">
                      <Dna className="w-3.5 h-3.5 text-slate-600 shrink-0" />
                      <span>CGPA: 8.87 • GAT-B AIR 96</span>
                    </p>
                    <ArrowUpRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                  </div>
                </a>

                {/* Card 3: Kirori Mal College */}
                <a 
                  href="https://www.linkedin.com/school/kirorimalcollege/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-white border border-slate-200 rounded-2xl p-5 hover:bg-slate-50 transition-colors cursor-pointer space-y-3 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between gap-1 mb-2">
                      <span className="text-[10px] font-semibold uppercase tracking-wider text-slate-700 bg-slate-100 px-2 py-0.5 rounded border border-slate-200">
                        Kirori Mal College, DU
                      </span>
                      <span className="text-[10px] text-slate-500 font-medium">
                        2019 – 2022
                      </span>
                    </div>
                    <h4 className="font-bold text-xs text-[#18181B] leading-snug">
                      B.Sc. (Hons) Botany
                    </h4>
                  </div>
                  
                  <div className="pt-2 border-t border-slate-100 flex items-center justify-between">
                    <p className="text-[11px] text-slate-700 font-semibold flex items-center gap-1">
                      <GraduationCap className="w-3.5 h-3.5 text-slate-600 shrink-0" />
                      <span>CGPA: 7.50</span>
                    </p>
                    <ArrowUpRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                  </div>
                </a>

              </div>
            </div>

            {/* 4. CURRENTLY BUILDING AT CATI AI (2x2 Grid) */}
            <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 space-y-5">
              <div className="flex items-center justify-between">
                <h3 className="font-bold text-base text-[#18181B]">
                  Active Work Streams @ Cati AI
                </h3>
                <span className="text-[10px] font-semibold uppercase px-2.5 py-0.5 rounded-md bg-slate-100 text-slate-700 border border-slate-200">
                  Nov 2025 – Present
                </span>
              </div>

              {/* 2x2 Work Streams */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 space-y-1.5">
                  <div className="flex items-center justify-between">
                    <span className="text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-slate-200 text-slate-800">
                      ACTIVE
                    </span>
                    <span className="text-[10px] font-mono text-slate-400">01</span>
                  </div>
                  <h4 className="font-bold text-xs text-[#18181B]">
                    0→1 Healthcare MVP Scope
                  </h4>
                  <p className="text-xs text-slate-600 font-normal">
                    Synthesized user needs across 12 pilot provider discoveries into core feature sets.
                  </p>
                </div>

                <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 space-y-1.5">
                  <div className="flex items-center justify-between">
                    <span className="text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-slate-200 text-slate-800">
                      ACTIVE
                    </span>
                    <span className="text-[10px] font-mono text-slate-400">02</span>
                  </div>
                  <h4 className="font-bold text-xs text-[#18181B]">
                    End-to-End PRDs
                  </h4>
                  <p className="text-xs text-slate-600 font-normal">
                    Authored 5 structured PRDs and 30+ detailed user stories with clear acceptance criteria.
                  </p>
                </div>

                <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 space-y-1.5">
                  <div className="flex items-center justify-between">
                    <span className="text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-slate-200 text-slate-800">
                      SHIPPED
                    </span>
                    <span className="text-[10px] font-mono text-slate-400">03</span>
                  </div>
                  <h4 className="font-bold text-xs text-[#18181B]">
                    Interactive Prototyping
                  </h4>
                  <p className="text-xs text-slate-600 font-normal">
                    Designed 10+ voice & text AI workflows and 20+ interactive screens in Figma.
                  </p>
                </div>

                <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 space-y-1.5">
                  <div className="flex items-center justify-between">
                    <span className="text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-slate-200 text-slate-800">
                      IN PROGRESS
                    </span>
                    <span className="text-[10px] font-mono text-slate-400">04</span>
                  </div>
                  <h4 className="font-bold text-xs text-[#18181B]">
                    UAT & Feedback Loops
                  </h4>
                  <p className="text-xs text-slate-600 font-normal">
                    Managing usability issue tracking and rapid iteration cycles with engineering teams.
                  </p>
                </div>

              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
