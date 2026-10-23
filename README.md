# Divmora Technologies Website

[![Latest Release](https://img.shields.io/github/v/release/divmora/divmora-website?logo=github)](https://github.com/divmora/divmora-website/releases)
[![License: Apache 2.0](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](LICENSE)
[![CI/CD](https://github.com/divmora/divmora-website/actions/workflows/ci.yml/badge.svg)](https://github.com/divmora/divmora-website/actions)
[![Security Policy](https://img.shields.io/badge/Security-Policy-green.svg)](SECURITY.md)

Official web portal and open-source project showcase for **DIVMORA Technologies**, engineered for static hosting on **GitHub Pages**.

---

## ⚡ Core Highlights & Capabilities

- **Lightweight & High-Performance**: Minimal, typography-focused developer aesthetics with sub-second load times and zero runtime bloat.
- **Divmora Software Fleet Catalog**: Interactive and searchable showcase of Divmora open-source platforms across autonomous agent runtimes (`localharness`, `jules-ai-agent`, `code-reviewer-ai-agent`), fleet governance (`gitlab-fleet-governor`), and telemetry lakehouses.
- **Company Coordinates & Verification**: Transparent corporate details, headquarters location, tax identifiers, and official communication channels.
- **Serverless GitHub Pages Deployment**: Fully automated static bundling and deployment powered by reusable GitHub Actions workflows.

---

## 🛠️ Architecture & Tech Stack

- **Framework**: React 18 + TypeScript + Vite
- **Styling**: Tailwind CSS with custom Divmora brand palette and tactile shadow design system
- **Icons**: Lucide React + Divmora SVG Brand Assets
- **Deployment**: Static single-page distribution via GitHub Actions to GitHub Pages

---

## 🚀 Local Development

### Prerequisites
- Node.js `22.x` or `24.x`
- `pnpm` 9+
- `make`

### Quick Start
```bash
# Clone the repository
git clone https://github.com/divmora/divmora-website.git
cd divmora-website

# Install dependencies
make install
# or: pnpm install

# Start Vite live-reload server (http://localhost:3000)
make dev
# or: pnpm run dev
```

---

## 📦 Building & Verification

```bash
# Run TypeScript type-checking
make test
# or: pnpm run typecheck

# Build static production assets to dist/
make build
# or: pnpm run build

# Preview production build locally
pnpm run preview
```

---

## 🤝 Community & Contributing

- **[CONTRIBUTING.md](CONTRIBUTING.md)**: Development guidelines, make targets, and Conventional Commits.
- **[ROADMAP.md](ROADMAP.md)**: Upcoming architectural features and living backlog.
- **[AGENTS.md](AGENTS.md)**: Automated agent guidelines and dry-run safety invariants.
- **[SECURITY.md](SECURITY.md)**: Vulnerability disclosure coordinates and SLAs.

---

## 📄 License

This repository and all associated web assets are licensed under the [Apache License, Version 2.0](LICENSE).
Copyright 2026 DIVMORA Technologies.
