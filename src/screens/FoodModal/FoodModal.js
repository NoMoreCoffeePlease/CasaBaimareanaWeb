import React, { useState, useEffect } from 'react';
import {useLocation, useHistory, BrowserRouter as Router, Route, Switch,Link } from "react-router-dom";
import FoodHome from './FoodHome';
import MeniuPhotos from './MeniuPhotos';
import SalaTerasaPhotos from './SalaTerasaPhotos';
import EvenimentePhotos from './EvenimentePhotos';
import {fadeIn} from 'react-animations';
import Radium, {StyleRoot} from 'radium';

export default function FoodModal(props) {
    const history = useHistory();
    const [isClose,setIsClose] = useState(true);
    useEffect(()=>{
        props.barHandler(false);
    },[props])

    const styles= {
        fadeIn:{
            animation: "x 0.27s",
            animationName: Radium.keyframes(fadeIn, "fadeIn"),
        },
    };
    let urlToGo=[];
    if (props.show === false) return null;
    return <div>
        <Router>
            <StyleRoot>
        <div className="ModalContainer"></div>

        <div className='Modal' style={styles.fadeIn}>  

            <Switch>
            <Route exact path='/food' component={()=>{
                setIsClose(true);
                 return <FoodHome />
            }}>
               
            </Route>
            <Route exact path='/food/menu' component={()=>{
                setIsClose(false);
                return <MeniuPhotos />
            }}>
            </Route>
            <Route exact path='/food/event-hall' component={()=>{
                setIsClose(false);
                return <SalaTerasaPhotos />
            }}>                
            </Route>
            <Route exact path='/food/events' component={()=>{
                setIsClose(false);
                return <EvenimentePhotos />
            }}>
                
            </Route>
        </Switch> 
        <div
                
                
                onClick={() => { 
                    urlToGo = window.location.href.split('/');
                    urlToGo.pop();
                    props.modalHandler(false); history.push(urlToGo.join('/').split(document.location.origin)[1])
                }}
            >
                <img src={isClose?require('../../svg/close-black.svg'):require('../../svg/back-black.svg')} className='closeButton' alt="test" />
            </div>   
        </div></StyleRoot>
        </Router>
        </div>
        
}