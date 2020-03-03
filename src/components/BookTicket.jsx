import React, { Component } from 'react';

class BookTicket extends Component {

    bookTicket = () => {
            const tickets = document.getElementById(this.props.concert.id).value;
            if(tickets < 1) {
                alert("Atleast 1 ticket required!!");
                return;
            }
            this.props.bookTickets(this.props.concert.name, tickets);
            document.getElementById(this.props.concert.id).value = 0;
    }
    render() { 

        const {concert, hideBookingPane} = this.props;
        return ( 
            <div hidden={ hideBookingPane } className="card text-center" style={{backgroundColor: "#fbffb8"}}>
                <div className="card-body">
                    <label>Number of tickets:&nbsp;</label>
                    <input type="number" id={concert.id} min="1" max={concert.available}/><br/>
                    <button class="btn btn-link" onClick={ () => this.props.setBookingPane()}>Cancel</button>
                    <button class="btn btn-primary" onClick={ () => this.bookTicket()}>Ok</button>
                </div>
            </div>
         );
    }
}
 
export default BookTicket;