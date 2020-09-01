import React from 'react';
import './CarouselComponent.css';
import Carousel from 'react-elastic-carousel';

export default function CarouselComponent (props) {
  
   
return <div >
<Carousel  itemsToScroll={1} itemsToShow={1}  renderPagination={({ pages, activePage, onClick }) => {
    return (
      <div className='paginationRow'>
        {pages.map((item, index) => {
          const isActivePage = activePage === item
          return (
            <img
              key={index}
              onClick={() => onClick(item)}
              active={isActivePage}
              src={props.roomPics[index]}
              className='paginationPic'
            />
          )
        })}
      </div>
    )
  }}>
    {props.roomPics.map((item)=>{  
        return <img src={item} alt='' className ='roomPic' />
    })}




</Carousel>
</div>

}