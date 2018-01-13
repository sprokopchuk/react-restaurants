import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'
import { compose, withProps, withHandlers } from 'recompose'
import PropTypes from 'prop-types'


const enhance = compose(
  inject('store'),
  withProps(({ store }) => ({
    restaurantStore: store.restaurantStore
  })),
  withHandlers({

  }),
  observer
)

class MapLocation extends Component {

  render() {
    return (
      <div className='mdc-layout-grid__inner'>
        <div className='mdc-layout-grid__cell mdc-layout-grid__cell--span-2'>
        </div>
        <div className='mdc-layout-grid__cell mdc-layout-grid__cell--span-7'>
          <div className='MapLocation'>
            <div className='MapLocation-wrapper' />
          </div>
        </div>
      </div>
    )
  }
}

export default enhance(MapLocation)
