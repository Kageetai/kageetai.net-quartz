// @ts-check

import eslint from "@eslint/js"
import tseslint from "typescript-eslint"
import globals from "globals"

const noUnusedVarsIgnorePattern = "^_w*"

export default tseslint.config(
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  {
    languageOptions: {
      globals: {
        ...globals.nodeBuiltin,
        ...globals.browser,
      },
    },
  },
  { ignores: ["node_modules", "public", "content", "quartz/.quartz-cache"] },
  {
    rules: {
      "no-unused-vars": "off",
      "@typescript-eslint/no-unused-vars": [
        "error",
        {
          args: "after-used",
          caughtErrors: "none",
          argsIgnorePattern: noUnusedVarsIgnorePattern,
          varsIgnorePattern: noUnusedVarsIgnorePattern,
          destructuredArrayIgnorePattern: noUnusedVarsIgnorePattern,
        },
      ],

      "no-useless-escape": "warn",
      "no-control-regex": "warn",
      "prefer-const": "warn",

      "@typescript-eslint/no-explicit-any": "warn",
    },
  },
)
