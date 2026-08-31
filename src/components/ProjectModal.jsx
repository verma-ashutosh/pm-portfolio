import React, { useState } from 'react';
import { X, CheckCircle2, FileText, Layers, Target, BarChart2, Lightbulb, ExternalLink } from 'lucide-react';

export const ProjectModal = ({ project, onClose }) => {
  const [activeTab, setActiveTab] = useState('prd');

  if (!project) return null;

  const { fullDetails } = project;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-slate-900/40 backdrop-blur-xs">
      <div className="relative w-full max-w-3xl bg-white text-[#18181B] rounded-2xl border border-slate-200 shadow-lg overflow-hidden z-10 my-8 max-h-[90vh] flex flex-col">
        
        {/* Header */}
        <div className="p-6 border-b border-slate-200 flex items-start justify-between bg-white">
          <div>
            <div className="flex flex-wrap gap-1.5 mb-2">
              {project.tags.map((t, idx) => (
                <span
                  key={idx}
                  className="text-[10px] font-semibold px-2.5 py-0.5 rounded-md bg-slate-100 text-slate-700 border border-slate-200"
                >
                  {t}
                </span>
              ))}
            </div>
            <h3 className="font-bold text-xl text-[#18181B]">
              {project.title}
            </h3>
            {project.subtitle && (
              <p className="text-xs text-slate-500 font-medium mt-1">
                {project.subtitle}
              </p>
            )}
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-900 hover:bg-slate-100 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Navigation Tabs */}
        {fullDetails && (
          <div className="flex border-b border-slate-200 bg-slate-50 px-6 space-x-4 overflow-x-auto text-xs font-semibold">
            <button
              onClick={() => setActiveTab('prd')}
              className={`py-3 border-b-2 transition-colors flex items-center gap-1.5 whitespace-nowrap ${
                activeTab === 'prd'
                  ? 'border-[#18181B] text-[#18181B]'
                  : 'border-transparent text-slate-500 hover:text-slate-900'
              }`}
            >
              <FileText className="w-3.5 h-3.5" />
              <span>PRD & Specs</span>
            </button>
            <button
              onClick={() => setActiveTab('research')}
              className={`py-3 border-b-2 transition-colors flex items-center gap-1.5 whitespace-nowrap ${
                activeTab === 'research'
                  ? 'border-[#18181B] text-[#18181B]'
                  : 'border-transparent text-slate-500 hover:text-slate-900'
              }`}
            >
              <Target className="w-3.5 h-3.5" />
              <span>Problem & Research</span>
            </button>
            <button
              onClick={() => setActiveTab('frameworks')}
              className={`py-3 border-b-2 transition-colors flex items-center gap-1.5 whitespace-nowrap ${
                activeTab === 'frameworks'
                  ? 'border-[#18181B] text-[#18181B]'
                  : 'border-transparent text-slate-500 hover:text-slate-900'
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              <span>Frameworks & UX</span>
            </button>
          </div>
        )}

        {/* Body Content */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1 text-slate-700 text-xs sm:text-sm leading-relaxed bg-white">
          {fullDetails ? (
            <>
              {activeTab === 'prd' && fullDetails.prdHighlights && (
                <div className="space-y-6">
                  <div>
                    <h4 className="font-bold text-[#18181B] text-sm mb-2 flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-slate-700" />
                      Key PRD Deliverables & Artifacts
                    </h4>
                    <ul className="space-y-2">
                      {fullDetails.prdHighlights.map((highlight, idx) => (
                        <li
                          key={idx}
                          className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs font-normal flex items-start gap-2.5 text-slate-800"
                        >
                          <span className="w-5 h-5 rounded-full bg-slate-200 text-slate-800 flex items-center justify-center text-[11px] font-bold shrink-0 mt-0.5">
                            {idx + 1}
                          </span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {fullDetails.impact && (
                    <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-slate-800">
                      <h5 className="font-bold text-xs uppercase tracking-wider text-slate-700 mb-1 flex items-center gap-1.5">
                        <BarChart2 className="w-4 h-4" />
                        Measured Impact & Outcomes
                      </h5>
                      <p className="text-xs font-normal">{fullDetails.impact}</p>
                    </div>
                  )}
                </div>
              )}

              {activeTab === 'research' && (
                <div className="space-y-5">
                  {fullDetails.problem && (
                    <div>
                      <h4 className="font-bold text-[#18181B] text-sm mb-2 flex items-center gap-2">
                        <Target className="w-4 h-4 text-slate-700" />
                        User Problem Statement
                      </h4>
                      <p className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs leading-relaxed">
                        {fullDetails.problem}
                      </p>
                    </div>
                  )}

                  {fullDetails.solution && (
                    <div>
                      <h4 className="font-bold text-[#18181B] text-sm mb-2 flex items-center gap-2">
                        <Lightbulb className="w-4 h-4 text-slate-700" />
                        Proposed Product Solution
                      </h4>
                      <p className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs leading-relaxed">
                        {fullDetails.solution}
                      </p>
                    </div>
                  )}
                </div>
              )}

              {activeTab === 'frameworks' && (
                <div className="space-y-6">
                  <div>
                    <h4 className="font-bold text-[#18181B] text-sm mb-3">
                      Frameworks & Methodology
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {(project.frameworks || []).map((fw, idx) => (
                        <div
                          key={idx}
                          className="px-3 py-1.5 rounded-lg bg-slate-100 text-slate-800 text-xs font-medium border border-slate-200"
                        >
                          {fw}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </>
          ) : (
            <div className="space-y-4">
              <p className="text-xs text-slate-600">{project.shortDesc}</p>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 px-6 border-t border-slate-200 bg-white flex items-center justify-between">
          <span className="text-xs text-slate-500 font-medium">
            {project.title}
          </span>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl bg-[#18181B] text-white text-xs font-semibold hover:bg-[#3F3F46] transition-colors"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
};
