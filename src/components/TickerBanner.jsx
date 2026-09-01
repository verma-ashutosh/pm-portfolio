import React from 'react';

export const TickerBanner = () => {
  const skillsItems = [
    { icon: "💡", text: "Product Thinking" },
    { icon: "📊", text: "Data-Driven Prioritization" },
    { icon: "🚀", text: "GTM Strategy" },
    { icon: "🤖", text: "Generative AI" },
    { icon: "🔍", text: "User Discovery" }
  ];

  return (
    <div className="w-full bg-white border-y border-slate-200/90 py-4 shadow-2xs">
      {/* Constrained within the same central 1200px container */}
      <div className="w-full max-w-[1200px] mx-auto px-6 md:px-12 flex flex-wrap items-center justify-between gap-4 text-xs font-extrabold text-[#18181B]">
        {skillsItems.map((item, idx) => (
          <div key={idx} className="flex items-center gap-2">
            <span className="text-sm">{item.icon}</span>
            <span className="tracking-tight">{item.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
