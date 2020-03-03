import React from 'react';

const UserCard = (props) => {
    const user = props.user;
    return  (
        <React.Fragment>
            <img src={user.dp} alt="..."/>
            <h5>{user.name}</h5>
            <p>{user.bio}</p>
            <button className="btn btn-info" onClick={props.showModal}>Edit</button>
        </React.Fragment>
    );
}

export default UserCard;