import React, { useState, useEffect } from "react";
import "./ContactModal.css";
import { useHistory } from "react-router-dom";
import ConfirmContactModal from "./ConfirmContactModal";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import firebase from '../../firebase/firebase';

export default function ContactModal(props) {

  const history = useHistory();


  useEffect(() => {
    props.barHandler(false);
  }, [props]);

  const sendEmail = () => {
    firebase.db.collection('books').add({to: 'xd.norbii@gmail.com',
    message: {
      subject: 'Hello from Firebase!',
      text: 'This is the plaintext section of the email body.',
      html: 'This is the <code>HTML</code> section of the email body.',
    }})
  };

  if (props.show === false) return null;

  return (
    <div>
      <Router>
        <div className="Modal">

          <Switch>
            {" "}
            <Route exact path="/contactConfirm">
              <div>

                <div className="ConfirmContactContainer"></div>
                <ConfirmContactModal />
              </div>
            </Route>
          </Switch>

          <div className="title">CONTACT</div>
          <div className="formContainerContact">
            <span className="telefonStyle">Telefon</span>
            <div className="ContactinputContainer">
              <input
                // id = "adults"
                placeholder="+40-7xx-xxx-xxx"
                autoComplete="off"
                className="ContactInput"
              // onChange = {id}

              //   value={adults!== 0 ? adults : null}
              ></input>
            </div>

            <div className="contactSeparator"></div>
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
                onClick={() => sendEmail()}
                className="detailButton"
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
      </Router>
      <div>
        
          <link rel="stylesheet" href="//maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css"/>
          <link rel="stylesheet" href="//maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap-theme.min.css"/>
        
      </div>
    </div>
  );
}
