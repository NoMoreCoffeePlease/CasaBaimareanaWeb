import React from 'react';
import './SideBar.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import BookingModal from '../../screens/BookingModal/BookingModal';

export const SideBar = (props) => {

    return (
        <Router>
            <div
                className="sideBar-frame"
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
                            <Link className="sideBar-book" style={{ textDecoration: 'none' }} to='/book?stage0'>Rezerva acum</Link></li>
                        <li key={'Contact'}>
                            <Link className="sideBar-text" style={{ textDecoration: 'none' }} to='/contact'>Contact</Link></li>
                    </ul>
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
                                return null;
                            }}
                        />
                        <Route
                            key={'Restaurant'}
                            path={'/food'}
                            exact={true}
                            component={() => {
                                console.log('Food');
                                return null;
                            }}
                        />
                        <Route
                            key={'Baia Mare'}
                            path={'/city'}
                            exact={true}
                            component={() => {
                                console.log('City');
                                return null;
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
                            path={'/book'}
                            exact={true}
                            component={() => {
                                console.log('Book');
                                return null;
                            }}
                        />
                        <Route
                            key={'Contact'}
                            path={'/contact'}
                            exact={true}
                            component={() => {
                                console.log('Contact');
                                return null;
                            }}
                        />
                    </Switch>
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
                </div>

            </div></Router>

    );
};