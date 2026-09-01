import React, { useState } from 'react';
import { allProductCards } from '../data/portfolioData';
import { HeartPulse, Leaf, Zap, Headphones, TrendingUp, FileText, Car, Globe } from 'lucide-react';

const iconMap = {
  HeartPulse: HeartPulse,
  Leaf: Leaf,
  Zap: Zap,
  Headphones: Headphones,
  TrendingUp: TrendingUp,
  FileText: FileText,
  Car: Car,
  Globe: Globe,
};

export const Projects = () => {
  const [activeTab, setActiveTab] = useState('All');

  const filterTabs = ['All', 'Projects', 'Teardowns', 'Case Studies'];

  const filteredCards = allProductCards.filter((card) => {
    if (activeTab === 'All') return true;
    return card.category === activeTab;
  });

  return (
    <section id="product-work" className="py-14 bg-[#F4F5F7] text-[#18181B] border-b border-slate-200/80">
      {/* Central 1200px container width */}
      <div className="w-full max-w-[1200px] mx-auto px-6 md:px-12 space-y-8">
        
        {/* Part 1: Header & Filter Navigation */}
        <div className="space-y-3">
          <span className="px-3 py-1 rounded-full bg-slate-200 text-slate-700 text-xs font-bold uppercase tracking-wider inline-block">
            • PORTFOLIO & CASE STUDIES
          </span>

          <div>
            <h2 className="text-3xl font-extrabold text-[#18181B] tracking-tight mb-1">
              Product Work & Builds
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 font-normal">
              Live interactive Projects, Product teardowns and Case studies
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center gap-2 pt-2">
            {filterTabs.map((tab) => {
              const isActive = activeTab === tab;
              return (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 py-1.5 rounded-full text-xs font-bold transition-colors cursor-pointer ${
                    isActive
                      ? 'bg-[#18181B] text-white shadow-2xs'
                      : 'bg-white text-[#18181B] border border-slate-200 hover:bg-slate-50'
                  }`}
                >
                  {tab}
                </button>
              );
            })}
          </div>
        </div>

        {/* Part 2 & 3: The Cards Grid (3-Column Layout) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
          {filteredCards.map((card) => {
            const IconComponent = iconMap[card.iconType] || FileText;

            return (
              <div
                key={card.id}
                className="rounded-2xl border border-[#EAEAEA] bg-gradient-to-b from-[#F7F7F8] via-[#F7F7F8] to-white p-6 flex flex-col justify-between shadow-2xs hover:border-slate-300 transition-colors"
              >
                <div>
                  {/* 1. Icon Box Top Left */}
                  <div className="w-10 h-10 rounded-lg bg-slate-200 text-slate-800 flex items-center justify-center mb-3 shrink-0">
                    <IconComponent className="w-5 h-5" />
                  </div>

                  {/* 2. Title (Bold H4) */}
                  <h4 className="font-bold text-base text-[#18181B] mb-2 leading-snug">
                    {card.title}
                  </h4>

                  {/* 3. Tags Flex Row */}
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {card.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className={`text-[10px] font-bold px-2.5 py-0.5 rounded-full ${tag.style}`}
                      >
                        {tag.text}
                      </span>
                    ))}
                  </div>

                  {/* 4. Description */}
                  <p className="text-xs text-slate-600 font-normal leading-relaxed mb-4">
                    {card.description}
                  </p>

                  {/* 5. Highlight Banner (If present) */}
                  {card.highlightBanner && (
                    <div className="p-2.5 rounded-lg bg-emerald-50 border border-emerald-200/80 text-[11px] font-semibold text-emerald-900 mb-4">
                      <span>{card.highlightBanner}</span>
                    </div>
                  )}
                </div>

                {/* 6. Bottom CTA Button */}
                <div className="pt-2">
                  <a
                    href={card.ctaUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2.5 px-4 rounded-xl bg-[#18181B] text-white text-xs font-bold hover:bg-[#3F3F46] transition-colors flex items-center justify-center gap-1.5 cursor-pointer shadow-xs"
                  >
                    <span>{card.ctaText}</span>
                  </a>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
