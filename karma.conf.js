//var webpackConfig = require('./webpack.test.config');

module.exports = function (config) {
  config.set({
    browsers: [ 'PhantomJS' ], //run in PhantomJS
    singleRun: true, //just run once by default
    frameworks: [ 'jasmine' ], //use the jasmine test framework
    files: [
      'test/**/*.js'
    ],
    plugins: ['karma-phantomjs-launcher', 'karma-sourcemap-loader', 'karma-jasmine', 'karma-webpack'],
    preprocessors: {
      'test/**/*.js': [ 'webpack', 'sourcemap' ] //preprocess with webpack and our sourcemap loader
    },
    reporters: [ 'dots' ], //report results in this format
    webpack: {
      devtool: 'inline-source-map', //just do inline source maps instead of the default
      module: {
        noParse: /node_modules\/json-schema\/lib\/validate\.js/,
        loaders: [
          {test: /\.json$/, loaders:['json-loader'] },
          { test: /\.jsx?$/, loader: 'babel', exclude: /node_modules/ }
        ]
      },
      resolve: {
        extensions: ['', '.js', '.jsx']
      },
      externals: {
        'cheerio': 'window',
        'jsdom': 'window',
        'react/lib/ReactContext': true,
        'react/lib/ExecutionEnvironment': true,
        'react/addons': true
      },
      node: {
        fs: 'empty',
        net: 'empty',
        tls: 'empty'
      }
    },
    webpackServer: {
      noInfo: true //please don't spam the console when running in karma!
    },
    webpackMiddleware: {
      noInfo: true
    }
  });
};