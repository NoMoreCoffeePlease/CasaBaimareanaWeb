import React, {useState} from 'react';
import './App.css';
import {SideBar} from './components/SideBar/SideBar.js';
import { HomeScreen } from './screens/HomeScreen/HomeScreen';
import {Provider} from 'react-redux';
import {store, persistor} from './redux/dataStore';
import { PersistGate } from 'redux-persist/integration/react';



export const App = () => {
  const [shownBar, setShownBar] = useState(false)
  const barHandler = (bool)=>{
    setShownBar(bool)
} 

const [shownModal, setShownModal] = useState(false)
  
const modalHandler = (bool)=>{
    setShownModal(bool)
}
  
  return (
    <Provider store={store}> 
            <PersistGate loading={null} persistor={persistor}>

      <div className="App">
        <div className= "menuIconContainer"
          onClick = {() => {barHandler(true)}}
        ><img src={require('./svg/menu-black.svg')} alt = '' className = 'menuIcon' ></img></div>

        <HomeScreen modalHandler={modalHandler}/>

        <SideBar show={shownBar} barHandler={barHandler} modalHandler={modalHandler} /> : <div></div>
      </div>
      </PersistGate>

    </Provider>
  );
  
}

