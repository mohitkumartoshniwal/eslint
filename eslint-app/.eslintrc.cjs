module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: "eslint:recommended",
  plugins: ["custom-no-console"],
  overrides: [
    {
      env: {
        node: true,
      },
      files: [".eslintrc.{js,cjs}"],
      parserOptions: {
        sourceType: "script",
      },
    },
  ],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  rules: {
    "custom-no-console/no-console": [
      "error",
      {
        allowedMethods: ["info"],
        identifier: "CustomLogger",
      },
    ],
  },
};
