import React from 'react';
import EventCard from './EventCard';

export default class EventCardList extends React.Component {

    constructor(props) {
        super(props);

        let totalCount = 0;
        const eventDataStateCopy = [];

        // The props passed to the component should only be used for component configuration.
        // The INTERNAL STATE starts with a default value and can be changed by the component itself over time.
        
        //set INTERNAL STATE default values
        if(props.eventData != undefined && props.eventData.length != 0) {
            totalCount = props.eventData.reduce((prev, curr) => prev + curr.eventCurrentRegistrationCount, 0);
            
            // If we copy the props.eventData like this to state.eventData: Object.assign({}, props.eventData)
            // we copy the event-items (Objects) within props.eventData (Array) by reference.
            // As we want a deep copy of the event-items we need to go a level depper and apply the 
            // Object.assign to each event-item. By doing so we decouple the event-items in props 
            // completely from the INTERNAL STATE representation. 
            // This finally means a change of the INTERNAL STATE event-items will not affect the
            // event-items in props.
            for(var idx in props.eventData) {
                eventDataStateCopy.push(Object.assign({}, props.eventData[idx]));
            }
        }

        // the INTERNAL STATE
        this.state = {
            eventTotalRegistrationCount: totalCount,
            eventData: eventDataStateCopy
        };
    }

    /**
     * Callback for register button clicks triggered in one of the child elements of this component.
     * Each execution updates the INTERNAL STATE and therefore triggers the render() method.
     *  
     * @param {number} eventId 
     */
    onRegistrationClick(eventId) {
        this.setState(function(prevState, props){
           prevState.eventTotalRegistrationCount += 1;
           prevState.eventData = prevState.eventData.map(
               e => e.eventId !== eventId ? 
                    e : Object.assign(e, {eventCurrentRegistrationCount : e.eventCurrentRegistrationCount + 1})
            );

           return prevState;
        });
    };

    /**
     * Render itself and child elements.
     */
    render() {

        // Like already described in the constructor. The props are used for the component configuration.
        // However, the props are not changed by this component. All changes are handled in INTERNAL STATE.
        console.log(this.props);

        // The INTERNAL STATE which is initially configured in constructor and changes 
        // on each execution of "onRegistrationClick".
        const {eventData} = this.state;

        return (<div><strong>Overall registration count: </strong> {this.state.eventTotalRegistrationCount}
            <ul className="event-card-list">
                {eventData.map(e => 
                <EventCard 
                    key={e.eventId}
                    eventId={e.eventId}
                    eventTitle={e.eventTitle}
                    eventDescription={e.eventDescription}
                    currentRegistrationCount={e.eventCurrentRegistrationCount}
                    onRegistrationClickHandler={ (eventId)=> this.onRegistrationClick(eventId)}/>
                )}
            </ul>
        </div>);
    }
}