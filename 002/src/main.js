import React from 'react';
import ReactDOM from 'react-dom';

class EventCard extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            registrationCount: this.props.currentRegistrationCount
        }
    }

    componentDidMount() {
        this.timeID = setInterval(
            () => this.updateRegistrationCount(),
            5000
        )
    }

    componentWillUnmount() {
        clearInterval(this.timeID);
    }

    updateRegistrationCount() {
        this.setState((currentState, currentProps) => ({
            registrationCount: currentState.registrationCount + 10
        }))
    }

    render() {
        return <div className="card">
        <div className="card-body">
        <h5 className="card-title">{this.props.eventTitel}</h5>
        <p className="card-text">{this.props.eventDescription}</p>
        <p><strong>Currently registered:</strong> {this.state.registrationCount}</p>
        <a href="#" className="btn btn-primary">Register</a>
        </div>
    </div>
    }
}

ReactDOM.render(
  <EventCard 
    eventTitel="This is a demo Event" 
    eventDescription="Register for this demo event and get a 10 % discount as a premium member!"
    currentRegistrationCount={3000}/>,

  document.getElementById('root-container')
);