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
}

export const PRODUCTS_DATA: Product[] = projectsJson as Product[];

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
