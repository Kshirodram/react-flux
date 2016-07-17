/* eslint-disable */
var path = require('path'),
  ExtractTextPlugin = require('extract-text-webpack-plugin'),
  glob = require('glob'),
  webpack = require('webpack'),
  readFileSync = require('fs').readFileSync;

module.exports = {
  devtool: 'source-map',
  entry: glob.sync('./components/index.js'),
  debug : true,
  output: {
    path: path.join(__dirname, './dist'),
    filename: 'main.js'
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: [/node_modules/, /dist/],
      loader: 'babel-loader',
      query: {
        presets: ['es2015', 'react'],
        plugins: [
          ['transform-es2015-classes', {loose: true}]
        ]
      }
    }]
  }
};
