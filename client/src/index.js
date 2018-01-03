import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route } from 'react-router-dom'
import App from './components/App'
import routes from './config/routes'
import './main.scss'

const initialState = {}

ReactDOM.hydrate(
  <BrowserRouter>
    <App {...initialState } />
  </BrowserRouter>
, document.getElementById('root'))

