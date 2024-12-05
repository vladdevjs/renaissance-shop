module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ['plugin:vue/essential', '@vue/airbnb', '@vue/typescript/recommended'],
  parserOptions: {
    ecmaVersion: 2020,
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'vuejs-accessibility/click-events-have-key-events': 'off',
    'implicit-arrow-linebreak': 'off',
    'comma-dangle': ['error', 'only-multiline'],
    'function-paren-newline': ['error', 'consistent'],
    'max-len': 'off',
    'function-paren-newline': 'off',
  },
};
