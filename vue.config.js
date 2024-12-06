const path = require('path');

module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
      },
    },
  },
  publicPath: '/renaissance-shop/',
  devServer: {
    proxy: 'http://localhost:8080',
  },
};
