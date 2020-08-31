import React from 'react';
import DateRange from '../../components/DataCalendar/DateRangeInput';
import './BookingModal.css';


export default function BookingStage0 () {
    return <div className='componentContainer'>
        
    <div className='subTitle'><p className='subTitleText'>Alege datele rezervarii tale!</p></div>
    <DateRange text={"PASUL URMATOR"}/>
    </div>
}