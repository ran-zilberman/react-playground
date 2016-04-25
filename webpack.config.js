var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'dist');
var SRC_DIR = path.resolve(__dirname, 'src');
var APP_COMPONENT_LOCATION = path.resolve(__dirname, 'src/components/app');

var config = {
  entry: {
    javascript: APP_COMPONENT_LOCATION + '/index.jsx',
    html: SRC_DIR + "/index.html"
  },
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
  module : {
    loaders : [
      {
        test : /\.jsx?/,
        include : SRC_DIR,
        loader : 'babel'
      },
      {
        test: /\.html$/,
        loader: "file?name=[name].[ext]"
      }
    ]
  }
};

module.exports = config;