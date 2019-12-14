module.exports = {
  parser: "@typescript-eslint/parser",
  extends: [
    "react-app",
    "prettier",
    //"plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended"
  ],
  plugins: ["@typescript-eslint", "react-hooks", "react"],
  rules: {
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
  }
};
