import React, { Component } from 'react';

class NavBar extends Component {
    render() { 
        return (
        <nav className="navbar navbar-dark bg-dark">
            <a className="navbar-brand" href="#!">{this.props.header}</a>
            <span className="navbar-brand">Total bookings: {this.props.user.tickets.length}</span>
        </nav> );
    }
}
 
export default NavBar;