# Agent Guidelines & Workspace Protocols

This repository houses the official public web portal and open-source project showcase for **DIVMORA Technologies** (`divmora`).

---

## 1. Project Architecture Layout

```
divmora-website/
├── index.html                  # Single-page HTML entry point
├── vite.config.ts              # Vite bundler configuration (manual chunk splitting, base path)
├── tailwind.config.js          # Brand styling theme, colors, typography, tactile shadows
├── postcss.config.js           # PostCSS configuration with Tailwind and Autoprefixer
├── tsconfig.json               # TypeScript compiler options (strict, bundler resolution)
├── public/                     # Static production assets
│   ├── divmora-logo-clean.png  # Vector-clean brand mark
│   ├── divmora-signage.jpeg    # Corporate signage asset
│   ├── favicon.svg             # Browser favicon
│   ├── logo-256.png            # Raster app icon
│   └── logo.svg                # Scalable brand SVG icon
├── src/
│   ├── main.tsx                # React DOM render root
│   ├── App.tsx                 # Top-level application container
│   ├── index.css               # Global Tailwind directives & custom CSS animations
│   ├── vite-env.d.ts           # Vite client type definitions
│   ├── components/
│   │   ├── layout/             # Top-level shell (Navbar, Footer)
│   │   ├── sections/           # Landing page sections (Hero, About, Projects, Principles, Contact)
│   │   └── ui/                 # Reusable primitives (Badge, GlowingButton, Modal, Icons)
│   └── data/
│       ├── siteConfig.ts       # Global site metadata, navigation links, and corporate information
│       ├── projects.json       # Structured catalog of Divmora open-source platforms
│       └── products.ts         # Auxiliary product metadata and interfaces
└── .github/
    ├── dependabot.yml          # Automated weekly dependency updates
    └── workflows/              # Reusable organization CI/CD workflows
```

---

## 2. Safety & Verification Conventions

- **Static Determinism**: Every component must build cleanly with zero TypeScript errors (`pnpm typecheck` or `make test`).
- **Zero Secrets**: Never commit `.env` files, credentials, or private keys. The `.env*` pattern is strictly enforced in `.gitignore`.
- **Pre-Push Validation**: Always run `make build` before pushing any changes to confirm Vite static asset bundling passes without warnings or broken imports.

---

## 3. Node.js & TypeScript Ecosystem Standards

- **Package Manager**: Use `pnpm` exclusively (`pnpm install`, `pnpm build`, `pnpm dev`).
- **Strict Typing**: Strict TypeScript mode is enabled. Avoid `any` types; define explicit interfaces in `src/data/` or alongside component props.
- **Styling**: Tailwind CSS utility classes following the brand palette (`divmora-50` through `divmora-950`).
- **Icons**: Use `lucide-react` icons consistently across all UI components.

---

## 4. Conventional Commits Specification

All commit messages and pull request titles **MUST** follow the [Conventional Commits](https://www.conventionalcommits.org/) specification:

- `feat:` New landing page feature or UI component
- `fix:` Bug fix (e.g. broken link, styling regression, responsive layout bug)
- `docs:` Documentation improvements in README or specifications
- `chore:` Dependency bumps, CI updates, configuration tweaks
- `refactor:` Code cleanup without UI changes

---

## 5. Living Product Roadmap (`ROADMAP.md`)

- **Adding Backlog Items**: Whenever a future feature, section, or enhancement is identified during development, add it to [ROADMAP.md](file:///home/ngoyal16/Desktop/divmora/github-repos/divmora-website/ROADMAP.md).
- **Pruning Completed Items**: When a roadmap task is implemented, tested, and merged, immediately remove it from `ROADMAP.md`.

---

## 6. Verification Commands

| Command | Action |
| :--- | :--- |
| `make install` | Install workspace dependencies via `pnpm install` |
| `make dev` | Start local Vite development server on `http://localhost:3000` |
| `make test` | Execute TypeScript type-checking (`tsc --noEmit`) |
| `make build` | Build static production distribution into `dist/` |
| `make clean` | Remove `dist/` and build artifacts |
