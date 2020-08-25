import React, { useState } from 'react';
import './SideBar.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import { slideInLeft } from 'react-animations';
import Radium, { StyleRoot } from 'radium';
import RoomsModal from '../../screens/RoomsModal/RoomsModal';
import BookingModal from '../../screens/BookingModal/BookingModal';
import FoodModal from '../../screens/FoodModal/FoodModal';
import CityModal from '../../screens/CityModal/CityModal';
import ContactModal from '../../screens/ContactModal/ContactModal';

export const SideBar = (props) => {
    const styles = {
        slideInLeft: {
            animation: 'x 0.27s',
            animationName: Radium.keyframes(slideInLeft, 'slideInLeft')
        }
    }
    const [shownModal, setShownModal] = useState(true)

    const modalHandler = (bool) => {
        setShownModal(bool)
    }

    return (
        <Router> <StyleRoot>
            {props.show ?
                <div
                    className="sideBar-frame" style={styles.slideInLeft}
                >

                    <div
                        onClick={() => props.barHandler(false)}
                    ><img src={require('../../svg/close-black.svg')} className="closeButton" alt=""></img></div>
                    <div className="sideBar-textFrame">
                        <ul>
                            <li key='Home'>
                                <Link className="sideBar-text" style={{ textDecoration: 'none' }} to='/'>Home</Link></li>
                            <li key='Camere'>
                                <Link className="sideBar-text" style={{ textDecoration: 'none' }} to='/rooms'>Camere</Link></li>
                            <li key='Restaurant'>
                                <Link className="sideBar-text" style={{ textDecoration: 'none' }} to='/food'>Restaurant</Link></li>
                            <li key='Baia Mare'>
                                <Link className="sideBar-text" style={{ textDecoration: 'none' }} to='/city'>Baia Mare</Link></li>
                            <li key='Despre noi'>
                                <Link className="sideBar-text" style={{ textDecoration: 'none' }} to='/about-us'>Despre noi</Link></li>
                            <li key='Rezerva acum'>
                                <Link className="sideBar-book" style={{ textDecoration: 'none' }} to='/bookstage0'>Rezerva acum</Link></li>
                            <li key={'Contact'}>
                                <Link className="sideBar-text" style={{ textDecoration: 'none' }} to='/contact'>Contact</Link></li>
                        </ul>

                    </div>
                    <a
                        href="https://www.facebook.com/casa.baimareana.75"
                    >
                        <img src={require('../../svg/facebook-black.svg')} className="fb_icon" alt=""></img></a>
                    <div className='sideBar-footerContainer'>
                        <ul >

                            <li key='anpc'>
                                <a href='https://anpc.ro/' className="sideBar-footer" style={{ textDecoration: 'none' }} to='/anpc'>ANPC</a>
                            </li>
                            <li key='Privacy'>
                                <Link className="sideBar-footer" style={{ textDecoration: 'none' }} to='/privacy'>Privacy Policy</Link>
                            </li>
                            <li key='Cookies'>
                                <Link className="sideBar-footer" style={{ textDecoration: 'none' }} to='/cookies'>Cookies Policy</Link>
                            </li>
                        </ul>
                        <Switch>
                            <Route
                                path='/privacy'
                                exact={true}
                                key='Privacy'
                                component={() => {
                                    console.log('Privacy');
                                    return null;
                                }}
                            />
                            <Route
                                path='/cookies'
                                exact={true}
                                key='Cookies'
                                component={() => {
                                    console.log('Cookies');
                                    return null;
                                }}
                            />
                        )

                    </Switch>
                    </div>    </div> : <div />}
            <Switch>
                <Route
                    key={'Home'}
                    path={'/'}
                    exact={true}
                    component={() => {
                        console.log('Home');
                        return null;

                    }}
                />
                <Route
                    key={'Camere'}
                    path={'/rooms'}
                    exact={true}
                    component={() => {
                        console.log('Rooms');
                        setShownModal(true);
                        return <RoomsModal show={shownModal} barHandler={props.barHandler} modalHandler={modalHandler} />;
                    }}
                />
                <Route
                    key={'Restaurant'}
                    path={'/food'}
                    exact={true}
                    component={() => {
                        console.log('Food');
                        setShownModal(true);
                        return <FoodModal show={shownModal} barHandler={props.barHandler} modalHandler={modalHandler} />
                    }}
                />
                <Route
                    key={'Baia Mare'}
                    path={'/city'}
                    exact={true}
                    component={() => {
                        console.log('City');
                        setShownModal(true);
                        return <CityModal show={shownModal} barHandler={props.barHandler} modalHandler={modalHandler} />
                    }}
                />
                <Route
                    key={'Despre noi'}
                    path={'/about-us'}
                    exact={true}
                    component={() => {
                        console.log('About');
                        return null;
                    }}
                />
                <Route
                    key={'Rezerva acum'}
                    path={'/bookstage0'}
                    exact={true}
                    component={() => {
                        console.log('Book?')
                        setShownModal(true);
                        return <BookingModal show={shownModal} barHandler={props.barHandler} modalHandler={modalHandler} />;

                    }}
                />
                <Route
                    key={'Contact'}
                    path={'/contact'}
                    exact={true}
                    component={() => {
                        console.log('Contact');
                        setShownModal(true);
                        return <ContactModal show={shownModal} barHandler={props.barHandler} modalHandler={modalHandler} />
                    }}
                />
            </Switch>
        </StyleRoot></Router>

    );
};