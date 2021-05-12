import React, { useState, useEffect } from 'react';

export default function Countries() {

    const [countries, setCountries] = useState([]);

    useEffect(() => {
        fetch('https://restcountries.eu/rest/v2/all')
            .then(res => res.json())
            .then(res => {
                setCountries(res);
            });
    });

    return(
        <div>
            <ul className="grid-container">
                {countries.map(item => (
                    <li key={item.id}  className="grid-item">
                        <div className="img-container">
                            <img src={item.flag} alt=""/>
                        </div>
                        <div className="info">
                            <h3>{item.name}</h3>
                            <p>Population: {item.population}</p>
                            <p>Region: {item.region}</p>
                            <p>Capital: {item.capital}</p>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}