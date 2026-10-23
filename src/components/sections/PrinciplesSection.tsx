import { ShieldCheck, Zap, Server } from 'lucide-react';

export const PrinciplesSection: React.FC = () => {
  const principles = [
    {
      icon: <ShieldCheck size={22} className="text-blue-600" />,
      title: 'Open Source by Default',
      description:
        'Every tool we develop is released under open and fair-code licenses (Apache 2.0 and BSL 1.1). We believe software infrastructure is best when it is transparent, inspectable, and freely self-hostable without artificial feature gating.',
    },
    {
      icon: <Zap size={22} className="text-emerald-600" />,
      title: 'Minimal Overhead, Maximum Speed',
      description:
        'We favor compiled Go binaries, zero-allocation loops, and embedded engines like DuckDB. By eliminating unnecessary runtime bloat, our tools start instantly and run efficiently on any machine or CI pipeline.',
    },
    {
      icon: <Server size={22} className="text-indigo-600" />,
      title: 'Production-Grade Reliability',
      description:
        'Engineered for real engineering teams handling production traffic, multi-region cloud estates, and strict IAM governance boundaries—with deterministic tests and resilient error handling.',
    },
  ];

  return (
    <section id="principles" className="py-20 bg-white border-y border-slate-200/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-semibold font-mono tracking-wide">
            ENGINEERING ETHOS
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 font-sans">
            Our Engineering Principles
          </h2>

          <p className="text-slate-600 text-base font-normal">
            The core design values guiding every software system we build at Divmora.
          </p>
        </div>

        {/* 3 Principles Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {principles.map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 shadow-sm space-y-4"
            >
              <div className="p-3 w-fit rounded-xl bg-white border border-slate-200 shadow-sm">
                {item.icon}
              </div>

              <h3 className="text-lg font-bold text-slate-900 font-sans">
                {item.title}
              </h3>

              <p className="text-sm text-slate-600 leading-relaxed font-normal">
                {item.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
