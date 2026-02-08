import React from 'react';

const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-32 bg-white relative overflow-hidden">
      {/* Decorative accent */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#008B8B]/20 to-transparent"></div>
      
      <div className="max-w-6xl mx-auto px-6 relative z-10 text-center">
        <div className="mb-20">
          <h2 className="text-5xl sm:text-7xl font-bold text-[#1A1A1A] mb-8 font-serif-header tracking-tight leading-none">
            Let's build <br /> <span className="text-[#008B8B] italic">together.</span>
          </h2>
          <p className="text-xl sm:text-2xl text-slate-600 mb-16 leading-relaxed font-light max-w-3xl mx-auto">
            Searching for an APM who understands <span className="text-[#1A1A1A] font-bold">engineering depth</span> and <span className="text-[#1A1A1A] font-bold">business scale</span>? Let's connect directly.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <a 
              href="mailto:shibinsibi3021@gmail.com" 
              className="flex items-center justify-center p-6 rounded-3xl bg-slate-50 border border-slate-100 hover:border-[#008B8B]/30 hover:bg-white transition-all group shadow-sm hover:shadow-xl spatial-card preserve-3d"
            >
              <div className="w-12 h-12 rounded-2xl bg-[#008B8B]/10 flex items-center justify-center text-[#008B8B] mr-4 group-hover:bg-[#008B8B] group-hover:text-white transition-all depth-1">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div className="text-left depth-2">
                <div className="text-[10px] uppercase font-bold text-slate-400 tracking-widest mb-1">Direct Message</div>
                <div className="font-bold text-[#1A1A1A] text-base">Contact via Email</div>
              </div>
            </a>
            
            <a 
              href="https://www.linkedin.com/in/shibin-sibi" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center justify-center p-6 rounded-3xl bg-slate-50 border border-slate-100 hover:border-[#008B8B]/30 hover:bg-white transition-all group shadow-sm hover:shadow-xl spatial-card preserve-3d"
            >
              <div className="w-12 h-12 rounded-2xl bg-[#008B8B]/10 flex items-center justify-center text-[#008B8B] mr-4 group-hover:bg-[#008B8B] group-hover:text-white transition-all depth-1">
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </div>
              <div className="text-left depth-2">
                <div className="text-[10px] uppercase font-bold text-slate-400 tracking-widest mb-1">Network</div>
                <div className="font-bold text-[#1A1A1A] text-base">LinkedIn Profile</div>
              </div>
            </a>

            <a 
              href="tel:+917485931935" 
              className="flex items-center justify-center p-6 rounded-3xl bg-slate-50 border border-slate-100 hover:border-[#008B8B]/30 hover:bg-white transition-all group shadow-sm hover:shadow-xl spatial-card preserve-3d"
            >
              <div className="w-12 h-12 rounded-2xl bg-[#008B8B]/10 flex items-center justify-center text-[#008B8B] mr-4 group-hover:bg-[#008B8B] group-hover:text-white transition-all depth-1">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div className="text-left depth-2">
                <div className="text-[10px] uppercase font-bold text-slate-400 tracking-widest mb-1">Phone</div>
                <div className="font-bold text-[#1A1A1A] text-base">+91 74859 31935</div>
              </div>
            </a>
          </div>
        </div>
      </div>
      
      {/* Background visual detail */}
      <div className="absolute -bottom-24 left-1/2 -translate-x-1/2 w-[800px] h-64 bg-[#008B8B]/5 blur-[120px] rounded-full"></div>
    </section>
  );
};

export default ContactSection;