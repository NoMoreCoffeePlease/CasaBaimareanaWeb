import React, { useState, useEffect } from "react";
import "./ContactModal.css";
import { useHistory } from "react-router-dom";
import emailjs from "emailjs-com";
import { id } from "date-fns/locale";
import ConfirmContactModal from "./ConfirmContactModal";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default function ContactModal(props) {
  const history = useHistory();
  useEffect(() => {
    props.barHandler(false);
  }, [props]);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", e.target, "YOUR_USER_ID")
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  if (props.show === false) return null;

  return (
    <div>
        <Router>
      {/* <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/emailjs-com@2.3.2/dist/email.min.js"></script>
        <script type="text/javascript">
            {(function(){
                emailjs.init("user_n8V5KhYCmL3WOCFlNIWxw");
            })}();
        </script> */}
      {/* <div className="ModalContainer"></div> */}
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
              // onClick={()=> history.push('/contactConfirm')}
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

        {/* <form onSubmit = {sendEmail}>
            <input type="hidden" name="contact_number" />
                <label>Name</label>
                <input type="text" name="user_name" />
                <label>Email</label>
                <input type="email" name="user_email" />
                <label>Message</label>
                <textarea name="message" />
                <input type="submit" value="Send" />   
            </form> */}
      </div>
      </Router>
    </div>
  );
}
