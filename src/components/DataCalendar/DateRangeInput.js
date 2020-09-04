import React, { useState, useEffect } from 'react'
import { DateRangeInput } from '@datepicker-react/styled'
import { ThemeProvider } from 'styled-components';
import { startOfToday, add } from 'date-fns';
import './DateRangeInput.css'
import { FETCH_DATA_SUCCESS, RESET_DATA_SUCCESS } from '../../redux/dataActions';
import { connect } from 'react-redux';
import firebase from '../../firebase/firebase';
import { useHistory } from 'react-router-dom';




const DateRange = ({ resetData,navigateToRoute, startDate, endDate, adults, children, addData, text, datePosition, datePickerStyles }) => {
  const history = useHistory();

  const [state, setState] = useState({
    focusedInput: null,
    startDate: (startDate===null||startDate===undefined)?undefined: new Date(startDate),
    endDate: (endDate===null || endDate===undefined)?undefined:new Date(endDate),
    adults: adults,
    children: children
  })
  console.log(state);
  const [unavailableDates, setUnavailableDates] = useState();
  const fetchData = async()=>{
    const dates = []
    const bookings = await firebase.db.collection('books');
    bookings.get().then((snapshot) => {
      snapshot.forEach(async doc => {
        const checkIn = await doc.data().checkIn;
        const checkOut = await doc.data().checkOut;
  
        for (let d = new Date(checkIn); d <= new Date(checkOut); d.setDate(d.getDate() + 1)) {
          dates.push(new Date(d));
        }
        
      })
      setUnavailableDates(dates);
    })
  }
  useEffect(() => {
    fetchData();
  }, [])

  // const onSubmitPress = () => {
  //   console.log(add)
  //   firebase.db.collection('books').add({ adults: state.adults, children: state.children, checkIn: state.startDate.toString(), checkOut: state.endDate.toString() })
  //     .then(user => {
  //       history.push("/BookingStage01");
  //     })
  //     .catch(error => {
  //       console.log(error.message)
  //     })
  // }

  return (
    <div className={datePickerStyles}>
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
            unavailableDates={unavailableDates}
            onDatesChange={data => setState(data)}
            onFocusChange={focusedInput => setState(prevState => ({ ...prevState, focusedInput: focusedInput }))}
            startDate={state.startDate?state.startDate:null}
            endDate={state.endDate?state.endDate:null}
            focusedInput={state.focusedInput}
            displayFormat={(selectedDate) => selectedDate.toLocaleDateString()}
            placement={datePosition}
            minBookingDays='2'
            phrases={
              {
                datepickerStartDateLabel: 'Check-in',
                datepickerEndDateLabel: 'Check-out',
                startDatePlaceholder: 'Check-in',
                endDatePlaceholder: 'Check-out',
                resetDates: 'Reseteaza datele',
                close: 'Inchide'
              }}
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
              }
            }}
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
              }
            }}
            minBookingDate={startOfToday()}
          /></ThemeProvider>
        <div className='inputPeople'>
          <div className='inputContainer'>
            <div className='inputLabel'><img src={require('../../svg/people_outline.svg')} alt="" />
            </div>
            <input
              id="adults"
              placeholder="Adulti"
              autoComplete="off"
              className='Input'
              onChange={(term) => {
                setState(prevState => ({ ...prevState, adults: term.target.value }));
                term.persist();

              }}
              value={adults !== 0 ? adults : null}
            >
            </input></div>
          <div className='inputContainer'>
            <div className='inputLabel'><img src={require('../../svg/person_outline.svg')} alt="" />
            </div>
            <input
              id="children"
              placeholder="Copii"
              autoComplete="off"
              className='Input'
              onChange={(term2) => {
                setState(prevState => ({ ...prevState, children: term2.target.value }));
                term2.persist();
              }}
              value={children !== 0 ? children : null}
            >
            </input>

          </div></div>
        <button className='Submit'
          onClick={() => {
            addData(state.startDate, state.endDate, state.adults, state.children);
            history.push(navigateToRoute);
          }}>{text}
        </button>
      </div>
    </div>
  )
}

const mapStatetoProps = (state) => {
  const { startDate, endDate, adults, children } = state;
  console.log('dateRange picker redux',state)
  return { startDate, endDate, adults, children };
};

const mapDispatchtoProps = dispatch => ({
  addData: (startDate, endDate, adults, children) => dispatch({ type: FETCH_DATA_SUCCESS, payload: { startDate: startDate, endDate: endDate, adults: adults, children: children } }),
})

export default connect(mapStatetoProps, mapDispatchtoProps)(DateRange);