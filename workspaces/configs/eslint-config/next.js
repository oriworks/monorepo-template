import nextCoreWebVitals from "eslint-config-next/core-web-vitals";

import { config as baseConfig } from "./base.js";

/**
 * ESLint config for Next.js apps.
 * TypeScript rules come from the base config (typescript-eslint).
 *
 * @type {import("eslint").Linter.Config[]}
 */
export const config = [...nextCoreWebVitals, ...baseConfig];
