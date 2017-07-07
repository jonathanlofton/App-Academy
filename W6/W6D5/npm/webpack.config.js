var path = require('path');

module.exports = {
  entry: "./entry.jsx",
  devtool: 'source-map',
  resolve: {
    extensions: ['.js', '.jsx', '*']
  },
  output: {
      filename: "bundle.js"
  },
  module: {
    loaders: [
      {
        test: [/\.jsx?$/],
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  }
};
