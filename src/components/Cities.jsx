import React from 'react';

const Cities = (props) => {

    const allCities = [];
    
    props.concerts.concerts.forEach((city) => {
        if(allCities.indexOf(city.venue) === -1){
            allCities.push(city.venue)
        }
    });
    
    debugger;

    return (
        <React.Fragment>
            <mark>Cities:</mark><br/>

            <div class="btn-group" role="group" aria-label="Basic example">
                {
                    allCities.map(city => {
                        return <button className="btn btn-secondary" value={city} onClick={() => {props.setVenue(city)}}>{city}</button>
                    })
                }
            </div>
        </React.Fragment>
    );
}

export default Cities;