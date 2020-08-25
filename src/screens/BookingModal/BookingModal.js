import React, { useState, useEffect } from "react";
import BookingStage0 from "./BookingStage0";
import "./BookingModal.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory,
} from "react-router-dom";

export default function BookingModal(props) {
  const [selectedStage, setSelectedStage] = useState(0);
  const history = useHistory();
  useEffect(() => {
    props.barHandler(false);
  }, [props]);

  if (props.show === false) return null;
  return (
    <div>
      <Router>
        <div className="ModalContainer"></div>
        <div className="Modal">
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

          <div className="title">REZERVA ACUM</div>

          <div className="bookNavigator">
                <Link
                style={{ textDecoration: "none", color: "black" }}
                to="/BookingStage00"
                > 
              
                <div
                    className={
                    selectedStage === 0
                        ? "stageContainer stageSelected"
                        : "stageContainer"
                    }
                >
                    <span className="stage">Pasul 1</span>
                    <span className="subStage">Alege datele.</span>
                </div>
                </Link>
                <Link
                style={{ textDecoration: "none", color: "black" }}
                to="/book?stage1"
                >
                <div
                    className={
                    selectedStage === 0
                        ? "stageContainer stageSelected"
                        : "stageContainer"
                    }
                >
                    <span className="stage">Pasul 2</span>
                    <span className="subStage">Alege camera favorita.</span>
                </div>
                </Link>
                <Link
                style={{ textDecoration: "none", color: "black" }}
                to="/book?stage2"
                >
                <div
                    className={
                    selectedStage === 0
                        ? "stageContainer stageSelected"
                        : "stageContainer"
                    }
                >
                    <span className="stage">Pasul 3</span>
                    <span className="subStage">Informatii personale.</span>
                </div>
                </Link>
          </div>
          <Switch>
            <Route exact path="/BookingStage00" >
              <BookingStage00 />
            </Route>

            <Route exact path="/book?stage1">  <BookingStage01 /></Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

function BookingStage00() {
  return (
    <div>
      <div className="infosContainer">
        {" "}
        <BookingStage0 />{" "}
      </div>
    </div>
  );
}


function BookingStage01() {
    return (
        <div>  <h2>test</h2></div>
    )
}