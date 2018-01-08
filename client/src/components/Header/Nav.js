import React from 'react'
import { NavLink } from 'react-router-dom'

export const Nav = () => (
<nav className='mdc-tab-bar'>
  <NavLink
    exact
    activeClassName='mdc-tab--active'
    className='mdc-tab'
    to='/'>
    Home
  </NavLink>
  <NavLink
    activeClassName='mdc-tab--active'
    className='mdc-tab'
    to='/restaurants/new'>
    Restaurants
  </NavLink>
  <NavLink
    activeClassName='mdc-tab--active'
    className='mdc-tab'
    to='/about_us'>
    About Us
  </NavLink>
  <span className='mdc-tab-bar__indicator' />
</nav>
)

