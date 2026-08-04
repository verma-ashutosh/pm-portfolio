import React from 'react';

export const BeyondProduct = () => {
  const cards = [
    {
      icon: "🎸",
      title: "Music Production, Vocals & Guitar",
      badges: ["EX-BAND LEAD", "FL STUDIO", "ACOUSTIC & LOFI"],
      description: "Former lead vocalist & guitarist for 'The Bloodywood'. Currently writing Hindi acoustic-pop & lofi tracks, while actively learning music production and audio engineering in FL Studio."
    },
    {
      icon: "🎨",
      title: "Visual Sketching & Design Concepts",
      badges: ["FREEHAND SKETCHING", "CONCEPT ART", "UI WIREFRAMING"],
      description: "Translating abstract product concepts onto paper through freehand sketching, visual art, and rapid UI layout brainstorming."
    },
    {
      icon: "🏋️",
      title: "Fitness & Daily Discipline",
      badges: ["STRENGTH TRAINING", "CALCULATED NUTRITION", "HABITS"],
      description: "Maintaining peak cognitive focus and physical endurance through structured strength training, self-designed nutrition, and daily routine tracking."
    }
  ];

  return (
    <section id="beyond-product" className="py-20 bg-slate-50 dark:bg-[#0F172A] border-b border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header & Section Title */}
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-12 space-y-3">
          <span className="text-xs font-black uppercase tracking-widest text-emerald-800 dark:text-emerald-300 bg-emerald-100 dark:bg-emerald-950/80 px-3.5 py-1 rounded-full border border-emerald-200 dark:border-emerald-800">
            • BEYOND PRODUCT
          </span>
          <h2 className="text-3xl sm:text-4xl font-heading font-black text-slate-900 dark:text-white tracking-tight">
            Beyond Product
          </h2>
          <p className="text-sm font-medium text-slate-600 dark:text-slate-400 leading-relaxed">
            Where creativity, rhythm, and discipline fuel my product thinking.
          </p>
        </div>

        {/* 3-Column Glassmorphism Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
          {cards.map((card, idx) => (
            <div
              key={idx}
              style={{ willChange: 'transform' }}
              className="rounded-3xl p-6 sm:p-7 bg-[#1E293B] text-white border border-[#334155] shadow-lg transition-all duration-200 ease-out hover:-translate-y-1 hover:border-[#10B981]/80 hover:shadow-[0_4px_20px_-2px_rgba(10,185,129,0.35)] flex flex-col justify-between group"
            >
              <div>
                {/* Top Icon Squircle */}
                <div className="w-12 h-12 rounded-2xl bg-slate-900 border border-slate-700 flex items-center justify-center text-2xl mb-5 shadow-inner">
                  <span>{card.icon}</span>
                </div>

                {/* Card Title */}
                <h3 className="font-heading font-black text-xl text-white mb-3 group-hover:text-emerald-300 transition-colors leading-snug">
                  {card.title}
                </h3>

                {/* Micro Badges */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {card.badges.map((badge, bIdx) => (
                    <span
                      key={bIdx}
                      className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-slate-800 text-emerald-200 border border-slate-700 uppercase tracking-wider"
                    >
                      [{badge}]
                    </span>
                  ))}
                </div>

                {/* Description */}
                <p className="text-xs text-slate-300 leading-relaxed font-medium">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
