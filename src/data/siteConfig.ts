export interface NavItem {
  label: string;
  href: string;
}

export const SITE_CONFIG = {
  name: 'Divmora Technologies',
  shortName: 'Divmora',
  legalName: 'Divmora Technologies',
  entityType: 'Sole Proprietorship',
  gstNumber: '36CDGPA9776E1ZD',
  headquarters: 'WeWork Rajapushpa Summit, Financial District, Nanakramguda Rd, Hyderabad, Telangana 500032',
  fullAddress: 'WeWork Rajapushpa Summit, SY. 130P & 115/1P, Nanakramguda Rd, Ranga Reddy Dist., Financial District, Manikonda Jagir, Telangana 500032',
  tagline: 'Software Infrastructure & Developer Systems',
  heroHeadline: 'Software infrastructure built with precision.',
  heroSubtext: 'Divmora Technologies builds modern open-source software—from autonomous agent runtimes and code review tools to policy governance engines and telemetry lakehouses. Engineered primarily in Go and TypeScript for engineering teams who value speed and reliability.',
  orgGithub: 'https://github.com/divmora',
  websiteRepo: 'https://github.com/divmora/divmora-website',
  contactEmail: 'hello@divmora.com',
  currentYear: new Date().getFullYear(),
  navItems: [
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Principles', href: '#principles' },
    { label: 'Company & Contact', href: '#contact' },
  ] as NavItem[],
  about: {
    title: 'What is Divmora?',
    subtitle: 'An engineering company dedicated to developer infrastructure, autonomous agent runtimes, and cloud systems.',
    overview: 'Divmora Technologies is a technology company founded to create focused, high-performance software for developers and cloud engineering teams. Modern software infrastructure often suffers from excessive complexity, bloated dependencies, and heavy vendor lock-in. Divmora builds focused, transparent software designed to perform one job exceptionally well with microsecond speed, extreme reliability, and minimal overhead.',
    pillars: [
      {
        id: 'agents',
        title: 'Autonomous AI Runtimes & Toolchains',
        description: 'Practical, high-velocity execution engines (like LocalHarness and Jules) that empower AI agents to navigate codebases via AST, execute tests in sandboxes, and submit deterministic pull requests safely.',
      },
      {
        id: 'governance',
        title: 'Cloud Policy & Threat Governance',
        description: 'Self-contained policy-as-code engines (GitLab Fleet Governor) and automated threat triage bots (AWS GuardDuty bot) that continuously enforce organization standards and eliminate cloud noise.',
      },
      {
        id: 'telemetry',
        title: 'Telemetry & Observability Lakehouses',
        description: 'Zero-overhead log parsers and embedded OLAP lakehouses (Periscope) that turn massive streams of cloud telemetry into instant queryable insights using DuckDB and Parquet.',
      },
    ],
    principles: [
      {
        title: 'Open Source by Default',
        description: 'Every tool we develop is released under open-source and fair-code licenses (Apache 2.0 and BSL 1.1). We believe the best infrastructure is transparent, inspectable, and accessible.',
      },
      {
        title: 'Single-Binary Simplicity',
        description: 'We favor compiled Go binaries and lightweight runtimes with zero external dependencies over bulky multi-tier architectures.',
      },
      {
        title: 'Production-Grade Reliability',
        description: 'Engineered for real engineering teams handling production traffic, multi-region clouds, and strict compliance boundaries with deterministic test gates.',
      },
    ],
  },
};
