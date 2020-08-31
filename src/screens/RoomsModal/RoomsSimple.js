import React from 'react';
import {useHistory} from 'react-router-dom';
import SlideShow from 'react-image-show';

export default function RoomsSimple () {
    const history = useHistory();
    return <div>
        <div className='roomsTitle'>
            <div onClick = {()=>history.push('/rooms/apartment')}><img src={require('../../svg/next-black.svg')} alt= '' className='roomBackButton' /></div>
            <p className='roomsTitle-text'>CAMERA SIMPLA</p>
            <div onClick = {()=>history.push('/rooms/double')}><img src={require('../../svg/next-black.svg')} alt= '' className='roomNextButton' /></div>
        </div> 
    </div>
}