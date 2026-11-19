import projectsJson from './projects.json';

export interface Product {
  id: string;
  name: string;
  repoName: string;
  tagline: string;
  description: string;
  category: 'ai-agents' | 'governance' | 'cloud-infra' | 'observability' | 'developer-tools';
  categoryLabel: string;
  language: string;
  license: string;
  githubUrl: string;
  stars: number;
  forks: number;
  features: string[];
  badge?: string;
  status: 'active' | 'stable' | 'beta' | 'core';
  metrics: { label: string; value: string }[];
  cliCommand: string;
  architectureDetails: string;
  liveUrl?: string;
  /** Paid setup or support is offered for this open-source project. */
  commercialSupport?: boolean;
  /** A related product to point readers to, e.g. the paid console for the free bot. */
  related?: { id: string; note: string };
}

export const PRODUCTS_DATA: Product[] = projectsJson as Product[];

/** How a project is licensed, in terms of what a customer pays for. */
export type LicenseModel = 'open-source' | 'free-core' | 'commercial';

export interface LicenseModelInfo {
  id: LicenseModel;
  label: string;
  /** Fits on a card pill. */
  shortLabel: string;
  licenseName: string;
  summary: string;
}

export const LICENSE_MODELS: LicenseModelInfo[] = [
  {
    id: 'open-source',
    label: 'Open source',
    shortLabel: 'Open source',
    licenseName: 'Apache 2.0',
    summary: 'Free to use, modify and run anywhere, including production and commercial use. No licence or payment needed.',
  },
  {
    id: 'free-core',
    label: 'Free core + paid features',
    shortLabel: 'Free core + paid',
    licenseName: 'Elastic License 2.0',
    summary: 'The core is free in every environment, production included. Paid features need a Divmora licence key in every environment.',
  },
  {
    id: 'commercial',
    label: 'Commercial licence for production',
    shortLabel: 'Commercial licence',
    licenseName: 'BSL 1.1',
    summary: 'Free for development, testing, CI and evaluation. Production use needs a commercial licence. Each release becomes Apache 2.0 after three years.',
  },
];

export const LICENSING_POLICY_URL = 'https://github.com/divmora/.github/blob/main/LICENSING.md';
export const LICENSING_EMAIL = 'licensing@divmora.com';

export const getLicenseModel = (product: Product): LicenseModel => {
  switch (product.license) {
    case 'Elastic-2.0':
      return 'free-core';
    case 'BSL-1.1':
      return 'commercial';
    default:
      return 'open-source';
  }
};

export const getLicenseModelInfo = (product: Product): LicenseModelInfo =>
  LICENSE_MODELS.find((m) => m.id === getLicenseModel(product)) ?? LICENSE_MODELS[0];

/** One line telling a reader what is free and what is paid for this project. */
export const getLicenseNote = (product: Product): string => {
  switch (getLicenseModel(product)) {
    case 'free-core':
      return 'Free core in every environment; paid features need a licence key.';
    case 'commercial':
      return 'Free for non-production use; production needs a commercial licence.';
    default:
      if (product.commercialSupport) return 'Free to use anywhere. Paid setup and support available.';
      return 'Free to use anywhere, including production.';
  }
};

export const PRODUCT_CATEGORIES = [
  { id: 'all', label: 'All Technologies' },
  { id: 'ai-agents', label: 'AI & Agents' },
  { id: 'developer-tools', label: 'Workflow & Tools' },
  { id: 'governance', label: 'Governance & Policy' },
  { id: 'cloud-infra', label: 'Cloud & Security' },
  { id: 'observability', label: 'Observability & Telemetry' },
] as const;

export const TOTAL_PRODUCTS_COUNT = PRODUCTS_DATA.length;

export const getProductsByCategory = (categoryId: string) => {
  if (categoryId === 'all') return PRODUCTS_DATA;
  return PRODUCTS_DATA.filter((p) => p.category === categoryId);
};
