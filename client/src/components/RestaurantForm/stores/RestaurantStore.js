import { observable, action } from 'mobx'

class RestaurantStore {

  constructor({ transport }) {
    this.transport = transport
  }

  @observable name = ''
  @observable restaurants = []
  @observable location = {}

  @action('Set restaurant name')
  seRestaurantName(value) {
    this.name = value
  }

  @action('Fetch options')
  fetchOptions(value) {
    if (!value) {
      return Promise.resolve({ options: [] })
    } else {
      return Promise.resolve({ options: Array.from(this.restaurants) })
    }
  }

  fetchRestaurants() {
    return this.transport.Restaurant.getRestaurants()
      .then(action('Fetch all restaurants', resp => {
        this.restaurants = resp.data.map(item => ({ name: item.id, label: item.name }))
      }))
  }

  @action('Set location')
  setLocation(value) {
    this.location = { lat: value.lat(), lng: value.lng() }
  }
}

export default RestaurantStore
