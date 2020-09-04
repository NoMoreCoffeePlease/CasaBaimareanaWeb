import {applyMiddleware, createStore, combineReducers} from 'redux';
import dataReducer from './dataReducer';
import thunk from 'redux-thunk';


export const store = createStore (
    dataReducer,
    applyMiddleware(thunk)
);
