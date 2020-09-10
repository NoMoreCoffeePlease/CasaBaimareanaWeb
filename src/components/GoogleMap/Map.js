import React, { useState } from 'react'
import GoogleMapReact from 'google-map-react'
import './map.css'
import LocationPin from './LocationPin';
import SecondaryPin from './SecondaryPin';
import Radium, {StyleRoot} from 'radium';
import {fadeIn} from 'react-animations';

const stylesAnimations= {
  fadeIn:{
      animation: "x 0.4s",
      animationName: Radium.keyframes(fadeIn, "fadeIn"),
  },
};
const Map = ({ location, zoomLevel, secondary }) => {
  const MAP_OPTIONS = {
    scrollwheel: false,
  }
  const [infoPin, setInfoPin] = useState({
    lng:0,
    lat:0,
    title:'',
    address:'',
    mapLink: '',
    image:'',
    visible: false
  })

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


          <LocationPin
            lat={location.lat}
            lng={location.lng}
            text={location.address}
          />

          {secondary.map(item => <SecondaryPin
            lat={item.lat}
            lng={item.lng}
            title={item.title}
            address={item.address}
            image={item.image}
            mapLink={item.mapLink}
            onMouseEnter={setInfoPin}
            onMouseLeave={setInfoPin}
          />)}

          {infoPin.visible && <StyleRoot
            lng={infoPin.lng}
            lat={infoPin.lat}
          >
            <div
              className="secondaryPin-info"
              onMouseEnter={()=>setInfoPin({
                lng:infoPin.lng,
                lat:infoPin.lat,
                title:infoPin.title,
                address:infoPin.address,
                mapLink:infoPin.mapLink,
                image:infoPin.image,
                visible: true
              })}
              onMouseLeave={()=>setInfoPin({
                lng:infoPin.lng,
                lat:infoPin.lat,
                title:infoPin.title,
                address:infoPin.address,
                mapLink:infoPin.mapLink,
                image:infoPin.image,
                visible: false
              })}
              onClick={
                () => {
                  window.open(infoPin.mapLink, '_blank');
                }
              }
            >
              <div className="secondaryPin-body" style={stylesAnimations.fadeIn}>
                <span className="secondaryPin-title"> {infoPin.title}</span>
                <span className="secondaryPin-address"> {infoPin.address}</span>
                <img src={infoPin.image} className='secondaryPin-image' />
              </div>

            </div>
          </StyleRoot>}
        </GoogleMapReact>
      </div>
    </div>)
}
export default Map;