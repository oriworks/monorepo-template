import { fileURLToPath } from "node:url";

/**
 * Shared Prettier config.
 * `tailwindStylesheet` points at the design-system CSS entrypoint so that
 * prettier-plugin-tailwindcss knows about custom theme tokens (Tailwind v4).
 *
 * @type {import("prettier").Config & import("prettier-plugin-tailwindcss").PluginOptions}
 */
const config = {
  semi: true,
  singleQuote: false,
  trailingComma: "all",
  printWidth: 100,
  plugins: ["prettier-plugin-tailwindcss"],
  tailwindStylesheet: fileURLToPath(
    new URL("../../packages/design-system/src/styles.css", import.meta.url),
  ),
  tailwindFunctions: ["cn", "cva", "clsx"],
};

export default config;
