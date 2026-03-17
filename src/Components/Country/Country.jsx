import React, { useState } from 'react';
import './Country.css'
const Country = ({country,handleVisitedCountries}) => {

    const [visited,setVisited]=useState(false);

   const handleButton=()=>{
        setVisited(visited ? false : true)
        handleVisitedCountries(country);
   }
    return (
        <div className='country'>
            <img src={country.flags.flags.png} alt="" />
            <h3>Name : {country.name.common}</h3>
            <p>Population: {country.population.population}</p>
            <p>Area: {country.area.area} {
                country.area.area > 300000 ? 'Big Country' : 'Small Country'
                }</p>

            <button className='button' onClick={handleButton}>{
                visited ? 'Visited' : 'Not Visited'
                }</button>
        </div>
    );
};

export default Country;