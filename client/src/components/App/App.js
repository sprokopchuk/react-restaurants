import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import { Header } from '..'
import routes from '../../config/routes'

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        { routes.map((route, index) => <Route {...route} key={index}/> )}
      </div>
    )
  }
}
