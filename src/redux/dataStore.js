import {applyMiddleware, createStore, combineReducers} from 'redux';
import dataReducer from './dataReducer';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'
import thunk from 'redux-thunk';
import FETCH_DATA_SUCCESS from './dataActions'

const persistConfig = {
    key: 'root',
    storage
}

// const rootReducer = (state, action) => {
//     if (action.type === 'FETCH_DATA_SUCCESS') {

//         storage.removeItem('persist:root')

//         state = undefined
//     }
//     return dataReducer(state, action)
// }

const persistedReducer = persistReducer(persistConfig, dataReducer )

export const store = createStore (
    persistedReducer,
    applyMiddleware(thunk)
);

export const persistor = persistStore(store);