import React, { Component } from 'react';
import Concert from './Concert';
import Cities from './Cities';


class Concerts extends Component {

    constructor(props) {
        super(props);
        this.state = {
            venue: ""
        }
    }

    // filter for which city to display
    setVenue = venue => {
        debugger;
        this.setState({venue});
    }

    render() {

        let { concerts, handleBooking } = this.props;


        return (
                <React.Fragment>
                    <Cities setVenue = {this.setVenue} concerts={concerts}/>
                    {
                    concerts.concerts.map(concert => {
                        if(this.state.venue === concert.venue) {
                            return <Concert key={concert.id} concert={concert} handleBooking={handleBooking}></Concert>
                        } else {
                            return null;
                        }
                    }
                    )
                    }
                </React.Fragment>
            );
           
    }
}
 
export default Concerts;