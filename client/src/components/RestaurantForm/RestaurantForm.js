import { observer, inject } from 'mobx-react'
import React, { Component } from 'react'
import { compose, withProps } from 'recompose'
import PropTypes from 'prop-types'
import Select from './Select'
import MapLocation from './MapLocation'

const enhance = compose(
   inject('store'),
   withProps(({ store }) => ({
     restaurantStore: store.restaurantStore
   })),
   observer
)

class RestaurantForm extends Component {

  render() {
    return (
      <div className='mdc-layout-grid'>
        <MapLocation />
        <div className='mdc-layout-grid__inner'>
          <div className='mdc-layout-grid__cell mdc-layout-grid__cell--span-3'>
          </div>
          <div className='mdc-layout-grid__cell mdc-layout-grid__cell--span-5'>
            <form className='RestaurantForm'>
              <Select />
              <div className='mdc-text-field RestaurantForm-field'>
                <input type='text' className='mdc-text-field__input' id='restaurant-city' placeholder='City'/>
                <div className='mdc-text-field__bottom-line' />
              </div>
              <div className='mdc-text-field RestaurantForm-field'>
                <input type='text' className='mdc-text-field__input' id='restaurant-address' placeholder='Address'/>
                <div className='mdc-text-field__bottom-line' />
              </div>
              <div className='mdc-text-field RestaurantForm-field'>
                <input type='text' className='mdc-text-field__input' id='restaurant-zip' placeholder='Zip'/>
                <div className='mdc-text-field__bottom-line' />
              </div>
              <div className='mdc-text-field RestaurantForm-field'>
                <input type='text' className='mdc-text-field__input' id='restaurant-phone-number' placeholder='Phone number'/>
                <div className='mdc-text-field__bottom-line' />
              </div>
              <div className='mdc-text-field mdc-text-field--textarea mdc-text-field--fullwidth'>
                <textarea id='restaurant-description' className='mdc-text-field__input' rows='8' placeholder='Description'></textarea>
              </div>
              <div className='mdc-text-field'>
                <button className='mdc-button mdc-button--raised' type='submit'>Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default enhance(RestaurantForm)
