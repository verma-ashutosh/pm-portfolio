import React from 'react';
import { experienceList } from '../data/portfolioData';
import { Briefcase, MapPin } from 'lucide-react';

export const Experience = () => {
  return (
    <section id="experience" className="py-14 bg-[#F4F5F7] text-[#18181B] border-b border-slate-200/80">
      {/* Central 1200px container width */}
      <div className="w-full max-w-[1200px] mx-auto px-6 md:px-12 space-y-8">
        
        {/* Header */}
        <div className="text-center max-w-xl mx-auto space-y-1">
          <span className="text-[10px] font-semibold uppercase tracking-widest text-slate-500">
            • CAREER & IMPACT
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#18181B] tracking-tight">
            Work Experience
          </h2>
          <p className="text-xs text-slate-600 font-normal">
            Product ownership, customer discovery, PRDs, and growth execution.
          </p>
        </div>

        {/* Relative Vertical Timeline Container */}
        <div className="relative pl-2 sm:pl-4 space-y-6">
          
          {/* Vertical Timeline Line */}
          <div className="absolute left-3 sm:left-4 top-4 bottom-4 w-[2px] bg-[#4A5568] z-0" />

          {experienceList.map((exp, idx) => (
            <div key={idx} className="relative z-10">
              
              {/* Timeline Node Dot */}
              <div className="absolute left-[5px] sm:left-[9px] top-6 w-3.5 h-3.5 rounded-full bg-[#1A202C] border-2 border-[#CBD5E1] -translate-x-1/2 z-20 shadow-xs" />

              {/* Experience Card (Charcoal/Slate Grey #2D3748) */}
              <div className="ml-8 sm:ml-10 bg-[#2D3748] border border-[#4A5568] rounded-2xl p-6 shadow-md space-y-4 text-white">
                
                {/* Header Row (Flexbox) */}
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 pb-3 border-b border-[#4A5568]">
                  <div>
                    {/* Primary Role Title (Bright White #FFFFFF) */}
                    <h3 className="font-bold text-base sm:text-lg text-white leading-snug">
                      {exp.role}
                    </h3>
                    {/* Secondary Info (Soft Light Grey #E2E8F0 / #CBD5E1) */}
                    <div className="flex items-center gap-2 text-xs font-medium text-[#E2E8F0] mt-1">
                      <span className="flex items-center gap-1.5 text-[#E2E8F0]">
                        <Briefcase className="w-3.5 h-3.5 text-[#CBD5E1]" />
                        {exp.company}
                      </span>
                      <span className="text-[#A0AEC0]">•</span>
                      <span className="flex items-center gap-1 text-[#CBD5E1]">
                        <MapPin className="w-3.5 h-3.5 text-[#A0AEC0]" />
                        {exp.location}
                      </span>
                    </div>
                  </div>

                  {/* Date Pill Background: Darker than card background (rgba(0,0,0, 0.25)) */}
                  <div className="px-3 py-1 rounded-full bg-black/25 border border-[#4A5568] text-xs font-mono text-[#E2E8F0] shrink-0 self-start">
                    <span>{exp.period}</span>
                  </div>
                </div>

                {/* Bullet Points: Custom Flex Layout */}
                <div className="space-y-3 pt-1">
                  {exp.bullets.map((bullet, bIdx) => (
                    <div key={bIdx} className="flex items-start gap-3">
                      {/* Left Column: Bullet Icon Box (#4A5568 - Slightly lighter than card) */}
                      <div className="w-8 h-8 rounded-lg bg-[#4A5568] border border-[#718096] flex items-center justify-center text-sm shrink-0 mt-0.5 shadow-2xs">
                        <span>{bullet.icon}</span>
                      </div>

                      {/* Right Column: Bullet text (#E2E8F0 / #CBD5E1, Bold metrics #FFFFFF) */}
                      <div className="text-xs sm:text-sm text-[#E2E8F0] font-normal leading-relaxed pt-1 [&_strong]:text-white [&_strong]:font-bold">
                        <span dangerouslySetInnerHTML={{ __html: bullet.text }} />
                      </div>
                    </div>
                  ))}
                </div>

              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};
