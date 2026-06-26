# Chain

Chain is being prepared as a lean AI toolkit repo.

The repo now follows a Monokit-style PNPM/Turborepo shape while keeping only the docs app surface:

```text
apps/docs
packages/typescript-config
packages/ui
```

## Develop

```bash
pnpm install
pnpm dev
```

## Verify

```bash
pnpm syncpack:lint
pnpm typecheck
pnpm build
pnpm audit --audit-level=moderate
```

## Stack

- PNPM 11 catalogs for centralized dependency versions
- Turborepo task orchestration
- Next.js 16 + React 19
- Fumadocs 16 for documentation
- Syncpack for dependency hygiene
