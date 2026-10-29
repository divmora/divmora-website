import React, { useState, useEffect } from 'react';
import { Navbar } from './components/layout/Navbar';
import { Hero } from './components/sections/Hero';
import { AboutDivmora } from './components/sections/AboutDivmora';
import { ProjectsCatalog } from './components/sections/ProjectsCatalog';
import { PrinciplesSection } from './components/sections/PrinciplesSection';
import { ContactAndCompany } from './components/sections/ContactAndCompany';
import { PrivacyPolicy } from './components/sections/PrivacyPolicy';
import { Footer } from './components/layout/Footer';

export const App: React.FC = () => {
  const [currentRoute, setCurrentRoute] = useState<'home' | 'privacy'>('home');

  useEffect(() => {
    document.documentElement.classList.remove('dark');

    const handleRouteChange = () => {
      const hash = window.location.hash.toLowerCase();
      const path = window.location.pathname.toLowerCase();

      if (
        hash === '#/privacy' ||
        hash === '#privacy' ||
        hash === '#privacy-policy' ||
        path.endsWith('/privacy') ||
        path.endsWith('/privacy/')
      ) {
        setCurrentRoute('privacy');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        setCurrentRoute('home');
      }
    };

    // Run on initial mount
    handleRouteChange();

    window.addEventListener('hashchange', handleRouteChange);
    window.addEventListener('popstate', handleRouteChange);

    return () => {
      window.removeEventListener('hashchange', handleRouteChange);
      window.removeEventListener('popstate', handleRouteChange);
    };
  }, []);

  const navigateToHome = () => {
    if (window.location.hash) {
      window.history.pushState(null, '', window.location.pathname);
    }
    setCurrentRoute('home');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#FAFAFC] text-slate-900 relative selection:bg-blue-600/10 selection:text-blue-700 overflow-x-hidden font-sans">
      {/* Navigation */}
      <Navbar currentRoute={currentRoute} onNavigateHome={navigateToHome} />

      {/* Main Content Area */}
      <main className="relative z-10">
        {currentRoute === 'privacy' ? (
          <PrivacyPolicy onBackToHome={navigateToHome} />
        ) : (
          <>
            <Hero />
            <AboutDivmora />
            <ProjectsCatalog />
            <PrinciplesSection />
            <ContactAndCompany />
          </>
        )}
      </main>

      {/* Footer */}
      <Footer onNavigatePrivacy={() => {
        window.location.hash = '#/privacy';
        setCurrentRoute('privacy');
      }} />
    </div>
  );
};

export default App;
