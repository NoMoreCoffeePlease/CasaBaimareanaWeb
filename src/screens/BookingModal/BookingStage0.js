import React from 'react';
import DateRange from '../../components/DataCalendar/DateRangeInput';
import './BookingModal.css';

export default function BookingStage0 () {
    return <div>
    <div className='subTitle'>Alege datele rezervarii tale!</div>
    <DateRange />
    </div>
}