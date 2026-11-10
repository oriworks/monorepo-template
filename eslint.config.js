import { config } from "@oriworks/eslint-config/base";
import { defineConfig, globalIgnores } from "eslint/config";

/** Root-level config: lints files outside workspaces (each workspace has its own config). */
export default defineConfig([...config, globalIgnores(["workspaces/**"])]);
