.PHONY: install dev build test typecheck clean

install:
	@pnpm install

dev:
	@pnpm run dev

build:
	@pnpm run build

test: typecheck

typecheck:
	@pnpm run typecheck

clean:
	@rm -rf dist node_modules/.vite
