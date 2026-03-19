import React, { use, useState } from 'react';
import Country from './Country';
import './countries.css'
const Countries = ({CountriesPromise}) => {

    const [visitedCountries,setVisitedCountries]=useState([]);

    const handleVisitedCountries=()=>{
        console.log('handle visited country clicked');
    }
    const countriesData =use(CountriesPromise);
    const countries=countriesData.countries;
    // console.log(countriesData.countries);
    return (
        <div>
            <h3>In the countries: {countries.length}</h3>
            <h4>Total country visited</h4>

            <div className='countries'>
                {
                countries.map(country=><Country key={country.cca3.cca3} 
                 handleVisitedCountries={handleVisitedCountries} country={country}>
                </Country>)
            }
            </div>
        </div>
    );
};

export default Countries;