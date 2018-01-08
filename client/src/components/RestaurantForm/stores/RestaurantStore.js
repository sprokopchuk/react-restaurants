import { observable, action } from 'mobx'

class RestaurantStore {

  constructor({ transport }) {
    this.transport
  }

  @observable name = ''

  @action('Set restaurant name')
  seRestaurantName(value) {
    this.name = value
  }

  @action('Fetch restaurants')
  fetchOptions(value) {
    if(value) {
      const restaurantOptions = [
        { value: 'grains', label: 'Bread, Cereal, Rice, and Pasta' },
        { value: 'vegetables', label: 'Vegetables' },
        { value: 'fruit', label: 'Fruit' },
        { value: 'dairy', label: 'Milk, Yogurt, and Cheese' },
        { value: 'meat', label: 'Meat, Poultry, Fish, Dry Beans, Eggs, and Nuts' },
        { value: 'fats', label: 'Fats, Oils, and Sweets' }
      ]
      return Promise.resolve({ options: restaurantOptions })
    } else {
      return Promise.resolve({ options: [] })
    }
  }
}

export default RestaurantStore
