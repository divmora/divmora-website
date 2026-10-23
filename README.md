# Divmora Technologies Website

Official website and developer portal for **Divmora Technologies**, engineered for static hosting on **GitHub Pages** and **GitLab Pages**.

[![Deploy to GitHub Pages](https://github.com/divmora/divmora-website/actions/workflows/deploy.yml/badge.svg)](https://github.com/divmora/divmora-website/actions/workflows/deploy.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

---

## ⚡ Core Sections & Highlights

- **Simple & Elegant Design**: Clean, minimal, typography-focused aesthetic optimized for readability and instant load times.
- **Clear Company Overview**: Transparently answers "What is Divmora?", outlining our engineering philosophy and core focus areas.
- **Divmora Software Fleet (9 Repositories)**: Filterable catalog covering autonomous agent runtimes (`localharness`, `jules-ai-agent`, `code-reviewer-ai-agent`), governance engines (`gitlab-fleet-governor`), telemetry lakehouses (`laravel-periscope`, `otel-aws-log-parser`), and cloud infrastructure tools (`aws-guardduty-archive-bot`, `cloudflare-smtp-relay`, `functionless-url-shortener`).
- **Engineering Principles**: Clear statement of our core values—Open Source by Default, Single-Binary Simplicity, and Production-Grade Reliability.
- **Direct Corporate Coordinates**: Official headquarters location (Hyderabad, India), verified GSTIN registration, and direct contact channels.
- **Automated CI/CD**: Zero server runtime requirements with automated static build and deployment via GitHub Actions (`.github/workflows/deploy.yml`).

---

## 🛠️ Tech Stack

- **Framework**: React 18 + TypeScript + Vite
- **Styling**: Tailwind CSS
- **Icons**: Lucide React + Divmora SVG Brand Assets

---

## 🚀 Local Development

```bash
# Clone the repository
git clone https://github.com/divmora/divmora-website.git
cd divmora-website

# Install dependencies
pnpm install

# Start development server
pnpm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📦 Building for Production

```bash
# Typecheck & Build static distribution in dist/
pnpm run build

# Preview static build locally
pnpm run preview
```

---

## 🚢 Deployment

### GitHub Pages (Automated)
Pushing to the `main` branch automatically triggers the `.github/workflows/deploy.yml` workflow to build and deploy to GitHub Pages.

---

## 📄 License

Open-source under the [MIT License](LICENSE).