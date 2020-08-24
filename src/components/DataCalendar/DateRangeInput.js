import React, { useState} from 'react'
import {DateRangeInput} from '@datepicker-react/styled'
import {ThemeProvider} from 'styled-components';
import { startOfToday } from 'date-fns';
import './DateRangeInput.css'
import {FETCH_DATA_SUCCESS} from '../../redux/dataActions';
import {connect} from 'react-redux';
import firebase from '../../firebase/firebase';

const  DateRange = ({startDate, endDate, adults, children, addData})  => {
  const [state, setState] = useState({
    focusedInput: null,
    startDate:  '', 
    endDate:  '',
    adults: '0',
    children: '0'
  }) 

  const onSubmitPress = () => {
  firebase.db.collection('users').add({adults: adults, children: children , checkIn: startDate, checkOut: endDate})
  .then(user => {
    console.log(user.id)
  })
  .catch(error => {
    console.log(error.message)
  })
}

  return (
    <div className='datePicker'>     
      <ThemeProvider
      theme={{
        breakpoints: ["32em", "48em", "64em"],
        reactDatepicker: {
          daySize: [36, 40],
          fontFamily: "Baskerville Old Face",
          fontSize: "3px",
          colors: {
            accessibility: "#D6A466",
            selectedDay: "rgba(214, 164, 102, 0.7)",
            selectedDayHover: "#926124",
            primaryColor: "#D6A466"
          }
        }
      }}
    >  
      <DateRangeInput
        onDatesChange={data => setState(data)}
        onFocusChange={focusedInput => setState(prevState =>({...prevState, focusedInput:focusedInput}))}
        startDate={state.startDate} 
        endDate={state.endDate} 
        focusedInput={state.focusedInput} 
        displayFormat={(selectedDate) => selectedDate.toLocaleDateString()}
        placement = 'top'
        minBookingDays = '2'
        phrases = {
          { datepickerStartDateLabel: 'Check-in',
            datepickerEndDateLabel: 'Check-out',
            startDatePlaceholder: 'Check-in',
            endDatePlaceholder: 'Check-out',  
            resetDates: 'Reseteaza datele',
            close: 'Inchide'}}
        weekdayLabelFormat={(selectedDate) => {
          switch (selectedDate.getDay()) {
            case 1: return 'Lu';
            case 2: return 'Ma';
            case 3: return 'Mi';
            case 4: return 'Jo';
            case 5: return 'Vi';
            case 6: return 'Sa';
            case 0: return 'Du';
            default: return;
        }}}
        monthLabelFormat={(selectedDate) => {
          switch (selectedDate.getMonth()) {
            case 1: return `Februarie ${selectedDate.getFullYear()}`;
            case 2: return `Martie ${selectedDate.getFullYear()}`;
            case 3: return `Aprilie ${selectedDate.getFullYear()}`;
            case 4: return `Mai ${selectedDate.getFullYear()}`;
            case 5: return `Iunie ${selectedDate.getFullYear()}`;
            case 6: return `Iulie ${selectedDate.getFullYear()}`;
            case 7: return `August ${selectedDate.getFullYear()}`;
            case 8: return `Septembrie ${selectedDate.getFullYear()}`;
            case 9: return `Octombrie ${selectedDate.getFullYear()}`;
            case 10: return `Noiembrie ${selectedDate.getFullYear()}`;
            case 11: return `Decembrie ${selectedDate.getFullYear()}`;
            case 0: return `Ianuarie ${selectedDate.getFullYear()}`;;
            default: return;      
        }}}   
        minBookingDate = {startOfToday()}
      /></ThemeProvider> 
      <div className = 'inputPeople'>
      <div className = 'inputContainer'>   
           <div className = 'inputLabel'><img src={require('../../svg/people_outline.svg')} alt="" /> 
           </div> 
            <input
                id = "adults"
                placeholder = "Adulti"
                autoComplete = "off"
                className = 'Input'
                onChange = {(term) => {setState(prevState =>({...prevState, adults: term.target.value}));
                  term.persist();
              }}
            >    
            </input></div> 
           <div className = 'inputContainer'>
            <div className = 'inputLabel'><img src={require('../../svg/person_outline.svg')} alt="" />       
            </div>
            <input
                id = "children"
                placeholder = "Copii"
                autoComplete = "off"
                className = 'Input'
                onChange = {(term2) => {setState(prevState =>({...prevState, children: term2.target.value}));
                    term2.persist();
              }}
            >    
            </input>

    </div></div>
    <div className='Submit'
        onClick = {()=> {
          addData( state.startDate.setHours(16), state.endDate.setHours(12), state.adults, state.children);
            console.log(state); 
            onSubmitPress();
          }}
        >PASUL URMATOR</div>
     </div> 
  )
}

const mapStatetoProps = (state) => {
  const {startDate, endDate, adults, children} = state;
  return {startDate, endDate, adults, children};
};

const mapDispatchtoProps = dispatch => ({
  addData: (startDate, endDate, adults, children) => dispatch({type: FETCH_DATA_SUCCESS, payload: {startDate:startDate , endDate: endDate, adults: adults, children: children}}),
  
})

export default connect (mapStatetoProps, mapDispatchtoProps)(DateRange);