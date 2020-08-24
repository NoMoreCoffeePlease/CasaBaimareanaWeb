import React, { useState, useEffect } from 'react';
import './CityModal.css';
import { useHistory } from "react-router-dom";

export default function CityModal(props) {

    const history = useHistory();
    useEffect(()=>{
        props.barHandler(false);
    },[props])

    if (props.show === false) return null;
    return <div>
        <div className="ModalContainer"></div>
        <div className='Modal'>
            <div
                onClick={() => { props.modalHandler(false);history.push("/") }}
            >
                <img src={require('../../svg/close-black.svg')} className='closeButton' alt="test" />
            </div>

            <div className='title'>CityTitle test</div>            

            <div className='subTitle'>Subtitlu test</div>
                
        </div>
        </div>
        
}