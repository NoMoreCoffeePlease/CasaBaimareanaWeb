import {FETCH_DATA_SUCCESS, FETCH_DATA_FAIL} from './dataActions';

const initialState = {
    name: '',
    fail: false
};

export default function dataReducer (state = initialState, action) {
    switch (action.type) {
        case FETCH_DATA_SUCCESS: {
            return {
                ...state,
                name: action.payload
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