
import React from 'react';
import { SKILLS } from '../constants';

const SkillsSection: React.FC = () => {
  const categories = Array.from(new Set(SKILLS.map(s => s.category)));

  return (
    <section id="expertise" className="py-24 bg-white border-t border-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-3xl font-extrabold text-slate-900 mb-4 tracking-tight">Technical & Product Core</h2>
          <div className="w-12 h-1 bg-indigo-600 mb-6"></div>
          <p className="text-slate-500 max-w-xl font-medium">My background blends production engineering expertise with modern product management frameworks.</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-12">
          {categories.map((cat) => (
            <div key={cat} className="space-y-6">
              <h3 className="text-indigo-600 font-bold uppercase tracking-widest text-xs border-b border-indigo-50 pb-4">{cat} Competencies</h3>
              <div className="space-y-6">
                {SKILLS.filter(s => s.category === cat).map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2 items-center">
                      <span className="text-sm font-bold text-slate-700 tracking-tight">{skill.name}</span>
                      <span className="text-[10px] font-black text-slate-400">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-slate-100 rounded-full h-1.5 overflow-hidden">
                      <div 
                        className="bg-indigo-600 h-1.5 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
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

export default SkillsSection;
