import React, { useState, useEffect } from "react";
import "./ContactModal.css";
import { useHistory } from "react-router-dom";
import { zoomInUp } from "react-animations";
import Radium, { StyleRoot } from "radium";

export default function ConfirmContactModal(props) {
  const history = useHistory();

  // useEffect(() => {
  //     props.barHandler(false);
  //   }, [props]);

  const styles = {
    zoomInUp: {
      animation: "x 0.27s",
      animationName: Radium.keyframes(zoomInUp, "zoomInUp"),
    },
  };

  if (props.show === false) return null;
  return (
    <div>
      <StyleRoot>
        <div className="ConfirmContact" style={styles.zoomInUp}>
          <div className="confirmContactInner">
            <span className="confirmMessageStyle">
              Mesajul dumneavoastra a fost trimis cu succes!
            </span>
            <a href="/" style={{ textDecoration: "none" }}>
              <button className="confirmContactButton">ACASA</button>
            </a>
          </div>
        </div>
      </StyleRoot>
    </div>
  );
}
