import React, { useState } from 'react'

const Country = () => {
    const countries = [
        { name: "India", value: "IN", cities: ["Mumbai", "Delhi", "Bangalore"] },
        { name: "USA", value: "US", cities: ["New York", "Los Angeles", "Chicago"] },
        { name: "UK", value: "UK", cities: ["London", "Manchester", "Liverpool"] },
        { name: 'Bangladesh', value: 'BD', cities: ['Dhaka', 'Chittagong', 'Khulna'] }
    ];

    const [selectedCountry, setSelectedCountry] = useState('');
    const setSelectedCountryHandler = (e) => {
        setSelectedCountry(e.target.value);
    }
    return (
        <div>
            <h1>React App</h1>
            <label htmlFor="">Please select your country</label>
            <select value={selectedCountry} onChange={setSelectedCountryHandler} name="" id="">
                <option hidden>Select</option>
                {
                    countries.map((country, index) => (
                        <option key={index} value={country.value}>{country.name}</option>
                    ))
                }
            </select>
            <hr />
            <h4>{selectedCountry}</h4>
            <select name="" id="">
                {
                    countries.find((country, index) => country.value === selectedCountry)?.cities.map((city, index) => (
                        <option key={index} value={city}>{city}</option>
                    ))
                }
            </select>

        </div>
    );
}

export default Country