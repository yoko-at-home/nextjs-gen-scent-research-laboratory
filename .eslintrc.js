module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  parserOptions: { project: "./tsconfig.json" },
  settings: { tailwindcss: { groupByResponsive: true } },
  plugins: ["simple-import-sort", "sort-destructure-keys", "tailwindcss", "import-access"],
  extends: [
    "plugin:@typescript-eslint/recommended",
    "plugin:tailwindcss/recommended",
    "next/core-web-vitals",
    "prettier",
  ],
  rules: {
    "no-console": ["error", { allow: ["warn", "info", "error"] }],
    "no-restricted-syntax": ["error", { selector: "TSEnumDeclaration", message: "Don't declare enums" }],
    "prefer-arrow-callback": "error",
    "prefer-const": "error",
    "func-style": ["error", "expression"],
    "arrow-body-style": ["error", "always"],
    "no-restricted-imports": ["error", { paths: [{ name: "react", importNames: ["default"] }] }],
    // react
    "react/display-name": "error",
    "react/jsx-handler-names": [
      "error",
      {
        eventHandlerPrefix: "handle",
        eventHandlerPropPrefix: "on",
        checkLocalVariables: true,
        checkInlineFunction: true,
      },
    ],
    "react/destructuring-assignment": ["off"],
    "import/newline-after-import": "error",
    "import/no-default-export": "off",
    "import-access/jsdoc": "error",
    "simple-import-sort/imports": "error",
    "simple-import-sort/exports": "error",
    "sort-destructure-keys/sort-destructure-keys": 2,
    // @typescript-eslint
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/no-var-requires": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/consistent-type-imports": ["warn", { prefer: "type-imports" }],
    "@typescript-eslint/no-unused-vars": ["error", { varsIgnorePattern: "^_", argsIgnorePattern: "^_" }],
    "@typescript-eslint/naming-convention": [
      "error",
      { selector: ["typeAlias", "typeParameter"], format: ["PascalCase"] },
      // { selector: ["property", "method"], format: ["camelCase"] },
      {
        selector: "variable",
        types: ["boolean"],
        format: ["PascalCase"],
        prefix: ["no", "is", "has", "should"],
        filter: { regex: "^_", match: false },
      },
    ],
    // jsx-a11y
    "jsx-a11y/no-autofocus": "off",
    "jsx-a11y/anchor-is-valid": [
      "error",
      { components: ["Link"], specialLink: ["hrefLeft", "hrefRight"], aspects: ["invalidHref", "preferButton"] },
    ],
    // tailwind
    "tailwindcss/classnames-order": "warn",
    "tailwindcss/enforces-shorthand": "warn",
    "tailwindcss/migration-from-tailwind-2": "warn",
    "tailwindcss/no-arbitrary-value": "off",
    "tailwindcss/no-custom-classname": "warn",
    "tailwindcss/no-contradicting-classname": "error",
  },
  overrides: [
    {
      files: ["src/pages/**/*.tsx", "src/pages/api/**/*.ts"],
      rules: { "import/no-default-export": "off" },
    },
  ],
};
