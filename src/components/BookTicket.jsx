import React, { Component } from 'react';

class BookTicket extends Component {
    state = {  }
    render() { 

        const {concert, hideBookingPane} = this.props;
        return ( 
            <div hidden={ hideBookingPane }>
                <label htmlFor="count">Number of tickets</label>
                <input type="number" id={concert.id} min="1" max={concert.available}></input><br/>
                <button onClick={ e => {
                    this.props.bookTickets(concert.name, document.getElementById(concert.id).value);
                    document.getElementById(concert.id).value = 0;
                    }}>Ok</button>
            </div>
         );
    }
}
 
export default BookTicket;