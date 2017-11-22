const webpack = require('webpack')
const merge = require('webpack-merge');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')
const ZopfliPlugin = require('zopfli-webpack-plugin')
const common = require('./webpack.common');

module.exports = merge(common, {
  devtool: '',
  plugins: [
    new UglifyJSPlugin({
      parallel: true,
      sourceMap: true,
      exclude: /node_modules/
    }),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new ZopfliPlugin({
      asset: "[path].gz[query]",
      algorithm: "zopfli",
      test: /\.(js|html)$/,
      threshold: 10240,
      deleteOriginalAssets: true,
      minRatio: 0.8
    })
  ]
})
