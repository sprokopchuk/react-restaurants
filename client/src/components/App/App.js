import React, { Component } from 'react'
import { Card, Header } from '../'

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <main className='mdc-layout-grid'>
         <div className="mdc-layout-grid__inner">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </main>
      </div>
    )
  }
}
