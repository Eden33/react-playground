import React from 'react';
import {connect} from 'react-redux';

function HeadMenu({userProfile}) {
    return (<div id="head-menu">Hello Eden33 ({userProfile.firstname} {userProfile.lastname})</div>
    );
}

/**
 * This mapping function defines the application status region
 * within "Redux Store" the react component HeadMenu is interested in.
 * It maps it to "userProfile"-key which is finally available within props of the component.
 * @param {*} state 
 */
function mapStateToProps(state) {
    return {
        userProfile: state.userProfile
    };
}

/**
 * The connect-function of "React Redux" now assembles and returns a so called 
 * "Higher-Order Component" of HeadMenu. This component is finally exported for
 * further usage within the application.
 */
export default connect(mapStateToProps) (HeadMenu);