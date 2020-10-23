import React from "react";
import { Link, useHistory } from "react-router-dom";

export default function RoomsHome() {
  return (
    <div>
      <div className="roomsTitle firstTitle-spacing">CAMERE</div>

      <div className="roomsSubTitle">
        <p className="roomsSubTitle-text">
          Vezi oferta noastra si alege ce ti se potriveste cel mai bine!
        </p>
      </div>
      <div className="roomsGrid">
        <div className="roomRow">
          <div className="roomsElement">
            <h0 className="roomsElement-title">Camera simpla</h0>
            <h0 className="roomsElement-subTitle">
              Descriere despre camera. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Proin sit amet dignissim leo.
            </h0>
            <Link
              style={{ textDecoration: "none", color: "black" }}
              to="/rooms/simple"
            >
              <button className="roomButton">Detalii</button>{" "}
            </Link>
          </div>

          <div className="roomsElement">
            <h0 className="roomsElement-title">Camera dubla</h0>
            <h0 className="roomsElement-subTitle">
              Descriere despre camera. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Proin sit amet dignissim leo.
            </h0>
            <Link
              style={{ textDecoration: "none", color: "black" }}
              to="/rooms/double"
            >
              <button className="roomButton">Detalii</button>{" "}
            </Link>
          </div>
          <div className="roomsElement">
            <h0 className="roomsElement-title">Camera tripla</h0>
            <h0 className="roomsElement-subTitle">
              Descriere despre camera. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Proin sit amet dignissim leo.
            </h0>
            <Link
              style={{ textDecoration: "none", color: "black" }}
              to="/rooms/triple"
            >
              <button className="roomButton">Detalii</button>{" "}
            </Link>
          </div>
          <div className="roomsElement">
            <h0 className="roomsElement-title">Apartament</h0>
            <h0 className="roomsElement-subTitle">
              Descriere despre camera. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Proin sit amet dignissim leo.
            </h0>
            <Link
              style={{ textDecoration: "none", color: "black" }}
              to="/rooms/apartment"
            >
              <button className="roomButton">Detalii</button>{" "}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
