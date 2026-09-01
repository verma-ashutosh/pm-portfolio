import React from 'react';
import { personalInfo } from '../data/portfolioData';
import { FileText, ArrowDown } from 'lucide-react';

export const Hero = () => {
  return (
    <section id="hero" className="pt-28 pb-12 sm:pt-32 sm:pb-16 bg-[#FAFAFA] text-[#18181B] border-b border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Core Identity & Details */}
          <div className="md:col-span-8 space-y-4 text-left">
            
            {/* Status Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200">
              <span className="h-2 w-2 rounded-full bg-slate-700"></span>
              <span className="text-[11px] font-semibold text-slate-700 uppercase tracking-wide">
                Open to Product Intern & APM Roles • Noida, UP, India
              </span>
            </div>

            {/* Name & Title */}
            <div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#18181B] leading-tight">
                Ashutosh Verma
              </h1>
              <p className="text-base sm:text-lg font-bold text-slate-700 mt-1">
                Early-career product professional
              </p>
            </div>

            {/* Value Statement */}
            <p className="text-xs sm:text-sm text-[#52525B] leading-relaxed font-normal max-w-xl">
              {personalInfo.valueStatement}
            </p>

            {/* 3 Short Bullets */}
            <div className="space-y-1.5 pt-1 text-xs text-slate-700 font-medium">
              {personalInfo.heroBullets.map((bullet, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-800 shrink-0" />
                  <span>{bullet}</span>
                </div>
              ))}
            </div>

            {/* 2 Primary Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-3">
              <a
                href={personalInfo.resumePdf}
                download="Ashutosh-Verma-APM-Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-[#18181B] text-white font-semibold text-xs hover:bg-[#3F3F46] transition-colors duration-150 cursor-pointer"
              >
                <FileText className="w-3.5 h-3.5 text-slate-300" />
                <span>Download Resume</span>
              </a>

              <a
                href="#product-work"
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-white text-slate-800 border border-slate-200 font-semibold text-xs hover:bg-slate-50 transition-colors duration-150"
              >
                <span>View Product Work</span>
                <ArrowDown className="w-3.5 h-3.5 text-slate-500" />
              </a>
            </div>

          </div>

          {/* Right Column: Circular Profile Avatar */}
          <div className="md:col-span-4 flex justify-center md:justify-end">
            <div className="relative p-1 bg-white border border-slate-200 rounded-full shadow-2xs">
              <img
                src="./avatar.jpg"
                alt="Ashutosh Verma - Early-career product professional"
                className="w-32 h-32 sm:w-40 sm:h-40 rounded-full object-cover"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
