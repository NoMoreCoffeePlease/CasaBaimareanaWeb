import React from 'react';
import './App.css';
import {SideBar} from './components/SideBar/SideBar.js';
import { HomeScreen } from './screens/HomeScreen/HomeScreen';
import {Provider} from 'react-redux';
import {store} from './redux/dataStore';
import DataDispatch from './redux/dataDispatch';

export const App = () => {
  return (
    <Provider store={store}> 
     
      <div className="App">
        
        <HomeScreen />
        <DataDispatch />
        <SideBar />
      </div>

    </Provider>
  );
}

