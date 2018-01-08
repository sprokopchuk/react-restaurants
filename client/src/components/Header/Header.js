import React from 'react'
import { Nav } from './Nav'

const Header = () => (
  <header className="mdc-toolbar">
    <div className="mdc-toolbar__row">
      <section className="mdc-toolbar__section mdc-toolbar__section--shrink-to-fit">
        <Nav />
      </section>
    </div>
  </header>
)

export default Header
