import React from 'react'

const template = ({ body, initialState }) => {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <title>Food app</title>
        <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700" rel="stylesheet">
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
        <link rel="stylesheet" href="style.css" />
        <script>window.__APP_INITIAL_STATE__ = ${initialState}</script>
      </head>
      <body class='mdc-typography'>
        <div id="root">${body}</div>
      </body>
      <script src="index.js"></script>
    </html>
  `
}

export default template
