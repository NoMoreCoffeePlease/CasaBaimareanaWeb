import React from 'react';
import {useHistory} from 'react-router-dom';
import CarouselComponent from '../../components/CarouselComponent/CarouselComponent'
// import SlideShow from 'react-image-show';

const roomPics =[
    require('../../svg/room.jfif'),
    require('../../svg/room.jfif'),
    require('../../svg/room.jfif'),
    require('../../svg/room.jfif'),
    require('../../svg/room.jfif'),
    require('../../svg/room.jfif'),
    require('../../svg/room.jfif')
]

export default function RoomsTriple () {
    const history = useHistory();
    return <div className='roomsContainer'>
        
        <div className='roomsTitle-text'>CAMERA TRIPLA</div>
        
        <div className="roomsPhotos">

        <div onClick = {()=>history.push('/rooms/double')}><img src={require('../../svg/next-black.svg')} alt= '' className='roomBackButton' /></div>
<div className="carouselContainer">
<CarouselComponent roomPics={roomPics}/>
</div>

        <div onClick = {()=>history.push('/rooms/apartment')}><img src={require('../../svg/next-black.svg')} alt= '' className='roomNextButton' /></div>
</div>
       
         
       
    </div>
}