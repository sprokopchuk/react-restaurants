import React from 'react'
import { Route } from 'react-router-dom'
import { Home, AboutUs, RestaurantForm } from '..'

const Routes = () => {
  return (
    <div>
      <Route exact path='/' component={Home} />
      <Route path='/about_us' component={AboutUs} />
      <Route path='/restaurants/new' component={RestaurantForm} />
    </div>
  )
}

export default Routes
