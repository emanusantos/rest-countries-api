import React, { useRef } from 'react';
import { FaSearch } from 'react-icons/fa';

export default function Filters() {

    const textInput = useRef(null);

    return(
        <div className="wrapper">
            <div className="searchbox">
                    <FaSearch color="#777" padding="1em"/>
                    <input ref={textInput} type="text" placeholder="Search for a country..."/>
            </div>
            <div className="filter">
                    <select id="dropdown">
                        <option value="" selected hidden>Filter by Region</option>
                        <option value="Africa">Africa</option>
                        <option value="America">America</option>
                        <option value="Asia">Asia</option>
                        <option value="Europe">Europe</option>
                        <option value="Oceania">Oceania</option>
                    </select>
            </div>
        </div>
    )
}