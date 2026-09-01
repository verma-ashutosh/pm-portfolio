import React from 'react';
import { beyondProductData } from '../data/portfolioData';

export const BeyondProduct = () => {
  return (
    <section id="beyond-product" className="py-12 bg-[#F4F5F7] text-[#18181B] border-b border-slate-200/80">
      <div className="w-full max-w-[1440px] mx-auto px-4 md:px-8 space-y-6">
        
        {/* Header */}
        <div className="text-center max-w-xl mx-auto space-y-1">
          <span className="text-[10px] font-semibold uppercase tracking-widest text-slate-500">
            • BEYOND PRODUCT
          </span>
          <h2 className="text-xl sm:text-2xl font-bold text-[#18181B] tracking-tight">
            Interests & Discipline
          </h2>
        </div>

        {/* 3 Compact Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {beyondProductData.map((card, idx) => (
            <div
              key={idx}
              className="bg-white border border-slate-200/90 rounded-xl p-5 space-y-2 shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:border-slate-300 transition-colors"
            >
              <div className="flex items-center gap-2">
                <span className="text-lg">{card.icon}</span>
                <h3 className="font-bold text-xs text-[#18181B]">{card.title}</h3>
              </div>
              <p className="text-xs text-slate-600 font-normal leading-relaxed">
                {card.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
