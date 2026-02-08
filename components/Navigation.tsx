import React, { useState } from 'react';

const Navigation: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const navLinks = [
    { label: 'Home', id: 'introduction' },
    { label: 'Skills', id: 'expertise' },
    { label: 'Work', id: 'case-studies' },
    { label: 'Experience', id: 'career-path' },
  ];

  return (
    <nav className="sticky top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-xl border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex-shrink-0">
            <a 
              href="#introduction" 
              onClick={(e) => scrollToSection(e, 'introduction')}
              className="text-2xl font-black text-[#1A1A1A] tracking-tight flex items-center gap-2 group"
            >
              <span className="w-10 h-10 bg-[#008B8B] text-white flex items-center justify-center rounded-xl text-lg group-hover:rotate-12 transition-transform shadow-lg shadow-[#008B8B]/20">S</span>
            </a>
          </div>
          
          <div className="hidden md:flex items-center space-x-10">
            {navLinks.map((link) => (
              <a 
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => scrollToSection(e, link.id)}
                className="text-sm font-bold text-slate-500 hover:text-[#008B8B] transition-colors uppercase tracking-wider"
              >
                {link.label}
              </a>
            ))}
            <a 
              href="#contact" 
              onClick={(e) => scrollToSection(e, 'contact')}
              className="ml-4 px-6 py-2.5 bg-[#008B8B] text-white rounded-xl text-sm font-bold hover:bg-[#00A3A3] transition-all shadow-lg shadow-[#008B8B]/20"
            >
              Contact
            </a>
          </div>

          <div className="md:hidden">
             <button 
               onClick={() => setIsMenuOpen(!isMenuOpen)}
               className="p-2 text-slate-500 hover:text-[#008B8B] transition-colors" 
               aria-label="Toggle menu"
             >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {isMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
             </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden bg-white border-b border-slate-100 overflow-hidden transition-all duration-300 ${isMenuOpen ? 'max-h-96' : 'max-h-0'}`}>
        <div className="px-4 pt-2 pb-6 space-y-4">
          {navLinks.map((link) => (
            <a 
              key={link.id}
              href={`#${link.id}`}
              onClick={(e) => scrollToSection(e, link.id)}
              className="block text-base font-bold text-slate-600 hover:text-[#008B8B] transition-colors uppercase tracking-wider"
            >
              {link.label}
            </a>
          ))}
          <a 
            href="#contact" 
            onClick={(e) => scrollToSection(e, 'contact')}
            className="block w-full text-center px-6 py-3 bg-[#008B8B] text-white rounded-xl text-sm font-bold shadow-lg"
          >
            Contact Me
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;