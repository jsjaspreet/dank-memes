const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common');
const projectPaths = require('../projectPaths')

module.exports = merge(common, {
  devtool: 'inline-source-map',
  output: {
    filename: '[name].[hash].js',
    chunkFilename: '[name].[hash].js',
    path: projectPaths.distDir
  },
  devServer: {
    hot: true,
    historyApiFallback: true,
    contentBase: projectPaths.distDir,
    publicPath: '/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ]
})
