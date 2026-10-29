import React, { useState } from 'react';
import { Mail, Copy, Check, ExternalLink, MapPin, Building2, ChevronDown, ChevronUp } from 'lucide-react';
import { SITE_CONFIG } from '../../data/siteConfig';
import { GithubIcon } from '../ui/GithubIcon';

export const ContactAndCompany: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const faqs = [
    {
      q: 'What is Divmora Technologies?',
      a: 'Divmora Technologies is a technology company building modern developer platforms, autonomous AI agent runtimes, and cloud systems. We engineer lightweight, high-performance open-source software built primarily in Go, TypeScript, and DuckDB.'
    },
    {
      q: 'Can Divmora software platforms be self-hosted?',
      a: 'Yes, 100%. All Divmora software is engineered to run as standalone compiled binaries, lightweight Docker containers, or directly inside your cloud VPC or on-premise infrastructure without external SaaS dependencies.'
    },
    {
      q: 'What open-source licenses are used?',
      a: 'All our software repositories are released under either the Apache License 2.0 or the Business Source License (BSL 1.1). You are free to inspect, run, modify, and build on our platforms according to their respective repository licenses.'
    },
    {
      q: 'How do we inquire about enterprise collaboration or custom toolchains?',
      a: 'You can email us directly at hello@divmora.com. Our engineering team typically responds within one business day.'
    }
  ];

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(SITE_CONFIG.contactEmail);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section id="contact" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-semibold font-mono tracking-wide">
            CONTACT & COMPANY
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 font-sans">
            Get in Touch
          </h2>

          <p className="text-slate-600 text-base font-normal">
            Whether you&apos;re looking to collaborate, self-host our developer platforms, or contribute to our repositories, we&apos;re here to help.
          </p>
        </div>

        {/* 3-Card Direct Contact Information */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Card 1: Direct Email */}
          <div className="p-7 rounded-2xl bg-white border border-slate-200/90 shadow-sm flex flex-col justify-between hover:border-slate-300 transition-colors">
            <div className="space-y-4">
              <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600">
                <Mail size={20} />
              </div>
              <div className="space-y-1.5">
                <h3 className="text-lg font-bold text-slate-900 font-sans">
                  Direct Inquiries
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  For enterprise questions, custom toolchains, or platform collaborations.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100 space-y-2">
                <div className="text-[11px] font-mono font-semibold text-slate-400 uppercase">
                  Primary Email
                </div>
                <div className="flex items-center justify-between font-mono text-sm font-semibold text-slate-900">
                  <span>{SITE_CONFIG.contactEmail}</span>
                  <button
                    onClick={handleCopyEmail}
                    className="p-1.5 rounded-md hover:bg-slate-200/70 text-slate-500 hover:text-slate-900 transition-colors cursor-pointer"
                    title="Copy email to clipboard"
                    aria-label="Copy email to clipboard"
                  >
                    {copiedEmail ? <Check size={14} className="text-emerald-600 font-bold" /> : <Copy size={14} />}
                  </button>
                </div>
              </div>
            </div>

            <div className="pt-6 space-y-3">
              <a
                href={`mailto:${SITE_CONFIG.contactEmail}?subject=Inquiry%20regarding%20Divmora%20Platforms`}
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold shadow-sm transition-colors cursor-pointer"
              >
                <span>Compose Email</span>
                <ExternalLink size={13} />
              </a>
              <p className="text-[11px] text-center text-slate-400">
                Typical response within 1 business day
              </p>
            </div>
          </div>

          {/* Card 2: Open Source & Community */}
          <div className="p-7 rounded-2xl bg-white border border-slate-200/90 shadow-sm flex flex-col justify-between hover:border-slate-300 transition-colors">
            <div className="space-y-4">
              <div className="w-10 h-10 rounded-xl bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-800">
                <GithubIcon size={20} />
              </div>
              <div className="space-y-1.5">
                <h3 className="text-lg font-bold text-slate-900 font-sans">
                  Open Source & Issues
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Public codebases, technical discussions, feature proposals, and bug reports.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100 space-y-2">
                <div className="text-[11px] font-mono font-semibold text-slate-400 uppercase">
                  GitHub Organization
                </div>
                <div className="font-mono text-sm font-semibold text-slate-900">
                  github.com/divmora
                </div>
              </div>
            </div>

            <div className="pt-6 space-y-3">
              <a
                href={SITE_CONFIG.orgGithub}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold shadow-sm transition-colors cursor-pointer"
              >
                <span>Browse Repositories</span>
                <ExternalLink size={13} />
              </a>
              <p className="text-[11px] text-center text-slate-400 font-mono">
                Apache 2.0 & BSL 1.1 Licensed
              </p>
            </div>
          </div>

          {/* Card 3: Corporate Headquarters */}
          <div className="p-7 rounded-2xl bg-white border border-slate-200/90 shadow-sm flex flex-col justify-between hover:border-slate-300 transition-colors">
            <div className="space-y-4">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600">
                <Building2 size={20} />
              </div>
              <div className="space-y-1.5">
                <h3 className="text-lg font-bold text-slate-900 font-sans">
                  Registered Headquarters
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Physical office and official tax identification.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100 space-y-1.5">
                <div className="text-[11px] font-mono font-semibold text-slate-400 uppercase flex items-center gap-1.5">
                  <MapPin size={12} className="text-blue-600" />
                  <span>Office Location</span>
                </div>
                <p className="text-xs text-slate-700 font-medium leading-relaxed">
                  {SITE_CONFIG.headquarters}
                </p>
              </div>
            </div>

            <div className="pt-6 space-y-3">
              <div className="p-3 rounded-xl bg-emerald-50/60 border border-emerald-100 flex items-center justify-between">
                <span className="text-[11px] font-mono font-semibold text-emerald-800">GSTIN</span>
                <span className="text-xs font-mono font-bold text-emerald-900">{SITE_CONFIG.gstNumber}</span>
              </div>
              <p className="text-[11px] text-center text-slate-400">
                Divmora Technologies (Sole Proprietorship)
              </p>
            </div>
          </div>

        </div>

        {/* FAQ Section */}
        <div className="max-w-3xl mx-auto space-y-4 pt-4">
          <div className="text-center space-y-1 pb-4">
            <h3 className="text-xl font-bold text-slate-900">
              Frequently Asked Questions
            </h3>
            <p className="text-sm text-slate-500">
              Common questions about Divmora and our software.
            </p>
          </div>

          <div className="space-y-2.5">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="rounded-xl border border-slate-200 bg-white shadow-sm overflow-hidden"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full text-left p-4 flex items-center justify-between gap-4 font-semibold text-slate-800 hover:bg-slate-50 transition-colors cursor-pointer text-sm"
                  >
                    <span>{faq.q}</span>
                    {isOpen ? <ChevronUp size={16} className="text-blue-600 shrink-0" /> : <ChevronDown size={16} className="text-slate-400 shrink-0" />}
                  </button>

                  {isOpen && (
                    <div className="px-4 pb-4 pt-1 text-sm text-slate-600 leading-relaxed border-t border-slate-100">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
