import React from 'react';
import { productWorkData } from '../data/portfolioData';
import { ArrowUpRight, ExternalLink } from 'lucide-react';

export const Projects = () => {
  const { teardowns, caseStudies, liveProjects } = productWorkData;

  return (
    <section id="product-work" className="py-14 bg-[#F4F5F7] text-[#18181B] border-b border-slate-200/80">
      <div className="w-full max-w-[1440px] mx-auto px-4 md:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto space-y-1">
          <span className="text-[10px] font-semibold uppercase tracking-widest text-slate-500">
            • PORTFOLIO & CASE STUDIES
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#18181B] tracking-tight">
            Product Work & Case Studies
          </h2>
          <p className="text-xs text-slate-600 font-normal">
            Product teardowns, strategic case studies, and live interactive products.
          </p>
        </div>

        {/* 1. PRODUCT TEARDOWNS */}
        <div className="space-y-4">
          <div className="border-b border-slate-200/80 pb-2 flex items-center justify-between">
            <h3 className="font-bold text-base text-[#18181B] flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-slate-800" />
              <span>Product Teardowns</span>
            </h3>
            <span className="text-[10px] font-semibold text-slate-500 uppercase tracking-wider">
              3 Slide Decks
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {teardowns.map((item) => (
              <div
                key={item.id}
                className="bg-white border border-slate-200/90 rounded-xl p-5 shadow-[0_2px_8px_rgba(0,0,0,0.04)] flex flex-col justify-between hover:border-slate-300 transition-colors"
              >
                <div>
                  <div className="flex flex-wrap gap-1 mb-2">
                    {item.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="text-[9px] font-semibold px-2 py-0.5 rounded bg-slate-100 text-slate-700 border border-slate-200/60"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h4 className="font-bold text-sm text-[#18181B] mb-1">
                    {item.title}
                  </h4>

                  <p className="text-xs text-slate-600 font-normal leading-relaxed mb-4">
                    {item.description}
                  </p>
                </div>

                <a
                  href={item.ctaUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 px-3 rounded-lg bg-[#18181B] text-white text-xs font-semibold hover:bg-[#3F3F46] transition-colors flex items-center justify-center gap-1.5 cursor-pointer shadow-xs"
                >
                  <span>{item.ctaText}</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-slate-300" />
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* 2. CASE STUDIES */}
        <div className="space-y-4">
          <div className="border-b border-slate-200/80 pb-2 flex items-center justify-between">
            <h3 className="font-bold text-base text-[#18181B] flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-slate-800" />
              <span>Case Studies</span>
            </h3>
            <span className="text-[10px] font-semibold text-slate-500 uppercase tracking-wider">
              3 Presentations
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {caseStudies.map((item) => (
              <div
                key={item.id}
                className="bg-white border border-slate-200/90 rounded-xl p-5 shadow-[0_2px_8px_rgba(0,0,0,0.04)] flex flex-col justify-between hover:border-slate-300 transition-colors"
              >
                <div>
                  <div className="flex flex-wrap gap-1 mb-2">
                    {item.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="text-[9px] font-semibold px-2 py-0.5 rounded bg-slate-100 text-slate-700 border border-slate-200/60"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h4 className="font-bold text-sm text-[#18181B] mb-1">
                    {item.title}
                  </h4>

                  <p className="text-xs text-slate-600 font-normal leading-relaxed mb-4">
                    {item.description}
                  </p>
                </div>

                <a
                  href={item.ctaUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 px-3 rounded-lg bg-[#18181B] text-white text-xs font-semibold hover:bg-[#3F3F46] transition-colors flex items-center justify-center gap-1.5 cursor-pointer shadow-xs"
                >
                  <span>{item.ctaText}</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-slate-300" />
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* 3. LIVE PROJECTS */}
        <div className="space-y-4">
          <div className="border-b border-slate-200/80 pb-2 flex items-center justify-between">
            <h3 className="font-bold text-base text-[#18181B] flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-slate-800" />
              <span>Live Projects</span>
            </h3>
            <span className="text-[10px] font-semibold text-slate-500 uppercase tracking-wider">
              Interactive MVPs
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {liveProjects.map((item) => (
              <div
                key={item.id}
                className="bg-white border border-slate-200/90 rounded-xl p-5 shadow-[0_2px_8px_rgba(0,0,0,0.04)] flex flex-col justify-between hover:border-slate-300 transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <div className="flex flex-wrap gap-1">
                      {item.tags.map((tag, idx) => (
                        <span
                          key={idx}
                          className="text-[9px] font-semibold px-2 py-0.5 rounded bg-slate-100 text-slate-700 border border-slate-200/60"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <span className="text-[10px] font-medium text-slate-500">
                      {item.role}
                    </span>
                  </div>

                  <h4 className="font-bold text-base text-[#18181B] mb-1">
                    {item.title}
                  </h4>

                  <p className="text-xs text-slate-600 font-normal leading-relaxed mb-4">
                    {item.description}
                  </p>
                </div>

                <a
                  href={item.ctaUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 px-4 rounded-lg bg-[#18181B] text-white text-xs font-semibold hover:bg-[#3F3F46] transition-colors flex items-center justify-center gap-1.5 cursor-pointer shadow-xs"
                >
                  <span>{item.ctaText}</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-300" />
                </a>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
