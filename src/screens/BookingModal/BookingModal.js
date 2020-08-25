import React, { useState, useEffect } from 'react';
import BookingStage0 from './BookingStage0';
import BookingStage2 from './BookingStage2';
import './BookingModal.css';    
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useHistory
} from "react-router-dom";

export default function BookingModal(props) {
    const [selectedStage, setSelectedStage] = useState(0);
    const history = useHistory();
    useEffect(()=>{
        props.barHandler(false);
    },[props])

    if (props.show === false) return null;
    return <div>
        <div className="ModalContainer"></div>
        <div className='Modal'>
            <div className='closeButtonContainer'
                onClick={() => { props.modalHandler(false);history.push("/") }}
            >
                <img src={require('../../svg/close-black.svg')} className='closeButton' alt="test" />
            </div>
            <div className = 'bookHeader'>
            <div className='title'><h1 className='titleText'>REZERVA ACUM</h1></div>
            <Router>
                <div className='bookNavigator'>
                    <Link style={{ textDecoration: 'none', color: 'black' }} to='/book?stage0'><div className={selectedStage === 0 ? 'stageContainer stageSelected' : 'stageContainer'}>
                        <span className='stage'>Pasul 1</span>
                        <span className='subStage'>Alege datele.</span>
                    </div></Link>
                    <Link style={{ textDecoration: 'none', color: 'black' }} to='/book?stage1'><div className={selectedStage === 1 ? 'stageContainer stageSelected' : 'stageContainer'}>
                        <span className='stage'>Pasul 2</span>
                        <span className='subStage'>Alege camera favorita.</span>
                    </div></Link>
                    <Link style={{ textDecoration: 'none', color: 'black' }} to='/book?stage2'><div className={selectedStage === 2 ? 'stageContainer stageSelected' : 'stageContainer'}>
                        <span className='stage'>Pasul 3</span>
                        <span className='subStage'>Informatii personale.</span>
                    </div></Link>
                
                <Switch>
                    <Route
                        path='/book?stage0'
                        exact={true}
                        key='pickDate'
                        component={() => {
                            console.log('PickDate');
                            setSelectedStage(0);
                            return null;
                        }}
                    />
                    <Route
                        path='/book?stage1'
                        exact={true}
                        key='pickRoom'
                        component={() => {
                            console.log('PickRoom');
                            setSelectedStage(1);
                            return null;
                        }}
                    />
                    <Route
                        path='/book?stage2'
                        exact={true}
                        key='pickInfo'
                        component={() => {
                            console.log('PickInfo');
                            setSelectedStage(2);
                            return null;
                        }}
                    />
            </Switch></div></Router></div>

            <div className = 'componentContainer'><BookingStage0 /></div>
        </div>
        </div>
        
}