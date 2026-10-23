# Contributing to Divmora Website

Thank you for your interest in contributing to the **DIVMORA Technologies** website and developer portal.

---

## 🛠️ Prerequisites

Ensure you have the following installed locally:

- **Node.js**: `24.x`
- **pnpm**: `9.x` or higher (`corepack enable && corepack prepare pnpm@latest --activate`)
- **Make**: Available on macOS, Linux, and Windows (via WSL/Git Bash)

---

## 🚀 Local Development Workflow

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/divmora/divmora-website.git
   cd divmora-website
   ```

2. **Install Dependencies**:
   ```bash
   make install
   # or: pnpm install
   ```

3. **Start Development Server**:
   ```bash
   make dev
   # or: pnpm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

4. **Verify TypeScript & Production Build**:
   ```bash
   make test     # Runs tsc --noEmit
   make build    # Compiles production distribution to dist/
   ```

---

## 📜 Standard Make Targets

| Target | Description |
| :--- | :--- |
| `make install` | Install all npm packages via pnpm |
| `make dev` | Start local Vite live-reload dev server on port 3000 |
| `make test` | Run TypeScript type-checking (`tsc --noEmit`) |
| `make build` | Run typecheck and bundle static site into `dist/` |
| `make clean` | Delete build output (`dist/`) and cached assets |

---

## 📝 Conventional Commits

All commits and Pull Request titles must follow the [Conventional Commits](https://www.conventionalcommits.org/) format:

```
<type>(<optional scope>): <description>
```

### Supported Types:
- `feat:` A new feature or section
- `fix:` A bug fix or UI correction
- `docs:` Documentation updates
- `chore:` Dependency bumps, CI updates, configuration
- `refactor:` Code improvements without altering UI functionality
- `test:` Adding or updating tests / type checks

---

## ⚖️ License & Attribution

By submitting a Pull Request, you agree that your contributions will be licensed under the project's [Apache License 2.0](LICENSE).
