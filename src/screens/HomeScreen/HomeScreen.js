import React, {useState} from 'react';
import './HomeScreen.css';
import BookingModal from '../BookingModal/BookingModal';

export const HomeScreen = () => {

    const [shownModal, setShownModal] = useState(false)
  
    const modalHandler = (bool)=>{
        setShownModal(bool)
    }
   
    return (
        <div className = 'mainFrame'>
            <button
            className="buttonRezerva"
                onClick = {()=> {                   
                    setShownModal(true);
                }}
            >Rezerva acum</button>
            <BookingModal show = {shownModal} modalHandler={modalHandler}/>         
        </div> 
    )
}