import React from 'react';

const Bookings = (props) => {
    return  (
                <div className="card">
                    <div className="card-body">
                    <h5 className="card-title">Bookings</h5>
                    {
                        props.user.tickets.map(element => {                        
                            return <div>
                                    <span><mark>{element.name}</mark></span>&nbsp;
                                    <span>{element.tickets}&nbsp;tickets</span>
                                    </div>
                        })
                    }
                    </div>
                </div>
            );
}

export default Bookings;