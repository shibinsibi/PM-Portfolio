import React, { useState } from 'react';
import { CaseStudy } from '../types';

interface Props {
  project: CaseStudy;
}

const CaseStudyCard: React.FC<Props> = ({ project }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isExpanded) return; // Disable 3D tilt when expanded for readability
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    setRotation({
      x: (y - centerY) / 20,
      y: (centerX - x) / 20
    });
  };

  const resetRotation = () => setRotation({ x: 0, y: 0 });

  return (
    <div 
      onMouseMove={handleMouseMove}
      onMouseLeave={resetRotation}
      className={`perspective-container transition-all duration-500 ease-in-out ${isExpanded ? 'col-span-full' : 'h-full'}`}
    >
      <div 
        className={`group bg-white rounded-3xl border border-slate-100 overflow-hidden spatial-card flex flex-col shadow-lg transition-all duration-500 ${isExpanded ? 'shadow-2xl border-[#008B8B]/30' : 'hover:shadow-2xl hover:border-[#008B8B]/30'}`}
        style={{
          transform: isExpanded ? 'none' : `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
          transition: 'transform 0.1s ease-out, all 0.5s ease-in-out'
        }}
      >
        <div className={`relative overflow-hidden preserve-3d transition-all duration-500 ${isExpanded ? 'h-64 lg:h-96' : 'aspect-video'}`}>
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-700"
          />
          <div className="absolute top-4 left-4 depth-2">
            <span className="px-3 py-1 bg-white/90 backdrop-blur text-[#1A1A1A] rounded-lg text-[10px] font-bold uppercase tracking-wider shadow-sm border border-slate-100">
              {project.category}
            </span>
          </div>
          {isExpanded && (
             <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent"></div>
          )}
        </div>
        
        <div className="p-8 flex flex-col flex-grow preserve-3d">
          <div className="flex justify-between items-start mb-4">
            <h3 className={`font-bold text-[#1A1A1A] transition-all duration-500 ${isExpanded ? 'text-4xl lg:text-5xl' : 'text-2xl'}`}>
              {project.title}
            </h3>
            {isExpanded && (
              <button 
                onClick={() => setIsExpanded(false)}
                className="p-2 rounded-full bg-slate-100 text-slate-500 hover:bg-[#008B8B] hover:text-white transition-all"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
              </button>
            )}
          </div>

          <p className={`text-slate-600 leading-relaxed mb-6 font-medium transition-all ${isExpanded ? 'text-xl' : 'text-sm'}`}>
            {project.tagline}
          </p>
          
          {/* Expanded Content Section */}
          <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isExpanded ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'}`}>
            <div className="grid lg:grid-cols-12 gap-12 pt-8 border-t border-slate-100">
              <div className="lg:col-span-7 space-y-12">
                <section>
                  <h4 className="text-[10px] font-bold text-[#008B8B] uppercase tracking-[0.3em] mb-4">The Friction Point</h4>
                  <p className="text-xl font-medium text-slate-700 leading-relaxed italic border-l-4 border-[#008B8B]/30 pl-6">"{project.problem}"</p>
                </section>
                <section>
                  <h4 className="text-[10px] font-bold text-[#008B8B] uppercase tracking-[0.3em] mb-6">Strategic Approach</h4>
                  <ul className="space-y-4">
                    {project.approach.map((a, i) => (
                      <li key={i} className="flex items-start text-slate-600 leading-relaxed text-base">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#008B8B] mr-4 mt-2.5 flex-shrink-0"></span>
                        {a}
                      </li>
                    ))}
                  </ul>
                </section>
                <section>
                  <h4 className="text-[10px] font-bold text-[#008B8B] uppercase tracking-[0.3em] mb-6">Impact & Results</h4>
                  <ul className="space-y-4">
                    {project.impact.map((imp, i) => (
                      <li key={i} className="flex items-start text-slate-600 leading-relaxed text-base">
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-300 mr-4 mt-2.5 flex-shrink-0"></span>
                        {imp}
                      </li>
                    ))}
                  </ul>
                </section>
              </div>
              
              <div className="lg:col-span-5">
                <div className="bg-slate-50 p-8 rounded-[2rem] border border-slate-100 shadow-inner">
                  <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.3em] mb-8 text-center">Core Metrics</h4>
                  <div className="space-y-8">
                    {project.metrics.map((m, i) => (
                      <div key={i} className="flex justify-between items-center border-b border-slate-200 pb-4 last:border-0 last:pb-0">
                        <span className="text-slate-500 font-bold text-[10px] uppercase tracking-widest">{m.label}</span>
                        <span className="text-2xl font-bold text-[#1A1A1A]">{m.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Default Preview Footer / Toggle */}
          <div className={`flex items-center justify-between pt-6 border-t border-slate-50 depth-1 mt-auto ${isExpanded ? 'hidden' : 'flex'}`}>
            <div className="flex space-x-4">
               {project.metrics.slice(0, 1).map((m, i) => (
                 <div key={i} className="flex flex-col">
                    <span className="text-[#008B8B] font-bold text-lg">{m.value}</span>
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{m.label}</span>
                 </div>
               ))}
            </div>
            <button 
              onClick={() => setIsExpanded(true)}
              className="text-xs font-bold text-[#008B8B] flex items-center group-hover:translate-x-1 transition-transform"
            >
              Explore
              <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudyCard;