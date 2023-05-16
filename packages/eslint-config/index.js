/** @type {import('eslint').Linter.Config} */
module.exports = {
  env: {
    es6: true,
    node: true,
  },
  extends: ['@remix-run/eslint-config', '@remix-run/eslint-config/node'],
  ignorePatterns: [
    '**/node_modules',
    '**/_dist',
    '**/dist',
    '**/build',
    '**/*.json',
    '**/*.config.json',
    '**/*.js',
  ],
  rules: {
    semi: 0,
    '@typescript-eslint/semi': [2],
    quotes: [
      2,
      'single',
      {
        avoidEscape: true,
      },
    ],
    'jsx-quotes': [2, 'prefer-single'],
    'arrow-parens': [2, 'as-needed'],
    'nonblock-statement-body-position': [2, 'below'],
    '@typescript-eslint/ban-types': [
      2,
      {
        extendDefaults: true,
        types: {
          '{}': false,
        },
      },
    ],
  },
};
