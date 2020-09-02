import React from 'react';
import DateRange from '../../components/DataCalendar/DateRangeInput';
import './BookingModal.css';
import {useHistory} from 'react-router-dom';


export default function BookingStage0 () {
    // const history = useHistory();
    return <div className='componentContainer'>
        
    {/* <div className='subTitle'><p className='subTitleText'>Alege datele rezervarii tale!</p></div> */}
    <DateRange text={"PASUL URMATOR"} datePosition={'top'}  navigateToRoute={"/BookingStage01"}/>
    </div>
}