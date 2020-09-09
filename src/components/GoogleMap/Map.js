import React, {useState} from 'react'
import GoogleMapReact from 'google-map-react'
import './map.css'
import LocationPin from './LocationPin';
import SecondaryPin from './SecondaryPin';

// TO DO: Pins in maps.
const Map = ({ location, zoomLevel, secondary }) => {
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
          yesIWantToUseGoogleMapApiInternals
          options={MAP_OPTIONS}
        >
          
          {secondary.map(item=> <SecondaryPin 
            lat={item.lat}
            lng={item.lng}
            title={item.title}
            address={item.address}
            image={item.image}
            mapLink={item.mapLink}
          />)}
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