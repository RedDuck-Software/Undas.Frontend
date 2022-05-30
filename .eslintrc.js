module.exports = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: ["./tsconfig.json"],
  },
  plugins: ["@typescript-eslint", "react", "import", "react-hooks"],
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:import/typescript",
    "prettier",
  ],
  rules: {
    "import/order": [
      "warn",
      {
        alphabetize: {
          order: "asc",
          /* sort in ascending order. Options: ['ignore', 'asc', 'desc'] */
          caseInsensitive: true,
          /* ignore case. Options: [true, false] */
        },
        groups: [
          "external",
          "builtin",
          "index",
          "sibling",
          "parent",
          "internal",
          "object",
        ],
        "newlines-between": "always",
      },
    ],
    "react/prop-types": "off",
    "@typescript-eslint/no-unused-vars": "error",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/no-non-null-assertion": "error",
    "react/display-name": "off",
  },
  settings: {
    react: {
      version: "detect",
    },
  },
};
