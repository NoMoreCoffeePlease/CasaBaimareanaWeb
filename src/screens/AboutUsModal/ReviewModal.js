import React, { useState, useEffect } from 'react';
import './ReviewModal.css';
import { useHistory } from "react-router-dom";
import {fadeIn} from 'react-animations';
import Radium, {StyleRoot} from 'radium';


export default function ReviewModal(props) {

    const history = useHistory();
    useEffect(()=>{
        props.barHandler(false);
    },[props])
    const styles= {
        fadeIn:{
            animation: "x 0.27s",
            animationName: Radium.keyframes(fadeIn, "fadeIn"),
        },
    };
    if (props.show === false) return null;
    return <div>
        <StyleRoot>
        <div className="ModalContainer"></div>
        <div className='miniModal' style = {styles.fadeIn}>
            <div
                onClick={() => { props.modalHandler(false);history.push("/") }}
            >
                <img src={require('../../svg/close-black.svg')} className='closeButton' alt="test" />
            </div>

            <div className='ReviewTitle'>Descopera orasul</div>            
               
        </div>
        </StyleRoot>
        </div>
        
}
