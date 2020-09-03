import React, { state, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import firebase from "../../firebase/firebase";

export default function BookingStage1(props) {
  const history = useHistory();
  const [simpleValue, setSimpleValue] = useState(0);
  const [doubleValue, setDoubleValue] = useState(0);
  const [tripleValue, setTripleValue] = useState(0);
  const [availableRooms, setAvailableRooms] = useState({});
  const [aptValue, setAptValue] = useState(0);

  const fetchData = async () => {
    const roomsAvailable = firebase.db
      .collection("room_type")
      .doc("available-rooms");
    const doc = await roomsAvailable.get();
    const simple = doc.data().simple;
    const double = doc.data().double;
    const triple = doc.data().triple;
    const apartment = doc.data().apartment;
    setAvailableRooms({
      simple: simple,
      double: double,
      triple: triple,
      apartment: apartment,
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      {/* <div className='subTitle'>Alege camerele pentru sejurul vostru!</div> */}
      <div className="roomGrid">
        {availableRooms.simple && (
          <div className="roomElementBooking">
            <img
              src={require("../../svg/room.jfif")}
              alt=""
              className="roomImage"
            />
            <div className="elementTitle-container">
              <p className="elementTitle">Camera simpla</p>
            </div>
            <div className="elementSubtitle-container">
              <p className="elementSubtitle">Un pat simplu.</p>
            </div>
            <div className="elementPrice-container">
              <p className="elementPrice">150 RON</p>
            </div>
            <button className="bookingButton">
              <a href="/rooms/simple">Detalii</a>
            </button>
            <div className="counterContainer">
                {simpleValue > 0 ?  <div
                className="counterText"
                onClick={() => setSimpleValue(simpleValue - 1)}
              >
                -
              </div> : <div
                className="counterText"
              >
                -
              </div>}
             
              <span className="counterText">{simpleValue}</span>
              {simpleValue < availableRooms.simple ? <div
                className="counterText"
                onClick={() => setSimpleValue(simpleValue + 1)}
              >
                +
              </div> : <div
                className="counterText"
                
              >
                
              </div>}
             
            </div>
          </div>
        )}
        {availableRooms.double && (
          <div className="roomElementBooking">
            <img
              src={require("../../svg/room.jfif")}
              alt=""
              className="roomImage"
            />
            <div className="elementTitle-container">
              <p className="elementTitle">Camera dubla</p>
            </div>
            <div className="elementSubtitle-container">
              <p className="elementSubtitle">Un pat dublu.</p>
            </div>
            <div className="elementPrice-container">
              <p className="elementPrice">250 RON</p>
            </div>
            <button className="bookingButton">
              <a href="/rooms/simple">Detalii</a>
            </button>
            <div className="counterContainer">
            {doubleValue > 0 ?  <div
                className="counterText"
                onClick={() => setDoubleValue(doubleValue - 1)}
              >
                -
              </div> : <div
                className="counterText"
              >
                -
              </div>}
             
              <span className="counterText">{doubleValue}</span>
              {doubleValue < availableRooms.double ? <div
                className="counterText"
                onClick={() => setDoubleValue(doubleValue + 1)}
              >
                +
              </div> : <div
                className="counterText"
                
              >
                +
              </div>}
            </div>
          </div>
        )}
        {availableRooms.triple && (
          <div className="roomElementBooking">
            <img
              src={require("../../svg/room.jfif")}
              alt=""
              className="roomImage"
            />
            <div className="elementTitle-container">
              <p className="elementTitle">Camera tripla</p>
            </div>
            <div className="elementSubtitle-container">
              <p className="elementSubtitle">Un pat dublu + un pat simplu.</p>
            </div>
            <div className="elementPrice-container">
              <p className="elementPrice">350 RON</p>
            </div>
            <button className="bookingButton">
              <a href="/rooms/simple">Detalii</a>
            </button>
            <div className="counterContainer">
            {tripleValue > 0 ?  <div
                className="counterText"
                onClick={() => setTripleValue(tripleValue - 1)}
              >
                -
              </div> : <div
                className="counterText"
              >
                -
              </div>}
             
              <span className="counterText">{tripleValue}</span>
              {tripleValue < availableRooms.triple ? <div
                className="counterText"
                onClick={() => setTripleValue(tripleValue + 1)}
              >
                +
              </div> : <div
                className="counterText"
                
              >
                +
              </div>}
            </div>
          </div>
        )}
        {availableRooms.apartment && (
          <div className="roomElementBooking">
            <img
              src={require("../../svg/room.jfif")}
              alt=""
              className="roomImage"
            />
            <div className="elementTitle-container">
              <p className="elementTitle">Apartament</p>
            </div>
            <div className="elementSubtitle-container">
              <p className="elementSubtitle">Doua camere duble.</p>
            </div>
            <div className="elementPrice-container">
              <p className="elementPrice">500 RON</p>
            </div>
            <button className="bookingButton">
              <a href="/rooms/simple">Detalii</a>
            </button>
            <div className="counterContainer">
            {aptValue > 0 ?  <div
                className="counterText"
                onClick={() => setAptValue(aptValue - 1)}
              >
                -
              </div> : <div
                className="counterText"
                
              >
                -
              </div>}
             
              <span className="counterText">{aptValue}</span>
              {aptValue < availableRooms.apartment ? <div
                className="counterText"
                onClick={() => setAptValue(aptValue + 1)}
              >
                +
              </div> : <div
                className="counterText"
                
              >
                +
              </div>}
            </div>
          </div>
        )}
      </div>
      <div className="buttonContainer">
        <button
          className="submitButton"
          onClick={() => {
            history.push("/BookingStage00");
          }}
        >
          PASUL ANTERIOR
        </button>

        <button
          className="submitButton"
          onClick={() => {
            history.push("/BookingStage02");
          }}
        >
          PASUL URMATOR
        </button>
      </div>
    </div>
  );
}
