import {FETCH_DATA_SUCCESS, FETCH_DATA_FAIL} from './dataActions';
import {connect} from 'react-redux';
import React from 'react';

const dataFunction = ( {startDate, endDate, errorData, addData} ) => {
    return <span></span>
}

const mapStatetoProps = (state) => {
    const {startDate, endDate, fail} = state;
    return {startDate, endDate, fail};
};

const mapDispatchtoProps = dispatch => ({
    addData: (startDate, endDate) => dispatch({type: FETCH_DATA_SUCCESS, payload: {startDate, endDate}}),
    errorData: (error) => dispatch ({type: FETCH_DATA_FAIL, payload: error})
})

export default connect (mapStatetoProps, mapDispatchtoProps)(dataFunction);