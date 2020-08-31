import React from 'react';
import {useHistory} from 'react-router-dom';

export default function RoomsTriple () {
    const history = useHistory();
    return <div>
        <div className='roomsTitle'>
            <div onClick = {()=>history.push('/rooms/double')}><img src={require('../../svg/next-black.svg')} alt= '' className='roomBackButton' /></div>
            <p className='roomsTitle-text'>CAMERA TRIPLA</p>
            <div onClick = {()=>history.push('/rooms/apartment')}><img src={require('../../svg/next-black.svg')} alt= '' className='roomNextButton' /></div>
        </div> 
    </div>
}