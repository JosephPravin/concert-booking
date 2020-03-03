import React from 'react';
import './Cities.css';

const Cities = (props) => {

    const allCities = [];
    
    props.concerts.forEach((city) => {
        if(allCities.indexOf(city.venue) === -1){
            allCities.push(city.venue)
        }
    });

    return (
        <React.Fragment>
            <h4 className="city-title"><strong>Cities:</strong></h4>

            <div className="btn-group" role="group" aria-label="Basic example">
                {
                    allCities.map(city => {
                        return <button className="btn btn-secondary" value={city} onClick={() => {props.setVenue(city)}} key={city}>{city}</button>
                    })
                }
            </div>
        </React.Fragment>
    );
}

export default Cities;