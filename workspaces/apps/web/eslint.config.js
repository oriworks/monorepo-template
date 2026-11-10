import { config } from "@oriworks/eslint-config/next";
import { defineConfig, globalIgnores } from "eslint/config";

export default defineConfig([
  ...config,
  // Lets @next/eslint-plugin-next find the app when ESLint runs from the repo root (lint-staged).
  { settings: { next: { rootDir: import.meta.dirname } } },
  globalIgnores([".next/**", "out/**", "build/**", "next-env.d.ts"]),
]);
