import React, { useState, useEffect } from 'react';
import {useLocation, useHistory, BrowserRouter as Router, Route, Switch,Link } from "react-router-dom";
import FoodHome from './FoodHome';
import MeniuPhotos from './MeniuPhotos';
import SalaTerasaPhotos from './SalaTerasaPhotos';
import EvenimentePhotos from './EvenimentePhotos'

export default function FoodModal(props) {
    const history = useHistory();
    useEffect(()=>{
        props.barHandler(false);
    },[props])

    
    if (props.show === false) return null;
    return <div>
        <Router>
        <div className="ModalContainer"></div>

        <div className='foodModal'>
            <div
                
                
                onClick={() => { 
                    let urlToGo = window.location.href.split('/');
                    urlToGo.pop();
                    props.modalHandler(false); history.push(urlToGo.join('/').split(document.location.origin)[1])
                }}
            >
                <img src={require('../../svg/close-black.svg')} className='closeButton' alt="test" />
            </div>

            

            <Switch>
            <Route exact path='/food'>
                <FoodHome />
            </Route>
            <Route exact path='/food/menu'>
                <MeniuPhotos />
            </Route>
            <Route exact path='/food/event-hall'>
                <SalaTerasaPhotos />
            </Route>
            <Route exact path='/food/events'>
                <EvenimentePhotos />
            </Route>
        </Switch>    
        </div>
        </Router>
        </div>
        
}