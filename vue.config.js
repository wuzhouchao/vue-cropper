const path = require('path');
const HardSourceWebpackPlugin = require('hard-source-webpack-plugin');
const resolve = dir => path.join(__dirname, dir);

module.exports = {
  transpileDependencies: ['vuex-module-decorators'],
  outputDir: 'build',
  assetsDir: 'static',
  filenameHashing: false,
  devServer: {
    hot: true,
    disableHostCheck: true,
    port: process.env.PORT | 8089,
    inline: false,
    overlay: {
      warnings: false,
      errors: true,
    },
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  },
  // 第三方插件配置
  pluginOptions: {
  },
  configureWebpack: {
    externals: {},
    resolve: {
      alias: {
        '~': resolve('.'),
        '@': resolve('src'),
      },
    },
    plugins: [new HardSourceWebpackPlugin()],
    output: {
      libraryTarget: 'umd',
    },
  },
};
