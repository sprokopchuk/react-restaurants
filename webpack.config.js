const webpack = require('webpack')
const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const ExtractTextPluginConfig = new ExtractTextPlugin('style.css')
const nodeExternals = require('webpack-node-externals')
const CleanWebpackPlugin = require('clean-webpack-plugin')

const server = {
  name: 'server',
  target: 'node',
  externals: nodeExternals(),
  entry: './client/src/server/serverRenderer',
  output: {
    path: path.resolve('dist'),
    filename: 'server.js',
    libraryTarget: 'commonjs2',
    publicPath: '/'
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ }
    ]
  }
}

const client = {
  name: 'client',
  entry: [
    'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000',
    './client/src/index.js'
  ],
  output: {
    path: path.resolve('dist'),
    filename: 'index.js',
    publicPath: '/'
  },
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:3001'
      }
    },
    port: 3000
  },
  module: {
    loaders: [
      { test: /\.scss$/,
        use: ExtractTextPlugin.extract(
            { fallback: 'style-loader', use: ['css-loader',
                { loader: 'sass-loader', options: { includePaths: ["node_modules"]}}]}
        )},
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ }
    ]
  },
  plugins: [
    ExtractTextPluginConfig,
    new CleanWebpackPlugin(['dist']),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ]
}

module.exports = [client, server]
