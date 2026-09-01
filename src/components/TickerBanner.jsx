import React from 'react';
import { personalInfo } from '../data/portfolioData';

export const TickerBanner = () => {
  return (
    <div className="w-full bg-[#F4F4F5] border-b border-slate-200 py-2.5">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 flex flex-wrap items-center justify-between gap-3 text-xs font-semibold text-slate-700">
        {personalInfo.horizontalStrip.map((item, idx) => (
          <div key={idx} className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-slate-400" />
            <span>{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
