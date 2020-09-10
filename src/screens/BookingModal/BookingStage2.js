import React, { useState } from 'react';
import './BookingModal.css';
import { useHistory } from 'react-router';
import firebase from '../../firebase/firebase';
import { connect } from 'react-redux';
import { RESET_DATA_SUCCESS } from '../../redux/dataActions';

// TO DO: Mail confirmare

function BookingStage2({startDate, endDate, adults, children, resetStartDate, resetEndDate, resetAdults, resetChildren, resetData, simpleValue, doubleValue, tripleValue, aptValue}) {
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
        country: '',
        postalCode: '',
        paymentMethodCash: null,
        privacy: false,
        terms: false,
        startDate: startDate !== null ? new Date(startDate) : '',
        endDate: endDate !== null ? new Date(endDate) : '',
        adults: adults,
        children: children,
        simpleValue: simpleValue, 
        doubleValue: doubleValue,
        tripleValue: tripleValue, 
        aptValue: aptValue,
    });
    
    console.log(state)
    
    const formValid = () =>{
        if(state.firstName ==='' || state.lastName === '')
        {
            return'Campurile nume si prenume sunt obligatorii';
            
        }
        if(state.email === '')
        {
            return 'Campul email este obligatoriu';
            
        }
        if(state.address==='')
        {
            return  'Campul adresa este obligatoriu';
            
        }
        if(state.country ==='' || state.city==='' || state.postalCode === '')
        {
            return 'Campurile tara, oras si cod postal sunt obligatorii';
        }
        if(!state.privacy || !state.terms)
        {
            return 'Trebuie sa acceptati termenii si conditiile'            
        }
        if (state.paymentMethodCash===null)
            return 'Alege metoda de plată';

        return 'success';

    }

    const onSubmitPress = () => {

        firebase.db.collection('books').add({personalInfo:{firstName: state.firstName, lastName: state.lastName, email: state.email, address: state.address, country:state.country, city: state.city, postalCode: state.postalCode}, adults: state.adults, children: state.children, checkIn: state.startDate.toString('dddd, MMMM, yyyy'), checkOut: state.endDate.toString('dddd, MMMM, yyyy'), simpleValue: state.simpleValue, doubleValue: state.doubleValue, tripleValue: state.tripleValue, aptValue: state.aptValue })
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
               <div>
               <input
                    type='text'
                    className = 'formTextInput'
                    placeholder='Tara'
                    onChange={term6 => { setState(prevState => ({ ...prevState, country: term6.target.value })); term6.persist(); }}
                ></input>
                   <input
                    type='text'
                    className = 'formTextInput'
                    placeholder='Oras'
                    onChange={term5 => { setState(prevState => ({ ...prevState, city: term5.target.value })); term5.persist(); }}
                ></input>
               
                <input
                    type='text'
                    className = 'formTextInput'
                    placeholder='Cod Postal'
                    onChange={term7 => { setState(prevState => ({ ...prevState, postalCode: term7.target.value })); term7.persist(); }}
                ></input> </div> <br></br>
                <select className = 'paymentMethod' onChange={(e) => {handleMethod(e.target.value)}} >
                    <option value='initial' selected >Metoda de plata</option>
                    <option value='cash' >Fizic, la check-in.</option>
                    <option value='card'>Online, cu cardul.</option>
                </select> <br></br>
                <label className='formStatements'><input
                    type="checkbox"
                    id = 'privacyCheck'
                    checked = {state.terms}
                    onChange = {() =>{setState(prevState => ({ ...prevState, terms: !state.terms }));}}
                ></input>   Am citit si sunt de acord cu Termenii si conditiile</label> <br></br>
                <label className='formStatements'><input
                    type="checkbox"
                    id = 'termsCheck'
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
                            const message = formValid()
                            if (message === "success") {  onSubmitPress() ; }
                            else alert (message);
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