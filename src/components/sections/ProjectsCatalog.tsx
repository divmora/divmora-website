import React, { useState } from 'react';
import {
  Search,
  ExternalLink,
  Code2,
  Copy,
  Check,
  Terminal,
  Bot,
  ShieldCheck,
  Shield,
  Activity,
  Cpu,
  ArrowRight,
  Sparkles
} from 'lucide-react';
import { PRODUCTS_DATA, PRODUCT_CATEGORIES, Product } from '../../data/products';
import { Badge } from '../ui/Badge';
import { Modal } from '../ui/Modal';
import { GithubIcon } from '../ui/GithubIcon';
import { GlowingButton } from '../ui/GlowingButton';

export const ProjectsCatalog: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const filteredProducts = PRODUCTS_DATA.filter((product) => {
    const matchesCategory = activeCategory === 'all' || product.category === activeCategory;
    const matchesSearch =
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.language.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.tagline.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleCopyClone = (product: Product, e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText(`git clone ${product.githubUrl}.git`);
    setCopiedId(product.id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const getCategoryIcon = (cat: string) => {
    switch (cat) {
      case 'ai-agents':
        return <Bot size={15} className="text-blue-600" />;
      case 'governance':
        return <ShieldCheck size={15} className="text-purple-600" />;
      case 'cloud-infra':
        return <Shield size={15} className="text-indigo-600" />;
      case 'observability':
        return <Activity size={15} className="text-sky-600" />;
      case 'developer-tools':
      default:
        return <Cpu size={15} className="text-emerald-600" />;
    }
  };

  // When browsing all with no search, spotlight the flagship product (GitLab Fleet Governor)
  const isDefaultView = activeCategory === 'all' && !searchQuery.trim();
  const spotlightProduct = isDefaultView
    ? (PRODUCTS_DATA.find((p) => p.id === 'gitlab-fleet-governor') || PRODUCTS_DATA[0])
    : null;
  const gridProducts = isDefaultView
    ? PRODUCTS_DATA.filter((p) => p.id !== spotlightProduct?.id)
    : filteredProducts;

  return (
    <section id="projects" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-4 border-b border-slate-200">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-semibold font-mono tracking-wide">
              SOFTWARE FLEET
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 font-sans">
              Featured Open-Source Projects
            </h2>

            <p className="text-slate-600 text-base font-normal">
              High-performance developer tools, autonomous agent runtimes, and cloud systems engineered by Divmora.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-xs font-mono font-medium text-slate-500">
              {filteredProducts.length} featured systems
            </span>
            <a
              href="https://github.com/divmora"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-semibold text-blue-600 hover:underline inline-flex items-center gap-1"
            >
              <span>Explore GitHub organization</span>
              <ArrowRight size={13} />
            </a>
          </div>
        </div>

        {/* Filters & Search Controls */}
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
          
          {/* Category Tabs (smooth horizontal scroll on mobile) */}
          <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar pb-1 md:pb-0 shrink-0">
            {PRODUCT_CATEGORIES.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`
                  whitespace-nowrap px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer select-none shrink-0
                  ${activeCategory === category.id
                    ? 'bg-slate-900 text-white shadow-sm'
                    : 'bg-white text-slate-600 border border-slate-200 hover:border-slate-300 hover:text-slate-900'
                  }
                `}
              >
                {category.label}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-64">
            <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Search projects..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-8 pr-3 py-1.5 bg-white border border-slate-200 rounded-lg text-xs font-medium text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-500 shadow-sm"
            />
          </div>
        </div>

        {/* Spotlight Banner Card (when default view is active) */}
        {spotlightProduct && (
          <div
            onClick={() => setSelectedProduct(spotlightProduct)}
            className="p-6 sm:p-8 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md hover:border-blue-300 transition-all cursor-pointer relative overflow-hidden group"
          >
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
              <div className="space-y-3 max-w-2xl">
                <div className="flex items-center gap-2">
                  <Badge variant="blue" size="sm">
                    <Sparkles size={12} />
                    <span>FEATURED SPOTLIGHT</span>
                  </Badge>
                  <span className="text-xs font-mono text-slate-400">
                    divmora/{spotlightProduct.repoName}
                  </span>
                </div>

                <div className="space-y-1">
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors font-sans flex items-center gap-2">
                    {getCategoryIcon(spotlightProduct.category)}
                    <span>{spotlightProduct.name}</span>
                  </h3>
                  <p className="text-sm font-semibold text-slate-600">
                    {spotlightProduct.tagline}
                  </p>
                </div>

                <p className="text-sm text-slate-600 leading-relaxed font-normal">
                  {spotlightProduct.description}
                </p>

                {/* Key Metrics / Highlights */}
                <div className="flex flex-wrap gap-2 pt-1">
                  {spotlightProduct.metrics.map((m) => (
                    <span
                      key={m.label}
                      className="px-2.5 py-1 rounded-md bg-slate-50 border border-slate-200 text-xs font-mono text-slate-700 flex items-center gap-1.5"
                    >
                      <span className="text-slate-400">{m.label}:</span>
                      <strong className="font-semibold text-slate-900">{m.value}</strong>
                    </span>
                  ))}
                </div>
              </div>

              {/* Spotlight Actions Column */}
              <div className="lg:text-right flex flex-col sm:flex-row lg:flex-col items-start sm:items-center lg:items-end justify-between gap-4 shrink-0 border-t lg:border-t-0 pt-4 lg:pt-0 border-slate-100">
                <div className="flex items-center gap-2 text-xs">
                  <span className="px-2.5 py-1 rounded-full text-xs font-mono font-medium bg-slate-100 text-slate-700 border border-slate-200">
                    {spotlightProduct.language}
                  </span>
                  <span className="text-xs font-mono font-semibold text-slate-500">
                    {spotlightProduct.license}
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  {spotlightProduct.liveUrl && (
                    <a
                      href={spotlightProduct.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-purple-600 hover:bg-purple-700 text-white text-xs font-semibold shadow-sm transition-colors cursor-pointer mr-1"
                    >
                      <ExternalLink size={13} />
                      <span>Live Studio</span>
                    </a>
                  )}

                  <span className="text-xs font-semibold text-blue-600 group-hover:translate-x-0.5 transition-transform flex items-center gap-1">
                    <span>View architecture & details</span>
                    <ArrowRight size={13} />
                  </span>

                  <a
                    href={spotlightProduct.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="p-2 rounded-xl bg-slate-900 text-white hover:bg-slate-800 transition-colors shadow-sm ml-1"
                    title="View on GitHub"
                  >
                    <GithubIcon size={14} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Projects Grid (Balanced 3x3 grid) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {gridProducts.map((product) => (
            <div
              key={product.id}
              onClick={() => setSelectedProduct(product)}
              className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:shadow-md hover:border-slate-300 transition-all duration-200 flex flex-col justify-between group cursor-pointer"
            >
              {/* Card Top */}
              <div className="space-y-3.5">
                <div className="flex items-start justify-between gap-2">
                  <div className="space-y-1">
                    <span className="text-[11px] font-mono text-slate-500 font-medium">
                      divmora/{product.repoName}
                    </span>
                    <h3 className="text-base font-bold text-slate-900 group-hover:text-blue-600 transition-colors font-sans flex items-center gap-1.5">
                      {getCategoryIcon(product.category)}
                      <span>{product.name}</span>
                    </h3>
                  </div>

                  {product.badge && (
                    <Badge variant="blue" size="sm">
                      {product.badge}
                    </Badge>
                  )}
                </div>

                <p className="text-xs font-semibold text-slate-500 leading-snug">
                  {product.tagline}
                </p>

                <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed">
                  {product.description}
                </p>

                {/* Key Metrics / Attributes (No truncation) */}
                <div className="flex flex-wrap gap-1.5 pt-2 border-t border-slate-100">
                  {product.metrics.map((m) => (
                    <span
                      key={m.label}
                      className="px-2 py-0.5 rounded-md bg-slate-50 border border-slate-150 text-[11px] font-mono text-slate-600 flex items-center gap-1"
                    >
                      <span className="text-slate-400">{m.label}:</span>
                      <strong className="font-semibold text-slate-800">{m.value}</strong>
                    </span>
                  ))}
                </div>
              </div>

              {/* Card Bottom Actions with Clear Affordance */}
              <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between gap-2 text-xs">
                <div className="flex items-center gap-2">
                  <span className="px-2 py-0.5 rounded-full text-[11px] font-mono font-medium bg-slate-100 text-slate-700 border border-slate-200">
                    {product.language}
                  </span>
                  <span className="text-[11px] font-mono text-slate-400">
                    {product.license}
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-[11px] font-semibold text-blue-600 group-hover:translate-x-0.5 transition-transform flex items-center gap-0.5">
                    <span>Details</span>
                    <span>→</span>
                  </span>

                  <button
                    onClick={(e) => handleCopyClone(product, e)}
                    className="p-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-600 transition-colors cursor-pointer"
                    title="Copy Git clone command"
                  >
                    {copiedId === product.id ? <Check size={13} className="text-emerald-600 font-bold" /> : <Copy size={13} />}
                  </button>

                  <a
                    href={product.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="p-1.5 rounded-lg bg-slate-900 text-white hover:bg-slate-800 transition-colors shadow-sm cursor-pointer"
                    title="View repository on GitHub"
                  >
                    <GithubIcon size={13} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty Fallback */}
        {filteredProducts.length === 0 && (
          <div className="p-12 text-center rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3">
            <div className="text-slate-700 font-medium text-sm">No repositories found matching &ldquo;{searchQuery}&rdquo;</div>
            <button
              onClick={() => {
                setSearchQuery('');
                setActiveCategory('all');
              }}
              className="text-xs font-semibold text-blue-600 hover:underline cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        )}

      </div>

      {/* Product Detail Modal */}
      <Modal
        isOpen={!!selectedProduct}
        onClose={() => setSelectedProduct(null)}
        title={selectedProduct?.name || ''}
        subtitle={`divmora/${selectedProduct?.repoName} • ${selectedProduct?.categoryLabel}`}
      >
        {selectedProduct && (
          <div className="space-y-6">
            <div>
              <h4 className="text-xs font-mono uppercase font-bold tracking-wider text-slate-400 mb-2">Overview</h4>
              <p className="text-slate-700 text-sm leading-relaxed font-normal">{selectedProduct.description}</p>
            </div>

            <div>
              <h4 className="text-xs font-mono uppercase font-bold tracking-wider text-slate-400 mb-3">Core Capabilities</h4>
              <div className="space-y-2">
                {selectedProduct.features.map((feat, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-sm font-medium text-slate-700">
                    <span className="text-blue-600 font-bold font-mono text-sm">✓</span>
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
              <div className="text-xs font-mono uppercase font-bold text-slate-700 flex items-center gap-1.5">
                <Code2 size={14} className="text-blue-600" />
                <span>Architecture Blueprint</span>
              </div>
              <p className="text-xs font-mono text-slate-700 leading-relaxed">
                {selectedProduct.architectureDetails}
              </p>
            </div>

            <div className="space-y-2">
              <div className="text-xs font-mono uppercase font-bold text-slate-400 flex items-center gap-1.5">
                <Terminal size={14} className="text-blue-600" />
                <span>Quick Run Command</span>
              </div>
              <div className="flex items-center justify-between p-3 rounded-xl bg-slate-950 text-white font-mono text-xs overflow-x-auto border border-slate-800">
                <code>$ {selectedProduct.cliCommand}</code>
                <button
                  onClick={() => {
                    navigator.clipboard.writeText(selectedProduct.cliCommand);
                  }}
                  className="ml-3 p-1.5 hover:text-blue-400 text-slate-400 transition-colors cursor-pointer"
                  title="Copy command"
                >
                  <Copy size={14} />
                </button>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3">
              <GlowingButton
                variant="ghost"
                size="sm"
                onClick={() => setSelectedProduct(null)}
              >
                Close
              </GlowingButton>

              <div className="flex items-center gap-2">
                {selectedProduct.liveUrl && (
                  <GlowingButton
                    variant="purple"
                    size="sm"
                    href={selectedProduct.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    icon={<ExternalLink size={14} />}
                  >
                    Launch Live Studio
                  </GlowingButton>
                )}

                <GlowingButton
                  variant="blue"
                  size="sm"
                  href={selectedProduct.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  icon={<GithubIcon size={15} />}
                >
                  View on GitHub
                  <ExternalLink size={14} />
                </GlowingButton>
              </div>
            </div>
          </div>
        )}
      </Modal>
    </section>
  );
};
