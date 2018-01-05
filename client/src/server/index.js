import express from 'express'
import webpack from 'webpack'
import httpProxyMiddleware from 'http-proxy-middleware'
import webpackDevMiddleware from 'webpack-dev-middleware'
import webpackHotMiddleware from 'webpack-hot-middleware'
import webpackHotServerMiddleware from 'webpack-hot-server-middleware'
import { serverRenderer } from './serverRenderer'

const config = require('../../../webpack.config.js');
const devServer = config[0].devServer
const compiler = webpack(config)

const app = express()

app.use('/api', httpProxyMiddleware(devServer.proxy['/api']))

app.use(webpackDevMiddleware(compiler, {
  noInfo: true
}))

// app.use(webpackHotServerMiddleware(compiler))

app.use(webpackHotMiddleware(
  compiler.compilers.find(compiler => compiler.name === 'client'),
  { log: console.log, path: '/__webpack_hmr', heartbeat: 10 * 1000 }
))

app.use(serverRenderer())

app.listen(devServer.port)

