import globals from "globals";
import pluginJs from "@eslint/js";

export default [
  // Apply recommended settings from @eslint/js
  pluginJs.configs.recommended,

  // Apply specific settings for .js files
  {
    files: ["**/*.js"],
    languageOptions: {
      sourceType: "commonjs",
      globals: globals.browser,
    },
  },

  // Custom rules configuration
  {
    rules: {
      "no-unused-vars": "error",
      "no-undef": "error",
      camelcase: "error", // Ensure rule name is quoted if it contains special characters
    },
  },

  // Apply recommended settings from @eslint/js plugin
  pluginJs.configs.recommended,
];
