import React, { useState } from 'react';
import './BookingModal.css';
import { useHistory } from 'react-router';
import firebase from '../../firebase/firebase';
import { connect } from 'react-redux';
import { RESET_DATA_SUCCESS } from '../../redux/dataActions';




function BookingStage2({startDate, endDate, adults, children, resetStartDate, resetEndDate, resetAdults, resetChildren, resetData, simpleValue, doubleValue, tripleValue, aptValue}) {
    console.log(startDate,endDate);
    const history = useHistory();
    const handleMethod = (option) => {
        switch (option) {
            case 'cash': setState(prevState => ({ ...prevState, paymentMethodCash: true })); break
            case 'card': setState(prevState => ({ ...prevState, paymentMethodCash: false })); break
            default: return null;
        }
    }
    const [state, setState] = useState({
        firstName: '',
        lastName: '',
        email: '',
        address: '',
        city: '',
        county: '',
        postalCode: '',
        paymentMethodCash: false,
        privacy: false,
        terms: false,
            startDate: startDate !== null ? new Date(startDate) : '',
            endDate: endDate !== null ? new Date(endDate) : '',
            adults: adults,
            children: children,
            resetStartDate: resetStartDate,
            resetEndDate: resetEndDate,
            resetAdults: resetAdults,
            resetChildren: resetChildren,
            simpleValue: simpleValue, 
            doubleValue: doubleValue,
            tripleValue: tripleValue, 
            aptValue: aptValue,
    });

    const onSubmitPress = () => {

        firebase.db.collection('books').add({ adults: state.adults, children: state.children, checkIn: state.startDate.toString('dddd, MMMM, yyyy'), checkOut: state.endDate.toString('dddd, MMMM, yyyy'), simpleValue: state.simpleValue, doubleValue: state.doubleValue, tripleValue: state.tripleValue, aptValue: state.aptValue })
          .then(user => {
            
            
          })
          .catch(error => {
            console.log(error.message)
          })

          const rooms = firebase.db.collection("room_type").doc("available-rooms");
            rooms.update({
                apartment: firebase.FieldValue.increment(-state.aptValue),
                simple: firebase.FieldValue.increment(-state.simpleValue),
                double: firebase.FieldValue.increment(-state.doubleValue),
                triple: firebase.FieldValue.increment(-state.tripleValue)
            }).then(()=>{
                history.push("/bookConfirm");
            })
      }

    return <div className="componentContainer">
        <div className='subTitle'><p className='subTitleText'>Completeaza datele personale si alege modalitatea de plata pentru finalizarea comenzii!</p></div>
        <div className='formContainer'>
            <div
               
                className = 'formStyle'
            >
                <div ><input
                    type='text'
                    className = 'formTextInput'
                    placeholder='Prenume'
                    onChange={term1 => {
                        setState(prevState => ({ ...prevState, firstName: term1.target.value }))
                        term1.persist();
                    }}
                ></input>
                <input
                    type='text'
                    className = 'formTextInput'
                    placeholder='Nume'
                    onChange={term2 => {
                        setState(prevState => ({ ...prevState, lastName: term2.target.value }))
                        term2.persist();
                    }}
                ></input>
                <input
                    type='email'
                    className = 'formTextInput formEmail'
                    placeholder='E-mail'
                    onChange={term3 => {
                        setState(prevState => ({ ...prevState, email: term3.target.value }))
                        term3.persist();
                    }}
                ></input></div>
                <br></br>
                <input
                    type='text'
                    className = 'formTextInput formAddress'
                    placeholder='Adresa'
                    onChange={term4 => {
                        setState(prevState => ({ ...prevState, address: term4.target.value }))
                        term4.persist();
                    }}
                ></input><br></br>
               <div><input
                    type='text'
                    className = 'formTextInput'
                    placeholder='Oras'
                    onChange={term5 => { setState(prevState => ({ ...prevState, city: term5.target.value })); term5.persist(); }}
                ></input>
                <input
                    type='text'
                    className = 'formTextInput'
                    placeholder='Judet'
                    onChange={term6 => { setState(prevState => ({ ...prevState, county: term6.target.value })); term6.persist(); }}
                ></input>
                <input
                    type='text'
                    className = 'formTextInput'
                    placeholder='Cod Postal'
                    onChange={term7 => { setState(prevState => ({ ...prevState, postalCode: term7.target.value })); term7.persist(); }}
                ></input> </div> <br></br>
                <select className = 'paymentMethod' onChange={(option) => handleMethod(option)} >
                <option value='initial'>Metoda de plata</option>
                    <option value='cash'>Fizic, la check-in.</option>
                    <option value='card'>Online, cu cardul.</option>
                </select> <br></br>
                <label className='formStatements'><input
                    type="checkbox"
                    id = 'privacyCheck'
                    required = {true}
                    checked = {state.terms}
                    onChange = {() =>{setState(prevState => ({ ...prevState, terms: !state.terms }));}}
                ></input>   Am citit si sunt de acord cu Termenii si conditiile</label> <br></br>
                <label className='formStatements'><input
                    type="checkbox"
                    id = 'termsCheck'
                    required = {true}
                    checked = {state.privacy}
                    onChange = {() =>{setState(prevState => ({ ...prevState, privacy: !state.privacy }));}}
                ></input>   Am citit si sunt de acord cu prelucrarea datelor cu caracter personal.</label> <br></br>
                <div className='buttonContainer'>   
                    <button className='submitButton'
                        onClick = {()=> {                    
                            history.push("/BookingStage01");
                        }}
                        >PASUL ANTERIOR</button>
                    <button className = 'submitButton' value='REZERVA' 
                        onClick={()=> {
                            if (state.privacy === true && state.terms === true) {  onSubmitPress() ; }
                            else alert ('Must check Terms and/or Privacy!')
                        }}
                    >REZERVA</button>
                
                </div> 
            </div>
        </div>
    </div>
}

const mapStatetoProps = (state) => {
    const { startDate, endDate, adults, children, simpleValue, doubleValue, tripleValue, aptValue } = state;
    console.log('redux', state);
    return { startDate, endDate, adults, children, simpleValue, doubleValue, tripleValue, aptValue };
  };

const mapDispatchtoProps = dispatch => ({
    resetData: () => dispatch({ type: RESET_DATA_SUCCESS, payload:{} }),
  })
  
  export default connect(mapStatetoProps, mapDispatchtoProps)(BookingStage2);