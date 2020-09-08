import React, { useState, useEffect } from 'react';
import './ConfirmationModal.css';
import { useHistory } from "react-router-dom";
import {fadeIn} from 'react-animations';
import Radium, {StyleRoot} from 'radium';

export default function ConfirmationModal(props) {

    const history = useHistory();

    // useEffect(() => {
    //     props.barHandler(false);
    //   }, [props]);
    
    const styles= {
        fadeIn:{
            animation: "x 0.27s",
            animationName: Radium.keyframes(fadeIn, "fadeIn"),
        },
    };
    
    if (props.show === false) return null;
    return <div>
        <StyleRoot>
        <div className="ConfirmationContainer"></div>
        <div className='Confirmation' style={styles.fadeIn}>

            <div className='confirmationTitle'>REZERVARE CONFIRMATA</div>            

            <div className='confirmationSubTitle'>
                <p
                    className='text-confirmationSubTitle'
                    >Rezervarea dumneavoastra fost inregistrata cu succes. In scurt timp veti primi un e-mail cu confirmarea rezervarii si toate detaliile legate de aceasta. Abia asteptam sa ne vedem!
                    
                </p></div>
        <a 
            href="/"> 
            <button className='confirmationButton'
                // onClick = { ()=> {
                //     history.push('/')
                //     props.modalHandler(false)
                // }} 
            >ACASA</button> </a>  
        </div>
        </StyleRoot>
        </div>
        
}
