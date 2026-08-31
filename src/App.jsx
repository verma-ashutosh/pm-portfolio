import React, { useState } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TickerBanner } from './components/TickerBanner';
import { MetricsGrid } from './components/MetricsGrid';
import { AboutEducation } from './components/AboutEducation';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { SkillsMatrix } from './components/SkillsMatrix';
import { BeyondProduct } from './components/BeyondProduct';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';

export function App() {
  const [resumeOpen, setResumeOpen] = useState(false);

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-[#FAFAFA] text-[#18181B] font-sans selection:bg-slate-900 selection:text-white">
        {/* Navigation */}
        <Navbar onOpenResume={() => setResumeOpen(true)} />

        {/* Main Content Sections */}
        <main>
          <Hero onOpenResume={() => setResumeOpen(true)} />
          <TickerBanner />
          <MetricsGrid />
          <AboutEducation onOpenResume={() => setResumeOpen(true)} />
          <Projects />
          <Experience />
          <SkillsMatrix />
          <BeyondProduct />
        </main>

        {/* Footer & Contact */}
        <Footer onOpenResume={() => setResumeOpen(true)} />

        {/* Resume Interactive Modal */}
        <ResumeModal
          isOpen={resumeOpen}
          onClose={() => setResumeOpen(false)}
        />
      </div>
    </ThemeProvider>
  );
}

export default App;
