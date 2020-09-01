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

export default function RoomsApartment () {
    const history = useHistory();
    return <div className='roomsContainer'>
        
        <div className='roomsTitle-text'>APARTAMENT</div>
        
        <div className="roomsPhotos">

        <div onClick = {()=>history.push('/rooms/triple')}><img src={require('../../svg/next-black.svg')} alt= '' className='roomBackButton' /></div>
<div className="carouselContainer">
<CarouselComponent roomPics={roomPics}/>
</div>

        <div onClick = {()=>history.push('/rooms/simple')}><img src={require('../../svg/next-black.svg')} alt= '' className='roomNextButton' /></div>
</div>
       
         
       
    </div>
}