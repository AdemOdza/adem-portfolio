module.exports = {
  extends: [
    'eslint:recommended', 
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended'],
  env: {
    es6: true,
    browser: true,
    node: true
  },
  rules: {
    'eol-last': 'error',
  },
  overrides: [
    {
      files: [
        '**/*.test.js'
      ],
      env: {
        'jest/globals': true // now **/*.test.js files' env has both es6 *and* jest
      },
      plugins: ['jest'],
      extends: ['plugin:jest/recommended'],
      rules: {
        'jest/no-disabled-tests': 'warn',
        'jest/no-identical-title': 'error',
        'jest/prefer-to-have-length': 'warn',
        'jest/valid-expect': 'error'
      }
    }
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  root: true,
};
