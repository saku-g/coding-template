module.exports = {
  extends: ['stylelint-config-recommended-scss', 'stylelint-prettier/recommended'],
  rules: {
    'prettier/prettier': [true, { singleQuote: true }],
    'string-quotes': 'single',
    'color-hex-length': 'short',
  },
};
