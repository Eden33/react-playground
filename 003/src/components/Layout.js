import React from 'react';
import EventCardList from './EventCardList';

export default function Layout(props) {
    return (<div>
            <EventCardList {...props} />
            </div>);
}
