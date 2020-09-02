import React, { useState, useEffect } from 'react';
import { useHistory, BrowserRouter as Router, Route, Switch,Link } from "react-router-dom";
import RoomsHome from './RoomsHome';
import RoomsSimple from './RoomsSimple';
import RoomsDouble from './RoomsDouble';
import RoomsTriple from './RoomsTriple';
import RoomsApartment from './RoomsApartment';
import './RoomsModal.css';

export default function RoomsModal(props) {

    const history = useHistory();
    useEffect(()=>{
        props.barHandler(false);
    },[props])

    if (props.show === false) return null;
    return <div>
        <Router>
        <div className="ModalContainer"></div>

        <div className='roomsModal'>
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
            <Route exact path='/rooms'>
                <RoomsHome />
            </Route>
            <Route exact path='/rooms/simple'>
                <RoomsSimple />
            </Route>
            <Route exact path='/rooms/double'>
                <RoomsDouble />
            </Route>
            <Route exact path='/rooms/triple'>
                <RoomsTriple />
            </Route>
            <Route exact path='/rooms/apartment'>
                <RoomsApartment />
            </Route>
        </Switch>
        </div>
        </Router>
        </div>
        
}