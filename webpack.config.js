const path = require('path');

module.exports = {
  entry: './popup.js', // Entry point for your extension's JS
  output: {
    filename: 'popup.js', // Output file will overwrite the unbundled popup.js
    path: path.resolve(__dirname)
  },
  mode: 'production', // You can use 'development' during testing
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'] // Transpile ES6+ to ES5
          }
        }
      }
    ]
  }
};
