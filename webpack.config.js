var webpack = require('webpack');
var CopyWebpackPlugin = require('copy-webpack-plugin');

var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'dist');
var SRC_DIR = path.resolve(__dirname, 'src/client-src');

var config = {
  entry: {
    javascript: SRC_DIR + '/index.jsx'
  },
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
  devServer: {
    outputPath: BUILD_DIR,
    hot: true
  },
  module : {
    loaders : [
      {
        test: /\.json$/,
        loaders:['json-loader']
      },
      {
        test : /\.js?/,
        include : SRC_DIR,
        loader : 'babel'
      },
      {
        test: /\.html$/,
        loader: "file?name=[name].[ext]"
      }
    ]
  },
  plugins: [
    new CopyWebpackPlugin([
        // {output}/file.txt
          { from: SRC_DIR + "/index.html" }
        ])
  ],
  node: {
    //console: 'empty',
    fs: 'empty',
    net: 'empty',
    tls: 'empty'
  }
};

module.exports = config;