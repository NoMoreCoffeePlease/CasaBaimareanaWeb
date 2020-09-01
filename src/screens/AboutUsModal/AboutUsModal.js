import React, { useState, useEffect } from 'react';
import './AboutUsModal.css';
import { useHistory } from "react-router-dom";

export default function AboutUsModal(props) {

    const history = useHistory();
    useEffect(()=>{
        props.barHandler(false);
    },[props])

    if (props.show === false) return null;
return  <div className='Modal'>
     <div
        onClick={() => { props.modalHandler(false);history.push("/") }}
    >
        <img src={require('../../svg/close-black.svg')} className='closeButton' alt="test" />
    </div>
    <div className="aboutContainer">
          <h2 className="aboutTitle">ABOUT US</h2>
    
    </div>
      

        
</div>
 }