import React from 'react';
import { experienceList } from '../data/portfolioData';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

export const Experience = () => {
  return (
    <section id="experience" className="py-14 bg-[#F4F5F7] text-[#18181B] border-b border-slate-200/80">
      <div className="w-full max-w-[1440px] mx-auto px-4 md:px-8 space-y-8">
        
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

        {/* Timeline Stack */}
        <div className="space-y-4">
          {experienceList.map((exp, idx) => (
            <div
              key={idx}
              className="bg-white border border-slate-200/90 rounded-xl p-5 space-y-3 shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:border-slate-300 transition-colors"
            >
              {/* Header Row */}
              <div className="flex flex-wrap items-start justify-between gap-2">
                <div>
                  <div className="flex items-center gap-2 flex-wrap">
                    <h3 className="font-bold text-base text-[#18181B]">
                      {exp.role}
                    </h3>
                    {exp.badge && (
                      <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-slate-100 text-slate-700 border border-slate-200">
                        {exp.badge}
                      </span>
                    )}
                  </div>

                  <div className="flex items-center gap-2 text-xs font-medium text-slate-600 mt-0.5">
                    <span className="flex items-center gap-1">
                      <Briefcase className="w-3.5 h-3.5 text-slate-400" />
                      {exp.company}
                    </span>
                    <span className="text-slate-300">•</span>
                    <span className="flex items-center gap-1 text-slate-500 font-normal">
                      <MapPin className="w-3.5 h-3.5" />
                      {exp.location}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-1 text-xs font-semibold text-slate-500 bg-slate-50 px-3 py-1 rounded-md border border-slate-200">
                  <Calendar className="w-3.5 h-3.5 text-slate-400" />
                  <span>{exp.period}</span>
                </div>
              </div>

              {/* Bullets */}
              <div className="space-y-1.5 pt-2 border-t border-slate-100 text-xs text-[#52525B]">
                {exp.bullets.map((bullet, bIdx) => (
                  <div key={bIdx} className="flex items-start gap-2 leading-relaxed">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-700 shrink-0 mt-1.5" />
                    <p>
                      {bullet.includes(':') ? (
                        <>
                          <strong className="font-bold text-[#18181B]">
                            {bullet.split(':')[0]}:
                          </strong>
                          {bullet.substring(bullet.indexOf(':') + 1)}
                        </>
                      ) : (
                        bullet
                      )}
                    </p>
                  </div>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
