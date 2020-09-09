import React, {useState} from 'react';
import { styles } from 'react-animations/lib/swing';
import {fadeIn} from 'react-animations';
import Radium, {StyleRoot} from 'radium';

const stylesAnimations= {
  fadeIn:{
      animation: "x 0.4s",
      animationName: Radium.keyframes(fadeIn, "fadeIn"),
  },
};

const InfoPin = (props) => {
  return (
    <StyleRoot>
    <div 
      className="secondaryPin-info" 
      onMouseEnter={()=>props.setIsShown(true)}
      onMouseLeave={()=>props.setIsShown(false)}
      onClick={
        ()=>{
          window.open(props.mapLink,'_blank');
        }
      }
    >    
      <div className="secondaryPin-body" style={stylesAnimations.fadeIn}>        
        <span className="secondaryPin-title"> {props.title}</span>
        <span className="secondaryPin-address"> {props.address}</span>
        <img src={props.image} className='secondaryPin-image'/>
      </div>   
      
    </div>
    </StyleRoot>
  )
}

const SecondaryPin = (props) => {
  
  const [isShown, setIsShown] =useState(false);
  return (
    <div 
      className='secondaryPin-mainContainer'
      
    >
      <div 
        className='secondaryPin-container'
        onMouseEnter={()=>setIsShown(true)}
        onMouseLeave={()=>setIsShown(false)}
        onClick={
          ()=>{
            window.open(props.mapLink,'_blank');
          }
        }
      >
        <img src={require('../../svg/place-black.svg')} alt='' className='secondaryPin-icon' />
      </div>
     { isShown &&<InfoPin setIsShown={setIsShown} title={props.title} address={props.address} image={props.image} mapLink={props.mapLink}/>}
    </div>
  )

}


export default SecondaryPin;

