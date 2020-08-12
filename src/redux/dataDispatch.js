import {FETCH_DATA_SUCCESS, FETCH_DATA_FAIL} from './dataActions';
import {connect} from 'react-redux';
import React from 'react';

const dataFunction = ( {name, fail, addData} ) => {
    addData ('Da, da, da, Otelu ie veatza mia!')
    return <div>
        <span style={{color: 'red'}}>{name}</span>
    </div>
}

const mapStatetoProps = (state) => {
    const {name, fail} = state;
    return {name, fail};
};

const mapDispatchtoProps = dispatch => ({
    addData: (newName) => dispatch({type: FETCH_DATA_SUCCESS, payload: newName})
    
})

export default connect (mapStatetoProps, mapDispatchtoProps)(dataFunction);