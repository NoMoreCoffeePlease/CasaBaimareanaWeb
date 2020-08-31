import React, {useState} from 'react';
import './HomeScreen.css';
import DateRange from '../../components/DataCalendar/DateRangeInput';
import {useHistory} from 'react-router-dom';

import MapSection from '../../components/GoogleMap/Map'

const location = {
    address: 'Strada Vasile Alecsandri 39, Baia Mare 430302',
    lat: 47.6513159,
    lng: 23.5803408,
  }
// TO DO : Fix center align for buttons 

export const HomeScreen = () => {
   const history = useHistory();
    return (
        <div className = 'mainFrame'>
            <div
                className='datePickerContainer'
            >
                <div className='dateRangeContainer'>
                
                   
                <DateRange   text={"REZERVA ACUM"} />
            
                </div>
            
            <div className = 'roomDetailContainer'>
                <div className = 'detailElement'>
                <img src = 'https://picsum.photos/460/200' alt='' ></img>
                    <span className = 'detailElement-title'>Camere</span>
                    <button
                        onClick={()=> history.push('/rooms')}
                        className='detailButton'
                    >Detalii</button>
                </div>
                <div className = 'detailElement'>
                    <img src = 'https://picsum.photos/460/200' alt='' ></img>
                    <span className = 'detailElement-title'>Restaurant</span>
                    <button
                        onClick={()=> history.push('/food')}
                        className='detailButton'
                    >Detalii</button>
                </div>
            </div>     
            </div>  
            <div className="presentationFrame">
                     <div className="presentationTitle">CINE SUNTEM NOI?</div>
                     <div className="presentationSubTitle">Descriere despre voi, misiune, obiectiv, text atractiv.</div>
                     <div className="presentationMembersContainer">
                           <div className="pictureContainerLeft"></div>
                           <div className="presentationMembersDetails">
                               <div className="name">Nume Prenume</div>
                               <div className="function">Functie</div>
                           </div>
                           <div className="presentationMembersDetails">
                               <div className="name">Nume Prenume</div>
                               <div className="function">Functie</div>
                           </div>
                           <div className="pictureContainerRight"></div>
                     </div>
                     <div className="test">
                    
                     <div className="separator"/>
                     </div>
                     <div className="presentationTitle">CE VA OFERIM?</div>
                     <div className="presentationSubTitle">Descriere despre facilitati, despre tot ceea ce gasiti wow la voi.</div>
                     <div className="test">
                     <button
                        onClick={()=> history.push('/rooms')}
                        className='detailButton'
                    >Detalii</button>
                    </div>
                    <div className="reviewsContainer">
                        <div className="reviewLeft">"A pleasant surprise. Great conditions for a low price. Nice room, very friendly hosts, good breakfast. "  -Alex</div>
                        <div className="reviewRight">"A pleasant surprise. Great conditions for a low price. Nice room, very friendly hosts, good breakfast. "  -Alex</div>
                    </div>
                    <div className="test">
                    <button
                        onClick={()=> history.push('/rooms')}
                        className='detailButton'
                    >Vezi si alte review-uri</button>
                    </div>
      
                </div> 
                <div className="presPicture">
                    <span >POZA DE PREZENTARE</span>
                    </div> 

                    <div className="mapsContainer">
                    <MapSection location={location} zoomLevel={17} />
                    </div>

                    <div className="presPicture">
                        <div className="bmStyle">BAIA MARE</div>
                        <div className="test">
                        <button
                        onClick={()=> history.push('/rooms')}
                        className='detailButton'
                    >Descopera</button>
                    </div>
                    </div> 
                
        </div> 
    )
}