import {
  FETCH_DATA_SUCCESS,
  FETCH_DATA_FAIL,
  RESET_DATA_SUCCESS,
  ADD_ROOM_NUMBERS,
} from "./dataActions";

const initialState = {
  startDate: undefined,
  endDate: undefined,
  adults: 0,
  children: 0,
  fail: false,
  resetStartDate: undefined,
  resetEndDate: undefined,
  resetAdults: 0,
  resetChildren: 0,
  simpleValue: 0,
  doubleValue: 0,
  tripleValue: 0,
  aptValue: 0,
};

export default function dataReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_DATA_SUCCESS: {
        console.log('payload',state,action.payload)
      return Object.assign({}, state, {
        startDate: action.payload.startDate,
        endDate: action.payload.endDate,
        adults: action.payload.adults,
        children: action.payload.children,
      });
    }
    case RESET_DATA_SUCCESS: {
      return Object.assign({},state,{
        startDate: initialState.resetStartDate,
        endDate: initialState.resetEndDate,
        adults: initialState.resetAdults,
        children: initialState.resetChildren,
      });
    }
    case ADD_ROOM_NUMBERS: {
      return {
        ...state,
        simpleValue: action.payload.simpleValue,
        doubleValue: action.payload.doubleValue,
        tripleValue: action.payload.tripleValue,
        aptValue: action.payload.aptValue,
      };
    }
    default:
      return state;
  }
}
