import React, { createContext, useEffect, useState } from 'react';
import { countryAll, countriesGet, countriesQuery } from '../constants';

export const CovidContext = createContext();

const CovidContextProvider = ({ children }) => {
    const [country, setInputCountry] = useState('worldwide');
    const [countryInfo, setCountryInfo] = useState({});
    const [countries, setCountries] = useState([]);

    useEffect(() => getCountriesAll(), []);
    useEffect(() => getCountriesData(), []);

    const getCountriesAll = () => {
        fetch(countryAll())
            .then((response) => response.json())
            .then((data) => {
                setCountryInfo(data);
            });
    };

    const getCountriesData = () => {
        fetch(countriesGet())
            .then((response) => response.json())
            .then((data) => {
                const countries = data.map((country) => ({
                    name: country.country,
                    value: country.countryInfo.iso2,
                }));
                setCountries(countries);
            });
    };

    const onCountryChange = async (q_countries) => {
        const url =
            q_countries === 'worldwide'
                ? countryAll()
                : countriesQuery(q_countries);
        await fetch(url)
            .then((res) => res.json())
            .then((data) => {
                setInputCountry(q_countries);
                setCountryInfo(data);
            })
            .catch((error) => console.log(error));
    };

    return (
        <CovidContext.Provider
            value={{ country, countryInfo, countries, onCountryChange }}
        >
            {children}
        </CovidContext.Provider>
    );
};

export default CovidContextProvider;
