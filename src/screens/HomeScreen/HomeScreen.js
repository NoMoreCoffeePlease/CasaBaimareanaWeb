import React from 'react';
import './HomeScreen.css';
import DateRange from '../../components/DataCalendar/DateRangeInput';

export const HomeScreen = () => {
    return (
        <div className = 'mainFrame'>
            <img src='./images/menu_black.png' alt = '' className = 'menuIcon' ></img>
            <DateRange />
            
        </div>
    )
}