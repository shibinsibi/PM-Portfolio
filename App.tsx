import React from 'react';
import Navigation from './components/Navigation.tsx';
import Hero from './components/Hero.tsx';
import ExpertiseSection from './components/ExpertiseSection.tsx';
import CaseStudyCard from './components/CaseStudyCard.tsx';
import ContactSection from './components/ContactSection.tsx';
import CareerPathSection from './components/CareerPathSection.tsx';
import { CASE_STUDIES } from './constants.ts';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white perspective-container">
      <Navigation />
      
      <main className="preserve-3d">
        <Hero />
        
        <ExpertiseSection />
        
        {CASE_STUDIES.length > 0 && (
          <section id="case-studies" className="py-32 bg-white relative overflow-hidden">
            {/* Subtle 3D background grid */}
            <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none transform -skew-y-6">
              <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern id="grid-3d-light" width="60" height="60" patternUnits="userSpaceOnUse">
                    <path d="M 60 0 L 0 0 0 60" fill="none" stroke="black" strokeWidth="0.5"/>
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid-3d-light)" />
              </svg>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
              <div className="mb-24 text-center">
                <span className="text-[#008B8B] font-bold uppercase tracking-[0.4em] text-[10px] sm:text-xs mb-6 block">
                  FEATURED WORK
                </span>
                <h2 className="text-5xl sm:text-7xl lg:text-8xl font-serif-header text-[#1A1A1A] tracking-tight">
                  Case Studies
                </h2>
                <div className="mt-12 h-[1px] w-24 bg-gradient-to-r from-transparent via-[#008B8B] to-transparent mx-auto"></div>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                {CASE_STUDIES.map((project) => (
                  <CaseStudyCard 
                    key={project.id}
                    project={project} 
                  />
                ))}
              </div>
            </div>
          </section>
        )}

        <CareerPathSection />
        
        <ContactSection />
      </main>

      <footer className="py-16 bg-white border-t border-slate-100 text-center relative z-10">
        <div className="max-w-7xl mx-auto px-4">
          <p className="text-[10px] text-slate-500 font-bold uppercase tracking-[0.4em]">
            © 2025 Shibin Sibi
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;