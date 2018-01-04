import express from 'express'
import webpack from 'webpack'
import webpackDevMiddleware from 'webpack-dev-middleware'
import webpackHotMiddleware from 'webpack-hot-middleware'
import React from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter, Route } from 'react-router'
import { App } from './components'
import template from './config/template'

const config = require('../../webpack.config.js');
const compiler = webpack(config)

const app = express()

app.use(webpackDevMiddleware(compiler, {
  publicPath: '/',
  serverSideRender: true
}))

app.use(webpackHotMiddleware(
  compiler.compilers.find(compiler => compiler.name === 'client'),
  { log: console.log, path: '/__webpack_hmr', heartbeat: 10 * 1000 }
))

app.use((req, res) => {
  const initialState = {}
  const context = {}
  const appString = renderToString(
    <StaticRouter
      location={req.url}
      context={context}
    >
      <App {...initialState} />
    </StaticRouter>
  )

  res.status(200).send(template({
    body: appString,
    initialState: JSON.stringify(initialState)
  }))
})

app.listen(3000)
