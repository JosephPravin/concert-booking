import React, { Component } from 'react';

class NavBar extends Component {
    render() { 
        return (
        <nav className="navbar navbar-dark bg-dark">
            <a className="navbar-brand" href="#">{this.props.header}</a>
            {/* <span className="btn btn-outline-light my-2 my-sm-0" >{this.props.users.filter(c => c.tasks.length > 0).length} users have tasks</span> */}
        </nav> );
    }
}
 
export default NavBar;