import RestaurantStore from './RestaurantStore'

class RootStore {
  constructor({ transport }) {
    this.transport = transport
    this.restaurantStore = new RestaurantStore()
  }
}

export default RootStore
