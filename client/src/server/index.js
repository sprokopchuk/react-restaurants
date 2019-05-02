const express = require('express')
const webpack = require('webpack')
const httpProxyMiddleware = require('http-proxy-middleware')
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')
const webpackHotServerMiddleware = require('webpack-hot-server-middleware')

const config = require('../../webpack.config.js');
const devServer = config[0].devServer
const compiler = webpack(config)

const app = express()

app.use('/api', httpProxyMiddleware(devServer.proxy['/api']))

app.use(webpackDevMiddleware(compiler, {
  noInfo: true
}))

app.use(webpackHotMiddleware(
  compiler.compilers.find(compiler => compiler.name === 'client'),
  { log: console.log, path: '/__webpack_hmr', heartbeat: 10 * 1000 }
))

app.use(webpackHotServerMiddleware(compiler))

app.listen(devServer.port)
