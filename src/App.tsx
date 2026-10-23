import React, { useEffect } from 'react';
import { Navbar } from './components/layout/Navbar';
import { Hero } from './components/sections/Hero';
import { AboutDivmora } from './components/sections/AboutDivmora';
import { ProjectsCatalog } from './components/sections/ProjectsCatalog';
import { PrinciplesSection } from './components/sections/PrinciplesSection';
import { ContactAndCompany } from './components/sections/ContactAndCompany';
import { Footer } from './components/layout/Footer';

export const App: React.FC = () => {
  useEffect(() => {
    document.documentElement.classList.remove('dark');
  }, []);

  return (
    <div className="min-h-screen bg-[#FAFAFC] text-slate-900 relative selection:bg-blue-600/10 selection:text-blue-700 overflow-x-hidden font-sans">
      {/* Navigation */}
      <Navbar />

      {/* Main Sections */}
      <main className="relative z-10">
        <Hero />
        <AboutDivmora />
        <ProjectsCatalog />
        <PrinciplesSection />
        <ContactAndCompany />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;
