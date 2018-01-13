import RestaurantStore from './RestaurantStore'

class RootStore {
  constructor(context) {
    this.restaurantStore = new RestaurantStore(context)
    this.fetchInitialData()
  }

  fetchInitialData() {
    this.fetchInitialRestaurantData()
  }

  fetchInitialRestaurantData() {
    this.restaurantStore.fetchRestaurants()
  }
}

export default RootStore
