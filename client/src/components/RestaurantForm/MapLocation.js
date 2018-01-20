import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'
import { compose, withProps, withHandlers, withContext } from 'recompose'
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps'
import PropTypes from 'prop-types'
import {isEmpty} from '../../utils/common';

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
    setLocation: props => ({ latLng }) => {
      props.restaurantStore.setLocation(latLng)
    }
  }),
  observer
)

class MapLocation extends Component {

  get defaultCenter() {
    return { lat: 49.0139, lng: 31.2858 }
  }

  get isLocationSet() {
    const { location } = this.props.restaurantStore
    return !isEmpty(location)
  }

  render() {
    const { setLocation, restaurantStore } = this.props
    return (
      <GoogleMap
        defaultZoom={6}
        defaultCenter={this.defaultCenter}
        onClick={setLocation}
      >
        { this.isLocationSet && <Marker position={restaurantStore.location} /> }
      </GoogleMap>
    )
  }
}

export default enhance(MapLocation)
