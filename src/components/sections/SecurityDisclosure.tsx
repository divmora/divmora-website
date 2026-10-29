import React, { useEffect } from 'react';
import { ArrowLeft, Shield, ShieldCheck, Lock, Clock, Mail, ExternalLink } from 'lucide-react';
import { SITE_CONFIG } from '../../data/siteConfig';

interface SecurityDisclosureProps {
  onBackToHome?: () => void;
}

export const SecurityDisclosure: React.FC<SecurityDisclosureProps> = ({ onBackToHome }) => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const handleBack = (e: React.MouseEvent) => {
    e.preventDefault();
    if (onBackToHome) {
      onBackToHome();
    } else {
      window.location.hash = '';
    }
  };

  return (
    <article className="pt-28 pb-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Breadcrumb & Return Navigation */}
      <div className="mb-8">
        <a
          href="#"
          onClick={handleBack}
          className="inline-flex items-center gap-2 text-xs font-mono font-semibold text-blue-600 hover:text-blue-700 transition-colors group cursor-pointer"
        >
          <ArrowLeft size={14} className="group-hover:-translate-x-0.5 transition-transform" />
          <span>Back to Home</span>
        </a>
      </div>

      {/* Header Banner */}
      <header className="space-y-4 pb-8 border-b border-slate-200">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-semibold font-mono tracking-wide">
          SECURITY & TRUST
        </div>

        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 font-sans">
          Vulnerability Disclosure & Security Policy
        </h1>

        <div className="flex flex-wrap items-center gap-4 text-xs font-medium text-slate-500 font-mono">
          <span>Effective Date: October 2026</span>
          <span>•</span>
          <span>Last Updated: October 29, 2026</span>
          <span>•</span>
          <span>Version 1.0</span>
        </div>

        <p className="text-base text-slate-600 leading-relaxed font-normal pt-2">
          At <strong className="text-slate-900">Divmora Technologies</strong>, security is an architectural requirement. Because our software governs enterprise cloud fleets, automates AST code refactoring, and parses high-throughput telemetry, we are committed to maintaining the highest security rigor and collaborating closely with security researchers worldwide.
        </p>
      </header>

      {/* Highlights / Commitments */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-8">
        <div className="p-5 rounded-xl bg-white border border-slate-200 shadow-sm space-y-2">
          <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center">
            <Clock size={18} />
          </div>
          <h2 className="text-sm font-bold text-slate-900 font-sans">48-Hour Response SLA</h2>
          <p className="text-xs text-slate-500 leading-relaxed">
            Our engineering team acknowledges all valid vulnerability submissions within 48 hours of receipt.
          </p>
        </div>

        <div className="p-5 rounded-xl bg-white border border-slate-200 shadow-sm space-y-2">
          <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center">
            <ShieldCheck size={18} />
          </div>
          <h2 className="text-sm font-bold text-slate-900 font-sans">Safe Harbor Policy</h2>
          <p className="text-xs text-slate-500 leading-relaxed">
            We offer legal safe harbor: no legal action against researchers acting in good faith according to these guidelines.
          </p>
        </div>

        <div className="p-5 rounded-xl bg-white border border-slate-200 shadow-sm space-y-2">
          <div className="w-8 h-8 rounded-lg bg-purple-50 text-purple-600 flex items-center justify-center">
            <Lock size={18} />
          </div>
          <h2 className="text-sm font-bold text-slate-900 font-sans">Private Triage</h2>
          <p className="text-xs text-slate-500 leading-relaxed">
            Encrypted reports and private GitHub security advisories ensure zero public exposure prior to patch availability.
          </p>
        </div>
      </div>

      {/* Main Body Clauses */}
      <div className="space-y-10 text-slate-700 text-sm leading-relaxed">

        {/* Section 1 */}
        <section className="space-y-3">
          <h2 className="text-lg font-bold text-slate-900 font-sans flex items-center gap-2">
            <span className="font-mono text-xs text-blue-600">01.</span>
            <span>Security Engineering Principles</span>
          </h2>
          <p>
            Divmora software infrastructure is designed around deterministic principles:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-slate-600">
            <li><strong className="text-slate-900">Zero Inbound Secrets</strong>: Our static site and web portals do not store credentials, private keys, or third-party tokens.</li>
            <li><strong className="text-slate-900">Local Execution Isolation</strong>: Autonomous agents and CLI runtimes execute locally inside isolated workspaces without transmitting proprietary code to external telemetry servers.</li>
            <li><strong className="text-slate-900">Memory Safety in Go</strong>: Core engines leverage compiled Go binaries, bounded worker pools, and memory-safe SIMD scanners to prevent memory corruption vulnerabilities.</li>
          </ul>
        </section>

        {/* Section 2 */}
        <section className="space-y-3">
          <h2 className="text-lg font-bold text-slate-900 font-sans flex items-center gap-2">
            <span className="font-mono text-xs text-blue-600">02.</span>
            <span>Scope of Disclosure</span>
          </h2>
          <p>
            This policy applies to all software, web endpoints, and repositories under the Divmora organization:
          </p>

          <div className="space-y-3 pt-2">
            <div className="p-4 rounded-xl bg-white border border-slate-200">
              <span className="text-xs font-mono font-bold text-emerald-700 uppercase block mb-1">
                ✓ In Scope
              </span>
              <ul className="list-disc pl-4 space-y-1 text-xs text-slate-600">
                <li>Divmora official website: <code className="bg-slate-100 px-1 py-0.5 rounded text-slate-800">https://divmora.com</code></li>
                <li>All open-source repositories hosted on <code className="bg-slate-100 px-1 py-0.5 rounded text-slate-800">github.com/divmora/*</code> (including GitLab Fleet Governor, OwlFlow, Jules, Code Reviewer AI Agent, OTel AWS Log Processor)</li>
                <li>Published Go binaries, Docker containers, and serverless AWS Lambda deployment artifacts</li>
              </ul>
            </div>

            <div className="p-4 rounded-xl bg-white border border-slate-200">
              <span className="text-xs font-mono font-bold text-red-600 uppercase block mb-1">
                ✗ Out of Scope
              </span>
              <ul className="list-disc pl-4 space-y-1 text-xs text-slate-600">
                <li>Volumetric denial of service (DoS / DDoS) targeting DNS, CDN, or GitHub infrastructure</li>
                <li>Social engineering, phishing, or physical attacks against Divmora staff or contractors</li>
                <li>Missing HTTP security headers without a demonstrable vulnerability or exploitable impact</li>
                <li>Known third-party vulnerabilities in upstream dependencies unless proven exploitable in our implementations</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Section 3 */}
        <section className="space-y-3">
          <h2 className="text-lg font-bold text-slate-900 font-sans flex items-center gap-2">
            <span className="font-mono text-xs text-blue-600">03.</span>
            <span>How to Report a Vulnerability</span>
          </h2>
          <p>
            If you believe you have discovered a potential security vulnerability, please submit your findings through either of the following private channels:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
              <div className="flex items-center gap-2 text-slate-900 font-bold text-xs">
                <Mail size={16} className="text-blue-600" />
                <span>Email Disclosure</span>
              </div>
              <p className="text-xs text-slate-600">
                Email full reproduction steps and proof-of-concept to:
              </p>
              <a
                href="mailto:security@divmora.com"
                className="text-xs font-mono font-bold text-blue-600 hover:underline block break-all"
              >
                security@divmora.com
              </a>
              <p className="text-[11px] text-slate-500">
                Include repo name, commit hash/version, and reproduction scripts.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
              <div className="flex items-center gap-2 text-slate-900 font-bold text-xs">
                <Shield size={16} className="text-purple-600" />
                <span>GitHub Security Advisory</span>
              </div>
              <p className="text-xs text-slate-600">
                Submit a Private Vulnerability Report directly via GitHub:
              </p>
              <a
                href="https://github.com/divmora/divmora-website/security/advisories/new"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-bold text-purple-600 hover:underline inline-flex items-center gap-1"
              >
                Open Private Advisory <ExternalLink size={12} />
              </a>
              <p className="text-[11px] text-slate-500">
                Provides automated CVE assignment and coordinated disclosure tools.
              </p>
            </div>
          </div>
        </section>

        {/* Section 4 */}
        <section className="space-y-3">
          <h2 className="text-lg font-bold text-slate-900 font-sans flex items-center gap-2">
            <span className="font-mono text-xs text-blue-600">04.</span>
            <span>Safe Harbor Commitment</span>
          </h2>
          <div className="p-4 rounded-xl bg-emerald-50/70 border border-emerald-200 text-emerald-950 text-xs leading-relaxed space-y-2">
            <p className="font-bold">Legal Protection for Ethical Researchers</p>
            <p>
              Divmora Technologies supports and encourages ethical security research. If you make a good-faith effort to comply with this policy during your investigation, we consider your research authorized and protected:
            </p>
            <ul className="list-disc pl-4 space-y-1">
              <li>We will not initiate legal action or complain to law enforcement regarding your testing activities.</li>
              <li>We will collaborate with you to understand and rapidly reproduce the issue.</li>
              <li>We will give you full public credit in release notes or our Security Hall of Fame (unless you request anonymity).</li>
            </ul>
          </div>
        </section>

        {/* Section 5 */}
        <section className="space-y-3">
          <h2 className="text-lg font-bold text-slate-900 font-sans flex items-center gap-2">
            <span className="font-mono text-xs text-blue-600">05.</span>
            <span>Response Timeline & Embargo Protocol</span>
          </h2>
          <p>
            We adhere to a standard 90-day coordinated disclosure policy:
          </p>
          <div className="space-y-2 text-xs">
            <div className="flex items-start gap-2 p-3 rounded-lg bg-white border border-slate-200">
              <span className="font-mono font-bold text-blue-600 shrink-0">T + 48 hrs</span>
              <span className="text-slate-600">Initial acknowledgment and assign triage engineer.</span>
            </div>
            <div className="flex items-start gap-2 p-3 rounded-lg bg-white border border-slate-200">
              <span className="font-mono font-bold text-blue-600 shrink-0">T + 5 days</span>
              <span className="text-slate-600">Severity assessment (CVSS 3.1) and preliminary patch architecture.</span>
            </div>
            <div className="flex items-start gap-2 p-3 rounded-lg bg-white border border-slate-200">
              <span className="font-mono font-bold text-blue-600 shrink-0">T + 30 days</span>
              <span className="text-slate-600">Patch release to default branch and tagged production artifact.</span>
            </div>
            <div className="flex items-start gap-2 p-3 rounded-lg bg-white border border-slate-200">
              <span className="font-mono font-bold text-blue-600 shrink-0">T + 90 days</span>
              <span className="text-slate-600">Public CVE publication and researcher credit disclosure (or earlier if jointly agreed).</span>
            </div>
          </div>
        </section>

        {/* Section 6 */}
        <section className="space-y-3">
          <h2 className="text-lg font-bold text-slate-900 font-sans flex items-center gap-2">
            <span className="font-mono text-xs text-blue-600">06.</span>
            <span>Contact Information</span>
          </h2>
          <p>
            For security disclosures, key exchanges, or urgent incident notifications, reach out directly to:
          </p>
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1 text-xs">
            <div className="font-bold text-slate-900">Security Response Team</div>
            <div className="text-slate-600">Divmora Technologies (Sole Proprietorship)</div>
            <div className="text-slate-600">Primary: <a href="mailto:security@divmora.com" className="text-blue-600 hover:underline">security@divmora.com</a></div>
            <div className="text-slate-600">General: <a href={`mailto:${SITE_CONFIG.contactEmail}`} className="text-blue-600 hover:underline">{SITE_CONFIG.contactEmail}</a></div>
            <div className="text-slate-500 font-mono pt-1">WeWork Rajapushpa Summit, Financial District, Hyderabad, India</div>
          </div>
        </section>

      </div>
    </article>
  );
};
