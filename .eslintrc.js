  module.exports = {
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint", "react", "import", "react-hooks"],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      extends: [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:import/typescript",
        "prettier",
      ],
      parserOptions: {
        tsconfigRootDir: __dirname,
        project: ["./tsconfig.json"],
      }
    }
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
    "react/prop-types": "warn",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/no-non-null-assertion": "warn",
    "react/display-name": "off",
  },
  settings: {
    react: {
      version: "detect",
    },  
  },
};
