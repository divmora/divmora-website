import React from 'react';
import { ArrowUp, MapPin, Building2 } from 'lucide-react';
import { SITE_CONFIG } from '../../data/siteConfig';
import { PRODUCTS_DATA } from '../../data/products';
import { GithubIcon } from '../ui/GithubIcon';
import { DivmoraLogo } from '../ui/DivmoraLogo';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const aiProducts = PRODUCTS_DATA.filter((p) => p.category === 'ai-agents');
  const governanceAndCloud = PRODUCTS_DATA.filter((p) => p.category === 'governance' || p.category === 'cloud-infra');
  const devAndObsProducts = PRODUCTS_DATA.filter((p) => p.category === 'developer-tools' || p.category === 'observability');

  return (
    <footer className="bg-white border-t border-slate-200 pt-16 pb-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <DivmoraLogo size={36} />
              <div className="flex flex-col">
                <span className="text-base font-bold text-slate-900 tracking-tight font-sans leading-none">
                  DIVMORA TECHNOLOGIES
                </span>
                <span className="text-xs text-slate-500 mt-1">
                  Software Infrastructure & Developer Systems
                </span>
              </div>
            </div>

            <p className="text-sm text-slate-600 leading-relaxed font-normal max-w-sm">
              Engineering high-performance, open-source software—autonomous agent runtimes, policy engines, and telemetry lakehouses for modern teams.
            </p>

            {/* Corporate Address & GST */}
            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 space-y-1.5 text-xs text-slate-700">
              <div className="flex items-center gap-2 text-slate-800 font-semibold">
                <Building2 size={14} className="text-emerald-600 shrink-0" />
                <span>GSTIN: {SITE_CONFIG.gstNumber}</span>
              </div>
              <div className="flex items-start gap-2 text-[11px] text-slate-500 leading-snug">
                <MapPin size={14} className="text-blue-600 shrink-0 mt-0.5" />
                <span>{SITE_CONFIG.headquarters}</span>
              </div>
            </div>
          </div>

          {/* AI & Agents Column */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-900">
              AI & Agents
            </h4>
            <ul className="space-y-2 text-xs font-medium text-slate-600">
              {aiProducts.map((prod) => (
                <li key={prod.id}>
                  <a href={prod.githubUrl} target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors block truncate">
                    {prod.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Governance & Cloud Column */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-900">
              Cloud & Governance
            </h4>
            <ul className="space-y-2 text-xs font-medium text-slate-600">
              {governanceAndCloud.map((prod) => (
                <li key={prod.id}>
                  <a href={prod.githubUrl} target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors block truncate">
                    {prod.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Developer Tools & Observability Column */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-900">
              Telemetry & Tools
            </h4>
            <ul className="space-y-2 text-xs font-medium text-slate-600">
              {devAndObsProducts.map((prod) => (
                <li key={prod.id}>
                  <a href={prod.githubUrl} target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors block truncate">
                    {prod.name}
                  </a>
                </li>
              ))}
              <li className="pt-2 border-t border-slate-100">
                <a
                  href={SITE_CONFIG.orgGithub}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-600 transition-colors flex items-center gap-1.5 text-blue-600 font-semibold"
                >
                  <GithubIcon size={13} />
                  <span>Explore All Repositories on GitHub</span>
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-medium text-slate-500">
          <div>
            © {SITE_CONFIG.currentYear} Divmora Technologies. All rights reserved.
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-slate-600 hover:text-slate-900 transition-colors cursor-pointer font-semibold"
          >
            <span>Back to top</span>
            <ArrowUp size={13} />
          </button>
        </div>

      </div>
    </footer>
  );
};
