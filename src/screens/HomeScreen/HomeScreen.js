import React, {useState} from 'react';
import './HomeScreen.css';
import DateRange from '../../components/DataCalendar/DateRangeInput';
import {useHistory} from 'react-router-dom';


export const HomeScreen = () => {
   const history = useHistory();
    return (
        <div className = 'mainFrame'>
            <div
                className='datePickerContainer'
            >
                <DateRange/>
            </div>
            <div className = 'roomDetailContainer'>
                <div className = 'detailElement'>
                <img src = 'https://picsum.photos/460/200' alt='' ></img>
                    <span className = 'detailElement-title'>Camere</span>
                    <button
                        onClick={()=> history.push('/rooms')}
                        className='detailButton'
                    >Detalii</button>
                </div>
                <div className = 'detailElement'>
                    <img src = 'https://picsum.photos/460/200' alt='' ></img>
                    <span className = 'detailElement-title'>Restaurant</span>
                    <button
                        onClick={()=> history.push('/food')}
                        className='detailButton'
                    >Detalii</button>
                </div>
            </div>          
        </div> 
    )
}