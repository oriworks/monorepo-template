import { config } from "@oriworks/eslint-config/react";
import { defineConfig, globalIgnores } from "eslint/config";

export default defineConfig([...config, globalIgnores(["!.storybook"])]);
