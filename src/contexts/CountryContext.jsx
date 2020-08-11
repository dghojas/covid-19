import React, { createContext, useState, useEffect } from 'react';
import { covidAllGet, covidCountriesGet } from './../constants';

export const CountryContext = createContext();

const CountryContextProvider = ({ children }) => {
    const [countryAll, setCountryAll] = useState({});
    const [countries, setCountries] = useState([]);

    useEffect(() => getCountriesAll(), []);
    useEffect(() => getCountries(), []);

    const getCountriesAll = () => {
        fetch(covidAllGet())
            .then((res) => res.json())
            .then((data) => {
                setCountryAll(data);
            })
            .catch(error => console.log(error));
    };

    const getCountries = () => {
        fetch(covidCountriesGet())
            .then(res => res.json())
            .then(data => {
                console.log(data);
                const countries = data.map((country, key) => ({
                    id: key,
                    name: country.country,
                    value: country.countryInfo.iso2
                }));
                setCountries(countries);
            })
            .catch(error => console.log(error));
    };
    return (
        <CountryContext.Provider value={{ countryAll, countries }}>
            {children}
        </CountryContext.Provider>
    );
};

export default CountryContextProvider;