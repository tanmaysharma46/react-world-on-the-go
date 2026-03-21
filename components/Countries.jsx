import React, { use, useState } from 'react';
import Country from './Country';
import './countries.css'
const Countries = ({CountriesPromise}) => {


    const [visitedCountries,setVisitedCountries]=useState([]);


    //for flag button 
    const [visitedFlags,setVisitedFlags]=useState([]);




    const handleVisitedFlags=(flag)=>{
        console.log('flags need to be added',flag);
        const newVisitedFlags=[...visitedFlags,flag];
        setVisitedFlags(newVisitedFlags);
    }
    const handleVisitedCountries=(country)=>{
        console.log('handle visited country clicked',country);
        // visitedCountries.push(country);
        const newVisted=[...visitedCountries,country];
        setVisitedCountries(newVisted);
    }
    const countriesData =use(CountriesPromise);
    const countries=countriesData.countries;
    // console.log(countriesData.countries);
    return (
        <div>
            <h3>In the countries: {countries.length}</h3>
            <h4>Total country visited:{visitedCountries.length}</h4>
              <h4>total country visited flags : {visitedFlags.length}</h4>




            <ol>

{
                visitedCountries.map(country  =><li> key={country.cca3.cca3}{country.name.common}</li>)

}                
            </ol>
            <div>
                {
                    visitedFlags.map((flag,index)=><img key={index} src={flag}></img>)
                }
            </div>

            <div className='countries'>
                {
                countries.map(country=><Country key={country.cca3.cca3} 
                 handleVisitedCountries={handleVisitedCountries} 
                 handleVisitedFlags={handleVisitedFlags}
                 country={country}>
                </Country>)
            }
            </div>
        </div>
    );
};

export default Countries;