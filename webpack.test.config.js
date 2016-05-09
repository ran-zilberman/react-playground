var config = {
  devtool: 'inline-source-map', //just do inline source maps instead of the default
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel-loader' }
    ]
  }
};

module.exports = config;