import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import store from './redux/store';
import Layout from './components/Layout';

/**
 * This is a demonstration of "React Redux" an implementation of the flux architecture.
 * "React Redux" introduces a stric event flow that propagates and changes the application status.
 * In this tiny example application this approach looks cumbersome and yes it is.
 * However, once your application is growing this approach turns into a benefit and it will
 * reduce complexity of application status changes. 
 * 
 * The event flow only goes into one direction. It starts from so called "Action Creators" which
 * are dedicated functions. An "Action Creator" function creates an "Action" which contains
 * information about the application status change. Once the "Action" is created the "Redux Store" 
 * is dispatching it to so called "Reducers". "Reducers" are again dedicated functions.
 * Once an "Action" is dispatched each "Reducer" receives it alongside with the current application
 * status. If a "Reducer" is responsible for the "Action" received it will decide how to change the 
 * current application status and finally return the new status to the "Redux Store".
 * 
 * After all "Reducers" are executed the "Redux Store" will propagate the new application status 
 * to all react components registered for the specific application status.
 * This propagation is done over the react properties and finally will result in re-rendering of the 
 * specific react components.
 */

ReactDOM.render(
    /**
     * The "Redux Provider" manages the "Redux Store" created and handles propagation of the props to he  
     * "Higher-Order Components" available in the child elements (in our case UserProfileForm).
     */
    <Provider store={store}>
        <Layout/>
    </Provider>,
    document.getElementById('root-container')
);