import React, { useState } from 'react';
import './country.css'
const Country = ({country,handleVisitedCountries}) => {
    const [visited,setVisited]=useState(false);
    const handleVisited=()=>{
        const newVisited=!visited;
        setVisited(newVisited)
        handleVisitedCountries(country,newVisited)
        // console.log(country);
    }
    const languages=Object.values(country.languages.languages);
    return (
        <div className={visited?'visited country-card':'country-card'}>
            <img src={country.flags?.flags?.png} alt={country.flags.flags.alt}/>
            <div>
                <h3>Name: {country.name.common}</h3>
                <p>Capital: {country.capital.capital}</p>
                <p>Population: {country.population.population}{country.population.population>3000000&&' #Big country'}</p>
            </div>
            <div style={{display:'flex', gap:'2px'}}>
                <p>Language:</p>
                <div className='language-container'>
                    {languages.map((language,index)=><span key={index} className='language'>{language}</span>)}
                </div>
            </div>
            <div>
                <button className={visited?'btn visited-btn':'btn'} onClick={handleVisited}>{visited?'Visited':'Not Visited'}</button>
            </div>
        </div>
    );
};

export default Country;