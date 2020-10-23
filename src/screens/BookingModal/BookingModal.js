import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import BookingStage0 from "./BookingStage0";
import BookingStage1 from "./BookingStage1";
import BookingStage2 from "./BookingStage2";
import ConfirmationModal from "./ConfirmationModal";
import "./BookingModal.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory,
} from "react-router-dom";
import { fadeIn } from "react-animations";
import Radium, { StyleRoot } from "radium";
import { SideBar } from "../../components/SideBar/SideBar";

// TO DO: Booking.com link

const BookingModal = (props) => {
  const totalPlaceToOcuppy =
    props.simpleValue +
    props.doubleValue * 2 +
    props.tripleValue * 3 +
    props.aptValue * 4;
  const styles = {
    fadeIn: {
      animation: "x 0.27s",
      animationName: Radium.keyframes(fadeIn, "fadeIn"),
    },
  };
  const [focusedStage, setFocusedStage] = useState("");
  const [state, setState] = useState({
    startDate: props.startDate !== null ? new Date(props.startDate) : "",
    endDate: props.endDate !== null ? new Date(props.endDate) : "",
    adults: props.adults,
    children: props.children,
    simpleValue: props.simpleValue,
    doubleValue: props.doubleValue,
    tripleValue: props.tripleValue,
    aptValue: props.aptValue,
  });

  const history = useHistory();

  const historyHandler = (path) => {
    history.push(path);
  };

  useEffect(() => {
    props.barHandler(false);
  }, [props]);

  if (props.show === false) return null;

  return (
    <div>
      <StyleRoot>
        <Router>
          <div className="ModalContainer"></div>
          <div className="Modal" style={styles.fadeIn}>
            <div
              className="closeButtonContainer"
              onClick={() => {
                props.modalHandler(false);
                history.push("/");
              }}
            >
              {/* <img src={require('../../svg/close-black.svg')} className='closeButton' alt="test" /> */}
            </div>

            <div className="bookingTitle">REZERVA ACUM</div>

            <div className="bookNavigator">
              <Link
                style={{ textDecoration: "none", color: "black" }}
                to="/BookingStage00"
              >
                <div
                  className={
                    focusedStage === "/BookingStage00"
                      ? "stageContainer stageFocused"
                      : "stageContainer"
                  }
                >
                  <span className="stage">Pasul 1</span>
                  <span className="subStage">Alege datele.</span>
                </div>
              </Link>
              <Link
                className={
                  props.startDate !== undefined &&
                  props.endDate !== undefined &&
                  props.adults !== undefined
                    ? ""
                    : "disabled"
                }
                style={{ textDecoration: "none", color: "black" }}
                to="/BookingStage01"
              >
                <div
                  className={
                    focusedStage === "/BookingStage01"
                      ? "stageContainer stageFocused"
                      : "stageContainer"
                  }
                >
                  <span className="stage">Pasul 2</span>
                  <span className="subStage">Alege camera favorita.</span>
                </div>
              </Link>
              <Link
                className={
                  props.startDate !== undefined &&
                  props.endDate !== undefined &&
                  props.adults !== undefined &&
                  parseInt(props.adults) +
                    parseInt(props.children ? props.children : 0) <=
                    totalPlaceToOcuppy
                    ? ""
                    : "disabled"
                }
                style={{ textDecoration: "none", color: "black" }}
                to="/BookingStage02"
              >
                <div
                  className={
                    focusedStage === "/BookingStage02"
                      ? "stageContainer stageFocused"
                      : "stageContainer"
                  }
                >
                  <span className="stage">Pasul 3</span>
                  <span className="subStage">Informatii personale.</span>
                </div>
              </Link>
              <div
                onClick={() => {
                  props.modalHandler(false);
                  history.push("/");
                }}
              >
                <img
                  src={require("../../svg/close-black.svg")}
                  className="closeButton"
                  alt="test"
                />
              </div>
            </div>
            <Route
              render={({ location }) => {
                const { pathname, key } = location;
                setFocusedStage(pathname);
                return (
                  <Switch>
                    <Route exact path="/BookingStage00">
                      <BookingStage0 />
                    </Route>
                    <Route exact path="/BookingStage01">
                      <BookingStage1
                        modalHandler={props.modalHandler}
                        historyHandler={historyHandler}
                      />
                    </Route>
                    <Route exact path="/BookingStage02">
                      <BookingStage2 />
                      {/* <Route exact path="/rooms/simple">
                <SideBar />
              </Route> */}
                    </Route>

                    <Route exact path="/bookConfirm">
                      <ConfirmationModal modalHandler={props.modalHandler} />
                    </Route>
                  </Switch>
                );
              }}
            />
          </div>
        </Router>
      </StyleRoot>
    </div>
  );
};

const mapStatetoProps = (state) => {
  const {
    startDate,
    endDate,
    adults,
    children,
    simpleValue,
    doubleValue,
    tripleValue,
    aptValue,
  } = state;
  console.log("booking modal", state);
  return {
    startDate,
    endDate,
    adults,
    children,
    simpleValue,
    doubleValue,
    tripleValue,
    aptValue,
  };
};

export default connect(mapStatetoProps, null)(BookingModal);
