module.exports = {
  env: {
    es2021: true,
    node: true,
  },
  extends: [
    'airbnb-base',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    '@typescript-eslint',
  ],
  rules: {
    'import/prefer-default-export': 0,
    'max-classes-per-file': 0,
    'import/extensions': 0,
    'import/no-unresolved': 0,
    'no-unused-vars': 0,
    camelcase: 0,
    'class-methods-use-this': 0,
    'consistent-return': 0,
    'no-param-reassign': 0,
    'no-console': 0,
    'no-shadow': 0,
  },
};
