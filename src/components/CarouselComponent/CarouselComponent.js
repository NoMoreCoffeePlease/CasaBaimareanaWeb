import React from "react";
import Carousel from "react-elastic-carousel";
import theme from "./CarouselComponent.css";

function myArrow({ type, onClick, isEdge }) {

  const pointer = (type === 'PREV' ? (
    <div>
      <img
        src={require("../../svg/next-black.svg")}
        alt=""
        className="carouselBackButton"
      />
    </div>
  ) : (
    <div>
      <img
        src={require("../../svg/next-black.svg")}
        alt=""
        className="carouselNextButton"
      />
    </div>
  ));
  return (
    <div onClick={onClick} disabled={isEdge}>
      {pointer}
    </div>
  );
}

export default function CarouselComponent(props) {
  return (
    <div className='carouselMainContainer'>
      <Carousel
        renderArrow={myArrow}
        theme={theme}
        itemsToScroll={1}
        itemsToShow={1}
        renderPagination={({ pages, activePage, onClick }) => {
          return (
            <div className="paginationRow">
              {pages.map((item, index) => {
                const isActivePage = activePage === item;
                return (
                  <img
                    key={index}
                    onClick={() => onClick(item)}
                    active={isActivePage}
                    src={props.roomPics[index]}
                    className="paginationPic"
                    alt=""
                  />
                );
              })}
            </div>
          );
        }}
      >
        {props.roomPics.map((item) => {
          return <div className="roomPic" style={{backgroundImage:'url('+ item +')'}}>
            <div className='imageCaptionContainer'>
              <p className='imageCaptionTitle'>Descriere</p>
              <p className='imageCaptionSubtitle'>Descriere despre poza afisata. Lorem ipsum dolor sit amet</p>
            </div>
          </div>;
        })}
      </Carousel>
    </div>
  );
}
