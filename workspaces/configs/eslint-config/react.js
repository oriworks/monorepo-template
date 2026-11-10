import pluginReact from "eslint-plugin-react";
import pluginReactHooks from "eslint-plugin-react-hooks";
import storybook from "eslint-plugin-storybook";
import globals from "globals";

import { config as baseConfig } from "./base.js";

/**
 * ESLint config for React libraries (e.g. the design-system).
 *
 * @type {import("eslint").Linter.Config[]}
 */
export const config = [
  ...baseConfig,
  pluginReact.configs.flat.recommended,
  pluginReact.configs.flat["jsx-runtime"],
  {
    languageOptions: {
      globals: { ...globals.browser, ...globals.serviceworker },
    },
    settings: { react: { version: "detect" } },
  },
  pluginReactHooks.configs.flat["recommended-latest"],
  ...storybook.configs["flat/recommended"],
  {
    rules: {
      "react/prop-types": "off",
    },
  },
];
