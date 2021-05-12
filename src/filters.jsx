import React from 'react';
import { FaSearch } from 'react-icons/fa';

export default function Filters() {
    return(
        <div className="wrapper">
            <div className="searchbox">
                <form id="search">
                    <FaSearch color="#777" padding="1em"/>
                    <input type="text" placeholder="Search for a country..."/>
                </form>
            </div>
            <div className="filter">
                <form id="filter">
                    <input list="dropdown" placeholder="Filter by Region"/>
                    <datalist id="dropdown">
                        <option value="Africa"></option>
                        <option value="America"></option>
                        <option value="Asia"></option>
                        <option value="Europe"></option>
                        <option value="Oceania"></option>
                    </datalist>
                </form>
            </div>
        </div>
    )
}