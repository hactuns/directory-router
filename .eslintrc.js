module.exports = {
  env: {
    browser: true,
    es2021: true,
    es6: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:prettier/recommended",
    "plugin:@typescript-eslint/recommended",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["prettier", "unused-imports"],
  settings: {
    "import/resolver": {
      typescript: {},
    },
  },
  rules: {
    // @import
    "unused-imports/no-unused-imports": "error",

    "import/extensions": [
      "off",
      "ignorePackages",
      {
        js: "never",
        jsx: "never",
        ts: "never",
        tsx: "never",
      },
    ],
    "import/no-extraneous-dependencies": [
      "warn",
      {
        devDependencies: ["**/*.test.ts", "**/*.test.tsx"],
      },
    ],
    "import/no-named-as-default": 0,
    "import/prefer-default-export": "off",
    "import/no-duplicates": ["error", {}],
    "import/no-cycle": "off",

    // @typescript-eslint
    "@typescript-eslint/no-shadow": ["warn"],
    "@typescript-eslint/no-explicit-any": "warn",
    "@typescript-eslint/no-unused-vars": "warn",
    "@typescript-eslint/consistent-type-definitions": ["error", "interface"],
    "@typescript-eslint/no-non-null-asserted-optional-chain": "warn",
    "@typescript-eslint/no-non-null-assertion": "warn",
    "@typescript-eslint/ban-types": "warn",

    // @jsx-a11y
    // 'jsx-a11y/click-events-have-key-events': 'off',
    // 'jsx-a11y/no-noninteractive-element-interactions': 'off',
    // 'jsx-a11y/no-static-element-interactions': 'off',
    // 'jsx-a11y/anchor-is-valid': 'off',
    // 'jsx-a11y/label-has-associated-control': 'off',
    // 'jsx-a11y/interactive-supports-focus': 'warn',

    // @react
    "react/prop-types": "off",
    "react/no-unescaped-entities": 0,
    "react/react-in-jsx-scope": "off",
    "react/no-unused-prop-types": "off",
    "react/jsx-props-no-spreading": "off",
    "react/destructuring-assignment": "off",
    "react/require-default-props": "off",
    "react/jsx-filename-extension": [
      1,
      { extensions: [".js", ".jsx", ".ts", ".tsx"] },
    ],
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "off",
    "react/no-unstable-nested-components": "off",
    "react/button-has-type": "off",
    "no-html-link-for-pages": "off",

    // @base
    "no-shadow": "off",
    "func-names": "off",
    "no-control-regex": 0,
    camelcase: "off",
    "no-unused-vars": "off",
    "no-nested-ternary": "off",
    "lines-around-directive": "off",
    "no-empty-pattern": "warn",
    "no-redeclare": "warn",

    // @prettier
    "prettier/prettier": [
      "warn",
      {
        singleQuote: true,
        semi: true,
        htmlWhitespaceSensitivity: "css",
        tabWidth: 2,
        trailingComma: "es5",
        endOfLine: "lf",
        arrowParens: "always",
        bracketSameLine: true,
        bracketSpacing: true,
        embeddedLanguageFormatting: "auto",
        insertPragma: false,
        jsxSingleQuote: false,
        printWidth: 100,
        proseWrap: "preserve",
        quoteProps: "as-needed",
        requirePragma: false,
        useTabs: false,
        vueIndentScriptAndStyle: false,
      },
    ],
  },
  ignorePatterns: ["proto-generated/*"],
};
