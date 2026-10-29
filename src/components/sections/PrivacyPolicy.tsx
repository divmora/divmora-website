import React, { useEffect } from 'react';
import { ArrowLeft, Shield, Lock, EyeOff, Server, Mail, Building2, MapPin, CheckCircle2 } from 'lucide-react';
import { SITE_CONFIG } from '../../data/siteConfig';

interface PrivacyPolicyProps {
  onBackToHome?: () => void;
}

export const PrivacyPolicy: React.FC<PrivacyPolicyProps> = ({ onBackToHome }) => {
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
          Privacy Policy
        </h1>

        <div className="flex flex-wrap items-center gap-4 text-xs font-medium text-slate-500 font-mono">
          <span>Effective Date: October 2026</span>
          <span>•</span>
          <span>Last Updated: October 29, 2026</span>
          <span>•</span>
          <span>Version 1.0</span>
        </div>

        <p className="text-base text-slate-600 leading-relaxed font-normal pt-2">
          At <strong className="text-slate-900">Divmora Technologies</strong>, we are committed to transparent, privacy-first software engineering. This Privacy Policy details how we handle information across our official website (<a href="https://divmora.com" className="text-blue-600 hover:underline">divmora.com</a>), developer repositories, and documentation.
        </p>
      </header>

      {/* Core Privacy Principles Callout Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-8">
        <div className="p-5 rounded-xl bg-white border border-slate-200 shadow-sm space-y-2">
          <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center">
            <EyeOff size={18} />
          </div>
          <h2 className="text-sm font-bold text-slate-900 font-sans">Zero Marketing Trackers</h2>
          <p className="text-xs text-slate-500 leading-relaxed">
            We do not use advertising trackers, third-party behavioral analytics, or data brokers.
          </p>
        </div>

        <div className="p-5 rounded-xl bg-white border border-slate-200 shadow-sm space-y-2">
          <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center">
            <Server size={18} />
          </div>
          <h2 className="text-sm font-bold text-slate-900 font-sans">Local Code Execution</h2>
          <p className="text-xs text-slate-500 leading-relaxed">
            Our open-source software and autonomous agent runtimes execute entirely inside your environment.
          </p>
        </div>

        <div className="p-5 rounded-xl bg-white border border-slate-200 shadow-sm space-y-2">
          <div className="w-8 h-8 rounded-lg bg-purple-50 text-purple-600 flex items-center justify-center">
            <Lock size={18} />
          </div>
          <h2 className="text-sm font-bold text-slate-900 font-sans">Minimal Collection</h2>
          <p className="text-xs text-slate-500 leading-relaxed">
            We only process communications voluntarily submitted to our team (e.g., email inquiries).
          </p>
        </div>
      </div>

      {/* Main Legal Clauses */}
      <div className="space-y-10 text-slate-700 text-sm leading-relaxed">

        {/* Section 1 */}
        <section className="space-y-3">
          <h2 className="text-lg font-bold text-slate-900 font-sans flex items-center gap-2">
            <span className="font-mono text-xs text-blue-600">01.</span>
            <span>Data Controller & Company Identity</span>
          </h2>
          <p>
            The legal entity responsible for the collection and processing of personal data under this Privacy Policy is:
          </p>
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2 text-xs">
            <div className="flex items-center gap-2 font-bold text-slate-900">
              <Building2 size={15} className="text-slate-700 shrink-0" />
              <span>{SITE_CONFIG.legalName} ({SITE_CONFIG.entityType})</span>
            </div>
            <div className="flex items-start gap-2 text-slate-600">
              <MapPin size={15} className="text-blue-600 shrink-0 mt-0.5" />
              <span>{SITE_CONFIG.fullAddress}</span>
            </div>
            <div className="flex items-center gap-2 text-slate-600">
              <Mail size={15} className="text-emerald-600 shrink-0" />
              <span>Contact Email: <a href={`mailto:${SITE_CONFIG.contactEmail}`} className="text-blue-600 hover:underline">{SITE_CONFIG.contactEmail}</a></span>
            </div>
            <div className="text-slate-500 font-mono text-[11px] pt-1 border-t border-slate-200">
              GSTIN / Tax ID: {SITE_CONFIG.gstNumber}
            </div>
          </div>
        </section>

        {/* Section 2 */}
        <section className="space-y-3">
          <h2 className="text-lg font-bold text-slate-900 font-sans flex items-center gap-2">
            <span className="font-mono text-xs text-blue-600">02.</span>
            <span>Information We Collect</span>
          </h2>
          <p>
            We collect only the minimum information necessary to provide our static web portal and respond to developer inquiries:
          </p>
          <ul className="space-y-2 list-disc pl-5 text-slate-600">
            <li>
              <strong className="text-slate-900">Voluntary Inquiries & Email Communications:</strong> When you send an email to <code className="px-1.5 py-0.5 rounded bg-slate-100 text-slate-800 text-xs font-mono">{SITE_CONFIG.contactEmail}</code>, we collect your email address, name (if provided), and any details contained in your message for the sole purpose of responding to your inquiry.
            </li>
            <li>
              <strong className="text-slate-900">Server Logs & Automated Technical Telemetry:</strong> When you visit our website, standard web server logs may be generated by our hosting infrastructure (GitHub Pages and Cloudflare). These logs typically record IP address, browser user agent, requested URL path, referring URL, timestamp, and HTTP response code. These technical logs are used exclusively for security monitoring, DDoS mitigation, and system stability.
            </li>
            <li>
              <strong className="text-slate-900">No Account Registration:</strong> We do not offer or require user account registration on this public portal.
            </li>
          </ul>
        </section>

        {/* Section 3 */}
        <section className="space-y-3">
          <h2 className="text-lg font-bold text-slate-900 font-sans flex items-center gap-2">
            <span className="font-mono text-xs text-blue-600">03.</span>
            <span>Architecture Isolation & Local Open-Source Execution</span>
          </h2>
          <div className="p-4 rounded-xl bg-blue-50/50 border border-blue-100 space-y-2">
            <div className="flex items-center gap-2 font-bold text-blue-950 text-sm">
              <Shield size={16} className="text-blue-600 shrink-0" />
              <span>Zero Transmission of Code or Customer Data</span>
            </div>
            <p className="text-xs text-blue-900/90 leading-relaxed">
              Divmora Technologies publishes open-source software libraries, agent runtimes (<em className="font-semibold">LocalHarness</em>, <em className="font-semibold">Jules AI Agent</em>), governance tools (<em className="font-semibold">GitLab Fleet Governor</em>), and stream processors (<em className="font-semibold">AWS DAS Processor</em>, <em className="font-semibold">OTel AWS Log Processor</em>).
            </p>
            <p className="text-xs text-blue-900/90 leading-relaxed">
              When you download and run these open-source tools, they execute locally on your developer machine, within your CI/CD pipelines, or inside your private cloud infrastructure (AWS/GCP/Azure). Divmora does not host a centralized telemetry backhaul, does not access your proprietary source code, and does not receive database activity streams or AST graphs processed by our tools.
            </p>
          </div>
        </section>

        {/* Section 4 */}
        <section className="space-y-3">
          <h2 className="text-lg font-bold text-slate-900 font-sans flex items-center gap-2">
            <span className="font-mono text-xs text-blue-600">04.</span>
            <span>Cookies and Local Storage</span>
          </h2>
          <p>
            Our website is engineered with static HTML, React, and Tailwind CSS:
          </p>
          <ul className="space-y-1.5 list-disc pl-5 text-slate-600">
            <li>We do <strong className="text-slate-900">not</strong> use marketing, profiling, or cross-site tracking cookies.</li>
            <li>We do <strong className="text-slate-900">not</strong> embed advertising SDKs or third-party behavioral scripts.</li>
            <li>We may use minimal client-side browser storage (such as <code className="px-1 py-0.5 rounded bg-slate-100 font-mono text-xs">localStorage</code>) strictly to preserve UI state preferences (such as collapsed filters or theme selection).</li>
          </ul>
        </section>

        {/* Section 5 */}
        <section className="space-y-3">
          <h2 className="text-lg font-bold text-slate-900 font-sans flex items-center gap-2">
            <span className="font-mono text-xs text-blue-600">05.</span>
            <span>How We Use Information</span>
          </h2>
          <p>
            Any information collected is strictly utilized for legitimate business purposes:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
            <div className="p-3 rounded-lg bg-slate-50 border border-slate-200/80 flex items-start gap-2">
              <CheckCircle2 size={14} className="text-emerald-600 shrink-0 mt-0.5" />
              <span>Responding to enterprise collaborations, questions, and developer support requests.</span>
            </div>
            <div className="p-3 rounded-lg bg-slate-50 border border-slate-200/80 flex items-start gap-2">
              <CheckCircle2 size={14} className="text-emerald-600 shrink-0 mt-0.5" />
              <span>Maintaining security, detecting malicious traffic, and preventing DDoS attacks on our infrastructure.</span>
            </div>
            <div className="p-3 rounded-lg bg-slate-50 border border-slate-200/80 flex items-start gap-2">
              <CheckCircle2 size={14} className="text-emerald-600 shrink-0 mt-0.5" />
              <span>Complying with applicable legal and statutory requirements in India.</span>
            </div>
            <div className="p-3 rounded-lg bg-slate-50 border border-slate-200/80 flex items-start gap-2">
              <CheckCircle2 size={14} className="text-emerald-600 shrink-0 mt-0.5" />
              <span>Reviewing public open-source issues and pull request contributions on GitHub.</span>
            </div>
          </div>
        </section>

        {/* Section 6 */}
        <section className="space-y-3">
          <h2 className="text-lg font-bold text-slate-900 font-sans flex items-center gap-2">
            <span className="font-mono text-xs text-blue-600">06.</span>
            <span>Third-Party Service Providers</span>
          </h2>
          <p>
            We do not sell, rent, monetize, or trade your personal information. We rely on standard infrastructure partners to deliver our static website:
          </p>
          <ul className="space-y-2 list-disc pl-5 text-slate-600 text-xs">
            <li>
              <strong className="text-slate-900">GitHub Pages (GitHub, Inc.):</strong> Provides static file hosting and edge deployment for <code className="px-1 py-0.5 rounded bg-slate-100 font-mono">divmora.com</code>. For more information, please review the <a href="https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">GitHub Privacy Statement</a>.
            </li>
            <li>
              <strong className="text-slate-900">Cloudflare (Cloudflare, Inc.):</strong> Provides DNS routing, TLS certificate termination, and DDoS mitigation. Review the <a href="https://www.cloudflare.com/privacypolicy/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Cloudflare Privacy Policy</a>.
            </li>
          </ul>
        </section>

        {/* Section 7 */}
        <section className="space-y-3">
          <h2 className="text-lg font-bold text-slate-900 font-sans flex items-center gap-2">
            <span className="font-mono text-xs text-blue-600">07.</span>
            <span>Data Security & Retention</span>
          </h2>
          <p>
            All communications and web traffic to <code className="px-1.5 py-0.5 rounded bg-slate-100 text-slate-800 text-xs font-mono">divmora.com</code> are encrypted in transit using Transport Layer Security (TLS 1.3 / HTTPS enforced).
          </p>
          <p>
            We retain email correspondence only as long as necessary to fulfill the purpose of your inquiry, maintain enterprise business relationships, or satisfy legal/accounting requirements under applicable Indian laws.
          </p>
        </section>

        {/* Section 8 */}
        <section className="space-y-3">
          <h2 className="text-lg font-bold text-slate-900 font-sans flex items-center gap-2">
            <span className="font-mono text-xs text-blue-600">08.</span>
            <span>Your Rights (GDPR, DPDP Act 2023, CCPA)</span>
          </h2>
          <p>
            Depending on your jurisdiction, you may have legal rights regarding your personal information:
          </p>
          <ul className="space-y-1.5 list-disc pl-5 text-slate-600 text-xs">
            <li>The right to request access to any personal information we hold about you.</li>
            <li>The right to request rectification or correction of inaccurate personal data.</li>
            <li>The right to request erasure / deletion of your personal data.</li>
            <li>The right to withdraw consent at any time for direct email communications.</li>
          </ul>
          <p className="text-xs pt-1">
            To exercise any of these rights, please email us directly at <a href={`mailto:${SITE_CONFIG.contactEmail}`} className="text-blue-600 hover:underline">{SITE_CONFIG.contactEmail}</a>. We respond to all verified requests within statutory timeframes.
          </p>
        </section>

        {/* Section 9 */}
        <section className="space-y-3">
          <h2 className="text-lg font-bold text-slate-900 font-sans flex items-center gap-2">
            <span className="font-mono text-xs text-blue-600">09.</span>
            <span>Updates to this Policy</span>
          </h2>
          <p>
            We may periodically update this Privacy Policy to reflect modifications in our software offerings or legal compliance requirements. The updated version will be indicated by an updated &quot;Last Updated&quot; date at the top of this document. Continued use of our website signifies your acceptance of the updated terms.
          </p>
        </section>

        {/* Section 10 */}
        <section className="space-y-3 pt-4 border-t border-slate-200">
          <h2 className="text-lg font-bold text-slate-900 font-sans flex items-center gap-2">
            <span className="font-mono text-xs text-blue-600">10.</span>
            <span>Contact & Grievance Redressal</span>
          </h2>
          <p>
            For any privacy-related questions, data access requests, or grievance inquiries, please contact our designated privacy team:
          </p>
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs space-y-1 font-mono text-slate-700">
            <p className="font-bold text-slate-900">Privacy & Compliance</p>
            <p>{SITE_CONFIG.legalName} ({SITE_CONFIG.entityType})</p>
            <p>Email: <a href={`mailto:${SITE_CONFIG.contactEmail}`} className="text-blue-600 hover:underline">{SITE_CONFIG.contactEmail}</a></p>
            <p>Location: Hyderabad, Telangana, India</p>
          </div>
        </section>

      </div>

      {/* Footer Return Button */}
      <div className="mt-12 pt-8 border-t border-slate-200 flex justify-between items-center">
        <a
          href="#"
          onClick={handleBack}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold shadow-sm transition-colors cursor-pointer"
        >
          <ArrowLeft size={14} />
          <span>Return to Homepage</span>
        </a>

        <span className="text-xs text-slate-400 font-mono">
          DIVMORA TECHNOLOGIES
        </span>
      </div>
    </article>
  );
};
