import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'
import { compose, withProps, withHandlers } from 'recompose'
import { AsyncCreatable } from 'react-select'
import { PropTypes } from 'prop-types'

const enhance = compose(
  inject('store'),
  withProps(({ store }) => ({
    restaurantStore: store.restaurantStore
  })),
  withHandlers({
    handleChangeOnName: props => (value) => {
      props.restaurantStore.seRestaurantName(value)
    },
    fetchOptions: props => (value) => (
      props.restaurantStore.fetchOptions(value)
    )
  }),
  observer
)

class Select extends Component {
  inputRenderer(inputProps) {
    const { className, ...opts } = inputProps
    return (
      <div className='mdc-text-field RestaurantForm-selectInput'>
        <input type='text' id='restaurant-name' className='mdc-text-field__input' {...opts} />
      </div>
    )
  }

  render() {
    const { restaurantStore, handleChangeOnName, fetchOptions } = this.props
    return (
      <AsyncCreatable
        className='mdc-select RestaurantForm-field'
        value={restaurantStore.name}
        inputRenderer={this.inputRenderer}
        onChange={handleChangeOnName}
        loadOptions={fetchOptions}
        instanceId='restaurant-name'
        placeholder='Pick a restaurant name or write your own' />
    )
  }
}

Select.propTypes = {
  restaurantStore: PropTypes.shape({
    name: PropTypes.string.isRequired,
    seRestaurantName: PropTypes.func.isRequired
  }),
  handleChangeOnName: PropTypes.func.isRequired,
  fetchOptions: PropTypes.func.isRequired
}


export default enhance(Select)
