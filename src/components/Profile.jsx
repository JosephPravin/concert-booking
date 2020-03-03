import React, { Component } from 'react';
import EditProfile from './EditProfile';
import Bookings from './Bookings';
import UserCard from './UserCard';
import './Profile.css';


class Profile extends Component {

    state = { openModal: false };

    showModal = () => {
        this.setState({openModal: true});
    }

    hideModal = () => {
        this.setState({openModal: false});
    }
    
    render() { 
        const { user, onProfileEdit } = this.props;
        
        return ( 
            <div>
                <UserCard user= {user} showModal={this.showModal}/>
                <Bookings user={user}/>
                <EditProfile user={user} show={this.state.openModal} handleClose={this.hideModal} onProfileEdit={onProfileEdit}/>
            </div>
         );
    }
}
 
export default Profile;