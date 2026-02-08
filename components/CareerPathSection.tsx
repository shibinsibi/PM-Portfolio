import React from 'react';
import { EXPERIENCE } from '../constants';

const CareerPathSection: React.FC = () => {
  const phases = [
    { 
      label: 'Graduation', 
      icon: '🎓', 
      color: 'from-[#008B8B] to-[#00A3A3]',
      tag: 'Graduation'
    },
    { 
      label: 'Post Graduation', 
      icon: '🏛️', 
      color: 'from-[#00A3A3] to-slate-200',
      tag: 'Post Graduation'
    },
    { 
      label: 'Work Experience', 
      icon: '💼', 
      color: 'from-slate-200 to-[#008B8B]',
      tag: 'Work Experience'
    }
  ];

  return (
    <section id="career-path" className="py-32 bg-white relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-1/4 -left-20 w-64 h-64 bg-[#008B8B]/5 rounded-full blur-[100px] opacity-40"></div>
      <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-slate-50 rounded-full blur-[120px] opacity-20"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-24 text-center">
          <span className="text-[#008B8B] font-bold uppercase tracking-[0.4em] text-[10px] mb-4 block">EVOLUTION</span>
          <h2 className="text-4xl sm:text-6xl font-bold text-[#1A1A1A] tracking-tight mb-6">
            Career <span className="text-[#008B8B] italic">Journey</span>
          </h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto font-medium">
            From troubleshooting production at scale to architecting product strategy for global luxury brands.
          </p>
        </div>

        <div className="relative">
          {/* Central Curved Path (Desktop) */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-slate-100 -translate-x-1/2">
            <svg className="absolute top-0 left-[-40px] w-20 h-full opacity-10" preserveAspectRatio="none">
              <path 
                d="M 40 0 Q 80 200 40 400 Q 0 600 40 800 Q 80 1000 40 1200" 
                fill="none" 
                stroke="url(#path-gradient-cyan)" 
                strokeWidth="4" 
                strokeDasharray="10 10"
              />
              <defs>
                <linearGradient id="path-gradient-cyan" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#008B8B" />
                  <stop offset="50%" stopColor="#00A3A3" />
                  <stop offset="100%" stopColor="#008B8B" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          <div className="space-y-32">
            {[...EXPERIENCE].reverse().map((job, idx) => {
              const isEven = idx % 2 === 0;
              const phase = phases[idx] || phases[0];

              return (
                <div key={idx} className={`relative flex flex-col lg:flex-row items-center ${isEven ? 'lg:flex-row-reverse' : ''}`}>
                  
                  {/* Phase Marker */}
                  <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 hidden lg:flex items-center justify-center z-20">
                    <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${phase.color} shadow-lg shadow-[#008B8B]/20 flex items-center justify-center text-xl text-white transform rotate-45 hover:rotate-[225deg] transition-transform duration-700 cursor-default`}>
                      <span className="transform -rotate-45">{phase.icon}</span>
                    </div>
                  </div>

                  {/* Content Card */}
                  <div className={`w-full lg:w-[45%] group perspective-container`}>
                    <div className="spatial-card preserve-3d group-hover:-translate-y-2 transition-all duration-500 bg-slate-50 p-8 sm:p-12 rounded-[3rem] border border-slate-100 shadow-xl hover:border-[#008B8B]/20">
                      <div className="mb-6 flex flex-wrap items-center gap-3">
                        <span className={`px-4 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest text-white bg-gradient-to-r ${phase.color}`}>
                          {phase.tag}
                        </span>
                        <span className="text-slate-400 font-bold text-[10px] uppercase tracking-widest">{job.period}</span>
                      </div>
                      
                      <h3 className="text-2xl font-bold text-[#1A1A1A] mb-2 leading-tight">{job.role}</h3>
                      <div className="text-[#008B8B] font-bold text-sm tracking-wide mb-8">{job.company}</div>
                      
                      <div className="space-y-4">
                        {job.description.map((point, pIdx) => (
                          <div key={pIdx} className="flex items-start text-slate-600 leading-relaxed text-sm">
                            <span className="w-1.5 h-1.5 rounded-full bg-slate-200 mr-4 mt-2 flex-shrink-0 group-hover:bg-[#008B8B] transition-colors"></span>
                            {point}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Spacer for Desktop */}
                  <div className="hidden lg:block w-[10%]"></div>
                  
                  {/* Decorative Side Label (Desktop Only) */}
                  <div className={`hidden lg:flex w-[45%] flex-col ${isEven ? 'items-start' : 'items-end'}`}>
                    <div className="text-6xl font-serif-header text-slate-100 uppercase tracking-tighter pointer-events-none select-none">
                      {phase.label.split(' ').map((word, i) => (
                        <div key={i} className={i === 1 ? 'ml-12 text-slate-200' : ''}>{word}</div>
                      ))}
                    </div>
                  </div>

                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareerPathSection;