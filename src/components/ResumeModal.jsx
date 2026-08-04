import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Download, Printer, FileText, CheckCircle2, Award, Briefcase, GraduationCap, MapPin, Mail, Phone, Linkedin, Globe } from 'lucide-react';
import { personalInfo, educationList, experienceList, skillsMatrix } from '../data/portfolioData';

export const ResumeModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleDownload = () => {
    // Triggers text print window format suitable for saving as PDF
    window.print();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto print:p-0 print:static print:block">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-slate-950/70 backdrop-blur-sm print:hidden"
        />

        {/* Modal Body */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3 }}
          className="relative w-full max-w-4xl bg-white text-slate-900 rounded-2xl shadow-2xl border border-slate-200 overflow-hidden z-10 my-8 max-h-[92vh] flex flex-col print:max-h-none print:shadow-none print:border-none print:w-full print:m-0"
        >
          {/* Top Control Bar (Hidden when printing) */}
          <div className="p-4 px-6 bg-slate-900 text-white flex items-center justify-between print:hidden">
            <div className="flex items-center gap-2">
              <FileText className="w-5 h-5 text-brand-400" />
              <span className="font-heading font-bold text-sm">
                Ashutosh_Verma_PM_Resume.pdf
              </span>
            </div>
            <div className="flex items-center gap-2">
              <a
                href="/Ashutosh_Verma_Resume.pdf"
                download="Ashutosh_Verma_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-1.5 rounded-lg bg-[#10B981] hover:bg-emerald-600 text-white text-xs font-bold flex items-center gap-1.5 transition-colors"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download PDF</span>
              </a>
              <button
                onClick={handlePrint}
                className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs font-semibold flex items-center gap-1.5 transition-colors"
              >
                <Printer className="w-3.5 h-3.5" />
                <span>Print</span>
              </button>
              <button
                onClick={onClose}
                className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Printable Resume Document View */}
          <div className="p-8 sm:p-12 overflow-y-auto flex-1 bg-white font-sans text-slate-900 space-y-6 text-xs sm:text-sm print:p-0 print:overflow-visible">
            
            {/* Header */}
            <div className="border-b border-slate-300 pb-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div>
                <h1 className="text-2xl sm:text-3xl font-heading font-extrabold text-slate-900 tracking-tight">
                  Ashutosh Verma
                </h1>
                <p className="text-sm font-semibold text-brand-600 mt-0.5">
                  Product Management Intern | 0→1 AI & Consumer Products
                </p>
                <p className="text-xs text-slate-600 mt-1 flex items-center gap-2">
                  <span className="flex items-center gap-1"><MapPin className="w-3 h-3 text-slate-400" /> Noida, UP</span>
                  <span>•</span>
                  <span>Open to Relocation / Remote</span>
                </p>
              </div>

              <div className="text-xs text-slate-600 space-y-1 text-left sm:text-right">
                <p className="flex items-center gap-1.5 sm:justify-end font-medium">
                  <Mail className="w-3.5 h-3.5 text-slate-400" />
                  <a href={`mailto:${personalInfo.email}`} className="hover:underline">{personalInfo.email}</a>
                </p>
                <p className="flex items-center gap-1.5 sm:justify-end">
                  <Linkedin className="w-3.5 h-3.5 text-slate-400" />
                  <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="hover:underline">linkedin.com/in/ashutosh-verma-pm</a>
                </p>
              </div>
            </div>

            {/* Executive Summary */}
            <div>
              <h2 className="text-xs font-bold uppercase tracking-wider text-brand-600 border-b border-slate-200 pb-1 mb-2">
                Executive Summary
              </h2>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                {personalInfo.summary} {personalInfo.bioQuote}
              </p>
            </div>

            {/* Work Experience */}
            <div>
              <h2 className="text-xs font-bold uppercase tracking-wider text-brand-600 border-b border-slate-200 pb-1 mb-3">
                Professional Experience
              </h2>
              <div className="space-y-4">
                {experienceList.map((exp, i) => (
                  <div key={i} className="space-y-1">
                    <div className="flex justify-between items-baseline font-bold text-xs sm:text-sm">
                      <span className="text-slate-900">{exp.role} — <span className="text-brand-600 font-semibold">{exp.company}</span></span>
                      <span className="text-slate-500 font-normal text-xs">{exp.period} | {exp.location}</span>
                    </div>
                    <ul className="list-disc pl-4 space-y-1 text-xs text-slate-700">
                      {exp.bullets.map((b, bIdx) => (
                        <li key={bIdx}>{b}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Capstone & Key PM Projects */}
            <div>
              <h2 className="text-xs font-bold uppercase tracking-wider text-brand-600 border-b border-slate-200 pb-1 mb-3">
                Key PM Projects & Deliverables
              </h2>
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between font-bold text-xs">
                    <span>Jananivaani — AI Multilingual Healthcare Assistant (Masai × BITSoM Capstone)</span>
                    <span className="text-emerald-700 font-semibold">94% Evaluation Score</span>
                  </div>
                  <p className="text-xs text-slate-700 mt-1">
                    End-to-end product discovery for an AI voice/text assistant. Authored PRD, 30+ user stories, 20+ Figma screens across 4 MVP workflows (pregnancy tracking, symptom guidance, education) using MoSCoW, ERRC, and SCAMPER.
                  </p>
                </div>

                <div>
                  <div className="flex justify-between font-bold text-xs">
                    <span>Cati AI — Customer Communication Platform (0→1 MVP)</span>
                    <span className="text-slate-500 font-normal">12 Healthcare Pilots</span>
                  </div>
                  <p className="text-xs text-slate-700 mt-1">
                    Synthesized 18+ customer feature requests into 6 core opportunities. Authored 5 PRDs, 30+ user stories, and 10+ wireframes, coordinating weekly UAT.
                  </p>
                </div>
              </div>
            </div>

            {/* Education */}
            <div>
              <h2 className="text-xs font-bold uppercase tracking-wider text-brand-600 border-b border-slate-200 pb-1 mb-2">
                Education & Achievements
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
                {educationList.map((edu, i) => (
                  <div key={i} className="p-2.5 bg-slate-50 rounded border border-slate-200">
                    <p className="font-bold text-slate-900">{edu.institution}</p>
                    <p className="text-slate-700 font-medium text-[11px]">{edu.program}</p>
                    <p className="text-brand-600 font-semibold text-[11px] mt-1">{edu.score}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Skills & Tools */}
            <div>
              <h2 className="text-xs font-bold uppercase tracking-wider text-brand-600 border-b border-slate-200 pb-1 mb-2">
                Core Skills & Tools
              </h2>
              <div className="text-xs text-slate-700 space-y-1">
                <p><strong>Product Management:</strong> {skillsMatrix.pm.skills.join(' • ')}</p>
                <p><strong>AI & Innovation:</strong> {skillsMatrix.ai.skills.join(' • ')}</p>
                <p><strong>Tools:</strong> {skillsMatrix.tools.skills.join(' • ')}</p>
              </div>
            </div>

          </div>

          {/* Footer controls inside modal */}
          <div className="p-4 px-6 bg-slate-50 border-t border-slate-200 flex justify-between items-center print:hidden">
            <span className="text-xs text-slate-500 font-medium">
              Ready for immediate printing or PDF export
            </span>
            <button
              onClick={handlePrint}
              className="px-5 py-2 rounded-xl bg-brand-600 hover:bg-brand-700 text-white font-semibold text-xs shadow-xs flex items-center gap-1.5"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Save as PDF</span>
            </button>
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
};
