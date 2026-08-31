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
    <section id="skills" className="py-24 bg-[#FAFAFA] text-[#18181B] border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header & Section Title */}
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-10 space-y-2">
          <span className="text-xs font-semibold uppercase tracking-widest text-slate-500">
            • SKILLS & COMPETENCIES
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#18181B] tracking-tight">
            Skills & Competencies
          </h2>
          <p className="text-sm font-normal text-slate-600 leading-relaxed">
            Core competencies across product strategy, AI workflows, and design tooling.
          </p>
        </div>

        {/* Minimal Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((category) => {
            const isActive = activeTab === category;
            return (
              <button
                key={category}
                onClick={() => setActiveTab(category)}
                className={`px-4 py-2 rounded-full text-xs font-semibold transition-colors duration-150 cursor-pointer ${
                  isActive
                    ? 'bg-[#18181B] text-white'
                    : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* Skill Badges Grid */}
        <div className="space-y-10">
          {filteredData.map((group, gIdx) => (
            <div key={gIdx} className="space-y-3">
              
              <h3 className="text-xs font-bold text-slate-500 uppercase tracking-wider flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-slate-700" />
                <span>{group.category}</span>
              </h3>

              {/* Minimal White Pill Badges */}
              <div className="flex flex-wrap gap-2.5">
                {group.skills.map((skill, sIdx) => (
                  <div
                    key={sIdx}
                    className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white text-[#18181B] border border-slate-200 text-xs font-medium cursor-default hover:bg-slate-50 transition-colors"
                  >
                    <span className="text-sm">{skill.icon}</span>
                    <span>{skill.name}</span>
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
