import React from 'react';

const UserCard = (props) => {
    const user = props.user;
    return  (
        <React.Fragment>
            <img src={user.dp} alt="..."/>
            <h5>{user.name}</h5>
            <p>
                {user.bio}&nbsp;
                <button className="btn btn-info" onClick={props.showModal}>Edit Profile</button>
            </p>
        </React.Fragment>
    );
}

export default UserCard;