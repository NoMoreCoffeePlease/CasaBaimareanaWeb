import React, { useState, useEffect } from 'react';
import './ContactModal.css';
import { useHistory } from "react-router-dom";

export default function ConfirmContactModal(props) {

    const history = useHistory();

    // useEffect(() => {
    //     props.barHandler(false);
    //   }, [props]);
    
     
    
    if (props.show === false) return null;
    return <div>
        <div className='ConfirmContact'>

             <div className="confirmContactInner">
                <span className="confirmMessageStyle">Mesajul dumneavoastra a fost trimis cu succes!</span>
            <a 
                href="/"
                style={{ textDecoration: "none" }}
            ><button className='confirmContactButton'
            >INCHIDE
            </button></a>   
            </div>
        </div>
        </div>
        
}
