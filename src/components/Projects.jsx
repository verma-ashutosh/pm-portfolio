import React, { useState } from 'react';
import { projectsList } from '../data/portfolioData';
import { ProjectModal } from './ProjectModal';
import { ArrowUpRight, Clock, ChevronDown, ChevronUp } from 'lucide-react';

export const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeTab, setActiveTab] = useState('All');
  const [showAll, setShowAll] = useState(false);

  const categories = ['All', 'Projects', 'Case Studies', 'Product Teardowns'];

  const filteredProjects = projectsList.filter((project) => {
    if (activeTab === 'All') return true;
    return project.categories?.includes(activeTab);
  });

  const displayedProjects = filteredProjects;

  const handleTabChange = (category) => {
    setActiveTab(category);
    setShowAll(false);
  };

  return (
    <section id="projects" className="py-20 bg-slate-100/60 dark:bg-[#0F172A] border-b border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header & Section Title */}
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-10 space-y-3">
          <span className="text-xs font-black uppercase tracking-widest text-emerald-800 dark:text-emerald-300 bg-emerald-100 dark:bg-emerald-950/80 px-3.5 py-1 rounded-full border border-emerald-200 dark:border-emerald-800">
            • PORTFOLIO
          </span>
          <h2 className="text-3xl sm:text-4xl font-heading font-black text-slate-900 dark:text-white tracking-tight">
            Projects & Product Work
          </h2>
          <p className="text-sm font-medium text-slate-600 dark:text-slate-400 leading-relaxed">
            0→1 AI product case studies, interactive prototypes, and strategic teardowns.
          </p>
        </div>

        {/* Pill-Style Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((category) => {
            const isActive = activeTab === category;
            return (
              <button
                key={category}
                onClick={() => handleTabChange(category)}
                className={`relative px-5 py-2 rounded-full text-xs font-extrabold transition-all duration-200 cursor-pointer ${
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

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {displayedProjects.map((project) => {
            const isDisabled = project.isDisabled || project.ctaUrl === '#';

            return (
              <div
                key={project.id}
                style={{ willChange: 'transform' }}
                className="rounded-2xl p-6 bg-[#1E293B] text-white border border-[#334155] shadow-lg transition-transform duration-200 ease-out hover:-translate-y-1 hover:border-[#10B981]/80 hover:shadow-[0_12px_28px_-5px_rgba(16,185,129,0.3)] flex flex-col justify-between group relative"
              >
                <div>
                  {/* Top Type Badge & Status */}
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-[10px] font-extrabold uppercase tracking-wide px-3 py-1 rounded-full bg-slate-900 text-emerald-300 border border-slate-700 flex items-center gap-1.5">
                      <span>{project.type}</span>
                    </span>
                    {project.status && (
                      <span className="text-[10px] font-extrabold px-2.5 py-0.5 rounded-full bg-amber-950/80 text-amber-300 border border-amber-800/60">
                        {project.status}
                      </span>
                    )}
                  </div>

                  {/* Clean Minimalist Title */}
                  <h3 className="font-heading font-bold text-base sm:text-lg text-white mb-2 group-hover:text-emerald-300 transition-colors leading-snug">
                    {project.title}
                  </h3>

                  {/* 1-2 Small Tag Pills */}
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {project.tags.slice(0, 2).map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-[10px] font-semibold px-2.5 py-0.5 rounded-md bg-slate-800 text-emerald-200/90 border border-slate-700/80"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Crisp 1-Line Description */}
                  <p className="text-xs text-slate-300 leading-relaxed font-normal mb-5">
                    {project.shortDesc}
                  </p>
                </div>

                {/* Primary CTA Button */}
                <div className="pt-3 border-t border-slate-700/80 mt-2">
                  {!isDisabled && project.ctaUrl && project.ctaUrl !== '#' ? (
                    <a
                      href={project.ctaUrl}
                      target={project.isExternal ? "_blank" : "_self"}
                      rel={project.isExternal ? "noopener noreferrer" : ""}
                      className="w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-[#10B981] to-[#059669] text-white text-xs font-bold hover:from-emerald-500 hover:to-emerald-600 shadow-sm transition-all flex items-center justify-center gap-2 group/btn cursor-pointer"
                    >
                      <span>{project.ctaText}</span>
                      <ArrowUpRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                    </a>
                  ) : (
                    <button
                      disabled
                      className="w-full py-2.5 px-4 rounded-xl bg-slate-800/60 text-slate-400 text-xs font-semibold border border-slate-700/50 cursor-not-allowed flex items-center justify-center gap-1.5"
                    >
                      {project.ctaText === 'Coming Soon' && (
                        <Clock className="w-3 h-3 text-amber-400" />
                      )}
                      <span>{project.ctaText}</span>
                    </button>
                  )}
                </div>

              </div>
            );
          })}
        </div>

        {/* View All Projects / Show Less Button */}
        {filteredProjects.length > 3 && (
          <div className="flex justify-center mt-10">
            <button
              onClick={() => setShowAll(!showAll)}
              className="px-6 py-3 rounded-full bg-[#1E293B] border border-slate-700 text-white text-xs font-black hover:border-[#10B981] shadow-xs hover:shadow-md transition-all cursor-pointer flex items-center gap-2"
            >
              <span>{showAll ? 'Show Less ↑' : 'View All Projects ↓'}</span>
              {showAll ? <ChevronUp className="w-4 h-4 text-[#10B981]" /> : <ChevronDown className="w-4 h-4 text-[#10B981]" />}
            </button>
          </div>
        )}

      </div>

      {/* Project Slide Deck Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
};
