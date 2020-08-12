import React, { createContext, useEffect, useState } from 'react';
import { countryAll, countriesGet } from '../constants';

export const CovidContext = createContext();

const CovidContextProvider = ({ children }) => {
    const [countriesAll, setCountriesAll] = useState({});
    const [countries, setCountries] = useState([]);

    useEffect(() => getCountriesAll(), []);
    useEffect(() => getCountries(), []);

    const getCountriesAll = () => {
        fetch(countryAll())
            .then((res) => res.json())
            .then((data) => {
                setCountriesAll(data);
            })
            .catch(error => console.log(error));
    };

    const getCountries = () => {
        fetch(countriesGet())
            .then(res => res.json())
            .then(data => {
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
        <CovidContext.Provider value={{ countriesAll, countries }}>
            {children}
        </CovidContext.Provider>
    )
};

export default CovidContextProvider;