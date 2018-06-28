import {createStore, combineReducers} from 'redux';
import {ACTION_UPDATE_USER_PROFILE} from './actions';

/**
 * A "Reducer" which is capable to turn the current application status received into 
 * a new application status.
 *  
 * @param {*} state  During "Redux Store" initialization this parameter is undefined 
 * and the ES6 default parameter is taken to initialize the store value instead. 
 * Later executions of this function will contain the current application status before 
 * the "Action" has happened.
 * @param {*} action The "Action" which contains information about the application status change. 
 * An "Action" contains at least a type property. In addition each "Action" can have its own payload 
 * that contains information about the application status change.
 */
function updateUserProfileReducer(state = {firstname: '', lastname: ''}, action) {
    switch(action.type) {
        case ACTION_UPDATE_USER_PROFILE: 
            return action.userProfile;
        default:
            //If a "Reducer" is not responsible for an "Action" received it must 
            //return the current application status like we do in this default block.
            return state;
    }
}

/**
 * "Redux Store" initialization.
 * While initialization the "Redux Store" can be split into specific 
 * application status regions. For each region a specific "Reducer" can be assigned.
 */
const store = createStore(combineReducers({
    userProfile: updateUserProfileReducer
}));

export default store;