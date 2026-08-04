import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2, FileText, Layers, Target, BarChart2, Lightbulb, ExternalLink } from 'lucide-react';

export const ProjectModal = ({ project, onClose }) => {
  const [activeTab, setActiveTab] = useState('prd');

  if (!project) return null;

  const { fullDetails } = project;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-slate-950/70 backdrop-blur-sm"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3 }}
          className="relative w-full max-w-3xl bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden z-10 my-8 max-h-[90vh] flex flex-col"
        >
          {/* Header */}
          <div className="p-6 border-b border-slate-100 dark:border-slate-800 flex items-start justify-between bg-slate-50/50 dark:bg-slate-900/50">
            <div>
              <div className="flex flex-wrap gap-2 mb-2">
                {project.tags.map((t, idx) => (
                  <span
                    key={idx}
                    className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-brand-50 dark:bg-brand-950 text-brand-600 dark:text-brand-300 border border-brand-200/60 dark:border-brand-800/60"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <h3 className="font-heading font-extrabold text-xl sm:text-2xl text-slate-900 dark:text-white">
                {project.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-medium mt-1">
                {project.subtitle}
              </p>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-full text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-slate-200/60 dark:hover:bg-slate-800 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Navigation Tabs inside Modal */}
          <div className="flex border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-850 px-6 space-x-4 overflow-x-auto text-xs font-semibold">
            <button
              onClick={() => setActiveTab('prd')}
              className={`py-3 border-b-2 transition-colors flex items-center gap-1.5 whitespace-nowrap ${
                activeTab === 'prd'
                  ? 'border-brand-600 text-brand-600 dark:border-brand-400 dark:text-brand-400'
                  : 'border-transparent text-slate-500 hover:text-slate-800 dark:hover:text-slate-200'
              }`}
            >
              <FileText className="w-3.5 h-3.5" />
              <span>PRD & Specs</span>
            </button>
            <button
              onClick={() => setActiveTab('research')}
              className={`py-3 border-b-2 transition-colors flex items-center gap-1.5 whitespace-nowrap ${
                activeTab === 'research'
                  ? 'border-brand-600 text-brand-600 dark:border-brand-400 dark:text-brand-400'
                  : 'border-transparent text-slate-500 hover:text-slate-800 dark:hover:text-slate-200'
              }`}
            >
              <Target className="w-3.5 h-3.5" />
              <span>Problem & Research</span>
            </button>
            <button
              onClick={() => setActiveTab('frameworks')}
              className={`py-3 border-b-2 transition-colors flex items-center gap-1.5 whitespace-nowrap ${
                activeTab === 'frameworks'
                  ? 'border-brand-600 text-brand-600 dark:border-brand-400 dark:text-brand-400'
                  : 'border-transparent text-slate-500 hover:text-slate-800 dark:hover:text-slate-200'
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              <span>Frameworks & UX</span>
            </button>
          </div>

          {/* Body Content */}
          <div className="p-6 overflow-y-auto space-y-6 flex-1 text-slate-700 dark:text-slate-300 text-sm leading-relaxed">
            
            {activeTab === 'prd' && (
              <div className="space-y-6">
                <div>
                  <h4 className="font-heading font-bold text-slate-900 dark:text-white text-base mb-2 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-brand-600 dark:text-brand-400" />
                    Key PRD Deliverables & Artifacts
                  </h4>
                  <ul className="space-y-2.5">
                    {fullDetails.prdHighlights.map((highlight, idx) => (
                      <li
                        key={idx}
                        className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-700/50 text-xs sm:text-sm font-medium flex items-start gap-2.5 text-slate-800 dark:text-slate-200"
                      >
                        <span className="w-5 h-5 rounded-full bg-brand-100 dark:bg-brand-900 text-brand-700 dark:text-brand-300 flex items-center justify-center text-[11px] font-bold shrink-0 mt-0.5">
                          {idx + 1}
                        </span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-4 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-900/60 text-emerald-900 dark:text-emerald-200">
                  <h5 className="font-heading font-bold text-xs uppercase tracking-wider text-emerald-700 dark:text-emerald-400 mb-1 flex items-center gap-1.5">
                    <BarChart2 className="w-4 h-4" />
                    Measured Impact & Outcomes
                  </h5>
                  <p className="text-xs sm:text-sm font-medium">{fullDetails.impact}</p>
                </div>
              </div>
            )}

            {activeTab === 'research' && (
              <div className="space-y-5">
                <div>
                  <h4 className="font-heading font-bold text-slate-900 dark:text-white text-base mb-2 flex items-center gap-2">
                    <Target className="w-4 h-4 text-rose-500" />
                    User Problem Statement
                  </h4>
                  <p className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-700/50 text-xs sm:text-sm">
                    {fullDetails.problem}
                  </p>
                </div>

                <div>
                  <h4 className="font-heading font-bold text-slate-900 dark:text-white text-base mb-2 flex items-center gap-2">
                    <Lightbulb className="w-4 h-4 text-amber-500" />
                    Proposed Product Solution
                  </h4>
                  <p className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-700/50 text-xs sm:text-sm">
                    {fullDetails.solution}
                  </p>
                </div>

                <div>
                  <h4 className="font-heading font-bold text-slate-900 dark:text-white text-base mb-2">
                    Customer Discovery & Insights
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                    {fullDetails.research}
                  </p>
                </div>
              </div>
            )}

            {activeTab === 'frameworks' && (
              <div className="space-y-6">
                <div>
                  <h4 className="font-heading font-bold text-slate-900 dark:text-white text-base mb-3">
                    Frameworks Applied
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.frameworks.map((fw, idx) => (
                      <div
                        key={idx}
                        className="px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 text-xs font-semibold border border-slate-200 dark:border-slate-700"
                      >
                        {fw}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Wireframe Mockup Representation */}
                <div>
                  <h4 className="font-heading font-bold text-slate-900 dark:text-white text-base mb-2">
                    Wireframe Workflow Architecture
                  </h4>
                  <div className="p-4 rounded-xl bg-slate-100 dark:bg-slate-800/80 border border-dashed border-slate-300 dark:border-slate-700 text-center space-y-2">
                    <div className="inline-flex p-3 rounded-full bg-brand-100 dark:bg-brand-900 text-brand-600 dark:text-brand-400">
                      <Layers className="w-6 h-6" />
                    </div>
                    <p className="text-xs font-bold text-slate-800 dark:text-slate-200">
                      Figma UI Screens & Interactive Wireframes
                    </p>
                    <p className="text-[11px] text-slate-500 dark:text-slate-400 max-w-md mx-auto">
                      Includes mobile intake triggers, multilingual voice prompt nodes, and admin status dashboards.
                    </p>
                  </div>
                </div>
              </div>
            )}

          </div>

          {/* Footer */}
          <div className="p-4 px-6 border-t border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 flex items-center justify-between">
            <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">
              {project.metrics}
            </span>
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-xl bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 text-xs font-bold hover:opacity-90 transition-opacity"
            >
              Close Case Study
            </button>
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
};
