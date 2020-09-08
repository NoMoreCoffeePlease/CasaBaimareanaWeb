import React from 'react';
import { Icon } from '@iconify/react'
import locationIcon from '@iconify/icons-mdi/map-marker'
import {useHistory} from 'react-router-dom'


const LocationPin = ({ text }) => {
  const history=useHistory();
  return (
  <div className="pin" >
   <div className="row">
      <img src={require('../../svg/right-arrow.svg')} className="pinArrow" />
      <div className="pinHeader" onClick={
    ()=>{
      window.open('https://goo.gl/maps/ezGuSzQkrDDum1AJ7','_blank');
    }
  }>
        <span className="pinHeaderText">Casa Baimareana</span>
      </div>
    </div>
    <div className="pinBody" onClick={
    ()=>{
      window.open('https://goo.gl/maps/ezGuSzQkrDDum1AJ7','_blank');
    }
  }>
      <img src={require('../../svg/location.png')}/>
      <span className="pinBodyText">str. Vasile Alecsandri, nr. 39, Baia Mare 430306, Maramures <br></br>+40-7xx-xxx-xxx</span>
    </div>
    <div className="pinFooter" onClick={
    ()=>{
      history.push('/contact');
    }
  }>
      <span className="pinFooterText">Contacteaza-ne prin email</span>
    </div>

  </div>
)}

export default LocationPin;