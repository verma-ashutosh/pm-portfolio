import React, { useState } from 'react';
import { skillsMatrix } from '../data/portfolioData';

export const SkillsMatrix = () => {
  const [activeTab, setActiveTab] = useState('All Capabilities');

  const categories = ['All Capabilities', 'Product Management', 'AI & Innovation', 'Tools & Tech'];

  const filteredData = skillsMatrix.filter((item) => {
    if (activeTab === 'All Capabilities') return true;
    return item.category === activeTab;
  });

  return (
    <section id="skills" className="py-20 bg-slate-100/60 dark:bg-[#0F172A] border-b border-slate-200 dark:border-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header & Section Title */}
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-10 space-y-3">
          <span className="text-xs font-black uppercase tracking-widest text-emerald-800 dark:text-emerald-300 bg-emerald-100 dark:bg-emerald-950/80 px-3.5 py-1 rounded-full border border-emerald-200 dark:border-emerald-800">
            • SKILLS & COMPETENCIES
          </span>
          <h2 className="text-3xl sm:text-4xl font-heading font-black text-slate-900 dark:text-white tracking-tight">
            Skills
          </h2>
          <p className="text-sm font-medium text-slate-600 dark:text-slate-400 leading-relaxed">
            Core competencies across product strategy, AI workflows, and design tooling.
          </p>
        </div>

        {/* Pill-Style Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((category) => {
            const isActive = activeTab === category;
            return (
              <button
                key={category}
                onClick={() => setActiveTab(category)}
                className={`px-5 py-2 rounded-full text-xs font-extrabold transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'bg-[#10B981] text-white shadow-md shadow-emerald-500/20 scale-105'
                    : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* Skill Badge Playground Grid (Grouped by Category) */}
        <div className="space-y-10">
          {filteredData.map((group, gIdx) => (
            <div key={gIdx} className="space-y-4">
              
              <h3 className="text-xs font-extrabold text-[#10B981] uppercase tracking-widest flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#10B981]" />
                <span>{group.category}</span>
              </h3>

              {/* Dark Glassmorphism Interactive Pill Badges */}
              <div className="flex flex-wrap gap-3">
                {group.skills.map((skill, sIdx) => (
                  <div
                    key={sIdx}
                    style={{ willChange: 'transform' }}
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-[#1E293B] text-white border border-[#334155] text-xs font-extrabold shadow-md cursor-default transition-all duration-200 ease-out hover:-translate-y-1 hover:border-[#10B981]/80 hover:shadow-[0_4px_20px_-2px_rgba(16,185,129,0.35)]"
                  >
                    <span className="text-sm">{skill.icon}</span>
                    <span className="text-slate-100">{skill.name}</span>
                  </div>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
