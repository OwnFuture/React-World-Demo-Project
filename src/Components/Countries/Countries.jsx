import React, { use, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css'

const Countries = ({countriesPromise}) => {

    const [visitedCountries,setVisitedCountries]=useState([]);

    const handleVisitedCountries=(country)=>{
        const newVisitedCountries=[...visitedCountries,country];
        setVisitedCountries(newVisitedCountries);
    }

    const countriesData=use(countriesPromise);
    const countries=countriesData.countries;
    
    return (
        <div>
            <h1>In the Countries: {countries.length}</h1>
            <h2>Total Country Visited: {visitedCountries.length}</h2>
            <ol>
                {
                    visitedCountries.map(country=><li>{country.name.common}</li>)
                }
            </ol>
           <div className='countries'>
                {
                countries.map(country=><Country handleVisitedCountries={handleVisitedCountries} country={country}></Country>)
                }
           </div>
        </div>
    );
};

export default Countries;