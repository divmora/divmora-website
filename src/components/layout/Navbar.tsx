import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowLeft } from 'lucide-react';
import { SITE_CONFIG } from '../../data/siteConfig';
import { GlowingButton } from '../ui/GlowingButton';
import { GithubIcon } from '../ui/GithubIcon';
import { DivmoraLogo } from '../ui/DivmoraLogo';

interface NavbarProps {
  currentRoute?: 'home' | 'privacy' | 'terms' | 'security';
  onNavigateHome?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentRoute = 'home', onNavigateHome }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isSubPage = currentRoute !== 'home';

  useEffect(() => {
    document.documentElement.classList.remove('dark');

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (hash: string) => {
    if (isSubPage && onNavigateHome) {
      onNavigateHome();
      setTimeout(() => {
        if (hash) {
          const el = document.querySelector(hash);
          if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
          }
        }
      }, 50);
    }
  };

  return (
    <header
      className={`
        fixed top-0 inset-x-0 z-40 transition-all duration-200 px-4 sm:px-8
        ${isScrolled ? 'py-3 bg-white/90 backdrop-blur-md border-b border-slate-200/80 shadow-sm' : 'py-5 bg-transparent'}
      `}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Brand Logo */}
        <a
          href="#"
          onClick={(e) => {
            if (isSubPage) {
              e.preventDefault();
              if (onNavigateHome) onNavigateHome();
            }
          }}
          className="flex items-center gap-2.5 group select-none"
        >
          <DivmoraLogo size={32} />
          <span className="text-xl font-bold tracking-tight text-slate-900 font-sans">
            DIVMORA
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 text-sm font-medium text-slate-600">
          {isSubPage ? (
            <button
              onClick={onNavigateHome}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-blue-600 hover:text-blue-700 hover:bg-blue-50/80 transition-colors font-semibold cursor-pointer"
            >
              <ArrowLeft size={14} />
              <span>Back to Home</span>
            </button>
          ) : (
            <>
              <a
                href="#about"
                className="px-3.5 py-1.5 rounded-lg hover:text-slate-900 hover:bg-slate-100/80 transition-colors"
                onClick={() => handleNavClick('#about')}
              >
                About
              </a>

              <a
                href="#projects"
                className="px-3.5 py-1.5 rounded-lg hover:text-slate-900 hover:bg-slate-100/80 transition-colors"
                onClick={() => handleNavClick('#projects')}
              >
                Projects
              </a>

              <a
                href="#principles"
                className="px-3.5 py-1.5 rounded-lg hover:text-slate-900 hover:bg-slate-100/80 transition-colors"
                onClick={() => handleNavClick('#principles')}
              >
                Principles
              </a>

              <a
                href="#contact"
                className="px-3.5 py-1.5 rounded-lg hover:text-slate-900 hover:bg-slate-100/80 transition-colors"
                onClick={() => handleNavClick('#contact')}
              >
                Company & Contact
              </a>
            </>
          )}
        </nav>

        {/* Right Actions */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href={SITE_CONFIG.orgGithub}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white border border-slate-200 hover:border-slate-300 shadow-sm transition-all text-xs font-semibold text-slate-700 hover:text-slate-900 cursor-pointer"
          >
            <GithubIcon size={15} />
            <span>GitHub</span>
          </a>

          <GlowingButton
            variant="blue"
            size="sm"
            href="#contact"
            onClick={(e) => {
              if (isSubPage) {
                e.preventDefault();
                handleNavClick('#contact');
              }
            }}
          >
            Get in Touch
          </GlowingButton>
        </div>

        {/* Mobile Menu Trigger */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-xl border border-slate-200 bg-white text-slate-700 shadow-sm cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-3 bg-white border border-slate-200 rounded-2xl shadow-xl p-5 space-y-4">
          <div className="flex flex-col space-y-1 font-medium text-slate-700 text-sm">
            {isSubPage ? (
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  if (onNavigateHome) onNavigateHome();
                }}
                className="p-2 rounded-lg text-blue-600 hover:bg-blue-50 flex items-center gap-2 text-left font-semibold"
              >
                <ArrowLeft size={16} />
                <span>Back to Home</span>
              </button>
            ) : (
              <>
                <a
                  href="#about"
                  className="p-2 rounded-lg hover:bg-slate-50 flex items-center justify-between"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    handleNavClick('#about');
                  }}
                >
                  <span>About</span>
                </a>
                <a
                  href="#projects"
                  className="p-2 rounded-lg hover:bg-slate-50 flex items-center justify-between"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    handleNavClick('#projects');
                  }}
                >
                  <span>Projects</span>
                </a>
                <a
                  href="#principles"
                  className="p-2 rounded-lg hover:bg-slate-50 flex items-center justify-between"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    handleNavClick('#principles');
                  }}
                >
                  <span>Principles</span>
                </a>
                <a
                  href="#contact"
                  className="p-2 rounded-lg hover:bg-slate-50 flex items-center justify-between"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    handleNavClick('#contact');
                  }}
                >
                  <span>Company & Contact</span>
                </a>
              </>
            )}
          </div>

          <div className="pt-3 flex flex-col gap-2 border-t border-slate-100">
            <GlowingButton
              variant="blue"
              size="md"
              href="#projects"
              className="w-full justify-center"
              onClick={() => {
                setMobileMenuOpen(false);
                handleNavClick('#projects');
              }}
            >
              Explore Projects
            </GlowingButton>
            <a
              href={SITE_CONFIG.orgGithub}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full justify-center flex items-center gap-2 p-2.5 rounded-xl border border-slate-200 bg-slate-50 text-xs font-semibold text-slate-700 text-center"
              onClick={() => setMobileMenuOpen(false)}
            >
              <GithubIcon size={16} />
              <span>GitHub Repositories</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
