import React, { useState } from 'react';
import DateRange from '../../components/DataCalendar/DateRangeInput';
import './BookingModal.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

export default function BookingModal(props) {
    const [selectedStage, setSelectedStage] = useState(0);
    if (props.show === false) return null;
    return <div>
        <div className="ModalContainer"></div>
        <div className='Modal'>
            <div
                onClick={() => { props.modalHandler(false) }}
            >
                <img src={require('../../svg/close-black.svg')} className='closeButton' alt="test" />
            </div>

            <div className='title'>REZERVA ACUM</div>
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
            </Switch></div></Router>

                <div className='subTitle'>Alege datele rezervarii tale!</div>
                <DateRange />
        </div>
        </div>
        
}