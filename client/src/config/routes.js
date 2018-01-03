import React from 'react'
import { Home, AboutUs } from '../components'

const routes = [
  { path: '/',
    exact: true,
    component: () => ( <Home/> )
  },
  { path: '/about_us',
    component: () => ( <AboutUs/> )
  }
]
export default routes
