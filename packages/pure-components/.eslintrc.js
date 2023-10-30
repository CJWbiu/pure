const config = require('../../.eslintrc.js');

module.exports = {
  ...config,
  rules: {
    ...config.rules,
    '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: 'h' }],
    'react/no-unknown-property': [2, { ignore: ['class'] }],
    'react/jsx-key': 1,
  },
  settings: {
    react: {
      pragma: 'h',
    },
  },
};
