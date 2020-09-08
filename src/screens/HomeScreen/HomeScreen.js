import React, {useState} from 'react';
import './HomeScreen.css';
import DateRange from '../../components/DataCalendar/DateRangeInput';



import MapSection from '../../components/GoogleMap/Map'

const location = {
    address: 'Strada Vasile Alecsandri 39, Baia Mare 430302',
    lat: 47.6513159,
    lng: 23.5803408,
  }
// TO DO : Fix center align for buttons 

export const HomeScreen = (props) => {
   
    return (
        <div className = 'mainFrame'>
            <div
                className='datePickerContainer'
            >
                <div className='dateRangeContainer'>
                    <DateRange navigateToRoute={'/BookingStage01'} datePosition={'top'}  text={"REZERVA"}/>
                </div>
            
            <div className = 'roomDetailContainer'>
                <div className = 'detailElement'>
                <img src = 'https://picsum.photos/460/200' alt='' ></img>
                    <span className = 'detailElement-title'>Camere</span>
                    
                    <button
                         onClick={()=>   window.location.href='/rooms'}
                        className='detailButton'
                    >Detalii</button>
                </div>
                <div className = 'detailElement'>
                    <img src = 'https://picsum.photos/460/200' alt='' ></img>
                    <span className = 'detailElement-title'>Restaurant</span>
                    <button
                          onClick={()=>   window.location.href='/food'}
                        className='detailButton'
                    >Detalii</button>
                </div>
            </div>     
            </div>  
            <div className="presentationFrame">
                     <div id='aboutUs' className="presentationTitle">CINE SUNTEM NOI?</div>
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
                          onClick={()=>   window.location.href='/about-us'}
                        className='detailButton'
                    >Detalii</button>
                    </div>
                    <div className="reviewsContainer">
                        <div className="reviewLeft">"A pleasant surprise. Great conditions for a low price. Nice room, very friendly hosts, good breakfast. "  -Alex</div>
                        <div className="reviewRight">"A pleasant surprise. Great conditions for a low price. Nice room, very friendly hosts, good breakfast. "  -Alex</div>
                    </div>
                    <div className="test">
                    <button
                    //    onClick={()=>   window.location.href='/city'}
                        className='detailButton'
                    >Vezi si alte review-uri</button>
                    </div>
      
                </div> 
                <div className="presPicture">
                    <div className="bmContainer"><span className='bmStyle'>POZA DE PREZENTARE</span></div>
                    </div> 

                    <div className="mapsContainer">
                    <MapSection location={location} zoomLevel={17} />
                    </div>

                    <div className="presPicture">
                        <div className="bmContainer"><span className='bmStyle'>BAIA MARE</span></div>
                        <div className="test">
                        <button
                        onClick={()=>   window.location.href='/city'}
                        className='detailButton'
                    >DESCOPERA</button>
                    </div>
                    </div> 
                
        </div> 
    )
}

