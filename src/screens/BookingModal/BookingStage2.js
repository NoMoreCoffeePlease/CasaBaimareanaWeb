import React, { useState } from 'react';
import './BookingModal.css';

export default function BookingStage2() {
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
        terms: false
    });
    return <div >
        <div className='subTitle'><p className='subTitleText'>Completeaza datele personale si alege modalitatea de plata pentru finalizarea comenzii!</p></div>
        <div className='formContainer'>
            <form
                onChange={console.log(state)}
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
                    checked = {state.terms}
                    onChange = {() =>{setState(prevState => ({ ...prevState, terms: !state.terms }));}}
                ></input>   Am citit si sunt de acord cu Termenii si conditiile</label> <br></br>
                <label className='formStatements'><input
                    type="checkbox"
                    checked = {state.privacy}
                    onChange = {() =>{setState(prevState => ({ ...prevState, privacy: !state.privacy }));}}
                ></input>   Am citit si sunt de acord cu prelucrarea datelor cu caracter personal.</label> <br></br>
                <input className = 'submitButton' type='submit' value='REZERVA'></input>
            </form>
        </div>
    </div>
}