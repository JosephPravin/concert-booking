import React, { Component } from 'react';

class EditProfile extends Component {
    state = {  }

    render() { 
        if(!this.props.show){
            return null;
        }
        return ( 
            <div>
                Edit here...
            </div>
        );
    }
}
 
export default EditProfile;