import React, { useState, useEffect } from 'react';
import './ConfirmationModal.css';
import { useHistory } from "react-router-dom";

export default function ConfirmationModal(props) {

    const history = useHistory();
    
    if (props.show === false) return null;
    return <div>
        <div className="ConfirmationContainer"></div>
        <div className='Confirmation'>

            <div className='confirmationTitle'>REZERVARE CONFIRMATA</div>            

            <div className='confirmationSubTitle'>
                <p
                    className='text-confirmationSubTitle'
                    >Rezervarea dumneavoastra fost inregistrata cu succes. In scurt timp veti primi un e-mail cu confirmarea rezervarii si toate detaliile legate de aceasta. Abia asteptam sa ne vedem!
                    
                </p></div>
             
            <button className='confirmationButton'
                onClick={() => { props.modalHandler(false);history.push("/");props.closeModal(); }}
            >ACASA</button>   
        </div>
        </div>
        
}