module.exports = {
  extends: [
    'stylelint-config-recommended-scss',
    'stylelint-prettier/recommended',
    'stylelint-config-property-sort-order-smacss',
  ],
  overrides: [
    {
      files: ['**/*.{css,scss}'],
      rules: {
        'color-hex-length': 'short',
        'no-descending-specificity': null, // 詳細度の高いセレクタの後に詳細度の低いセレクタ
        'no-duplicate-selectors': null, // セレクタの重複
      },
    },
  ],
  ignoreFiles: ['**/node_modules/**'],
};
