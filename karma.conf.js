module.exports = function(config) {
  config.set({
    frameworks: ['mocha', 'chai'],
    files: [
      'node_modules/p5/lib/p5.min.js',
      // 'node_modules/planck/dist/planck.min.js',
      // 'node_modules/p5.play/p5.play.js',
      'dist/p5.novel.js',
      'test/**/*.js',
    ],
    reporters: ['progress'],
    port: 9876, // karma web server port
    colors: true,
    logLevel: config.LOG_INFO,
    browsers: ['ChromeHeadless'],
    autoWatch: false,
    // singleRun: false, // Karma captures browsers, runs the tests and exits
    concurrency: Infinity,
  });
};
