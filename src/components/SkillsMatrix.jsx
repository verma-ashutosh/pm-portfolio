import React from 'react';
import { skillsMatrix } from '../data/portfolioData';

export const SkillsMatrix = () => {
  return (
    <section id="skills" className="py-14 bg-[#FAFAFA] text-[#18181B] border-b border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-8">
        
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
        <div className="bg-white border border-slate-200 rounded-xl p-5 space-y-4">
          {skillsMatrix.map((group, gIdx) => (
            <div key={gIdx} className="space-y-2 pb-3 border-b border-slate-100 last:border-none last:pb-0">
              <h3 className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {group.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="px-3 py-1 rounded-md bg-slate-100 text-slate-800 text-xs font-medium border border-slate-200"
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
