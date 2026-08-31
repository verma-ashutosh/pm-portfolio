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
      badges: ["STRENGTH TRAINING", "NUTRITION", "HABITS"],
      description: "Maintaining peak cognitive focus and physical endurance through structured strength training, self-designed nutrition, and daily routine tracking."
    }
  ];

  return (
    <section id="beyond-product" className="py-24 bg-[#FAFAFA] text-[#18181B] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header & Section Title */}
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-12 space-y-2">
          <span className="text-xs font-semibold uppercase tracking-widest text-slate-500">
            • BEYOND PRODUCT
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#18181B] tracking-tight">
            Beyond Product
          </h2>
          <p className="text-sm font-normal text-slate-600 leading-relaxed">
            Where creativity, rhythm, and discipline fuel my product thinking.
          </p>
        </div>

        {/* 3-Column Pure White Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((card, idx) => (
            <div
              key={idx}
              className="rounded-2xl p-6 bg-white text-[#18181B] border border-slate-200 flex flex-col justify-between hover:border-slate-300 transition-colors"
            >
              <div>
                {/* Top Icon */}
                <div className="w-10 h-10 rounded-xl bg-slate-100 border border-slate-200 flex items-center justify-center text-xl mb-4">
                  <span>{card.icon}</span>
                </div>

                {/* Card Title */}
                <h3 className="font-bold text-base text-[#18181B] mb-2 leading-snug">
                  {card.title}
                </h3>

                {/* Micro Badges */}
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {card.badges.map((badge, bIdx) => (
                    <span
                      key={bIdx}
                      className="text-[10px] font-medium px-2 py-0.5 rounded-md bg-slate-100 text-slate-600 border border-slate-200"
                    >
                      {badge}
                    </span>
                  ))}
                </div>

                {/* Description */}
                <p className="text-xs text-slate-600 leading-relaxed font-normal">
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
