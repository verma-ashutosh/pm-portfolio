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
          
          {/* Vertical Timeline Line (Absolute Positioned 2px wide #333333) */}
          <div className="absolute left-3 sm:left-4 top-4 bottom-4 w-[2px] bg-[#333333] z-0" />

          {experienceList.map((exp, idx) => (
            <div key={idx} className="relative z-10">
              
              {/* Timeline Node Dot */}
              <div className="absolute left-[5px] sm:left-[9px] top-6 w-3.5 h-3.5 rounded-full bg-[#121212] border-2 border-[#555555] -translate-x-1/2 z-20" />

              {/* Experience Card (Dark Monochrome #1A1A1A) */}
              <div className="ml-8 sm:ml-10 bg-[#1A1A1A] border border-[#2A2A2A] rounded-2xl p-6 shadow-md space-y-4 text-white">
                
                {/* Header Row (Flexbox) */}
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 pb-3 border-b border-[#2A2A2A]">
                  <div>
                    <h3 className="font-bold text-base sm:text-lg text-[#F5F5F5] leading-snug">
                      {exp.role}
                    </h3>
                    <div className="flex items-center gap-2 text-xs font-semibold text-[#A1A1AA] mt-1">
                      <span className="flex items-center gap-1.5 text-slate-200">
                        <Briefcase className="w-3.5 h-3.5 text-slate-400" />
                        {exp.company}
                      </span>
                      <span className="text-[#555]">•</span>
                      <span className="flex items-center gap-1 font-normal text-[#A1A1AA]">
                        <MapPin className="w-3.5 h-3.5 text-slate-500" />
                        {exp.location}
                      </span>
                    </div>
                  </div>

                  {/* Date Pill Shape Right Side */}
                  <div className="px-3 py-1 rounded-full bg-[#121212] border border-[#333333] text-xs font-mono text-[#A1A1AA] shrink-0 self-start">
                    <span>{exp.period}</span>
                  </div>
                </div>

                {/* Bullet Points: Custom Flex Layout (No standard <ul> discs) */}
                <div className="space-y-3 pt-1">
                  {exp.bullets.map((bullet, bIdx) => (
                    <div key={bIdx} className="flex items-start gap-3">
                      {/* Left Column: Small Dark Square Box with Emoji/Icon */}
                      <div className="w-8 h-8 rounded-lg bg-[#262626] border border-[#333333] flex items-center justify-center text-sm shrink-0 mt-0.5 shadow-2xs">
                        <span>{bullet.icon}</span>
                      </div>

                      {/* Right Column: Text with bold highlights */}
                      <div className="text-xs sm:text-sm text-[#D4D4D8] font-normal leading-relaxed pt-1">
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
