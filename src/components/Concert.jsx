import React, { Component } from 'react';
import BookTicket from './BookTicket';

class Concert extends Component {

    state = {
        hideBookingPane: true
    }

    bookTickets = (name, count) => {
        this.props.handleBooking(name, count);
    }

    // to toggle view
    setBookingPane = () => {
        this.setState({hideBookingPane: !this.state.hideBookingPane})
    }

    render() { 

        let { concert } = this.props;
        return ( 
            <div className="card" style={{width: '18rem'}}>
            <div className="card-body">
                <p className="card-title">{concert.name} <span style={{float: "right"}}>{concert.venue}</span></p>
                <span className="card-text bg-light">Total Seats: {concert.seats}</span><br/>
                <span className="card-text bg-light">Available: {concert.available}</span>
                <input className={concert.available > 0 ? "btn btn-success" : "btn btn-danger"} type="button" style={{float: "right"}} disabled={concert.available === 0}  value={ concert.available ? "BOOK" : "FULL"} onClick={e=> this.setBookingPane()}></input>
            </div>
            <BookTicket concert={concert} hideBookingPane={this.state.hideBookingPane} setBookingPane={this.setBookingPane} bookTickets={this.bookTickets}/>
        </div>
        );
    }
}
 
export default Concert;