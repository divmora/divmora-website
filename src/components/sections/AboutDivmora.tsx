import React from 'react';
import { Bot, ShieldCheck, Activity, CheckCircle2, ArrowRight } from 'lucide-react';

export const AboutDivmora: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white border-y border-slate-200/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-semibold font-mono tracking-wide">
            ABOUT DIVMORA
          </div>
          
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 font-sans">
            What is Divmora?
          </h2>

          <p className="text-lg text-slate-600 leading-relaxed font-normal">
            Divmora Technologies is a technology company founded to build focused, high-performance software for developers and cloud engineering teams.
          </p>
        </div>

        {/* Narrative & Focus Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Main Story & Purpose */}
          <div className="lg:col-span-6 space-y-5 text-slate-600 text-base leading-relaxed">
            <p>
              Modern cloud and software infrastructure has become burdened with excessive complexity, heavy multi-tier dependencies, and opaque vendor lock-in. Engineering teams spend countless hours configuring complex runtimes just to run automated workflows or capture telemetry.
            </p>

            <p>
              At <strong className="text-slate-900 font-semibold">Divmora</strong>, our mission is straightforward: create practical, cleanly engineered software that does its job with microsecond speed, extreme reliability, and complete transparency.
            </p>

            <p>
              We build primarily using <span className="text-slate-900 font-medium">Go</span>, <span className="text-slate-900 font-medium">DuckDB</span>, and <span className="text-slate-900 font-medium">TypeScript</span>, delivering compiled single-binaries and lightweight containers that you can run locally, in CI/CD, or across multi-account enterprise clouds.
            </p>

            <div className="pt-2">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors"
              >
                <span>View all active software platforms</span>
                <ArrowRight size={15} />
              </a>
            </div>
          </div>

          {/* Core Focus Pillars */}
          <div className="lg:col-span-6 space-y-4">
            
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 shadow-sm space-y-2">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-xl bg-blue-100/70 text-blue-700">
                  <Bot size={20} />
                </div>
                <h3 className="text-base font-bold text-slate-900">
                  Autonomous Agent Runtimes
                </h3>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed pl-11">
                Engines like <em>LocalHarness</em> and <em>Jules</em> that let AI agents inspect codebases through AST parsing, execute test loops in sandboxes, and produce deterministic code refactors without hallucination.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 shadow-sm space-y-2">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-xl bg-indigo-100/70 text-indigo-700">
                  <ShieldCheck size={20} />
                </div>
                <h3 className="text-base font-bold text-slate-900">
                  Cloud Governance & Security Automation
                </h3>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed pl-11">
                Policy-as-code engines like <em>GitLab Fleet Governor</em> and <em>AWS GuardDuty bot</em> that automatically scan multi-account organizations, reconcile drift, and triage threats with zero ongoing maintenance.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 shadow-sm space-y-2">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-xl bg-sky-100/70 text-sky-700">
                  <Activity size={20} />
                </div>
                <h3 className="text-base font-bold text-slate-900">
                  Telemetry & Observability Lakehouses
                </h3>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed pl-11">
                Zero-overhead stream parsers and embedded OLAP lakehouses like <em>Periscope</em> that store telemetry directly as Parquet in object storage, queryable in real-time with embedded DuckDB.
              </p>
            </div>

          </div>

        </div>

        {/* Quick Facts Strip */}
        <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-sm text-slate-700">
          <div className="flex items-center gap-2">
            <CheckCircle2 size={16} className="text-emerald-600 shrink-0" />
            <span><strong className="font-semibold text-slate-900">Licensing:</strong> Apache 2.0 & BSL 1.1 fair-code</span>
          </div>

          <div className="flex items-center gap-2">
            <CheckCircle2 size={16} className="text-emerald-600 shrink-0" />
            <span><strong className="font-semibold text-slate-900">No telemetry lock-in:</strong> Self-hosted and fully private</span>
          </div>

          <div className="flex items-center gap-2">
            <CheckCircle2 size={16} className="text-emerald-600 shrink-0" />
            <span><strong className="font-semibold text-slate-900">Registered entity:</strong> Divmora Technologies, Hyderabad, India</span>
          </div>
        </div>

      </div>
    </section>
  );
};
