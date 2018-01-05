import React from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router'
import { App } from '../components'
import template from '../config/template'

export const serverRenderer = () => (req, res, next) => {
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
}

