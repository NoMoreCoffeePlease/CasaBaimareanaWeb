import {FETCH_DATA_SUCCESS, FETCH_DATA_FAIL} from './dataActions';
import { isToday } from 'date-fns';

const initialState = {
    startDate: null,
    endDate: null,
    adults: 0,
    children: 0,
    fail: false
};

export default function dataReducer (state = initialState, action) {
    console.log(action); 
    switch (action.type) {
        case FETCH_DATA_SUCCESS: {
            return {
                ...state,
                    startDate: action.payload.startDate,
                    endDate: action.payload.endDate,
                    adults: action.payload.adults,
                    children: action.payload.children,
                    }
        
        };
        case FETCH_DATA_FAIL: {
            return {
                ...state,
                fail: true
            }
        };
        default: return state;
    }
}