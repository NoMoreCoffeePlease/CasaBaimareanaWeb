import React, { useState, useEffect } from "react";
import "./ReviewModal.css";
import { useHistory } from "react-router-dom";
import { fadeIn } from "react-animations";
import Radium, { StyleRoot } from "radium";

export default function ReviewModal(props) {
  const history = useHistory();
  useEffect(() => {
    props.barHandler(false);
  }, [props]);
  const styles = {
    fadeIn: {
      animation: "x 0.27s",
      animationName: Radium.keyframes(fadeIn, "fadeIn"),
    },
  };
  if (props.show === false) return null;
  return (
    <div>
      <StyleRoot>
        <div className="ModalContainer"></div>
        <div className="Modal" style={styles.fadeIn}>
          <div className="reviewTitle">REVIEW</div>

          <div className="reviewGrid">
            <div className="reviewRow">
              <div className="reviewElement review1">
                <span className="reviewContent">
                  "A pleasant surprise. Great conditions for a low price. Nice
                  room, very friendly hosts, good breakfast. "{" "}
                </span>
                <span className="reviewAuthor">- Alex</span>
              </div>
              <div className="reviewElement review2">
                <span className="reviewContent">
                  "A pleasant surprise. Great conditions for a low price. Nice
                  room, very friendly hosts, good breakfast. "{" "}
                </span>
                <span className="reviewAuthor">- Alex</span>
              </div>
              <div className="reviewElement review3">
                <span className="reviewContent">
                  "A pleasant surprise. Great conditions for a low price. Nice
                  room, very friendly hosts, good breakfast. "{" "}
                </span>
                <span className="reviewAuthor">- Alex</span>
              </div>
            </div>
            <div className="reviewRow">
              <div className="reviewElement review4">
                <span className="reviewContent">
                  "A pleasant surprise. Great conditions for a low price. Nice
                  room, very friendly hosts, good breakfast. "{" "}
                </span>
                <span className="reviewAuthor">- Alex</span>
              </div>
              <div className="reviewElement review5">
                <span className="reviewContent">
                  "A pleasant surprise. Great conditions for a low price. Nice
                  room, very friendly hosts, good breakfast. "{" "}
                </span>
                <span className="reviewAuthor">- Alex</span>
              </div>
              <div className="reviewElement review6">
                <span className="reviewContent">
                  "A pleasant surprise. Great conditions for a low price. Nice
                  room, very friendly hosts, good breakfast. "{" "}
                </span>
                <span className="reviewAuthor">- Alex</span>
              </div>
            </div>
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
      </StyleRoot>
    </div>
  );
}
