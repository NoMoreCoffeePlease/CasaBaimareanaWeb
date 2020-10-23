import React from "react";
import { useHistory } from "react-router-dom";
import CarouselComponent from "../../components/CarouselComponent/CarouselComponent";

const roomPics = [
  require("../../svg/room.jfif"),
  require("../../svg/room.jfif"),
  require("../../svg/room.jfif"),
  require("../../svg/room.jfif"),
  require("../../svg/room.jfif"),
  require("../../svg/room.jfif"),
  require("../../svg/room.jfif"),
];

export default function RoomsSimple() {
  const history = useHistory();
  return (
    <div className="roomsContainer">
      <div className="roomsTitle-page">CAMERA SIMPLA</div>

      <div className="roomsPhotos">
        <div className="roomCarouselContainer">
          <CarouselComponent roomPics={roomPics} />
        </div>
      </div>
    </div>
  );
}
