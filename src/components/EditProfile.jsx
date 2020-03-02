import React, { Component } from 'react';
import Modal from 'react-modal';

class EditProfile extends Component {

    state = {
        name: this.props.user.name,
        bio: this.props.user.bio,
        dp: this.props.user.dp
    };

    saveUser() {
        console.log(document.getElementById("name").value);
        console.log(document.getElementById("bio").value);
        console.log(document.getElementById("dp").value);
    }

    render() { 

        const { show, handleClose } = this.props;

        return ( 
            <Modal isOpen={show} onRequestClose={handleClose} ariaHideApp={false}>
                    <form action="" className="form-group">
                        Name: <input id="name" type="text" className="form-control"/><br/>
                        Bio: <input id="bio" type="text" className="form-control"/><br/>
                        Picture: <input id="dp" type="text" className="form-control"/><br/>
                        <button className="btn btn-primary" onClick={this.saveUser}>
                            Save changes
                        </button>
                    </form>
            </Modal>
        );
    }
}
 
export default EditProfile;