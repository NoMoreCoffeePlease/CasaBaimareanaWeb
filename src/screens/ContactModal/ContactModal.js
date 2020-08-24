import React, { useState, useEffect } from 'react';
import './ContactModal.css';
import { useHistory } from "react-router-dom";
import emailjs from 'emailjs-com';

export default function ContactModal(props) {

    const history = useHistory();
    useEffect(() => {
        props.barHandler(false);
    }, [props])

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', e.target, 'YOUR_USER_ID')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      }

    if (props.show === false) return null;

    return <div>
        {/* <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/emailjs-com@2.3.2/dist/email.min.js"></script>
        <script type="text/javascript">
            {(function(){
                emailjs.init("user_n8V5KhYCmL3WOCFlNIWxw");
            })}();
        </script> */}
        <div className="ModalContainer"></div>
        <div className='Modal'>
            <div
                onClick={() => { props.modalHandler(false); history.push("/") }}
            >
                <img src={require('../../svg/close-black.svg')} className='closeButton' alt="test" />
            </div>

            <div className='title'>ContactTitle test</div>

            <div className='subTitle'>Subtitlu test</div>
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
    </div>

}