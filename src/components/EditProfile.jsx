import React, { Component } from 'react';

class EditProfile extends Component {
    state = {  }

    render() { 

        const showHideModal = this.props.show ? {display: 'block'} : {display: 'none'};

        return ( 
            <div style={showHideModal}>
                Edit here...
                <button onClick={this.props.handleClose}>
                    Save changes
                </button>
            </div>
        );
    }
}
 
export default EditProfile;