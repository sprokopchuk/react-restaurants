import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'
import { compose, withProps, withHandlers } from 'recompose'
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps'
import PropTypes from 'prop-types'

const enhance = compose(
  inject('store'),
  withProps(({ store }) => ({
    googleMapURL: "https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div className='MapLocation' />,
    mapElement: <div style={{ height: `100%` }} />,
    restaurantStore: store.restaurantStore
  })),
  withScriptjs,
  withGoogleMap,
  withHandlers({

  }),
  observer
)

class MapLocation extends Component {

  get defaultCenter() {
    return { lat: 49.0139, lng: 31.2858 }
  }

  render() {
    return (
      <GoogleMap
        defaultZoom={5}
        defaultCenter={this.defaultCenter}
      >
      </GoogleMap>
    )
  }
}

export default enhance(MapLocation)
