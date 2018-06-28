import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as Actions from '../redux/actions';

class UserProfileForm extends React.Component {

    constructor(props) {
        super(props);
        this.onUserProfileSubmit = this.onUserProfileSubmit.bind(this);
    }
    onUserProfileSubmit(e) {
        e.preventDefault();
        const{updateUserProfile} = this.props;
 
        /**
         * Create an "Action" to update the user profile application status.
         * The "Redux Store" will dispatch the "Action" automatically because of our configuration.
         */
        updateUserProfile(
            {
                firstname: this.firstname.value, 
                lastname: this.lastname.value 
            });
    }
    render() {
        const {userProfile } = this.props;

        console.log(`Render user profile form. Firstname: ${userProfile.firstname} Lastname: ${userProfile.lastname}`);
        
        return <div id="user-profile">
            <form onSubmit={this.onUserProfileSubmit}>
            <div className="form-group">
                <label htmlFor="firstname">Frist name</label>
                <input type="text" className="form-control" id="firstname" 
                    placeholder="First name" ref={input => this.firstname = input}
                    defaultValue={userProfile.firstname}/>    
            </div>
            <div className="form-group">
                <label htmlFor="firstname">Last name</label>
                <input type="text" className="form-control" id="lastname" 
                    placeholder="Last name" ref={input => this.lastname = input}
                    defaultValue={userProfile.lastname}/>    
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    </div>;
    }

}

/**
 * This mapping function defines the application status region
 * within "Redux Store" the react component UserProfileForm is interested in.
 * It maps it to "userProfile"-key which is finally available within props of the component.
 * @param {*} state 
 */
function mapStateToProps(state) {
    return {
        userProfile: state.userProfile
    };
}

/**
 * This mapping function is just for convinience.
 * It binds all "Actions" created by "Action Creators" to the "Redux Store" dispatch-function. 
 * This means the "Redux Store" dispatch-fuction is automatically executed with the 
 * "Action" once its created by UserProfileForm. 
 * @param {*} dispatch 
 */
function mapDispatchToProps(dispatch) {
    return bindActionCreators(Actions, dispatch);
}

/**
 * The connect-function of "React Redux" now assembles and returns a so called 
 * "Higher-Order Component" of UserProfileForm. This component is finally exported for
 * further usage within the application.
 */
export default connect(mapStateToProps, mapDispatchToProps) (UserProfileForm);