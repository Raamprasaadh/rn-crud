import { combineReducers } from 'redux';

import { DATA_AVAILABLE } from '../actions'

let dataState = { data: [], loading: true };

const dataReducer = (state = dataState, action) => {
    switch (action.type) {
        case DATA_AVAILABLE:
            state = Object.assign({}, state, { data: action, loading: false });
            return state;
        default:
            return state;
    }
};

//combine all reducers

const ROOT_REDUCER = combineReducers({
    dataReducer
    //add in future
});

export default ROOT_REDUCER;