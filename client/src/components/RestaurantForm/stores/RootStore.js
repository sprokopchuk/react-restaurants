import RestaurantStore from './RestaurantStore'

class RootStore {
  constructor(context) {
    this.restaurantStore = new RestaurantStore(context)
    this.fetchInitialRestaurantData()
  }

  fetchInitialRestaurantData() {
    this.restaurantStore.fetchRestaurants()
  }
}

export default RootStore
