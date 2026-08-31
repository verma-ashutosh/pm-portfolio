import React, { useState } from 'react';
import { projectsList } from '../data/portfolioData';
import { ProjectModal } from './ProjectModal';
import { ArrowUpRight, Clock } from 'lucide-react';

export const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeTab, setActiveTab] = useState('All');

  const categories = ['All', 'Projects', 'Case Studies', 'Product Teardowns'];

  const filteredProjects = projectsList.filter((project) => {
    if (activeTab === 'All') return true;
    return project.categories?.includes(activeTab);
  });

  const displayedProjects = filteredProjects;

  const handleTabChange = (category) => {
    setActiveTab(category);
  };

  return (
    <section id="projects" className="py-24 bg-[#FAFAFA] text-[#18181B] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header & Section Title */}
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-10 space-y-2">
          <span className="text-xs font-semibold uppercase tracking-widest text-slate-500">
            • PORTFOLIO & WORK
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#18181B] tracking-tight">
            Projects & Product Work
          </h2>
          <p className="text-sm font-normal text-slate-600 leading-relaxed">
            0→1 AI product case studies, live MVPs, and strategic teardowns.
          </p>
        </div>

        {/* Minimal Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((category) => {
            const isActive = activeTab === category;
            return (
              <button
                key={category}
                onClick={() => handleTabChange(category)}
                className={`px-4 py-2 rounded-full text-xs font-semibold transition-colors duration-150 cursor-pointer ${
                  isActive
                    ? 'bg-[#18181B] text-white shadow-2xs'
                    : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
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
                className="rounded-2xl p-6 bg-white text-[#18181B] border border-slate-200 transition-colors duration-150 flex flex-col justify-between group relative hover:border-slate-300"
              >
                <div>
                  {/* Top Type Badge & Status */}
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-[10px] font-semibold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700 border border-slate-200">
                      {project.type}
                    </span>
                    {project.status && (
                      <span className="text-[10px] font-semibold px-2.5 py-0.5 rounded-full bg-amber-50 text-amber-800 border border-amber-200">
                        {project.status}
                      </span>
                    )}
                  </div>

                  {/* Clean Title */}
                  <h3 className="font-bold text-base sm:text-lg text-[#18181B] mb-2 leading-snug">
                    {project.title}
                  </h3>

                  {/* 1-2 Small Tag Pills */}
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {project.tags.slice(0, 2).map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-[10px] font-medium px-2 py-0.5 rounded-md bg-slate-100 text-slate-600 border border-slate-200"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Crisp 1-Line Description */}
                  <p className="text-xs text-slate-600 leading-relaxed font-normal mb-5">
                    {project.shortDesc}
                  </p>
                </div>

                {/* Primary CTA Button */}
                <div className="pt-3 border-t border-slate-100 mt-2">
                  {!isDisabled && project.ctaUrl && project.ctaUrl !== '#' ? (
                    <a
                      href={project.ctaUrl}
                      target={project.isExternal ? "_blank" : "_self"}
                      rel={project.isExternal ? "noopener noreferrer" : ""}
                      className="w-full py-2.5 px-4 rounded-xl bg-[#18181B] text-white text-xs font-semibold hover:bg-[#3F3F46] transition-colors duration-150 flex items-center justify-center gap-1.5 cursor-pointer"
                    >
                      <span>{project.ctaText}</span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-slate-300" />
                    </a>
                  ) : (
                    <button
                      disabled
                      className="w-full py-2.5 px-4 rounded-xl bg-slate-100 text-slate-400 text-xs font-medium border border-slate-200 cursor-not-allowed flex items-center justify-center gap-1.5"
                    >
                      {project.ctaText === 'Coming Soon' && (
                        <Clock className="w-3 h-3 text-slate-400" />
                      )}
                      <span>{project.ctaText}</span>
                    </button>
                  )}
                </div>

              </div>
            );
          })}
        </div>

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
