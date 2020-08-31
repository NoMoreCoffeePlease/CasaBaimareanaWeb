import React from 'react';
import {Link, useHistory} from 'react-router-dom';

export default function RoomsHome () {

    return <div>
        
            <div className='roomsTitle'><p className='roomsTitle-text'>CAMERE</p></div>            

            <div className='roomsSubTitle'><p className='roomsSubTitle-text'>Vezi oferta noastra si alege ce ti se potriveste cel mai bine!</p></div>
            <div className='roomGrid'>
                <div className='roomRow'>
                <div className = 'roomElement'>
                     {/* Musai de rezolvat alinierea astora*/}   
                        <span className = 'roomElement-title'>Camera simpla</span>
                        <Link
                            style={{ textDecoration: "none", color: "black" }}
                            to="/rooms/simple"
                        > 
                        <button
                            
                            className='roomButton'
                        >Detalii</button> </Link>
                    </div>  
                <div className = 'roomElement'>
                       
                        <span className = 'roomElement-title'>Camera tripla</span>
                        <Link
                            style={{ textDecoration: "none", color: "black" }}
                            to="/rooms/triple"
                        > 
                        <button
                            
                            className='roomButton'
                        >Detalii</button> </Link>
                    </div></div>
                <div className='roomRow'>
                <div className = 'roomElement'>                        
                        <span className = 'roomElement-title'>Camera dubla</span>
                        <Link
                            style={{ textDecoration: "none", color: "black" }}
                            to="/rooms/double"
                        > 
                        <button
                            
                            className='roomButton'
                        >Detalii</button> </Link>
                    </div>
                <div className = 'roomElement'>
                        
                        <span className = 'roomElement-title'>Apartament</span>
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