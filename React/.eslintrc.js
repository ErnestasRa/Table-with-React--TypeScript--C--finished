module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["airbnb", "airbnb-typescript"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "tsconfig.json",
    tsconfigRootDir: __dirname,
    sourceType: "module",
  },
  ignorePatterns: ["babel.config.js"],
  rules: {
    "react/button-has-type": [0],
    "react/prop-types": [0],
    "react/require-default-props": [0],
    "react/jsx-props-no-spreading": [0],
    "react/function-component-definition": [
      2,
      {
        namedComponents: "arrow-function",
        unnamedComponents: "arrow-function",
      },
    ],
    "react/jsx-max-props-per-line": [2, { maximum: { single: 88, multi: 1 } }],
    "@typescript-eslint/indent": [0],
  },
};
