import globals from "globals";
import pluginReact from "eslint-plugin-react";


/** @type {import('eslint').Linter.Config[]} */
export default [
  { files: ["**/*.{js,mjs,cjs,jsx}"] },
  { settings: { react: { version: "detect", }, }, },
  { languageOptions: { globals: globals.browser } },
  pluginReact.configs.flat.recommended,
];