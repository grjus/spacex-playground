module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'plugin:react-hooks/recommended'],
  ignorePatterns: ['dist', '.eslintrc.cjs', '*.config.js'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh', 'react', 'import-quotes', 'no-relative-import-paths', 'unused-imports'],
  rules: {
    'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
    'react/prop-types': 'off',
    'jsx-quotes': ['warn', 'prefer-double'],
    'no-multiple-empty-lines': [2, { max: 1 }],
    'space-before-function-paren': 'off',
    'sort-imports': ['error', { ignoreCase: true, ignoreDeclarationSort: true }],
    'import-quotes/import-quotes': [1, 'single'],
    'no-unused-vars': 'off',
    'unused-imports/no-unused-imports': 'error',
    'unused-imports/no-unused-vars': [
      'warn',
      { vars: 'all', varsIgnorePattern: '^_', args: 'after-used', argsIgnorePattern: '^_' },
    ],
  },
};
