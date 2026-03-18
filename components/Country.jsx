import React from 'react';

const Country = ({country}) => {
    console.log(country);
    
   
    return (
        <div className='card'>
            <img src={country?.flags?.flags?.png} alt={country.flags.flags.alt} />
            <h1>name : {country.name.common}</h1>
            <p>Population: {country.population.population}</p>
            <p>Area: {country.area.area}</p>
            
        </div>
    );
};

export default Country;