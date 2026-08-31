import React from 'react';
import { X, Download, Printer, FileText, MapPin, Mail, Linkedin } from 'lucide-react';
import { personalInfo, educationList, experienceList } from '../data/portfolioData';

export const ResumeModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto bg-slate-900/40 backdrop-blur-xs print:p-0 print:static print:block">
      {/* Modal Window */}
      <div className="relative w-full max-w-4xl bg-white text-[#18181B] rounded-2xl border border-slate-200 shadow-lg overflow-hidden z-10 my-8 max-h-[90vh] flex flex-col print:max-h-none print:shadow-none print:border-none print:w-full print:m-0">
        
        {/* Top Control Bar */}
        <div className="p-4 px-6 bg-[#18181B] text-white flex items-center justify-between shrink-0 print:hidden">
          <div className="flex items-center gap-2">
            <FileText className="w-4 h-4 text-slate-300" />
            <span className="font-semibold text-xs text-slate-200">
              Ashutosh_Verma_PM_Resume.pdf
            </span>
          </div>
          <div className="flex items-center gap-2">
            <a
              href="/Ashutosh_Verma_Resume.pdf"
              download="Ashutosh_Verma_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1.5 rounded-md bg-white text-slate-900 text-xs font-semibold hover:bg-slate-100 flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download PDF</span>
            </a>
            <button
              onClick={handlePrint}
              className="px-3 py-1.5 rounded-md bg-slate-800 hover:bg-slate-700 text-xs font-medium text-slate-200 flex items-center gap-1.5 transition-colors"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print</span>
            </button>
            <button
              onClick={onClose}
              className="p-1 rounded-md text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Resume Content */}
        <div className="p-8 sm:p-10 overflow-y-auto flex-1 bg-white font-sans text-slate-900 space-y-6 text-xs sm:text-sm print:p-0 print:overflow-visible">
          
          {/* Header */}
          <div className="border-b border-slate-200 pb-5 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div>
              <h1 className="text-2xl font-bold text-[#18181B] tracking-tight">
                Ashutosh Verma
              </h1>
              <p className="text-xs font-semibold text-slate-600 mt-0.5">
                Product & Strategy Associate (Founding Team @ Cati AI)
              </p>
              <p className="text-xs text-slate-500 mt-1 flex items-center gap-2">
                <span className="flex items-center gap-1"><MapPin className="w-3 h-3 text-slate-400" /> Noida, UP, India</span>
                <span>•</span>
                <span>Open for Product Roles</span>
              </p>
            </div>

            <div className="text-xs text-slate-600 space-y-1 text-left sm:text-right">
              <p className="flex items-center gap-1.5 sm:justify-end font-medium">
                <Mail className="w-3.5 h-3.5 text-slate-400" />
                <a href={`mailto:${personalInfo.email}`} className="hover:underline">{personalInfo.email}</a>
              </p>
              <p className="flex items-center gap-1.5 sm:justify-end">
                <Linkedin className="w-3.5 h-3.5 text-slate-400" />
                <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="hover:underline">linkedin.com/in/ashutosh-verma-pm</a>
              </p>
            </div>
          </div>

          {/* Executive Summary */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-700 border-b border-slate-200 pb-1 mb-2">
              Executive Summary
            </h2>
            <p className="text-xs text-slate-600 leading-relaxed font-normal">
              Founding Team Product & Strategy Associate at Cati AI. Experienced in 0→1 discovery, user research across 12+ healthcare pilot providers, authoring PRDs, and scoping MVP features. Specialized training in Agentic & Generative AI Product Management (BITSoM × Masai, 94% Capstone Score).
            </p>
          </div>

          {/* Experience */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-700 border-b border-slate-200 pb-1 mb-3">
              Work Experience
            </h2>
            <div className="space-y-4">
              {experienceList.map((exp, idx) => (
                <div key={idx} className="space-y-1">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-bold text-xs text-[#18181B]">{exp.role}</h3>
                      <p className="text-[11px] font-semibold text-slate-600">{exp.company} • {exp.location}</p>
                    </div>
                    <span className="text-[11px] text-slate-500 font-medium">{exp.period}</span>
                  </div>
                  <ul className="list-disc list-inside text-xs text-slate-600 space-y-0.5 pl-1">
                    {exp.bullets.map((b, bIdx) => (
                      <li key={bIdx}>{b}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-700 border-b border-slate-200 pb-1 mb-3">
              Education & Certification
            </h2>
            <div className="space-y-2">
              {educationList.map((edu, idx) => (
                <div key={idx} className="flex justify-between items-start text-xs">
                  <div>
                    <h3 className="font-bold text-[#18181B]">{edu.program}</h3>
                    <p className="text-slate-600 text-[11px] font-medium">{edu.institution} ({edu.score})</p>
                  </div>
                  <span className="text-[11px] text-slate-500 font-medium">{edu.period}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="p-3 px-6 bg-white border-t border-slate-200 flex items-center justify-between text-xs text-slate-500 print:hidden">
          <span>Ashutosh Verma • Executive Resume</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-lg bg-[#18181B] hover:bg-[#3F3F46] text-white font-medium transition-colors"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
};
