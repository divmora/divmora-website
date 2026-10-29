import React, { useEffect } from 'react';
import { ArrowLeft, Scale, ShieldAlert, Cpu, Building2, MapPin, Mail, ExternalLink } from 'lucide-react';
import { SITE_CONFIG } from '../../data/siteConfig';

interface TermsOfServiceProps {
  onBackToHome?: () => void;
}

export const TermsOfService: React.FC<TermsOfServiceProps> = ({ onBackToHome }) => {
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
          LEGAL & COMPLIANCE
        </div>

        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 font-sans">
          Terms of Service
        </h1>

        <div className="flex flex-wrap items-center gap-4 text-xs font-medium text-slate-500 font-mono">
          <span>Effective Date: October 2026</span>
          <span>•</span>
          <span>Last Updated: October 29, 2026</span>
          <span>•</span>
          <span>Version 1.0</span>
        </div>

        <p className="text-base text-slate-600 leading-relaxed font-normal pt-2">
          These Terms of Service (&quot;Terms&quot;) constitute a legally binding agreement between you and{' '}
          <strong className="text-slate-900">Divmora Technologies</strong> (&quot;Divmora&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;), governing your access to and use of{' '}
          <a href="https://divmora.com" className="text-blue-600 hover:underline">divmora.com</a>, including our open-source tools, documentation, binaries, and related developer platforms.
        </p>
      </header>

      {/* Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-8">
        <div className="p-5 rounded-xl bg-white border border-slate-200 shadow-sm space-y-2">
          <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center">
            <Scale size={18} />
          </div>
          <h2 className="text-sm font-bold text-slate-900 font-sans">Open-Source Licensing</h2>
          <p className="text-xs text-slate-500 leading-relaxed">
            All code repositories are governed by explicit licenses (Apache 2.0 or BSL 1.1) in their respective repositories.
          </p>
        </div>

        <div className="p-5 rounded-xl bg-white border border-slate-200 shadow-sm space-y-2">
          <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center">
            <Cpu size={18} />
          </div>
          <h2 className="text-sm font-bold text-slate-900 font-sans">Self-Hosted Execution</h2>
          <p className="text-xs text-slate-500 leading-relaxed">
            Our binaries and libraries execute inside your own compute infrastructure and AWS environments.
          </p>
        </div>

        <div className="p-5 rounded-xl bg-white border border-slate-200 shadow-sm space-y-2">
          <div className="w-8 h-8 rounded-lg bg-purple-50 text-purple-600 flex items-center justify-center">
            <ShieldAlert size={18} />
          </div>
          <h2 className="text-sm font-bold text-slate-900 font-sans">Standard &quot;As-Is&quot; Disclaimers</h2>
          <p className="text-xs text-slate-500 leading-relaxed">
            Software is provided as-is without warranty of any kind, in full compliance with open-source legal standards.
          </p>
        </div>
      </div>

      {/* Main Legal Clauses */}
      <div className="space-y-10 text-slate-700 text-sm leading-relaxed">

        {/* Section 1 */}
        <section className="space-y-3">
          <h2 className="text-lg font-bold text-slate-900 font-sans flex items-center gap-2">
            <span className="font-mono text-xs text-blue-600">01.</span>
            <span>Acceptance of Terms</span>
          </h2>
          <p>
            By accessing or browsing this website (<a href="https://divmora.com" className="text-blue-600 hover:underline">divmora.com</a>), or by downloading, compiling, or executing software distributed by Divmora Technologies, you confirm that you have read, understood, and agreed to be bound by these Terms and our <a href="#/privacy" className="text-blue-600 hover:underline">Privacy Policy</a>.
          </p>
          <p>
            If you are agreeing to these Terms on behalf of a company, corporate fleet, or other legal entity, you represent and warrant that you possess the requisite authority to bind that entity to these Terms.
          </p>
        </section>

        {/* Section 2 */}
        <section className="space-y-3">
          <h2 className="text-lg font-bold text-slate-900 font-sans flex items-center gap-2">
            <span className="font-mono text-xs text-blue-600">02.</span>
            <span>Operating Entity & Corporate Information</span>
          </h2>
          <p>
            This website and the Divmora developer software ecosystem are operated and published by:
          </p>
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2 text-xs">
            <div className="flex items-center gap-2 font-semibold text-slate-800">
              <Building2 size={15} className="text-blue-600" />
              <span>Entity: Divmora Technologies (Sole Proprietorship)</span>
            </div>
            <div className="text-slate-600 font-mono pl-6">
              Registration / GSTIN: {SITE_CONFIG.gstNumber}
            </div>
            <div className="flex items-start gap-2 text-slate-600">
              <MapPin size={15} className="text-blue-600 shrink-0 mt-0.5" />
              <span>{SITE_CONFIG.fullAddress}</span>
            </div>
            <div className="flex items-center gap-2 text-slate-600">
              <Mail size={15} className="text-blue-600 shrink-0" />
              <span>Official Inquiries: {SITE_CONFIG.contactEmail}</span>
            </div>
          </div>
        </section>

        {/* Section 3 */}
        <section className="space-y-3">
          <h2 className="text-lg font-bold text-slate-900 font-sans flex items-center gap-2">
            <span className="font-mono text-xs text-blue-600">03.</span>
            <span>Open-Source Software & Licensing Model</span>
          </h2>
          <p>
            Divmora Technologies develops software infrastructure, developer tools, autonomous agent runtimes, and policy governance systems. Source code repositories hosted on our official organization (<a href={SITE_CONFIG.orgGithub} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline inline-flex items-center gap-1">github.com/divmora <ExternalLink size={12} /></a>) are distributed under defined licenses:
          </p>
          <ul className="list-disc pl-5 space-y-2 text-slate-600">
            <li>
              <strong className="text-slate-900">Apache License 2.0</strong>: Standard permissive licensing governing tools such as OwlFlow, Jules AI Agents, Code Reviewer AI Agent, and supporting SDKs.
            </li>
            <li>
              <strong className="text-slate-900">Business Source License 1.1 (BSL 1.1)</strong>: Applied to specialized enterprise governance engines such as GitLab Fleet Governor and OTel AWS Log Processor, granting full source visibility and free non-commercial and internal testing rights.
            </li>
          </ul>
          <p>
            Nothing in these website Terms restricts, limits, or supersedes any rights granted to you under the open-source license accompanying each respective codebase.
          </p>
        </section>

        {/* Section 4 */}
        <section className="space-y-3">
          <h2 className="text-lg font-bold text-slate-900 font-sans flex items-center gap-2">
            <span className="font-mono text-xs text-blue-600">04.</span>
            <span>Intellectual Property & Trademarks</span>
          </h2>
          <p>
            The names &quot;Divmora&quot;, &quot;Divmora Technologies&quot;, the Divmora visual brand mark, logo graphics, web layout, and website copy are intellectual property owned by Divmora Technologies. You may not use Divmora trademarks, brand assets, or logos in a manner that falsely implies sponsorship, endorsement, or affiliation with your product or commercial venture without explicit prior written consent.
          </p>
        </section>

        {/* Section 5 */}
        <section className="space-y-3">
          <h2 className="text-lg font-bold text-slate-900 font-sans flex items-center gap-2">
            <span className="font-mono text-xs text-blue-600">05.</span>
            <span>Acceptable Use Policy</span>
          </h2>
          <p>
            When utilizing our website or developer endpoints, you agree not to:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
            <div className="p-3 rounded-lg border border-slate-200 bg-white text-xs space-y-1">
              <span className="font-bold text-slate-900 block">System Disruption</span>
              <span className="text-slate-500">Engage in denial-of-service (DoS/DDoS) attacks, brute-force requests, or packet floods against our web endpoints.</span>
            </div>
            <div className="p-3 rounded-lg border border-slate-200 bg-white text-xs space-y-1">
              <span className="font-bold text-slate-900 block">Impersonation</span>
              <span className="text-slate-500">Impersonate Divmora Technologies, its founders, engineers, or maintainers in public communications.</span>
            </div>
            <div className="p-3 rounded-lg border border-slate-200 bg-white text-xs space-y-1">
              <span className="font-bold text-slate-900 block">Out-of-Scope Penetration</span>
              <span className="text-slate-500">Conduct destructive security testing outside the boundaries established in our Security &amp; Vulnerability Disclosure Policy.</span>
            </div>
            <div className="p-3 rounded-lg border border-slate-200 bg-white text-xs space-y-1">
              <span className="font-bold text-slate-900 block">Unlawful Activities</span>
              <span className="text-slate-500">Utilize our software or documentation for malicious code distribution, ransomware, or state-sanctioned espionage.</span>
            </div>
          </div>
        </section>

        {/* Section 6 */}
        <section className="space-y-3">
          <h2 className="text-lg font-bold text-slate-900 font-sans flex items-center gap-2">
            <span className="font-mono text-xs text-blue-600">06.</span>
            <span>Disclaimer of Warranties</span>
          </h2>
          <div className="p-4 rounded-xl bg-amber-50/70 border border-amber-200 text-amber-950 text-xs leading-relaxed space-y-2">
            <p className="font-mono uppercase font-bold">Disclaimer Notice</p>
            <p>
              THIS WEBSITE, DOCUMENTATION, ARCHITECTURAL GUIDELINES, AND OPEN-SOURCE REPOSITORIES ARE PROVIDED ON AN &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; BASIS WITHOUT WARRANTIES OF ANY KIND, WHETHER EXPRESS, IMPLIED, STATUTORY, OR OTHERWISE, INCLUDING WITHOUT LIMITATION WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE, AND NON-INFRINGEMENT.
            </p>
            <p>
              DIVMORA TECHNOLOGIES DOES NOT WARRANT THAT THE SOFTWARE WILL BE COMPLETELY ERROR-FREE, UNINTERRUPTED, OR FREE OF HARMFUL COMPONENTS. YOU ASSUME ALL RESPONSIBILITY AND RISK FOR TESTING, VALIDATING, AND INTEGRATING ANY CODE OR CLI UTILITY INTO YOUR PRODUCTION CLOUD INFRASTRUCTURE.
            </p>
          </div>
        </section>

        {/* Section 7 */}
        <section className="space-y-3">
          <h2 className="text-lg font-bold text-slate-900 font-sans flex items-center gap-2">
            <span className="font-mono text-xs text-blue-600">07.</span>
            <span>Limitation of Liability</span>
          </h2>
          <p>
            To the maximum extent permitted by applicable law, in no event shall Divmora Technologies, its proprietor, contributors, or contractors be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation damages for loss of profits, data corruption, cloud infrastructure downtime, or business interruption, arising out of or related to your use of our website or software.
          </p>
        </section>

        {/* Section 8 */}
        <section className="space-y-3">
          <h2 className="text-lg font-bold text-slate-900 font-sans flex items-center gap-2">
            <span className="font-mono text-xs text-blue-600">08.</span>
            <span>Governing Law & Dispute Resolution</span>
          </h2>
          <p>
            These Terms and any dispute or claim arising out of or in connection with them shall be governed by and construed in accordance with the laws of the Republic of India.
          </p>
          <p>
            Any legal dispute, suit, or proceeding arising under or related to these Terms shall be subject to the exclusive jurisdiction of the competent civil courts located in Hyderabad, Telangana, India.
          </p>
        </section>

        {/* Section 9 */}
        <section className="space-y-3">
          <h2 className="text-lg font-bold text-slate-900 font-sans flex items-center gap-2">
            <span className="font-mono text-xs text-blue-600">09.</span>
            <span>Modifications to Terms</span>
          </h2>
          <p>
            We reserve the right to revise these Terms periodically to reflect evolving regulatory frameworks, new open-source initiatives, or corporate updates. We will notify users by updating the &quot;Last Updated&quot; timestamp at the top of this document. Continued use of our site following such modifications constitutes binding acceptance.
          </p>
        </section>

        {/* Section 10 */}
        <section className="space-y-3">
          <h2 className="text-lg font-bold text-slate-900 font-sans flex items-center gap-2">
            <span className="font-mono text-xs text-blue-600">10.</span>
            <span>Contact Information</span>
          </h2>
          <p>
            If you have questions regarding these Terms of Service or open-source licensing compliance, please contact our team at:
          </p>
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1 text-xs">
            <div className="font-bold text-slate-900">Legal &amp; Compliance Team</div>
            <div className="text-slate-600">Divmora Technologies (Sole Proprietorship)</div>
            <div className="text-slate-600">Email: <a href={`mailto:${SITE_CONFIG.contactEmail}`} className="text-blue-600 hover:underline">{SITE_CONFIG.contactEmail}</a></div>
            <div className="text-slate-500 font-mono pt-1">Hyderabad, Telangana, India</div>
          </div>
        </section>

      </div>
    </article>
  );
};
