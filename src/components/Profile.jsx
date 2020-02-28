import React, { Component } from 'react';
import EditProfile from './EditProfile';
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
        const { user } = this.props;
        return ( 
            <div className="profile">
                <img src={user.dp} alt="..." id="profilepic"/>
                <div>
                    <h5>{user.name}</h5>
                    <p>{user.bio}</p>
                    <button className="btn btn-info" onClick={this.showModal}>Edit</button>
                </div>
                <EditProfile user={user} show={this.state.openModal} handleClose={this.hideModal}/>
            </div>
         );
    }
}
 
export default Profile;