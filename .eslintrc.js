module.exports = {
  env: {
    es2021: true,
    node: true,
  },
  extends: [
    'airbnb-base',
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'prettier/@typescript-eslint', // Uses eslint-config-prettier to disable ESLint rules from @typescript-eslint/eslint-plugin that would conflict with prettier
    'plugin:prettier/recommended', // Enables eslint-plugin-prettier and displays prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    project: './tsconfig.json',
  },
  plugins: [
    '@typescript-eslint',
    'prettier',
  ],
  rules: {
    'import/prefer-default-export': 0,
    'max-classes-per-file': 0,
    'import/extensions': 0,
    'import/order': 0,
    'import/no-unresolved': 0,
    'no-unused-vars': 0,
    camelcase: 0,
    'class-methods-use-this': 0,
    'consistent-return': 0,
    'no-param-reassign': 0,
    'no-console': 0,
    'no-shadow': 0,
    'comma-dangle': 0,
    'lines-between-class-members': 0,
    'prettier/prettier': 0,
  },
};
