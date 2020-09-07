import React, { useState, useEffect } from 'react';
import './AboutUsModal.css';
import { useHistory } from "react-router-dom";
import {fadeIn} from 'react-animations';
import Radium, {StyleRoot} from 'radium';
import CarouselComponent from '../../components/CarouselComponent/CarouselComponent'


export default function AboutUsModal(props) {

    const roomPics =[
        require('../../svg/room.jfif'),
        require('../../svg/room.jfif'),
        require('../../svg/room.jfif'),
        require('../../svg/room.jfif'),
        require('../../svg/room.jfif'),
        require('../../svg/room.jfif'),
        require('../../svg/room.jfif')
    ]

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
        <div className='Modal' style = {styles.fadeIn}>
            <div
                onClick={() => { props.modalHandler(false);history.push("/") }}
            >
                <img src={require('../../svg/close-black.svg')} className='closeButton' alt="test" />
            </div>

            <div className='title'>CE VA OFERIM?</div>            

            <div className="carouselContainer">
                <CarouselComponent roomPics = {roomPics}/>
            </div>
                
        </div>
        </StyleRoot>
        </div>
        
}
