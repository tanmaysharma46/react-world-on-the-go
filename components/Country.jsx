import React, { useState } from 'react';
import './country.css'

const Country = ({ country,handleVisitedCountries }) => {
    // console.log(country);
    const [visited, setVisited] = useState(false);
    // console.log(handleVisitedCountries);

    const handleVisited = () => {
        // if(visited){
        //     setVisited(false);
        // }
        // else{
        //     setVisited(true)
        // }
        setVisited(!visited? true : false );
        handleVisitedCountries();

    }

    return (
        <div className={`country ${visited?'country-visited':'country-nvisited'}`}>
            <img src={country?.flags?.flags?.png} alt={country.flags.flags.alt} />
            <h5>name : {country.name.common}</h5>
            <p>Population: {country.population.population}</p>
            <p>Area: {country.area.area} {country.area > 3000 ? 'Big country' : 'small country'}</p>
            <button className='btn' onClick={handleVisited}>
                {
                    visited ? 'visited' : 'No Visited'
                }
            </button>


        </div>
    );
};

export default Country;





/**
 * amra 4 vabe css use korte pari
 * 1.Inline css(style object )
 * 2.external css
 * 
 * 3.
 */