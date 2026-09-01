import React from 'react';
import { personalInfo, aboutContent, educationList } from '../data/portfolioData';
import { MapPin, GraduationCap, Briefcase, Clock, FileText, ExternalLink, Linkedin } from 'lucide-react';

export const AboutEducation = () => {
  return (
    <section id="about" className="py-14 bg-[#F4F5F7] text-[#18181B] border-b border-slate-200/80">
      {/* 2-Column layout (~30% left, ~70% right) constrained within central 1200px container */}
      <div className="w-full max-w-[1200px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* ======================================================== */}
          {/* LEFT COLUMN: Sticky Profile Card (~30% split / 4 cols) */}
          {/* ======================================================== */}
          <div className="lg:col-span-4 lg:sticky lg:top-28 bg-white border border-slate-200/90 rounded-[24px] p-6 space-y-5 shadow-[0_4px_20px_rgba(0,0,0,0.05)]">
            
            {/* Top Avatar */}
            <div className="text-center">
              <img
                src="./avatar.jpg"
                alt="Ashutosh Verma"
                className="w-24 h-24 sm:w-28 sm:h-28 mx-auto rounded-full object-cover border-2 border-slate-100 shadow-2xs"
              />
              {/* Name H3 */}
              <h3 className="mt-3 font-bold text-xl text-center text-[#18181B] tracking-tight">
                Ashutosh Verma
              </h3>
              {/* Title in Indigo Accent */}
              <p className="text-xs font-bold text-indigo-600 text-center uppercase tracking-wide mt-0.5">
                Founding Operator | APM
              </p>
            </div>

            {/* List Items with Icons */}
            <div className="space-y-2.5 pt-3 border-t border-slate-100 text-xs font-semibold text-slate-700">
              <div className="flex items-center gap-2.5">
                <MapPin className="w-4 h-4 text-slate-400 shrink-0" />
                <span>Noida, India</span>
              </div>
              <div className="flex items-center gap-2.5">
                <GraduationCap className="w-4 h-4 text-slate-400 shrink-0" />
                <span>Masai BITSOM</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Briefcase className="w-4 h-4 text-slate-400 shrink-0" />
                <span>CATI AI · Nov 2025–Present</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-slate-400 shrink-0" />
                <span>Open to APM & Intern roles</span>
              </div>
            </div>

            {/* Stacked Action Buttons */}
            <div className="space-y-2.5 pt-3 border-t border-slate-100">
              {/* Button 1: Solid Black */}
              <a
                href={personalInfo.resumePdf}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-[#18181B] hover:bg-[#3F3F46] text-white font-bold text-xs transition-colors cursor-pointer shadow-xs"
              >
                <FileText className="w-3.5 h-3.5 text-slate-300" />
                <span>Download Resume</span>
              </a>

              {/* Button 2: Light Grey Notion Link */}
              <a
                href="#product-work"
                className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs border border-slate-200 transition-colors cursor-pointer"
              >
                <ExternalLink className="w-3.5 h-3.5 text-slate-500" />
                <span>Notion Portfolio</span>
              </a>

              {/* Button 3: Grey LinkedIn Link */}
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs border border-slate-200 transition-colors cursor-pointer"
              >
                <Linkedin className="w-3.5 h-3.5 text-slate-600" />
                <span>LinkedIn</span>
              </a>
            </div>

          </div>

          {/* ======================================================== */}
          {/* RIGHT COLUMN: About Me & Education (~70% split / 8 cols) */}
          {/* ======================================================== */}
          <div className="lg:col-span-8 space-y-8">
            
            {/* Top Tag & Main Impact Headline */}
            <div className="space-y-3">
              <span className="px-3 py-1 rounded-full bg-slate-200 text-slate-700 text-xs font-bold uppercase tracking-wider inline-block">
                • ABOUT ME
              </span>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#18181B] tracking-tight leading-snug">
                "{aboutContent.headline}"
              </h2>
            </div>

            {/* Paragraphs */}
            <div className="space-y-3.5 text-xs sm:text-sm text-[#52525B] leading-relaxed font-normal">
              <p>{aboutContent.paragraph1}</p>
              <p>{aboutContent.paragraph2}</p>
              <p>{aboutContent.paragraph3}</p>

              {/* Small Grey Footer Text */}
              <p className="text-xs text-slate-500 font-semibold pt-1">
                {aboutContent.footerLocationText}
              </p>
            </div>

            {/* Bottom Education Section (Horizontal 3-Card Grid) */}
            <div className="pt-6 border-t border-slate-200/80 space-y-4">
              <h3 className="font-bold text-sm text-[#18181B] uppercase tracking-wider flex items-center gap-2">
                <GraduationCap className="w-4 h-4 text-indigo-600" />
                <span>Education & Credentials</span>
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {educationList.map((edu, idx) => (
                  <div
                    key={idx}
                    className="bg-white border border-slate-200/90 rounded-xl p-4 flex flex-col justify-between shadow-[0_2px_8px_rgba(0,0,0,0.03)]"
                  >
                    <div>
                      <h4 className="font-bold text-sm text-[#18181B] leading-snug">
                        {edu.institution}
                      </h4>
                      <p className="text-xs font-semibold text-indigo-600 mt-1">
                        {edu.program}
                      </p>
                    </div>

                    <p className="text-[11px] font-medium text-slate-500 mt-3 pt-2 border-t border-slate-100">
                      {edu.period}
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
