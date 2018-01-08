import React, { PureComponent } from 'react'
import { Provider } from 'mobx-react'
import RestaurantForm from './RestaurantForm'
import rootStoreInstance from './stores/rootStoreInstance'

class StateFulRestaurantForm extends PureComponent {
  render() {
    return (
      <Provider store={rootStoreInstance} >
        <RestaurantForm />
      </Provider>
    )
  }
}

export default StateFulRestaurantForm
