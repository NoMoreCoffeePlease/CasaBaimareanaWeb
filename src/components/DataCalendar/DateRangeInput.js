import React, { useState} from 'react'
import {DateRangeInput} from '@datepicker-react/styled'
import {ThemeProvider} from 'styled-components';
import { startOfToday } from 'date-fns';
import './DateRangeInput.css'
import {FETCH_DATA_SUCCESS} from '../../redux/dataActions';
import {connect} from 'react-redux';

const  DateRange = ({startDate, endDate, addData})  => {
  const [state, setState] = useState({
    focusedInput: null,
    startDate:  null, 
    endDate:  null
  }) 

  return (
    <div className = 'datePicker '><ThemeProvider
      theme={{
        breakpoints: ["32em", "48em", "64em"],
        reactDatepicker: {
          daySize: [36, 40],
          fontFamily: "Baskerville Old Face",
          fontSize: "1px",
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
      />
      </ThemeProvider>
      <button
        onClick = {()=> {addData(state.startDate, state.endDate); }}
      >Pasul urmator</button>
      </div>
  )
}

const mapStatetoProps = (state) => {
  const {startDate, endDate} = state;
  return {startDate, endDate};
};

const mapDispatchtoProps = dispatch => ({
  addData: (startDate, endDate) => dispatch({type: FETCH_DATA_SUCCESS, payload: {startDate:startDate , endDate: endDate}}),
  
})

export default connect (mapStatetoProps, mapDispatchtoProps)(DateRange);