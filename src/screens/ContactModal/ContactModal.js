import React, { useState, useEffect } from "react";
import "./ContactModal.css";
import { useHistory } from "react-router-dom";
import ConfirmContactModal from "./ConfirmContactModal";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import firebase from "../../firebase/firebase";
import { fadeIn } from "react-animations";
import Radium, { StyleRoot } from "radium";

export default function ContactModal(props) {
  const history = useHistory();

  // TO DO: Mail sent.

  useEffect(() => {
    props.barHandler(false);
  }, [props]);
  const styles = {
    fadeIn: {
      animation: "x 0.27s",
      animationName: Radium.keyframes(fadeIn, "fadeIn"),
    },
  };
  // const sendEmail = (e) => {
  //   e.preventDefault();

  // };

  if (props.show === false) return null;

  return (
    <div>
      <Router>
        <StyleRoot>
          {/* <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/emailjs-com@2.3.2/dist/email.min.js"></script>
        <script type="text/javascript">
            {(function(){
                emailjs.init("user_n8V5KhYCmL3WOCFlNIWxw");
            })}();
        </script> */}
          {/* <div className="ModalContainer"></div> */}
          <div className="ModalContainer"></div>
          <div className="Modal" style={styles.fadeIn}>
            <Switch>
              {" "}
              <Route exact path="/contactConfirm">
                <div>
                  <div className="ConfirmContactContainer"></div>
                  <ConfirmContactModal />
                </div>
              </Route>
            </Switch>

            <div className="contactTitle">CONTACT</div>
            <div className="formContainerContact">
              <span className="telefonStyle">Telefon</span>
              <div className="ContactinputContainer phoneSeparator">
                <p className="phoneNumber">+40-7xx-xxx-xxx</p>
              </div>
              <span className="emailStyle">Trimite-ne un e-mail</span>
              <div className="ContactinputContainer">
                <input
                  // id = "adults"
                  placeholder="Adresa dvs. de e-mail"
                  autoComplete="off"
                  className="ContactSmallerInput"
                  // onChange = {id}

                  //   value={adults!== 0 ? adults : null}
                ></input>
              </div>
              <div className="contactSeparator"></div>
              <div className="ContactinputContainer">
                <input
                  // id = "adults"
                  placeholder="Subiectul mesajului"
                  autoComplete="off"
                  className="ContactSmallerInput"
                  // onChange = {id}

                  //   value={adults!== 0 ? adults : null}
                ></input>
              </div>
              <div className="contactSeparator"></div>
              <div className="ContactinputContainer">
                <input
                  // id = "adults"
                  placeholder="Numele si prenumele dumneavoastra"
                  autoComplete="off"
                  className="ContactSmallerInput"
                  // onChange = {id}

                  //   value={adults!== 0 ? adults : null}
                ></input>
              </div>
              <div className="contactSeparator"></div>
              <div className="ContactInputContainerEnd">
                <input
                  // id = "adults"
                  placeholder="Continutul mesajului"
                  autoComplete="off"
                  className="ContactSmallerInput"
                  // onChange = {id}

                  //   value={adults!== 0 ? adults : null}
                ></input>
              </div>
              <div className="contactSeparator"></div>
              <Link className="contactButtonContainer" to="/contactConfirm">
                <button
                  //onClick={() => sendEmail()}
                  className="sendButton"
                >
                  TRIMITE MESAJUL
                </button>
              </Link>
            </div>

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

          <link
            rel="stylesheet"
            href="//maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css"
          />
          <link
            rel="stylesheet"
            href="//maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap-theme.min.css"
          />
        </StyleRoot>
      </Router>
    </div>
  );
}
