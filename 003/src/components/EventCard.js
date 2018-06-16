import React from 'react';

export default function EventCard({eventId, eventTitel, eventDescription, currentRegistrationCount, onRegistrationClickHandler}) {

    return (<div className="card">
                <div className="card-body">
                    <h5 className="card-title">{eventTitel}</h5>
                    <p className="card-text">{eventDescription}</p>
                    <p><strong>Currently registered:</strong> {currentRegistrationCount}</p>
                    <a href="#" className="btn btn-primary" onClick={e => onRegistrationClickHandler(eventId)}>Register</a>
                </div>
            </div>);
}

