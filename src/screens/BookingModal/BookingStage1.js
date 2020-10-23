import React, { state, useState, useEffect } from "react";
import {
  useHistory,
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect,
} from "react-router-dom";
import firebase from "../../firebase/firebase";
import { ADD_ROOM_NUMBERS } from "../../redux/dataActions";
import { connect } from "react-redux";
import RoomsSimple from "../RoomsModal/RoomsSimple";
import RoomsDouble from "../RoomsModal/RoomsDouble";
import RoomsTriple from "../RoomsModal/RoomsTriple";
import RoomsApartment from "../RoomsModal/RoomsApartment";

function BookingStage1(props) {
  const history = useHistory();
  const [simpleValue, setSimpleValue] = useState(
    props.simpleValue ? props.simpleValue : 0
  );
  const [doubleValue, setDoubleValue] = useState(
    props.doubleValue ? props.doubleValue : 0
  );
  const [tripleValue, setTripleValue] = useState(0);
  const [availableRooms, setAvailableRooms] = useState({});
  const [aptValue, setAptValue] = useState(0);
  const totalPlaceToOcuppy =
    simpleValue + doubleValue * 2 + tripleValue * 3 + aptValue * 4;

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
  console.log(
    totalPlaceToOcuppy,
    parseInt(props.adults) + parseInt(props.children)
  );
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <div className="componentContainer">
        <div className="roomGrid">
          {availableRooms.simple ? (
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

              <div className="counterContainer">
                {simpleValue > 0 ? (
                  <div
                    className="counterText counterButton"
                    onClick={() => setSimpleValue(simpleValue - 1)}
                  >
                    -
                  </div>
                ) : (
                  <div className="counterText-disabled">-</div>
                )}

                <span className="counterText">{simpleValue}</span>
                {simpleValue < availableRooms.simple ? (
                  <div
                    className="counterText counterButton"
                    onClick={() => setSimpleValue(simpleValue + 1)}
                  >
                    +
                  </div>
                ) : (
                  <div className="counterText-disabled"></div>
                )}
              </div>
            </div>
          ) : null}
          {availableRooms.double ? (
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

              <div className="counterContainer">
                {doubleValue > 0 ? (
                  <div
                    className="counterText counterButton"
                    onClick={() => setDoubleValue(doubleValue - 1)}
                  >
                    -
                  </div>
                ) : (
                  <div className="counterText-disabled">-</div>
                )}

                <span className="counterText">{doubleValue}</span>
                {doubleValue < availableRooms.double ? (
                  <div
                    className="counterText counterButton"
                    onClick={() => setDoubleValue(doubleValue + 1)}
                  >
                    +
                  </div>
                ) : (
                  <div className="counterText-disabled">+</div>
                )}
              </div>
            </div>
          ) : null}
          {availableRooms.triple ? (
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

              <div className="counterContainer">
                {tripleValue > 0 ? (
                  <div
                    className="counterText counterButton"
                    onClick={() => setTripleValue(tripleValue - 1)}
                  >
                    -
                  </div>
                ) : (
                  <div className="counterText-disabled">-</div>
                )}

                <span className="counterText">{tripleValue}</span>
                {tripleValue < availableRooms.triple ? (
                  <div
                    className="counterText counterButton"
                    onClick={() => setTripleValue(tripleValue + 1)}
                  >
                    +
                  </div>
                ) : (
                  <div className="counterText-disabled">+</div>
                )}
              </div>
            </div>
          ) : null}
          {availableRooms.apartment ? (
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

              <div className="counterContainer">
                {aptValue > 0 ? (
                  <div
                    className="counterText counterButton"
                    onClick={() => setAptValue(aptValue - 1)}
                  >
                    -
                  </div>
                ) : (
                  <div className="counterText-disabled">-</div>
                )}

                <span className="counterText">{aptValue}</span>
                {aptValue < availableRooms.apartment ? (
                  <div
                    className="counterText counterButton"
                    onClick={() => setAptValue(aptValue + 1)}
                  >
                    +
                  </div>
                ) : (
                  <div className="counterText-disabled">+</div>
                )}
              </div>
            </div>
          ) : null}
        </div>

        <div className="bottomContainerBook ">
          {!(
            parseInt(props.adults) +
              parseInt(props.children ? props.children : 0) <=
            totalPlaceToOcuppy
          ) && (
            <span className="selectMore">Nu ati ocupat destule camere.</span>
          )}

          <div
            className={
              !(
                parseInt(props.adults) +
                  parseInt(props.children ? props.children : 0) <=
                totalPlaceToOcuppy
              )
                ? "buttonContainer "
                : "buttonContainer specialSpacing"
            }
          >
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
                props.historyHandler("/rooms");
              }}
            >
              Vezi camere
            </button>
            <button
              className="submitButton"
              onClick={() => {
                props.addRoomNumbers(
                  simpleValue,
                  doubleValue,
                  tripleValue,
                  aptValue
                );
                history.push("/BookingStage02");
              }}
              disabled={
                !(
                  parseInt(props.adults) +
                    parseInt(props.children ? props.children : 0) <=
                  totalPlaceToOcuppy
                )
              }
            >
              PASUL URMATOR
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

const mapStatetoProps = (state) => {
  const {
    adults,
    children,
    simpleValue,
    doubleValue,
    tripleValue,
    aptValue,
  } = state;
  return { adults, children, simpleValue, doubleValue, tripleValue, aptValue };
};

const mapDispatchtoProps = (dispatch) => ({
  addRoomNumbers: (simpleValue, doubleValue, tripleValue, aptValue) =>
    dispatch({
      type: ADD_ROOM_NUMBERS,
      payload: {
        simpleValue: simpleValue,
        doubleValue: doubleValue,
        tripleValue: tripleValue,
        aptValue: aptValue,
      },
    }),
});

export default connect(mapStatetoProps, mapDispatchtoProps)(BookingStage1);
