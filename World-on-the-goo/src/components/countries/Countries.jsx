import React, { use, useState } from 'react';
import Country from '../country/Country';
import './countries.css'

const Countries = ({response}) => {
    const[visitedCountries,setVisitedCountries]=useState([]);
    const data=use(response)
    const countries = data?.countries || [];
    const handleVisitedCountries=(country,visited)=>{
        if(visited){
            setVisitedCountries([...visitedCountries,country])
        }
        else{
            const filterdArr=visitedCountries.filter(visit=>visit.ccn3.ccn3!==country.ccn3.ccn3)
            setVisitedCountries(filterdArr);
        }
    }
    return (
        <div>
            <h1>All Countries in the world {countries.length}</h1>
            <h2>Total Visited Country:{visitedCountries.length}</h2>
            <ol>
                {visitedCountries.map(visitedCountry=><li key={visitedCountry.ccn3.ccn3}>{visitedCountry.name.common}</li>)}
            </ol>
            <div className='countries-container'>
                {countries.map(country=><Country key={country.ccn3.ccn3} country={country} handleVisitedCountries={handleVisitedCountries}></Country>)}
            </div>
        </div>
    );
};

export default Countries;