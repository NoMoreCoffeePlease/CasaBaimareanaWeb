
import React, { useState, useEffect } from "react";
import BookingStage0 from './BookingStage0';
import BookingStage1 from './BookingStage1';
import BookingStage2 from './BookingStage2';
import ConfirmationModal from './ConfirmationModal';
import "./BookingModal.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory,
 
} from "react-router-dom";


export default function BookingModal(props) {
  // const [selectedStage, setSelectedStage] = useState(false);
  const history = useHistory();
  useEffect(() => {
    props.barHandler(false);
  }, [props]);

  if (props.show === false) return null;

//  /* TO DO : Fix stageSelected and changing the font on text selectted *

  return (
    <div>
      {/* {selectedStage === true ? <div className="stageSelected"> </div> : <div className="stageContainer"> </div>  } */}
      <Router>
        <div className="ModalContainer"></div>
        <div className='Modal'>
            <div className='closeButtonContainer'
                onClick={() => { props.modalHandler(false);history.push("/") }}
            >
                {/* <img src={require('../../svg/close-black.svg')} className='closeButton' alt="test" /> */}
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

          <div className="title">REZERVA ACUM</div>

          <div className="bookNavigator">
                <Link
                style={{ textDecoration: "none", color: "black" }}
                to="/BookingStage00"
                > 
              
                <div
                    className="stageContainer"
                    
                >
                    <span className="stage">Pasul 1</span>
                    <span className="subStage">Alege datele.</span>
                </div>
                
                </Link>
                <Link
                style={{ textDecoration: "none", color: "black" }}
                to="/BookingStage01"
                >
                <div
                    className="stageContainer"
                   
                >
                    <span className="stage">Pasul 2</span>
                    <span className="subStage">Alege camera favorita.</span>
                </div>
                </Link>
                <Link
                style={{ textDecoration: "none", color: "black" }}
                to="/BookingStage02"
                >
                <div
                    className="stageContainer"
                   
                >
                    <span className="stage">Pasul 3</span>
                    <span className="subStage">Informatii personale.</span>
                </div>
                </Link>
               
          </div>
          <Switch>
            <Route exact path="/BookingStage00" >
              <BookingStage0 />
            </Route>
            <Route exact path="/BookingStage01"> 
             <BookingStage1 />
            </Route>
            <Route exact path="/BookingStage02" >
            <BookingStage2 />
            </Route>

            <Route exact path='/bookConfirm'> 
              <ConfirmationModal />
            </Route>
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


