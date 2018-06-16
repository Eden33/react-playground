import React from 'react';
import ReactDOM from 'react-dom';
import Layout from './components/Layout';
import EventCardList from './components/EventCardList';
import EventCard from './components/EventCard';

/**
 * This is a demonstration of some best practices in simple component communication.
 * In the REACT framework you propagate properties top-down and events to bottom-up.
 * 
 * In addition it's important to understand the state paradigm and how to use it correctly.
 * The state paradigm I think I demonstrate well in EventCardList.js.
 */

const props = {
    eventData: [
        {
            eventId: 1,
            eventTitle: 'This is demo Event Nr. 1',
            eventDescription: 'Register for this demo event and get a 10 % discount as a premium member!',
            eventCurrentRegistrationCount: 2
        },
        {
            eventId: 2,
            eventTitle: 'This is demo Event Nr. 2',
            eventDescription: 'Register for this demo event and get a 25% discount as a premium member!',
            eventCurrentRegistrationCount: 3
        }          
    ]
};

ReactDOM.render(
    <Layout {...props} />,
    document.getElementById('root-container')
);