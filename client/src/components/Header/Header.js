import React from 'react'

const Header = () => (
<header className="mdc-toolbar">
  <div className="mdc-toolbar__row">
    <section className="mdc-toolbar__section mdc-toolbar__section--shrink-to-fit">
      <nav className="mdc-tab-bar">
        <a className="mdc-tab mdc-tab--active">Home</a>
        <a className="mdc-tab">Restaurants</a>
        <a className="mdc-tab">About Us</a>
        <span className="mdc-tab-bar__indicator" />
      </nav>
    </section>
  </div>
</header>
)

export default Header
