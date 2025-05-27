
import React, { useState, useEffect } from 'react';
import { HashRouter, Routes, Route, NavLink as RouterNavLink, useLocation } from 'react-router-dom';
import { personalInfoData, navLinksData, contactLinksData } from './data';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ResearchPage } from './pages/ResearchPage';
import { ExperiencePage } from './pages/ExperiencePage';
import { EducationPage } from './pages/EducationPage';
import { SkillsPage } from './pages/SkillsPage';
import { ContactPage } from './pages/ContactPage';
import { ConsultancyPage } from './pages/ConsultancyPage';
import { NavLink as NavLinkType } from './types';

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const location = useLocation();

  React.useEffect(() => {
    setIsMobileMenuOpen(false); 
  }, [location]);

  return (
    <header className="bg-dark-secondary/80 backdrop-blur-md text-light-primary shadow-lg sticky top-0 z-50 border-b border-neon-blue/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <RouterNavLink to="/" className="group">
            <h1 className="text-xl sm:text-2xl font-bold group-hover:text-neon-blue transition-colors duration-300">
              {personalInfoData.name.split(',')[0]} 
            </h1>
            <p className="text-xs text-light-secondary group-hover:text-neon-blue/80 transition-colors duration-300">
              {personalInfoData.title}
            </p>
          </RouterNavLink>
          
          <nav className="hidden md:flex space-x-1 lg:space-x-2">
            {navLinksData.map((link: NavLinkType) => (
              <RouterNavLink
                key={link.id}
                to={link.path}
                className={({ isActive }) =>
                  `px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 ease-in-out transform hover:scale-105 hover:text-neon-blue ${
                    isActive ? 'bg-neon-blue/20 text-neon-blue shadow-neon-glow-blue' : 'text-light-secondary hover:bg-dark-primary/70'
                  }`
                }
              >
                {link.name}
              </RouterNavLink>
            ))}
          </nav>
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-light-secondary hover:text-neon-blue focus:outline-none p-2"
              aria-label="Open main menu"
              aria-expanded={isMobileMenuOpen}
              role="button"
            >
              <i className={`fas ${isMobileMenuOpen ? 'fa-times' : 'fa-bars'} text-2xl`}></i>
            </button>
          </div>
        </div>
      </div>
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-dark-secondary/95 backdrop-blur-sm shadow-xl z-40 border-t border-neon-blue/20">
          <nav className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinksData.map((link: NavLinkType) => (
              <RouterNavLink
                key={link.id}
                to={link.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `block px-3 py-3 rounded-md text-base font-medium transition-colors duration-300 ${
                    isActive ? 'bg-neon-blue/20 text-neon-blue' : 'text-light-secondary hover:bg-dark-primary hover:text-neon-blue'
                  }`
                }
              >
                {link.name}
              </RouterNavLink>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

const Footer: React.FC = () => (
  <footer className="bg-dark-secondary/80 backdrop-blur-md text-light-secondary py-10 sm:py-12 mt-auto border-t border-neon-blue/20">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <div className="flex justify-center space-x-5 sm:space-x-8 mb-8">
        {contactLinksData.map(link => (
          <a
            key={link.id}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-light-secondary hover:text-neon-blue transition-all duration-300 text-3xl sm:text-4xl transform hover:scale-125 hover:animate-pulseGlow [--tw-shadow-color:theme('colors.neon-blue')]"
            aria-label={link.name}
          >
            <i className={link.iconClass}></i>
          </a>
        ))}
      </div>
      <p className="text-sm mb-2">
        &copy; {new Date().getFullYear()} {personalInfoData.name}. All rights reserved.
      </p>
      <p className="text-xs">
        Crafted with <i className="fas fa-heart text-neon-pink"></i> &amp; <i className="fas fa-code text-neon-green"></i>. 
        Driven by <span className="text-neon-blue">Innovation</span>.
      </p>
       {personalInfoData.cvUrl && (
         <div className="mt-8">
            <a 
                href={personalInfoData.cvUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center bg-transparent border-2 border-neon-blue text-neon-blue font-semibold py-2.5 px-7 rounded-lg shadow-neon-glow-blue hover:bg-neon-blue hover:text-dark-primary transition-all duration-300 transform hover:scale-105 text-sm"
            >
                <i className="fas fa-cloud-download-alt mr-2.5"></i>
                Download CV
            </a>
        </div>
      )}
    </div>
  </footer>
);

const ScrollToTopButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <button
      type="button"
      onClick={scrollToTop}
      className={`scroll-to-top ${isVisible ? 'visible' : ''}`}
      aria-label="Scroll to top"
      role="button"
    >
      <i className="fas fa-arrow-up"></i>
    </button>
  );
};


const App: React.FC = () => {
  return (
    <HashRouter>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/research" element={<ResearchPage />} />
            <Route path="/experience" element={<ExperiencePage />} />
            <Route path="/education" element={<EducationPage />} />
            <Route path="/skills" element={<SkillsPage />} />
            <Route path="/consultancy" element={<ConsultancyPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        <Footer />
        <ScrollToTopButton />
      </div>
    </HashRouter>
  );
};

export default App;
