import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TickerBanner } from './components/TickerBanner';
import { AboutEducation } from './components/AboutEducation';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { SkillsMatrix } from './components/SkillsMatrix';
import { BeyondProduct } from './components/BeyondProduct';
import { Footer } from './components/Footer';

export function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-[#FAFAFA] text-[#18181B] font-sans selection:bg-slate-900 selection:text-white">
        {/* Navigation */}
        <Navbar />

        {/* Main Content Sections */}
        <main>
          <Hero />
          <TickerBanner />
          <AboutEducation />
          <Projects />
          <Experience />
          <SkillsMatrix />
          <BeyondProduct />
        </main>

        {/* Footer & Contact */}
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
