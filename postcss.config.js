module.exports = {
  plugins: [
    require('autoprefixer')({
      grid: true,
    }),
    require('css-declaration-sorter')({
      order: 'smacss',
    }),
    require('postcss-sort-media-queries'),
  ],
};
