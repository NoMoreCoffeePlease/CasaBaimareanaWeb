import React from "react";
import Carousel from "react-elastic-carousel";
import theme from "./CarouselComponent.css";

// TO DO : Fix renderArrow!

function myArrow({ type, onClick, isEdge }) {
  console.log(type);
  const pointer = (type === 'PREV' ? (
    <div>
      <img
        src={require("../../svg/next-black.svg")}
        alt
        className="roomBackButton"
      />
    </div>
  ) : (
    <div>
      <img
        src={require("../../svg/next-black.svg")}
        alt
        className="roomNextButton"
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
    <div>
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
                  />
                );
              })}
            </div>
          );
        }}
      >
        {props.roomPics.map((item) => {
          return <img src={item} alt="" className="roomPic" />;
        })}
      </Carousel>
    </div>
  );
}
