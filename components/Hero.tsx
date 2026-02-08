import React, { useState, useCallback } from 'react';

const Hero: React.FC = () => {
  const [rotation, setRotation] = useState({ x: 0, y: 0 });

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = (y - centerY) / 25;
    const rotateY = (centerX - x) / 25;
    
    setRotation({ x: rotateX, y: rotateY });
  }, []);

  const handleMouseLeave = () => {
    setRotation({ x: 0, y: 0 });
  };

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="introduction" className="min-h-[calc(100vh-80px)] flex items-center bg-white relative overflow-hidden perspective-container">
      {/* Background Subtle Detail */}
      <div className="absolute top-1/4 left-10 w-64 h-64 bg-[#008B8B]/5 rounded-full blur-[100px] opacity-60"></div>
      <div className="absolute bottom-1/4 right-20 w-80 h-80 bg-[#008B8B]/5 rounded-[3rem] blur-[120px] opacity-40 delay-700"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-16 lg:py-0">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
          
          {/* Introduction Content */}
          <div className="flex-1 text-center lg:text-left order-2 lg:order-1">
            <div className="mb-8">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1A1A1A] tracking-tighter uppercase block mb-4 drop-shadow-sm">
                SHIBIN SIBI
              </h1>
              <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-[#008B8B]/10 text-[#008B8B] text-xs font-bold uppercase tracking-[0.2em] border border-[#008B8B]/20 shadow-sm">
                Associate Product Manager • E-commerce • Technical Strategy
              </div>
            </div>
            
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1A1A1A] leading-[1.2] mb-8 tracking-tight font-serif-header">
              I build products that bridge the gap between <span className="text-[#008B8B]">complex code</span> and <span className="text-[#008B8B]">customer needs.</span>
            </h3>
            
            <p className="text-lg lg:text-xl text-slate-600 leading-relaxed mb-10 max-w-2xl mx-auto lg:mx-0 font-medium">
              3+ years scaling global luxury platforms (Michael Kors, Versace) through technical architecture and data-driven support. Leveraging an PGDM MBA in IT and a technical foundation to build product roadmaps that solve user friction and maximize AOV. Specialized in scaling high-traffic e-commerce ecosystems.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
              <a 
                href="#case-studies"
                onClick={(e) => scrollToSection(e, 'case-studies')}
                className="px-10 py-4 bg-[#008B8B] text-white rounded-xl font-bold text-lg text-center shadow-xl shadow-[#008B8B]/20 hover:bg-[#00A3A3] hover:-translate-y-1 transition-all"
              >
                View My Work
              </a>
              <a 
                href="#career-path"
                onClick={(e) => scrollToSection(e, 'career-path')}
                className="px-10 py-4 bg-slate-50 text-slate-900 border-2 border-slate-200 rounded-xl font-bold text-lg text-center hover:bg-slate-100 transition-all"
              >
                Career Journey
              </a>
            </div>
          </div>

          {/* 3D Professional Image Interaction */}
          <div 
            className="flex-shrink-0 order-1 lg:order-2 perspective-container"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            <div 
              className="relative spatial-card preserve-3d"
              style={{
                transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`
              }}
            >
              {/* Image Frame with Z-Offset */}
              <div className="relative z-10 w-64 h-64 sm:w-80 sm:h-80 lg:w-[450px] lg:h-[450px] rounded-[3rem] overflow-hidden border-8 border-white shadow-2xl depth-1 bg-[#DCC8A0]">
                <img 
                  src="https://lh3.googleusercontent.com/d/1Ph3dTCu-NguXCVp7Br10d6RaVkBKQYGA" 
                  alt="Shibin Sibi" 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800';
                  }}
                />
              </div>
              
              {/* Floating Decorative Elements */}
              <div 
                className="absolute -bottom-8 -right-8 w-40 h-40 bg-[#008B8B] rounded-[2rem] -z-10 rotate-12 transition-transform duration-500"
                style={{ transform: `translateZ(-50px) rotate(12deg)` }}
              ></div>
              <div 
                className="absolute -top-6 -left-6 w-24 h-24 bg-[#008B8B]/10 rounded-full -z-10 blur-xl"
                style={{ transform: `translateZ(-30px)` }}
              ></div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;