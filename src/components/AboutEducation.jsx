import React from 'react';
import { personalInfo, aboutContent, currentFocus, educationList } from '../data/portfolioData';
import { GraduationCap, MapPin, Mail, Linkedin, CheckCircle2 } from 'lucide-react';

export const AboutEducation = () => {
  return (
    <section id="about" className="py-14 bg-[#F4F5F7] text-[#18181B] border-b border-slate-200/80">
      <div className="w-full max-w-[1440px] mx-auto px-4 md:px-8 space-y-12">
        
        {/* About Grid: Left Profile Snapshot + Right Story */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Compact Profile Card */}
          <div className="md:col-span-4 bg-white border border-slate-200/90 rounded-xl p-5 space-y-4 shadow-[0_2px_8px_rgba(0,0,0,0.04)]">
            <div>
              <h3 className="font-bold text-sm text-[#18181B]">Ashutosh Verma</h3>
              <p className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">
                Founding Operator | APM
              </p>
              <div className="flex items-center gap-1.5 text-xs text-slate-600 mt-1">
                <MapPin className="w-3.5 h-3.5 text-slate-400" />
                <span>Noida, UP, India</span>
              </div>
            </div>

            {/* Bullets Snapshot */}
            <div className="space-y-2 pt-3 border-t border-slate-100 text-xs text-slate-600 font-normal">
              {aboutContent.bulletsCard.map((bullet, idx) => (
                <div key={idx} className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-700 shrink-0 mt-1.5" />
                  <span>{bullet}</span>
                </div>
              ))}
            </div>

            {/* Direct Contact Links */}
            <div className="pt-3 border-t border-slate-100 flex flex-wrap gap-2 text-xs font-semibold">
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-slate-700 hover:text-slate-900 underline underline-offset-2"
              >
                <Linkedin className="w-3.5 h-3.5 text-slate-500" />
                <span>LinkedIn</span>
              </a>
              <span className="text-slate-300">•</span>
              <a
                href={`mailto:${personalInfo.email}`}
                className="inline-flex items-center gap-1 text-slate-700 hover:text-slate-900 underline underline-offset-2"
              >
                <Mail className="w-3.5 h-3.5 text-slate-500" />
                <span>Email</span>
              </a>
            </div>
          </div>

          {/* Right Column: About Content */}
          <div className="md:col-span-8 space-y-4">
            <div>
              <span className="text-[10px] font-semibold uppercase tracking-widest text-slate-500">
                • ABOUT ME
              </span>
              <h2 className="text-2xl font-extrabold text-[#18181B] tracking-tight mt-0.5">
                Product Thinking & Commercial Execution
              </h2>
            </div>

            <div className="space-y-3 text-xs sm:text-sm text-[#52525B] leading-relaxed font-normal">
              <p>{aboutContent.paragraph1}</p>
              <p>{aboutContent.paragraph2}</p>
              <p>{aboutContent.paragraph3}</p>
            </div>

            {/* Current Focus Block */}
            <div className="bg-white border border-slate-200/90 rounded-xl p-4 space-y-2 mt-4 shadow-[0_2px_8px_rgba(0,0,0,0.04)]">
              <h4 className="font-bold text-xs text-[#18181B] uppercase tracking-wider flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-slate-700" />
                Current Focus
              </h4>
              <div className="space-y-1 text-xs text-slate-600 font-medium">
                {currentFocus.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-500 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>

        {/* Academic Qualifications */}
        <div className="space-y-3 pt-4 border-t border-slate-200/80">
          <div className="flex items-center gap-2">
            <GraduationCap className="w-4 h-4 text-slate-700" />
            <h3 className="font-bold text-sm text-[#18181B]">
              Education & Qualifications
            </h3>
          </div>

          <div className="bg-white border border-slate-200/90 rounded-xl divide-y divide-slate-100 shadow-[0_2px_8px_rgba(0,0,0,0.04)]">
            {educationList.map((edu, idx) => (
              <div key={idx} className="p-3.5 sm:p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs">
                <div>
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="font-bold text-[#18181B]">{edu.program}</span>
                    <span className="text-[10px] font-semibold px-2 py-0.5 rounded bg-slate-100 text-slate-700 border border-slate-200">
                      {edu.institution}
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-500 font-medium mt-0.5">{edu.details}</p>
                </div>
                <span className="text-[11px] text-slate-400 font-mono shrink-0">{edu.period}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
