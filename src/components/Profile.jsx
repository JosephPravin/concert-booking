import React, { Component } from 'react';
import EditProfile from './EditProfile';

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
            <div className="card" style={{"display":"inline"}}>
            <img src={user.dp} className="card-img-top" style={{"height":200, "width": 200}}/>
            <div className="card-body">
                <h5 className="card-title">{user.name}</h5>
                <p className="card-text">{user.bio}</p>
                
                <button type="button" className="btn btn-primary" onClick={this.showModal}>
                    Edit
                </button>
            </div>
            <EditProfile user={user} show={this.state.openModal} handleClose={this.hideModal}/>
            </div>
         );
    }
}
 
export default Profile;