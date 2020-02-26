import React, { Component } from 'react';
import Concert from './Concert';


class Concerts extends Component {

    constructor(props) {
        super(props);
        this.state = {
            venue: ""
        }
    }

    // filter for which city to display
    setVenue = venue => {
        this.setState({venue});
    }

    render() {

        let { concerts, handleBooking } = this.props;


        return (
                <React.Fragment>
                    <mark>Cities:</mark><br/>
                    <button className="btn btn-secondary" value="chennai" onClick={() => {this.setVenue('Chennai')}}>Chennai</button>
                    <button className="btn btn-secondary" value="bangalore" onClick={() => {this.setVenue('Bangalore')}}>Bangalore</button>

                    {
                    concerts.concerts.map(concert => {
                        if(this.state.venue === concert.venue) {
                            return <Concert key={concert.id} concert={concert} handleBooking={handleBooking}></Concert>
                        }
                    }
                    )
                    }
                </React.Fragment>
            );
           
    }
}
 
export default Concerts;