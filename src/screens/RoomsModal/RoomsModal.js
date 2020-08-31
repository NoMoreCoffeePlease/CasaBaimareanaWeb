import React, { useState, useEffect } from 'react';
import './RoomsModal.css';
import { useHistory, BrowserRouter as Router, Route, Switch,Link } from "react-router-dom";
import RoomsHome from './RoomsHome';
import RoomsSimple from './RoomsSimple';
import RoomsDouble from './RoomsDouble';
import RoomsTriple from './RoomsTriple';
import RoomsApartment from './RoomsApartment';

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
                onClick={() => { props.modalHandler(false); history.push("/") }}
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