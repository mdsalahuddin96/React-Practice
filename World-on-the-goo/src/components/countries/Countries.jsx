import React, { use } from 'react';
import Country from '../country/Country';
import './countries.css'

const Countries = ({response}) => {
    const data=use(response)
    const countries=data.countries
    return (
        <div>
            <h1>All Countries in the world {countries.length}</h1>
            <h2>Total Visited Country:</h2>
            <div className='countries-container'>
                {countries.map(country=><Country key={country.ccn3.ccn3} country={country}></Country>)}
            </div>
        </div>
    );
};

export default Countries;