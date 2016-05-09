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
    webpack: require('./webpack.test.config'),
    webpackServer: {
      noInfo: true //please don't spam the console when running in karma!
    },
    webpackMiddleware: {
      noInfo: true
    }
  });
};