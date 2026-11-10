# Oriworks monorepo template

pnpm + Turborepo monorepo with a Next.js app and a shared React design-system documented in Storybook.

## Stack

- **pnpm workspaces** + **Turborepo** for task orchestration and caching
- **Next.js 16** (App Router, Turbopack) — `workspaces/apps/web`
- **Tailwind CSS v4** — theme tokens defined once in the design-system (`@theme`)
- **Storybook 10** (`react-vite`) — `workspaces/packages/design-system`
- **ESLint 9** (flat config), **Prettier** + `prettier-plugin-tailwindcss`
- **CSpell** — spell checking in English (US) and Portuguese (pt-PT)
- **Vitest** + Testing Library
- **Husky** + **lint-staged** + **commitlint** (Conventional Commits)

## Structure

```
workspaces/
  apps/
    web/                 @oriworks/web — Next.js app
  packages/
    design-system/       @oriworks/design-system — React components, Tailwind theme, Storybook
  configs/
    eslint-config/       @oriworks/eslint-config — base / react / next flat configs
    prettier-config/     @oriworks/prettier-config
    typescript-config/   @oriworks/typescript-config — base / nextjs / react-library
```

The design-system is consumed as TypeScript source (no build step). The app imports its theme with
`@import "@oriworks/design-system/styles.css";`, which also registers the design-system sources with
Tailwind so its classes are generated.

## Getting started

```sh
pnpm install
pnpm dev          # Next.js app on http://localhost:3000
pnpm storybook    # Storybook on http://localhost:6006
```

## Scripts

| Script                 | Description                           |
| ---------------------- | ------------------------------------- |
| `pnpm dev`             | Run all `dev` tasks                   |
| `pnpm build`           | Build all workspaces                  |
| `pnpm lint`            | Lint all workspaces                   |
| `pnpm typecheck`       | Type-check all workspaces             |
| `pnpm test`            | Run unit tests                        |
| `pnpm storybook`       | Start Storybook for the design-system |
| `pnpm build-storybook` | Build the static Storybook            |
| `pnpm format`          | Format the repo with Prettier         |
| `pnpm format:check`    | Check formatting                      |

## Commits

Commit messages must follow [Conventional Commits](https://www.conventionalcommits.org/)
(e.g. `feat(design-system): add Input component`). Staged files are linted, formatted and spell-checked on commit.

Project-specific words (names, jargon) go in `project-words.txt`; the VS Code
Code Spell Checker extension's "Add to project dictionary" action writes to it.

> **Note:** if your global git config sets `core.hooksPath`, the repo-local value set by Husky
> (`.husky/_`) takes precedence once `pnpm install` has run.
