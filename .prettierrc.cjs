// @ts-nocheck
module.exports = {
  ...require('eslint-config-standard-typescript-prettier/prettier'),
  parser: null,
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      options: {
        parser: 'typescript',
      },
    },
    {
      files: ['*.js', '*.jsx'],
      options: {
        parser: 'babel',
      },
    },
  ],
};
