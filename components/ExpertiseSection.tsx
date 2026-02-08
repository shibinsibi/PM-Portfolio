import React from 'react';
import { SKILLS } from '../constants';

const ExpertiseSection: React.FC = () => {
  const categoriesMap = [
    { id: 'Product', label: 'Product Leadership' },
    { id: 'Technical', label: 'Technical Skills' },
    { id: 'Certifications', label: 'Certifications' }
  ] as const;

  const isHighlighted = (name: string) => {
    const highlights = ['Product Strategy', 'Salesforce Commerce', 'Stakeholder Management', 'AI Product Management', 'RICE Prioritization'];
    return highlights.includes(name);
  };

  return (
    <section id="expertise" className="py-32 bg-slate-50 relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#008B8B]/5 blur-[120px] rounded-full -mr-48 -mt-48"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-24 text-center">
          <span className="text-[#008B8B] font-bold uppercase tracking-[0.4em] text-[10px] sm:text-xs mb-4 block">EXPERTISE</span>
          <h2 className="text-5xl sm:text-6xl md:text-7xl font-bold text-[#1A1A1A] tracking-tight mb-8">
            Skills <span className="text-slate-300">&</span> Tools
          </h2>
          <div className="h-[1px] w-24 bg-gradient-to-r from-transparent via-[#008B8B] to-transparent mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8 perspective-container">
          {categoriesMap.map((cat) => (
            <div 
              key={cat.id} 
              className="bg-white p-10 rounded-[2.5rem] shadow-xl spatial-card preserve-3d group hover:shadow-[#008B8B]/10 transition-all duration-500 border border-slate-100"
            >
              <h3 className="text-xl font-bold text-[#1A1A1A] mb-10 tracking-tight depth-1 flex items-center gap-3">
                <span className="w-1.5 h-6 bg-[#008B8B] rounded-full"></span>
                {cat.label}
              </h3>
              
              <div className="flex flex-wrap gap-3 depth-2">
                {SKILLS.filter(s => s.category === cat.id).map((skill) => (
                  <div 
                    key={skill.name}
                    className={`
                      px-5 py-3 rounded-xl text-sm font-medium transition-all duration-300 border
                      ${isHighlighted(skill.name) 
                        ? 'bg-[#008B8B]/10 border-[#008B8B] text-[#008B8B] shadow-sm' 
                        : 'bg-slate-50 border-slate-200 text-slate-500 hover:border-[#008B8B] hover:text-[#008B8B]'
                      }
                      hover:-translate-y-1 hover:scale-105 cursor-default
                    `}
                  >
                    <div className="flex items-center gap-2">
                      {skill.name}
                      {skill.category === 'Certifications' && (
                        <svg className="w-3 h-3 opacity-60" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.162zM10 12.906l4 1.714V11.3l-1.477-.632a1 1 0 00-.794 1.838l1.477.632v1.714a7 7 0 01-6.426 0V13.12l1.426-.611a1 1 0 00-.788-1.838L6 11.233v2.33a9 9 0 008 0" />
                        </svg>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExpertiseSection;