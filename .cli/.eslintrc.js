const { join } = require('path');

/** @type {import('eslint').Linter.Config} */
module.exports = {
  root: true,
  parserOptions: {
    project: join(__dirname, './tsconfig.json'),
  },
  extends: ['@biggs-realty'],
};
