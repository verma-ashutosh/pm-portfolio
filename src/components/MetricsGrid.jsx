import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { metricsGrid } from '../data/portfolioData';
import { Users, Layers, Layout, Award, X, Sparkles, ExternalLink } from 'lucide-react';

const iconMap = {
  Users: Users,
  Layers: Layers,
  Layout: Layout,
  Award: Award,
};

export const MetricsGrid = () => {
  const [showJananivaaniModal, setShowJananivaaniModal] = useState(false);

  const handleCardClick = (metric) => {
    if (metric.id === 1) {
      setShowJananivaaniModal(true);
    } else if (metric.certUrl) {
      window.open(metric.certUrl, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <section id="metrics" className="py-16 bg-[#F8FAFC] dark:bg-[#0F172A] border-b border-slate-200/90 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-xl mx-auto mb-10">
          <span className="text-xs font-extrabold uppercase tracking-widest text-[#10B981] mb-1 block">
            Product Execution & Scope
          </span>
          <h2 className="text-2xl sm:text-3xl font-heading font-extrabold text-slate-900 dark:text-white">
            Key Execution & Performance Highlights
          </h2>
        </div>

        {/* 4 Executive Emerald & Slate Glassmorphic Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {metricsGrid.map((metric, idx) => {
            const IconComponent = iconMap[metric.icon] || Award;
            const isClickable = metric.id === 1 || !!metric.certUrl;

            return (
              <motion.div
                key={metric.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -6 }}
                onClick={() => handleCardClick(metric)}
                className={`rounded-2xl p-6 bg-[#1E293B] text-white border border-[#334155] shadow-xl backdrop-blur-md hover:border-[#10B981]/80 hover:shadow-[0_10px_25px_-5px_rgba(16,185,129,0.35)] transition-all duration-300 group relative overflow-hidden flex flex-col justify-between ${
                  isClickable ? 'cursor-pointer ring-1 ring-[#10B981]/40' : ''
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 rounded-xl bg-slate-800 text-[#10B981] group-hover:scale-110 transition-transform border border-slate-700">
                      <IconComponent className="w-5 h-5" />
                    </div>

                    {metric.id === 1 ? (
                      <span className="text-[10px] font-extrabold uppercase tracking-wide px-2.5 py-1 rounded-full bg-emerald-950/90 text-emerald-300 border border-emerald-800/80 flex items-center gap-1 group-hover:scale-105 transition-transform">
                        <span>Interactive App</span>
                        <Sparkles className="w-3 h-3 text-emerald-400" />
                      </span>
                    ) : metric.certUrl ? (
                      <span className="text-[10px] font-extrabold uppercase tracking-wide px-2.5 py-1 rounded-full bg-emerald-950/90 text-emerald-300 border border-emerald-800/80 flex items-center gap-1 group-hover:scale-105 transition-transform">
                        <span>View Certificate</span>
                        <ExternalLink className="w-3 h-3 text-emerald-400" />
                      </span>
                    ) : (
                      <span className="text-[10px] font-bold font-mono px-2 py-0.5 rounded-full bg-slate-800 text-emerald-300 border border-slate-700">
                        METRIC 0{metric.id}
                      </span>
                    )}
                  </div>

                  {/* Big Metric Number with Scale-Up Hover Micro-Interaction */}
                  <div className="font-heading font-black text-4xl text-white tracking-tight mb-2 group-hover:scale-105 group-hover:text-emerald-300 transition-all origin-left">
                    {metric.value}
                  </div>

                  <h3 className="text-sm font-bold text-slate-200 mb-2">
                    {metric.title}
                  </h3>
                </div>

                {/* Subtext Reveal */}
                <div className="pt-3 border-t border-slate-800 mt-3">
                  <div className="text-xs font-semibold text-emerald-300 opacity-90 group-hover:opacity-100 group-hover:translate-x-1 transition-all flex items-center justify-between gap-1">
                    <div className="flex items-center gap-1.5 leading-tight">
                      <span className="text-[#10B981] text-sm shrink-0">↳</span>
                      <span>"{metric.hoverDetail}"</span>
                    </div>
                    {metric.id === 1 && (
                      <span className="text-[10px] font-bold text-emerald-300 bg-emerald-950 px-2 py-0.5 rounded border border-emerald-800 shrink-0 ml-1">
                        Launch
                      </span>
                    )}
                    {metric.certUrl && (
                      <span className="text-[10px] font-bold text-emerald-300 bg-emerald-950 px-2 py-0.5 rounded border border-emerald-800 shrink-0 ml-1 flex items-center gap-0.5">
                        <span>LinkedIn</span>
                        <ExternalLink className="w-2.5 h-2.5" />
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>

      {/* Jananivaani Live Prototype Interactive Modal */}
      <AnimatePresence>
        {showJananivaaniModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 bg-slate-950/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden shadow-2xl w-full max-w-6xl h-[90vh] flex flex-col relative"
            >
              {/* Modal Header */}
              <div className="p-4 bg-slate-950 border-b border-slate-800 flex items-center justify-between gap-4 shrink-0">
                <div className="flex items-center gap-2">
                  <span className="text-xl"></span>
                  <div>
                    <h3 className="font-heading font-black text-sm text-white leading-tight">
                      Jananivaani — AI Healthcare Assistant
                    </h3>
                    <p className="text-[10px] text-emerald-400 font-semibold">
                      Live Interactive Prototype
                    </p>
                  </div>
                </div>

                <div className="text-center hidden md:block">
                  <h3 className="font-heading font-bold text-xs text-white">
                    Jananivaani — AI Multilingual Healthcare Assistant
                  </h3>
                  <p className="text-[10px] text-emerald-400 font-medium">
                    BITSoM Capstone • 0→1 Interactive Workflow Prototype
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setShowJananivaaniModal(false)}
                    className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
                    title="Close Prototype"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Iframe */}
              <div className="flex-1 bg-slate-950 relative w-full h-full">
                <iframe
                  src="https://jananivaani.lovable.app/onboarding"
                  title="Jananivaani Interactive AI Healthcare Assistant"
                  className="w-full h-full border-none"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
                />
              </div>

              {/* Modal Footer */}
              <div className="p-3 px-5 bg-slate-950 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400 shrink-0">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Interactive Prototype: Voice & Text Healthcare Assistant</span>
                </div>
                <button
                  onClick={() => setShowJananivaaniModal(false)}
                  className="px-4 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs transition-colors"
                >
                  Close Prototype
                </button>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
