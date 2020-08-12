import React, { createContext, useEffect, useState } from 'react';
import { countryAll, countriesGet, countriesQuery } from '../constants';

export const CovidContext = createContext();

const CovidContextProvider = ({ children }) => {
    const [countriesAll, setCountriesAll] = useState({});
    const [countries, setCountries] = useState([]);
    // const [country, setInputCountry] = useState('worldwide');

    useEffect(() => getCountriesAll(), []);
    useEffect(() => getCountries(), []);
    // useEffect(() => getCountriesById(), []);

    const getCountriesAll = () => {
        fetch(countryAll())
            .then((res) => res.json())
            .then((data) => {
                setCountriesAll(data);
            })
            .catch((error) => console.log(error));
    };

    const getCountries = () => {
        fetch(countriesGet())
            .then((res) => res.json())
            .then((data) => {
                const countries = data.map((country, key) => ({
                    id: key,
                    name: country.country,
                    value: country.countryInfo.iso2,
                }));
                setCountries(countries);
            })
            .catch((error) => console.log(error));
    };

    const getCountriesById = (q_countries) => {
        console.log('Pais: ' + q_countries);

        q_countries &&
            fetch(countriesQuery(q_countries))
                .then((res) => res.json())
                .then((data) => setCountries(data.countries))
                .catch((error) => console.log(error));
    };

    return (
        <CovidContext.Provider
            value={{ countriesAll, countries, getCountriesById }}
        >
            {children}
        </CovidContext.Provider>
    );
};

export default CovidContextProvider;
