import React, { useState } from 'react';
import { metricsGrid } from '../data/portfolioData';
import { Users, Layers, Layout, Award, X, ExternalLink } from 'lucide-react';

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
    <section id="metrics" className="py-20 bg-[#FAFAFA] text-[#18181B] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-xl mx-auto mb-12 space-y-2">
          <span className="text-xs font-semibold uppercase tracking-widest text-slate-500">
            • EXECUTION & METRICS
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#18181B] tracking-tight">
            Key Execution & Performance Highlights
          </h2>
        </div>

        {/* 4 Minimalist Pure White Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {metricsGrid.map((metric) => {
            const IconComponent = iconMap[metric.icon] || Award;
            const isClickable = metric.id === 1 || !!metric.certUrl;

            return (
              <div
                key={metric.id}
                onClick={() => handleCardClick(metric)}
                className={`rounded-2xl p-6 bg-white text-[#18181B] border border-slate-200 flex flex-col justify-between transition-colors duration-150 ${
                  isClickable ? 'cursor-pointer hover:bg-slate-50' : ''
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-2.5 rounded-xl bg-slate-100 text-slate-700 border border-slate-200">
                      <IconComponent className="w-4 h-4" />
                    </div>

                    {metric.id === 1 ? (
                      <span className="text-[10px] font-semibold uppercase tracking-wide px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700 border border-slate-200 flex items-center gap-1">
                        <span>INTERACTIVE APP</span>
                      </span>
                    ) : metric.certUrl ? (
                      <span className="text-[10px] font-semibold uppercase tracking-wide px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700 border border-slate-200 flex items-center gap-1">
                        <span>CERTIFICATE</span>
                        <ExternalLink className="w-2.5 h-2.5" />
                      </span>
                    ) : (
                      <span className="text-[10px] font-semibold font-mono px-2 py-0.5 rounded-full bg-slate-100 text-slate-600 border border-slate-200">
                        METRIC 0{metric.id}
                      </span>
                    )}
                  </div>

                  {/* Big Metric Number */}
                  <div className="font-extrabold text-4xl text-[#18181B] tracking-tight mb-1">
                    {metric.value}
                  </div>

                  <h3 className="text-xs font-semibold text-slate-800 mb-2">
                    {metric.title}
                  </h3>
                </div>

                {/* Subtext Detail */}
                <div className="pt-3 border-t border-slate-100 mt-3">
                  <p className="text-xs text-slate-600 font-normal leading-relaxed">
                    "{metric.hoverDetail}"
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Jananivaani Live Prototype Modal */}
      {showJananivaaniModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-xs">
          <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-lg w-full max-w-5xl h-[85vh] flex flex-col relative">
            {/* Modal Header */}
            <div className="p-4 bg-white border-b border-slate-200 flex items-center justify-between gap-4 shrink-0">
              <div>
                <h3 className="font-bold text-sm text-[#18181B] leading-tight">
                  Jananivaani — AI Healthcare Assistant
                </h3>
                <p className="text-[11px] text-slate-500 font-medium">
                  BITSoM Capstone • Live Interactive Prototype
                </p>
              </div>

              <button
                onClick={() => setShowJananivaaniModal(false)}
                className="p-1.5 rounded-lg text-slate-500 hover:text-slate-900 hover:bg-slate-100 transition-colors"
                title="Close Prototype"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Iframe */}
            <div className="flex-1 bg-slate-50 relative w-full h-full">
              <iframe
                src="https://jananivaani.lovable.app/onboarding"
                title="Jananivaani Interactive AI Healthcare Assistant"
                className="w-full h-full border-none"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
              />
            </div>

            {/* Modal Footer */}
            <div className="p-3 px-5 bg-white border-t border-slate-200 flex items-center justify-between text-xs text-slate-600 shrink-0">
              <span>Interactive Prototype: Voice & Text Healthcare Assistant</span>
              <button
                onClick={() => setShowJananivaaniModal(false)}
                className="px-4 py-1.5 rounded-lg bg-[#18181B] hover:bg-[#3F3F46] text-white font-medium text-xs transition-colors"
              >
                Close Prototype
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
