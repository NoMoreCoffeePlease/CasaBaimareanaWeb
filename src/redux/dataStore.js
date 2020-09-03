import {applyMiddleware, createStore} from 'redux';
import dataReducer from './dataReducer';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'
import thunk from 'redux-thunk';

const persistConfig = {
    key: 'root',
    storage
}
const persistedReducer = persistReducer(persistConfig, dataReducer )

export const store = createStore (
    persistedReducer,
    applyMiddleware(thunk)
);

export const persistor = persistStore(store);