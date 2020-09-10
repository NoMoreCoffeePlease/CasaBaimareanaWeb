import React, {useState} from 'react';
import { styles } from 'react-animations/lib/swing';
import {fadeIn} from 'react-animations';
import Radium, {StyleRoot} from 'radium';

const SecondaryPin = (props) => {
  return (
    <div 
      className='secondaryPin-mainContainer'
      
    >
      <div 
        className='secondaryPin-container'
        onMouseEnter={()=>props.onMouseEnter({
          lng:props.lng,
          lat:props.lat,
          title:props.title,
          address:props.address,
          mapLink: props.mapLink,
          image:props.image,
          visible: true
        })}
        onMouseLeave={()=>props.onMouseEnter({
          lng:props.lng,
          lat:props.lat,
          title:props.title,
          address:props.address,
          mapLink: props.mapLink,
          image:props.image,
          visible: false
        })}
        onClick={
          ()=>{
            window.open(props.mapLink,'_blank');
          }
        }
      >
        <img src={require('../../svg/place-black.svg')} alt='' className='secondaryPin-icon' />
      </div>
    </div>
  )

}


export default SecondaryPin;

