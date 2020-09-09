import React, {useState} from 'react';

import {useHistory} from 'react-router-dom';
import {fadeIn} from 'react-animations';
import Radium, {StyleRoot} from 'radium';

const stylesAnimations= {
  fadeIn:{
      animation: "x 0.4s",
      animationName: Radium.keyframes(fadeIn, "fadeIn"),
  },
};

const InfoPin =({history, setIsShown}) => {
  return (
    <StyleRoot>
    <div 
      className="pin"
      onMouseEnter={()=>setIsShown(true)}
      onMouseLeave={()=>setIsShown(false)}
      style={stylesAnimations.fadeIn}  
    >
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
        <img src={require('../../svg/place-black.svg')} className='locationIcon'/>
        <span className="pinBodyText">str. Vasile Alecsandri, nr. 39, Baia Mare 430306, Maramures <br></br>+40-7xx-xxx-xxx</span>
      </div>
      <div className="pinFooter" onClick={
      ()=>{
        history.push('/contact');
      }
    }>
        <span className="pinFooterText">Contacteaza-ne prin email</span>
      </div>

    </div></StyleRoot>
  )
}

const LocationPin = () => {
  const history=useHistory();
  const [isShown, setIsShown] =useState(true);
  return (
    <div 
      className='pinMainContainer'
      
    >
      <div 
        className='simplePinContainer'
        onMouseEnter={()=>setIsShown(true)}
        onMouseLeave={()=>setIsShown(false)}
        onClick={
          ()=>{
            window.open('https://goo.gl/maps/ezGuSzQkrDDum1AJ7','_blank');
          }
        }
      >
        <img src={require('../../svg/place-black.svg')} alt='' className='simplePin' />
      </div>
     { isShown &&<InfoPin history={history} setIsShown={setIsShown} />}
    </div>
  )

}


export default LocationPin;

