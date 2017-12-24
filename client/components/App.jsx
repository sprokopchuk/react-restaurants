import React, { Component } from 'react'

export default class App extends Component {
  render() {
    return (
     <div style={{textAlign: 'center'}}>
         <button className="mdc-button mdc-button--raised mdc-ripple-surface">
             Print Greeting
         </button>
     </div>
    )
  }
}
