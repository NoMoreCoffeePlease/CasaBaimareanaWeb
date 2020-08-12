import React from 'react';
import './SideBar.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

const ScreenMessage = (title) => {
return <h1 style={{textAlign: 'center', color: 'red'}}>{title}</h1>
}

export const SideBar = (props) => {
    const sideBarItems = [
        {title: 'Home', path:'/', exact: true },
        {title: 'Camere', path: '/rooms', exact: true },
        {title: 'Restaurant', path: '/food', exact: true },
        {title: 'Baia Mare', path: '/city', exact: true }, 
        {title: 'Despre noi', path: '/about', exact: true }, 
        {title: 'Rezerva acum', path: '/book', exact: true }, 
        {title: 'Contact', path: '/contact-us', exact: true }
    ]
    const sideBarFooter = [
        {title: 'ANPC', path:'/anpc'},
        {title: 'Privacy Policy', path: '/privacy'},
        {title: 'Cookies Policy', path: '/cookies'}
    ]
    return (
        <Router>
        <div
            className = "sideBar-frame"
        >
        
            <img src="./images/close_white.png" className="close_icon" alt=""></img>
            <div className = "sideBar-textFrame">
            <ul className = "sideBar-text">
                {sideBarItems.map( (item)=>
                <li key={item.title}>
                    <Link style={{textDecoration: 'none', color: 'white'}} to = {item.path}>{item.title} </Link>
                                            
                </li>)}
            </ul>
            <Switch> {
                sideBarItems.map((item) => 
                    <Route 
                        key={item.title}
                        path = {item.path}
                        exact = {item.exact}
                        component = {()=>ScreenMessage(item.title)  }
                    />
                )  
            }
            </Switch>
            </div>
            
            <div className='sideBar-footerContainer'>
            <a
                href="https://www.facebook.com/casa.baimareana.75"
                >
            <img src="./images/fb_white.png" className="fb_icon" alt=""></img></a>
            <ul className = "sideBar-footer">
                {sideBarFooter.map( (item)=>
                <li key={item.title}>
                   <Link style={{textDecoration: 'none', color: 'white'}} to = {item.path}>{item.title} </Link>
                </li>)}
            </ul>
            <Switch> {
                sideBarFooter.map((item) => 
                    <Route 
                        path = {item.path}
                        exact = {item.exact}
                        key={item.title}
                        component = {()=>ScreenMessage(item.title)}
                    />
                )  
            }
            </Switch>
            </div>
            
        </div></Router>
        
    );
};