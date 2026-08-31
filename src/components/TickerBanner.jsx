import React from 'react';

export const TickerBanner = () => {
  const tickerItems = [
    "Customer Discovery First",
    "0 → 1 AI Workflows",
    "12+ Healthcare Pilots",
    "Data-Informed Prioritization",
    "Interactive Figma Prototypes",
    "Fast Feedback Loops",
    "GAT-B AIR 96"
  ];

  return (
    <div className="w-full bg-[#F4F4F5] border-y border-slate-200 py-3 overflow-x-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-6 overflow-x-auto text-xs font-semibold tracking-wide text-slate-700">
        {tickerItems.map((item, idx) => (
          <div key={idx} className="flex items-center gap-3 shrink-0">
            <span className="text-slate-400 font-bold">•</span>
            <span>{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
