import React from 'react';
import { ArrowRight, Code2, ShieldCheck, Terminal, Layers } from 'lucide-react';
import { SITE_CONFIG } from '../../data/siteConfig';
import { GlowingButton } from '../ui/GlowingButton';
import { GithubIcon } from '../ui/GithubIcon';
import { DivmoraLogo } from '../ui/DivmoraLogo';

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-36 pb-20 md:pt-44 md:pb-28 overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
        
        {/* Brand Badge */}
        <div className="inline-flex items-center gap-2">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50/80 border border-blue-100 text-xs font-semibold text-blue-700">
            <DivmoraLogo size={16} />
            <span>Divmora Technologies</span>
            <span className="w-1 h-1 rounded-full bg-blue-400" />
            <span className="text-slate-600 font-medium">Software Infrastructure</span>
          </div>
        </div>

        {/* Main Title */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-slate-900 font-sans leading-[1.12]">
          Software infrastructure built with{' '}
          <span className="text-blue-600">clarity and precision.</span>
        </h1>

        {/* Subtitle / Description */}
        <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto font-normal leading-relaxed">
          {SITE_CONFIG.heroSubtext}
        </p>

        {/* Action CTAs */}
        <div className="flex flex-wrap items-center justify-center gap-3.5 pt-3">
          <GlowingButton
            variant="blue"
            size="lg"
            href="#projects"
          >
            <span>Explore Projects</span>
            <ArrowRight size={16} />
          </GlowingButton>

          <GlowingButton
            variant="ghost"
            size="lg"
            href="#about"
          >
            What is Divmora?
          </GlowingButton>

          <a
            href={SITE_CONFIG.orgGithub}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-xl bg-white border border-slate-200 hover:border-slate-300 shadow-sm hover:shadow transition-all text-sm font-semibold text-slate-700 inline-flex items-center gap-2 cursor-pointer"
          >
            <GithubIcon size={16} />
            <span>GitHub Organization</span>
          </a>
        </div>

        {/* Feature Highlights Grid */}
        <div className="pt-12 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto text-left">
          <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-sm space-y-1">
            <div className="text-xs font-mono font-semibold text-blue-600 flex items-center gap-1.5">
              <Layers size={14} />
              <span>FLEET</span>
            </div>
            <div className="text-sm font-bold text-slate-900">Developer Fleet</div>
            <p className="text-xs text-slate-500">Autonomous agents & cloud tools</p>
          </div>

          <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-sm space-y-1">
            <div className="text-xs font-mono font-semibold text-emerald-600 flex items-center gap-1.5">
              <Code2 size={14} />
              <span>STACK</span>
            </div>
            <div className="text-sm font-bold text-slate-900">Go & TypeScript</div>
            <p className="text-xs text-slate-500">Compiled single-binary speed</p>
          </div>

          <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-sm space-y-1">
            <div className="text-xs font-mono font-semibold text-indigo-600 flex items-center gap-1.5">
              <ShieldCheck size={14} />
              <span>LICENSE</span>
            </div>
            <div className="text-sm font-bold text-slate-900">Apache 2.0 & BSL</div>
            <p className="text-xs text-slate-500">Open source & fair-code</p>
          </div>

          <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-sm space-y-1">
            <div className="text-xs font-mono font-semibold text-sky-600 flex items-center gap-1.5">
              <Terminal size={14} />
              <span>DEPLOYMENT</span>
            </div>
            <div className="text-sm font-bold text-slate-900">Zero Lock-in</div>
            <p className="text-xs text-slate-500">Standalone binaries & containers</p>
          </div>
        </div>

      </div>
    </section>
  );
};
