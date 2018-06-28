import React from 'react';
import HeadMenu from './HeadMenu';
import UserProfileForm from './UserProfileForm';

export default function Layout(props) {
    return (<div className="container-fluid">
            <HeadMenu/>
            <UserProfileForm/>
            </div>);
}
