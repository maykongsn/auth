module.exports = {
  env: {
    es2021: true,
    node: true,
  },
  extends: ["airbnb-base", "prettier"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["@typescript-eslint", "prettier"],
  rules: {
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        js: "never",
        jsx: "never",
        ts: "never",
        tsx: "never",
      },
    ],
    "import/no-extraneous-dependencies": [
      "error",
      {
        devDependencies: false,
        optionalDependencies: false,
        peerDependencies: false,
      },
    ],
    "prettier/prettier": [
      "error",
      {
        trailingComma: "es5",
        singleQuote: false,
        tabWidth: 2,
        arrowParens: "always",
      },
    ],
    semi: ["error", "always"],
    "import/prefer-default-export": "off",
    "class-methods-use-this": "off",
    "import/no-unresolved": "off",
    "no-dupe-keys": "off",
    "no-unused-vars": "off",
    "import/extensions": "off",
    "no-useless-constructor": "off",
    "no-empty-function": "off",
    "max-classes-per-file": "off",
    "consistent-return": "off",
  },
};
