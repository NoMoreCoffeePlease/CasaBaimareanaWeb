import React from 'react'
import GoogleMapReact from 'google-map-react'
import './map.css'
import LocationPin from './LocationPin'



const Map = ({ location, zoomLevel }) => {
  const MAP_OPTIONS = {
    scrollwheel: false,
  }
  return (
    <div className="map">
      {/* <h2 className="map-h2">Come Visit Us At Our Campus</h2> */}

      <div className="google-map">
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyCl3brjRuXdpY4GilenljnIHM-sXlK6560' }}
          defaultCenter={location}
          defaultZoom={zoomLevel}
          options={MAP_OPTIONS}
        >
          <LocationPin
            lat={location.lat}
            lng={location.lng}
            text={location.address}
          />
        </GoogleMapReact>
      </div>
    </div>)
}
export default Map;