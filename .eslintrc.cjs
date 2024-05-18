/** @type { import("eslint").Linter.Config } */
module.exports = {
 root: true,
 extends: [
  'eslint:recommended',
  'plugin:@typescript-eslint/recommended',
  'plugin:svelte/recommended',
  'prettier',
  'airbnb'
 ],
 parser: '@typescript-eslint/parser',
 plugins: ['@typescript-eslint', 'react'],
 parserOptions: {
  sourceType: 'module',
  ecmaVersion: 2020,
  extraFileExtensions: ['.svelte']
 },
 env: {
  browser: true,
  es2017: true,
  node: true
 },
 rules: {
  'no-console': 'off',
  'indent': ['error', 2],
  'quotes': ['error', 'single'],
  'semi': ['error', 'always'],
 },
 globals: {
  Atomics: 'readonly',
  SharedArrayBuffer: 'readonly',
 },
 overrides: [
  {
   files: ['*.svelte'],
   parser: 'svelte-eslint-parser',
   parserOptions: {
    parser: '@typescript-eslint/parser'
   }
  }
 ]
};