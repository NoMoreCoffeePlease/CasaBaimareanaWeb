import React from 'react';
import {useHistory} from 'react-router-dom';

export default function BookingStage1 () {
    const history = useHistory();
    return <div>
        <div className='subTitle'>Alege camerele pentru sejurul vostru!</div>
        <div className='roomGrid'>
            <div className='roomElement'>
                <img src={require('../../svg/room.jfif')} alt='' className ='roomImage' />
                <div className='elementTitle-container'><p className='elementTitle'>Camera simpla</p></div>
                <div className='elementSubtitle-container'><p className='elementSubtitle'>Descriere camera</p></div>
                <div className='elementPrice-container'><p className='elementPrice'>RON Pret</p></div>
            </div>
        </div>
        <div className='buttonContainer'>
            <button className='submitButton'
            onClick = {()=> {                    
                history.push("/BookingStage00");
            }}
            >PASUL ANTERIOR</button>
        
        <button className='submitButton'
        onClick = {()=> {            
            history.push("/BookingStage02");
        }}
        >PASUL URMATOR</button></div>
    </div>

}