import React from 'react';
import { skillsMatrix } from '../data/portfolioData';

export const SkillsMatrix = () => {
  return (
    <section id="skills" className="py-14 bg-[#F4F5F7] text-[#18181B] border-b border-slate-200/80">
      <div className="w-full max-w-[1200px] mx-auto px-6 md:px-12 space-y-8">
        
        {/* Header */}
        <div className="text-center max-w-xl mx-auto space-y-1">
          <span className="text-[10px] font-semibold uppercase tracking-widest text-slate-500">
            • TOOLBOX & COMPETENCIES
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#18181B] tracking-tight">
            Skills & Tools
          </h2>
          <p className="text-xs text-slate-600 font-normal">
            Core product management competencies, design software, and AI stack.
          </p>
        </div>

        {/* Compact Categories */}
        <div className="bg-white border border-slate-200/90 rounded-xl p-5 space-y-4 shadow-[0_2px_8px_rgba(0,0,0,0.04)]">
          {skillsMatrix.map((group, gIdx) => (
            <div key={gIdx} className="space-y-2 pb-3 border-b border-slate-100 last:border-none last:pb-0">
              <h3 className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {group.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="px-3 py-1 rounded-md bg-slate-100 text-slate-800 text-xs font-medium border border-slate-200/60"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
