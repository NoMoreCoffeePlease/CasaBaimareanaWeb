import React from 'react';
import { Icon } from '@iconify/react'
import locationIcon from '@iconify/icons-mdi/map-marker'

const LocationPin = ({ text }) => (
  <div className="pin">
   <div className="row">
      <img src={require('../../svg/right-arrow.svg')} className="pinArrow" />
      <div className="pinHeader">
        <span className="pinHeaderText">Casa Baimareana</span>
      </div>
    </div>
    <div className="pinBody">
      <img src={require('../../svg/location.png')}/>
      <span className="pinBodyText">str. Vasile Alecsandri, nr. 39, Baia Mare, Maramures <br></br>+40-7xx-xxx-xxx</span>
    </div>
    <div className="pinFooter">
      <span className="pinFooterText">Contacteaza-ne prin email</span>
    </div>

  </div>
)

export default LocationPin;