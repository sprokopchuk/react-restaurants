import axios from 'axios'

const Restaurant = {
  getRestaurants: () => axios.get('/api/restaurants')
}

export default {
  Restaurant
}
