var path = require('path')
var dotenv = require('dotenv')

dotenv.load({
  silent: true,
  path: path.resolve(__dirname + '/.env'),
})

module.exports = {
  entry: {
    app: ['./src/index.js'],
  },

  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
  },

  node: {
    fs: 'empty',
  },

  resolve: {
    symlinks: false,
    modules: ['src', 'node_modules', path.resolve('node_modules')],
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loaders: ['babel-loader'],
      },
    ],
  },
}
