import React from 'react';
import { experienceList } from '../data/portfolioData';
import { Briefcase, Calendar, MapPin, Sparkles } from 'lucide-react';

export const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-slate-50 dark:bg-[#0F172A] border-b border-slate-200 dark:border-slate-800">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header & Section Title */}
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-14 space-y-3">
          <span className="text-xs font-black uppercase tracking-widest text-emerald-800 dark:text-emerald-300 bg-emerald-100 dark:bg-emerald-950/80 px-3.5 py-1 rounded-full border border-emerald-200 dark:border-emerald-800">
            • CAREER JOURNEY
          </span>
          <h2 className="text-3xl sm:text-4xl font-heading font-black text-slate-900 dark:text-white tracking-tight">
            Experience
          </h2>
          <p className="text-sm font-medium text-slate-600 dark:text-slate-400 leading-relaxed">
            Building 0→1 products, scaling operational funnels, and driving measurable impact.
          </p>
        </div>

        {/* Interactive Vertical Timeline Container */}
        <div className="relative pl-6 sm:pl-10 border-l-2 border-[#10B981]/50 space-y-8 sm:space-y-10 ml-2 sm:ml-4">
          {experienceList.map((exp, idx) => (
            <div
              key={idx}
              className="relative group"
            >
              {/* Timeline Node Marker */}
              <div 
                className="absolute -left-[31px] sm:-left-[47px] top-6 w-5 h-5 rounded-full bg-[#10B981] border-4 border-slate-100 dark:border-slate-900 shadow-sm group-hover:scale-125 group-hover:bg-emerald-400 transition-all duration-200"
                style={{ willChange: 'transform' }}
              />

              {/* Experience Card (Lightweight 2D CSS Hover) */}
              <div
                style={{ willChange: 'transform' }}
                className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-3xl p-6 sm:p-7 shadow-sm hover:-translate-y-1 hover:border-[#10B981]/80 hover:shadow-md transition-all duration-200 ease-out space-y-4"
              >
                {/* Header Info */}
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <div className="flex items-center gap-2 flex-wrap mb-1">
                      <h3 className="font-heading font-black text-lg sm:text-xl text-slate-900 dark:text-white leading-snug">
                        {exp.role}
                      </h3>
                      {exp.badge && (
                        <span className="text-[10px] font-black px-3 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-950/80 text-emerald-800 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800">
                          {exp.badge}
                        </span>
                      )}
                    </div>

                    <div className="flex flex-wrap items-center gap-3 text-xs font-bold text-[#10B981]">
                      <span className="flex items-center gap-1.5">
                        <Briefcase className="w-3.5 h-3.5 text-[#10B981]" />
                        {exp.company}
                      </span>
                      <span className="text-slate-400">•</span>
                      <span className="flex items-center gap-1 text-slate-500 dark:text-slate-400 font-semibold">
                        <MapPin className="w-3.5 h-3.5" />
                        {exp.location}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-1.5 text-xs font-bold text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-700/60 px-3.5 py-1 rounded-full border border-slate-200 dark:border-slate-700">
                    <Calendar className="w-3.5 h-3.5 text-[#10B981]" />
                    <span>{exp.period}</span>
                  </div>
                </div>

                {/* Impact Bullets */}
                <div className="space-y-2.5 pt-2 border-t border-slate-200 dark:border-slate-700">
                  {exp.bullets.map((bullet, bIdx) => (
                    <div key={bIdx} className="text-xs sm:text-sm text-slate-700 dark:text-slate-200 leading-relaxed flex items-start gap-2.5">
                      <span className="text-[#10B981] font-black shrink-0 mt-0.5">•</span>
                      <p>
                        {bullet.includes(':') ? (
                          <>
                            <strong className="font-extrabold text-slate-950 dark:text-white">
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
