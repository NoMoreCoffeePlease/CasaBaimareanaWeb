import React, { useState, useEffect } from 'react';
import { useHistory, BrowserRouter as Router, Route, Switch,Link } from "react-router-dom";
import RoomsHome from './RoomsHome';
import RoomsSimple from './RoomsSimple';
import RoomsDouble from './RoomsDouble';
import RoomsTriple from './RoomsTriple';
import RoomsApartment from './RoomsApartment';
import './RoomsModal.css';
import {fadeIn} from 'react-animations';
import Radium, {StyleRoot} from 'radium';
import slideInRight from 'react-animations/lib/slide-in-right';

// TO DO: Animations

export default function RoomsModal(props) {

    const history = useHistory();
    useEffect(()=>{
        props.barHandler(false);
    },[props])
    const [isClose,setIsClose] = useState(true);
    const styles= {
        fadeIn:{
            animation: "x 0.27s",
            animationName: Radium.keyframes(fadeIn, "fadeIn"),
        },
        slideInRight: {
            animation: "x 0.5s",
            animationName: Radium.keyframes(slideInRight, 'slideInRight')
        }
    };

    if (props.show === false) return null;
    return <div>
        <Router>
        <StyleRoot>
        <div className="ModalContainer"></div>

        <div className='Modal' style={styles.fadeIn}>
                        
        <Switch>
            <Route exact path='/rooms'component={()=>{
                setIsClose(true);
                 return <RoomsHome />
            }}>
                
            </Route>
            <Route exact path='/rooms/simple'component={()=>{
                setIsClose(false);
                 return <RoomsSimple />
            }}>
                
            </Route>
            <Route exact path='/rooms/double'component={()=>{
                setIsClose(false);
                 return <RoomsDouble />
            }}>
                
            </Route>
            <Route exact path='/rooms/triple'component={()=>{
                setIsClose(false);
                 return <RoomsTriple />
            }}>
                
            </Route>
            <Route exact path='/rooms/apartment'component={()=>{
                setIsClose(false);
                 return <RoomsApartment />
            }}>
                
            </Route>
        </Switch>
        <div
                  onClick={() => { 
                    let urlToGo = window.location.href.split('/');
                    urlToGo.pop();
                    props.modalHandler(false); history.push(urlToGo.join('/').split(document.location.origin)[1])
                }}
            >
                <img src={isClose?require('../../svg/close-black.svg'):require('../../svg/arrowBack-black.svg')} className='closeButton' alt="test" />
            </div>
        </div>
        </StyleRoot>
        </Router>
        </div>
        
}