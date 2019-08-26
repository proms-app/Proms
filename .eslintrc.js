module.exports = {
  extends: 'bambi',
  rules: {
    'prettier/prettier': 'error',
    'no-console': ['error', { allow: ['warn', 'error'] }],
    'no-undef': 'off',
    'promise/avoid-new': 'off',
  },
};
