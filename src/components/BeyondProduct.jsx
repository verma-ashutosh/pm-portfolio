import React from 'react';
import { beyondProductData } from '../data/portfolioData';

export const BeyondProduct = () => {
  const [musicCard, visualCard, fitnessCard] = beyondProductData;

  return (
    <section id="beyond-product" className="py-14 bg-[#F4F5F7] text-[#18181B] border-b border-slate-200/80">
      {/* Central 1200px container width */}
      <div className="w-full max-w-[1200px] mx-auto px-6 md:px-12 space-y-8">
        
        {/* Header */}
        <div className="text-center max-w-xl mx-auto space-y-1">
          <span className="text-[10px] font-semibold uppercase tracking-widest text-slate-500 block mb-1">
            • BEYOND PRODUCT
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#18181B] tracking-tight">
            Interests & Discipline
          </h2>
        </div>

        {/* Bento Box Grid Layout (2 Rows: Top Full-Width Card + Bottom 2-Column Split) */}
        <div className="space-y-6">
          
          {/* Top Row: Card 1 (Large/Wide Full-Width Card) */}
          <div className="bg-gradient-to-br from-[#F8FAFC] to-[#E2E8F0] border border-white rounded-[20px] p-8 relative overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_-5px_rgba(0,0,0,0.08)] cursor-pointer shadow-2xs group">
            
            {/* Left Content Column */}
            <div className="relative z-10 max-w-2xl space-y-3">
              {/* Icon Background Box: Solid White #FFFFFF with soft shadow */}
              <div className="w-12 h-12 rounded-xl bg-white border border-slate-200/80 text-slate-800 flex items-center justify-center text-2xl shadow-xs">
                <span>{musicCard.icon}</span>
              </div>

              {/* Title (Dark Slate #0F172A) */}
              <h3 className="text-xl sm:text-2xl font-bold text-[#0F172A] tracking-tight leading-snug">
                {musicCard.title}
              </h3>

              {/* Description (Medium-Dark Grey #475569) */}
              <p className="text-xs sm:text-sm text-[#475569] font-normal leading-relaxed">
                {musicCard.description}
              </p>
            </div>

            {/* Faded Decorative Graphic Overflowing on Right */}
            <div className="absolute -right-4 -bottom-6 text-9xl text-[#94A3B8]/20 pointer-events-none select-none transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6">
              🎸
            </div>

          </div>

          {/* Bottom Row: Two Equal-Sized Bento Cards (Card 2 & Card 3) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Card 2: Visual Art & Prototyping */}
            <div className="bg-gradient-to-br from-[#F8FAFC] to-[#E2E8F0] border border-white rounded-[20px] p-8 relative overflow-hidden flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_-5px_rgba(0,0,0,0.08)] cursor-pointer shadow-2xs group space-y-4">
              
              <div className="space-y-3 relative z-10">
                <div className="w-12 h-12 rounded-xl bg-white border border-slate-200/80 text-slate-800 flex items-center justify-center text-2xl shadow-xs">
                  <span>{visualCard.icon}</span>
                </div>

                <h4 className="text-lg font-bold text-[#0F172A] tracking-tight leading-snug">
                  {visualCard.title}
                </h4>

                <p className="text-xs sm:text-sm text-[#475569] font-normal leading-relaxed">
                  {visualCard.description}
                </p>
              </div>

              {/* Faded Decorative Graphic */}
              <div className="absolute -right-2 -bottom-4 text-8xl text-[#94A3B8]/20 pointer-events-none select-none transition-transform duration-500 group-hover:scale-110">
                🎨
              </div>

            </div>

            {/* Card 3: Fitness & Daily Discipline */}
            <div className="bg-gradient-to-br from-[#F8FAFC] to-[#E2E8F0] border border-white rounded-[20px] p-8 relative overflow-hidden flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_-5px_rgba(0,0,0,0.08)] cursor-pointer shadow-2xs group space-y-4">
              
              <div className="space-y-3 relative z-10">
                <div className="w-12 h-12 rounded-xl bg-white border border-slate-200/80 text-slate-800 flex items-center justify-center text-2xl shadow-xs">
                  <span>{fitnessCard.icon}</span>
                </div>

                <h4 className="text-lg font-bold text-[#0F172A] tracking-tight leading-snug">
                  {fitnessCard.title}
                </h4>

                <p className="text-xs sm:text-sm text-[#475569] font-normal leading-relaxed">
                  {fitnessCard.description}
                </p>
              </div>

              {/* Faded Decorative Graphic */}
              <div className="absolute -right-2 -bottom-4 text-8xl text-[#94A3B8]/20 pointer-events-none select-none transition-transform duration-500 group-hover:scale-110">
                🏋️‍♂️
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
