import React from 'react';
import { experienceList } from '../data/portfolioData';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

export const Experience = () => {
  return (
    <section id="experience" className="py-24 bg-[#FAFAFA] text-[#18181B] border-b border-slate-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header & Section Title */}
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-16 space-y-2">
          <span className="text-xs font-semibold uppercase tracking-widest text-slate-500">
            • CAREER JOURNEY
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#18181B] tracking-tight">
            Work Experience
          </h2>
          <p className="text-sm font-normal text-slate-600 leading-relaxed">
            Building 0→1 products, scaling operational funnels, and driving measurable impact.
          </p>
        </div>

        {/* Minimal Vertical Timeline */}
        <div className="relative pl-6 sm:pl-8 border-l border-slate-300 space-y-8 ml-2 sm:ml-4">
          {experienceList.map((exp, idx) => (
            <div key={idx} className="relative">
              
              {/* Timeline Node Dot */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-6 w-3.5 h-3.5 rounded-full bg-slate-700 border-2 border-white shadow-2xs" />

              {/* Experience Card */}
              <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-7 space-y-4">
                
                {/* Header Info */}
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <div className="flex items-center gap-2 flex-wrap mb-1">
                      <h3 className="font-bold text-base sm:text-lg text-[#18181B] leading-snug">
                        {exp.role}
                      </h3>
                      {exp.badge && (
                        <span className="text-[10px] font-semibold px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700 border border-slate-200 uppercase tracking-wide">
                          {exp.badge}
                        </span>
                      )}
                    </div>

                    <div className="flex flex-wrap items-center gap-2.5 text-xs font-semibold text-slate-700">
                      <span className="flex items-center gap-1.5">
                        <Briefcase className="w-3.5 h-3.5 text-slate-500" />
                        {exp.company}
                      </span>
                      <span className="text-slate-300">•</span>
                      <span className="flex items-center gap-1 text-slate-500 font-normal">
                        <MapPin className="w-3.5 h-3.5" />
                        {exp.location}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-600 bg-slate-100 px-3 py-1 rounded-full border border-slate-200">
                    <Calendar className="w-3.5 h-3.5 text-slate-500" />
                    <span>{exp.period}</span>
                  </div>
                </div>

                {/* Impact Bullets */}
                <div className="space-y-2 pt-2 border-t border-slate-100">
                  {exp.bullets.map((bullet, bIdx) => (
                    <div key={bIdx} className="text-xs sm:text-sm text-[#52525B] leading-relaxed flex items-start gap-2">
                      <span className="text-slate-400 font-bold shrink-0 mt-0.5">•</span>
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
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
