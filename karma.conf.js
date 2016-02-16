// Karma configuration
// Generated on Mon Feb 15 2016 18:40:57 GMT-0800 (PST)
module.exports = function karmaConfig (config) {
  config.set({
    frameworks: ['jasmine'],

    reporters: [
      'progress',
      'coverage'
    ],

    files: [
      'src/tests.webpack.js'
    ],

    preprocessors: {
      'src/tests.webpack.js': ['sourcemap', 'webpack']
    },

    browsers: ['Chrome'],

    singleRun: true,

    // Configure code coverage reporter
    coverageReporter: {
      dir: 'build/coverage/',
      reporters: [
        {type: 'text-summary'},
        {type: 'html'}
      ]
    },

    webpack: require('./webpack.config')('test'),

    // Hide webpack build information from output
    webpackMiddleware: {
      noInfo: true
    },
    plugins: [
      require('babel-core'),
      require('babel-loader'),
      require('babel-preset-es2015'),
      require("karma-jasmine"),
      require("karma-chrome-launcher")
    ]
  });
};