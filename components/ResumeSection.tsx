
import React from 'react';
import { EXPERIENCE } from '../constants';

const ResumeSection: React.FC = () => {
  return (
    <section id="resume" className="py-24 bg-white border-t border-slate-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">Career Journey</h2>
          <div className="w-20 h-1.5 bg-indigo-600 mx-auto rounded-full"></div>
        </div>

        <div className="space-y-12">
          {EXPERIENCE.map((job, idx) => (
            <div key={idx} className="relative pl-10 pb-12 border-l-2 border-slate-100 last:pb-0 group">
              {/* Timeline Marker */}
              <div className="absolute left-[-11px] top-0 w-5 h-5 rounded-full bg-indigo-600 border-4 border-white shadow-md group-hover:scale-125 transition-transform duration-300"></div>
              
              <div className="glass-depth p-8 rounded-[2rem] border border-slate-100 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 spatial-card">
                <div className="flex flex-col md:flex-row md:justify-between mb-6">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 tracking-tight">{job.role}</h3>
                    <div className="text-indigo-600 font-bold uppercase tracking-widest text-xs mt-1">{job.company}</div>
                  </div>
                  <div className="text-slate-400 font-black text-[10px] uppercase tracking-[0.2em] mt-2 md:mt-0 px-4 py-2 bg-slate-50 rounded-xl h-fit">
                    {job.period}
                  </div>
                </div>
                
                <ul className="space-y-4">
                  {job.description.map((point, pIdx) => (
                    <li key={pIdx} className="flex items-start text-slate-600 text-base leading-relaxed">
                      <span className="text-indigo-500 mr-4 mt-2.5 w-1.5 h-1.5 rounded-full bg-indigo-500/50 flex-shrink-0"></span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResumeSection;
