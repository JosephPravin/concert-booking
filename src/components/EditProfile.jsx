import React, { Component } from 'react';
import Modal from 'react-modal';

class EditProfile extends Component {

    state = {
        name: this.props.user.name,
        bio: this.props.user.bio,
        dp: this.props.user.dp
    };

    saveUser = () => {
        this.props.onProfileEdit({
            id: this.props.user.id,
            name: document.getElementById("name").value,
            // bio: document.getElementById("bio").value,
            // dp: document.getElementById("dp").value
        });
    }

    render() { 

        const { show, handleClose } = this.props;

        const customStyles = {
            content : {
              top: '50%',
              left: '50%',
              right: 'auto',
              bottom: 'auto',
              marginRight: '-50%',
              transform: 'translate(-50%, -50%)'
            }
          };

        return ( 
            <Modal isOpen={show} onRequestClose={handleClose} style={customStyles} ariaHideApp={false}>
                    <form action="" className="form-group">
                        Name: <input id="name" type="text" className="form-control"/><br/>
                        {/* Bio: <input id="bio" type="text" className="form-control"/><br/>
                        Picture: <input id="dp" type="file" accept="image/jpg" className="form-control"/><br/> */}
                        <button className="btn btn-primary" onClick={this.saveUser}>
                            Save changes
                        </button>
                    </form>
            </Modal>
        );
    }
}
 
export default EditProfile;