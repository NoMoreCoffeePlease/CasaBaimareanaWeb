import React from 'react';
import {Link, useHistory} from 'react-router-dom';

export default function RoomsHome () {

    return <div className='container'>
        
            <div className='roomsTitle'><p className='roomsTitle-text'>CAMERE</p></div>            

            <div className='roomsSubTitle'><p className='roomsSubTitle-text'>Vezi oferta noastra si alege ce ti se potriveste cel mai bine!</p></div>
            <div className='roomGrid'>
                <div className='roomRow'>
                <div className = 'roomElement'>
                     
                        <div className = 'roomElement-title'>Camera simpla</div>
                        <Link
                            style={{ textDecoration: "none", color: "black" }}
                            to="/rooms/simple"
                        > 
                        <button
                            
                            className='roomButton'
                        >Detalii</button> </Link>
                    </div>  
                <div className = 'roomElement'>
                       
                        <div className = 'roomElement-title'>Camera tripla</div>
                        <Link
                            style={{ textDecoration: "none", color: "black" }}
                            to="/rooms/triple"
                        > 
                        <button
                            
                            className='roomButton'
                        >Detalii</button> </Link>
                    </div>
                    </div>
                <div className='roomRow'>
                <div className = 'roomElement'>                        
                        <div className = 'roomElement-title'>Camera dubla</div>
                        <Link
                            style={{ textDecoration: "none", color: "black" }}
                            to="/rooms/double"
                        > 
                        <button
                            
                            className='roomButton'
                        >Detalii</button> </Link>
                    </div>
                <div className = 'roomElement'>
                        
                        <div className = 'roomElement-title'>Apartament</div>
                        <Link
                            style={{ textDecoration: "none", color: "black" }}
                            to="/rooms/apartment"
                        > 
                        <button
                            
                            className='roomButton'
                        >Detalii</button> </Link>
                    </div></div>
            </div>             
        </div>
    
    }