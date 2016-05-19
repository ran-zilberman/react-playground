var webpack = require('webpack');
var CopyWebpackPlugin = require('copy-webpack-plugin');

var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'dist');
var SRC_DIR = path.resolve(__dirname, 'src/client-src');

var config = {
  devtool: 'source-map',
  entry: [
    'babel-polyfill',
    SRC_DIR + '/index.jsx'
  ],
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
        test : /\.jsx?$/,
        include : SRC_DIR,
        exclude: /node_modules/,
        loader : 'babel'
      },
      {
        test: /\.html$/,
        loader: "file?name=[name].[ext]"
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  plugins: [
    new CopyWebpackPlugin([
          { from: SRC_DIR + "/index.html" }
        ]),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    })
  ],
  node: {
    fs: 'empty',
    net: 'empty',
    tls: 'empty'
  }
};

module.exports = config;