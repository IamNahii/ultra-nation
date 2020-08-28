import React, { useState, useEffect } from 'react';
import './App.css';
import Country from './components/Country/Country';

function App() {
  const [countries, setCountries] = useState([]);
  const [cart, setCart] = useState([])
  useEffect(() =>{
    fetch('https://restcountries.eu/rest/v2/all')
    .then(res => res.json())
    .then(data => setCountries(data))
  }, [])

  const handleClick = (countries) => {
    const newCart = [...cart, countries]
    setCart(newCart)
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Country Loaded: {countries.length}</h1>
        <h3>Country added: {cart.length}</h3>
        <ul>
          {
            countries.map(country => <Country country={country} handleClick = {handleClick} key={country.alpha3Code}></Country>)
          }
        </ul>
      </header>
    </div>
  );
}

export default App;
