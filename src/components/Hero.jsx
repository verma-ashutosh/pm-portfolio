import React from 'react';
import { personalInfo } from '../data/portfolioData';
import { FileText, Sparkles, Layout, Filter, Trello } from 'lucide-react';

export const Hero = () => {
  const metricCards = [
    {
      company: "CATI AI",
      title: "CATI AI",
      subtitle: "B2B Voice AI SaaS",
      metric: "⏱️ <2 min lead response times"
    },
    {
      company: "Secret Private Cafe",
      title: "Secret Private Cafe",
      subtitle: "Scaled 0 to 4 profitable outlets",
      metric: "📈 +18% AOV"
    },
    {
      company: "Pie Rooms",
      title: "Pie Rooms (Hotel Tech)",
      subtitle: "Dynamic pricing & loyalty",
      metric: "📅 +25% Repeat Bookings"
    },
    {
      company: "Jananivaani AI",
      title: "Jananivaani AI",
      subtitle: "End-to-end product discovery",
      metric: "🩺 0→1 Healthcare AI MVP"
    }
  ];

  return (
    <section id="hero" className="min-h-screen pt-24 pb-8 sm:pt-28 sm:pb-10 bg-[#F4F5F7] text-[#18181B] border-b border-slate-200/80 flex flex-col justify-between">
      {/* Central container max-width: 1200px, flex-1 to fill initial viewport height */}
      <div className="w-full max-w-[1200px] mx-auto px-6 md:px-12 flex-1 flex flex-col justify-between space-y-6 lg:space-y-8">
        
        {/* Section 2: Main Hero Area (60/40 Split Grid) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center my-auto py-2">
          
          {/* Left Column (Typography & CTAs) ~ 60% (7 cols) */}
          <div className="lg:col-span-7 space-y-4 text-left">
            
            {/* Top Pill Capsule */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200/80 shadow-2xs">
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span className="text-[11px] font-bold text-emerald-800 uppercase tracking-wide">
                OPEN TO PRODUCT INTERN & APM ROLES
              </span>
            </div>

            {/* H1 Headline & H2 Subtitle */}
            <div className="space-y-1">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#18181B] leading-tight">
                Ashutosh Verma
              </h1>
              <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-[#3F3F46] tracking-tight">
                Founding Operator | APM
              </h2>
            </div>

            {/* Paragraph with bold phrases */}
            <p className="text-xs sm:text-sm text-[#52525B] leading-relaxed font-normal max-w-xl">
              Proven 0-to-1 expert with 2 profitable exits. Bridging <strong className="font-bold text-[#18181B]">commercial viability</strong> (GTM, Unit Economics) and <strong className="font-bold text-[#18181B]">user-centric</strong> Product Management.
            </p>

            {/* Side-by-side Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              {/* Primary: Solid Black background, White text "Download Resume" */}
              <a
                href={personalInfo.resumePdf}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-[#18181B] text-white font-bold text-xs hover:bg-[#3F3F46] transition-colors duration-150 cursor-pointer shadow-xs"
              >
                <FileText className="w-4 h-4 text-slate-300" />
                <span>Download Resume</span>
              </a>

              {/* Secondary: White background, Black outline */}
              <a
                href="#product-work"
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-white text-[#18181B] border-2 border-[#18181B] font-bold text-xs hover:bg-slate-100 transition-colors duration-150 shadow-2xs"
              >
                <span>View my Product Work →</span>
              </a>
            </div>

          </div>

          {/* Right Column (Enlarged Profile Avatar + AI Glowing Net & Dark Floating Nodes) ~ 40% (5 cols) */}
          <div className="lg:col-span-5 flex items-center justify-center relative py-4 lg:py-6">
            
            {/* AI Glowing Radial Net Effect Behind Avatar */}
            <div className="absolute inset-0 -m-6 sm:-m-8 rounded-full bg-[radial-gradient(circle_at_center,rgba(71,85,105,0.22)_0%,rgba(100,116,139,0.1)_45%,transparent_70%)] animate-pulse pointer-events-none z-0" />

            {/* Thin Curved Connecting Lines */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none stroke-slate-400/50 z-0" viewBox="0 0 400 400" fill="none">
              <path d="M 200 200 C 150 160, 120 130, 95 95" strokeDasharray="3 3" strokeWidth="1.2" />
              <path d="M 200 200 C 250 160, 280 130, 305 95" strokeDasharray="3 3" strokeWidth="1.2" />
              <path d="M 200 200 C 150 240, 120 270, 95 305" strokeDasharray="3 3" strokeWidth="1.2" />
              <path d="M 200 200 C 250 240, 280 270, 305 305" strokeDasharray="3 3" strokeWidth="1.2" />
            </svg>

            {/* Enlarged Center Profile Picture (+15-20% size with Slate Glow Shadow) */}
            <div className="relative z-10 p-2 bg-[#2D3748] border-2 border-[#4A5568] rounded-full shadow-[0_0_50px_rgba(100,116,139,0.35),0_0_90px_rgba(51,65,85,0.22)]">
              <img
                src="./avatar.jpg"
                alt="Ashutosh Verma - Founding Operator & APM"
                className="w-56 h-56 sm:w-64 sm:h-64 lg:w-72 lg:h-72 rounded-full object-cover"
              />
            </div>

            {/* Node 1 (Top-Left): Voice AI SaaS (Dark Theme #2D3748, Hugging Image Tightly) */}
            <div className="absolute top-1 left-0 sm:left-2 z-20 animate-node-1 flex items-center gap-2 bg-[#2D3748] border border-[#4A5568] px-3 py-1.5 rounded-xl shadow-[0_4px_16px_rgba(0,0,0,0.15)]">
              <div className="p-1 rounded-lg bg-[#1E293B] text-white">
                <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
              </div>
              <div className="text-left">
                <p className="text-[10px] font-bold text-white leading-none">Voice AI SaaS</p>
                <p className="text-[9px] text-[#CBD5E1] font-medium">B2B Communication</p>
              </div>
            </div>

            {/* Node 2 (Top-Right): Figma Wireframes */}
            <div className="absolute top-1 right-0 sm:right-2 z-20 animate-node-2 flex items-center gap-2 bg-[#2D3748] border border-[#4A5568] px-3 py-1.5 rounded-xl shadow-[0_4px_16px_rgba(0,0,0,0.15)]">
              <div className="p-1 rounded-lg bg-[#1E293B] text-white">
                <Layout className="w-3.5 h-3.5 text-slate-300" />
              </div>
              <div className="text-left">
                <p className="text-[10px] font-bold text-white leading-none">Figma Wireframes</p>
                <p className="text-[9px] text-[#CBD5E1] font-medium">20+ Screens</p>
              </div>
            </div>

            {/* Node 3 (Bottom-Left): Conversion Funnel */}
            <div className="absolute bottom-1 left-0 sm:left-2 z-20 animate-node-3 flex items-center gap-2 bg-[#2D3748] border border-[#4A5568] px-3 py-1.5 rounded-xl shadow-[0_4px_16px_rgba(0,0,0,0.15)]">
              <div className="p-1 rounded-lg bg-[#1E293B] text-white">
                <Filter className="w-3.5 h-3.5 text-slate-300" />
              </div>
              <div className="text-left">
                <p className="text-[10px] font-bold text-white leading-none">Conversion Funnel</p>
                <p className="text-[9px] text-[#CBD5E1] font-medium">GTM & Unit Economics</p>
              </div>
            </div>

            {/* Node 4 (Bottom-Right): Roadmap Matrix */}
            <div className="absolute bottom-1 right-0 sm:right-2 z-20 animate-node-4 flex items-center gap-2 bg-[#2D3748] border border-[#4A5568] px-3 py-1.5 rounded-xl shadow-[0_4px_16px_rgba(0,0,0,0.15)]">
              <div className="p-1 rounded-lg bg-[#1E293B] text-white">
                <Trello className="w-3.5 h-3.5 text-slate-300" />
              </div>
              <div className="text-left">
                <p className="text-[10px] font-bold text-white leading-none">Roadmap Matrix</p>
                <p className="text-[9px] text-[#CBD5E1] font-medium">MoSCoW & RICE</p>
              </div>
            </div>

          </div>

        </div>

        {/* Section 3: Metric Highlight Cards (Anchored to bottom of Hero initial viewport) */}
        <div className="pb-2 pt-2">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
            {metricCards.map((card, idx) => (
              <div
                key={idx}
                className="bg-white border border-slate-200/90 rounded-xl p-4 shadow-[0_2px_8px_rgba(0,0,0,0.04)] flex flex-col justify-between hover:border-slate-300 transition-colors"
              >
                <div>
                  <h3 className="font-bold text-sm text-[#18181B] leading-snug">
                    {card.title}
                  </h3>
                  <p className="text-xs text-slate-600 font-normal mt-0.5">
                    {card.subtitle}
                  </p>
                </div>

                <div className="mt-3 pt-2 border-t border-slate-100">
                  <span className="text-xs font-bold text-slate-900 bg-slate-100 px-2.5 py-1 rounded-md inline-block border border-slate-200/60">
                    {card.metric}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
