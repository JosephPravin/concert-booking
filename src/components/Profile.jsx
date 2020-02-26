import React, { Component } from 'react';
import EditProfile from './EditProfile';

class Profile extends Component {
    
    render() { 
        return ( 
            <div className="card" style={{"display":"inline"}}>
            <img src={this.props.user.dp} className="card-img-top" style={{"height":200, "width": 200}}/>
            <div className="card-body">
                <h5 className="card-title">{this.props.user.name}</h5>
                <p className="card-text">{this.props.user.bio}</p>
                
                <button type="button" className="btn btn-primary">
                    Edit
                </button>
            </div>
            <EditProfile/>
            </div>
         );
    }
}
 
export default Profile;