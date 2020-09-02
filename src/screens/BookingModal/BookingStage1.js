import React, {state, useState} from 'react';
import {useHistory} from 'react-router-dom';

export default function BookingStage1 () {
    const history = useHistory();
    const [simple, setSimple] = useState(0);
    const [double, setDouble] = useState(0);
    const [triple, setTriple] = useState(0);
    const [apt, setApt] = useState(0)
      

    return <div>
        {/* <div className='subTitle'>Alege camerele pentru sejurul vostru!</div> */}
        <div className='roomGrid'>
            <div className='roomElementBooking'>
                <img src={require('../../svg/room.jfif')} alt='' className ='roomImage' />
                <div className='elementTitle-container'><p className='elementTitle'>Camera simpla</p></div>
                <div className='elementSubtitle-container'><p className='elementSubtitle'>Un pat simplu.</p></div>
                <div className='elementPrice-container'><p className='elementPrice'>150 RON</p></div>
                <button 
                            className='bookingButton'
                        ><a href='/rooms/simple'>Detalii</a>
                </button>
                <div className='counterContainer'>
                     <div className='counterText'    onClick={() => setSimple(simple - 1)}>-</div> 
                     <span className='counterText'>{simple}</span>
                     <div className='counterText'    onClick={() => setSimple(simple + 1)}>+</div>
                </div>        
            </div>
            <div className='roomElementBooking'>
                <img src={require('../../svg/room.jfif')} alt='' className ='roomImage' />
                <div className='elementTitle-container'><p className='elementTitle'>Camera dubla</p></div>
                <div className='elementSubtitle-container'><p className='elementSubtitle'>Un pat dublu.</p></div>
                <div className='elementPrice-container'><p className='elementPrice'>250 RON</p></div>
                <button 
                            className='bookingButton'
                        ><a href='/rooms/simple'>Detalii</a>
                </button>
                <div className='counterContainer'>
                     <div className='counterText'    onClick={() => setDouble(double - 1)}>-</div> 
                     <span className='counterText'>{double}</span>
                     <div className='counterText'    onClick={() => setDouble(double + 1)}>+</div>
                </div>   
            </div>
            <div className='roomElementBooking'>
                <img src={require('../../svg/room.jfif')} alt='' className ='roomImage' />
                <div className='elementTitle-container'><p className='elementTitle'>Camera tripla</p></div>
                <div className='elementSubtitle-container'><p className='elementSubtitle'>Un pat dublu + un pat simplu.</p></div>
                <div className='elementPrice-container'><p className='elementPrice'>350 RON</p></div>
                <button 
                            className='bookingButton'
                        ><a href='/rooms/simple'>Detalii</a>
                </button>
                <div className='counterContainer'>
                     <div className='counterText'    onClick={() => setTriple(triple - 1)}>-</div> 
                     <span className='counterText'>{triple}</span>
                     <div className='counterText'    onClick={() => setTriple(triple + 1)}>+</div>
                </div>   
            </div>
            <div className='roomElementBooking'>
                <img src={require('../../svg/room.jfif')} alt='' className ='roomImage' />
                <div className='elementTitle-container'><p className='elementTitle'>Apartament</p></div>
                <div className='elementSubtitle-container'><p className='elementSubtitle'>Doua camere duble.</p></div>
                <div className='elementPrice-container'><p className='elementPrice'>500 RON</p></div>
                <button 
                            className='bookingButton'
                        ><a href='/rooms/simple'>Detalii</a>
                </button>
                <div className='counterContainer'>
                     <div className='counterText'    onClick={() => setApt(apt - 1)}>-</div> 
                     <span className='counterText'>{apt}</span>
                     <div className='counterText'    onClick={() => setApt(apt + 1)}>+</div>
                </div>   
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