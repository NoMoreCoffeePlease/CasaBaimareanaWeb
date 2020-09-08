import React, {useState, useEffect} from 'react';
import './HomeScreen.css';
import DateRange from '../../components/DataCalendar/DateRangeInput';
import TextTransition, { presets } from "react-text-transition";
import {useHistory} from 'react-router-dom';
import MapSection from '../../components/GoogleMap/Map';


const TEXTS = [
    "Baimareana",
    "ta de vacanta",
   
  ];

const location = {
    address: 'Strada Vasile Alecsandri 39, Baia Mare 430302',
    lat: 47.6513159,
    lng: 23.5803408,
  }
// TO DO : Fix center align for buttons 

export const HomeScreen = (props) => {
    const [index, setIndex] = useState(0);
    const history = useHistory();
    useEffect(() => {
        const intervalId = setInterval(() =>
          setIndex(index => (index + 1)% TEXTS.length),
          6000 // every 3 seconds
        );
      },[]);
   
    return (
        <div className = 'mainFrame'>
            <div
                className='datePickerContainer'
            >
            <div className='titleAnimation'> 
            <span className="textAnimationStyle">Casa</span>

                 <span>
                     <TextTransition
                    text={ TEXTS[index] }
                    springConfig={ presets.default }
                    className="textAnimationStyle"
                    />
                 </span>
            </div>

                <div className='dateRangeContainer'>
                    <DateRange navigateToRoute={'/BookingStage01'} datePosition={'top'}  text={"REZERVA"}/>
                </div>
            
            <div className = 'roomDetailContainer'>
                <div className = 'detailElement'>
                <img src = 'https://picsum.photos/700/300' alt='' className = 'imageDetail' ></img>
                    <span className = 'detailElement-title'>Camere</span>
                    
                    <button
                         onClick={()=>   history.push('/rooms')}
                        className='detailButton'
                    >Detalii</button>
                </div>
                <div className = 'detailElement'>
                    <img src = 'https://picsum.photos/702/300' alt='' className = 'imageDetail' ></img>
                    <span className = 'detailElement-title'>Restaurant</span>
                    <button
                          onClick={()=>   history.push('/food')}
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
                               <div className="leftName">Nume Prenume</div>
                               <div className="leftFunction">Functie</div>
                           </div>
                           <div className="presentationMembersDetails">
                               <div className="rightName" >Nume Prenume</div>
                               <div className="rightFunction">Functie</div>
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
                          onClick={()=>   history.push('/about-us')}
                        className='detailButton'
                    >Detalii</button>
                    </div>
                    <div className="reviewsContainer">
                        <div className="reviewLeft">"A pleasant surprise. Great conditions for a low price. Nice room, very friendly hosts, good breakfast. "  - Alex</div>
                        <div className="reviewRight">"A pleasant surprise. Great conditions for a low price. Nice room, very friendly hosts, good breakfast. "  - Alex</div>
                    </div>
                    <div className="test">
                    <button
                        onClick={()=>   history.push('/reviews')}
                        className='detailButton'
                    >Vezi si alte review-uri</button>
                    </div>
      
                </div> 
                <div className="presPicture">
                    <div className="presCaptionContainer"><span className='bmStyle'>POZA DE PREZENTARE</span></div>
                    </div> 

                    <div className="mapsContainer">
                    <MapSection location={location} zoomLevel={17} />
                    </div>

                    <div className="presPicture">
                        <div className="bmContainer"><span className='bmStyle'>BAIA MARE</span></div>
                        <div className="test">
                        <button
                        onClick={()=>  history.push('/city')}
                        className='detailButton'
                    >DESCOPERA</button>
                    </div>
                    </div> 
                
        </div> 
    )
}

