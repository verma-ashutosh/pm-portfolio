import React from 'react';
import { motion } from 'framer-motion';

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

  // Quadruple items to ensure seamless infinite looping animation
  const repeatedItems = [...tickerItems, ...tickerItems, ...tickerItems, ...tickerItems];

  return (
    <div className="w-full bg-slate-900 text-white py-3.5 overflow-hidden border-y border-slate-800 shadow-md">
      <motion.div
        className="flex whitespace-nowrap items-center gap-8"
        animate={{ x: ['0%', '-50%'] }}
        transition={{
          repeat: Infinity,
          ease: 'linear',
          duration: 25,
        }}
      >
        {repeatedItems.map((item, idx) => (
          <div key={idx} className="flex items-center gap-4 shrink-0 text-xs sm:text-sm font-semibold tracking-wide text-slate-200">
            <span className="text-emerald-400 font-bold">✦</span>
            <span>{item}</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
};
