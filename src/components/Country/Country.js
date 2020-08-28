import React from 'react';
import './Country.css';

const Country = (props) => {
    // console.log(props.country)
    const {name, capital, region, population, flag} = props.country;
    const handleClick = props.handleClick;
    return (
        <div className="country-info">
            <h3>This is {name}</h3>
            <img src={flag} alt=""/>
            <h4>Capital: {capital}</h4>
            <p>Population: {population}</p>
            <p><small>Region: {region}</small></p>
            <button onClick = {() => handleClick(props.country)}>Add country</button>
        </div>
    );
};

export default Country;