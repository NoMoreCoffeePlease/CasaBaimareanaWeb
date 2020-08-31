import React from 'react';
import {useHistory} from 'react-router-dom';

export default function RoomsApartment () {
    const history = useHistory();
    return <div>
        <div className='roomsTitle'>
            <div onClick = {()=>history.push('/rooms/triple')}><img src={require('../../svg/next-black.svg')} alt= '' className='roomBackButton' /></div>
            <p className='roomsTitle-text'>APARTAMENT</p>
            <div onClick = {()=>history.push('/rooms/simple')}><img src={require('../../svg/next-black.svg')} alt= '' className='roomNextButton' /></div>
        </div> 
    </div>
}