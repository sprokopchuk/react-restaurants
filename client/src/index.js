import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import App from './components/App'
import './main.scss'

const initialState = {}

const render = (Component, state) => {
  ReactDOM.hydrate(
    <BrowserRouter>
      <Component {...state}/>
    </BrowserRouter>,
  document.getElementById('root'))
}

render(App)

if (module.hot) {
  module.hot.accept('./components/App', () => {
    render(App, initialState)
  })
}
