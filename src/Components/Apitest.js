import React, { useState, useEffect } from 'react';

const MyComponent = () => {

  const [countries, setCountries] = useState([]);

  useEffect(() => {
  
    const fetchData = async () => {
      try {
        const response = await fetch('https://restcountries.com/v2/all');
        const data = await response.json();
        setCountries(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []); 

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', maxWidth: '600px', margin: 'auto', padding: '20px' }}>
      <h1 style={{ color: '#333', textAlign: 'center' }}>World Countries</h1>
      <ul style={{ listStyleType: 'none', padding: '0' }}>
        {countries.map((country) => (
          <li key={country.name} style={{ marginBottom: '10px', padding: '10px', border: '1px solid #ddd', borderRadius: '5px', display: 'flex', alignItems: 'center' }}>
            <img
              src={country.flags.png}
              alt={`${country.name} flag`}
              style={{ width: '30px', height: '20px', marginRight: '10px' }}
            />
            <div>
              <strong style={{ color: '#007BFF' }}>{country.name}</strong>: {country.capital}
              <br />
              Population: {country.population}
              <br></br>
              Region: {country.region}
            
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MyComponent;
