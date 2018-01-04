import React from 'react'
import { Home, AboutUs, RestaurantForm } from '../components'

const routes = [
  { path: '/',
    exact: true,
    component: () => ( <Home/> )
  },
  { path: '/about_us',
    component: () => ( <AboutUs/> )
  },
  { path: '/restaurants/new',
    component: () => ( <RestaurantForm/> )
  }
]
export default routes
