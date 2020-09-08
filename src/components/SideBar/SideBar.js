import React, { useState } from "react";
import "./SideBar.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { slideInLeft } from "react-animations";
import Radium, { StyleRoot } from "radium";
import RoomsModal from "../../screens/RoomsModal/RoomsModal";
import BookingModal from "../../screens/BookingModal/BookingModal";
import FoodModal from "../../screens/FoodModal/FoodModal";
import CityModal from "../../screens/CityModal/CityModal";
import ContactModal from "../../screens/ContactModal/ContactModal";
import AboutUsModal from "../../screens/AboutUsModal/AboutUsModal";
import BookingStage1 from "../../screens/BookingModal/BookingStage1";
import { HomeScreen } from "../../screens/HomeScreen/HomeScreen";
import ReviewModal from "../../screens/AboutUsModal/ReviewModal";
import PrivacyModal from "../../screens/PrivacyModal/PrivacyModal";
import CookiesModal from "../../screens/CookiesModal/CookiesModal";

export const SideBar = (props) => {
  const styles = {
    slideInLeft: {
      animation: "x 0.27s",
      animationName: Radium.keyframes(slideInLeft, "slideInLeft"),
    },
  };
  const [shownModal, setShownModal] = useState(true);

  const modalHandler = (bool) => {
    setShownModal(bool);
  };

  return (
    <Router>
      {" "}
      <StyleRoot>
      <HomeScreen modalHandler={props.modalHandler} />
        {props.show ? (
          <div className="sideBar-frame" style={styles.slideInLeft}>
            <div onClick={() => props.barHandler(false)}>
              <img
                src={require("../../svg/close-black.svg")}
                className="closeButton"
                alt=""
              ></img>
            </div>
            <div className="sideBar-textFrame">
              <ul>
                <li key="Home">
                  <Link
                    className="sideBar-text"
                    style={{ textDecoration: "none" }}
                    to="/"
                  >
                    Home
                  </Link>
                </li>
                <li key="Camere">
                  <Link
                    className="sideBar-text"
                    style={{ textDecoration: "none" }}
                    to="/rooms"
                  >
                    Camere
                  </Link>
                </li>
                <li key="Restaurant">
                  <Link
                    className="sideBar-text"
                    style={{ textDecoration: "none" }}
                    to="/food"
                  >
                    Restaurant
                  </Link>
                </li>
                <li key="Baia Mare">
                  <Link
                    className="sideBar-text"
                    style={{ textDecoration: "none" }}
                    to="/city"
                  >
                    Baia Mare
                  </Link>
                </li>
                <li key="Despre noi">
                  <Link
                    className="sideBar-text"
                    style={{ textDecoration: "none" }}
                    to="/about-us"
                  >
                    Facilitati
                  </Link>
                </li>
                <li key="Rezerva acum">
                  <Link
                    className="sideBar-book"
                    style={{ textDecoration: "none" }}
                    to="/BookingStage00"
                  >
                    Rezerva acum
                  </Link>
                </li>
                <li key={"Contact"}>
                  <Link
                    className="sideBar-text"
                    style={{ textDecoration: "none" }}
                    to="/contact"
                  >
                    Contact
                  </Link>
                </li>
                {/* <li key={'Alege Camera'} >
                                    <Link className="sideBar-book" style={{ textDecoration: 'none'}} to='/BookingStage01'>Alege camera</Link>
                                </li> */}
              </ul>
            </div>
            <a href="https://www.facebook.com/casa.baimareana.75" target="_blank">
              <img
                src={require("../../svg/facebook-black.svg")}
                className="fb_icon"
                alt=""
              ></img>
            </a>
            <div className="sideBar-footerContainer">
              <ul>
                <li key="anpc">
                  <a
                    href="https://anpc.ro/" target="_blank"
                    className="sideBar-footer"
                    style={{ textDecoration: "none" }}
                    to="/anpc"
                  >
                    ANPC
                  </a>
                </li>
                <li key="Privacy">
                  <Link
                    className="sideBar-footer"
                    style={{ textDecoration: "none" }}
                    to="/privacy"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li key="Cookies">
                  <Link
                    className="sideBar-footer"
                    style={{ textDecoration: "none" }}
                    to="/cookies"
                  >
                    Cookies Policy
                  </Link>
                </li>
              </ul>
              <Switch>
                <Route
                  path="/privacy"
                  exact={true}
                  key="Privacy"
                  component={() => {
                    console.log("Privacy");
                    return null;
                  }}
                />
                <Route
                  path="/cookies"
                  exact={true}
                  key="Cookies"
                  component={() => {
                    console.log("Cookies");
                    return null;
                  }}
                />
                )
              </Switch>
            </div>{" "}
          </div>
        ) : (
          <div />
        )}
        <Switch>
          <Route
            key={"Home"}
            path={"/"}
            exact={true}
            component={() => {
              console.log("Home");
              return null;
            }}
          />
          {/* <Route 
                key={'Alege Camera'}
                path={'/BookingStage01'}
                exact={true}
                component={() => {
                    setShownModal(true);
                    return <BookingStage1 show={shownModal} barHandle={props.barHandler} modalHandler={modalHandler} />
                }}
                /> */}

          <Route
            key={"Camere"}
            path={"/rooms"}
            exact={true}
            component={() => {
              console.log("Rooms");
              setShownModal(true);
              return (
                <RoomsModal
                  show={shownModal}
                  barHandler={props.barHandler}
                  modalHandler={modalHandler}
                />
              );
            }}
          />
          <Route
            key={"Restaurant"}
            path={"/food"}
            exact={true}
            component={() => {
              console.log("Food");
              setShownModal(true);
              return (
                <FoodModal
                  show={shownModal}
                  barHandler={props.barHandler}
                  modalHandler={modalHandler}
                />
              );
            }}
          />
          <Route
            key={"Baia Mare"}
            path={"/city"}
            exact={true}
            component={() => {
              console.log("City");
              setShownModal(true);
              return (
                <CityModal
                  show={shownModal}
                  barHandler={props.barHandler}
                  modalHandler={modalHandler}
                />
              );
            }}
          />
          <Route
            key={"Despre noi"}
            path={"/about-us"}
            exact={true}
            component={() => {
              setShownModal(true);
              console.log("About");
              return (
                <AboutUsModal
                  show={shownModal}
                  barHandler={props.barHandler}
                  modalHandler={modalHandler}
                />
              );
            }}
          />
          <Route
            key={"Rezerva acum"}
            path={"/BookingStage01"}
            exact={true}
            component={() => {
              setShownModal(true);
              return (
                <BookingModal
                  show={shownModal}
                  barHandler={props.barHandler}
                  modalHandler={modalHandler}
                />
              );
            }}
          />
          <Route
            key={"Contact"}
            path={"/contact"}
            exact={true}
            component={() => {
              console.log("Contact");
              setShownModal(true);
              return (
                <ContactModal
                  show={shownModal}
                  barHandler={props.barHandler}
                  modalHandler={modalHandler}
                />
              );
            }}
          />

          <Route
            key={"Rezerva acum"}
            path={"/BookingStage00"}
            exact={true}
            component={() => {
              setShownModal(true);
              return (
                <BookingModal
                  show={shownModal}
                  barHandler={props.barHandler}
                  modalHandler={modalHandler}
                />
              );
            }}
          />
          <Route
            key={"Review"}
            path={"/reviews"}
            exact={true}
            component={() => {
              setShownModal(true);
             
              return (
                <ReviewModal
                  show={shownModal}
                  barHandler={props.barHandler}
                  modalHandler={modalHandler}
                />
              );
            }}
          />

        <Route
            key={"Privacy"}
            path={"/privacy"}
            exact={true}
            component={() => {              
              setShownModal(true);
              return (
                <PrivacyModal
                  show={shownModal}
                  barHandler={props.barHandler}
                  modalHandler={modalHandler}
                />
              );
            }}
          />

        <Route
            key={"Cookies"}
            path={"/cookies"}
            exact={true}
            component={() => {              
              setShownModal(true);
              return (
                <CookiesModal
                  show={shownModal}
                  barHandler={props.barHandler}
                  modalHandler={modalHandler}
                />
              );
            }}
          />
        </Switch>
      </StyleRoot>
    </Router>
  );
};
